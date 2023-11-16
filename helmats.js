function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';

}


const categoryList = document.querySelectorAll("#filter-list li"); 


const allCards = document.querySelectorAll("#card-gallery-wrapper li");


function onFilterClick(e) {

    const categoryNumber = e.target.getAttribute("data-group");
    
  
    allCards.forEach((list) => {
    
        if (categoryNumber == 0) {
            list.classList.remove("hidden")
        }
        
       
        else {
          
            if (list.getAttribute("data-group") != categoryNumber)  { 
                list.classList.add("hidden");  
            }
            
          
            else { 
                list.classList.remove("hidden");
            }
        }        
    });    
} 


categoryList.forEach((list) => {
     list.addEventListener("click",  onFilterClick);  
});