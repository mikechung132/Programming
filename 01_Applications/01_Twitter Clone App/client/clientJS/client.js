// grabbing an element on the page
const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading');
const pawsElement = document.querySelector('.paws');
const API_URL = 'http://localhost:3000/paws';

loadingElement.style.display = '';

listAllPaws();

form.addEventListener('submit', (event) => {
  // prevents page from re-rendering
  event.preventDefault();

  // Grabs data from the forms
  const formData = new FormData(form);
  const name = formData.get('name');
  const comment = formData.get('comment');


  // Put data in objects
  const pawment = {
    name,
    comment
  };


  // Displays loading image
  form.style.display = 'none';
  loadingElement.style.display = '';


  // Data sent to Back-End Server
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(pawment),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json())
    .then(createdPawment => {
      console.log(createdPawment);
      form.reset();
      form.style.display = '';
      listAllPaws();
      loadingElement.style.display = 'none';
    });
});


function listAllPaws(){
  pawsElement.innerHTML = '';
  fetch(API_URL)
    .then(response => response.json())
    .then(paws => {
      // Reverse list where recent postings are at top
      paws.reverse();
      paws.forEach(paw => {
        const div = document.createElement('div');

        const header = document.createElement('h3');
        header.textContent = paw.name;

        const contents = document.createElement('p');
        contents.textContent = paw.comment;

        const date = document.createElement('small');
        date.textContent = new Date(paw.created);

        div.appendChild(header);
        div.appendChild(contents);
        div.appendChild(date);

        pawsElement.appendChild(div);
      });

      // Sets loading display to NONE
      loadingElement.style.display = 'none';
    });
}// end listAllPaws()
