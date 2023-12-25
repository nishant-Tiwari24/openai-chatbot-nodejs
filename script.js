const chatInput = document.querySelector(".chat-input textarea");
const sendChatbtn = document.querySelector(".chat-input span");

let userMessage;

function handleChat() {
    userMessage = chatInput.value.trim();
    console.log(userMessage)
}

sendChatbtn.addEventListener('click',handleChat);