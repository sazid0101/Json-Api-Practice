function onLoad(){
    fetch("https://jsonplaceholder.typicode.com/users")
.then(Response => Response.json())
.then(data => showData(data))
}

function showData(data){
    const ul = document.getElementById("ul-list")
    const ul2 = document.getElementById("ul-list2")
    for(const user of data){
        const li = document.createElement('li')
        const li2 = document.createElement("li")
        li.innerText = user.name
        li2.innerText = user.email
        ul.appendChild(li)
        ul2.appendChild(li2)
    }
}