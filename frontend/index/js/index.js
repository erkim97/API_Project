// get all workouts, workouts = () => {}
function workouts() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/workouts`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let workouts = document.getElementById('response');
        workouts.innerHTML = ""
        workouts.innerHTML += "<b>List of Workouts: </b> <br>"
        for(let i = 0; i < data.length; i++){
            workouts.innerHTML += `"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                workouts.innerHTML += ", "
            }
        }
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
    let url = `https://g11-workout-server.herokuapp.com/api/v1/add_exercise`
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
        alert("Added New Workout");
        let exercise = document.getElementById('response');
        exercise.innerHTML = `"name":"${name}","category":"${category}","instructions":"${instructions}","equipment":"${equipment}","amounts":"${amounts}"`
    }).catch(e => console.log(e))
}

//get workout by random
function search_random() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/random`
    console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let random = document.getElementById('response');
        random.innerHTML = ""
        random.innerHTML += "<b>Random Workout: </b> <br>"
        for(let i = 0; i < data.length; i++){
            random.innerHTML += `"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                random.innerHTML += ","
            }
        }
        //random.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

// search by first letter 
function search_fletter() {
    let fletter = document.getElementById("input-search").value.trim()
    console.log(fletter)
    let url = `https://g11-workout-server.herokuapp.com/api/v1/search_fletter/${fletter}`
    tempdata = {
        fletter: fletter
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(tempdata)
    })
    .then((res) => res.json())
    .then((data) => {
        let fletter_workouts = document.getElementById('response');
        fletter_workouts.innerHTML = ""
        fletter_workouts.innerHTML += "<b>List of workouts that start with the letter: </b> <br>"
        for(let i = 0; i < data.length; i++){
            fletter_workouts.innerHTML += `"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                fletter_workouts.innerHTML += ", <br>"
            }
        }
        //fletter_workouts.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}


// search workout by name
function search_name() {
    let inputSearchName = document.getElementById("input-search").value.trim()
    let url = `https://g11-workout-server.herokuapp.com/api/v1/search_name/${inputSearchName}`
    console.log(url)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let search = document.getElementById('response');
        search.innerHTML = ""
        search.innerHTML += "<b>Found workout: </b> <br>"
        for(let i = 0; i < data.length; i++){
            search.innerHTML += `"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                search.innerHTML += ", "
            }
        }
        //search.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

// search workout by id using post
function search_id() {
    let inputSearchId = document.getElementById("input-search").value.trim()
    let url = `https://g11-workout-server.herokuapp.com/api/v1/search_id/${inputSearchId}`

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
        search.innerHTML += "<b>Found workout by id:</b> <br>"
        for(let i = 0; i < data.length; i++){
            search.innerHTML += `"id":${data[i].id},"name":"${data[i].name}","category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                search.innerHTML += ", "
            }
        }
        //search.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

//delete workout
function remove() {
    let name = document.getElementById("input-delete-exercise").value.trim()
    let url = `https://g11-workout-server.herokuapp.com/api/v1/delete/${name}`
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


// filters 
function filter() {
    let filterName= document.getElementById("input-filter-name").value.trim()
    console.log(filterName)
    let url = `https://g11-workout-server.herokuapp.com/api/v1/category/${filterName}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let ordinary = document.getElementById('response');
        ordinary.innerHTML = ""
        ordinary.innerHTML += "<b> Filtered category workouts: </b> <br>"
        for(let i = 0; i < data.length; i++){
            ordinary.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                ordinary.innerHTML += ", "
            }
        }
        //ordinary.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}


function filter_chest() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/category/chest`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let chest = document.getElementById('response');
        chest.innerHTML = ""
        chest.innerHTML += "<b>Filtered chest workouts:</b> <br>"
        for(let i = 0; i < data.length; i++){
            chest.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                chest.innerHTML += ", "
            }
        }
        //chest.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function filter_bicep() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/category/bicep`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let bicep = document.getElementById('response');
        bicep.innerHTML = ""
        bicep.innerHTML += "<b>Filtered bicep workouts:</b> <br>"
        for(let i = 0; i < data.length; i++){
            bicep.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                bicep.innerHTML += ", "
            }
        }
        //bicep.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function filter_tricep() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/category/tricep`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let tricep = document.getElementById('response');
        tricep.innerHTML = ""
        tricep.innerHTML += "Filtered tricep workouts: <br>"
        for(let i = 0; i < data.length; i++){
            tricep.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                tricep.innerHTML += ", "
            }
        }
        //tricep.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function filter_shoulder() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/category/shoulder`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let tricep = document.getElementById('response');
        tricep.innerHTML = ""
        tricep.innerHTML += "<b>Filtered shoulder workouts:</b> <br>"
        for(let i = 0; i < data.length; i++){
            tricep.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                tricep.innerHTML += ", "
            }
        }
        //tricep.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function filter_back() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/category/back`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let tricep = document.getElementById('response');
        tricep.innerHTML = ""
        tricep.innerHTML += "<b>Filtered tricep workouts:</b> <br>"
        for(let i = 0; i < data.length; i++){
            tricep.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                tricep.innerHTML += ", "
            }
        }
        //tricep.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function filter_lat() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/category/lat`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let tricep = document.getElementById('response');
        tricep.innerHTML = ""
        tricep.innerHTML += "<b>Filtered lat workouts:</b> <br>"
        for(let i = 0; i < data.length; i++){
            tricep.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                tricep.innerHTML += ", "
            }
        }
        //tricep.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function filter_leg() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/category/leg`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let tricep = document.getElementById('response');
        tricep.innerHTML = ""
        tricep.innerHTML += "<b>Filtered leg workouts:</b> <br>"
        for(let i = 0; i < data.length; i++){
            tricep.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                tricep.innerHTML += ", "
            }
        }
        //tricep.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}

