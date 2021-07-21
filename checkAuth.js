var createBlog = document.getElementById('create-blog');

createBlog.addEventListener('click', (e) => {
    e.preventDefault();

    var currentUserStatus = firebase.auth().currentUser;

    console.log(currentUserStatus);

    if(!currentUserStatus){
        window.location.href = "http://localhost:5500/signin.html";
        window.location.replace = "http://localhost:5500/signin.html";
    }

    else{
        console.log(currentUserStatus);
        window.location.href = "http://localhost:5500/blogCreateForm.html";
        window.location.replace = "http://localhost:5500/blogCreateForm.html";
    }
});