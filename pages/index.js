import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() =>
    import ("../components/Navigation"));
const Greetings = dynamic(() =>
    import ("../containers/Greetings"));
const Skills = dynamic(() =>
    import ("../containers/Skills"));
const Proficiency = dynamic(() =>
    import ("../containers/Proficiency"));
// const Education = dynamic(() => import("../containers/Education"));
// const Experience = dynamic(() =>
//     import ("../containers/Experience"));
const Projects = dynamic(() =>
    import ("../containers/Projects"));
// const Feedbacks = dynamic(() =>
//     import ("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
    import ("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
    return ( <
        div >
        <
        SEO data = {
            {
                title: "Justin Turney",
                description: "A passionate Full Stack Web Developer.",
                image: "https://avatars.githubusercontent.com/u/900918?v=4",
                url: "https://justinturney.com",
                keywords: [
                    "Justin",
                    "Justin Turney",
                    "@greenfructose",
                    "greenfructose",
                    "Portfolio",
                    "Justin Portfolio ",
                    "Justin Turney Portfolio",
                    "web developer",
                    "full stack",
                    "full stack web developer",
                    "mobile app developer",
                    "android developer",
                    "django",
                    "flask",
                    "django rest framework",
                    "nodejs ",
                    "expressjs",
                    "reactjs ",
                    "contextapi",
                    "redux",
                    "flutter",
                ],
            }
        }
        /> <
        Navigation / >
        <
        Greetings / >
        <
        Skills / >
        <
        Proficiency / >
        <
        Projects / >
        <
        GithubProfileCard prof = { githubProfileData }
        /> < /
        div >
    );
}

Home.prototype = {
    githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
    const githubProfileData = await fetch(
        `https://api.github.com/users/${openSource.githubUserName}`
    ).then((res) => res.json());

    return {
        props: { githubProfileData },
    };
}
