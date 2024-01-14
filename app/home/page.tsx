'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from "antd";
import CustomModal from '@/components/CustomModal';
import toast from 'react-hot-toast';
import { Wine } from '../../interfaces/wine';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Button, Modal } from "flowbite-react";
import CreateProduct from '@/components/CreateProduct';
import EditProduct from '@/components/EditProduct';
import DeleteProduct from '@/components/deleteProduct';

function HomePage() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [loading, setLoading] = React.useState(false)

  const handleCreate = () => {
    setOpenDeleteModal(false);
    setOpenEditModal(false);
    setOpenCreateModal(true);
  };

  const handleUpdate = (id: string) => {
    setOpenDeleteModal(false);
    setOpenCreateModal(false);
    setOpenEditModal(true);
  };

  const handleDelete = (id: string) => {
    setOpenEditModal(false);
    setOpenCreateModal(false);
    setOpenDeleteModal(true);
  };

  const handleClose = () => {
    setOpenEditModal(false);
    setOpenCreateModal(false);
    setOpenDeleteModal(false);
  };

  const [data, setData] = useState<Wine[]>([
    {
      id: '4567687',
      name: "Charx",
      // year: new Date(),
      type: 'red blend',
      varietal: 'cab sav',
      rating: 3,
      consumed: true,
      // dateConsumed: new Date()
    },
    {
      id: '4567687',
      name: "Charx",
      // year: new Date(),
      type: 'red blend',
      varietal: 'cab sav',
      rating: 3,
      consumed: true,
      // dateConsumed: new Date()
    },
    {
      id: '4567687',
      name: "Charx",
      // year: new Date(),
      type: 'red blend',
      varietal: 'cab sav',
      rating: 3,
      consumed: true,
      // dateConsumed: new Date()
    },
    {
      id: '4567687',
      name: "Charx",
      // year: new Date(),
      type: 'red blend',
      varietal: 'cab sav',
      rating: 3,
      consumed: true,
      // dateConsumed: new Date()
    },
  ])
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState("");
  const [sheetData, setSheetData] = useState<Wine[]>([]);

  const showModal = (id: string) => {
    setOpen(true);
    setProductId(id)
  };

  const hideModal = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/company/fetch');
  //       setData(response.data);
  //     } catch (error: any) {
  //       console.error(error.message);
  //     }
  //   };
  //   fetchData();
  // }, [data]);

  const deleteProductHandler = (id: string) => {
    // dispatch(deleteProduct(id));
    setOpen(false);
    setTimeout(() => {
    }, 100);
    toast('Product deleted')
  };

  const columns = [
    { dataIndex: "id", title: "ID" },

    {
      dataIndex: "name",
      title: "Name",
    },
    {
      dataIndex: "year",
      title: "Year",
    },

    {
      dataIndex: "type",
      title: "Type",
    },

    {
      dataIndex: "rating",
      title: "Rating",
    },
    {
      dataIndex: "consumed",
      title: "Consumed",
    },
    {
      dataIndex: "date",
      title: "Consumed date",
    },
    {
      dataIndex: "action",
      title: "Action",
    },
  ];

  const rows = [] as any;

  data &&
    data.forEach((item) => {
      rows.push({
        id: item.id,
        name: item?.name,
        // // year: item?.year,
        type: item?.type,
        rating: item?.rating,
        consumed: item?.consumed,
        date: item?.dateConsumed,
        action: (
          <div className="flex gap-4 items-center">
            <div
              className="ms-3 fs-3 text-danger bg-transparent border-0 cursor-pointer"
            onClick={() => handleUpdate(item?._id)}
            >
              <AiFillEdit size={18} />
            </div>
            <div
              className="ms-3 fs-3 text-danger bg-transparent border-0 cursor-pointer"
              onClick={() => handleDelete(item?._id)}
            >
              <AiFillDelete size={18} />
            </div>
          </div>
        ),
      });
    });

  return (
    <>
      <div className="flex w-full">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl mb-[32px]">Wines</h1>
            <button onClick={handleCreate} className='px-2'>Create</button>
          </div>
          <div>
            <Table columns={columns} dataSource={rows} />
          </div>
        </div>
      </div>
        <Modal
          show={openCreateModal}
          position="center"
          onClose={handleClose}
        >
          <Modal.Body>
            <CreateProduct handleClose={handleClose} />
          </Modal.Body>
        </Modal>
        <Modal
          show={openEditModal}
          position="center"
          onClose={handleClose}
        >
          <Modal.Body>
            <EditProduct handleClose={handleClose} />
          </Modal.Body>
        </Modal>
        <Modal
          show={openDeleteModal}
          position="center"
          onClose={handleClose}
        >
          <Modal.Body>
            <DeleteProduct handleClose={handleClose} />
          </Modal.Body>
        </Modal>
    </>
  )
}

export default HomePage
