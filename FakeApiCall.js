window.onload = async () => {
    try {
        // alert('Hi');
        const response = await fetch('https://api.instantwebtools.net/v1/airlines');
        // console.log(response);
        const todos = await response.json();
        // console.log(todos);
        const todosList = document.getElementById('cards');
        // console.log(todosList);
        // todos.forEach((element) => {
            let data = "";
            todos.map((value) => {
                // alert('inside map');
                data+= `<div class="card" style="width: 18rem;">
                <h1>${value.name}</h1>
                <img src="${value.logo}" class="card-img-top img" alt="...">
                <div class="card-body">
                <p>${value.established}</p>
                <p>${value.country}</p>
                <p>${value.website}</p>
                </div>
            </div>`
            });
            todosList.innerHTML = data;
        // })
    } catch (e) {
        console.error(e);
    }
}
