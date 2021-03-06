//header
const toggleBtn = document.querySelector('.header__toggleBtn');
const menu = document.querySelector('.header__menu');
const icons = document.querySelector('.header__icons');

toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active'); //버튼이 클릭될 때마다 액티브 클래스를 토글링 : 마우스 클릭 시 액티브가 없으면 추가 있으면 뺌
    icons.classList.toggle('active');
})

//Home_whoAmI
document.addEventListener('DOMContentLoaded',() => {
    new TypeIt('#Home_whoAmI', {
        strings: ["몰입의 즐거움을 아는", "함께 일하고 싶은", "미래가 기대되는"],
        speed: 220,
        loop: true,
        breakLines: false
    }).go();  
})
