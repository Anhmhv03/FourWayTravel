import { useDocsQuery } from '@/hooks/useFirestore';
import HotLayout from '@/layout/HotLayout';
import { Link } from 'react-router-dom';

const Hot = () => {
	const { data: luuTru } = useDocsQuery('luuTru');
	const renderStars = (soSao) => {
		let stars = [];
		for (let i = 0; i < soSao; i++) {
			stars.push(
				<i
					key={i}
					className="fa-solid fa-star text-white-100"
				></i>,
			);
		}
		return stars;
	};
	const hotLuuTru = luuTru.filter((item) => item.hot === true);
	return (
		<>
			<HotLayout
				luuTru={luuTru}
				hotLuuTru={hotLuuTru}
				renderStars={renderStars}
				Link={Link}
			/>
		</>
	);
};

export default Hot;