import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import ScrollToTop from '../../../hooks/Scrool-to-top';

const CheckoutForm = ({ data }) => {
    const stripe = useStripe()
    const {user} = useContext(AuthContext)
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState("")
    const [cardError, setCartError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const { price, username, email, _id } = data;
    const priceInt = parseInt(price, 10)
    // console.log(price)


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(`${process.env.REACT_APP_API_LIN}/create-payment-intent`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({ priceInt }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [priceInt]);

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

        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: username,
                    email: email
                }
            }
        })

        if (confirmError) {
            setCartError(confirmError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {
            const payment = {
                priceInt,
                email: user?.email,
                name: user?.displayName,
                transactionId: paymentIntent.id,
                bookingId: _id
            }
            fetch(`${process.env.REACT_APP_API_LIN}/paymentsinfo`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed')
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
        console.log(paymentIntent)
        setProcessing(false)

    }
    return (
        <>
        <ScrollToTop/>
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
                    <button disabled={!stripe || !clientSecret || processing} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        type='submit'
                    >
                        Pay
                    </button>
                </div>
            </form>
            <h3 className='py-5 text-red-500'>{cardError}</h3>
            {
                success &&
                <div className='pb-5'>
                    <p className='text-green-500 text-3xl'>{success}</p>
                    <p className='text-xl pt-2'>Your transactionId: <span className='font-semibold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;