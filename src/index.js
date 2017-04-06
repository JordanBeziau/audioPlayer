window.addEventListener('DOMContentLoaded', () => {

	// Ciblages
	const player = document.getElementById('player'),
	      btnPP = document.getElementById('pp'),
	      btnStop = document.querySelector('.btn-stop'),
	      btnPrev = document.querySelector('.btn-prev'),
	      btnNext = document.querySelector('.btn-next'),
        affTitre = document.querySelector('h3'),
        affArtiste = document.querySelector('h4'),
        affCover = document.querySelector('.img-song img'),
        affListing = document.querySelector('#listing select'),
				affProgressBar = document.querySelector('div.progressBar > div.progress'),
				affBtnProgress = document.querySelector('div.progressBar > div.btn-progress');
  // Initialisation
  const nbrMusiques = tabMusiques.length;
  let listing = '';
  let numMusique = 0,
      progressBar;

  // Init lecteur musique 1
  affTitre.textContent = tabMusiques[0].titre;
  affArtiste.textContent = tabMusiques[0].artiste;
  affCover.src = `cover/${tabMusiques[0].cover}`;
  player.src = `mp3/${tabMusiques[0].fichier}`;

  // Liste tous les titres
  for (let i = 0; i < nbrMusiques; i++) {
    listing += `<option value="${i}">${ tabMusiques[i].titre }</option>`;
  }
  affListing.innerHTML = listing;

  // Gestion du listing
  affListing.addEventListener('change', () => {
    numMusique = affListing.value;
    setActualAudio();
    playAudio();
  });

	// Gestion du BTN PLAY
	btnPP.addEventListener('click', () => {
		if (player.paused===true) {
      playAudio();
		} else {
			player.pause();
			btnPP.className = "btn-play";
		}
	});

	// Gestion du BTN STOP
	btnStop.addEventListener('click', () => {
		player.pause();
		player.currentTime = 0;
		btnPP.className = "btn-play";
	});

  // Gestion du BTN PREV
  btnPrev.addEventListener('click', () => {
    if (numMusique <= 0) {
      numMusique = nbrMusiques - 1;
    } else {
      numMusique--;
    }
    setActualAudio();
		playAudio();
  });

  // Gestion du BTN NEXT
  btnNext.addEventListener('click', () => {
		nextAudio();
  });

  // Barre de temps audio
  player.addEventListener('timeupdate', () => {
    progressBar = player.currentTime * 100 / player.duration;
    affProgressBar.style.width = `${progressBar}%`;
		affBtnProgress.style.left = `${progressBar}%`;
  });

  // Fonction set actuel piste audio
  const setActualAudio = () => {
    affTitre.textContent = tabMusiques[numMusique].titre;
    affArtiste.textContent = tabMusiques[numMusique].artiste;
    affCover.src = `cover/${tabMusiques[numMusique].cover}`;
    player.src = `mp3/${tabMusiques[numMusique].fichier}`;
  }
  // Fonction Play affiche btn pause
  const playAudio = () => {
    player.play();
    btnPP.className = "btn-pause";
  }
	// Fonction Next piste
	const nextAudio = () => {
		if (numMusique >= nbrMusiques - 1) {
      numMusique = 0;
    } else {
      numMusique++;
    }
    setActualAudio();
    playAudio();
	}
});
