const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.crossOrigin="anonymous";
img.src = 'test.png'; // dein Bildname

img.onload = () => {
  render(); // initiale Zeichnung
};

function render() {
  const text = document.getElementById('scoreInput').value || '0:0';

  // Hintergrundbild zeichnen
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Textstil
  ctx.font = 'bold 100px Arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Position (z. B. mittig unten)
  const x = canvas.width / 2;
  const y = canvas.height - 150;
  

  ctx.fillText(text, x, y);
}

function downloadImage() {
  const link = document.createElement('a');
  link.download = 'ergebnis.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}