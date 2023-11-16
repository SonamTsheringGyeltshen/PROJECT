function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';

}

const militaryList = document.querySelectorAll("#specialization-list li");

const allAlphas = document.querySelectorAll("#group-pic-wrapper li");

function onFilterClick(e) {

    const militaryNumber = e.target.getAttribute("data-group");
    
    allAlphas.forEach((list) => {
        
        if (militaryNumber == 0) {
            list.classList.remove("hidden")
        }
        else {
            if (list.getAttribute("data-group") != militaryNumber)  { 
                list.classList.add("hidden");  
            }
         else { 
                list.classList.remove("hidden");
            }
        }     
    });  
} 

militaryList.forEach((list) => {
    list.addEventListener("click", onFilterClick); 
});