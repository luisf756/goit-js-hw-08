import { galleryItems } from './gallery-items';

// console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const containerGAllery=document.querySelector('.gallery');//ingresar el selector
const photosMark = createGalleryItem(galleryItems);

function createGalleryItem(element){
    return element 
    .map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    })
    .join('');
}


containerGAllery.insertAdjacentHTML('beforeend',photosMark);
containerGAllery.addEventListener('click', (event)=>event.preventDefault());

// let lightbox = new SimpleLightbox('.gallery a'); //para utilizar la galeria
 const galleryHandler = new SimpleLightbox('.gallery a', {
    captionsData:'alt',
     captionDelay:250
    });
galleryHandler.on('show.simplelightbox', function (e) {
   let img=e.target.childNodes
   img[1].alt =img[1].alt + ': comentario'; 
});