let text = document.getElementById("todo-text");
let todo_list = document.getElementById("todo-list");
let btn = document.getElementById("btn");


let todos=[];

btn.onclick = function(){
addToDo(); 
}

let addToDo = ()=>{
   let todo = text.value;
   todos.push(todo);
   text.value = "";
   showData();
          
}

let showData = ()=>{
   let data =''
   todos.forEach(function(todo,index){
      data+= `<li class="ml-5">
                  <p class="d-inline-block w-90 text-pink">${todo}</p>
                  <button class="btn btn-success w-5 delete-btn" onclick="deleteToDo(${index})"><i class="fas fa-check"></i></button>
              </li>
              <span class="line"></span>
             `;

   });
   todo_list.innerHTML = data;
}

let deleteToDo= (index) =>{
     let todo_item = document.querySelectorAll("p");
     todo_item[index].classList.toggle("done");
     let del_btn =document.getElementsByClassName("delete-btn");
     del_btn[index].classList.toggle("btn-danger");
}


