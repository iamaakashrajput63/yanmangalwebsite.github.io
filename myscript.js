
let searchBtn = document.querySelector('#serch-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let closeForm = document.querySelector('#form-close');


searchBtn.addEventListener('click', () =>{
	searchBtn.classList.toggle('fa-times');
	searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

closeForm.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


var i = 0;
		
		var path = new Array();
		path[0] = "images/mangalyan.jpg";
		path[1] = "images/mangalyan1.jpg";
		path[2] = "images/mangalyan2.jpg";
		path[3] = "images/mangalyan3.jpg";
		
		function swapimage(){
			document.getElementById("slider").src = path[i];
			if(i < path.length	 -1) i++;
			else i = 0;
			setTimeout("swapimage()", 3000);
		}



  var x = 0;


          var fath = new Array();
         fath[0] = "images/kantmangal.jpg";
         fath[1] = "images/kantmangal1.jpg";
         fath[2] = "images/kantmangal2.jpg";
         fath[3] = "images/kantmangal3.jpg";

         function kentimage(){
			 document.getElementById("kentsli").src = fath[x];
			 if(x < path.length  -1) x++;
			 else x = 0;
			 setTimeout("kentimage()", 3000);
		 }


    $(document).ready(function(){
		$(".click-btn").click(function(){
			$(".click-btn i").toggleClass("fas fa-times");
			$("nav ul").toggleClass("active");
		});
	});

