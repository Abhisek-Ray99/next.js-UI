'use client'

import { useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { OpenDropDown } from "./style";

const DropDownBrowse = ({name, platforms}) => {

    const [platform, setPlatform] = useState(platforms[0])
    const [openDrop, isOpenDrop] = useState(false)

    const handleDropDown = function(){
        isOpenDrop(!openDrop)
    }

    const handlePlatform = function(event){
        const value = event.target.innerHTML;
        setPlatform(value)
        handleDropDown()
    }

    return (
        <div className="mx-6">
            <p className="text-sm p-2">{name}</p>
            <div 
                className="border h-8 w-64 rounded-lg flex justify-between items-center px-2"
                onClick={handleDropDown}
            >
                <p>{platform}</p>
                <ChevronUpDownIcon className="h-6 w-6 text-slate-500"/>
            </div>
           
            {   openDrop &&
                <OpenDropDown className="divide-y">
                    {platforms.map((val,index) => (
                        <p 
                            key={index}
                            className="py-2 cursor-pointer"
                            onClick={handlePlatform}
                        >
                            {val}
                        </p>
                    ))}
                </OpenDropDown>
            }
        </div>
    );
}

export default DropDownBrowse;