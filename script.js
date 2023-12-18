const gradientColors = [
    `radial-gradient(at 37% 72%, hsla(20,72%,76%,1) 0px, transparent 50%),
    radial-gradient(at 23% 39%, hsla(211,98%,74%,1) 0px, transparent 50%),
    radial-gradient(at 40% 83%, hsla(143,75%,72%,1) 0px, transparent 50%),
    radial-gradient(at 81% 38%, hsla(4,72%,65%,1) 0px, transparent 50%),
    radial-gradient(at 62% 86%, hsla(274,72%,66%,1) 0px, transparent 50%),
    radial-gradient(at 41% 99%, hsla(121,88%,74%,1) 0px, transparent 50%),
    radial-gradient(at 31% 96%, hsla(298,63%,64%,1) 0px, transparent 50%)`,
    `radial-gradient(at 73% 58%, hsla(39,96%,68%,1) 0px, transparent 50%),
    radial-gradient(at 72% 81%, hsla(13,75%,75%,1) 0px, transparent 50%),
    radial-gradient(at 62% 99%, hsla(186,65%,65%,1) 0px, transparent 50%),
    radial-gradient(at 36% 7%, hsla(129,97%,73%,1) 0px, transparent 50%),
    radial-gradient(at 69% 4%, hsla(174,82%,74%,1) 0px, transparent 50%),
    radial-gradient(at 31% 16%, hsla(281,72%,67%,1) 0px, transparent 50%),
    radial-gradient(at 14% 20%, hsla(158,93%,72%,1) 0px, transparent 50%)`,
    `radial-gradient(at 78% 2%, hsla(174,60%,71%,1) 0px, transparent 50%),
    radial-gradient(at 81% 78%, hsla(321,73%,78%,1) 0px, transparent 50%),
    radial-gradient(at 71% 31%, hsla(232,88%,66%,1) 0px, transparent 50%),
    radial-gradient(at 11% 97%, hsla(41,87%,76%,1) 0px, transparent 50%),
    radial-gradient(at 99% 23%, hsla(111,69%,60%,1) 0px, transparent 50%),
    radial-gradient(at 86% 9%, hsla(263,93%,63%,1) 0px, transparent 50%),
    radial-gradient(at 20% 39%, hsla(356,98%,71%,1) 0px, transparent 50%)`,
    `radial-gradient(at 57% 49%, hsla(58,94%,79%,1) 0px, transparent 50%),
    radial-gradient(at 28% 95%, hsla(138,93%,61%,1) 0px, transparent 50%),
    radial-gradient(at 6% 35%, hsla(184,88%,66%,1) 0px, transparent 50%),
    radial-gradient(at 40% 44%, hsla(292,89%,64%,1) 0px, transparent 50%),
    radial-gradient(at 24% 94%, hsla(103,73%,70%,1) 0px, transparent 50%),
    radial-gradient(at 74% 38%, hsla(281,66%,69%,1) 0px, transparent 50%),
    radial-gradient(at 73% 82%, hsla(230,68%,64%,1) 0px, transparent 50%)`,
    `radial-gradient(at 17% 68%, hsla(150,82%,60%,1) 0px, transparent 50%),
    radial-gradient(at 27% 74%, hsla(60,96%,69%,1) 0px, transparent 50%),
    radial-gradient(at 88% 43%, hsla(116,76%,79%,1) 0px, transparent 50%),
    radial-gradient(at 74% 47%, hsla(5,68%,76%,1) 0px, transparent 50%),
    radial-gradient(at 67% 72%, hsla(258,66%,64%,1) 0px, transparent 50%),
    radial-gradient(at 70% 34%, hsla(292,84%,79%,1) 0px, transparent 50%),
    radial-gradient(at 27% 27%, hsla(330,70%,61%,1) 0px, transparent 50%)`,
    `radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)`

];

const tech = [`AI powered`, `gamified`, `minimal`, `set it & forget it`, `easy to use`, `advanced`];

