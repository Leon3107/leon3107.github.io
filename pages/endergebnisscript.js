const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'ergebnis/bg.png';

img.onload = () => {
  render();
};

function render() {
  const text1 = document.getElementById('team1-text').value || 'SG Gebhardshain';
  const text2 = document.getElementById('team2-text').value || 'SG Gebhardshain';
  const result1 = document.getElementById('team1-result').value || '0';
  const result2 = document.getElementById('team2-result').value || '0';

  const day = document.getElementById('spieltag').value || '1';

  const imageSource1 = document.getElementById('team1-select').value || 'logos/sgg.png';
  const imageSource2 = document.getElementById('team2-select').value || 'logos/sgg.png';
  
  const imgTeam1 = new Image();
  imgTeam1.src = imageSource1;
  
  const imgTeam2 = new Image();
  imgTeam2.src = imageSource2;

  // Hintergrundbild zeichnen
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const x = canvas.width / 2;
  const y = 760;

  const text = result1 + ':' + result2;

  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetX = 24;
  ctx.shadowOffsetY = 24;
  ctx.drawImage(imgTeam1, x - 420, y-250, 220, 220);
  ctx.drawImage(imgTeam2, x + 200, y-250, 220, 220);

  // Textstil
  ctx.font = 'bold 120px Tahoma';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 12;
  ctx.shadowOffsetY = 12;
  ctx.fillText(text, x, y-110);
  ctx.font = 'bold 80px Tahoma';
  ctx.fillText(text1, x, y+130);
  ctx.fillText(text2, x, y+350);
  ctx.font = 'bold 60px Tahoma';
  ctx.fillText('vs', x, y+232);
  ctx.font = '58px Tahoma';
  ctx.textAlign = 'left';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillText(day, x+299, y-406);
  
}

function downloadImage() {
  const link = document.createElement('a');
  link.download = 'ergebnis.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}