export type Project = {
    name?: string,
    description?: string,
    tech?: string[],
    imageSrc?: string
}

const stutors: Project = {
    name: "Student Tutors",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et aspernatur ratione, temporibus animi, asperiores eius aliquam ad maiores harum aut, voluptatibus repellendus consequatur in sunt possimus sint ullam consectetur!",
    tech: ["Angular", "TypeScript", "CMS"]
}

const chakMovies: Project = {
    name: "ChakMovies",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et aspernatur ratione, temporibus animi, asperiores eius aliquam ad maiores harum aut, voluptatibus repellendus consequatur in sunt possimus sint ullam consectetur!",
    tech: ["React", "TypeScript", "Chakra-UI"]
}

const LHSpammer: Project = {
    name: "LHSpammer",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et aspernatur ratione, temporibus animi, asperiores eius aliquam ad maiores harum aut, voluptatibus repellendus consequatur in sunt possimus sint ullam consectetur!",
    tech: ["React", "TypeScript", "Chakra-UI"]
}

const myListMaker: Project = {
    name: "MyListMaker",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et aspernatur ratione, temporibus animi, asperiores eius aliquam ad maiores harum aut, voluptatibus repellendus consequatur in sunt possimus sint ullam consectetur!",
    tech: ["React", "TypeScript", "Chakra-UI"]
}


export const projects: Project[] = [stutors, chakMovies, LHSpammer, myListMaker]