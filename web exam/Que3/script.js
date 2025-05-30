const loginBtn = document.getElementById('loginBtn');
const message = document.getElementById('message');

    function simulateLogin() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Welcome back!");
        }, 2000);
      });
    }

    loginBtn.addEventListener('click', () => {
      message.textContent = "Logging in...";
      simulateLogin().then(result => {
        message.textContent = result;
      });
    });