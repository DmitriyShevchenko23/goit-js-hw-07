import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');
const galleryMarkkUp = createGalleryMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend',galleryMarkkUp)

galleryContainer.addEventListener('click',onGalleryContainerClick)

function createGalleryMarkUp(galleryItems) {
    return galleryItems
        .map((item) => {
            return `<div class='gallery__item'>
            <a
            class='gallery__link'
            href='${item.original}'>
            <img
            class='gallery__img'
            alt='${item.description}' 
            src='${item.preview}'>
            </a>
         </div>`;     
    })
    .join('');  
    
};

function onGalleryContainerClick(event) {
    const imageEl = event.target.dataset.original;
    if (!imageEl) {
        return;
    }
};
