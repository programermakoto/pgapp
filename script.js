
const promptName = prompt("What is your name?");

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const userPassword = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
    if (username === promptName && userPassword === "Eishi") {
        messageElement.textContent = 'ログイン成功！';
        messageElement.style.color = 'green';
        setTimeout(() => {
            window.location.href = 'main/main.html';
        }, 500);
    } else {
        messageElement.textContent = 'ユーザー名またはパスワードが間違っています。';
        messageElement.style.color = 'red';
    }
});