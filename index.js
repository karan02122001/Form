document.getElementById('Form').addEventListener('submit', function(event){
    event.preventDefault();

    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

    if (password !== confirmPassword) {
        alert('password  and confirm password do not match!');
        return;
    }

    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const email = document.querySelector('#email').value;
    const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
           .map(interest => interest.value);

    const bio = document.querySelector('#bio').value;       


    console.log('First Name:', firstName);
            console.log('Last Name:', lastName);
            console.log('Gender:', gender);
            console.log('Email:', email);
            console.log('Interests:', interests);
            console.log('Bio:', bio);

            document.getElementById('Form').submit();
 });

 