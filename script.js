const images = [
    'pics/frog.gif',
    'pics/vibin.gif',
    'pics/goodnight.gif'
  ];

  let currentIndex = 0; 

  
  
  function revealImage() {
    const img = document.getElementById("hiddenImage");

   
    img.src = images[currentIndex]; 
    img.style.display = "block";

  
  
  currentIndex++; 

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  }
