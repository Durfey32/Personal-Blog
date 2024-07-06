// TODO: Create a variable that selects the main element
const post = document.querySelector('#post');
const back = document.querySelector('#back');
const error = document.querySelector('#error');

// TODO: Create a function that builds an element and appends it to the DOM
let blogStorage = JSON.parse(localStorage.getItem('post')) || [];

function displayMessage(type, message) {
    error.textContent = message;
    error.setAttribute('class', type);
  }
// TODO: Create a function that handles the case where there are no blog posts to display
function renderBlog() {
    const storedPosts = blogStorage;

    if (storedPosts.length === 0) { displayMessage('error', 'No blog posts are available.')
    } else {


        // TODO: Create a function that reads from local storage and returns the data
        post.textContent = '';
        for (let i = 0; i < storedPosts.length; i++) {
            console.log(i);
            console.log(storedPosts[i])
            const { title, content, username } = storedPosts[i];
            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            const span = document.createElement('span');

            h2.textContent = title;
            p.textContent = content;
            span.textContent = 'Posted by: ' + username;

            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(span);

            post.appendChild(div);
        }
    }
}
// TODO: Call the function to render the list of blog posts
function init() {
    const blog = JSON.parse(localStorage.getItem('post')) || [];
    if (blog.length !== 0) {
        blogStorage = blog;
    }
    renderBlog()
}

back.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.assign('index.html');
});

init()













