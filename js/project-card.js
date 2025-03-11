class ProjectCard extends HTMLElement {
    constructor() {
        super();

        // Attach shadow DOM to encapsulate the element's styles and structure
        const shadow = this.attachShadow({ mode: 'open' });

        // Create an <h2> element for the title
        this.projectTitle = document.createElement('h2');

        // Create a <picture> tag for the image
        this.picture = document.createElement('picture');
        this.source = document.createElement('source');
        this.image = document.createElement('img');

        // Create a <p> for the description
        this.description = document.createElement('div');
        this.description.classList.add('project-description');

        // Create a <a> for the link to more details
        this.link = document.createElement('a');
        this.link.classList.add('project-page-link');

        console.log(shadow);
        // Attach the elements to the card
        shadow.appendChild(this.projectTitle);
        shadow.appendChild(this.picture);
        this.picture.appendChild(this.source);
        this.picture.appendChild(this.image);
        shadow.appendChild(this.description);
        shadow.appendChild(this.link);

        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: var(--project-card-bg, #ffd3ad);
                margin: 2rem;
                padding-top: 1rem;
                height: 70vh;
                width: 40vw;
            }

            h2 {
                text-align: center;
            }

            img {
                margin: 1rem 0;
                height: 35vh;
                width: 35vw;
            }

            .project-description {
                background-color: var(--project-card-component, #f3b47a);
                overflow-y: auto;
                padding: 1rem;
                width: 35vw;
                height: 5vw;
                text-align: center;
            }

            .project-page-link {
                text-decoration: none;
                text-align: center;
                color: var(--main-text, black);
                font-size: 1em;
                margin: 1.5rem 0 1.5rem 0;
                padding: 1rem;
                border-radius: 20px;
                background-color: var(--project-card-component, #f3b47a);
            }

            @media (max-width: 768px) {
                :host {
                    height: 70vh;
                    width: 70vw;
                }

                img {
                    width: 65vw;
                }

                .project-description {
                    width: 61vw;
                }
            }

            @media (max-width: 425px) {
                :host {
                    height: 60vh;
                }
                
                h2 {
                    font-size: 1.5em;
                }

                img {
                    height: 20vh;
                    width: 50vw;
                }

                .project-page-link {
                    width: 30vw;
                    font-size: 1em;
                }

                .project-description {
                    height: 20vw;
                    width: 50vw;
                    font-size: 1em;
                }
            }
        `;
        shadow.appendChild(style);
    }

    set projectData(project) {
        this.projectTitle.textContent = project.title;
        this.source.srcset = project.srcset;
        this.source.media = '(min-width: 1024px)';
        this.image.src = project.image;
        this.image.alt = project.title;
        this.description.textContent = project.description;
        this.link.href = project.link;
        this.link.textContent = 'Learn More About ' + project.title;
    }
}

customElements.define('project-card', ProjectCard);

const projectInfo = [
    {
        "title": "Spending Tracker",
        "srcset": "/public/Desktop/spending-tracker.webp",
        "image": "/public/Mobile/spending-tracker-mobile.webp",
        "description": "This application will help you get started on your budgeting journey, teaching you how to properly budget, save, and invest your money. In addition, there's a feature that helps you keep track of the items you buy as well as what kinds of items you buy using your money. Start tracking your money now!",
        "link": "/projects/spending_tracker.html"
    },
    {
        "title": "GeoGuru",
        "srcset": "/public/Desktop/geoguru.webp",
        "image": "/public/Mobile/geoguru-mobile.webp",
        "description": "GeoGuru is a travel planner where users can create their own itinerary. Users enter their desired location of travel, conditions of times to go out, and theme of activities, and this application will provide a list of nearby events that the user can then plan and add to their itinerary.",
        "link": "/projects/geoguru.html"
    },
    {
        "title": "E-Waste Website",
        "srcset": "/public/Desktop/e-waste.webp",
        "image": "/public/Mobile/e-waste-mobile.webp",
        "description": "The goal of this E-waste website is to promote and educate college students on how to properly dispose of electronic waste both on and off campus. It provides users an intro to what e-waste is and why it's so detrimental to our environment. In addition, it also talks about planned and perceived obsolescence and how they contribute to the rising amounts of unrecycled e-waste.",
        "link": "/projects/waste.html"
    },
    {
        "title": "Developer Journal",
        "srcset": "/public/Desktop/dev-journal.webp",
        "image": "/public/Mobile/dev-journal-mobile.webp",
        "description": "This developer journal provides a more organized environment for developers to keep all of their thoughts such as code snippets, github issues, design notes, meeting notes, and freeform notes. The journal can store multiple projects and each project can contain an unlimited amount of different notes in it in order for developers to separate their notes based on each project.",
        "link": "/projects/journal.html"
    },
    {
        "title": "Datasaur Royale",
        "srcset": "/public/Desktop/datasaur-royale.webp",
        "image": "/public/Mobile/datasaur-royale-mobile.webp",
        "description": "Datasaur Royale is a battle simulator between different kinds of dinosaurs each with different traits, attempting to find the best traits that allow dinosaurs to survive. Traits may affect their speed, how much energy they can store and consume, their combat capabilities, and other behaviors such as passive or more aggressive behaviors. In addition to terrain elements, this strives to find the survival of the fittest.",
        "link": "/projects/datasaur.html"
    },
    {
        "title": "Haunted Mansion",
        "srcset": "/public/Desktop/text-based-game.webp",
        "image": "/public/Mobile/text-based-game-mobile.webp",
        "description": "Haunted Mansion is a text-based game that takes users through a story-driven adventure where the protagonist goes through an old, abandoned building. There are a total of 6 different endings that the users can receive based on their actions throughout the game. Try it out to find all the endings!",
        "link": "/projects/haunted_mansion.html"
    }
];

function populateLocalStorage() {
    if(!localStorage.getItem('projectData')) {
        localStorage.setItem('projectData', JSON.stringify(projectInfo));
    }
}

function loadLocalStorage() {
    populateLocalStorage();
    
    const projectCards = document.getElementsByTagName('project-card');
    const localStorageProjectInfo = JSON.parse(localStorage.getItem('projectData'));
    
    if (projectCards.length > 0) {
        console.log('project cards exist. replacing current cards with info from local storage');
        for(let i = 0; i < localStorageProjectInfo.length; i++) {
            projectCards[i].projectData = localStorageProjectInfo[i];
        }
    } else {
        console.log('project cards do not exist. creating project cards with info from local storage');
        const projectContainer = document.getElementById("project-card-container");
        for(let i = 0; i < localStorageProjectInfo.length; i++) {
            const projectCard = document.createElement('project-card');
            projectCard.projectData = localStorageProjectInfo[i];
            projectContainer.appendChild(projectCard);
        }
    }
}

function loadRemote() {
    const projectCards = document.getElementsByTagName('project-card');

    let req = new XMLHttpRequest();

    req.open("GET", "https://api.jsonbin.io/v3/b/67cbfdb3ad19ca34f8188d2e/latest", true);
    req.setRequestHeader("X-Master-Key", "$2a$10$uZr5LrwG.HK9XPspQ4PgdOE0nqCNM8DIC8gWgrirCHpFsEhge61Km");

    req.onload = function () {
        const remoteStorageProjectInfo = JSON.parse(req.responseText).record.projectInfo;
        if (projectCards.length > 0) {
            console.log('project cards exist. replacing current cards with info from remote server');
            for(let i = 0; i < remoteStorageProjectInfo.length; i++) {
                projectCards[i].projectData = remoteStorageProjectInfo[i];
            }
        } else {
            console.log('project cards do not exist. creating project cards  with info from remote server');
            const projectContainer = document.getElementById("project-card-container");
            for(let i = 0; i < remoteStorageProjectInfo.length; i++) {
                const projectCard = document.createElement('project-card');
                projectCard.projectData = remoteStorageProjectInfo[i];
                projectContainer.appendChild(projectCard);
            }
        }
    }

    req.send();
    
}

document.addEventListener("DOMContentLoaded", () => {
    populateLocalStorage();
    loadLocalStorage();
});