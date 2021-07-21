
var logout = document.getElementById('logout');

logout.addEventListener('click', (e) => {
    e.preventDefault();

    firebase.auth().signOut()
        .then(() => {
            // console.log(cred);
            window.location.href = "http://localhost:5500/signin.html";
            window.location.replace = "http://localhost:5500/signin.html";
        })
        .catch(err => {
            alert('Invalid Action');
        });
});
