const btns = document.querySelectorAll('button');
const divs = document.querySelectorAll('div.block');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        const targetBtn = event.target;
        const btnNumber = targetBtn.getAttribute('data-target');

        divs.forEach(function(div) {
            const divNumber = div.getAttribute('data-btn');
            if (divNumber === btnNumber) {
                div.classList.toggle('block');
            } 
        });
    });
});
