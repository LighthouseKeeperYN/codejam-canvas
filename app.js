const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

function paint(cellSize, img) {
  for (let y = 0; y < cellSize; y++) {
    for (let x = 0; x < cellSize; x++) {
      ctx.fillStyle = '#' + img[y][x];
      ctx.fillRect(128 * y, 128 * x, 128, 128);
    }
  }
}

function fetchImg(src, pixelSize) {
  let img;

  fetch(src)
    .then(res => res.json())
    .then(data => img = data)
    .then(() => paint(pixelSize, img))
}