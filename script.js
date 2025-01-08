document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const tech = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (tech === "TECH") {
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
