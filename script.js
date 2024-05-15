const dialogButton = document.getElementById('dialog_button');
const dialogForm = document.getElementById('input_data');

dialogButton.addEventListener('click', () => {
    dialogForm.showModal();
});