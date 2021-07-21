firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        var homeComponent = document.querySelector('.blogs-component');
        window.location.href = "http://localhost:5500/signIn.html";
        window.location.replace = "http://localhost:5500/signIn.html";
    } 
});