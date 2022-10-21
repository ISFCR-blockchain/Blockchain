import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    :root{
        --purple-primary: #554DDE;
        --accent-green: #3a9788;
        --neutral-light: #F2F6FF;
        --lavender-secondary: #6A6D9E; /*Primary Font Color*/
        --dark-primary: #16194F;
        --border-colour: #CAD6F1;
        
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    
        text-decoration: none;
        font-family: 'Nunito';
        src: url('Nunito-Regular.woff2') format('woff2'),
        url('Nunito-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body{
        /*background-color: var(--neutral-light);*/
        
        font-size: 1.2rem;
    }

    a{
        color: inherit;
    }
 
    .secondary-heading{
        font-size: 3rem;
        color: var(--purple-primary);
        
    }
    .small-heading{
        font-size: 2.5rem;
        color: var(--purple-primary);
        text-align: center;
    }
  

    //Utilities
    .c-para{
        text-align: center;
    }

  
`;

export default GlobalStyle;