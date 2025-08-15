import axios from 'axios'

async function updateUser() {
    await axios.put('http://localhost:3000/users/3', {
        name: '云客仙',
        age: 19
    })
}
updateUser()
