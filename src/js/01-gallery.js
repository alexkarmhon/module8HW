// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');


const createGalleryMarkup = (arr) => {
  const itemsMarkup = arr
    .map(
      ({ preview, original, description }) =>
        `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description.toUpperCase()}"/>
        </a>
      </li>`
    )
    .join("");

    gallery.insertAdjacentHTML("beforeend", itemsMarkup);
};

createGalleryMarkup(galleryItems);

const gal = new SimpleLightbox('.gallery a', {
  captions: true,
  captiosData: 'alt',
  captionsDelay: 250,
})
