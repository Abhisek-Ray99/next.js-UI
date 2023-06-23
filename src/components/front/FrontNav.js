import { MainNav, Nav1, Nav2 } from './navstyle'
import Link from 'next/link'
import Image from 'next/image';

import NavImg from '../../img/G.png'

const FrontNav = ({handleModal}) => {

  return (
    <MainNav>
      <Nav1>
        <Link href='/product'>Product</Link>
        <Link href='/about'>About</Link>
        <Link href='/' >
            <Image src={NavImg} width="30" height="30" alt="Genpact" />
        </Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/dashboard'>dashboard</Link>
      </Nav1>
      <Nav2>
        <button
          name="login" 
          className='px-4 py-2'
          onClick={handleModal}
        >Login</button>
        <button
          name="signup"
          className='px-4 py-2 bg-black rounded-full text-white'
          onClick={handleModal}
        >Signup</button>
      </Nav2>
      
    </MainNav>
  )
}

export default FrontNav