
const { createApp } = Vue;


const app = createApp({

    data() {

        return {
            menus: [
                {
                    title: "HOME",
                    text: "Everything we do"
                },

                {
                    title: "MISSION",
                    text: "Many fields one goal"
                },

                {
                    title: "CAUSES",
                    text: "Your cause, our cause"
                },

                {
                    title: "JOURNAL",
                    text: "Follow us, everyday"
                },
            ],
            activeSlide: 0,
        };
    }


});


app.mount("#app");


const links = document.querySelectorAll("navbar-link");

links.forEach(link => {

    link.addEventListener('click', () => {
        link.classList.add('change')
    }
    )
})