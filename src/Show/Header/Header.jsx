import classname from 'classnames/bind';
import React, { Component } from 'react';
import Styles from './Header.module.scss';

const cx = classname.bind(Styles);
class Header extends Component {
    render() {
        return (
            <div className={cx('Header')}>
                Header
            </div>
        );
    }
}

export default Header;