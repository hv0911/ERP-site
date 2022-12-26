import React from 'react'
import { Typography, Button } from '@mui/material'
import { useForm } from "react-hook-form";
import { useDispatch  } from 'react-redux';
import { createProduct } from '../../actions/product'


const ContactForm = () => { 

    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data)=>{
       const { product_name, product_sku, unit, brand, category, subCategory, model, alter_quantity, purchase_price, selling_price, min_selling_price, tax, description }  = data ;
       dispatch( createProduct( product_name, product_sku, unit, brand, category, subCategory, model, alter_quantity, purchase_price, selling_price, min_selling_price, tax, description ))
    }


    console.log(watch("example"))
    return (
        <div className='main'>

            <Typography variant='h5' style={{ margin: "1vmax" }}>Add Product</Typography>



            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='contact'>
                    {/* <div>
                        <label>Contact type</label>
                        <select {...register("contact_type", { required: true })}>
                            <option value="Supplier">Supplier</option>
                            <option value="Customer">Customer</option>

                        </select>
                    </div> */}

                    <div>
                        <label>Product Name*</label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            name="product_name"
                            {...register("product_name", { required: true, maxLength: 80 })} />
                    </div>
                    {/* <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} /> */}
                    <div>
                        <label>Product SKU</label>
                        <input
                            type="text"
                            placeholder="Product SKU"
                            name='product_sku'
                            {...register("product_sku", { required: true, minLength: 4, maxLength: 20 })} />
                    </div>
                    <div>
                        <label>Unit</label>
                        <input
                            type="text"
                            placeholder="Unit"
                            name='unit'
                            {...register("unit", { required: true })} />
                    </div>
                    <div>
                        <label>Brand</label>
                        <input
                            type="text"
                            placeholder="Brand"
                            name='brand'
                            {...register("brand", { required: true })} />
                    </div>
                    <div>
                        <label>Model</label>
                        <input
                            type="text"
                            placeholder="Model"
                            name='model'
                            {...register("model", { required: true })} />
                    </div>
                    <div>
                        <label>Category</label>
                        <input
                            type="text"
                            placeholder="Category"
                            name='category'
                            {...register("category", { required: true })} />
                    </div>
                    <div>
                        <label>Sub Category</label>
                        <input
                            type="text"
                            placeholder="Sub Category"
                            name='sub_category'
                            {...register("sub_category", { required: true })} />
                    </div>

                    <div>
                        <label>Alert Quantity</label>
                        <input
                            type="number"
                            // placeholder="Sub "
                            name='alter_qauntity'
                            {...register("alter_qauntity", { required: true })} />
                    </div>

                    <div>
                        <label>Purchase Price</label>
                        <input
                            type="number"
                            // placeholder="Sub "
                            name='purchase_price'
                            {...register("purchase_price", { required: true })} />
                    </div>


                    <div>
                        <label>Selling Price</label>
                        <input
                            type="number"
                            // placeholder="Sub "
                            name='selling_price'
                            {...register("selling_price", { required: true })} />
                    </div>


                    <div>
                        <label>Min Selling Price</label>
                        <input
                            type="number"
                            // placeholder="Sub "
                            name='min_selling_price'
                            {...register("min_selling_price", { required: true })} />
                    </div>

                    <div>
                        <label>Tax</label>
                        <input
                            type="number"
                            placeholder="in (%)"
                            name='tax'
                            {...register("min_selling_price", { required: true, maxLength: 2 })} />
                    </div>



                </div>

                <div>
                    <label>Description</label>
                    <textarea
                        cols="30"
                        rows="10"
                        name='description'
                        {...register("description")} >
                    </textarea>
                </div>

                {/* <input type="submit" /> */}
                <div className="buttons" >
                    <Button variant='contained' type="submit">Submit</Button>

                </div>            </form>

        </div>
    )
}

export default ContactForm;