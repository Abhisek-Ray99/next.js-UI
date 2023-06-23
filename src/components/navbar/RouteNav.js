'use client'


import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpOnSquareIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline'


// import styles from './nav.module.css'

const RouteNav = () => {

    const [view,setView] = useState(true)  

    const handleClick = (event) => {
        if(event.target.name === 'browse'){
          setView(true)
        }
        else if (event.target.name === 'tables'){
          setView(false)
        }
      }

    return (
        <div className='justify-center grid grid-cols-2 gap-3 divide-x rounded-lg border border-slate-300 sticky px-1 py-1'>
            <Link 
                href='/dashboard' 
                name='browse' 
                className={`h-9 flex flex-row items-center justify-center hover:bg-slate-200 rounded 
                    ${view ? 'bg-indigo-100 text-indigo-500' : ''}
                `}
                onClick={handleClick}
            >
                <ArrowUpOnSquareIcon className="h-4 w-4 text-black-500 mx-2" />
                Browse Files
            </Link>
            <Link 
                href='/dashboard/tables' 
                name='tables'
                className={`h-9 flex flex-row items-center justify-center hover:bg-slate-200 rounded
                    ${view ?  '' : 'bg-indigo-100 text-indigo-500'}
                `}
                onClick={handleClick}
            >
                <DocumentChartBarIcon className="h-4 w-4 text-black-500 mx-2" />
                Show Tables
            </Link>
        </div>
    );
}

export default RouteNav;