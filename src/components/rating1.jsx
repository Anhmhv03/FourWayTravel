import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
const rating1 = () => {
	const [value, setValue] = React.useState(2);

	return (
		<div>
			<Box
				sx={{
					'& > legend': { mt: 2 },
				}}
			>
				<Rating
					name="simple-controlled"
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				/>
			</Box>
		</div>
	);
};

export default rating1;
