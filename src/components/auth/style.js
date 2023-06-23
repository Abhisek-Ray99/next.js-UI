import styled from 'styled-components'

export const Form = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.1);
    z-index: 20
`

export const MainForm = styled.div`
    position: absolute;
    width: 50%;
    height: 50%;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    background-color: #ffffff;
    border-radius: 20px;
`

export const AuthForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-image: linear-gradient(90deg, #F1F5D3, #E5EDE1 20%, #DDDCE1 45%, #F4DDD4 80%, #FEE0B1);
    border-radius: 20px;
    ${props => props.name === 'login' && `
        padding: 6em 10em 6em 10em;
    `}
    ${props => props.name === 'signup' && `
        padding: 4em 10em 4em 10em;
    `}
    
`

export const TextInput = styled.input`
    background-color: rgba(104, 105, 102, 0.1);
    border-radius: 7px;
    padding: 10px;
    ${props => props.type === 'password' && `
        
    `}
    ${props => props.type === 'text' && `
        
    `}
`

export const AuthButton = styled.button`
    background-color: #000;
    border-radius: 7px;
    padding: 12px;
    color: rgb(248 250 252);
    font-weight: bold;
`

export const Togglelabel = styled.label`
    position: relative;
    display: inline-block;
    width: 55px;
    height: 25px;
`

export const Toggleinput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`

export const Togglespan = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2c3e50;
    transition: 0.3s;
    border-radius: 7px;
    &:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 2.6px;
        background-image: linear-gradient(90deg, #F1F5D3, #E5EDE1 20%, #DDDCE1 45%, #F4DDD4 80%, #FEE0B1);
        border-radius: 50%;
        transition: 0.3s;
    }
    ${Toggleinput}:checked + & {
        
    }
      
    ${Toggleinput}:checked + &:before {
    transform: translateX(29px);
    }
`
