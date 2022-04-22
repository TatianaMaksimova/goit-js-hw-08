// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const container = document.querySelector('.gallery');

const imagesMarkUp = createMarkupForImages(galleryItems);

container.insertAdjacentHTML('beforeend', imagesMarkUp);

function createMarkupForImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
