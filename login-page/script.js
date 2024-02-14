const container = document.getElementById('container');
const regidterBtn = document.getElementById('Register');
const loginBtn = document.getElementById('Login');

regidterBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});
