import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import { FaDeezer, FaShoppingBasket, FaFileContract, FaProductHunt, FaLandmark, FaAngleRight, FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Sideview.css'


const Sideview = () => {


  const [toggleSale, setToggleSale] = useState(false);
  const [toggleProduct, setToggleProduct] = useState(false);
  const [toggleContact, setToggleContact] = useState(false);
  const [toggleInventory, setToggleInventory] = useState(false);


  const setToggle = (element, setElement) => {
    setToggleSale(false);
    setToggleContact(false);
    setToggleProduct(false);
    setToggleInventory(false);
    setElement(!element)
  }


  return (
    <div className='sidenav'>

      <ul>
        <li>
          <Link to='/' >

            <Typography variant='h6' gutterBottom><FaDeezer /> Dashboard </Typography>

          </Link>
        </li>
        <li>
          <Typography variant='h6' gutterBottom onClick={() => setToggle(toggleSale, setToggleSale)}><FaShoppingBasket /> Sale {toggleSale ? <FaAngleDown /> : <FaAngleRight />}</Typography>

          {
            toggleSale && (
              <li>
                <Link to="/sale">
                  <Typography variant='h6' gutterBottom>Sale</Typography>
                </Link>


                <Link to="/sale-return">
                  <Typography variant='h6' gutterBottom>Sale Return</Typography>
                </Link>

              </li>
            )


          }

        </li>
        <li>


          <Typography variant='h6' gutterBottom onClick={() => setToggle(toggleContact, setToggleContact)}><FaFileContract /> Contacts {toggleContact ? <FaAngleDown /> : <FaAngleRight />}</Typography>


          {
            toggleContact && (
              <li>

                <Link to="/contact">
                  <Typography variant='h6' gutterBottom>Add Contact</Typography>
                </Link>


                <Link to="/suppliers">
                  <Typography variant='h6' gutterBottom>Supplier</Typography>
                </Link>

                <Link to="/Customers">
                  <Typography variant='h6' gutterBottom>Customers</Typography>
                </Link>


              </li>
            )
          }





        </li>



        <li>
 
        <Typography variant='h6' gutterBottom onClick={() => setToggle(toggleProduct, setToggleProduct)}><FaProductHunt/> Products  {toggleProduct  ? <FaAngleDown /> : <FaAngleRight />}</Typography>


          {
            toggleProduct && (
              <li>
                <Link to="newProduct">
                  <Typography variant='h6' gutterBottom>  Add Product</Typography>
                </Link>


                <Link to="/newService">
                  <Typography variant='h6' gutterBottom>Add Service</Typography>
                </Link>

                <Link to="/products">
                  <Typography variant='h6' gutterBottom>Product List</Typography>
                </Link>

                <Link to="/services">
                  <Typography variant='h6' gutterBottom>Service List</Typography>
                </Link>


              </li>
            )
          }





        </li>


        <li>


          <Typography variant='h6' gutterBottom onClick={() => setToggle(toggleInventory, setToggleInventory)}><FaLandmark /> Inventory  {toggleInventory  ? <FaAngleDown /> : <FaAngleRight />}</Typography>

          {
            toggleInventory && (
              <li>
                <Link to="newProduct">
                  <Typography variant='h6' gutterBottom>Add Opening Stock </Typography>
                </Link>


                <Link to="/newService">
                  <Typography variant='h6' gutterBottom>Stock Transfer</Typography>
                </Link>

                <Link to="/products">
                  <Typography variant='h6' gutterBottom>Stock Alert List</Typography>
                </Link>

              </li>
            )
          }




        </li>

      </ul>





    </div>
  )
}

export default Sideview;