const project = ["Personal Portfolio Website",
    "Task Management Dashboard",
    "E-commerce Product Page Redesign",
    "Weather App with User-friendly Interface",
    "Fitness Tracker Dashboard",
    "Recipe App with Interactive Cooking Steps",
    "Event Countdown Timer",
    "Travel Destination Exploration App",
    "Budget Tracker with Visualizations",
    "Language Learning App with Progress Tracker",
    "Interactive Map for Local Services",
    "News Aggregator with Customizable Topics",
    "Movie Recommendation Interface",
    "Music Player with Dynamic Playlist Creation",
    "Real-time Chat Application",
    "Photo Editing Tool with Filters",
    "Virtual Interior Design Showcase",
    "Daily Habit Tracker",
    "To-Do List with Drag-and-Drop Functionality",
    "Interactive Resume/CV Design",
    "Car Rental Booking System",
    "Crowdfunding Campaign Interface",
    "Virtual Reality (VR) Experience Landing Page",
    "Interactive Educational Quiz App",
    "Pet Adoption Platform with Profiles",
    "Augmented Reality (AR) Shopping App",
    "Personal Finance Dashboard",
    "Health and Wellness App",
    "Interactive eBook Reader",
    "Smart Home Control Panel",
    "Daily Journaling App with Mood Tracker",
    "Social Media Dashboard",
    "Smart Recipe Generator",
    "Event Ticket Booking System",
    "Fitness Challenge App",
    "Wine Tasting Experience App",
    "Interactive Timeline for Historical Events",
    "AR-based Navigation App",
    "Job Search Platform with Visualizations",
    "Dashboard for IoT Devices",
    "Local Business Directory",
    "Virtual Art Gallery",
    "Flashcard Learning App",
    "Home Workout Planner",
    "Interactive Infographic on a Trending Topic",
    "Mindfulness and Meditation App",
    "Language Translation Tool",
    "Interactive Periodic Table",
    "Personalized News Feed Aggregator",];

const noise = ` url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='7.07' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`

// Move the random color generation logic into a separate function
function setRandomBackgroundColor() {
    // Generate a random color using a helper function
    var randomColor = getRandomColor();


    // Set the background color of the container
    var container = document.querySelector('.container');
    container.style.background = randomColor + ',' + noise;
}

// Call the function when the page is loaded
window.addEventListener('load', setRandomBackgroundColor);

// Add the click event listener to change the color on button click
var myButton = document.getElementById('changeColorButton');
myButton.addEventListener('click', setRandomBackgroundColor);
myButton.addEventListener('click', setRandomTech);
myButton.addEventListener('click', setRandomProjet);



// Helper function to generate a random color
function getRandomColor() {
    var randomNumber = Math.floor(Math.random() * gradientColors.length);

    var randomColor = gradientColors[randomNumber];

    return randomColor
}

// Move the random Tech generation logic into a separate function
function setRandomTech() {
    // Generate a random Tech using a helper function
    var randomTech = getRandomTech();


    var tech = document.querySelector('#tech');
    tech.innerHTML = randomTech
}

// Call the function when the page is loaded
window.addEventListener('load', setRandomTech);

// Add the click event listener to change the color on button click
var myTech = document.getElementById('tech');
myTech.addEventListener('click', setRandomTech);


function getRandomTech() {
    var randomNumber = Math.floor(Math.random() * tech.length);

    var randomTech = tech[randomNumber];

    return randomTech
}


// Move the random Tech generation logic into a separate function
function setRandomProjet() {
    // Generate a random Tech using a helper function
    var randomProject = getRandomProject();


    var project = document.querySelector('#project');
    project.innerHTML = randomProject
}

// Call the function when the page is loaded
window.addEventListener('load', setRandomProjet);

// Add the click event listener to change the color on button click
var myProject = document.getElementById('project');
myProject.addEventListener('click', setRandomProjet);


function getRandomProject() {
    var randomNumber = Math.floor(Math.random() * project.length);

    var randomProject = project[randomNumber];

    return randomProject
}