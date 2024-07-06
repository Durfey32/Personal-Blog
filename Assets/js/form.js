// TODO: Create a variable that selects the form element
const usernameE1 = document.querySelector('#username');
const titleE1 = document.querySelector('#title');
const contentE1 = document.querySelector('#content');
const submitE1 = document.querySelector('#submit');
const errorE1 = document.querySelector('#error');

// TODO: Create a function that handles the form submission. 
// Grab the form data and store it in local storage, then 
// redirect to the blog page using the redirectPage function. 
// If the form is submitted with missing data, display an 
// error message to the user.

let BlogStorage = [];

function displayMessage(type, message) {
  errorE1.textContent = message;
  errorE1.setAttribute('class', type);
}

function renderLastRegistered() {
  const username = localStorage.getItem('username');
  const title = localStorage.getItem('title');
  const content = localStorage.getItem('content')

  if(!username || !title || !content) {
    return;
  }

  usernameE1.textContent = username
  titleE1.textContent = title
  contentE1.textContent = content
}

// TODO: Add an event listener to the form on submit. 
// Call the function to handle the form submission.

submit.addEventListener('click', function (event) {
  event.preventDefault();

  const username = usernameE1.value.trim();
  const title = titleE1.value.trim();
  const content = contentE1.value.trim();

  if (username === '') {
    displayMessage('error', 'Please complete the form.');
  } else if (title === '') {
    displayMessage('error', 'Please complete the form.');
  } else if (content === '') {
    displayMessage('error', 'Please complete the form.');
  } else {
    displayMessage('success', 'Registered successfully');
  
  localStorage.setItem('username', username);
  localStorage.setItem('title', title);
  localStorage.setItem('conent', content);
  renderLastRegistered();
}

  BlogStorage.unshift({
    usernameE1: username,
    titleE1: title,
    contentE1: content,
  });


});

renderLastRegistered();

// function init() {
//   const blog = JSON.parse(localStorage.getItem('post')) || [];
//   BlogStorage = blog;

// }

function updateBlog() {
  localStorage.setItem('post', JSON.stringify(BlogStorage));
}



let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  window.location.assign(url, 'blog.html');
}
