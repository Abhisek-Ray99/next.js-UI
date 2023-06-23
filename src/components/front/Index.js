"use client"

import Image from 'next/image';
import { useState } from 'react';

import { Section1, Section2, Header, TitleImage } from './frontstyles'
import Heroimg from '../../img/home-hero.png'
import Section from './Section'
import FrontNav from './FrontNav'
import RegistrationForm from '../auth/Index'

const Index = () => {

  const [isauthmodal, setIsauthmodal] = useState(false)
  const [isform, setIsform] = useState(null)

  const handleAuthModal = function(event){
    setIsform(event.target.name)
    setIsauthmodal(!isauthmodal)
  }


  return (
    <>
      <FrontNav handleModal={handleAuthModal} />
      {
        isauthmodal &&  <RegistrationForm 
                          close={handleAuthModal}   
                          handleform={isform} 
                          setHandleForm={(value) => {
                              value == false ? setIsform('login') : setIsform("signup")
                          }}
                          onChange={ (value) => setIsauthmodal(value)} 
                        />
      }
      <Section1>
          <Header>
            <div>
              <h1 className='hero-heading'>Your 📅<span className='underline decoration-rose-400'>Storage</span>, <span className='underline decoration-cyan-400'>Database</span>, <span className='underline decoration-blue-900'>Choices🌠</span></h1>
            </div>
          </Header>
          <TitleImage>
            <Image src={Heroimg} width="850" height="300" alt='heroimg' />
          </TitleImage>
      </Section1>
      <Section2>
            <Section/>
      </Section2>
    </>
      
  )
}

export default Index