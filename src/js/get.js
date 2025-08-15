import axios from 'axios'

async function getUsers() {
    const res = await axios.get('http://localhost:3000/users?page')
    console.log(res.data)
}
getUsers()
