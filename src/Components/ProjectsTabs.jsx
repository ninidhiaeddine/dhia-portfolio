import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WebIcon from '@mui/icons-material/Web';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TabView from '../Components/TabView';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
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

export default function ProjectsTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="icon label tabs example">
                    <Tab icon={<PhoneIphoneIcon />} label="Mobile" />
                    <Tab icon={<WebIcon />} label="Web" />
                    <Tab icon={<SportsEsportsIcon />} label="Games" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <TabView typeFilter="mobile" />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabView typeFilter="web" />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TabView typeFilter="game" />
            </TabPanel>
        </Box >
    );
}