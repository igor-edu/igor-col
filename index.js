document
  .querySelector('.nav-links-button')
  .addEventListener('click', function () {
    // console.log(this);
    this.classList.toggle('open');
    document.querySelector('.nav-expand').classList.toggle('open');
  });

document.querySelectorAll('.nav-expand a').forEach((a) =>
  a.addEventListener('click', () => {
    document.querySelector('.nav-expand').classList.remove('open');
    document.querySelector('.nav-links-button').classList.remove('open');
  })
);
