function register() {
    window.event.preventDefault();
    let username = document.getElementById("usernameInput").value.trim();
    let password = document.getElementById("passwordInput").value.trim();

    let url = `https://g11-workout-server.herokuapp.com/api/v1/register`;
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
        if (data.apikey) {
            alert(`Copy and save your api key: ${data.apikey}`);
        }
        window.location = `https://comp4537-termproj.herokuapp.com/index/index.html`;
    }).catch(e => console.log(e))
}