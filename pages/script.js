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

  const x = canvas.width / 2;
  const y = canvas.height - 300;


  ctx.save(); 

  // Textstil
  ctx.font = 'bold 120px Arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 4;

  ctx.translate(x, y);
  
  const skewX = 0.5; // je höher, desto schräger
  const skewY = 0;   // kein Vertikalskew
  ctx.transform(1, skewY, skewX, 1, 0, 0);


  ctx.fillText(text, 0, 0);

  ctx.restore();
}

function downloadImage() {
  const link = document.createElement('a');
  link.download = 'ergebnis.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}