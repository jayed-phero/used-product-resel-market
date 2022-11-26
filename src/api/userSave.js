export const authTokenAndSaveUser = userData => {
    const currentUser = {
        email: userData.email,
        name: userData.userName,
        role: userData.role,
        verify: userData.verify,
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


export const getUserRole = async email => {
    const url = `${process.env.REACT_APP_API_LIN}/user/${email}`
    
    const res = await fetch(url)
    const user = await res.json()
    return user?.role
}


