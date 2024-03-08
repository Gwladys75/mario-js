// let animation = document.getElementById('bloc');
// // let img = new Image('img');


// function monAnimation() {
//     // Code de mise à jour de l'animation
  
//     // Demander une nouvelle frame d'animation
//     requestAnimationFrame();
//   }
  
//   // Lancer l'animation
//   requestAnimationFrame();


//   requestAnimationFrame(callback);


document.getElementById("bloc").animate(
  [
    // étapes/keyframes
    { transform: "translateY(0px)" },
    { transform: "translateX(900px)" },
  ],
  {
    // temporisation
    duration: 1000,
    iterations: Infinity,
  
  },
);
