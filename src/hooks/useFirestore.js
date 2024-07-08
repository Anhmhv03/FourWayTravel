import { firestore } from '@/utils/firebase.config';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { get, isEmpty, map } from 'lodash';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

const useDocsQuery = (col) =>
	useQuery({
		queryKey: [col],
		queryFn: async () => {
			const colRef = collection(firestore, col);

			const snapshot = await getDocs(colRef);

			return map(get(snapshot, 'docs', []), (doc) => ({
				id: doc.id,
				...doc.data(),
			}));
		},
	});

const useDocQuery = (col, id) =>
	useQuery({
		queryKey: [col, id],
		queryFn: async () => {
			if (!id) return;
			const docRef = doc(firestore, col, id);

			const snapshot = await getDoc(docRef);

			return {
				id: snapshot.id,
				...snapshot.data(),
			};
		},
	});

const useAddDoc = (col, options) => {
	const queryClient = useQueryClient();
	const colRef = collection(firestore, col);

	return useMutation({
		mutationFn: async (data) => {
			const res = await addDoc(colRef, data);

			return res?.id;
		},
		onSuccess: (id) => {
			if (!isEmpty(id)) queryClient.invalidateQueries([col]);
			options?.successMsg && toast.success(options?.successMsg);
		},
		onError: () => options?.errorMsg && toast.error(options?.errorMsg),
	});
};

const useEditDoc = (col, options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async ({ id, data }) => {
			if (isEmpty(id)) return undefined;

			await updateDoc(doc(firestore, col, id), data);

			return id;
		},
		onSuccess: (id) => {
			if (!isEmpty(id)) {
				queryClient.invalidateQueries([col]);
				queryClient.invalidateQueries([col, id]);
			}

			options?.successMsg && toast.success(options?.successMsg);
		},
		onError: () => options?.errorMsg && toast.error(options?.errorMsg),
	});
};

export const useDeleteDoc = (col, options) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (id) => {
			if (isEmpty(id)) return toast.error('Không tìm thấy id');

			await deleteDoc(doc(firestore, col, id));
		},
		onSuccess: () => {
			queryClient.invalidateQueries([col]);
			options?.successMsg && toast.success(options?.successMsg);
		},
		onError: () => options?.errorMsg && toast.error(options?.errorMsg),
	});
};

export { useDocsQuery, useDocQuery, useAddDoc, useEditDoc };
