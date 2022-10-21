import React,{useContext,useReducer} from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import BlockPage from "./Pages/Block";
import BlockchainPage from "./Pages/Blockchain";
import DistributedBlockchain from "./DistributedBlockchain";
import Hash from "./Pages/Hash";
import MinerChain from "./Pages/Miner";
// import { UserContext } from "../../../AppPrev";

export default function BlockBar()
{
    // const {state,dispatch} = useContext(UserContext)
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
                <a class="nav-link" data-bs-toggle="tab" href='/hash'>Hash</a>
            </li>
            

            
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href='/block'>Block</a>
            </li>
            

            
            <li class="nav-item">
                <a class="nav-link " data-bs-toggle="tab" href='/blockchain'>Blockchain</a>
            </li>
            

            
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href='/distributed'>Distributed</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href='/miner'>Mining</a>
            </li>

        </ul>
        </>
    )

}
