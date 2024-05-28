import axios from "axios"
const url = "https://swapi.dev/api/people/1/"
function ApiCard() {
    axios.get(url).then((response) => {
        console.log(response.data)
        for (let key in response.data) {
            console.log(key, response.data[key])
        }
    }).catch( (error) => {
            console.log(error)
    })
}

export default ApiCard