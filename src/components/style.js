import styled from 'styled-components'

export const Input = styled.input`
    width:100%;
    padding:6px;
    outline-width: 0px;
`

export const OpenDropDown = styled.div`
    position: absolute;
    // top: 4.5rem;
    // right: 1.5rem;
    width: 255px;
    padding: 15px;
    border-radius: 0.5rem;
    background-color: #fff;
    border: 1px solid grey;
    z-index: 2;
    border-color: rgb(156 163 175);
    margin-top: 2px
`

export const CheckBoxWrapper = styled.div`
    padding: 2em;
    & input[type=checkbox] {
        margin: 4px 0 0;
        line-height: normal;
        width: 16px;
        height: 16px;
    }
`