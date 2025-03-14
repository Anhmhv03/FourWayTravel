import { Box, Container, Tab, Tabs } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const Support = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Container
			maxWidth="md"
			className=" mt-6 "
		>
			<Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					sx={{ borderRight: 1, borderColor: 'divider' }}
				>
					<Tab
						label="Item One"
						{...a11yProps(0)}
					/>
					<Tab
						label="Item Two"
						{...a11yProps(1)}
					/>
					<Tab
						label="Item Three"
						{...a11yProps(2)}
					/>
				</Tabs>
				<TabPanel
					value={value}
					index={0}
				>
					Item One
				</TabPanel>
				<TabPanel
					value={value}
					index={1}
				>
					Item Two
				</TabPanel>
				<TabPanel
					value={value}
					index={2}
				>
					Item Three
				</TabPanel>
				<TabPanel
					value={value}
					index={3}
				>
					Item Four
				</TabPanel>
				<TabPanel
					value={value}
					index={4}
				>
					Item Five
				</TabPanel>
				<TabPanel
					value={value}
					index={5}
				>
					Item Six
				</TabPanel>
				<TabPanel
					value={value}
					index={6}
				>
					Item Seven
				</TabPanel>
			</Box>
		</Container>
	);
};

export default Support;
