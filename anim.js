// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "", time: 0},
  { text: "", time: 0 },
  { text: "", time: 5},
  { text: "", time: 3 },
  { text: "", time: 4 },
  { text: "", time: 5 },
  { text: "", time: 6 },
  { text: "", time: 43 },
  { text: "", time: 50 },
  { text: "", time: 55 },
  { text: "", time: 60 },
  { text: "", time: 63 },
  { text: "", time: 79 },
  { text: "", time: 82 },
  { text: "", time: 89 },
  { text: "", time: 92 },
  { text: "", time: 95 },
  { text: "", time: 97 },
  { text: "", time: 105 },
  { text: "", time: 111 },
  { text: "", time: 115 },
  { text: "", time: 120 },
  { text: "", time: 123 },
  { text: "", time: 126 },
  { text: "", time: 130 },
  { text: "", time: 132 },
  { text: "", time: 140 },
  { text: "", time: 144 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);