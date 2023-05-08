
var active = document.getElementById('active');
function control(obj){
    active.innerHTML = document.getElementById(obj.getAttribute('name')).innerHTML;
    localStorage.setItem('active', obj.getAttribute('name'));
}
