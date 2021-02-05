import React from 'react'
import './styles.scss'

const Button = (props) => {

    let c
    if (props.content === 'table') {
        c = 'Виж карта'
    } else {
        c = 'Виж таблица'
    }

    return <button className='tog' onClick={props.handler}>
        {c}
    </button>

}

export default Button