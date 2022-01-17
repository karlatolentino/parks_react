// STYLING FOR USER SIGNIN PAGEimport styled from 'styled-components'
import styled from "styled-components";
import {Link} from 'react-router-dom'

export const InputButton = styled.input `
    background-color: #346dc9;
    color: white;
    padding: .2em;
    border: none;
    font-size: 1.2em;
    width: 200px;
    cursor: pointer;
`
export const Input = styled.input `
    width: 60vw;
    margin: .5em;
`

export const Label = styled.label `
    font-size: 1.2em;
`

export const Block = styled.div `
    display: grid;
    width: 100vw;
`

export const Select = styled.select`
    border: ${props => props.error ? "1px solid red": "1px solid #dddddd"};
    font-size: 1.2em;
    width: 60vw;
`
export const Option = styled.option`
    font-size: 1.2em;
    
`

export const StyledLink = styled(Link)`
    font-size: 1.2em;
    text-decoration: none;
    margin: 1em;
    padding: .2em .5em;
    color: blue;
    &:hover{
        color: orange;
    }
`