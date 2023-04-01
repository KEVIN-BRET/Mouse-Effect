// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

const mousecursor = document.querySelector(".mousecursor");
const mouseCircle1 = document.querySelector(".mousecircle1");
const mouseCircle2 = document.querySelector(".mousecircle2");

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

window.addEventListener("mousemove", (e) => {
  mouseCircle1.style.left = e.pageX + "px";
  mouseCircle1.style.top = e.pageY + "px";
  mouseCircle2.style.left = e.pageX + "px";
  mouseCircle2.style.top = e.pageY + "px";
  mousecursor.style.left = e.pageX + "px";
  mousecursor.style.top = e.pageY + "px";
});

// S'assurer que les liens sont clickables

// --> dans le CSS, je mets un z-index fort sur les liens de la nav

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// --> dans le CSS
