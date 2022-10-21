import './hometest.css'
import './home.css'
import React from "react";
import WalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SendIcon from '@mui/icons-material/FileUploadOutlined';
import CheckIcon from '@mui/icons-material/CheckOutlined';
import tornpaper from '../../../img/torn-paper.svg'
// import Parallax from 'react-rellax';



export default function Features(){
    return(
            <div className="feature-section">
                <div class="custom-shape-divider-top-1658674033">
                    <img src={tornpaper} alt=""/>
                </div>
                <div className="feature-heading">
                    <h1>Services</h1>
                </div>

                <div className="features">
                    <div className="feature">
                        <div className="icons">
                            <WalletIcon  sx={{ fontSize: 70 ,color: "skyblue", alignContent: "center" }}/>
                        </div>
                        <h1>Manage</h1>
                        <hr/>
                        <span>Wallets make managing your profile easy</span>
                    </div>
                    <div className="feature">
                        <div className="icons">
                            <SendIcon  sx={{ fontSize: 70 ,color: "skyblue" }}/>
                        </div>
                        <h1>Transact</h1>
                        <hr/>
                        <span>Transacting cryptocurrencies made seamless</span>

                    </div>

                    <div className="feature">
                        <div className="icons">
                                <CheckIcon  sx={{ fontSize: 70 ,color: "skyblue" }}/>
                        </div>
                        <h1>Verify</h1>
                        <hr/>
                        <span>Trasactions made hassle-free over trustless systems</span>
                    </div> 
                </div>
            </div>
    )
}