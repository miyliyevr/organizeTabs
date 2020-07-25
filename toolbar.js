let url = chrome.extension.getURL('toolbar.html');
let sideBar = document.createElement('div');
sideBar.src = "'+url+'";
sideBar.id ="RustamsSpecialUniqueId";

let body = document.body;
body.style.width = '80%';
body.style.float = 'right';

body.insertBefore(sideBar, body.firstChild);
// body.prepend(sideBar);
console.log(sideBar);


/*
let wrapper = document.createElement('div');
wrapper.id = "RustamsSpecialUniqueIdWrapper";
wrapper.insertAdjacentElement(wrapper.firstChild, sideBar);
let bodyContainer = document.createElement('div');
bodyContainer.id = "RustamsSpecialUniqueIdmain";
bodyContainer.insertAdjacentElement(bodyContainer.firstChild, body);
wrapper.insertAdjacentElement(sideBar, bodyContainer);
*/
/*
<div id="RustamsSpecialUniqueIdWrapper">
  <div class="sidebar">
    Sticky sidebar
  </div>
  <div class="main">
    Main content
  </div>
</div>
*/