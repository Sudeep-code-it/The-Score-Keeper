let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let sp1 = document.querySelector('#sp1');
let sp3 = document.querySelector('#sp3');
let a = 1, b = 1;
let win = document.querySelector('#win');

btn1.addEventListener('click', () => {
    if (a != 6 && b != 6) {
        sp1.innerText = `${a}`;
        a++;
    }
    if (a == 6 || b == 6) {
        if (a == 6) {
            sp1.style.color = '#44ff00';
            sp3.style.color = 'Red';
            btn1.style.color = '#44ff00';
            btn2.style.color = 'Red';
            win.style.visibility = 'visible';
        }
        else {
            sp3.style.color = '#44ff00';
            sp1.style.color = 'Red';
            btn1.style.color = 'Red';
            btn2.style.color = '#44ff00';
            win.style.visibility = 'visible';
        }

    }
})
btn2.addEventListener('click', () => {
    if (a != 6 && b != 6) {
        sp3.innerText = `${b}`;
        b++;
    }
    if (a == 6 || b == 6) {
        if (a == 6) {
            sp1.style.color = '#44ff00';
            sp3.style.color = 'Red';
            btn1.style.color = '#44ff00';
            btn2.style.color = 'Red';
            win.style.visibility = 'visible';
        }

        else {
            sp3.style.color = '#44ff00';
            sp1.style.color = 'Red';
            btn1.style.color = 'Red';
            btn2.style.color = '#44ff00';
            win.style.visibility = 'visible';
        }

    }
})
btn3.addEventListener('click', () => {
    sp1.innerText = '0';
    sp3.innerText = '0';
    a = 1;
    b = 1;
    sp3.style.color = 'White';
    sp1.style.color = 'White';
    btn1.style.color = 'White';
    btn2.style.color = 'White';
    win.style.visibility = 'hidden';
})