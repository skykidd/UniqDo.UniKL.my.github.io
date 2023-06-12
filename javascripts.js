function darkmode() {
  const wasDarkmode = localStorage.getItem('darkmode') === 'true';
  localStorage.setItem('darkmode', !wasDarkmode);
  const element = document.body;
  element.classList.toggle('dark-mode', !wasDarkmode);
  changeImage();
}

function onload() {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
  changeImage();
}

function changeImage() {
  let displayImage = document.getElementById('icon');
  if (document.body.classList.contains('dark-mode')) {
    displayImage.src = 'picture Akid/sun.png';
  } else {
    displayImage.src = 'picture Akid/moon.png';
  }
}
