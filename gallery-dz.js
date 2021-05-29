
import images from './gallery-items.js'



const refs = {
   
    galleryEl: document.querySelector('.js-gallery'),
    modalWindow: document.querySelector('.js-lightbox'),
    modalContent: document.querySelector('.lightbox__content'),
    modalImage: document.querySelector('.lightbox__image'),
    modalClose: document.querySelector('.lightbox__button')

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
    console.log( refs.modalImage.src)
  };

// добавляю слушатель на закрытие картинок

 refs.modalClose.addEventListener('click', OnClose);

 function OnClose (e){
    refs.modalWindow.classList.remove('is-open');
    refs.modalImage.src = '';
    console.log( refs.modalImage.src);
 }

  
