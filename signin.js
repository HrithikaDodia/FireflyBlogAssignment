var signin = document.getElementById('signin-form');

console.log(signin);

signin.addEventListener('submit', (e) => {
    e.preventDefault();

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
        const email = signin['email'].value;
        const password = signin['password'].value;
        return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .then(cred => {
        // console.log(cred);
        window.location.href = "http://localhost:5500/home.html";
        window.location.replace = "http://localhost:5500/home.html";
    })
    .catch(err => {
        alert('Invalid Credentials');
    });
});

var signinGoogle = document.getElementById('google-btn');

signinGoogle.addEventListener('click', (e) => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        var credential = result.credential;
    }).catch((error) => {
        console.log(error);
    });
});