function onLoad2(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(Response => Response.json())
    .then(data => loadData(data))
}

function loadData(data){
    const divContainer = document.getElementById("post-container")
    for(const user of data){
        const div = document.createElement("div")
        div.classList.add("user")
        div.innerHTML = `
        <h4>UserID : ${user.userId}</h4>
        <h5>Title : ${user.title}</h5>
        <p>Post: ${user.body}</p>
        `
        divContainer.appendChild(div)
    }
}