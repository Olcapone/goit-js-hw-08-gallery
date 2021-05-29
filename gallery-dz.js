
import images from './gallery-items.js'



const refs = {
   
    galleryEl: document.querySelector('.js-gallery'),
    modalWindow: document.querySelector('.js-lightbox'),
    modalImage: document.querySelector('.lightbox__image'),
    modalClose: document.querySelector('.lightbox__button'),
    modalOverlay: document.querySelector('.lightbox__overlay')
  };

  // добавляю картинки
  const [{preview, original, description}] = images;
  const listEl = ({preview, original, description}) => {

    return `
    <li>
    <img data-source=${original} src=${preview} alt=${description}  width =400  height = 200>
  </li>`
  };

  const MakeListEl = images.map(listEl).join('');
  refs.galleryEl.insertAdjacentHTML('beforeend', MakeListEl);

  // добавляю слушатель на открытия картинок

  refs.galleryEl.addEventListener('click', OnImage);

  function OnImage(event) {
    refs.modalWindow.classList.add('is-open');
   // refs.modalWindow.style.display = 'block';
    refs.modalImage.src = event.target.dataset.source;
    
  };

// добавляю слушатель на закрытие картинок

 refs.modalClose.addEventListener('click', OnClose);
 refs.modalOverlay.addEventListener('click', OnClose);
 window.addEventListener('keydown', OnExcClose);
 

 function OnClose (e){
    refs.modalWindow.classList.remove('is-open');
    refs.modalImage.src = '';
    
    window.removeEventListener('keydown', OnClose);
 };

function OnExcClose (e){
  if(e.code === 'Escape') OnClose();
}
  
