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


function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/hash' element={<Hash />}></Route>
        <Route exact path='/block' element={<BlockPage />}></Route>
        <Route path='/blockchain' element={<BlockchainPage />}></Route>
        <Route path='/distributed' element={<DistributedChain />}></Route>
        <Route path='/miner' exact element={<MinerChain />}></Route>
      </Routes> */}

      <Home />
      
    </>
  );
}

export default App;
