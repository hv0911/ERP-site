import React from 'react'
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'





const ProductList = () => {
    return (
        <div className='main'>

            <Link to='/product' style={{ textDecoration: 'none' }}>
                <Button variant='contained'><FaPlus /> Add Product</Button>
            </Link>


            <Typography variant='h5' style={{ margin: "1vmax" }}>Product List</Typography>


        </div>
    )
}

export default ProductList;