import React, { useState } from 'react'
import CustomInput from './CustomInput';
import { Button, Checkbox, Datepicker, Select } from "flowbite-react";

const DeleteProduct = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [varietal, setVarietal] = useState('');
  const [rating, setRating] = useState('')

  return (
    <div className="h-full">
      <div className="flex flex-col  px-6 mx-auto lg:py-0">
        <div className="flex flex-col rounded-md md:px-6 md:py-4 md:gap-6">
          <h1 className="text-5xl">Are you sure you want to delete : wine name</h1>
          <div className='flex justify-between'>
            <Button onClick={handleClose} >No</Button>
            <button>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteProduct
