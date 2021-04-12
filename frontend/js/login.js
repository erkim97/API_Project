function login() {
    window.event.preventDefault();
    let username = document.getElementById("usernameInput").value.trim();
    let password = document.getElementById("passwordInput").value.trim();

    let url = `https://g11-workout-server.herokuapp.com/api/v1/login`;
    const userInfo = {
        username: username,
        password: password
    };

    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.msg == "User logged in successfully") {
            window.location = `https://comp4537-termproj.herokuapp.com/index.html`;
        } else if (data.msg == "admin") {
            window.location = `https://comp4537-termproj.herokuapp.com/4537/termproj/api/v1/admin.html`;
        } else {
            alert(data[0].error);
        }
    }).catch(e => console.log(e))
}