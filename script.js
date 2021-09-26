const isMobile = window.innerWidth < 769;

//change for share
document
  .querySelector('.article__signature--share')
  .addEventListener('click', function (event) {
    console.log('click');

    window.innerWidth < 769
      ? (document.querySelector('.article__signature').style.display = 'none')
      : '';

    document.querySelector('.article__socials').style.display = 'flex';
  });

//change for signature
document
  .querySelector('.article__socials--share')
  .addEventListener('click', function (event) {
    console.log('click');
    document.querySelector('.article__signature').style.display = 'flex';
    document.querySelector('.article__socials').style.display = 'none';
  });

document
  .querySelector('.article__socials--close')
  .addEventListener('click', function (event) {
    console.log('click');
    document.querySelector('.article__socials').style.display = 'none';
  });
