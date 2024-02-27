var projectNames = ["Animatic Generator", "Lorem Ipsum"]
var projects = document.querySelectorAll(".project");
var projIndex = 0;
function next() {
    projIndex += 1;
    if (projIndex >= projects.length) {
        projIndex = 0;
    }
    loadProject();
}
function prev() {
    projIndex -= 1;
    if (projIndex < 0) {
        projIndex = projects.length - 1;
    }
    loadProject();
}
async function loadProject() {
    for(let p of projects){
        p.style.flex = 0;
    }
    projects[projIndex].style.flex = 1;
    titleBox.textContent = projectNames[projIndex];
}
loadProject();