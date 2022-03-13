const todos = [];
        const todos2 = [];
        const render = function() {
            const parent_container = document.getElementById('notes_list');
            parent_container.innerHTML = "";

            for (let i = 0; i < todos.length; i++) {
                const single_todo_item = todos[i];
                const div = document.createElement('div');
                const h1 = document.createElement('h1');
                const span = document.createElement('span');
                const single_todo_item2 = "";
                for (let j = 0; j < todos2.length; i++) {
                    single_todo_item2 = todos2[i];
                }
                h1.innerText = single_todo_item;
                span.innerText = single_todo_item2;
                span.style.fontSize = "15px";
                div.appendChild(h1);
                h1.appendChild(span);
                parent_container.appendChild(h1);
            }
        }

        const add_item = function() {
            const ip = document.getElementById('todo_input');
            const new_todo = ip.value;
            todos.push(new_todo);
            ip.value = "";

            const ip2 = document.getElementById('todo_input2');
            const new_todo2 = ip2.value;
            todos.push(new_todo2);
            ip2.value = "";

            render();
        }


        const btn = document.getElementById('add_btn');
        btn.addEventListener('click', add_item);

        /* const todos = [];
         const render = function() {
             const parent_container = document.getElementById('notes_title');
             parent_container.innerHTML = "";

             for (let i = 0; i < todos.length; i++) {
                 const single_todo_item = todos[i];
                 const new_p = document.createElement('h2');
                 new_p.innerText = single_todo_item;
                 new_p.style.fontSize = "25px";
                 parent_container.appendChild(new_p);
             }
         }
         const add_item = function() {
             const ip = document.getElementById('todo_input');
             const new_todo = ip.value;
             todos.push(new_todo);
             ip.value = "";
             render();
         }
         const btn = document.getElementById('add_btn');
         btn.addEventListener('click', add_item);*/
