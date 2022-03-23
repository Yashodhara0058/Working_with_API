window.onload = () => {
    document.getElementById('restApiBtn').onclick = async () => {
        // console.log("Hii");
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const todoss = await response.json();
            const todoEle = document.getElementById('todotable');
            todoss.forEach((element) => {
                const todotr = document.getElementById('todos');
                const todotd1 = document.createElement('td');
                todotd1.innerText = element.userId;

                todotr.appendChild(todotd1);

                // const todotd2 = document.createElement('td');
                // todotd2.innerText = element.id;
                // todotr.appendChild(todotd2);

                const todotd3 = document.createElement('td');
                todotd3.innerText = element.title;
                todotr.appendChild(todotd3);

                // const todotd4 = document.createElement('td');
                // todotd4.innerText = element.completed;
                // todotr.appendChild(todotd3);

                todoEle.appendChild(todotr);

                // todoEle.style.backgroundColor = element.completed ? 'blue':'';
                // todoEle.style.color = element.completed ? 'white':'';
                // todoEleList.appendChild(todoEle);
            })
        }catch(e){
            console.error(e);
        }

    }
}   