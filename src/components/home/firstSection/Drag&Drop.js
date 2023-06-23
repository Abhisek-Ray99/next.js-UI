'use client'

import { useState, useCallback, useEffect, useContext } from "react"
import styles from '../home.module.css'
import { FolderIcon } from '@heroicons/react/24/outline'
import { nanoid } from "nanoid"

import FileList from "./FileList"
import { MyContext } from '../Home'

const DragandDrop = () => {
  const { filelist, setFilelist } = useContext(MyContext);
  const { fileData, setFileData } = useContext(MyContext)

  const handleOnChange = function(event){
      let filesArray = Array.from(event.target.files);
      
      setFileData(filesArray)

      filesArray = filesArray.map((file) => ({
        id: nanoid(),
        file: file.name
      }));
      if (typeof window !== 'undefined') {
        localStorage.setItem("data_files",JSON.stringify(filesArray))
        let arr = JSON.parse(localStorage.getItem('data_files'))
        setFilelist(arr);
      }
  }

  const handleClearFile = useCallback((id) => {
    let files = filelist.filter((file) => file.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem("data_files",JSON.stringify(files))
      let arr = JSON.parse(localStorage.getItem('data_files'))
      setFilelist(arr);
    }
  }, [filelist]);

  return (
    <div className="mx-8 my-8 w-4/6">
      <div className="grid grid-cols-auto bg-gray-50 h-60 border-dotted border-2 rounded px-2 py-2 overflow-auto">
          {
            filelist ? 
              filelist.map((item,index) => 
                <FileList key={index} id={item.id} item={item.file} onClear={handleClearFile} />
              )
            : 
              <p>No file Exists</p>
          }
      </div>
      <input type="file" accept=".csv,.xlsx,.xls" id="upload" hidden multiple onChange={handleOnChange}/>
      <label htmlFor="upload" className={styles.inputBtn}>
        <FolderIcon className="h-4 w-4 text-black-500 mx-2" />
        Select Files
      </label>
    </div>
  )
}

export default DragandDrop