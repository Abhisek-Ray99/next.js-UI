'use client'

import { useRef, useEffect } from 'react';

import { Form, MainForm } from './style'
import { XMarkIcon } from '@heroicons/react/24/outline';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Toggle from './Togglebtn';

const Index = ({ close, handleform, setHandleForm, onChange }) => {

    const logState = state => {
        setHandleForm(state)
        // console.log(state)
    }

    const refOne = useRef(false);
    const handleClickOutside = (event) => {
        if(!refOne.current.contains(event.target)){
            console.log("Clicked outside ....")
            onChange()
        }else{
            console.log("Clicked Inside ....")
        }
    }
    
    useEffect(() => {
        document.addEventListener("click",handleClickOutside,true)
    },[])
    

    return (
        <Form>
            <MainForm ref={refOne}>
                <div className='grid grid-cols-2 justify-around h-10 items-center'>
                    <div className='flex col-start-1 col-end-3 place-content-center items-center justify-center ml-10'>
                        <p className='mx-10'>Login</p>
                        <Toggle
                            toggled={handleform}
                            onClick={logState}
                        />
                        <p className='mx-10'>Signup</p>
                    </div>
                    <div onClick={close} className='w-9 h-9 col-end-7 col-span-2' >
                        <XMarkIcon className='bg-black text-white rounded-full px-2 py-2 hover:bg-zinc-700' />
                    </div>
                </div>
                {
                    handleform == 'login' ? <LoginForm/> : <SignupForm/>
                }
            </MainForm>
        </Form>
    );
}

export default Index;