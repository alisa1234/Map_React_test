import React from 'react';
import './header.scss'
import {NavLink} from 'react-router-dom';
import { useTranslation} from "react-i18next";

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return(
        <div className='header-wrapper'>
            <div className='tab'>
                <NavLink  to={'/'}
                          className={({ isActive }) => isActive ? 'active' : ''}
                >{t('map')}</NavLink>
            </div>
            <div className='tab'>
                <NavLink to={`/table`}
                         className={({ isActive }) => isActive ? 'active' : ''}
                >{t('table')}</NavLink>
            </div>
            <div className='dropdown'>
                <select onChange={(e: any) => changeLanguage(e.target.value)}>
                    <option value={'ukr'}>Українська</option>
                    <option value={'en'}>English</option>
                </select>
            </div>
        </div>
    )
}
export default Header;