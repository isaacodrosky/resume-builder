const form = document.getElementById('resumeform');

// form inputs
const fullName = form.elements['fullname'];
const currTitle = form.elements['currtitle'];
const email = form.elements['email'];
const phone = form.elements['phone'];
const city = form.elements['city'];
const state = form.elements['state'];
const portfolio = form.elements['portfolio'];
const headline = form.elements['headline'];
const profSkill1 = form.elements['profskill1'];
const profSkill2 = form.elements['profskill2'];
const profSkill3 = form.elements['profskill3'];
const techSkill1 = form.elements['techskill1'];
const techSkill2 = form.elements['techskill2'];
const techSkill3 = form.elements['techskill3'];
const jobTitle1 = form.elements['jobtitle1'];
const employer1 = form.elements['employer1'];
const beginDate1 = form.elements['begindate1'];
const endDate1 = form.elements['enddate1'];
const jobDesc1 = form.elements['jobdesc1'];
const jobTitle2 = form.elements['jobtitle2'];
const employer2 = form.elements['employer2'];
const beginDate2 = form.elements['begindate2'];
const endDate2 = form.elements['enddate2'];
const jobDesc2 = form.elements['jobdesc2'];
const jobTitle3 = form.elements['jobtitle3'];
const employer3 = form.elements['employer3'];
const beginDate3 = form.elements['begindate3'];
const endDate3 = form.elements['enddate3'];
const jobDesc3 = form.elements['jobdesc3'];
const refs = form.elements['refs'];




let createResume = function createResume() {
    let nameVal = fullName.value; // pulls user value from form elements 
    let currTitleVal = currTitle.value;
    let emailVal = email.value; 
    let phoneVal = phone.value;
    let cityVal = city.value;
    let stateVal = state.value;
    let portfolioVal = portfolio.value;
    let headlineVal = headline.value;
    let profSkill1Val = profSkill1.value;
    let profSkill2Val = profSkill2.value;
    let profSkill3Val = profSkill3.value;
    let techSkill1Val = techSkill1.value;
    let techSkill2Val = techSkill2.value;
    let techSkill3Val = techSkill3.value;
    let jobTitle1Val = jobTitle1.value;
    let employer1Val = employer1.value;
    let beginDate1Val = beginDate1.value;
    let endDate1Val = endDate1.value;
    let jobDesc1Val = jobDesc1.value;
    let jobTitle2Val = jobTitle2.value;
    let employer2Val = employer2.value;
    let beginDate2Val = beginDate2.value;
    let endDate2Val = endDate2.value;
    let jobDesc2Val = jobDesc2.value;
    let jobTitle3Val = jobTitle3.value;
    let employer3Val = employer3.value;
    let beginDate3Val = beginDate3.value;
    let endDate3Val = endDate3.value;
    let jobDesc3Val = jobDesc3.value;
    let refsVal = refs.value;

    // build pop-up resume structure
    let resumeFormat =
        "<html><head><title>Resume</title><link rel=\"stylesheet\" href=\"style.css\" /><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" /><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin /><link href=\"https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Open+Sans:wght@400;700&display=swap\" rel=\"stylesheet\" /></head><body>";

    resumeFormat += "<div class=\"resume-container\"><header class=\"resume-header\"><h1>" + nameVal + "</h1><h2>" + currTitleVal + "</h2>";

    resumeFormat += "<p>" + emailVal + " | " + phoneVal + "</p><p>" + cityVal + ", " + stateVal + " | " + portfolioVal + "</p><p>" + headlineVal + "</p></header>";

    resumeFormat += "<div class=\"skill-container\"><div class=\"pro-skills\"><h2>Professional Skills</h2>";

    resumeFormat += "<ul><li>" + profSkill1Val + "</li><li>" + profSkill2Val + "</li><li>" + profSkill3Val + "</li></ul></div>";

    resumeFormat += "<div class=\"tech-skills\"><h2>Technical Skills</h2>";

    resumeFormat += "<ul><li>" + techSkill1Val + "</li><li>" + techSkill2Val + "</li><li>" + techSkill3Val + "</li></ul></div></div>";

    resumeFormat += "<div class=\"emp-container\"><h2>Employment Experience</h2><div id=\"job1\"><div class=\"emp-header\">";
    
    resumeFormat += "<h3>" + jobTitle1Val + "</h3><p>" + beginDate1Val + " - " + endDate1Val + "</p></div><p>" + employer1Val + "</p><p>" + jobDesc1Val + "</p></div>";

    resumeFormat += "<div id=\"job2\"><div class=\"emp-header\"><h3>" + jobTitle2Val + "</h3><p>" + beginDate2Val + " - " + endDate2Val + "</p></div><p>" + employer2Val + "</p><p>" + jobDesc2Val + "</p></div>";

    resumeFormat += "<div id=\"job3\"><div class=\"emp-header\"><h3>" + jobTitle3Val + "</h3><p>" + beginDate3Val + " - " + endDate3Val + "</p></div><p>" + employer3Val + "</p><p>" + jobDesc3Val + "</p></div></div>";

    resumeFormat += "<div class=\"refs-container\"><h2>References</h2><p>" + refsVal + "</p></div>";

    resumeFormat += "</div></body></html>";
    
    // open new window
    resumeWindow = window.open('about:blank', 'width=800,height=1000,left=0,top=0');
    // in new window, print resume
    resumeWindow.document.write(resumeFormat);
}

// email validation
function emailCheck(){
    let emailValue = document.getElementById('email').value;
    if(emailValue != ""){
        // if email is not empty, run create resume funct on submit click
        document.getElementById('submit').addEventListener('click', createResume());
        return true;
    }
    else{
        return false;
    } 
   
}
