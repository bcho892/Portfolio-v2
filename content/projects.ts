export type Project = {
    name?: string;
    description?: string;
    tech?: string[];
    imageSrc?: string;
    githubLink?: string;
    deploymentLink?: string;
};
const primalPrinting: Project = {
    name: "Primal Printing",
    description:
        "A business website for the student-run printing service Primal Printing, with users being able to order and pay for coursebooks via pdf and defined packages on stripe. All order information is collated for easy access for the owners using Next.js serverless functions",
    tech: ["Next.js", "TypeScript", "Chakra-UI"],
    imageSrc: "/images/primalprinting.png",
    githubLink: "https://github.com/bcho892/PrimalPrinting",
    deploymentLink: "https://primalprinting.co.nz",
};

const stutors: Project = {
    name: "Student Tutors",
    description:
        "A fully functional business website designed for the startup Student Tutors. This was built using angular incorporating various integrations such as Sanity.io and Google Sheets to make it for the admins to customise and manage the buisness and content.",
    tech: ["Angular", "TypeScript"],
    imageSrc: "/images/studenttutors.jpg",
    deploymentLink: "https://stutors.co.nz",
};

const myListMaker: Project = {
    name: "MyListMaker",
    description:
        "This was one of the first web development projects that I had taken on. It is a responsive React anime search engine as well as collection maker. Uses the Jikan API to fetch data from MyAnimeList, and taught me the fundementals of React",
    tech: ["React", "Material-UI"],
    imageSrc: "/images/listcreator.png",
    githubLink: "https://github.com/bcho892/MyListCreator",
    deploymentLink: "https://bcho892.github.io/MyListCreator/",
};

const studyPlanner: Project = {
    name: "StudyPlanner",
    description:
        "WPF app that allows user to add tasks with customizable deadlines, priority, description, while also implementing options for sorting. SQLite incorporated for managing data. Uses MVVM architecture.",
    tech: ["C#", "WPF"],
    imageSrc: "/images/studyplanner.png",
    githubLink: "https://github.com/bcho892/StudyPlanner",
};

export const projects: Project[] = [
    primalPrinting,
    stutors,
    myListMaker,
    studyPlanner,
];
