const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'bericht2/bg.png';

img.onload = () => {
  render();
};

function render() {
  const result1 = document.getElementById('team1-result').value || '0';
  const result2 = document.getElementById('team2-result').value || '0';
  const result1Half = document.getElementById('team1-result-halftime').value || '0';
  const result2Half = document.getElementById('team2-result-halftime').value || '0';
  const goals1 = document.getElementById('team1-goals').value || '';
  const goals2 = document.getElementById('team2-goals').value || '';

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
  const y = 400;

  const text = result1 + ':' + result2;
  const text2 = '(' + result1Half + ':' + result2Half + ')';

  ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
  ctx.shadowBlur = 24;
  ctx.shadowOffsetX = 24;
  ctx.shadowOffsetY = 24;
  ctx.drawImage(imgTeam1, x - 290, y-160, 150, 150);
  ctx.drawImage(imgTeam2, x + 140, y-160, 150, 150);

  // Textstil
  ctx.font = 'bold 90px Tahoma';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
  ctx.shadowBlur = 20;
  ctx.shadowOffsetX = 12;
  ctx.shadowOffsetY = 12;
  ctx.fillText(text, x, y-110);
  ctx.font = 'bold 60px Tahoma';
  ctx.fillText(text2, x, y-10);
  ctx.font = 'bold 26px Tahoma';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';

  var leftX = x+30;
  var lefyY = y+60;
  var lineheight = 50;
  var lines = goals2.split('\n');

  for (var i = 0; i<lines.length; i++)
      ctx.fillText(lines[i], leftX, lefyY + (i*lineheight) );

  ctx.textBaseline = 'top';
  ctx.textAlign = 'right';
  leftX = x-30;
  lefyY = y+60;
  lines = goals1.split('\n');
  
  for (var i = 0; i<lines.length; i++)
      ctx.fillText(lines[i], leftX, lefyY + (i*lineheight) );

  ctx.font = '38px Tahoma';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillText(day, 600, 164);
  
}

function downloadImage() {
  const link = document.createElement('a');
  link.download = 'bericht.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}