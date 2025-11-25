class TaskManager {
    constructor(){this.tasks=JSON.parse(localStorage.getItem('tasks'))||[];}
    addTask(t,d){if(!t) return null;const x={id:Date.now(),title:t,description:d,completed:false,createdAt:new Date().toISOString()};this.tasks.push(x);this.save();return x;}
    getAllTasks(){return this.tasks;}
    updateTask(id,u){const i=this.tasks.findIndex(a=>a.id===id);if(i!==-1){this.tasks[i]={...this.tasks[i],...u};this.save();}}
    deleteTask(id){this.tasks=this.tasks.filter(a=>a.id!==id);this.save();}
    save(){localStorage.setItem('tasks',JSON.stringify(this.tasks));}
}
window.TaskManager=TaskManager;