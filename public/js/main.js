
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
    if( navBarRect.bottom < 53 && navBarRect.width > 775){
        navBar.classList.remove('desktopMenuAnimation');
        navBar.classList.add("desktopMenuScrollAnimation");

    }
    else{
        navBar.classList.remove("desktopMenuScrollAnimation");
        navBar.classList.add("navPosAfterAnimation");
    }
    
}

function hideLoader(hide) {
    var loaders = document.getElementById('menu-loader').children;
    for ( var i = 0; i < loaders.length; i++ ){
        if( hide ){
            //means we need to move opposite
            loaders[i].style.height= '0';
            loaders[i].classList.remove('show');
        }
        else {
            loaders[i].style.height= '100vh';
            loaders[i].classList.add('show');
        }
    }
}

function handleNavButtonPress() {
    
    var navLinks = document.getElementById('navLinks');
    
    if(navLinks.classList.contains('show')){
        hideLoader(true);
        navLinks.classList.remove('show');
        navLinks.classList.remove('openMobileMenu');
        navLinks.classList.add('navLinksRev');
        navLinks.classList.add('closeMobileMenu');

        document.getElementById('toggle-menu').innerHTML = "<i class='fas fa-bars'></i>";
    }
    else {
        hideLoader(false);
        navLinks.classList.add('show');
        navLinks.classList.remove('navLinksRev');
        navLinks.classList.remove('closeMobileMenu');
        navLinks.classList.add('openMobileMenu');


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