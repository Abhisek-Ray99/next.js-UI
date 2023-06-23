import styled from 'styled-components';

export const MainNav = styled.div`
    position: fixed;
    display:flex;
    z-index: 10;
    top: 30px;
    width: 100%;
    flex-direction: row-reverse;
`

export const Nav1 = styled.nav`
    display: flex;
    position: fixed;
    overflow: hidden;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1.5px solid #000;
    border-radius: 60px;
    width: 50%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 38px;
    background-image: linear-gradient(90deg, #F1F5D3, #E5EDE1 20%, #DDDCE1 45%, #F4DDD4 80%, #FEE0B1);
    margin-top: 20px;
`

export const Nav2 = styled.nav`
    display: flex;
    margin-right: 10rem;
`