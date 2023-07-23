import React from 'react'
import './Button.css'

const STYLES = ['btn--primary1', 'btn--outline1'];

const SIZES = ['btn--medium1', 'btn--large1'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    const jump = id_string => { 
        document.querySelector(`#contact-me`).scrollIntoView()
    }

    return (
        <button className={`btn1 ${checkButtonStyle} ${checkButtonSize}`} onClick={jump}>
            {children}
        </button>
    )
}