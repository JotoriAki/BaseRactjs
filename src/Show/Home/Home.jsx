import classname from 'classnames/bind';
import React, { Component } from 'react';
import Styles from './Home.module.scss';

const cx = classname.bind(Styles);

class Home extends Component {
    render() {
        return (
            <div className={cx('home')}>
                Home
            </div>
        );
    }
}

export default Home;