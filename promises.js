const posts = [
    {'title':'POST1', 'body':'This is post1 body'},
    {'title':'POST2', 'body':'This is post2 body'}
]

function displayPost() {
    setTimeout(()=>{
        let output = ''
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject("Something went wrong!!!");
            }
        }, 2000); 
    });
}

// createPost({'title':'POST3', 'body':'This is post3 body'})
// .then(displayPost)
// .catch(err => {
//     console.log(err)
// });


// Async / Await

async function init(){
    console.log('Init called!!');
    await createPost({'title':'POST3', 'body':'This is post3 body'});
    displayPost();
}
init();


// Async / Await / Fetch

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('Promise Called ?')
    const data = res.json();
    console.log(data)
}

fetchUsers()


// const promise1 = Promise.resolve('Hello World!!');
// const promise2 = 10;
// const promise3 = new Promise((resolve , reject) => {
//     setTimeout(resolve, 1000, 'Good Bye!!');
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then( res => res.json())

// Promise.all([promise1, promise2, promise3, promise4])
// .then(values => {
//     console.log(values)
// })