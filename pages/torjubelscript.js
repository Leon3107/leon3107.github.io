const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  render();
};

function render() {
  const text1 = document.getElementById('scoreInput').value || '0';
  const text2 = document.getElementById('scoreInput2').value || '0';

  const imageSource1 = document.getElementById('team1-select').value || 'logos/sgg.png';
  const imageSource2 = document.getElementById('team2-select').value || 'logos/sgg.png';
  const playerImageSource = document.getElementById('player-select').value || 'tore/test.png';
  
  const imgTeam1 = new Image();
  imgTeam1.src = imageSource1;
  
  const imgTeam2 = new Image();
  imgTeam2.src = imageSource2;

  const img = new Image();
  img.src = playerImageSource;

  text = text1 + ':' + text2;

  // Hintergrundbild zeichnen
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const x = canvas.width / 2;
  const y = canvas.height - 500;

  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetX = 24;
  ctx.shadowOffsetY = 24;
  ctx.drawImage(imgTeam1, x - 480, y-110, 200, 200);
  ctx.drawImage(imgTeam2, x + 280, y-110, 200, 200);

  ctx.save(); 

  // Textstil
  ctx.font = 'bold 150px Tahoma';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 1)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetX = 24;
  ctx.shadowOffsetY = 24;

  ctx.translate(x, y);
  
  const skewX = 0;
  const skewY = 0;
  ctx.transform(1, skewY, skewX, 1, 0, 0);


  ctx.fillText(text, 0, 0);

  ctx.restore();
}

function downloadImage() {
  render();
  const link = document.createElement('a');
  link.download = 'ergebnis.jpg';
  link.href = canvas.toDataURL('image/jpg');
  link.click();
}