import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = createGalleryMarkUp(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend',galleryMarkUp)


function createGalleryMarkUp(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `
       <div class="gallery__item">
  <a class="gallery__item" 
     href="${original}">
    <img 
    class="gallery__image" 
    src="${preview}" 
    alt="${description}"
    data-source='${original}' 
    />
  </a>
</div>`
    }).join('')
};

const lightbox = new SimpleLightbox(".gallery a", {
            captionsData: "alt",
            captionDelay: 250,
            captionPosition: "bottom",
        });





