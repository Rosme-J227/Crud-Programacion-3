function renderDashboard(manager){
    const d=document.getElementById('dashboard');
    const tasks=manager.getAllTasks();
    const done=tasks.filter(t=>t.completed).length;
    d.innerHTML=`<h3>Dashboard</h3>
    <p>Total tareas: ${tasks.length}</p>
    <p>Completadas: ${done}</p>`;
}
window.renderDashboard=renderDashboard;