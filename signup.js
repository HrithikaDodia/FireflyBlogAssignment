// const formSubmit = function(){
    
//     const email = document.getElementById('email');
//     const password = document.getElementById('password');
//     console.log(email);
//     console.log(password);

//     auth.createUserWithEmailAndPassword(email, password)
//         .then(cred => {
//             console.log(cred);
//         });
//     return false;
// }

var signup = document.getElementById('signup-form');

console.log(signup);

signup.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signup['email'].value;
    const password = signup['password'].value;

    // var newUser;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            console.log(cred.user.uid);

            var newUser = {
                email: email,
                password: password,
                uid: cred.user.uid,
            };

            return db.collection('users').add(newUser);
        })
        .then((data) => {
            window.location.href = "http://localhost:5500/home.html";
            window.location.replace = "http://localhost:5500/home.html";
        })
        .catch(err => {
            alert(err);
        });
});
