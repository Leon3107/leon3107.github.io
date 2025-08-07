const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = 'bericht/bg.png';

img.onload = () => {
  render();
};

function render() {
  const result1 = document.getElementById('team1-result').value || '0';
  const result2 = document.getElementById('team2-result').value || '0';
  const result1Half = document.getElementById('team1-result-halftime').value || '0';
  const result2Half = document.getElementById('team2-result-halftime').value || '0';
  const goals1 = document.getElementById('team1-goals').value || 'Tim Müller 42\' 43\' 44\'';
  const goals2 = document.getElementById('team2-goals').value || 'Tim Müller 42\' 43\' 44\'';

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
  const text2 = '(' + result1Half + ':' + result2Half + ')';

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
  ctx.fillText(text2, x, y+30);
  ctx.font = 'bold 40px Tahoma';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';

  var leftX = x+60;
  var lefyY = y+130;
  var lineheight = 56;
  var lines = goals2.split('\n');

  for (var i = 0; i<lines.length; i++)
      ctx.fillText(lines[i], leftX, lefyY + (i*lineheight) );

  ctx.textBaseline = 'top';
  ctx.textAlign = 'right';
  leftX = x-60;
  lefyY = y+130;
  lines = goals1.split('\n');
  
  for (var i = 0; i<lines.length; i++)
      ctx.fillText(lines[i], leftX, lefyY + (i*lineheight) );

  ctx.font = '58px Tahoma';
  ctx.textAlign = 'left';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillText(day, x+299, y-432);
  
}

function downloadImage() {
  const link = document.createElement('a');
  link.download = 'bericht.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}