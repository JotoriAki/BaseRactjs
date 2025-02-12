import classname from 'classnames/bind';
import React, { Component } from 'react';
import Styles from './Footer.module.scss';

const cx = classname.bind(Styles);
class Footer extends Component {
    render() {
        return (
            <div className={cx('footer')}>
                Footer
            </div>
        );
    }
}

export default Footer;