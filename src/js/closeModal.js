import refs from './refs';

const { modal, closeModalBtn } = refs;

export function closeModal() {
  closeModalBtn.addEventListener('click', closeByClick);
  window.addEventListener('keydown', closeByEsc);
  modal.addEventListener('click', closeByWrapper);
}

export function closeByClick() {
  modal.classList.remove('is-open');
  refresh();
}

export function closeByEsc(e) {
  if (e.code === 'Escape') {
    modal.classList.remove('is-open');
    refresh();
  }
}

export function closeByWrapper(e) {
  if (!e.target.classList.contains('lightbox__image')) {
    modal.classList.remove('is-open');
    refresh();
  }
}

export function refresh() {
  closeModalBtn.removeEventListener('click', closeByClick);
  window.removeEventListener('keydown', closeByEsc);
  modal.removeEventListener('click', closeByWrapper);
}
