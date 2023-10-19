		// Login page password set

let password = document.getElementById('password');
let eyeIcon = document.getElementById('eye-icon');


eyeIcon.onclick = function(){
	if(password.type == "password"){
		password.type = "text";
	}else{
		password.type = "password";
	};

	eyeIcon.classList.toggle("bxs-show");
};


		// Signup page new password set

let password1 = document.getElementById('password1');
let eyeIcon1 = document.getElementById('eye-icon1');


eyeIcon1.onclick = function(){
	if(password1.type == "password"){
		password1.type = "text";
	}else{
		password1.type = "password";
	};

	eyeIcon1.classList.toggle("bxs-show");
};

		// Signup page Compram password set

let password2 = document.getElementById('password2');
let eyeIcon2 = document.getElementById('eye-icon2');


eyeIcon2.onclick = function(){
	if(password2.type == "password"){
		password2.type = "text";
	}else{
		password2.type = "password";
	};

	eyeIcon2.classList.toggle("bxs-show");
};