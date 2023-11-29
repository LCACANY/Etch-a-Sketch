document.addEventListener('DOMContentLoaded', function () {
  let gridSize = 16;
  let isBlackMode = false;
  let isRainbowMode = false;
  let isShadowMode = false;
  let isEraserMode = false;
  let isClearMode = false;
  let isDrawing = false;

  const image = document.querySelector('img');
  const container = document.querySelector('.container');
  const slider = document.querySelector('.slider');
  const sliderValue = document.querySelector('.sliderValue');
  const blackButton = document.querySelector('.black');
  const rainbowButton = document.querySelector('.rainbow'); // Assuming you have a button for rainbow mode
  const shadowButton = document.querySelector('.shadow'); // Assuming you have a button for shadow mode
  const eraserButton = document.querySelector('.eraser'); // Assuming you have a button for eraser
  const clearButton = document.querySelector('.clear'); // Assuming you have a button for clearing the grid

  function createGrid() {
    container.innerHTML = '';
    const containerWidth = container.clientWidth;
    const itemSize = containerWidth / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.style.width = `${itemSize}px`;
      gridItem.style.height = `${itemSize}px`;
      container.appendChild(gridItem);

      gridItem.addEventListener('mousedown', function () {
        isDrawing = true;
        handleDrawing(gridItem);
      });

      gridItem.addEventListener('mouseenter', function () {
        if (isDrawing) {
          handleDrawing(gridItem);
        }
      });

      gridItem.addEventListener('mouseup', function () {
        isDrawing = false;
      });
    }
  }

  const gridItems = document.querySelectorAll('.grid-item');

  function handleDrawing(gridItem) {
    if (isBlackMode) {
      gridItem.style.backgroundColor = 'black';
    }else if (isRainbowMode){
      const randomColor = getRandomColor();
      //console.log('Random Color:', randomColor);
      gridItem.style.backgroundColor = randomColor;
    }else if (isShadowMode) {
      // Increase darkness by 10% for the current grid item
      let currentDarkness = gridItem.dataset.darkness || 0;
      currentDarkness = Math.min(100, parseInt(currentDarkness, 10) + 10);
      gridItem.dataset.darkness = currentDarkness;
      const newShadowColor = `rgba(0, 0, 0, ${currentDarkness / 100})`;
      gridItem.style.backgroundColor = newShadowColor;
    }else if (isEraserMode){
      gridItem.style.backgroundColor = 'white';
    }
  };
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  createGrid();

  slider.addEventListener('input', function () {
    gridSize = slider.value;
    sliderValue.textContent = `${gridSize} x ${gridSize}`;
    createGrid();
  });

  blackButton.addEventListener('click', function () {
    image.src = 'blackcircle.png'
    isBlackMode = false;
    isRainbowMode = false;
    isShadowMode = false;
    isEraserMode = false;
    isClearMode = false;
    isBlackMode = !isBlackMode;
    
  });

  // Add event listeners for other modes if needed

  rainbowButton.addEventListener('click', function () {
    // Your rainbow mode logic here
    image.src = 'colorcircle.png'
    isBlackMode = false;
    isRainbowMode = false;
    isShadowMode = false;
    isEraserMode = false;
    isClearMode = false;
    isRainbowMode = !isRainbowMode;
  });

  shadowButton.addEventListener('click', function () {
    // Your shadow mode logic here
    image.src = 'graycircle.png'
    isBlackMode = false;
    isRainbowMode = false;
    isShadowMode = false;
    isClearMode = false;
    isShadowMode = !isShadowMode;
    
  });

  eraserButton.addEventListener('click', function () {
    // Your eraser mode logic here
    image.src = 'eraser.png'
    isBlackMode = false;
    isRainbowMode = false;
    isShadowMode = false;
    isEraserMode = false;
    isClearMode = false;
    isEraserMode = !isEraserMode;
  });

  clearButton.addEventListener('click', function () {
    // Your clear grid logic here
    //container.style.backgroundColor = 'white'; // Set container background to white
    createGrid(); // Reset the entire container
    image.src = 'blackcircle.png'
    isBlackMode = false;
    isRainbowMode = false;
    isShadowMode = false;
    isEraserMode = false;
    isClearMode = false;
    isClearMode = !isClearMode;
  });
});
