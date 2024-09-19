// Тест модульности, в этом нет строгой необходимости, ибо проект маленький,
// но почему не затестить новую тему? 
import { createHeader } from './header.js';
import { createFooter } from './footer.js';

document.body.prepend(createHeader());
document.body.append(createFooter());

/*Проверяем прогрузились ли HTML-элементы*/
document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('list');
    const filter = document.getElementById('filter');
    let USERS = []

    filter.addEventListener('input', (event) => {
        // console.log(event.target.value)
        // console.log(USERS);
        let value = event.target.value.toLowerCase();
        let filteredUser = USERS.filter((user) => {
            return user.name.toLowerCase().includes(value)
        });
        render(filteredUser); 
    });

    async function start() {    
        list.innerHTML = '<div class="d-flex flex-row align-items-center mt-2"><h4>Loading</h4><div class="loader ms-2"></div></div>'
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(response);
            console.log(data);
            setTimeout(() => {
                USERS = data
                render(data)
            }, 1000)
        } catch (err) {
            list.style.color = 'red'
            list.innerHTML = err.message
        } finally {
            // то что обязательно произойдёт в любом случае
        }
    }

    function render(users = []) {
        let html = users.map(toHTML).join('')
        if (users.length === 0){
            html = `<h3>Nothing found yet :(</h3>`
        };
        list.innerHTML = html
    }

    function toHTML(user) {
      return `<li class="user-list-item list-group-item">${user.name}</li>`  
    }
    start()
});