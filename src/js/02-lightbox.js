import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryItems(images) {
    return images.map(image => 
        `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
        <img class = "gallery__image" src = "${image.preview}" alt="${image.description}"> </img> </a>
        </li>`
    ).join("");
}

function onGalleryClick(event){
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    modalImage.open();
}
const galleryRef = document.querySelector('.gallery');

const galleryItemMarkup = createGalleryItems(galleryItems);
galleryRef.innerHTML = galleryItemMarkup;

const modalImage = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
galleryRef.addEventListener('click', onGalleryClick);

