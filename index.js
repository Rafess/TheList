const button = document.querySelector("button[id='createUser']");
        const form = document.querySelector("form");
        const list = document.querySelector("ul");
        let usuario = document.querySelector("input[id='user']");
        let removeBtn = document.createElement("button");
        
        function preventFormRefresh() {
            form.addEventListener("click", function(event) {
                event.preventDefault();
            });
        }
        
        function createUser() {
            preventFormRefresh();
            setRemoveBtn();
            list.innerHTML += `<li id="${usuario.value}"> ${usuario.value} </li>`;
            let item = document.querySelector(`li[id='${usuario.value}']`);    
            item.appendChild(removeBtn);
            form.reset(); 
        }
        function setRemoveBtn() {
            removeBtn.innerText = 'Remover';
            removeBtn.type = "button";
            removeBtn.setAttribute('class', '--red')
            removeUser();
        }
        function removeUser() {
            removeBtn.onclick = function(){
            removeBtn.parentElement.remove()
                return
                    }
        }