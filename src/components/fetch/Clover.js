import React from 'react';
import {useEffect, useState} from 'react';

const Clover_Fetch = () => {

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // // myHeaders.append("Access-Control-Allow-Origin", "*");
    // myHeaders.append("x-api-key", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJvZmYiOmZhbHNlLCJpc3MiOm51bGwsInN1YiI6IkRlcyBQbGFpbmVzIE9mZmljZSBFcXVpcG1lbnQiLCJhdWQiOiI5NDQ3ZjRjMi0yNmQwLTRhNWYtYjBiZS0xNjZiNTM2ZmJiMDIiLCJpYXQiOjE0NzU2Nzk0OTksIm5iZiI6bnVsbCwiZXhwIjpudWxsfQ.bkbCljMwMO7IfEa5sC0GOFHC249Y82oFUjmKE07O4dmC8qdjD6mSWqTsd6c3evpSac06fJbWg_FOdgjAwlAvHA");
    // myHeaders.append("Authorization", "Basic dGRjcnV6QGZvb3RwcmludG1wcy5jb206QmFzZWJhbGwyMDIw");
    // myHeaders.append("Accept", "application/json");
    // myHeaders.append("Cookie", "ASP.NET_SessionId=awtizzy3tsazktvnzrcqb0cl");

    // var raw = "";

    // var requestOptions = {
    //     method: 'GET',
    //     mode: 'no-cors',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'
    // };

    // fetch("https://axess.axessmps.com/restapi/3.13.0/auth", requestOptions)
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));

    const api_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJvZmYiOmZhbHNlLCJpc3MiOm51bGwsInN1YiI6IkRlcyBQbGFpbmVzIE9mZmljZSBFcXVpcG1lbnQiLCJhdWQiOiI5NDQ3ZjRjMi0yNmQwLTRhNWYtYjBiZS0xNjZiNTM2ZmJiMDIiLCJpYXQiOjE0NzU2Nzk0OTksIm5iZiI6bnVsbCwiZXhwIjpudWxsfQ.bkbCljMwMO7IfEa5sC0GOFHC249Y82oFUjmKE07O4dmC8qdjD6mSWqTsd6c3evpSac06fJbWg_FOdgjAwlAvHA';
    const [clover, setClover] = useState('');
    
    // const CloverData = async () => {
    //     let url = "https://axess.axessmps.com:443/restapi/3.13.0/auth";

    //     const response = await fetch(url, {
    //         method: 'GET',
    //         mode: 'no-cors',
    //         // redirect: 'follow',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "x-api-key": api_key,
    //             "Authorization": "Basic dGRjcnV6QGZvb3RwcmludG1wcy5jb206QmFzZWJhbGwyMDIw",
    //             "Accepts": "application/json",
    //             "Cookie": 'ASP.NET_SessionId=awtizzy3tsazktvnzrcqb0cl',
    //             "Access-Control-Allow-Origin": "*"
    //         }
            
    //     });  

    //     const data = await response.json();
    //     setClover(data);
    //     console.log(clover);
    
    // }
    
    useEffect(() => {
        const CloverData = async () => {
            let url = "https://axess.axessmps.com:443/restapi/3.13.0/auth";
    
            const response = await fetch(url, {
                method: 'GET',
                // mode: 'no-cors',
                // redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": api_key,
                    "Authorization": "Basic dGRjcnV6QGZvb3RwcmludG1wcy5jb206QmFzZWJhbGwyMDIw",
                    "Accepts": "application/json",
                    "Cookie": 'ASP.NET_SessionId=awtizzy3tsazktvnzrcqb0cl',
                    "Access-Control-Allow-Origin": "*"
                }
                
            });  
    
            const data = await response.json();
            setClover(data);
            console.log(clover);
        
        };
        CloverData();
    }, []);

    return (
        <h1>Fetching Clover API</h1>
    );
        
};
        
export default Clover_Fetch;
    

// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Basic dGRjcnV6QGZvb3RwcmludG1wcy5jb206QmFzZWJhbGwyMDIw");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("x-api-key", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJvZmYiOmZhbHNlLCJpc3MiOm51bGwsInN1YiI6IkRlcyBQbGFpbmVzIE9mZmljZSBFcXVpcG1lbnQiLCJhdWQiOiI5NDQ3ZjRjMi0yNmQwLTRhNWYtYjBiZS0xNjZiNTM2ZmJiMDIiLCJpYXQiOjE0NzU2Nzk0OTksIm5iZiI6bnVsbCwiZXhwIjpudWxsfQ.bkbCljMwMO7IfEa5sC0GOFHC249Y82oFUjmKE07O4dmC8qdjD6mSWqTsd6c3evpSac06fJbWg_FOdgjAwlAvHA");
// myHeaders.append("Accept", "application/json");
// // myHeaders.append("Cookie", "ASP.NET_SessionId=awtizzy3tsazktvnzrcqb0cl");

// var raw = "";

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://axess.axessmps.com/restapi/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

//   return (
//     <h1>Fetching Clover API</h1>
// );

// };

// export default Clover_Fetch;

// fetch(BaseURL, {
//         method: 'GET',
//         // body: JSON.stringify(auth),
//         headers: {
//             Authorization: Base64,
//             'X-API-KEY': api_key,
//             'content-type': 'application/json',
//             'accept': 'application/json',
//         }
//     }).then(response => response.json())
//     .then(json => {
//         console.log(json)
//     })


// var user = "tdcruz@footprintmps.com";
// var passWord = "Baseball2020";

// function authenticateUser(user, password) {
//     var token = user + ":" + password;

//     // Should i be encoding this value????? does it matter???
//     // Base64 Encoding -> btoa
//     var hash = btoa(token);

//     return "Basic " + hash;
// }

// function CallWebAPI() {

//     // New XMLHTTPRequest
//     var request = new XMLHttpRequest();
//     request.open("GET", "https://axess.axessmps.com/restapi/3.12.0/", true);
//     request.setRequestHeader("Authorization", authenticateUser(user, passWord)

//     );
//     request.send();
//     // view request status
//     alert(request.status);
//     response.innerHTML = request.responseText;
// }


// // let h = new Headers();
// // h.append('Accept', 'application/json');
// // let req = new Request(BaseURL, {
// //     method: 'GET',
// //     headers: h,
// //     mode: 'cors'
// // });

// // fetch(BaseURL)
// //     .then((response) => {
// //         if (response.ok) {
// //             return response.json();
// //         } else {
// //             throw new Error('BAD HTTP stuff');
// //         }
// //     })
// //     .then((jsonData) => {
// //         display(jsonData)
// //     })
// //     .catch((err) => {
// //         console.log('ERROR', err.message);
// //     });

// // function testingAPI() {
// //     var key = api_key;
// //     var url = BaseURL;
// //     console.log(httpGet(url, key));
// // }

// // function httpGet(url, key) {
// //     var xmlHttp = new XMLHttpRequest();
// //     xmlHttp.open('GET', url, false);
// //     xmlHttp.setRequestHeader(api_key, key);
// //     xmlHttp.send(null);
// //     return xmlHttp.responseText;
// // }

// // fetch(BaseURL)
// //     .then(data => data.json())
// //     .then(json => {
// //         console.log(json)
// //     })