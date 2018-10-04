function animateLoading() {
    // document.getElementById('transition-container').classList.add('animate');
    setTimeout(removeLoader, 3000);
}

function removeLoader (){
    // document.getElementById('transition-container').style.display = 'none';
   
    // var elm = document.getElementsByClassName('loader')
    // // for(var i = 0; i < elm.length; i++){
    // //     elm[i].style.display = 'none';
    // // }
    document.getElementById('content').style.display = 'block';
}

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

function handleNavButtonPress() {
    
    var navLinks = document.getElementById('navLinks');
    
    if(navLinks.classList.contains('show')){
        navLinks.classList.remove('show');
        document.getElementById('toggle-menu').innerHTML = "<i class='fas fa-bars'></i>";
        console.log('notshowing')        
    }
    else {
        
        navLinks.classList.add('show');
        //add event listener to all buttons
        navLinks.childNodes.forEach(element => {
            element.addEventListener('click', handleNavButtonPress);
        });

        //add X instead of bars
        document.getElementById('toggle-menu').innerHTML = '<i class="fas fa-times"></i>';
        console.log('showing')
    }
}

window.addEventListener('load', function (){
    window.addEventListener('scroll', handleNavBarWhenScrolling);
})

document.getElementById('toggle-menu').addEventListener('click', handleNavButtonPress);