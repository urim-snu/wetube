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
    spanText.innerHTML = comment;
    li.appendChild(spanText);
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
// TODO
const deleteComment = (commentId) => {
    const commentArray = commentList.querySelectorAll("li");
    console.log(commentArray);
    for (let i = 0; i < commentArray.length; i++) {
        const tempID = commentArray[i].lastElementChild.value;
        if (tempID === commentId) {
            commentList.removeChild(commentArray[i]);
        }
    }
}

const handleDeleteComment = async (event) => {
    const {
        target: {
            value: commentId
        }
    } = event;
    const videoId = window.location.href.split("/videos/")[1];
    const response = await axios({
        url: `/api/${videoId}/delete-comment/`,
        method: "POST",
        data: {
            commentId
        }
    });
    if (response.status === 200) {
        deleteComment(commentId);
    }

}

function init() {
    addCommentForm.addEventListener("submit", handleSubmit);
    for (let i = 0; i < deleteCommentBtn.length; i++) {
        deleteCommentBtn[i].addEventListener("click", handleDeleteComment);
    }
}

if (addCommentForm) {
    init();
}