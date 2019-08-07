import React, {PureComponent} from 'react';
import {Link} from "react-router-dom";
import Card from '../../components/Card'

export default class Home extends PureComponent {
    render() {
        return (
            <div>
                <Card/>
                <div>
                    <Link to="/login">login</Link>
                </div>
            </div>
        )
    }
}
