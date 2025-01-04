import "./theme.module.js"

const signIn = document.querySelector('.login-form');

const emailInput = document.querySelector('#email-input');
const nameInput = document.querySelector('#name-input');
const textareaInput = document.querySelector('#textarea-input');

const validEmail = document.querySelector('.email');
const validName = document.querySelector('.valid_name')
const namePass = document.querySelector('.textarea');

const reset = document.querySelector('.reset');

// const userInfo = document.querySelector('.user_info');

const formData = { email: "", message: "" };

const adminInfo = {
  email: "",
  name: "",
  surname: "Harasymiv",
  role: "Admin",
  avatar: "https://scontent.fktw6-1.fna.fbcdn.net/v/t39.30808-6/387876476_1528613937888598_289684145714945079_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-d6LnMVHBU0Q7kNvgG1bQ2L&_nc_zt=23&_nc_ht=scontent.fktw6-1.fna&_nc_gid=A5uH1GgWIs2F17CAk1px5iW&oh=00_AYC-Y7InWFf4uXfWjcF8fbWZUFyDWRPzi0f1sB-7Hf5LEg&oe=677DBF6F",
}

// const userPanel = document.querySelector(".user_panel");
const userEmail = document.querySelector(".email_user");
const userAvatar = document.querySelector(".user_avatar");
const userName = document.querySelector(".name");
// const userSurname = document.querySelector(".surname");
const role = document.querySelector(".role");

const localStorageKeyEmail = "emailKey";
const localStorageKeyName = "nameKey";
const localStorageKeyText = "messageKey";

const localStorageKeyEmailForm = "formEmail";
const localStorageKeyNameForm = "formName";


emailInput.value = localStorage.getItem(localStorageKeyEmail) ?? "";
nameInput.value = localStorage.getItem(localStorageKeyName) ?? "";
textareaInput.value = localStorage.getItem(localStorageKeyText) ?? "";

userName.textContent = localStorage.getItem(localStorageKeyNameForm) ?? "Welcome, Name";
userEmail.textContent = localStorage.getItem(localStorageKeyEmailForm) ?? "E-mail";

signIn.addEventListener("submit", handleSubmit);
reset.addEventListener("click", handleResetSubmit);


emailInput.addEventListener("focus", () => {
    emailInput.classList.add('is-valid');
    validEmail.innerHTML = "";
  });

emailInput.addEventListener("blur", () => {
    emailInput.classList.remove('is-valid')
  });

emailInput.addEventListener("input", (event)=> {
      let emailValue = event.target.form.elements.email.value;
      formData.email = emailValue;
      // console.log(emailValue);
    localStorage.setItem(localStorageKeyEmail, emailValue);
    localStorage.setItem(localStorageKeyEmailForm, emailValue);
  });

  nameInput.addEventListener("focus", () => {
    nameInput.classList.add('is-valid');
    validEmail.innerHTML = "";
  });

  nameInput.addEventListener("blur", () => {
    nameInput.classList.remove('is-valid')
  });

  nameInput.addEventListener("input", (event)=> {
      let nameValue = event.target.form.elements.name.value;
      formData.name = nameValue;
      // console.log(nameValue);
    localStorage.setItem(localStorageKeyName, nameValue);
    localStorage.setItem(localStorageKeyNameForm, nameValue);
  });

  textareaInput.addEventListener("focus", () => {
    textareaInput.classList.add('is-valid');
    namePass.innerHTML = "";
  });

  textareaInput.addEventListener("blur", () => {
    textareaInput.classList.remove('is-valid')
  });

  textareaInput.addEventListener("input", (event)=> {
    let textValue = event.target.form.elements.textarea.value;
    formData.message = textValue;
    // console.log(textValue);
    localStorage.setItem(localStorageKeyText, textValue);
  });


function validUser() {

    adminInfo.email = emailInput.value;
    adminInfo.name = nameInput.value;

    if (localStorage.getItem(localStorageKeyEmail) === "victorharasymiv97@gmail.com"){
      // console.log("isAdmin");

      userEmail.textContent = adminInfo.email;
      userAvatar.src = adminInfo.avatar;
      userName.textContent = `Welcome, ${adminInfo.name}`;
      role.textContent = adminInfo.role;
    }

   if (localStorage.getItem(localStorageKeyEmail) !== "victorharasymiv97@gmail.com") {
    
    userAvatar.src = 'https://i.pinimg.com/736x/61/f7/5e/61f75ea9a680def2ed1c6929fe75aeee.jpg';
    userEmail.textContent = adminInfo.email; 
    userName.textContent = `Welcome, ${adminInfo.name}`;
    role.textContent = "User";
    
  }
    
}

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    
    const login = form.elements.email.value;
    const name = form.elements.name.value;
    const textarea = form.elements.textarea.value;
    

    if (login === "" && textarea === "" && name === "") {
        validEmail.innerHTML = "Please enter email";
        validName.innerHTML = "Please enter name";
        namePass.innerHTML = "Please enter textarea";

        return;
      }

    if (login === "") {
        validEmail.innerHTML = "Please enter email";
        return;
    }

    if (login !== "") {
        validEmail.innerHTML = "";
    }

    if (name === "") {
      validName.innerHTML = "Please enter name";
      return;
    }

    if (name !== "") {
      validName.innerHTML = "";
    }

    if (textarea === "") {
        namePass.innerHTML = "Please enter textarea";
        return;
    }

    if (textarea !== "") {
        namePass.innerHTML = "";
    }

    alert(`
    Login : ${login}
    Text : ${textarea}`
    );

    localStorage.setItem(localStorageKeyEmail, login);

    localStorage.setItem(localStorageKeyEmailForm, login);

    validEmail.innerHTML = "";
    validName.innerHTML = "";
    namePass.innerHTML = "";

    validUser();

    localStorage.removeItem(localStorageKeyEmail);
    localStorage.removeItem(localStorageKeyName);
    localStorage.removeItem(localStorageKeyText);

    form.reset();
}

function handleResetSubmit() {
    validEmail.innerHTML = "";
    validName.innerHTML = "";
    namePass.innerHTML = "";

    localStorage.removeItem(localStorageKeyEmail);
    localStorage.removeItem(localStorageKeyName);
    localStorage.removeItem(localStorageKeyText);

    localStorage.removeItem(localStorageKeyEmailForm);
    localStorage.removeItem(localStorageKeyNameForm);

    userAvatar.src = 'https://i.pinimg.com/736x/61/f7/5e/61f75ea9a680def2ed1c6929fe75aeee.jpg';
    userEmail.textContent = "E-mail";
    userName.textContent = "Welcome, Name";
    role.textContent = "Role";
}