function filter_cardio() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/category/cardio`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let tricep = document.getElementById('response');
        tricep.innerHTML = ""
        tricep.innerHTML += "<b>Filtered cardio workouts:</b> <br>"
        for(let i = 0; i < data.length; i++){
            tricep.innerHTML += `{"id":${data[i].id},"name":"${data[i].name}"},"category":"${data[i].category}","instructions":"${data[i].instructions}","equipment":"${equipment}","amounts":"${amounts}" <br>`;
            if (i > data.length - 1) {
                tricep.innerHTML += ", "
            }
        }
        //tricep.innerHTML += "]"
        console.log(data)
    }).catch(e => console.log(e))
}
// end filter

//change/update workout name
function update() {
    let oldName = document.getElementById("input-old-name").value.trim()
    let newName = document.getElementById("input-new-name").value.trim()
    let url = `https://g11-workout-server.herokuapp.com/api/v1/update`

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

// get all sessions
function getSessions() {
    let url = `https://g11-workout-server.herokuapp.com/api/v1/sessions`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let sessions = document.getElementById('response');
        sessions.innerHTML = ""
        sessions.innerHTML += "<b>List of Sessions: </b><br>"
        for(let i = 0; i < data.length; i++){
            sessions.innerHTML += `"id":${data[i].id},"name":"${data[i].name}","time":"${data[i].time}" <br>`;
            if (i > data.length - 1) {
                sessions.innerHTML += ", "
            }
        }
        console.log(data)
    }).catch(e => console.log(e))
}


// add session function
function addSession() {
    let name = document.getElementById("input-add-session-name").value.trim()
    let time = document.getElementById("input-add-session-time").value.trim()

    data = {
        name: name, 
        time: time, 
    }
    console.log(data)
    let url = `https://g11-workout-server.herokuapp.com/api/v1/add_session`
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
        alert("Added Session");
        let session = document.getElementById('response');
        session.innerHTML = `"name":"${name}","time":"${time}"`
    }).catch(e => console.log(e))
}


//delete session function
function deleteSession() {
    let name = document.getElementById("input-delete-session").value.trim()
    let url = `https://g11-workout-server.herokuapp.com/api/v1/delete_session/${name}`
    fetch(url, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        let delete_sesh = document.getElementById('response');
        let input = document.getElementById('input-delete-session').value;
        delete_sesh.innerHTML = input + " deleted.";
    }).catch(e => console.log(e))
}


//update session function
function updateSession() {
    let name = document.getElementById("input-sesh-name").value.trim()
    let time = document.getElementById("input-new-time").value.trim()
    let url = `https://g11-workout-server.herokuapp.com/api/v1/update_session`

    data = {
        name: name,
        time: time
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
        let updateSesh = document.getElementById('response');
        let seshname = document.getElementById('input-sesh-name').value;
        let newtime = document.getElementById('input-new-time').value;
        updateSesh.innerHTML = `${seshname} time has been changed to ${newtime}.`;
    }).catch(e => console.log(e))
}

function logout() {

}