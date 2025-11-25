async function fakeApiSync(tasks){
    return new Promise(res=>setTimeout(()=>res({status:'ok',count:tasks.length}),500));
}
window.fakeApiSync=fakeApiSync;