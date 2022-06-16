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
