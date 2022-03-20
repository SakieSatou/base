function loadStudents(){
	$.get('217.71.129.139:4735/api/students.php'), function(data){
		let students = JSON.parse(data)['students'];
		showTable(students)
	});
}


function showTable(students){
	let table = $('#tbl_all>tbody')
	for (let i = 0; i < students.length; i++){

		let tr = $('<tr>')

		let td1 = $('<td>' + students[i].id + '</td>')
		let td2 = $('<td>' + students[i].name + '</td>')
		let td3 = $('<td>' + students[i].surname + '</td>')
		let td4 = $('<td>' + students[i].group + '</td>')
		let td5 = $('<td></td>')
		let btn = $('<button>informace</button>')
		btn.click(function(){
			showInfo(students[i])
		})
		td5.append(btn)


		tr.append(td1).append(td2).append(td3).append(td4).append(td5)

		table.append(tr)
	}
}

function showInfo(student){
	let div = $('#info')

	div.html('')

	let head = $('<h1>info o student'+student.id+'</h1>')
	let name = $('<span>NAME: </span><input id="s_name" value="'+student.name+'"></input><br>')
	let surname = $('<span>SURNAME: </span><input id="s_surname" value="'+student.surname+'"></input><br>')
	let btn_save = $('<button>SAVE</button>')
	
	btn_save.click(function()){
		save(student)
	})

	div.append(head).append(name).append(surname).append(btn_save)
}

function save(student){
	let id = student.id
	let name = $('#s_name').val()
	let surname = $('#s_surname').val()

	$.get('217.71.129.139:4735/api/student_update.php?id='+id+'&name='+name+'&surname'+surname, function(data){
	alert(data)
	});
}



