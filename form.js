const validateFname = () => {
    let fname = document.getElementById('fname').value;
    let fdiv = document.getElementById('fdiv');
    let fout = document.getElementById('fout');

    if (fname.trim().length == 0) {
        fout.innerText = "Please enter FirstName";
        fdiv.classList.add('has-error');
    } else {
        fout.innerText = "";
        fdiv.classList.remove('has-error');
        fdiv.classList.add('has-success');
    }
}

function validateEmail() {
    let email = document.getElementById('email').value;
    if (email.trim().length == 0) {
        document.getElementById('eout').innerText = "Please Enter Email Id";
    } else {
        if (email.match("^([a-zA-Z0-9]+)@gmail([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$") == null) {

            document.getElementById('eout').innerText = " ";

        } else {
            document.getElementById('eout').innerText = " Please Enter Valid Email Id ";


        }
    }
}


function validatePass() {
    let pswrd = document.getElementById("pswrd").value;
    if (pswrd.trim().length < 15) {
        if (pswrd.trim().length < 8) {
            document.getElementById("pout").innerText = "Min Length is 8"
            document.getElementById('ppout').style.display = "block";
            document.getElementById('ppout').style.backgroundColor = "red";

        } else if (pswrd.trim().length < 11) {

            document.getElementById("pout").innerText = " ";
            document.getElementById('ppout').style.display = "block";
            document.getElementById('ppout').style.backgroundColor = "orange";

        } else {

            document.getElementById('ppout').style.backgroundColor = "green";

        }
    }
}


function showPassword() {
    let pswrd = document.getElementById('pswrd');
    if (pswrd.type == 'password') {
        pswrd.type = 'text';
    } else {
        pswrd.type = 'password';
    }
}


const validateCPass = () => {
    let pswrd = document.getElementById('pswrd').value;
    let cpwd = document.getElementById('cpwd').value;
    if (pswrd !== cpwd) {
        document.getElementById('cpout').innerText = "Password Does Not Match"
    } else {
        document.getElementById('cpout').innerText = "";
    }
}

const getCity = () => {
    let city = document.getElementById('country').value;
    document.getElementsByTagName('span')[1].innerText = `You have selected ${city}`
}