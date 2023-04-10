// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const findGalleryItemEl = document.querySelector('.gallery');
console.log(findGalleryItemEl);

function onCreateGalleryMarkup (card){
    return card.map(({ preview, original ,description }) => {
        return `  <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
                </li>
                `
                }).join('');
};

findGalleryItemEl.insertAdjacentHTML('beforeend', onCreateGalleryMarkup(galleryItems));

findGalleryItemEl.addEventListener('click', onClick);

function onClick(evt){
    evt.preventDefault();

        if(!evt.target.classList.contains('gallery__image')){
            return;
            };
    
    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
};


