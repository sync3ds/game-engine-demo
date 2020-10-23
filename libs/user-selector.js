export class UserSelector {

	constructor(engine) {
		this.engine = engine;
		this.userSelection = {};
	}

	listen(){
		document.getElementById('form').addEventListener('submit', this.submitForm.bind(this));
	}

	submitForm(evt){
		evt.preventDefault();
		this.userSelection.username = document.getElementById('username').value;
		let levelRadios = document.getElementsByName('level');
		for (var i = 0; i < levelRadios.length; i++) {
			if (levelRadios[i].checked) {
				this.userSelection.place = levelRadios[i].value;
				break;
			}
		}

		if(this.userSelection.username && this.userSelection.place){
			this.initEngine();
		} else {
			alert("All fields are required.");
		}
	}

	initEngine(){
		//document.getElementById('loading-screen').style.display = 'flex';
		document.getElementById('user-selection').style.display = 'none';

		this.engine.init(this.userSelection);
	}

}
