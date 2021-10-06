import styled from 'styled-components'

export const Header = styled.nav`
    display: flex;
    align-items: center;
    height: 60px;
    padding-left: 20px;
    background-color: white;
`

export const Logo = styled.img`
    height: 60px;
`

export const Tittle = styled.h2`
    margin: 0;
    background: linear-gradient(to right top, blue, purple);
    padding-left: 10px;
    color: transparent;
    -webkit-background-clip: text;
`

export const Border = styled.div`
    background-color: white;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 20px;
    width: 95%;
    height: 580px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    h3{
        margin: 0;
        color: gray;
        padding-bottom: 30px;
    }
`