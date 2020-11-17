import axios from 'axios'
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";


axios.get('https://avatars.dicebear.com/api/human/:example.svg')
    .then((res) => {
        console.log("MEME API RESPONSE", res.data)
    })

// export const fetchData = () = (dispatch) => {
    
// }