//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function(){
	let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("Phone").value;
    let email = document.getElementById("email").value;

    let message = "First Name: " + fname + " " +
                  "Last Name: " + lname + " " +
                  "Phone Number: " + phone + " " +
                  "Email ID: " + email;

    alert(message);
})
