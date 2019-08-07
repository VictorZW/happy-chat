import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import avatar from './1.jpeg'
import memoryPic from './1.png'

export default () => {
    return (
        <div className={'memory-card'}>
            <div className={'user-line'}>
                <div className={'user-avatar'}
                     style={{backgroundImage: `url(${avatar})`}}></div>
                <div className={'user-name'}>张先森</div>
            </div>
            <div className={'memory-pic'}>
                <img src={memoryPic} alt=""/>
            </div>
        </div>
    )
}
