function loadProjectDetails(projectGrp){
    document.getElementsByClassName('project-container')[0].style.display = 'none';
    document.getElementsByClassName(projectGrp)[0].style.display = 'inherit';
    return;
}

function closeProjectDetails(projectGrp){
    document.getElementsByClassName('project-container')[0].style.display = 'inherit';
    document.getElementsByClassName(projectGrp)[0].style.display = 'none';
}