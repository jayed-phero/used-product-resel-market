export const getAllWishlistedProducts = async (email) => {
    const res = await fetch(`${process.env.REACT_APP_API_LIN}/wishlistedproducts/${email}`)

    const wishlist = await res.json()
    return wishlist
}