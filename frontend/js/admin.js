function search_name() {
    let url = `https://comp4537-termproj.herokuapp.com/api/v1/admin.html`
    console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let search = document.getElementById('response');
        search.innerHTML = ""
        search.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            search.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","setrep":"${data[i].setrep}","exercise_id":${data[i].exercise_id},"exerciseInst_id":${data[i].exerciseInst_id},"instructions":"${data[i].instructions}"}`;
            if (i > data.length - 1) {
                search.innerHTML += ","
            }
        }
        search.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}