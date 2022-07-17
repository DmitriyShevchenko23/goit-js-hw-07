import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkkUp = createGalleryMarkUp(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkkUp)

galleryContainer.addEventListener('click', onGalleryContainerClick)

function createGalleryMarkUp(galleryItems) {
    return galleryItems
        .map((item) => {
            return `<div class='gallery__item'>
            <a
            class='gallery__link'
            href='${item.original}'>
            <img
            class='gallery__image'
            alt='${item.description}' 
            src='${item.preview}'
            data-source='${item.original}'
            />
            </a>
         </div>`;
        })
        .join('');

};

function onGalleryContainerClick(event) {
    event.preventDefault()
    
    const imageEl = event.target.dataset.source;
    
    if (!imageEl) {
        return;
    } else {
        const instance = basicLightbox.create(`
    <img src="${imageEl}" width="800" height="600">`
        );
        instance.show();
    };
   
};