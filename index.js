const aboutMe = document.getElementById('aboutMe');
const contact = document.getElementById('contact');
const contactMe = document.getElementById('contactMe');
const journey = document.getElementById('journey');
const crossJourney = document.getElementById('crossJourney');
const crossContact = document.getElementById('crossContact');
const reservia = document.getElementById('reservia');
const reserviaDot = document.getElementById('reserviaDot');
const ohmyfood = document.getElementById('ohmyfood');
const ohmyfoodDot = document.getElementById('ohmyfoodDot');
const chouetteAgence = document.getElementById('chouetteAgence');
const chouetteAgenceDot = document.getElementById('chouetteAgenceDot');
const nSlide = document.getElementById('nextSlide');
const preSlide = document.getElementById('preSlide');



let confirmDisplayJourney = false;
let confirmDisplayContact = false;
let project = [reservia, ohmyfood, chouetteAgence];
let projectDot = [reserviaDot, ohmyfoodDot, chouetteAgenceDot];

let index = 0;




function defaultDisplay() {
    project[index].classList.add('active');
    projectDot[index].classList.add('greenDot');   
}

defaultDisplay();

function switchNextProject() {

    if ( index < project.length && index < 2){
        index ++;
    } else {
        index = 0;
    }
    project.forEach( element => {
        if (element === project[index]){
            project[index].classList.add('active');
        }else{
            element.classList.remove('active');
        }
    });
    projectDot.forEach( element => {
        if (element === projectDot[index]){
            projectDot[index].classList.add('greenDot');
        }else{
            element.classList.remove('greenDot');
        }
    });
}

function switchPreviousProject() {
    if ( index < project.length && index > 0){
        index--;
    } else {
        index = 2;
    }
    project.forEach( element => {
        if (element === project[index]){
            project[index].classList.add('active');
        }else{
            element.classList.remove('active');
        }
    });
    projectDot.forEach( element => {
        if (element === projectDot[index]){
            projectDot[index].classList.add('greenDot');
        }else{
            element.classList.remove('greenDot');
        }
    });
}


preSlide.addEventListener('click', () => {
    switchPreviousProject()
});


nSlide.addEventListener('click',() => {
    switchNextProject()
});


aboutMe.addEventListener('click',() => {
    if (confirmDisplayJourney === false && confirmDisplayContact === false) {
        journey.classList.remove('bAllContainerMenuNone');
        journey.classList.add("bAllContainerMenuFlex");
        confirmDisplayJourney = true;
    } else if (confirmDisplayContact === true ){
        contactMe.classList.remove('bAllContainerMenuFlex');
        contactMe.classList.add("bAllContainerMenuNone");
        journey.classList.add("bAllContainerMenuFlex");
        confirmDisplayContact = false;
        confirmDisplayJourney = true;
    } else {
        journey.classList.remove('bAllContainerMenuFlex');
        journey.classList.add("bAllContainerMenuNone");
        confirmDisplayJourney = false;
    }
});

contact.addEventListener('click',() => {
    if (confirmDisplayContact === false && confirmDisplayJourney === false) {
        contactMe.classList.remove('bAllContainerMenuNone');
        contactMe.classList.add("bAllContainerMenuFlex");
        confirmDisplayContact = true;
    } else if ( confirmDisplayJourney === true) {
        journey.classList.remove('bAllContainerMenuFlex');
        journey.classList.add("bAllContainerMenuNone");
        contactMe.classList.add("bAllContainerMenuFlex");
        confirmDisplayJourney = false;
        confirmDisplayContact = true;
    } else {
        contactMe.classList.remove('bAllContainerMenuFlex');
        contactMe.classList.add("bAllContainerMenuNone");
        confirmDisplayContact = false;
    }
});

crossJourney.addEventListener('click', () => {
    journey.classList.remove('bAllContainerMenuFlex');
    journey.classList.add("bAllContainerMenuNone");
    confirmDisplay = false;
});

crossContact.addEventListener('click', () => {
    contactMe.classList.remove('bAllContainerMenuFlex');
    contactMe.classList.add("bAllContainerMenuNone");
    confirmDisplay = false;
});