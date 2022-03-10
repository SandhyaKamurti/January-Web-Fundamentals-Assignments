const todos = []; //array to store user input

        //function to add item to list
        const render = function() {
            const parent_container = document.getElementById('task');
            parent_container.innerHTML = ""; //Whenever user enter new item, list will be empty
            for (let i = 0; i < todos.length; i++) {
                const single_todo_item = todos[i]; //get single to do item
                const new_li = document.createElement('li'); //create li tag
                new_li.innerText = single_todo_item; //add text to li tag
                parent_container.appendChild(new_li); //append li tag to list container

            }
        }

        //function to add user input in list
        const add_item = function() {
            const ip = document.getElementById('todo_input');
            const new_todo = ip.value; //get input value
            todos.push(new_todo); //pushing user input value in todos array 
            ip.value = ""; //clear input value so that user can enter new input
            render(); //call render function to add item in list
        }

        const btn = document.getElementById('add_btn');
        btn.addEventListener('click', add_item);
