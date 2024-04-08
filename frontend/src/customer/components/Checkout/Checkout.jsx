import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DelevryAdressForm from './DelevryAdressForm';
import OrderSummery from './OrderSummery';


// const steps = ['Login', 'Delevery Adress', 'Order summery', 'Payment'];
const steps = ['Login', 'Delevery Adress'];
export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);
    //upar usl me har step aane ke liye matlab second step hai to =?
    const location = useLocation();
    const querySearch = new URLSearchParams(location.search)

    const step = querySearch.get("step")

    // this can be used for fixing carousel
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };



    return (
        <div className='px-1 lg:px-20'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={step}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};


                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>

                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {/* yaha pe content likha hai */}

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>




                        </Box>

                        <div className='mt-10'>
                            {step == 2 ? <DelevryAdressForm /> : null}
                        </div>
                    </React.Fragment>
                )}
            </Box>
        </div>

    );
}
