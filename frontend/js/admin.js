function display_stats() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/admin`
    // let url = `http://localhost:5000/api/v1/admin`
    console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let search = document.getElementById('response');
        search.innerHTML = ""
        search.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            search.innerHTML += `{"id":${data[i].id},"method":"${data[i].method}","endpoint":"${data[i].endpoint}","requests":"${data[i].requests}"}`;
            if (i > data.length - 1) {
                search.innerHTML += ","
            }
        }
        search.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

window.addEventListener("load", display_stats());