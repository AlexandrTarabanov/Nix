let request = new XMLHttpRequest();
request.open("GET", "https://gist.githubusercontent.com/AlexandrTarabanov/565a1ce08637bf4e158270c4c7b2d83a/raw/16b0382d9613deab537352bba77f473d0501d1ef/nix_project.json", false);
request.send(null)

let tasks = JSON.parse(request.responseText)
let flag = true

function tableSort(field) {
    if (flag) {
        tasks.sort((a, b) => {
            flag = false
            return a[field] > b[field] ? 1 : -1
        })
    } else {
        tasks.sort((a, b) => {
            flag = true
            return a[field] < b[field] ? 1 : -1
        })
    }
    let table = document.querySelector('.table__body')
    table.innerHTML = ''
    tasksRender(tasks)
}

tasksRender(tasks);

function tasksRender(json) {
    for (let i = 0; i < 9; i++) {
        let task = document.createElement('div');
        if (i % 2 === 0) {
            task.className = "table__item"
        } else task.className = "table__item--color"

        let task_name = document.createElement('div');
        task_name.className = "table__item-name"
        task_name.innerHTML = json[i]["Task_name"];
        task.appendChild(task_name);
        let task_developer = document.createElement('div');
        task_developer.className = "table__item-developer"
        task_developer.innerHTML = json[i]["Developer"];
        task.appendChild(task_developer);
        let task_work_type = document.createElement('div');
        task_work_type.className = "table__item-work_type"
        task_work_type.innerHTML = json[i]["Work_type"];
        task.appendChild(task_work_type);
        let task_status = document.createElement('div');
        task_status.innerHTML = json[i]["Status"];
        if (task_status.innerHTML === "Сompleted") {
            task_status.className = "table__item-status"
        } else {
            task_status.className = "table__item-status--red"
        }
        task.appendChild(task_status);
        let task_estimation = document.createElement('div');
        task_estimation.innerHTML = json[i]["Estimation (h)"];
        task.appendChild(task_estimation);
        let task_total_time = document.createElement('div');
        task_total_time.innerHTML = json[i]["Total_time"];
        task.appendChild(task_total_time);
        let task_my_time = document.createElement('div');
        task_my_time.innerHTML = json[i]["My_time"];
        task.appendChild(task_my_time);
        let task_efficiency = document.createElement('div');
        task_efficiency.innerHTML = json[i]["Efficiency"];
        task.appendChild(task_efficiency);

        let table = document.querySelector('.table__body')
        table.appendChild(task);
    }
}

function paginationRender(x, json = tasks) {
    let table = document.querySelector('.table__body')
    table.innerHTML = ''
    for (let i = 9 * (x - 1); i < x * 9; i++) {
        let task = document.createElement('div');
        if (i % 2 === 0) {
            task.className = "table__item"
        } else task.className = "table__item--color"

        let task_name = document.createElement('div');
        task_name.className = "table__item-name"
        task_name.innerHTML = json[i]["Task_name"];
        task.appendChild(task_name);
        let task_developer = document.createElement('div');
        task_developer.className = "table__item-developer"
        task_developer.innerHTML = json[i]["Developer"];
        task.appendChild(task_developer);
        let task_work_type = document.createElement('div');
        task_work_type.className = "table__item-work_type"
        task_work_type.innerHTML = json[i]["Work_type"];
        task.appendChild(task_work_type);
        let task_status = document.createElement('div');
        task_status.innerHTML = json[i]["Status"];
        if (task_status.innerHTML === "Сompleted") {
            task_status.className = "table__item-status"
        } else {
            task_status.className = "table__item-status--red"
        }
        task.appendChild(task_status);
        let task_estimation = document.createElement('div');
        task_estimation.innerHTML = json[i]["Estimation (h)"];
        task.appendChild(task_estimation);
        let task_total_time = document.createElement('div');
        task_total_time.innerHTML = json[i]["Total_time"];
        task.appendChild(task_total_time);
        let task_my_time = document.createElement('div');
        task_my_time.innerHTML = json[i]["My_time"];
        task.appendChild(task_my_time);
        let task_efficiency = document.createElement('div');
        task_efficiency.innerHTML = json[i]["Efficiency"];
        task.appendChild(task_efficiency);

        let table = document.querySelector('.table__body')
        table.appendChild(task);
    }
}

function openBurger() {
    let x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}