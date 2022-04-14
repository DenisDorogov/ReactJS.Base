import React from 'react';
import style from './preloader.module.css';
import svgSpinner from '../../../assets/img/tail-spin.svg';

const Preloader = () => {
    return (
        <div className={style.spinnerBox}>
            <div className={style.spinner}>
                <img src={svgSpinner} alt="Please Wait" />
            </div>
        </div>
        )

}
export default Preloader;