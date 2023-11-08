document.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const { email, password } = this.elements;

    if (email.value === "" || password.value === "") {
      alert("Please fill in all the fields.");
      return;
    }

    const formData = {
      email: email.value,
      password: password.value,
    };

    console.log(formData);

    this.reset();
  });
});
