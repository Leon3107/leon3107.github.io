const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.addEventListener("DOMContentLoaded", function(event) {
    render();
});

function render() {
  const text1 = document.getElementById('team1-text').value || 'SG Gebhardshain';
  const text2 = document.getElementById('team2-text').value || 'SG Gebhardshain';
  const where = document.getElementById('where').value || 'Gebhardshain';
  const when = document.getElementById('when').value || '12:10 Uhr';
  const date = document.getElementById('date').value || 'Sa, 10.10.2025';

  const imageSource1 = document.getElementById('team1-select').value || 'logos/sgg.png';
  const imageSource2 = document.getElementById('team2-select').value || 'logos/sgg.png';
  const playerImageSource = document.getElementById('player-select').value || 'ankuendigung/3.png';
  
  text = ':';
  const imgTeam1 = new Image();
  imgTeam1.src = imageSource1;
  
  const imgTeam2 = new Image();
  imgTeam2.src = imageSource2;

  const img = new Image();
  img.src = playerImageSource;

  // Hintergrundbild zeichnen
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const x = canvas.width / 2;
  const y = 280;

  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 12;
  ctx.shadowOffsetY = 12;
  ctx.drawImage(imgTeam1, x - 300, y-110, 160, 160);
  ctx.drawImage(imgTeam2, x + 140, y-110, 160, 160);

  // Textstil
  ctx.font = 'bold 100px Tahoma';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(text, x, y);
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 1)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 12;
  ctx.shadowOffsetY = 12;
  
  ctx.font = 'bold 30px Tahoma';
  ctx.fillText(text1, x - 220, y+80);
  ctx.fillText(text2, x + 220, y+80);

  
  ctx.font = 'bold 40px Tahoma';
  ctx.textAlign = 'right';
  ctx.fillText(where, x + 280, 500);
  ctx.fillText(date, x + 280, 590);
  ctx.fillText(when, x + 280, 680);
  
}

function downloadImage() {
  const link = document.createElement('a');
  link.download = 'ankuendigung.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}