const logotext = "Pablo";
const meta = {
    title: "Pablo Giroud",
    description: "I’m Pablo Giroud _ Full stack devloper, currently working in SOVOS as Senior QA Automation",
};

const introdata = {
    title: "I’m Pablo Giroud",
    animated: {
        first: "senior QA Automation",
        second: "and Full stack developer",
        // third: "and senior QA Automation",
    },
    description: "Senior QA Automation at SOVOS",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "Nature & music. Pet lover. I love to learn new things, and I am always looking for new challenges. I am passionate about technology and how it can be used to improve our lives.",
};
const worktimeline = [{
        jobtitle: "Full Stack Developer",
        where: "Tucuman, Arg.",
        date: "2023",
    },
    {
        jobtitle: "Senior QA Automation",
        where: "SOVOS",
        date: "2023",
    },
    {
        jobtitle: "QA Lead",
        where: "Extrimian LLC.",
        date: "2021",
    },
    {
        jobtitle: "QA Engineer",
        where: "Grupo Sabra",
        date: "2020"
    },
    {
        jobtitle: "QA Engineer",
        where: "SOVOS",
        date: "2018"
    }

];

const skills = [{
        name: "Javascript",
        value: 50,
    },
    {
        name: "Node.Js",
        value: 40,
    },
    {
        name: "MongoDB",
        value: 30,
    },
    {
        name: "Sql",
        value: 30,
    },
    {
        name: "Cypress",
        value: 70,
    },
    {
        name: "MochaJS",
        value: 70,
    },
    {
        name: "JMeter",
        value: 60,
    },
    {
        name: "GIT",
        value: 70,
    },
];

const services = [{
        title: "Full Stack Developer",
        description: "with a background on JavaScript, React, NodeJS and MongoDB. Certified on Rolling Code School",
    },
    {
        title: "QA Automation",
        description: "Experience working on automation, with Cypress, Mocha and JMeter.",
    }
];

const dataportfolio = [{
        img: "../assets/images/joledezma.webp",
        description: "Photographer portfolio",
        link: "https://joledezmafotografias.com.ar/",
    },
    {
        img: "./assets/images/patomolina.webp",
        description: "Musician and composer porfolio.",
        link: "https://patomolina.netlify.app/",
    },
    {
        img: "./assets/images/itsalive.webp",
        description: "A little flaky app to test how to handle sparql queries.",
        link: "https://itsalive.netlify.app/",
    },
    {
        img: "./assets/images/simpleresume.webp",
        description: "A simple resume builder in process. This is a personal project that includes a front with react and a backend with node.js, sorting data with mongodb.",
        link: "https://simplifyresume.netlify.app/home",
    }
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // }
];

const contactConfig = {
    YOUR_EMAIL: "pablogiroud@gmail.com",
    YOUR_PHONE: "email as first contact please",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.REACT_APP_YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_YOUR_TEMPLATE_ID,
    PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
};

const socialprofils = {
    github: "https://github.com/pablogiroud",
    facebook: "https://facebook.com/pablogiroud",
    instagram: "https://www.instagram.com/pablogiroud/",
    linkedin: "https://www.linkedin.com/in/pablogiroud/",
    twitter: "https://twitter.com/pablogiroud",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};