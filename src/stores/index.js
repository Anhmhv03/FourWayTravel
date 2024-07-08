import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {},
	middleware: (getDMW) =>
		getDMW({
			serializableCheck: false,
		}),
});
