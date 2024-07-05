// TODO: Create a variable that selects the form element
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const submit = document.querySelector('#submit');
const error = document.querySelector('#error');

// TODO: Create a function that handles the form submission. 
// Grab the form data and store it in local storage, then 
// redirect to the blog page using the redirectPage function. 
// If the form is submitted with missing data, display an 
// error message to the user.

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url, 'blog.html');
};

let Storage = [];

function start() {
  const blog = JSON.parse(localStorage.getItem('post')) || [];
  Storage = blog

}

function update() {
  localStorage.setItem('post', JSON.stringify(Storage));
}

// TODO: Add an event listener to the form on submit. 
// Call the function to handle the form submission.

submit.addEventListener('click', function (event) {
  event.preventDefault();

  const userInfo = username.value.trim();
  const titleInfo = title.value.trim();
  const contentInfo = content.value.trim();

  if (userInfo === '' || titleInfo === '' || contentInfo === '') {
    alert("Please complete the form.");
    return;
  }
  Storage.unshift({
    username: userInfo,
    title: titleInfo,
    content: contentInfo,
  });

  update();
  window.location.assign('blog.html')

});

start();
