window.addEventListener("scroll", function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

var main = document.querySelector('body');
document.querySelector('.toggle').onclick = function () {
    main.classList.toggle('light');
}
// 598

//  PRogress bar
function ldBAR() {
    // 
    var bar1 = new ldBar("#myItem1");
    var bar2 = document.getElementById('myItem1').ldBar;
    bar1.set(85);
    // 
    var bar1 = new ldBar("#myItem2");
    var bar2 = document.getElementById('myItem2').ldBar;
    bar1.set(88);
    // 
    var bar1 = new ldBar("#myItem3");
    var bar2 = document.getElementById('myItem3').ldBar;
    bar1.set(65);
    // 
    var bar1 = new ldBar("#myItem4");
    var bar2 = document.getElementById('myItem4').ldBar;
    bar1.set(75);
    // 
    var bar1 = new ldBar("#myItem5");
    var bar2 = document.getElementById('myItem5').ldBar;
    bar1.set(73);
    // 
    var bar1 = new ldBar("#myItem6");
    var bar2 = document.getElementById('myItem6').ldBar;
    bar1.set(67);
    // 
    var bar1 = new ldBar("#myItem7");
    var bar2 = document.getElementById('myItem7').ldBar;
    bar1.set(67);
    // 
}
ldBAR()
// end BAr

const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.navigation a');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');

})

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navigation.classList.remove('active');

    })
})

// for scrol Top
const scrolBtn = document.querySelector('.scrolTop-btn');

window.addEventListener('scroll', function () {
    scrolBtn.classList.toggle('active', window.scrollY > 500)
})
// for scroll back to on click

scrolBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// for reaveal website







