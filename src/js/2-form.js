import "./theme.module.js"

const send = document.querySelector('.feedback-form');

const emailInput = document.querySelector('#email-input');
const textareaInput = document.querySelector('#textarea-input');



const formData = { email: "", message: "" };

const localStorageKey = "feedback-form-state";


//  L O C A L   S T O R A G E

const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {}; 

emailInput.value = savedData.email ?? ""; 
textareaInput.value = savedData.message ?? "";


console.log(savedData);



// E V E N T

send.addEventListener("submit", handleSubmit);

//  E -  M A I L

emailInput.addEventListener("focus", () => {
    emailInput.classList.add('is-focus');
  });

emailInput.addEventListener("blur", () => {
    emailInput.classList.remove('is-focus')
  });

emailInput.addEventListener("input", (event) => {

      formData.email = event.target.value.trim();
      formData.message = textareaInput.value;

      localStorage.setItem(localStorageKey, JSON.stringify(formData));

  });

  
//  M E S S A G E

textareaInput.addEventListener("focus", () => {
    textareaInput.classList.add('is-focus');
  });

textareaInput.addEventListener("blur", () => {
    textareaInput.classList.remove('is-focus')
  });


textareaInput.addEventListener("input", (event) => {
    
    formData.email = emailInput.value;
    formData.message = event.target.value;

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  });


//  F U N C T I O N

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    formData.email = emailInput.value;
    formData.message = textareaInput.value;
    

    if (formData.email === "" || formData.message === "") {
        return alert("Fill please all fields");
      }

      else 
        alert(`Login : ${formData.email} , Text : ${formData.message}`
    );

    localStorage.removeItem(localStorageKey);

    form.reset();
}