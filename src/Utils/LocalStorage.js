export const loadIstalledApps = () => {
    try{
        const data = localStorage.getItem('installedApps');
        return data ? JSON.parse(data) : [];
    }
    catch(error){
        console.log(error);
        return [];
    }
}
export  const UpdateInstalledApps = (app) =>{
    const installedApps = loadIstalledApps();
    try{
        const isDuplicate = installedApps.some(c => c.id === app.id);
        if (isDuplicate) return alert("App is already installed!");
        const updatedApps = [...installedApps, app];
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    }
    catch(error){
        console.log(error);
    }
}

export const removeFromIstalledApps = (id)=>{
    const installedApp =loadIstalledApps();
    try{
        const updatedApps = installedApp.filter(a => a.id !== id);
        localStorage.setItem('installedApps',JSON.stringify(updatedApps))
    }
    catch(error){
        console.log(error);
    }

}