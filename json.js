/* const studet ={
    id:1,
    name:'studet name',
    phone:25221566,
    adrees: 'Bangladesh',
}
console.log(studet);

const convert =JSON.stringify(studet)
console.log(convert);

const convertObject = JSON.parse(convert)
console.log(convertObject); */

function loadData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
       .then(res => res.json())
       .then(json =>showData(json) )
}
 

function showData(data) {
    console.log(data);
   
    const div =document.getElementById('div')
    div.innerText =data.title;

}