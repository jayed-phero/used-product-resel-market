export const getAllWishlistedProducts = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_LIN}/wishlistedproducts`)

    const wishlist = await res.json()
    return wishlist
}