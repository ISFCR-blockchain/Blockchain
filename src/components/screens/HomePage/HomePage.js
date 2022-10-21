import React from "react";
// import AppBarStyle from "../../AppBarStyled";
import girl from '../../../img/girl-block.jpg'
import '../../../fonts/nunito/stylesheet.css'
import Secondarybutton from "./SecondaryButton";
import styled from 'styled-components';
// import ResponsiveAppBar from "../../AppBar";
import GlobalStyle from '../../../GlobalStyle'
import './hometest.css'
import './home.css'
// import Parallax from 'react-rellax';
import Features from "./Features";

export const AppBarStyled = styled.div`
{
  background-color: ${({ valid }) => (valid ? "#9055ff":"#ffff")};
  
}`
;
export default function Home(){
    return(
        <>
            <div className="HomePage">
                <GlobalStyle/>

                {/* <Parallax speed={-2}> */}
                    <HeaderContentStyled>
                        <div className="left-content">
                            <div class="image-stack__item image-stack__item--top">
                                <img src={girl} alt=""/>
                            </div>     
                        </div>
                        <div className="right-content">
                            <div className="left-text-container">
                                <h1>BLOCKCHAIN</h1>
                                <h2>Future Technology</h2>
                                <Secondarybutton name={"Let's Begin"}/>
                            </div>
                        </div>
                    </HeaderContentStyled>
                {/* </Parallax> */}
            </div>
            <Features/>
        </>
    )
}

const HeaderContentStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    padding-top: 5rem; 
    

    @media screen and (max-width:1419px){
        grid-template-columns: repeat(1, 1fr);
        flex-direction: column;
        width: 50%;
        margin: auto;
        justify-content: center;
        padding-top: 2rem;

        .right-content{
            padding-right: 0rem;
            width: 100%;
        }

        .left-content{
            padding-right: 0rem;
            width: 100%;
        }
    }

    .left-content{
        position: relative;  
        margin-top: 0px;
        width: 40%;       
        display: flex;
        justify-content: left;
        position: relative;
        margin-left: 9%;
         
        .image-stack__item--top {
            width: 50%;    
        }

        img{   
            width: 500px;
            top: 0px;
            margin-top: 0px; 
        }


        @media screen and (max-width: 700px){
            .image-stack__item--top {
                margin-left: 50px;
                margin-right: auto;
                width: 300px;
                scale: 80%;
            }
        }

        @media screen and (max-width: 500px){
            .image-stack__item--top {
                margin-left: 50px;
                margin-right: auto;
                width: 300px;
            }
        }
        
    }

    .right-content{
        @font-face {
            font-family: 'Nunito';    
            font-weight: normal;
            font-style: normal;
        }     
        width: 60%;
        position: relative;
        justify-content: center;
        margin-top: auto;
        margin-bottom: auto;
        display: flex;
        align-items: left;
        padding-right: 3rem;

        h1{
        
            font-family: "Nunito", Sans-serif;
            font-size: 5.5rem;
            font-weight: 700;            
            color: var(--dark-primary);      
            font-weight: 700;
            text-transform: uppercase;
            font-style: normal;
            line-height: 1.2em;
            margin-bottom: 0px;

            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }

        h2{
            font-family: "Nunito", Sans-serif;
            font-size: 2rem;
            color: skyblue;
            font-weight: 100;
            text-transform: uppercase;
            font-style: normal;
            line-height: 1.2em;
            letter-spacing: 20px;
            margin-bottom: 8%;
        }  

        hr{
            color: gray;
            width: 75%;
            margin-bottom: 10%;
        }
        
    }
    @media screen and (max-width: 700px){
        .left-content{
            width: 100%;
            margin-left: auto;
            margin-right:auto;
        }
        .right-content{
            width: 100%;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
        }
    }


    @media screen and (max-width: 500px){
        .left-content{
            width: 100%;
            margin-left: auto;
            margin-right:auto;        
        }

    @media screen and (max-width:1419px){
        .left-content{
            margin-left: 0;
        }
    }
    }

    
        
    }
`;