export const allProductForSeller = async (user) => {
    const res = await fetch(`${process.env.REACT_APP_API_LIN}/allproducts?email=${user?.email}`)

    const products = await res.json()
    return products
}


export const advertiseProduct = async product => {
    delete product._id
    const res = await fetch(`${process.env.REACT_APP_API_LIN}/allproducts/${product.role}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({ ...product, role: 'advertised'}),
    })
    const data = await res.json()

    return data
}


export const advertiseClose = async product => {
    delete product._id
    const res = await fetch(`${process.env.REACT_APP_API_LIN}/allproducts/${product.role}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({ ...product, role: 'available'}),
    })
    const data = await res.json()

    return data
}