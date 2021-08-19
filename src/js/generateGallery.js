// ВСЕ ИМПОРТЫ
import photoArray from '@/db/photo';
import { closeModal } from '@/js/closeModal';
import { carousel } from '@/js/carousel';
// import createItemByString from "./createItemByString.js";
import createItemAsElement from '@/js/createItemAsElement';
// ВСЕ ДОСТУПЫ
import refs from '@/js/refs';
// console.log(modal, overlay, modalContent, modalImg, closeModalBtn);

const { list, modal, modalImg } = refs;

// ВСЕ ФУНКЦИИ

// function slider() {}

// ВСЕ СЛУШАТЕЛИ
list.addEventListener('click', (e) => {
  if (e.target.nodeName === 'IMG') {
    modal.classList.add('is-open');
    modalImg.src = e.target.src;
    modalImg.dataset.index = e.target.dataset.index;
  }

  carousel();
  closeModal();
});

const result = photoArray.map((photoObject, idx) => {
  // console.log(photoObject);
  //   деструктуризация итерируемого объекта перед вызовом функции создания разметки
  const {
    title: mainTitle,
    image,
    description,
    category,
    seria,
    author: { name, country, city },
  } = photoObject;

  //   вызов функции создания разметки
  //   const item = createItemByString(
  //     mainTitle,
  //     image,
  //     description,
  //     category,
  //     seria,
  //     name,
  //     country,
  //     city,
  //   );
  const item = createItemAsElement(
    idx,
    mainTitle,
    image,
    description,
    category,
    seria,
    name,
    country,
    city,
  );
  //   console.log(item);
  return item;
});

// ЧЕРЕЗ ``
// const addRersultByString = result.join("");
// list.insertAdjacentHTML("beforeend", addRersultByString);

// ЧЕРЕЗ createElement
list.append(...result);
