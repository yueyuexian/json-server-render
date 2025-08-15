import axios from 'axios'

async function deleteUser() {
    await axios.delete('http://localhost:3000/users/4')
}
deleteUser()
