import React from 'react'
import { Typography,Button } from '@mui/material'
import { useForm } from "react-hook-form";
import './Contact.css'

const ContactForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);


    console.log(watch("example"))
    return (
        <div className='main'>

            <Typography variant='h5' style={{ margin: "1vmax" }}>Add Contact</Typography>



            <form onSubmit={handleSubmit((data) => console.log(data))}>

                <div className='contact'>
                    <div>
                        <label>Contact type</label>
                        <select {...register("contact_type", { required: true })}>
                            <option value="Supplier">Supplier</option>
                            <option value="Customer">Customer</option>

                        </select>
                    </div>

                    <div>
                        <label>Name*</label>
                        <input
                            type="text"
                            placeholder="Name"
                            {...register("name", { required: true, maxLength: 80 })} />
                    </div>
                    {/* <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} /> */}
                    <div>
                        <label>Email*</label>
                        <input
                            type="text"
                            placeholder="Email"
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    </div>
                    <div>
                        <label>Buisness Name</label>
                        <input
                            type="text"
                            placeholder="Buisness Name"
                            {...register("buisness_name")} />
                    </div>
                    <div>
                        <label>Contact Number</label>
                        <input
                            type="tel"
                            placeholder="Mobile number"
                            {...register("mobile_no", { required: true, minLength: 6, maxLength: 12 })} />
                    </div>
                    <div>
                        <label>Tax Number</label>
                        <input
                            type="text"
                            placeholder="Tax %"
                            {...register("name", { required: true, maxLength: 20 })} />
                    </div>
                    <div>
                        <label>Alt Contact Number</label>
                        <input
                            type="tel"
                            placeholder="alt mobile number"
                            {...register("alt_mobile_no", { required: true, minLength: 6, maxLength: 12 })} />
                    </div>
                    <div>
                        <label>Tax</label>
                        <input
                            type="number"
                            placeholder="in %"
                            {...register("tax", { required: true, maxLength: 2 })} />
                    </div>

                </div>
                <div id="address">
                    <label>Address</label>
                    <input
                        type="text"
                        placeholder="Address"
                        {...register("address")} />
                </div>
                <div>
                    <label>Note</label>
                    <textarea
                        cols="30"
                        rows="10"
                        {...register("address")} ></textarea>
                </div>
           <div className="buttons" >
           <Button variant='contained' type="submit">Submit</Button>

           </div>
            </form>

        </div>
    )
}

export default ContactForm ;