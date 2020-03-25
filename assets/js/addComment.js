import axios from "axios";

const addCommentForm = document.getElementById("jsAddComent");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const deleteCommentBtn = document.querySelectorAll("#jsCommentList li button");

const increseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
}

const addComment = async comment => {
    const li = document.createElement("li");
    const spanText = document.createElement("span");
    const spanDelete = document.createElement("span");
    spanDelete.classList.add("deleteComment");
    spanDelete.innerHTML = `<i class="fas fa-trash"></i>`;
    spanText.innerHTML = comment;
    li.appendChild(spanText);
    li.appendChild(spanDelete);
    commentList.prepend(li);
    increseNumber();
}


const sendComment = async comment => {
    const videoId = window.location.href.split("/videos/")[1];
    console.log(videoId);
    const response = await axios({
        url: `/api/${videoId}/comment`,
        method: "POST",
        data: {
            comment
        }
    });
    if (response.status === 200) {
        addComment(comment);
    }
}

const handleSubmit = event => {
    event.preventDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
}

function init() {
    console.log(deleteCommentBtn);
    addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
    init();
}