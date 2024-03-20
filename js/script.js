// Lagu Indonesia
let playlistIndonesia = document.getElementById("playlistIndonesia");
let songsIndonesia = playlistIndonesia.querySelectorAll("a");
songsIndonesia.forEach(function (song) {
  song.addEventListener("click", function (event) {
    event.preventDefault();
    let audioPlayer = document.getElementById("audio-player");
    audioPlayer.src = event.target.getAttribute("href");
    audioPlayer.play();
  });
});

// Lagu Barat
let playlistBarat = document.getElementById("playlistBarat");
let songsBarat = playlistBarat.querySelectorAll("a");
songsBarat.forEach(function (song) {
  song.addEventListener("click", function (event) {
    event.preventDefault();
    let audioPlayer = document.getElementById("audio-player");
    audioPlayer.src = event.target.getAttribute("href");
    audioPlayer.play();
  });
});

// Lagu Jepang
let playlistJepang = document.getElementById("playlistJepang");
let songsJepang = playlistJepang.querySelectorAll("a");
songsJepang.forEach(function (song) {
  song.addEventListener("click", function (event) {
    event.preventDefault();
    let audioPlayer = document.getElementById("audio-player");
    audioPlayer.src = event.target.getAttribute("href");
    audioPlayer.play();
  });
});

// Active
document.addEventListener("DOMContentLoaded", function () {
  const playlists = document.querySelectorAll(".playlist");

  playlists.forEach((playlist) => {
    const listItems = playlist.querySelectorAll("li a");

    listItems.forEach((item) => {
      item.addEventListener("click", function (event) {
        event.preventDefault();

        // Menghapus kelas active dari semua item list pada semua playlist
        playlists.forEach((otherPlaylist) => {
          const otherListItems = otherPlaylist.querySelectorAll("li a");
          otherListItems.forEach((otherItem) => {
            if (otherItem !== this) {
              otherItem.classList.remove("active");
            }
          });
        });

        // hapus kelas active dari semua playlist saat ini
        listItems.forEach((otherItem) => {
          if (otherItem !== this) {
            otherItem.classList.remove("active");
          }
        });

        // Toggle kelas active pada yg diklik
        this.classList.toggle("active");
      });
    });
  });
});

// Update tahun footer sesuai tahun saat ini
let tahunIni = document.querySelector(".tahun");

let ambilData = new Date();
let tahunNow = ambilData.getFullYear();

tahunIni.innerHTML = tahunNow;
