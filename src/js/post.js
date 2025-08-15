import axios from 'axios'
try {
    axios.post('http://localhost:3000/users', {
        name: '22'
    })
} catch (error) {
    console.log(error)
}
