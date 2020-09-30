var defaultPage = "page1";

window.onload = winInit;

function winInit(){

    tabsInit();
    
}

function tabsInit() {
    
    // get all the tabs inside the nav/menu
    var nodes = document.getElementById("mainNav").childNodes;
    
    // give all tabs onclick to change tab
    for(var i = 0; i < nodes.length; i++) {
        nodes[i].onclick = changeTab;
    }
    
    // get all the pages
    var pages = document.getElementsByClassName("page");
    
    // hide all pages
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    
    // show the default page
    document.getElementById(defaultPage).style.display = "block";
}

function changeTab() {
    
    // get the current tab (the only tab with the class active)
    var activeTab = document.getElementsByClassName("active")[0];
    
    // get the current tab Id
    var activeTabId = activeTab.attributes["tabId"].value;
    
    // get the current tab using the Id
    var activeTabDiv = document.getElementById(activeTabId);
    
    // when changing tabs the current one is no longer active
    activeTab.classList.remove("active");
    activeTabDiv.style.display = "none";
    
    // change the clicked tab (this) to be active
    this.setAttribute("class", "active");
    
    // show the content of the new tab using the Id from the clicked tab (this)
    activeTabId = this.attributes["tabId"].value;
    activeTabDiv = document.getElementById(activeTabId);
    activeTabDiv.style.display = "block";
}