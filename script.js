let learn_more_btn = document.getElementById('lm-btn')
let second_sec = document.getElementById('second-sec')

learn_more_btn.addEventListener('click', () => {
    second_sec.scrollIntoView({behavior: 'smooth'})
})