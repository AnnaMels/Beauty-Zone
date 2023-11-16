const backdrop = document.querySelector('.backdrop');
const closeModalButton = document.querySelector('.close-modal-button');
const openModalButton = document.querySelector('.open-modal-button');

const toggleModal = () => {
    backdrop.classList.toggle('is-hidden');
}

closeModalButton.addEventListener('click', toggleModal);
openModalButton.addEventListener('click', toggleModal);

