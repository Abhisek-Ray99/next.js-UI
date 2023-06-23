'use client'
import { useCallback } from "react"
import { XCircleIcon } from '@heroicons/react/24/outline'

const FileList = ({id, item, onClear}) => {
    const handleClear = function(){
        onClear(id);
    }
    return (
        <div 
            className="flex h-10 w-30 items-center border w-fit px-2 py-2 rounded-full bg-gray-400 overflow-hidden text-sm"
        >
            <p className="col-auto">{item}</p>
                <XCircleIcon 
                    className="h-6 w-6 mx-2 border-gray-300 bg-gray-300 rounded-full hover:text-red-500"
                    role="button"
                    aria-label="remove file"
                    onClick={handleClear}
                />
        </div>
    );
}

export default FileList;