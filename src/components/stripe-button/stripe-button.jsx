import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const paymentForStripe = price * 100;
    const publishKey = 'pk_test_51Is0ZgSIFHVlUbMvjhdaAVfL5kV5Z9ZEk3vi3keTwfYJAXlrvp6ShbkBxX1B8hyHpZVM1q9kVFZQ2txBpKB8bDHm00eDjre3Oy'
    const onToken = (token)=>{
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <div>
            <StripeCheckout 
                label="Pay Now"
                name= 'CRWN Clothing Ltd.'
                billingAddress
                shippingAddress
                image="https://svgshare.com/i/CUz.svg"
                description={`Your total is $${price}`}
                amount={paymentForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishKey}
            />
        </div>
    )
}

export default StripeButton
