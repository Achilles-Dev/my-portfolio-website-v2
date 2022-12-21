const liveVersionLink = {
  'link-text': 'See Live',
  'link-icon': './assets/icons/See-Live.svg',
};

const sourceLink = {
  'link-text': 'See Source',
  'link-icon': './assets/icons/Icon-GitHub.svg',
};

const projectDetails = [
  {
    id: 1,
    name: 'Motorcycle Booking Service',
    description: `Book-an-appointment is based on an app
                  to book an appointment to try a motorcycle.`,
    image: 'motorcycle',
    technologies: ['React', 'Redux', 'CSS', 'Bootstrap', 'Ruby on Rails'],
    'live-version-link': { ...liveVersionLink, 'link-href': 'https://preeminent-vacherin-1e2f8e.netlify.app/' },
    'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/book-an-appointment-front-end' },
  },
  {
    id: 2,
    name: 'Money Manager',
    description: `The Money Manager is a mobile web application
                  where you can manage your budget: you have a list 
                  of transactions associated with a category, so that 
                  you can see how much money you spent for that category and on what.`,
    image: 'money-manager',
    technologies: ['React', 'Redux', 'CSS'],
    'live-version-link': { ...liveVersionLink, 'link-href': 'https://money-manager-achilles.herokuapp.com/' },
    'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/budget-app' },

  },
  {
    id: 3,
    name: 'Bookstore App',
    description: `This aplication contains a list of books with their completion stages. That is,
                  the percentage of the number of pages read to the total number of pages of the book.`,
    image: 'bookstore',
    technologies: ['React', 'Redux', 'CSS'],
    'live-version-link': { ...liveVersionLink, 'link-href': 'https://precious-druid-b78dac.netlify.app/' },
    'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/bookstore-app' },
  },
  {
    id: 4,
    name: 'Recipe App',
    description: `The Recipe app keeps track of all your recipes, ingredients, and inventory.
                  It allows you to save ingredients, keep track of what you have, create recipes,
                  and generate a shopping list based on what you have and what you are missing from
                  a recipe. Also, since sharing recipes is an important part of cooking,
                  the app should allow you to make them public so anyone can access them.`,
    image: './assets/images/recipe-app.png',
    technologies: ['Ruby', 'Ruby on Rails', 'SCSS & Bootstrap 5'],
    'live-version-link': { ...liveVersionLink, 'link-href': 'https://recipe-app-8nry.onrender.com' },
    'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/recipe-app/' },
  },
  {
    id: 5,
    name: 'Math Magicians App',
    description: `Math magicians" is a website for all fans of mathematics. 
                  It is a Single Page App (SPA) that allows users to:
                  - make simple calculations and
                  - read a random math-related quote.`,
    image: './assets/images/Desktop-Snapshoot-Portfolio.png',
    technologies: ['React', 'CSS'],
    'live-version-link': { ...liveVersionLink, 'link-href': 'https://joyful-dolphin-85efd9.netlify.app/' },
    'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/math-magicians-app' },
  },
  {
    id: 6,
    name: 'PraisyDram Concert',
    description: `The website is based on a yearly concert of Praises and Drama aimed at
                  Evangelizing to the people of God. It is organised by Catholic students in KNUST and
                  it's popularly known as PRAISYDRAM`,
    image: './assets/images/Desktop-Snapshoot-Portfolio.png',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    'live-version-link': { ...liveVersionLink, 'link-href': 'https://achilles-dev.github.io/HTML-CSS-JavaScript-capstone-project/' },
    'source-link': { ...sourceLink, 'source-href': 'https://github.com/Achilles-Dev/HTML-CSS-JavaScript-capstone-project' },
  },
];

export default projectDetails;
