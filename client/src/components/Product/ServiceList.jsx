import React from 'react'
import { Typography, Button } from '@mui/material'
import {FaPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const ServiceList = () => {
    return (
        <div className='main'>
            <Link to='/product' style={{ textDecoration: 'none' }}>
                <Button variant='contained'><FaPlus /> Add Service</Button>
            </Link>


            <Typography variant='h5' style={{ margin: "1vmax" }}>Service List</Typography>



        </div>
    )
}

export default ServiceList;