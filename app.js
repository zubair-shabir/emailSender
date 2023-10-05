emailjs.init("mlww7EYavNiD2_WIP");

const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail(){
    const from = document.getElementById('from').value;
    // const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;


    emailjs.send("service_u6tllxz" , "template_vfci73q", { 
    to_email : "testzubair@telegmail.com",
    subject: subject,
    from_email: from,
    message: message
}).then( () => {
    result.innerHTML = "Email Send Successfully!";
    result.getElementsByClassName.opacity = 1;
}, (error) => {
    result.innerHTML = "Email Sending Failed!";
    result.getElementsByClassName.opacity = 1;
    console.log(error)
});
     
}