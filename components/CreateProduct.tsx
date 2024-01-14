import React, { useState } from 'react'
import CustomInput from './CustomInput';
import { Button, Checkbox, Datepicker, Select } from "flowbite-react";

const CreateProduct = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [varietal, setVarietal] = useState('');
  const [rating, setRating] = useState('')

  return (
    <div className="h-full">
      <div className="flex flex-col  px-6 mx-auto lg:py-0">
        <div className="flex flex-col rounded-md md:px-6 md:py-4 md:gap-6">
          <h1 className="text-2xl">Add wine</h1>
          <div className="">
            <div className="flex items-center gap-2 mb-1">
              <label
                htmlFor="product"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Name
              </label>
            </div>
            <CustomInput
              type="text"
              name="product"
              id="product"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              label="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <div className="flex items-center gap-2 mb-1">
              <label
                htmlFor="year"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Year
              </label>
            </div>
            <CustomInput
              type="number"
              name="year"
              id="year"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              label="Enter wine year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="">
            <label
              htmlFor="year"
              className="block mb-1 text-sm font-medium text-gray-900"
            >
              Type
            </label>
            <Select id="countries" required>
              <option>Cabernet Sauvignon</option>
              <option>Merlot</option>
              <option>Shiraz</option>
              <option>Chenin Blanc</option>
              <option>Sauvignon Blanc</option>
              <option>Verdelho</option>
              <option>Chardonnay</option>
              <option>Durif</option>
            </Select>
          </div>
          <div className="">
            <div className="flex items-center gap-2 mb-1">
              <label
                htmlFor="year"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Varietal
              </label>
            </div>
            <CustomInput
              type="number"
              name="year"
              id="year"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              label="Enter varietal"
              value={varietal}
              onChange={(e) => setVarietal(e.target.value)}
            />
          </div>
          <div className="">
            <div className="flex items-center gap-2 mb-1">
              <label
                htmlFor="year"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Rating
              </label>
            </div>
            <CustomInput
              type="number"
              name="year"
              id="year"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              label="Enter rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 mb-1 z-50">
            <div className="flex gap-2 items-center">
              <Checkbox id="type" />
              <p>Consumed</p>
            </div>
            <Datepicker />
          </div>
          <div className='flex justify-between'>
            <Button onClick={handleClose} >Cancel</Button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct
