//LIGHTBOX ÖFFNEN
function openLightbox() {
  document.getElementById('lightbox').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Verhindert das Scrollen

  // ZURÜCKSETZTEN SCROLL-POSITION
  var lightboxScrollContainer = document.querySelector('.lightbox-scroll');
    if (lightboxScrollContainer) {
        lightboxScrollContainer.scrollTop = 0;
    }
}

//GALLERIE LIGHTBOX SCHLIESSEN
function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  lightbox.classList.add('closing');

  // Warten auf das Ende der Animation, bevor die Lightbox ausgeblendet wird
  lightbox.addEventListener('animationend', function() {
    lightbox.style.display = 'none';
    lightbox.classList.remove('closing');
    document.body.style.overflow = 'auto'; // Setzt Scrollen auf Standard zurück
  }, { once: true });
}

//LIGHTBOX-SCROLL-BILDER RICHTIG ANZEIGEN ANHAND GALLERY AUSGANGSBILD
function setCurrentImage(clickedImg) {
  var lightboxImages = clickedImg.getAttribute('data-lightbox-images').split(',');
  var lightboxText = clickedImg.getAttribute('data-lightbox-text');
  var lightboxDetailText = clickedImg.getAttribute('data-lightbox-detail-text');

  var lightboxGallery = document.querySelector('.lightbox-scroll');
  lightboxGallery.innerHTML = ''; // Entfernt alle aktuellen Bilder

  lightboxImages.forEach(imgSrc => {
    var imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.classList.add('lightbox-image');
    lightboxGallery.appendChild(imgElement);
  });

  var lightboxTextElement = document.querySelector('.lightbox-text');
  lightboxTextContainer.innerHTML = ''; // Leere den vorhandenen Text

  // Fügt den Titeltext hinzu
  var titleElement = document.createElement('p');
  titleElement.textContent = lightboxText;
  lightboxTextContainer.appendChild(titleElement);

 // Prüft, ob der Fließtext bereits existiert, und aktualisiert oder erstellt ihn
 var existingDetailElement = lightboxTextContainer.querySelector('.lightbox-detail-text');
 if (existingDetailElement) {
     existingDetailElement.textContent = lightboxDetailText;
 } else {
     var detailElement = document.createElement('p');
     detailElement.textContent = lightboxDetailText;
     detailElement.classList.add('lightbox-detail-text');
     lightboxTextContainer.appendChild(detailElement);
 }
}

//ABOUT LIGHTBOX FUNKTIONEN
function openAbout() {
  document.getElementById('aboutBox').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Verhindert das Scrollen
}

function closeAbout() {
  var aboutBox = document.getElementById('aboutBox');
  aboutBox.classList.add('closing');

  aboutBox.addEventListener('animationend', function() {
      aboutBox.style.display = 'none';
      aboutBox.classList.remove('closing');
      document.body.style.overflow = 'auto'; // Setzt Scrollen auf Standard zurück
  }, { once: true });
}

//BACK-TO-TOP-BUTTON
function topFunction() {
  document.body.scrollTop = 0; // Für Safari
  document.documentElement.scrollTop = 0; // Für Chrome, Firefox, IE und Opera
}

// Back to Top Button sichtbar machen, sobald gescrollt wird
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector('.back-to-top').style.display = 'block';
  } else {
      document.querySelector('.back-to-top').style.display = 'none';
  }
};

// AUF MOBILE LIGHTBOX-GALLERY AUF 1. BILD BESCHRÄNKEN
function setCurrentImage(clickedImg) {
  var lightboxImages = clickedImg.getAttribute('data-lightbox-images').split(',');
  var lightboxText = clickedImg.getAttribute('data-lightbox-text');
  var lightboxDetailText = clickedImg.getAttribute('data-lightbox-detail-text');

  var lightboxGallery = document.querySelector('.lightbox-scroll');
  lightboxGallery.innerHTML = ''; // Entfernt alle aktuellen Bilder

  // Überprüfen, ob die Seite auf einem mobilen Gerät angezeigt wird
  if (window.innerWidth <= 768) {
      // Nur das erste Bild für mobile Geräte hinzufügen
      var imgElement = document.createElement('img');
      imgElement.src = lightboxImages[0];
      imgElement.classList.add('lightbox-image');
      lightboxGallery.appendChild(imgElement);
  } else {
      // Alle Bilder für Desktop hinzufügen
      lightboxImages.forEach(imgSrc => {
          var imgElement = document.createElement('img');
          imgElement.src = imgSrc;
          imgElement.classList.add('lightbox-image');
          lightboxGallery.appendChild(imgElement);
      });
  }

  var lightboxTextContainer = document.querySelector('.lightbox-text');
  lightboxTextContainer.innerHTML = ''; // Leert den vorhandenen Text

  var titleElement = document.createElement('p');
  titleElement.textContent = lightboxText;
  lightboxTextContainer.appendChild(titleElement);

  // Prüft, ob der Fließtext bereits existiert, und aktualisiert oder erstellt ihn
  var existingDetailElement = lightboxTextContainer.querySelector('.lightbox-detail-text');
  if (existingDetailElement) {
      existingDetailElement.textContent = lightboxDetailText;
  } else {
      var detailElement = document.createElement('p');
      detailElement.textContent = lightboxDetailText;
      detailElement.classList.add('lightbox-detail-text');
      lightboxTextContainer.appendChild(detailElement);
  }
}

