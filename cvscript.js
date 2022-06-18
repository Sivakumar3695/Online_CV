function showModal(id) {
	    	let el = document.getElementById(id);  // can also use a query selector
	    	let modal = document.getElementById('modal-space');
		modal.getElementsByClassName('modal-header-content')[0].innerText = el.getElementsByClassName('project-name')[0].innerText;		
		modal.getElementsByClassName('modal-content')[0].innerHTML = el.getElementsByClassName('project-description')[0].innerHTML;
		if (el.getElementsByClassName('github-a')[0] && el.getElementsByClassName('github-a')[0].href){
			modal.getElementsByClassName('footer-github-a')[0].href = el.getElementsByClassName('github-a')[0].href;
			modal.getElementsByClassName('footer-github-a')[0].classList.add('show-github');	   
			modal.getElementsByClassName('footer-github-a')[0].classList.remove('hide-github');	   
		}
		else{
			modal.getElementsByClassName('footer-github-a')[0].classList.remove('show-github');
			modal.getElementsByClassName('footer-github-a')[0].classList.add('hide-github');
		}
		modal.classList.add('open');
	    	let bg = document.getElementsByClassName('container-fluid')[0];
	    	bg.classList.add('wrapper');
	}
function hideModal(id) {
	    let el = document.getElementById(id);  // can also use a query selector
	    el.classList.remove('open');
	    let bg = document.getElementsByClassName('container-fluid')[0];
	    bg.classList.remove('wrapper');
	}
function showHideSideBar(){
	let sidebar = document.getElementsByClassName('sidebar-md')[0];
	let mc = document.getElementsByClassName('main-content')[0];
	let left_sidebar = document.getElementsByClassName('sidebar-left')[0];
	if (sidebar.style.display == 'block'){
		sidebar.style.display = 'none';
		mc.style.opacity='inherit';
		left_sidebar.style.opacity='inherit';
	}
	else{
		sidebar.style.display = 'block';
		mc.style.opacity=0.05;
		left_sidebar.style.opacity=0.05;
	}
}
function hideSideBar(){
	let sidebar = document.getElementsByClassName('sidebar-md')[0];
	sidebar.style.display='none';
	
}

window.onload = function(){
	loadMainContent();
	loadMcContainer();
	updateCollapsible();
}

function loadMainContent(class_){
	if (class_ == null){
		class_ = 'main-content-name-header';
	}

	currentContent = document.getElementsByClassName(class_)[0];
	
	activeContent = document.getElementsByClassName('main-content-active')[0];
	if (activeContent){
		activeContent.classList.remove('main-content-active');
		activeContent.style.display = 'none';		
	}
	currentContent.classList.add('main-content-active');
	currentContent.style.display = 'inherit';
}

function updateCollapsible(){
	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;
			
			if (content.style.maxHeight){
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			} 
		});
	}
}

function loadMcContainer(class_){
	if (class_ == null){
		class_ = 'mc-about';	
	}

	navbar = document.getElementsByClassName(class_)[0];
		
	activeNavbar = document.getElementsByClassName('mc-active')[0];
	if (activeNavbar){
		activeNavbar.classList.remove('mc-active')		
	}
	activeContent = document.getElementsByClassName('mc-desc-active')[0];
	if (activeContent){
		activeContent.classList.remove('mc-desc-active');
		activeContent.style.display = 'none';		
	}
	navbar.classList.add('mc-active');
	currentContent = document.getElementsByClassName(class_+'-desc')[0];
	currentContent.classList.add('mc-desc-active');
	currentContent.style.display = 'inherit';
	//updateCollapsible();
}

function loadProjectDetails(projectGrp){
    document.getElementsByClassName('project-container')[0].style.display = 'none';
    document.getElementsByClassName(projectGrp)[0].style.display = 'inherit';
    return;
}

function closeProjectDetails(projectGrp){
    document.getElementsByClassName('project-container')[0].removeAttribute('style');
    document.getElementsByClassName(projectGrp)[0].style.display = 'none';
}

