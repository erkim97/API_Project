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
