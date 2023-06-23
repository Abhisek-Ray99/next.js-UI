'use client';
import Image from 'next/image';
import Link from 'next/link';

import styles from './nav.module.css'
import ProfileNav from './ProfileNav'
import RouteNav from './RouteNav'
import NavImg from '../../img/G.png'

import DropDownProfile from './ProfileDropDown';
import { useState } from 'react';


const Navbar = ({}) => {

    const [openProfile, setOpenProfile] = useState(false)

    const handleProfileDropDown = function(event){
        // console.log(event.target)
        setOpenProfile(!openProfile)
    }

    return (
        <div className={styles.navContainer}>
            <Link href='/' className="justify-self-start ml-6">
                <Image src={NavImg} width="30" height="30" alt="Genpact" />
            </Link>
            <RouteNav/>
            
            <ProfileNav onclick={handleProfileDropDown} />
            {
                openProfile && <DropDownProfile/>
            }
        </div>
    );
}

export default Navbar;