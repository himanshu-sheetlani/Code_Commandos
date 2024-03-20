// // var typed=new typed(".text",{
// // Strings:["what","you","are","looking","today"],
// // typespeed:100,
// // backspeed:100,
// // backdelay:1000,
// // loop:true});
// // const toggle = document.getElementById('toggleDark');
// // const body = document.querySelector('body');

// // const { application } = require("express");

// // toggle.addEventListener('click', function(){
// //     this.classList.toggle('bi-moon');
// //     if(this.classList.toggle('bi-brightness-high-fill')){
// //         body.style.background = 'white';
// //         body.style.color = 'black';
// //         body.style.transition = '3s';
// //     }else{
// //         body.style.background = 'black';
// //         body.style.color = 'white';
// //         body.style.transition = '3s';
// //     }
// // });



// API
fetch('http://13.48.136.54:8000/api/api-code')
async function getFacts(){
    try{
        let res=await axis.get("https://13.48.136.54:8000/api/api-code");
        console.log(res.data);
    }catch(c){
        console.log("error- ",e);
    }
}
// onst apiUrl = 'https://13.48.136.54.800';const accessKey = 'YOUR_ACCESS_KEY';
// Function to fetch data from the APIfunction fetchData() {    const requestOptions = {        method: 'POST',        headers: {            'Authorization': `Bearer ${accessKey}`,            'Content-Type': 'application/json'        },        // You can include any payload if required        body: JSON.stringify({ key: 'value' })     };
//     fetch(apiUrl, requestOptions)        .then(response => {            if (!response.ok) {                throw new Error('Network response was not ok');            }            return response.json();        })        .then(data => {            displayResponse(data);        })        .catch(error => {            console.error('There was a problem fetching the data:', error);        });}
// // Function to display the API responsefunction displayResponse(data) {    const responseContainer = document.getElementById('response');    responseContainer.innerHTML = `<p>API Response: ${data.api_code}</p>`;}
// // Add click event listener to the buttondocument.getElementById('fetchData').addEventListener('click', fetchData);

const apiUrl = 'http://13.48.136.54:8000/api/api-code/';
const accessKey = 'Bearer c6bbb8b8-34d2-4ca4-8c0d-09386976fa87';

const postData = {};

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Authorization': accessKey,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log('API Response:', data);
})
.catch(error => {
    console.error('Error:', error);
});

