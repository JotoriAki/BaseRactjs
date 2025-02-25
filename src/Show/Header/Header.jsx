import classname from 'classnames/bind';
import React, { Component } from 'react';
import Styles from './Header.module.scss';

const cx = classname.bind(Styles);
function Header() {
    return ( <h1 className={cx("Header")}>Header</h1> );
}

export default Header;