import axios from 'axios'
try {
    axios.post('http://localhost:3000/users', {
        name: '林倾仙',
        age: 18
    })
} catch (error) {
    console.log(error)
}
