var active = localStorage.getItem('active');

    active = localStorage.getItem('active');
    if (active == ''){
        document.getElementById('active').innerHTML = document.getElementById('account').innerHTML
    }else{
        document.getElementById('active').innerHTML = document.getElementById(active).innerHTML;
    }
