// get alll selers for admin 

export const getAllSeller = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_LIN}/alluser?role=seller`)

    const sellers = await res.json()
    return sellers
}



// get all Buyer
export const getAllBuyer = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_LIN}/alluser?role=buyer`)

    const buyers = await res.json()
    return buyers
}



// verify seller
export const verifySeller = async seller => {
    delete seller._id
    const res = await fetch(`${process.env.REACT_APP_API_LIN}/users/${seller.verify}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({ ...seller, verify: 'verified'}),
    })
    const data = await res.json()

    return data
}