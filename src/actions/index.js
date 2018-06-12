import axios from 'axios';

export const userTodo = username => ({
    type: 'CHANGE_USER',
    payload: username
  })

export const statusTodo = status => ({
    type: 'CHANGE_STATUS',
    payload: status
})

export const loginTodo = status => ({
    type: 'CHANGE_LOGIN_ERROR',
    payload: status
})

export const categoryTodo = category => ({
    type: 'CHANGE_CATEGORY',
    payload: category
})

export const searchTodo = string => ({
    type: 'CHANGE_SEARCH',
    payload: string
})
export const productsTodo = products => ({
    type: 'CHANGE_PRODUCTS',
    payload: products
})



// export const response = code => ({
//     type: 'RESPONSE',
//     payload: code
// })


// export function userFunc (username) {
//     return {
//         type: 'CHANGE_USER',
//         payload: username
//   };
// }

// export function statusFunc (status) {
//     return {
//         type: 'CHANGE_STATUS',
//         payload: status
//   };
// }

// export function errorFunc (status) {
//     return {
//         type: 'CHANGE_LOGIN_ERROR',
//         payload: status
//   };
// }

// export function post_login(response) {
//     return (dispatch) => {
//         if ( response.data.status == 200 ) {
//             localStorage.setItem('user', response.data.content);
//             dispatch(userFunc(response.data.content));
//             dispatch(statusFunc(true));
//             dispatch(errorFunc(false));

//         }
//         else {
//             dispatch(errorFunc(true));
//             // localStorage.setItem('nothing', "dsds");

//         }
//         // dispatch(statusFunc(true));

//     //     fetch('http://127.0.0.1:8000/website/login/', {
//     //         method: 'POST', // or 'PUT'
//     //         body: payload, // data can be `string` or {object}!
//     //         headers:{
//     //           'Content-Type': 'application/json'
//     //         }
//     //     }).then( res => {
//     //         if ( res.data.status == 200 ) {
//     //             dispatch(userFunc(res.data.content));
//     //             dispatch(statusFunc(true));
//     //             dispatch(errorFunc(false));
//     //             localStorage.setItem('user', res.data.content);

//     //         }
//     //         else {
//     //             dispatch(errorFunc(true));
//     //             localStorage.setItem('nothing', "dsds");

//     //         }

//     //     });
//     //     dispatch(statusFunc(true));

//     // }
//         // axios.post('http://127.0.0.1:8000/website/login/',	payload)
//         // .then((response) => {
//         //     if ( response.data.status == 200 ) {
//         //         localStorage.setItem('user', response.data.content);
//         //         dispatch(userFunc(response.data.content));
//         //         dispatch(statusFunc(true));
//         //         // dispatch(errorFunc(false));

//         //     }
//         //     else {
//         //         dispatch(errorFunc(true));
//         //         // localStorage.setItem('nothing', "dsds");

//         //     }
//         //     // dispatch({ type: 'RESPONSE', payload: response.data.status })
//         // })
//         // .catch( (error) => {
//         //     alert(error);

//         // });
//         // dispatch(statusFunc(true));
//     };
// }