const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add(`show`);
        } else {
            entry.target.classList.remove(`show`);
        }
    });
});

const hiddenElements = document.querySelectorAll(`.hidden`)
hiddenElements.forEach((el) => observer.observe(el));

/*Form submission*/
document.getElementById('btn-submit').addEventListener('click', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const message = document.getElementById('input-message').value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Port: 2525,
        Username : "nextwavecodingacademy@gmail.com",
        Password : "56B3964E798B5FD3FE10356F42B1CD4150B6",
        To : 'ryan04122005@gmail.com',
        From : "ryan04122005@gmail.com",
        Subject : "New Join us form submission",
        Body: `
            <strong>Name:</strong> ${firstName}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Message:</strong> ${message}
        `
    }).then(message => alert('Form submitted successfully!'));

    // Reset the form after submission
    document.getElementById('input-name').value = '';
    document.getElementById('input-email').value = '';
    document.getElementById('input-message').value = '';
});
