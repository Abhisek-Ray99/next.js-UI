
import { useState, useEffect, useContext } from "react";
import {Input} from './style'

import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

import { MyContext } from './home/Home'


function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {

    const { fileName , groupName , destinationTable } = rowsData

    return (
      <tr key={index} >
        <td className="border">
          <Input
            type="text"
            value={fileName}
            onChange={(event) => onValUpdate(index, event)}
            name="fileName"
          />
        </td>
        <td className="border">
          <Input
            type="text"
            value={groupName}
            onChange={(event) => onValUpdate(index, event)}
            name="groupName"
          />
        </td>
        <td className="border">
          <Input
            type="text"
            value={destinationTable}
            onChange={(event) => onValUpdate(index, event)}
            name="destinationTable"
          />
        </td>
        <td className="items-center justify-center">
          <button
            className="bg-orange-100 px-2 py-1 mx-2 font-normal rounded text-orange-400"
            onClick={() => tableRowRemove(index)}
          >
            <TrashIcon className="h-6 w-6 px-1 py-1" />
          </button>
          <button
            className="bg-blue-100 px-2 py-1 mx-2 font-normal rounded text-blue-400"
            
          >
            <PencilSquareIcon className="h-6 w-6 px-1 py-1" />
          </button>
        </td>
      </tr>
    );
  });
}


function Table() {

  const { rows, setRows } = useContext(MyContext);

  useEffect(() => {
    localStorage.setItem('table_items', JSON.stringify(rows));
  }, [rows]);

  const addRowTable = () => {
    const data = {
      fileName: "",
      groupName: "",
      destinationTable: "",
    };
    if (typeof window !== 'undefined') {
      localStorage.setItem("table_items",JSON.stringify([...rows,data]))
      const newData = JSON.parse(localStorage.getItem('table_items'))
      setRows([...newData]);
    }
  };
  const tableRowRemove = (index) => {
    let dataRow = [...rows]
    dataRow = dataRow.filter((item,i) => index !== i )
    setRows(dataRow);
  };

  const tableReset = () => {

  }

  const onValUpdate = (i, event) => {
    const { name, value } = event.target
    let data = [...rows]
    data[i][name] = value
    if (typeof window !== 'undefined') {
      localStorage.setItem("table_items",JSON.stringify(data))
      const newData = JSON.parse(localStorage.getItem('table_items'))
      setRows(newData)
    }
  };

  const saveToLocalStorage = () => {

  }

  return (
    <div className="mx-10">
      <div className='my-4'>
        <button className="bg-blue-100 rounded px-2 py-1 font-normal text-blue-500 mx-2" onClick={addRowTable}>
          Insert Row
        </button>
        <button className="bg-green-100 rounded px-2 py-1 font-normal text-green-500 mx-2">
          Save Config
        </button>
      </div>
      <table className="table w-5/6 bg-white rounded">
        <thead className="table-header-group">
          <tr className="table-row">
            <th className="table-cell text-left bg-blue-100 border text-left px-8 py-4">File Name</th>
            <th className="table-cell text-left bg-blue-100 border text-left px-8 py-4">Group Name</th>
            <th className="table-cell text-left bg-blue-100 border text-left px-8 py-4">Destination Table</th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            rows={rows}
            tableRowRemove={tableRowRemove}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
    </div>
  );
}

export default Table;