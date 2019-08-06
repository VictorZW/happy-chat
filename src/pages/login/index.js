import React, {PureComponent} from 'react';

import './style.scss'
import {Link} from "react-router-dom";

export default class Page extends PureComponent {
    render() {
        return (
            <div>
                <div className="app-name">Happy Chat!</div>
                <div className="submit-area">
                    <div className="input-line">
                        <input type="text" placeholder="请输入手机号码"/>
                    </div>
                    <div className="input-line">
                        <input type="password" placeholder="请输入密码"/>
                    </div>
                    <Link to="/">
                        <div className={'submit-btn'}>登录</div>
                    </Link>
                </div>
            </div>
        )
    }
}
