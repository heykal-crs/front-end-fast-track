const headFormText = document.getElementById('head-form-text');
const buttonSubmit = document.getElementById('submitBtn');
const modal = document.getElementById('modal');
const showModalButton = document.getElementById('btn');
const hideModalButton = document.querySelectorAll('#cancelBtn, #modalHeader');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('image-modal');

/* Accordian variables */
const accordianButton = document.getElementsByClassName('accBtn');

/* Show modal */
showModalButton.addEventListener('click', () =>{
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
	} else{
		modal.style.display = 'block';
		buttonSubmit.style.display = 'block';
		modalImage.src = './img/ninja.png';
		modalTitle.innerHTML = 'Mengirim Pesan?';
		hideModalButton[1].innerHTML = "<b>Cancel</b>";
		animated(modal, 200, 0.5, 'topDown');

		changeModalAttribure();
	}
	
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


/* Accordian */
for (let i = 0; i < accordianButton.length; i++){
	accordianButton[i].addEventListener('click', function(){
		const panel = this.nextElementSibling;

		if (panel.style.display === 'block'){
			panel.style.display = 'none';
		} else{
			panel.style.display = 'block';
			animated(panel, 1, 5, 'show');
		}
	})
}


/* animated */
function animated(element, top, times, type) {
	let time = setInterval(frame, times);
	let pos = 0;
	function frame(){
		if (pos == top){
			clearInterval(time);
		} else{
			if (type == 'topDown'){
				pos+=2;
				element.style.paddingTop = pos + "px";
			}
			else if (type == 'show'){
				pos+=0.1;
				element.style.opacity = pos;
			}
		}
	}
}


