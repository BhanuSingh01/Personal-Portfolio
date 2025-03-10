let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(let tabLink of tabLinks){
        tabLink.classList.remove('active-link')
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


// sidemenu
let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = '0px';
}

function closemenu(){
    sidemenu.style.right = '-200px';
}


// deployment

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxmF9RBm3W4xMRUT7Akvm4ovX2H3MGLwkJSINBxp7mR9fFtxX_QrSdYwY8fuLQnVlQP8w/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = 'Message sent successfully.'
        setTimeout(function(){
            msg.innerHTML = ''
        },7000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
