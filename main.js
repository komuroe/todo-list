(function () {
  const addButton = document.querySelector('#add');
  const list = document.querySelector('#list');

  function appendTask(taskText) {
    const ul = document.querySelector('#list');
    const itemsCount = ul.childElementCount;

    ul.insertAdjacentHTML(
      'beforeend',
      `<li class="todo__item">
        <input class="option-button__checkbox" type="checkbox" id="item-${itemsCount + 1}">
        <label class="option-button__label" for="item-${itemsCount + 1}">${taskText}</label>
        <span class="close"></span>
      </li>`,
    );
  }

  list.addEventListener('click', (ev) => {
    if (ev.target.className === 'close') {
      const itemToDelete = ev.target.parentElement;
      const listElement = ev.target.parentElement.parentElement;

      listElement.removeChild(itemToDelete);
    }
  });

  addButton.addEventListener('click', (ev) => {
    const taskInput = document.querySelector('#task');
    if (taskInput.value === '') {
      taskInput.setCustomValidity('The task should have a description!');
    } else {
      taskInput.setCustomValidity('');
      ev.preventDefault();
      console.log('button clicked!');
      appendTask(taskInput.value);
      taskInput.value = '';
    }
  });
}());
