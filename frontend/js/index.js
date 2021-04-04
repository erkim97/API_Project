// get all workouts
function workouts() {
    let url = `https://comp4537-termproj.herokuapp.com/api/v1/workouts`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let workouts = document.getElementById('response');
        workouts.innerHTML = ""
        workouts.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            workouts.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","instructions":"${data[i].instructions}"}`;
            if (i > data.length - 1) {
                workouts.innerHTML += ","
            }
        }
        workouts.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

//get workout by random
function search_random() {
    let url = `https://comp4537-termproj.herokuapp.com/api/v1/random`
    console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let random = document.getElementById('response');
        random.innerHTML = ""
        random.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            random.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","amount":"${data[i].amount}","equipment_id":${data[i].equipment_id},"exercise_id":${data[i].exercise_id},"instructions":"${data[i].instructions}"}`;
            if (i > data.length - 1) {
                random.innerHTML += ","
            }
        }
        random.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

// search workout by name
function search_name() {
    let inputSearchName = document.getElementById("input-search-name").value.trim()
    let url = `https://comp4537-termproj.herokuapp.com/api/v1/search_name/${inputSearchName}`
    console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let search = document.getElementById('response');
        search.innerHTML = ""
        search.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            search.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","amount":"${data[i].amount}","equipment_id":${data[i].equipment_id},"exercise_id":${data[i].exercise_id},"instructions":"${data[i].instructions}"}`;
            if (i > data.length - 1) {
                search.innerHTML += ","
            }
        }
        search.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

// search workout by id using post
function search_id() {
    let inputSearchId = document.getElementById("input-search-id").value.trim()
    let url = `https://comp4537-termproj.herokuapp.com/api/v1/search_id/${inputSearchId}`

    console.log(url)
    tempdata = {
        id: inputSearchId
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(tempdata)
    })
    .then((res) => res.json())
    .then((data) => {
        let search = document.getElementById('response');
        search.innerHTML = ""
        search.innerHTML += "["
        for(let i = 0; i < data.length; i++){
            search.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","amount":"${data[i].amount}","equipment_id":${data[i].equipment_id},"exercise_id":${data[i].exercise_id},"instructions":"${data[i].instructions}"}`;
            if (i > data.length - 1) {
                search.innerHTML += ","
            }
        }
        search.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

// add workout function
function add() {
    let name = document.getElementById("input-add-exercise-name").value.trim()
    let category = document.getElementById("input-add-exercise-category").value.trim()
    let instructions = document.getElementById("input-add-exercise-instructions").value.trim()
    let equipment = document.getElementById("input-add-exercise-equipment").value.trim()
    let amounts = document.getElementById("input-add-exercise-amounts").value.trim()
    data = {
        name: name, 
        cat: category, 
        instructions: instructions, 
        equipment: equipment,
        amounts: amounts 
    }
    console.log(data)
    let url = `https://comp4537-termproj.herokuapp.com/api/v1/add_exercise`
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
        let exercise = document.getElementById('response');
        exercise.innerHTML = `"name":"${name}","category":"${category}","instructions":"${instructions}","equipment":"${equipment}","amounts":"${amounts}"`
    }).catch(e => console.log(e))
}

//delete workout
function remove() {
    let name = document.getElementById("input-delete-exercise").value.trim()
    let url = `https://comp4537-termproj.herokuapp.com/api/v1/delete/${name}`
    // console.log(url)
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        let delete_item = document.getElementById('response');
        let input = document.getElementById('input-delete-exercise').value;
        delete_item.innerHTML = input + " deleted.";
    }).catch(e => console.log(e))
}

//change/update workout name
function update() {
    let oldName = document.getElementById("input-old-name").value.trim()
    let newName = document.getElementById("input-new-name").value.trim()
    let url = `https://comp4537-termproj.herokuapp.com/api/v1/update`

    data = {
        oldName: oldName,
        newName: newName
    }
    fetch(url, {
        method: 'PUT',
        headers: { 
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify(data) 
    })
    .then((res) => res.json())
    .then((data) => {
        let update = document.getElementById('response');
        let oldname = document.getElementById('input-old-name').value;
        let newname = document.getElementById('input-new-name').value;
        update.innerHTML = `${oldname} has been changed to ${newname}.`;
    }).catch(e => console.log(e))
}

