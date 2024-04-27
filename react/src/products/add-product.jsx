import { useState } from "react"
import axios from 'axios'
import ProductForm from "./product-form"

export default function AddProduct() {


    const [formValues, setFormValues] = useState({
        name: '',
        price: '',
    })

        const onSubmit = (productObject) => {
        axios.post('http://localhost:8000/products/create', productObject)
            .then(res => {
                if(res.status === 200) {
                    alert("Product created successfully")
                }
            })
            .catch(err => alert('something went wrong'))
    }

    return (
        <ProductForm
         initialValues={formValues}
         onSubmit={onSubmit}
         enableReinitialize>
             Create Product  
         </ProductForm>
    );
}
