export const authTokenAndSaveUser = user => {
    const currentUser = {
        email: user.email
    }

    fetch(`${process.env.REACT_APP_API_LIN}/user/${user?.email}` , {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(currentUser),
    })
    .thne(res => res.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('rsProduct-token', data.token)
    })
}