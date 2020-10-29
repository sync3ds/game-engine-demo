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
		let mapRadios = document.getElementsByName('map');
		for (var i = 0; i < mapRadios.length; i++) {
			if (mapRadios[i].checked) {
				this.userSelection.place = mapRadios[i].value;
				break;
			}
		}
		let characterRadios = document.getElementsByName('character');
		for (var i = 0; i < characterRadios.length; i++) {
			if (characterRadios[i].checked) {
				this.userSelection.character = characterRadios[i].value;
				break;
			}
		}

		if(this.userSelection.username && this.userSelection.place && this.userSelection.character){
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
