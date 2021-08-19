import refs from '@/js/refs';
import photoArray from '@/db/photo';

const { modalImg } = refs;

export function carousel() {
  window.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
      arrowLeft();
    }
    if (e.code === 'ArrowRight') {
      arrowRight();
    }
  });
}
function setNewSrc(step, index) {
  modalImg.dataset.index = `${index + step}`;
  modalImg.src = photoArray[index + step].image;
}
function arrowRight() {
  let index = +modalImg.dataset.index;
  if (index === photoArray.length - 1) {
    setNewSrc(0, 0);
    return;
  }
  setNewSrc(1, index);
}
function arrowLeft() {
  let index = +modalImg.dataset.index;
  if (index === 0) {
    setNewSrc(0, photoArray.length - 1);
    return;
  }
  setNewSrc(-1, index);
}
