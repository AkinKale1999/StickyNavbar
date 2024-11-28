const nav = document.querySelector(".nav");
// Wir suchen das ERSTE Element mit der Klasse "nav" und speichern es in der Variable 'nav'

window.addEventListener("scroll", fixNav);
// Wir fügen einen Event Listener hinzu,
// der die Funktion 'fixNav' jedes Mal aufruft, WENN GESCROLLT WIRD

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 200) {
    // Wenn die Scroll-Position des Fensters/Seite (window.scrollY)
    // größer ist als die Höhe der Navigation plus 200 Pixel

    nav.classList.add("active");
    // Wenn ja, fügen wir der Navigation die Klasse "active" hinzu
  } else {
    nav.classList.remove("active");
    // Wenn nicht, entfernen wir die Klasse "active" von der Navigation
  }
}
