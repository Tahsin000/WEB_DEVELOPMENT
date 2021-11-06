
const close = document.querySelector('.closed');
const open = document.querySelector('.open');

close.addEventListener('click', () => {
    if (open.classList.contains('open')) {
        open.classList.add('active');
        close.classList.remove('active');
        document.getElementById('data').innerHTML = "كل نفس ذائقه الموت";
    }
});

open.addEventListener('click', () => {
    if (close.classList.contains('closed')) {
        close.classList.add('active');
        open.classList.remove('active');
        document.getElementById('data').innerHTML = "لا تحزن ان الله معنا";
    }
});