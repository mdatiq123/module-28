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

const displayPost = (posts) => {
    // console.log(post);

    // 1.get the post container
    const postContainer =document.getElementById("post-container")
    postContainer.innerHTML = ""
    // console.log(postContainer);

    posts.forEach(post =>{
        // console.log(post.title);
        // 2.create a html element
        const li =document.createElement("li")
        li.innerText = post.title
        // console.log(li);
        // 3.append element to parent
        postContainer.appendChild(li)
    })
}

