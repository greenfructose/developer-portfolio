import emoji from "react-easy-emoji";

export const greetings = {
    name: "Justin Turney",
    title: "Hello. I'm Justin",
    description: "A passionate Full Stack Web Developer.",
    resumeLink: "/files/Resume-Justin-Turney.pdf",
};

export const openSource = {
    githubUserName: "greenfructose",
};

export const contact = {};

export const socialLinks = {
    twitter: "https://twitter.com/JustinTurney4",
    github: "https://github.com/greenfructose",
    linkedin: "https://www.linkedin.com/in/uberleettechnologies/",
};

export const skillsSection = {
    title: "What I do",
    subTitle: "I build websites and applications with various technologies.",
    skills: [
        emoji(
            "⚡ Develop interactive Front end / User Interfaces for your web applications"
        ),
        emoji(
            "⚡ Develop database services and APIs for web applications"
        ),
        emoji(
            "⚡ Integration of third party services such as Firebase, AWS, Digital Ocean, and other cloud products"
        ),
    ],

    softwareSkills: [{
            skillName: "html-5",
            fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
            skillName: "sass",
            fontAwesomeClassname: "logos:sass",
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "logos:javascript",
        },
        {
            skillName: "TypeScript",
            fontAwesomeClassname: "logos:typescript-icon",
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "logos:nodejs-icon",
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "vscode-icons:file-type-npm",
        },
        {
            skillName: "django",
            fontAwesomeClassname: "logos:django",
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "vscode-icons:file-type-sql",
        },
        {
            skillName: "mongoDB",
            fontAwesomeClassname: "vscode-icons:file-type-mongo",
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "logos:firebase",
        },
        {
            skillName: "db2",
            fontAwesomeClassname: "logos:ibm",
        },
        {
            skillName: "nginx",
            fontAwesomeClassname: "logos:nginx"
        },
        {
            skillName: "apache",
            fontAwesomeClassname: "logos:apache"
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "logos:aws",
        },
        {
            skillName: "google-cloud",
            fontAwesomeClassname: "logos:google-cloud",
        },
        {
            skillName: "digital-ocean",
            fontAwesomeClassname: "logos:digital-ocean",
        },
        {
            skillName: "python",
            fontAwesomeClassname: "logos:python",
        },
        {
            skillName: "go",
            fontAwesomeClassname: "logos:go",
        },
        {
            skillName: "java",
            fontAwesomeClassname: "logos:java",
        },
        {
            skillName: "rust",
            fontAwesomeClassname: "logos:rust",
        },
        {
            skillName: "ubuntu",
            fontAwesomeClassname: "logos:ubuntu",
        },
        {
            skillName: "fedora",
            fontAwesomeClassname: "logos:fedora",
        },
        {
            skillName: "git",
            fontAwesomeClassname: "logos:git-icon",
        },
        {
            skillName: "github",
            fontAwesomeClassname: "logos:github-icon",
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "logos:docker-icon",
        },
    ],
};

export const SkillBars = [{
        Stack: "Frontend/Design", //Insert stack or technology you have experience in
        progressPercentage: "60", //Insert relative proficiency in percentage
    },
    {
        Stack: "Backend",
        progressPercentage: "95",
    },
    {
        Stack: "Programming",
        progressPercentage: "95",
    },
    {
        Stack: "Cloud Hosting",
        progressPercentage:"90",
    }
];


export const experience = [{
        role: "Full Stack Developer",
        company: "Freelance",
        companylogo: "/img/icons/common/900918.jpg",
        date: "September 2019 – Present",
        desc: "I build public and internal facing websites for commercial entities",
        descBullets: [
            "Design and implement robust enterprise web applications",
            "Set up hosting, DNS, and networking for public facing websites",
        ],
    },
    {
        role: "IT Systems Technician",
        company: "Archer Daniels Midland",
        companylogo: "/img/icons/common/Archer_Daniels_Midland_logo.svg",
        date: "May 2019 – Present",
        desc: "Manage IT systems and write/maintain web and desktop apps for production use",
        descBullets: [
            "Automated a previously manual preventitive maintenance tasks",
            "Built and programmed a web server, consolodited various desktop applications into a single web app"
        ]
    },
    {
        role: "Network Engineer",
        company: "Vandernet Technology Services",
        companylogo: "/img/icons/common/download.png",
        date: "July 2016 – May 2019",
        desc: "Started as desktop support, moved up to network engineer. Managed all layers of large networks",
        descBullets: [
            "Designed systems and services for VoIP, security, and network applications",
            "Worked as de facto R&D"
        ]
    },
];

export const projects = [{
        name: "TribeFeed",
        desc: "Twitter-like microblogging Mastodon instance hosted in Google cloud on a dedicated Ubuntu 20.04 server.",
        link: "https://tribefeed.online",
    },
    {
        name: "Strickland Automotive",
        desc: "Site for car dealership built in Wordpress, hosted in Google Cloud.",
        link: "http://stricklandautomotive.deals",
    },
    {
        name: "Rick and Morty Character Bot",
        desc: "A bot that posts random Rick and Morty character bios on Twitter and Mastodon, hosted in Google Cloud on Ubuntu 20.04. A cron job runs the bot every 4 hours.",
        github: "https://github.com/greenfructose/RickAndMortyMastodonBot",
        link: "https://twitter.com/randmcharacters",
    },
    {
        name: "Dev Blog",
        desc: "Built with React and Next.js, hosted on Vercel with CI/CD through GitHub, styled with TailwindCSS. GraphQL models hosted at GraphCMS.com",
        github: "https://github.com/greenfructose/dev-blog",
        link: "https://dev-blog-delta.vercel.app/",
    },
    {
        name: "This site (justinturney.com)",
        desc: "Built with React and Next.js, hosted on Netlify with CI/CD through GitHub.",
        github: "https://github.com/greenfructose/developer-portfolio",
        link: "https://www.justinturney.com",
    },
    {
        name: "Exercise Instruction Site",
        desc: "Built with React and RapidAPI, hosted on Netlify.",
        github: "https://github.com/greenfructose/exercise-app",
        link: "https://celadon-paletas-da91b5.netlify.app/",
    },
];
