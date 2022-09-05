const headFormText = document.getElementById('head-form-text');
const buttonSubmit = document.getElementById('submitBtn');
const modal = document.getElementById('modal');
const showModalButton = document.getElementById('btn');
const hideModalButton = document.querySelectorAll('#cancelBtn, #modalHeader');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('image-modal');



function validateForm () {
	const emailBox = document.forms['form1']['email'].value;
	const msgBox = document.forms['form1']['text-msg'].value;

	if (emailBox == '' && msgBox == ''){
		alert('Each box has to be filled out');
		return false;
	}
	else if (emailBox == ''){
		alert('Email box has to be filled out');
		return false;
	}
	else if (msgBox == ''){
		alert('Message box has to be filled out');
		return false;
	}
	changeModalAttribure();
}

/* Show modal */
showModalButton.addEventListener('click', () =>{
	modal.style.display = 'block';
	buttonSubmit.style.display = 'block';
	modalImage.src = './img/ninja.png';
	modalTitle.innerHTML = 'Mengirim Pesan?';
	hideModalButton[1].innerHTML = "<b>Cancel</b>";
	animatedModal();
});


function changeModalAttribure(){
	buttonSubmit.addEventListener('click', function (){
		this.type = "submit";
		this.style.display = 'none';
		modalTitle.innerHTML = "Success";
		modalImage.src = "./img/check.png";
		hideModalButton[1].innerHTML = "<b>Kembali</b>";
	})
}

/* hide modal */
for (let i = 0; i < hideModalButton.length; i++){
	hideModalButton[i].addEventListener('click', () => {
		modal.style.display = 'none';
	});
};



/* animated modal */
function animatedModal () {
	let time = setInterval(frame, 0.5);
	let pos = 0;
	function frame(){
		if (pos == 200){
			clearInterval(time);
		} else{
			pos+=2;
			modal.style.paddingTop = pos + "px";
		}
	}
}


