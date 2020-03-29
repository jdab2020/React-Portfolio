import pj1 from "./calorie-companion.PNG"
import pj2 from "./moneygauge.png"
import burger from "./eat-da-burger.PNG";
import notes from "./notes.PNG"
import fitness from "./fitness.PNG"
import budget from "./budget.PNG"
import directory from "./directory.PNG"


export default
    {
        name: "James C. Dabalos",
        headerTagline: [
            "Hi! I am James Dabalos.",
            "Full-Stack Web Development Student",
            "from Los Angeles"
        ],

        contactEmail: "jdabalos90@gmail.com",
        abouttext: "Hi! I'm James, currently a student at UCLA Extension's Full-Stack Web Development Bootcamp from Los Angeles, CA. Check out some of my work below. :)",
        aboutImage: "",
        ShowAboutImage: true,
        projects: [
            {
                id: 1,
                title: "Project One",
                service: "Website Development: front-end",
                imageSrc: pj1,
                url: "https://austinaukairodrigues.github.io/Calorie-Companion/"
            },
            {
                id: 2,
                title: "Project Two",
                service: "Website Development: back-end",
                imageSrc: pj2,
                url: "https://nameless-bastion-71190.herokuapp.com/"
            },
            {
                id: 3,
                title: "Note-Taker",
                service: "Website Development: back-end",
                imageSrc: notes,
                url: "https://obscure-thicket-65425.herokuapp.com/"
            },
            {
                id: 4,
                title: "Eat-Da-Burger",
                service: "Website Development: back-end",
                imageSrc: burger,
                url: "https://immense-forest-68954.herokuapp.com/"
            },
            {
                id: 5,
                title: "Fitness-Tracker",
                service: "Website Development: back-end",
                imageSrc: fitness,
                url: "https://sleepy-thicket-80439.herokuapp.com/?id=5e6bf88ad36cf900179fef79"
            },
            {
                id: 6,
                title: "Budget-Tracker",
                service: "Website Development: back-end",
                imageSrc: budget,
                url: "https://damp-wave-28732.herokuapp.com/"
            },
            {
                id: 7,
                title: "Directory",
                service: "Website Development: back-end",
                imageSrc: directory,
                url: "https://employeedir-jd.herokuapp.com/"
            },
        ],
        social: [
            {
                name: "Github",
                url: "https://github.com/jdab2020"
            },
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/james-dabalos-41294419a/"
            }
        ]
    }