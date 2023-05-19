let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("posts");

input.addEventListener('keyup', e => {
    input.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    input.style.height = `${scHeight}px`;
});

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    readPost();
});

let data = {};
function readPost() {
    data['text'] = input.value;
    
    createPost();
}

function createPost() {
    posts.innerHTML += `<div style="border: 5px solid #98e719; overflow: auto; border-radius: 20px; padding: 10px;font-size: 20px;margin-bottom: 15px">
    <h3 style="fontsize: 20px;">your Post here</h3>
    <p>${data.text}</p>
        <span class="icon">
            <img src="img/rose-320868__340.jpg" width="50px;" height="50px;">
            <iconify-icon class="like" style="color: #fff;" onClick="likePost(this)" icon="mdi:heart"></iconify-icon>
            <span class="likeCount">0</span>
            <iconify-icon onClick="editPost(this)" icon="material-symbols:edit-document"></iconify-icon>
            <iconify-icon onClick="deletePost(this)" icon="material-symbols:delete-outline"></iconify-icon>
        </span>
    </div>`
    input.value = " ";
}

    let liked = 1;
    count = 0;

function likePost(e) {
    const likeheart = posts.querySelector('.like');
    const likeCount = posts.querySelector('.likeCount');
    let count = parseInt(likeCount.textContent);
    
    if (liked == 1) {
        count++;
        likeheart.style.color = "red";
        likeCount.textContent = count;
        liked = 0;
    } else  {
        count--;
        likeheart.style.color = "white";
        likeCount.textContent = count;
        liked = 1;
    }
}

function editPost(e) {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    posts.innerHTML = " ";
}

function deletePost(e) {
    input.value = " ";
    posts.innerHTML = " ";
}