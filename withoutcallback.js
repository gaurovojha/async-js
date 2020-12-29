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
    setTimeout(()=>{
        posts.push(post)
    }, 2000);

}

displayPost()
createPost({'title':'POST3', 'body':'This is post3 body'})