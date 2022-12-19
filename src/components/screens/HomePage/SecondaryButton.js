import { ClassNames } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import arrow from '../../../img/arrow.svg';
import './home.css';
function Secondarybutton(props) {
    return (
        <a onClick={props.begin}>
        <SecondaryButtonStyled>
           
            <div classname='but' onClick={props.begin}>
             {props.name}
            </div> 
        </SecondaryButtonStyled>
        </a>
    )
}

const SecondaryButtonStyled = styled.button`
    background-color: var(--dark-primary);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: white;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a:hover{
        text-decoration: none;
        color: white;
        
    }
    img{
        padding-left: .9rem;
    }

    
    line-height: 1.4em;
    letter-spacing: 0.5px;
    fill: var(--dark-primary);;
    color: #242424;
    background-color: rgba(94,56,234,0);
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-radius: 40px 40px 40px 40px;
    padding: 15px 40px 15px 40px;

    &:hover {
        background-color: var(--dark-primary);
        color: white;
      }
    
`;

export default Secondarybutton;
