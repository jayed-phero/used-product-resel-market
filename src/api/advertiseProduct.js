export const advertiseProductsShow = async (user) => {
    const res = await fetch(`${process.env.REACT_APP_API_LIN}/allproducts?email=${user?.email}`)

    const products = await res.json()
    return products
}

export const advertiseProductsRole = async user => {
    const res = await fetch(`${process.env.REACT_APP_API_LIN}/allproducts?email=${user?.email}`)

    const products = await res.json()
    return products
}

export const getUserRole = async email => {
    const url = `${process.env.REACT_APP_API_LIN}/user/${email}`
    
    const res = await fetch(url)
    const user = await res.json()
    return user?.role
}