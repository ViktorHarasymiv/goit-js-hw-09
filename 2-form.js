var E=Object.defineProperty;var x=(t,e,a)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var i=(t,e,a)=>x(t,typeof e!="symbol"?e+"":e,a);import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */class H{constructor(){i(this,"selectors",{switchThemeButton:"[data-js-theme-switcher]"});i(this,"themes",{dark:"dark",light:"light"});i(this,"stateClasses",{isDarkTheme:"is-dark-theme"});i(this,"storageKey","theme");i(this,"onClick",()=>{localStorage.setItem(this.storageKey,this.isDarkThemeCached?this.themes.light:this.themes.dark),document.documentElement.classList.toggle(this.stateClasses.isDarkTheme)});this.switchThemeButtonElement=document.querySelector(this.selectors.switchThemeButton),this.setInitialTheme(),this.bindEvents()}get isDarkThemeCached(){return localStorage.getItem(this.storageKey)===this.themes.dark}setInitialTheme(){document.documentElement.classList.toggle(this.stateClasses.isDarkTheme,this.isDarkThemeCached)}bindEvents(){this.switchThemeButtonElement.addEventListener("click",this.onClick)}}new H;const p=document.querySelector(".login-form"),r=document.querySelector("#email-input"),l=document.querySelector("#name-input"),c=document.querySelector("#textarea-input"),o=document.querySelector(".email"),u=document.querySelector(".valid_name"),m=document.querySelector(".textarea"),C=document.querySelector(".reset"),n={email:"",name:"",surname:"Harasymiv",role:"Admin",avatar:"https://scontent.fktw6-1.fna.fbcdn.net/v/t39.30808-6/387876476_1528613937888598_289684145714945079_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-d6LnMVHBU0Q7kNvgG1bQ2L&_nc_zt=23&_nc_ht=scontent.fktw6-1.fna&_nc_gid=A5uH1GgWIs2F17CAk1px5iW&oh=00_AYC-Y7InWFf4uXfWjcF8fbWZUFyDWRPzi0f1sB-7Hf5LEg&oe=677DBF6F"},g=document.querySelector(".email_user"),I=document.querySelector(".user_avatar"),h=document.querySelector(".name"),T=document.querySelector(".role"),s="emailKey",v="nameKey",S="messageKey",f="formEmail",y="formName";r.value=localStorage.getItem(s)??"";l.value=localStorage.getItem(v)??"";c.value=localStorage.getItem(S)??"";h.textContent=localStorage.getItem(y)??"Welcome, Name";g.textContent=localStorage.getItem(f)??"E-mail";p.addEventListener("submit",M);C.addEventListener("click",_);r.addEventListener("focus",()=>{r.classList.add("is-valid"),o.innerHTML=""});r.addEventListener("blur",()=>{r.classList.remove("is-valid")});r.addEventListener("input",t=>{let e=t.target.form.elements.email.value;localStorage.setItem(s,e),localStorage.setItem(f,e)});l.addEventListener("focus",()=>{l.classList.add("is-valid"),o.innerHTML=""});l.addEventListener("blur",()=>{l.classList.remove("is-valid")});l.addEventListener("input",t=>{let e=t.target.form.elements.name.value;localStorage.setItem(v,e),localStorage.setItem(y,e)});c.addEventListener("focus",()=>{c.classList.add("is-valid"),m.innerHTML=""});c.addEventListener("blur",()=>{c.classList.remove("is-valid")});c.addEventListener("input",t=>{let e=t.target.form.elements.textarea.value;localStorage.setItem(S,e)});function k(){n.email=r.value,n.name=l.value,localStorage.getItem(s)==="victorharasymiv97@gmail.com"&&(g.textContent=n.email,I.src=n.avatar,h.textContent=`Welcome, ${n.name}`,T.textContent=n.role),localStorage.getItem(s)!=="victorharasymiv97@gmail.com"&&(I.src="https://i.pinimg.com/736x/61/f7/5e/61f75ea9a680def2ed1c6929fe75aeee.jpg",g.textContent=n.email,h.textContent=`Welcome, ${n.name}`,T.textContent="User")}function M(t){t.preventDefault();const e=t.target,a=e.elements.email.value,L=e.elements.name.value,d=e.elements.textarea.value;if(a===""&&d===""&&L===""){o.innerHTML="Please enter email",u.innerHTML="Please enter name",m.innerHTML="Please enter textarea";return}if(a===""){o.innerHTML="Please enter email";return}if(a!==""&&(o.innerHTML=""),L===""){u.innerHTML="Please enter name";return}if(L!==""&&(u.innerHTML=""),d===""){m.innerHTML="Please enter textarea";return}d!==""&&(m.innerHTML=""),alert(`
    Login : ${a}
    Text : ${d}`),localStorage.setItem(s,a),localStorage.setItem(f,a),o.innerHTML="",u.innerHTML="",m.innerHTML="",k(),localStorage.removeItem(s),localStorage.removeItem(v),localStorage.removeItem(S),e.reset()}function _(){o.innerHTML="",u.innerHTML="",m.innerHTML="",localStorage.removeItem(s),localStorage.removeItem(v),localStorage.removeItem(S),localStorage.removeItem(f),localStorage.removeItem(y),I.src="https://i.pinimg.com/736x/61/f7/5e/61f75ea9a680def2ed1c6929fe75aeee.jpg",g.textContent="E-mail",h.textContent="Welcome, Name",T.textContent="Role"}
//# sourceMappingURL=2-form.js.map
