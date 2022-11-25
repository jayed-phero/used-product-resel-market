export const authTokenAndSaveUser = userData => {
    const currentUser = {
        email: userData.email,
        name: userData.userName,
        role: userData.role
    }

    fetch(`${process.env.REACT_APP_API_LIN}/user/${userData?.email}` , {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(currentUser),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('rsProduct-token', data.token)
    })
}