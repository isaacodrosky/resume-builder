// **************************
// PSEUDOCODE:
// XX 1. declare/init form element consts
// XX 2. create funct for window open
// XX 3. declare/init var for [formelements].value
// 4. document.write() each line of html with values concatenated
// XX 5. add submit btn event listener, run window open funct when submit btn clicked
// **************************

// form itself
const form = document.getElementById('resumeform');

// form elements
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
    resumeFormat = ("<html>\n<head>\n<title>Welcome</title>\n<link rel=\"stylesheet\" href=\"style.css\"/>\n</head>\n<body>\n<h1>" + nameVal + "</h1>");


    resumeFormat += ("</body>\n</html>")
    resumeWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
    resumeWindow.document.write(resumeFormat);
}


// when submit button clicked, call createResume function
document.getElementById('submit').addEventListener('click', createResume);