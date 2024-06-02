function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displyPost(data))
}
loadData()

function displyPost(datas) {
    
  const postBoX =document.getElementById('post')
    for (const data of datas) {
      const createDiv =document.createElement('div')
      createDiv.innerHTML =`
      <h3>Titel: ${data.title}</h3>
      <h5>Id: ${data.id}</h5>
      <p> Des: ${data.body}</p>
      `
    postBoX.appendChild(createDiv)
    }

}