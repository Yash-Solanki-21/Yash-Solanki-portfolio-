
const form = document.querySelector('#contact-form');

form.addEventListener("submit", async function(e){
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if(response.ok){
        alert("Message sent successfully ✅");
        form.reset();
    } else {
        alert("Something went wrong ❌");
    }
});


const menu = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");
};


