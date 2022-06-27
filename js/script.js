// devo inserire dinamicamente sei immagini all'interno dell'elemento #img-wrapper
//    - creare um array contenente tutte le immagini
//    - creare un ciclo for che inserisca tutte le immagini nel div#img-wrapper [append()]

// al click sul pulsante #next-btn si passerà all'immagine successiva
//    - rimuovere la classe .active dall'immagine attuale
//    - aggiungere la classe .active all'immagine successiva


// get the img-wrapper div from the DOM
const imgWrapper = document.getElementById('img-wrapper');

// creating images array list
const imgList = [
   'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
   'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
   'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
   'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
   'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
   'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

// creating a for cycle to put images in the DOM
for (let i = 0;  i < imgList.length;  i++) {

   const imgTag = document.createElement('img');
   imgTag.setAttribute('src', imgList[i]);

   // get the #img-wrapper from the DOM
   imgWrapper.append(imgTag);

}

// get all the image list from the DOM
const imgTagList = document.querySelectorAll('img');
console.log(imgTagList.length);

// declare a variable to put active class to the images
let activeImg = 0;
imgTagList[activeImg].classList.add('active');


const nextBtn = document.getElementById('next-btn');

// nextBtn.addEventListener ('click', function() {
//    imgTagList[activeImg].classList.remove('active');

//    activeImg++;

//    if (activeImg === imgTagList.length) {
//       activeImg = 0;
//    }
   
//    imgTagList[activeImg].classList.add('active');
   
// });

const autoplay = setInterval (function(){
   imgTagList[activeImg].classList.remove('active');
   activeImg++;

   if (activeImg === imgTagList.length) {
      activeImg = 0;
   }

   imgTagList[activeImg].classList.add('active');

}, 3000);