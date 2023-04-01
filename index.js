// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// const mousecursor = document.querySelector(".mousecursor");
// const mouseCircle1 = document.querySelector(".mousecircle1");
// const mouseCircle2 = document.querySelector(".mousecircle2");

// je vais mettre des id aux balises html des cercles, donc plus besoin de querySelector car JS reconnais nativement les id !

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  mouse1.style.top = e.pageY + "px";
  mouse1.style.left = e.pageX + "px";
  mouse2.style.top = e.pageY + "px";
  mouse2.style.left = e.pageX + "px";
});

// S'assurer que les liens sont clickables

// --> dans le CSS, je mets un z-index fort sur les liens de la nav

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// --> dans le CSS
