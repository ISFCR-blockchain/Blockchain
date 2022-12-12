import React,{useContext,useReducer} from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import BlockPage from "./Pages/Block";
import BlockchainPage from "./Pages/Blockchain";
import DistributedBlockchain from "./DistributedBlockchain";
import Hash from "./Pages/Hash";
import MinerChain from "./Pages/Miner";
import { Button } from '@mui/material';
// import { UserContext } from "../../../AppPrev";

export default function BlockBar()
{
    // const {state,dispatch} = useContext(UserContext)

    const handleTabs = (event)=>{
        console.log(event.target.value)
        switch (event.target.value) {
            case "hash":
                return <Hash/>
              break;
            case "block":
                return <BlockPage/>
              break;
            case "blockchain":
                return <BlockchainPage/>
              break;
            case "distributed":
                return <DistributedBlockchain/>
                break;
            case "miner":
                return <MinerChain/>
                break;
            default:
                return <Hash/>
        }
    }

    

    return(
        <>
        {/* <Routes>
        <Route path='/hash' element={<Hash />}></Route>
        <Route exact path='/block' element={<BlockPage />}></Route>
        <Route path='/blockchain' element={<BlockchainPage />}></Route>
        <Route path='/distributed' element={<DistributedBlockchain />}></Route>
        <Route path='/miner' element={<MinerChain />}></Route>
        </Routes> */}
        <ul class="nav nav-tabs">
            
            <li class="nav-item">
                <Button class="nav-link" data-bs-toggle="tab" value="hash" onClick={(event)=>handleTabs(event)}>Hash</Button>
            </li>
            

            
            <li class="nav-item">
                <Button class="nav-link" data-bs-toggle="tab" value='block' onClick={(event)=>handleTabs(event)}>Block</Button>
            </li>
            

            
            <li class="nav-item">
                <Button class="nav-link " data-bs-toggle="tab" value='blockchain' onClick={(event)=>handleTabs(event)}>Blockchain</Button>
            </li>
            

            
            <li class="nav-item">
                <Button class="nav-link" data-bs-toggle="tab" value='distributed' onClick={(event)=>handleTabs(event)}>Distributed</Button>
            </li>

            <li class="nav-item">
                <Button class="nav-link" data-bs-toggle="tab" value='miner' onClick={(event)=>handleTabs(event)}>Mining</Button>
            </li>

        </ul>
        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
        Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
        Item Three
        </TabPanel> */}
        </>
    )

}
