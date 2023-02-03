export type Project = {
    name?: string,
    description?: string,
    tech?: string[],
    imageSrc?: string,
    githubLink?: string,
    deploymentLink?: string,
}

const stutors: Project = {
    name: "Student Tutors",
    description: "A fully functional buisness website designed for the startup Student Tutors. This was built using angular incorporating various integrations such as Sanity.io and Google Sheets to make it for the admins to customise and manage the buisness and content.",
    tech: ["Angular", "TypeScript"]
}

const chakMovies: Project = {
    name: "ChakMovies",
    description: "A just-for-fun movie streaming clone that I made for the MSA program 2022. Makes use of API calls and Chakra-UI",
    tech: ["React", "TypeScript", "Chakra-UI"]
}
const myListMaker: Project = {
    name: "MyListMaker",
    description: "This was one of the first web development projects that I had taken on. It is a responsive React anime search engine as well as collection maker. Uses the Jikan API to fetch data from MyAnimeList, and taught me the fundementals of React",
    tech: ["React", "Material-UI"]
}

const studyPlanner: Project = {
    name: "StudyPlanner",
    description: "WPF app that allows user to add tasks with customizable deadlines, priority, description, while also implementing options for sorting. SQLite incorporated for managing data. Uses MVVM architecture.",
    tech: ["C#", "WPF"]
}



export const projects: Project[] = [stutors, chakMovies, myListMaker, studyPlanner]