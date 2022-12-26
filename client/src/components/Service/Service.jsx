import React from 'react'
import { Typography, Button } from '@mui/material';
import { useForm } from "react-hook-form";


const Service = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    return (
        <div className='main'>
            <Typography variant='h5' style={{ margin: "1vmax" }}>Add Service</Typography>


            <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
                <div className="contact">

                    <div>
                        <label>Service Name*</label>
                        <input
                            type="text"
                            // placeholder="Product Name"
                            name="product_name"
                            {...register("product_name", { required: true, maxLength: 80 })} />
                    </div>

                    <div>
                        <label>SKU</label>
                        <input
                            type="text"
                            // placeholder="Product Name"
                            name="sku"
                            {...register("sku", { required: true, maxLength: 80 })} />
                    </div>
                    <div>
                        <label>Hourly Rate*</label>
                        <input
                            type="number"
                            // placeholder="Product Name"
                            name="hourly_rate"
                            {...register("hourly_rate", { required: true })} />
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


                </div>

                <div className="buttons" >
                    <Button variant='contained' type="submit">Submit</Button>

                </div>
            </form>

        </div>
    )
}

export default Service;