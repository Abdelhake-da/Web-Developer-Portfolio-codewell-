var a;
function show_sideBar(){
    let side_b = document.getElementById('side-bar');
    a =1;
    if(side_b.classList.contains('hide')){
        side_b.classList.remove('hide');
    }else{
        side_b.classList.add('hide');
    }
}
window.onclick = function(event){
    if(!event.target.matches('.btn')){
        console.log('hello');
        var side_b = document.getElementsByClassName("side-bar");
        var i;
        for (i = 0; i < side_b.length; i++) {
            var openDropdown = side_b[i];
            if (!openDropdown.classList.contains('hide') && a!=1) {
                openDropdown.classList.add('hide');
            }else{
                a=0;
            }
            
        }
    }
    
}