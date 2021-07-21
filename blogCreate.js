var blogForm = document.getElementById('blog-create-form');

var currUser;

firebase.auth().onAuthStateChanged((user) => {
    currUser = user;
});


blogForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = blogForm['title'].value;
    const content = blogForm['content'].value;
    
    const data = {
        title: title,
        content: content,
        userId: currUser.uid
    }


    db.collection('blogs').add(data)
        .then((data) => {
            window.location.href = "http://localhost:5500/home.html";
            window.location.replace = "http://localhost:5500/home.html";
        })
        .catch(err => {
            alert(err);
        });
});
