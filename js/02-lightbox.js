import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = createGalleryMarkUp(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend',galleryMarkUp)
galleryContainer.addEventListener('click', onGalleryContainerClick);

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
}

function onGalleryContainerClick(event)  {
    event.preventDefault()

    const imageEl = event.target.dataset.source;

    if (!imageEl) {
        return;
    } else {
        const lightbox = new SimpleLightbox(".gallery a", {
            captionsData: "alt",
            captionDelay: 250,
            captionPosition: "bottom",
        });
    };
};




