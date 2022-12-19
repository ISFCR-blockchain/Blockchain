import logo from './logo.svg';
import './App.css';
import '../node_modules/bootswatch/dist/flatly/bootstrap.min.css'
import Home from './components/screens/HomePage/HomePage';
import React,{createContext,useContext,useReducer,useEffect} from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Hash from "./components/screens/Blockchain/Pages/Hash";
import MinerChain from './components/screens/Blockchain/Pages/Miner'
import BlockPage from "./components/screens/Blockchain/Pages/Block";
import BlockchainPage from "./components/screens/Blockchain/Pages/Blockchain";
import DistributedChain from "./components/screens/Blockchain/Pages/DistributedChain";
import Miner from './components/screens/Blockchain/MinerChain';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


function App() {
  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const begin = (event, newValue) => {
    setValue("1");
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab label="Home" value="0"/>
            <Tab label="Hash" value="1" />
            <Tab label="Block" value="2" />
            <Tab label="Blockchain" value="3" />
            <Tab label="Distributed" value="4" />
            <Tab label="Miner" value="5" />
          </TabList>
        </Box>
        <TabPanel value="0"><Home begin={begin}/></TabPanel>
        <TabPanel value="1"><Hash/></TabPanel>
        <TabPanel value="2"><BlockPage/></TabPanel>
        <TabPanel value="3"><BlockchainPage/></TabPanel>
        <TabPanel value="4"><DistributedChain/></TabPanel>
        <TabPanel value="5"><MinerChain/></TabPanel>
      </TabContext>
    </Box>
  );
}

export default App;
