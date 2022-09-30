
(() => {
  const email = document.querySelector("#font-size-control");
  const pass = document.querySelector("#text");
  const form = document.querySelector(".login-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
      alert("Всі поля повинні бути заповнені!");
    } else {
	  console.log({ "email": email.value, "password": password.value });
      form.reset();
    }
  });
})();