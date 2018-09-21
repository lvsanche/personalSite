function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    console.log(rect.bottom);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


function handleNavBarWhenScrolling() {
    var navBar = document.getElementById('nav');
    var navBarRect = document.getElementById('test').getBoundingClientRect();
    // console.log(navBarRect);
    if( navBarRect.bottom < 103){
        navBar.classList.add("stick-top");
    }
    else{
        navBar.classList.remove("stick-top");
    }
    
}

window.addEventListener('load', function (){
    window.addEventListener('scroll', handleNavBarWhenScrolling);
})
