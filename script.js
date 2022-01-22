// nav elements
let nav_about = document.getElementById('nav-about')
let nav_projects = document.getElementById('nav-projects')
let nav_contact = document.getElementById('nav-contact')

// buttons
let learn_more_btn = document.getElementById('lm-btn')

// sections
let header_sec = document.getElementById('header-sec')
let about_sec = document.getElementById('about-sec')
let projects_sec = document.getElementById('projects-sec')
let contact_sec = document.getElementById('contact-sec')


function scrollToHeader() {
    header_sec.scrollIntoView({behavior: 'smooth'})
}

function scrollToAbout() {
    about_sec.scrollIntoView({behavior: 'smooth'})
}

function scrollToProjects() {
    projects_sec.scrollIntoView({behavior: 'smooth'})
}

function scrollToContact() {
    contact_sec.scrollIntoView({behavior: 'smooth'})
}