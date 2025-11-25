class TaskUI{
    constructor(m){this.m=m;}
    init(){this.render();document.getElementById('taskForm').addEventListener('submit',e=>{e.preventDefault();this.add();});}
    render(){const l=document.getElementById('tasksList');l.innerHTML=this.m.getAllTasks().map(t=>`
        <li class="${t.completed?'completed':''}">
            <div class="task-content">
                <strong>${t.title}</strong>
                ${t.description?`<p class="task-desc">${t.description}</p>`:''}</div>
            <div class="task-buttons">
                <button class="btn-complete" onclick="taskUI.complete(${t.id})" ${t.completed?'disabled':''}>✔</button>
                <button class="btn-delete" onclick="taskUI.del(${t.id})">x</button>
            </div>
        </li>`).join('');}
    add(){const t=document.getElementById('taskTitle').value;const d=document.getElementById('taskDescription').value;if(!validateText(t))return alert('Título inválido');this.m.addTask(t,d);document.getElementById('taskTitle').value='';document.getElementById('taskDescription').value='';this.render();renderDashboard(this.m);}
    del(id){this.m.deleteTask(id);this.render();renderDashboard(this.m);}
    complete(id){this.m.updateTask(id,{completed:true});this.render();renderDashboard(this.m);}
}
window.TaskUI=TaskUI;