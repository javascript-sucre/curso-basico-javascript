let save=document.getElementsByClassName('save')[0];
let data=document.getElementsByClassName('datanote')[0];

let containerNote=document.getElementsByClassName('containerNote')[0];


let mynotes=[];


save.addEventListener("click",function(){
	let mydate=new Date();
	mynotes.push({
		note:data.value,
		hours:mydate.getHours()+":"+mydate.getMinutes()
	});

	clearInput();
	showData();
});



function clearInput(){
	data.value="";
}


function deleted(index){
	mynotes.splice(index,1);
	showData();
}


function showData(){
	containerNote.innerHTML="";
	mynotes.map((note,index)=>{
		containerNote.innerHTML+=`
			<div class="note">
				<p>
					${note.note}
				</p>
				<button onClick="deleted(${index})">borrar</button>
				<div>
					${note.hours}
				</div>
			</div>
		`;
	});
}