import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' style ={({isActive}) => ({color: isActive ? '#ffccbb' : 'white'})}>Profile</NavLink>
            </div>
            <div className={s.item}> 
                <NavLink to='/dialogs' style ={({isActive}) => ({color: isActive ? '#ffccbb' : 'white'})} >Messages</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>

        </nav>
    )
}

export default Navbar