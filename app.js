const form=document.getElementById(todo-form);
const input=document.getElementById(todo-input);
const list=document.getElementById(todo-list);

function save(todos){localStorage.setItem(todos,JSON.stringify(todos))}
function load(){return JSON.parse(localStorage.getItem(todos)||[])}

function render(){list.innerHTML=;const todos=load();todos.forEach((t,i)=>{
  const li=document.createElement(li);
  li.textContent=t;
  const btn=document.createElement(button);btn.textContent=Delete;btn.addEventListener(click,()=>{
    todos.splice(i,1);save(todos);render();
  });
  li.appendChild(btn);list.appendChild(li);
})}

form.addEventListener(submit,e=>{e.preventDefault();const v=input.value.trim();if(!v)return;const todos=load();todos.push(v);save(todos);input.value=;render();});

render();
