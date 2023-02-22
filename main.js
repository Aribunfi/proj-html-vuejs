
const { createApp } = Vue;


const app = createApp({

    data() {

        return {
            message: "DONATE",
        };
    },
});

app.mount("#app");


const links = document.querySelectorAll("navbar-link");

links.forEach(link => {

    link.addEventListener('click', () => {
        link.classList.add('change')
    }
    )
})