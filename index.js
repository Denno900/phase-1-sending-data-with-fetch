
function submitData(userName, userEmail){
    const user = {
        "name":`${userName}`,
        "email":`${userEmail}`
    }
    return fetch('http://localhost:3000/users/1', {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)

    })
       .then(response => response.json())
       .then(data => document.body.innerHTML = data["id"])
       .catch(error => document.body.innerHTML = error.message)

}   

console.log(submitData("Dennis", "denno01@gmail.com"))
