import axios from 'axios'

// async function getUsers() {
//     const res = await axios.get('http://localhost:3000/users')
//     console.log(res)
// }

async function getUsers() {
    const res = await axios.get('http://localhost:3000/users?_embed=products')

    console.log(JSON.stringify(res.data))
}
getUsers()
