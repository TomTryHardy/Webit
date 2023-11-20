'use strict';



window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.main__button'),
          modal = document.querySelector('.main__modal'),
          main = document.querySelector('.main');


    function openModal (hide, active) {
        button.addEventListener('click', () => {
            if (!button.classList.contains(hide)) {
                button.classList.add(hide)
                modal.classList.add(active)
            }             
        })
    }
    function closeModal (hide, active) {
        main.addEventListener('click', (e) => {
            let target = e.target;

            if (target == main) {
                modal.classList.remove(active)
                button.classList.remove(hide)
                button.classList.add(active)

            }
        })
    }

    openModal('hide', 'active');
    closeModal('hide', 'active');

    
})