export const productBooking = async bookingData => {
    const url = `${process.env.REACT_APP_API_LIK}/booking`

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(bookingData)
    })

    const data = await res.json()
    return data
}