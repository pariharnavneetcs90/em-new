import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createOrder } from './../../../State/Order/Action';

const DelevryAdressForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //ye jab click kar ke submit ho uski function ho vo likha hai
    const handelSubmit = (e) => {
        //form apne aap submit na ho jaye is liye e.preventDefault();
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const address = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            streetAddress: data.get("address"),
            city: data.get("city"),
            state: data.get("state"),
            zipCode: data.get("zip"),
            mobile: data.get("phoneNumber")
        }
        console.log("address", address)
        const orderData = { address, navigate }
        dispatch(createOrder(orderData))
        // navigate('/checkout?step=3')
    }

    return (
        <div>

            <Grid container spacing={4} alignItems="center" justifyContent="center">

                {/* <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-scroll'>

                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AdressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='container' onClick={() => navigate('/checkout?step=3')} >
                            Delever here
                        </Button>
                    </div>
                </Grid> */}

                <Grid alignItems="center" justifyContent="center" item xs={12} lg={7}>

                    <div className="border rounded-s-md shadow-md p-5">

                        <form onSubmit={handelSubmit}>
                            <Grid container spacing={3}>
                                {/* first name */}
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='firstName'
                                        name='firstName'
                                        label="First Name"
                                        fullWidth
                                        autoComplete='given-name'
                                    />


                                </Grid>
                                {/* last name */}
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='lastName'
                                        name='lastName'
                                        label="Last Name"
                                        fullWidth
                                        autoComplete='given-name'
                                    />


                                </Grid>
                                {/* address */}
                                <Grid item xs={12} >

                                    <TextField
                                        required
                                        id='address'
                                        name='address'
                                        label="address"
                                        fullWidth
                                        autoComplete='given-name'
                                        multiline
                                        rows={4}
                                    />


                                </Grid>
                                {/* city */}
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label="city"
                                        fullWidth
                                        autoComplete='given-name'
                                    />


                                </Grid>
                                {/* state */}
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='state'
                                        name='state'
                                        label="state/province/region"
                                        fullWidth
                                        autoComplete='given-name'
                                    />


                                </Grid>
                                {/* zip */}
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='zip'
                                        name='zip'
                                        label="zip"
                                        fullWidth
                                        autoComplete='shipping postal-code'
                                    />


                                </Grid>
                                {/* phoneNumber */}
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='phoneNumber'
                                        name='phoneNumber'
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete='given-name'
                                    />


                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    {/* <input type="submit" value="deliver here" /> */}

                                    <Button sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='container' type='submit'>
                                        Delever here
                                    </Button>

                                </Grid>
                            </Grid>
                        </form>
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default DelevryAdressForm