// Changes the color of the link to the page that the user is currently on | Partially copied from Lab E
const pageURL = window.location.href;

const links = document.querySelectorAll("header nav > ul > li > a");

let linkUrl;

links.forEach((element) => {

    linkUrl = element.href;
    
    if(linkUrl == pageURL)
    {
        element.classList.add("current");
    }
});