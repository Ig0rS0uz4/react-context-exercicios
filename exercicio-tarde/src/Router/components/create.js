import axios from "axios"

const body = {
    name: "",
    email: ""
}
const headers = {
    Autorization: "igor-souza-ammal"
}
const createUser = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})

export default function CreateUser (){
    return(
        createUser
    )
}