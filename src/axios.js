import axios from 'axios'
const instance = axios.create(
    {
        // the api (cloud function) url
        baseURL: 'https://us-central1-clone-da39b.cloudfunctions.net/api'
    }
)
export default instance

