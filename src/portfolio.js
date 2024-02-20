// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Nawres Boutabba",
    message: "I'm a Full-Stack Mobile & Web Engineer with more than 3 years of working experience.",
    basedLocation: "Tunis, Tunisia",
    resumeLink: "https://lavender-loria-9.tiiny.site/", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/nawresboutabba",
    linkedin: "https://www.linkedin.com/in/nawres-boutabba-677730174/",
    medium: "https://medium.com/@nawresboutabba"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "I am Nawres Boutabba, an exceptional software engineer who excels in delivering innovative solutions. As a versatile professional, I specialize in full-stack mobile development, testing, and architecture. But my skills don't end there I am also a talented designer, infusing aesthetics and user-centric experiences into my creations. In addition, my expertise extends to the exciting realm of data science, enabling me to uncover valuable insights from complex datasets.Equipped with a Bachelor's degree in Computer Science and a prestigious software engineering diploma, I possess the perfect blend of theoretical knowledge and practical expertise.",
        "Throughout my career, I have undertaken a diverse range of projects, each showcasing my passion for pushing boundaries and delivering exceptional results. This portfolio is a captivating display of my finest work, where technical brilliance intertwines with captivating designs and seamless user experiences. Join me on a journey through my accomplishments, and witness the fusion of technology, creativity, and data-driven insights. Get ready to be inspired and captivated as you explore the immersive world of my portfolio. "
    ], // Separated items are paragraphs
    techStack: [
        "Vue.js",
        "Flutter",
        "JavaScript",
        "Node.js",
        "AWS",
        "React.js"
    ],
    photo1Link: "images/portrait.jpg",
    photo2Link: "images/portrait2.jpg",
    photo3Link: "images/portrait3.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Senior Full-Stack Engineer",
        company: {
            name: "Clara Idea",
            link: "https://www.claraidea.com.br/"
        },
        duration: "May 2022 - Dec 2023",
        bulletPoints: [
            "Clara Idea proposes a web platform using Next.js and Node.js and Flutter to foster idea-sharing, organize work, and motivate employees through challenges and rewards.",
            "The platform enables supervisors to create challenges, offers promotional opportunities, and includes an evaluation system for shared ideas.",
            "Enhancements involve an intelligent recommendation system using Google Dataset, machine learning, and Python, with Docker hosting. The project follows Scrum, progressing through requirement identification, solution design, and detailed technical implementation."
        ],
        hashtags: [
            "Next.js",
            "Node.js",
            "MongoDb",
            "JS",
            "Flutter",
            "Docker",
            "python",
            "Flask",
            "Figma",
            "Scrum",
            "AWS",
            "jtest"
        ]
    },
    {
        position: "Junior Mobile Engineer",
        company: {
            name: "Telcotec",
            link: "https://telcotec.tn/"
        },
        duration: "May 2021 - May 2022",
        bulletPoints: [
            "Develop a mobile application with an Android Java frontend, providing a user-friendly interface for operators.",
            "Implement a networking backend to facilitate testing operations within the mobile application.",
            "Create a web platform using Vue.js to complement the mobile app, enhancing accessibility and providing additional functionalities."
        ],
        hashtags: [
            "Android",
            "Shell",
            "java",
            "Vue.js",
            "jUnit",
            "Jenckins"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "iFlow",
        yearCompleted: "2023",
        description: "Clara Idea proposes a Next.js frontend and Node.js backend web platform to foster innovation by facilitating idea-sharing, organizing work, and motivating employees through challenges and rewards.",
        techStack: "Node.js, Scrum, Next.js, Docker, Python,Flask.",
        imageLink: "images/idea.png",
        alignLeft: false,
        
    },
    {
        projectName: "CinoPsys",
        yearCompleted: "2020-2021",
        description: "CinoPsys is an application for watching and downloading free movies, with an iOS SwiftUI version and an Android Java Kotlin version. The backend is developed in Node.js.",
        techStack: "Android,java,kotlin,swift,swiftUI,Nodejs",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/nawresboutabba/CinoPsys/tree/master"
            }
        ],
        imageLink: "images/cino.jpg",
        alignLeft: true
    },
    {
        projectName: "Live coding",
        yearCompleted: "2021",
        description: "The Live Coding Project, developed by ESPRIT, is a VS Code extension facilitating collaborative code sharing. Inspired by Microsoft's Live Share, it enables real-time peer-to-peer sharing, integrates a code board, and allows users to record coding sessions. The extension emphasizes convenient code-sharing with features like video-saving and easy sharing via the platform or email. It revolutionizes online project collaboration, promoting enhanced productivity and streamlined development processes.",
        techStack: "Typescript,Angular.js,Node.js,Flutter,SSL,Shell",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/nawresboutabba/vscodeLiveCoding"
            },
            {
                label: "",
                type: "external",
                url: "https://youtube.com/watch?v=Cj206Y5qiCc"
            }
        ],
        imageLink: "images/codelive.svg",
        alignLeft: false
    },
    {
        projectName: "Coronavirus Report",
        yearCompleted: "2020",
        description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
        techStack: "Python,java",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/nawresboutabba/COVID-19-Hospital-Locator"
            },
        ],
        imageLink: "images/covid_pic.png",
        alignLeft: false
    }
]

const archiveLink = "https://github.com/nawresboutabba?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Presently, I am actively pursuing a new opportunity to broaden my professional experience.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "", // email takes precedance
            other: "https://docs.google.com/forms/d/e/1FAIpQLSc3HJabj6kdFwSS9w9Ayc-BTXwHNcclkxV_SHTU_qoeNLgGVg/viewform"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}