import { Div1, Div2, Intro1, Intro2, Intro3 } from './sectionstyle'
import Image from 'next/image'
import Link from 'next/link'

import design1 from '../../img/design1.svg'
import design2 from '../../img/design2.svg'
import design3 from '../../img/design3.svg'
import describe1 from '../../img/docs-illo.png'
import describe2 from '../../img/wiki-illo.png'
import describe3 from '../../img/projects-illo.png'

import { ArrowSmallRightIcon, DocumentArrowUpIcon } from '@heroicons/react/24/outline'


const Section = () => {
  return (
    <>
        <Div1>
            <h1>WE LEADING THE FIRST STEPS TO BUILDING THIS FRAMEWORK KNOWNS ABOUT US</h1>
            <Div2>
                <Intro1 className='flex flex-row px-5 py-5'>
                  <div className='w-1/4 h-full justify-self-start'>
                    <div className='flex text-2xl font-bold items-center'>
                      <DocumentArrowUpIcon  className="h-6 w-6 text-yellow-600"/>
                      <p>Upload</p>
                    </div>
                    <p>Simple, Powerful, Optmized Upload box, Support ZIP, CSV Format</p>
                    <Link href='/' className='flex flex-row items-center text-yellow-600'>
                      <p>Explore</p>
                      <ArrowSmallRightIcon className="h-4 w-4 text-black-500 mx-2"/>
                    </Link>
                    <Image src={describe1} width="120%" height="120%" alt="describe1"/>
                  </div>
                  <div className='w-fit h-full max-w-[60%]'>
                    <Image src={design1} width="100%" height="100%" alt='design1'/>
                  </div>
                </Intro1>
                <Intro2 className='flex flex-row px-5 py-5'>
                  <div className='w-1/4 h-full justify-self-start'>
                    <div className='flex text-2xl font-bold items-center'>
                      <DocumentArrowUpIcon  className="h-6 w-6 text-red-600 "/>
                      <p>Configuration</p>
                    </div>
                    <p>Simple, Powerful, Optmized Upload box, Support ZIP, CSV Format</p>
                    <Link href='/' className='flex flex-row items-center text-red-600'>
                      <p>Explore</p>
                      <ArrowSmallRightIcon className="h-4 w-4 text-red-500 mx-2"/>
                    </Link>
                    <Image src={describe2} width="100%" height="100%" alt="describe2" />
                  </div>
                  <div className='w-fit h-full max-w-[60%]'>
                    <Image src={design2} width="100%" height="100%" alt='design2' />
                  </div>
                </Intro2>
                <Intro3 className='flex flex-row px-5 py-5'>
                  <div className='w-1/4 h-full justify-self-start'>
                    <div className='flex text-2xl font-bold items-center'>
                      <DocumentArrowUpIcon  className="h-6 w-6 text-blue-600"/>
                      <p>Transactions</p>
                    </div>
                    <p>Simple, Powerful, Optmized Upload box, Support ZIP, CSV Format</p>
                    <Link href='/' className='flex flex-row items-center text-blue-600'>
                      <p>Explore</p>
                      <ArrowSmallRightIcon className="h-4 w-4 text-blue-500 mx-2"/>
                    </Link>
                    <Image src={describe3} width="100%" height="100%" alt='describe3' />
                  </div>
                  <div className='w-fit h-full max-w-[60%]'>
                    <Image src={design3} width="100%" height="100%" alt='design3' />
                  </div>
                </Intro3>
            </Div2>
        </Div1>
    </>
  )
}

export default Section