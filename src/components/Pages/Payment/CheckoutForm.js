import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCartError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMathod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error)
            setCartError(error.message)
        }
        else {
            setCartError('')
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <div class="mt-8 md:flex md:items-center">
                    <button disabled={!stripe} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        type='submit'
                    >
                        Pay
                    </button>
                </div>
            </form>
            <h3 className='py-5 text-red-500'>{error}</h3>
        </>
    );
};

export default CheckoutForm;