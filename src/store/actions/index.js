import axios from 'axios'
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";


// axios.get('http://api.giphy.com/v1/gifs/trending?api_key=lSmjXGZCsOtMLLkCAKpFVjc8oxNTptPt&limit=10')
//     .then((res) => {
//         console.log("trending GIF", res.data)
//     })

export const fetchData = (number) => (dispatch)=> {
    dispatch({type: FETCH_DATA_START})
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=lSmjXGZCsOtMLLkCAKpFVjc8oxNTptPt&limit=${number}`)
    .then((res) => {
        console.log("api response", res)
    })
    
}