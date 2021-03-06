
import images from './gallery-items.js';


const refs = {
   
    galleryEl: document.querySelector('.js-gallery'),
    modalWindow: document.querySelector('.js-lightbox'),
    modalImage: document.querySelector('.lightbox__image'),
    modalClose: document.querySelector('.lightbox__button'),
    modalOverlay: document.querySelector('.lightbox__overlay'),
    
  };

  // добавляю картинки
  const [{preview, original, description}] = images;
  const listEl = ({preview, original, description}) => {

    return `
    <li class="gallery__item">
    <a class="gallery__link" href=${original} onclick="event.preventDefault()">
    <img class='gallery__image' data-source=${original} src=${preview} alt=${description}   />
    </a></li>`
  };


  const MakeListEl = images.map(listEl).join('');
  refs.galleryEl.insertAdjacentHTML('beforeend', MakeListEl);


  // добавляю слушатель на открытия картинок

  refs.galleryEl.addEventListener('click', OnImage);
  

  function OnImage(event) {

    if(event.target.nodeName == 'IMG'){

    refs.modalWindow.classList.add('is-open');
    refs.modalImage.src = event.target.dataset.source;

          // добавляю слушатель на слайдер

    document.addEventListener('keydown', OnLeftOrRight);

   function OnLeftOrRight (e){

   let someIndex;
   const currentId = images.findIndex(el =>  el.original === refs.modalImage.src);
  
    if(e.key === 'ArrowLeft'){
        someIndex = currentId - 1;
            if (someIndex < 0)  someIndex = images.length - 1;
             }

   else if (e.key === 'ArrowRight'){
        someIndex = currentId + 1;
          if (someIndex == images.length)    someIndex = 0;              
   }
  
     else if(typeof someIndex === 'undefined')  someIndex = currentId;

  refs.modalImage.src = images[someIndex].original;
 
};
}
}

// добавляю слушатель на закрытие картинок, на пролистывание

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




  


  


