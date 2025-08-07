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
  const y = 540;

  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 12;
  ctx.shadowOffsetY = 12;
  ctx.drawImage(imgTeam1, x - 380, y-110, 200, 200);
  ctx.drawImage(imgTeam2, x + 180, y-110, 200, 200);

  // Textstil
  ctx.font = 'bold 120px Tahoma';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(text, x, y);
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 1)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 12;
  ctx.shadowOffsetY = 12;
  
  ctx.font = 'bold 40px Tahoma';
  ctx.fillText(text1, x - 280, y+140);
  ctx.fillText(text2, x + 280, y+140);

  
  ctx.font = 'bold 60px Tahoma';
  ctx.textAlign = 'right';
  ctx.fillText(where, x + 420, 1094);
  ctx.fillText(date, x + 420, 1262);
  ctx.fillText(when, x + 420, 1422);
  
}

function downloadImage() {
  const link = document.createElement('a');
  link.download = 'ankuendigung.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}