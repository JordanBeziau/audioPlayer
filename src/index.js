window.addEventListener('DOMContentLoaded', function(){

	// Ciblages
	const player = document.getElementById('player');
	const btn_pp = document.getElementById('pp');
	let btn_stop = document.querySelector('.btn-stop');
	let btn_prev = document.querySelector('.btn-prev');
	let btn_next = document.querySelector('.btn-next');

	// Gestion du BTN PLAY
	btn_pp.addEventListener('click', function() {
		if (player.paused===true) {
			player.play();
			btn_pp.className = "btn-pause";
		} else {
			player.pause();
			btn_pp.className = "btn-play";
		}
	});

	// Gestion du BTN STOP
	btn_stop.addEventListener('click', function() {
		player.pause();
		player.currentTime = 0;
		btn_pp.className = "btn-play";
	});

});
