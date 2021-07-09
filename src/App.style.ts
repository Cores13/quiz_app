import styled, {createGlobalStyle} from 'styled-components';
import BGImage from './img/background.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        color: white;
        box-sizing: border-box;
        font-family: 'Encode Sans SC', sans-serif;
    }
    /* h1, p {
        color: white;
    } */

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }
    
    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }
`