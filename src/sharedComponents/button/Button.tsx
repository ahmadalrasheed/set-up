import React from 'react'
import { ButtonBody } from './Theme'
interface ButtonStyle{
    hoverBackgroundColor?: string;
    backgroundColor?: string;
    color?: string;
}
interface ButtonInfo{
    text? : string;
    children?: React.ReactElement;
    disabled?: boolean,
    onClick?: any
}
export const Button = ({ text , children  , disabled , onClick}:ButtonInfo) => {
  return (
    <ButtonBody onClick={onClick} disabled={disabled} > 
        {text}
        <>
        {children && children}
        </>
    </ButtonBody>
  )
}

export default Button
