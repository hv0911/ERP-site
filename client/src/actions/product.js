import axios from 'axios';
import { create_product } from '../Api';

export const createProduct = (product_name, product_sku, unit, brand, category, subCategory, model, alter_quantity, purchase_price, selling_price, min_selling_price, tax, description) => async (dispatch) => {

    try {

        dispatch({
            type: "createProductRequest"
        })

        const { data } = await axios.post(
            create_product,
            { product_name, product_sku, unit, brand, category, subCategory, model, alter_quantity, purchase_price, selling_price, min_selling_price, tax, description },
            {
                headers:{
                    "Content-Type" : "application/json" ,
                }
            }
        )

        dispatch({
            type:"createProductSuccess",
            payload:data.product
        }) ; 

    } catch (error) {
         dispatch({
            type:"createProductFailure",
            payload:error.response.data.message
         })
    }
}

