'use client';

import Link from "next/link"
import axios from 'axios';

import DragandDrop from './firstSection/Drag&Drop'
import Config from './secondSection/Config'
import ProcessBtn from '../ProcessBtn'
import { DropDownMenus , Conditions} from "./homestyle";

import styles from './home.module.css'

import { useState, createContext, useEffect } from "react";
import DropDownBrowse from "../DropDownBrowse";
import CheckBox from "../CheckBox";


const source = [
  "AWS S3",
  "AZURE Blob Storage"
]

const destination = [
  "MS SQL Server",
  "Postgre SQL"
]

export const MyContext = createContext(null);

export default function HomePage() {

  const [fileData, setFileData] = useState([])

  const [filelist, setFilelist] = useState(() => {
    useEffect(() => {
      const savedItems = localStorage.getItem("data_files")
      const parsedItem = JSON.parse(savedItems)
      return parsedItem || []
    },[])
  });

  const [rows, setRows] = useState(() => {
    useEffect(() => {
      const savedItems = localStorage.getItem("table_items")
      const parsedItem = JSON.parse(savedItems)
      return parsedItem || []
    },)
  });

  

  const handleOnProcess = function(){
      // let formData = new FormData();
      // formData.append('files', {fileData});
      // formData.append("name", "Name");
      // console.log(formData)
      // try{
      //   let url = 'http://localhost:8000/upload/';
      //   axios.post(url, filelist, {
      //     headers: {
      //       'Accept': 'application/json',
      //       'content-type': 'multipart/form-data'
      //     }
      //   })
      // }catch(error){

      // }
      let orderFormData = new FormData();
      // fileData.forEach((file,index) => {
        orderFormData.append(0, fileData[0]);
        orderFormData.append(1, 1);
      // })
      orderFormData.append("flag", 1)
      const headers = {
        'Accept' : 'application/json',
      };
      axios.post('http://localhost:8000/upload/', orderFormData , {headers: headers})
      .then(function (response) {
        console.log(response,);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <MyContext.Provider value={{filelist, setFilelist, rows, setRows, fileData, setFileData}}>
      <main className="mx-10">
        <DropDownMenus>
            <DropDownBrowse name="Choose Source" platforms={source}/>
            <DropDownBrowse name="Choose Destination" platforms={destination}/>
        </DropDownMenus>
        
        <DragandDrop />
        <Config/>

        <Conditions>
          <CheckBox label="If File Name Exist Load Data" />
        </Conditions>
        
        {
          filelist.length && rows.length && 
          <div 
            className="fixed bottom-10 right-10"
            onClick={handleOnProcess}
          >
            <ProcessBtn/>
          </div>
        }
      </main>
    </MyContext.Provider >
  )
}

