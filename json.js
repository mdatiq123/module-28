// console.log("json jsFile connected");

// const person = {
//     name : "Atiq" ,
//     age : 34 ,
//     friends : ["alif" ,"Asif" , "Abir"] ,
//     isRich : false ,
//     weight : 69
// }
// console.log(person ,typeof person);

// const personJson = JSON.stringify(person)
// console.log(personJson , typeof personJson);

// const personObject = JSON.parse(personJson)
// console.log(personObject ,typeof personObject) ;



const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
        })
}


const loadPost = () => {
    const urlPost = "https://jsonplaceholder.typicode.com/users/1/posts"
    fetch(urlPost)
    .then(res => res.json())
    .then(data =>{
        // console.log(data);
        displayPost(data)
    })
}


const displayPost = (posts) =>{
    // 1.get the element
    const postContainer =document.getElementById("post-container")
    postContainer.innerHTML = ""


    posts.forEach(post =>{
        // console.log(post);
        // 2. create element
        const div =document.createElement("div")
        div.innerHTML = `<div class="card-body border shadow rounded-sm h-full">
                <h2 class="card-title text-primary uppercase text-sm">${post.title.slice(0, 20)}...</h2>
                <p class="text-gray-600">${post.body}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-sm btn-ghost">Read More</button>
                </div>
            </div>      
        ` 
        // console.log(p);
        // 3.append child element to parent
        postContainer.appendChild(div)
    })
}
