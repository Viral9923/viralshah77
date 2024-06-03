const form = document.querySelector('form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const phoneNum = document.getElementById('phone-num');
const emailId = document.getElementById('email-id');
const message = document.getElementById('message');

function sendEmail() {

  const bodyMessage = `There is a new contact inquiry for: <br>
                       First Name: ${firstName.value} <br>
                       Last Name: ${lastName.value} <br>
                       Phone Number: ${phoneNum.value} <br>
                       Email: ${emailId.value} <br>
                       Message: ${message.value}`;

  Email.send({
    SecureToken : '631dc4f5-f8df-46b7-8fc2-2519e7f781e3',
    To : 'viralnetworking23@gmail.com',
    From : 'viralnetworking23@gmail.com',
    Subject : "New Contact Inquiry",
    Body : bodyMessage
}).then(
  message => {
    if (message == "OK") {
      Swal.fire({
        title: "Success",
        text: "The message has been sent.",
        icon: "success"
      });
    }
  }
);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName.value === '' || lastName.value === '' || phoneNum.value === '' || emailId.value === '' || message.value === '') {
    Swal.fire({
      title: "Error",
      text: "Please fill out all fields.",
      icon: "error"
    });
  } else {
    sendEmail();
    form.reset();
  }
});