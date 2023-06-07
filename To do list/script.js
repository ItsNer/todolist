// time
let days = ['sun','mon','tus','wed','thu','fri','sat'];
let months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

function clock(){
	let today = new Date();

	let hour = today.getHours();
	let minute = today.getMinutes();
	let day = today.getDay();
	let date = today.getDate();
	let month = today.getMonth();
	let year = today.getFullYear();

	hour = hour < 10 ? "0" + hour : hour;
	minute = minute < 10 ? "0" + minute : minute;
	date = date < 10 ? "0" + date : date;

	document.getElementById('hour').innerHTML = hour;
	document.getElementById('minute').innerHTML = minute;
	document.getElementById('day').innerHTML = date;
	document.getElementById('month').innerHTML = months[month];
	document.getElementById('year').innerHTML = year;
	document.getElementById(''+days[day]+"").style.color = '#FFD755';
}

setInterval(clock,400);
// time END

// quotes
function quotes(){
	const user = "Aidil";
	let today = new Date();

	let hour = today.getHours();
	let minute = today.getMinutes();
	let day = today.getDay();
	let date = today.getDate();
	let month = today.getMonth();
	let year = today.getFullYear();

	if(hour >= 5 && hour <= 12){
		document.getElementById('text-quotes').innerHTML = "Good Morning, " + user;
		document.getElementById('quot').innerHTML = "semoga hari ini penuh dengan ketenangan dan kebahagiaan";
	}


}

quotes();

// quotes END

// todolist
function todolist(){
	let input = document.querySelector('.input-text');
	let ul = document.querySelector('.todo');


	input.addEventListener('keydown', function(event){
		if(event.key === "Enter"){
			event.preventDefault();
			let li = document.createElement('li');
			let check = document.createElement('input');
			check.type = 'checkbox';
			check.classList.add('checkbox');

			let button = document.createElement('button');
			button.innerHTML = 'x';
			button.classList.add('btn-delete');

			let text = document.createTextNode(input.value);

			li.appendChild(check);
			li.appendChild(text);
			li.appendChild(button);
			li.classList.add('dolist');
			ul.appendChild(li);

			check.addEventListener('click', function(){
				if(check.checked){
					check.style.display = 'inline-block';
					li.style.textDecoration = 'line-through';
					button.style.display = 'inline-block';
				}
			})

			button.addEventListener('click', function(){
				ul.removeChild(li);
			})

			input.value = '';
		}
	});
}

todolist();









