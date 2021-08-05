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
function showSideBar(){
	let sidebar = document.getElementsByClassName('sidebar-md')[0];
	sidebar.style.display='block';
	let sidebar_sm = document.getElementsByClassName('sidebar-sm')[0];
	sidebar_sm.style.opacity=0.1;	
	let mc = document.getElementsByClassName('main-content')[0];
	mc.style.opacity=0.1;
}
function hideSideBar(){
	let sidebar = document.getElementsByClassName('sidebar-md')[0];
	sidebar.style.display='none';
	let sidebar_sm = document.getElementsByClassName('sidebar-sm')[0];
	sidebar_sm.style.opacity='inherit';	
	let mc = document.getElementsByClassName('main-content')[0];
	mc.style.opacity='inherit';
}

