/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Ensure the HTML document is completely loaded w/o waiting for loading of stylesheets/images/etc
document.addEventListener('DOMContentLoaded', () => {


// GLOBAL VARIABLES ***************************************************
// Capture list of student li elements in the const 'studentList'
const studentList = document.getElementsByClassName('student-item');
const firstPage = 1;
//Capture list of all page li elements in the const 'page'
//const page = document.getElementsByClassName('pageLi'); 



// START OF 'showPage' FUNCTION ***************************************
// Create/define the function to show 10 'studentList' items per page
const showPage = (list, page) => { 
   // Define the first 'studentList' item and the last 'studentList' item on the page
   let firstListItem = (page * 10) - 10;
   let lastListItem = firstListItem + 9;
   
   //Loop over items in the list parameter
   for (let i = 0; i < list.length; i++) {
      // Set conditions for when 'studentList' items appear on the page
      if (i >= firstListItem && i <= lastListItem) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }      
}
// END OF 'showPage' FUNCTION ****************************************



// START OF 'appendPageLinks' FUNCTION *******************************
// Create/define the function to generate, append, and add functionality to the pagination buttons.
const appendPageLinks = (list) => {
   
   // Determine how many pages are needed for the student list 
   let pagesNeeded = Math.ceil(studentList.length / 10);
   // Create a DIV and give it the class of 'pagination' class and append it to the .page DIV
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   // Select the '.page DIV' to append the '.pagination DIV' to it
   const pageDiv = document.querySelector('div.page');
   pageDiv.appendChild(paginationDiv);
   // Ensure the new '.pagination DIV' is appended as the last child element of the '.page DIV'
   let studentUl = document.querySelector('ul.page');
   paginationDiv.after(studentUl);

   // Add a UL to the 'pagination' DIV to store the pagination links
   let pageLinksContainer = document.createElement('ul');
   pageLinksContainer.className = 'pageLiContainer';
   paginationDiv.appendChild(pageLinksContainer);

   // FOR every page, add LI and A tags with the page number text
   const pageLi = document.createElement('li');
   for (let i = 0; i < pagesNeeded; i++) {
      pageLinksContainer.appendChild(pageLi);
      let a = document.createElement('a');
      a.setAttribute('href', '#');
      a.textContent = i + 1;
      pageLi.appendChild(a);
      if (i === 0) {
         a.className = 'active';
      }
   }

   // Add an event listener to each A tag.  When they are clicked, call the showPage function to display the appropriate page
   pageLinksContainer.addEventListener('click', (e) => {
      let currentPage = e.target.textContent;
      showPage(list, currentPage);
   
   
   // Loop over pagination links to remove the active class from all links
   const pageButtons = document.querySelectorAll('a');
   for (let i = 0; i < pageButtons.length; i++) {
      pageButtons[i].classList.remove('active');
   }

   // Add the active class to the link that was just clicked.  You can identify the clicked link using event.target
   e.target.className = 'active';
});
}
// END OF 'appendPageLinks' FUNCTION **********************************


// Call both functions to run
showPage(studentList, firstPage);
appendPageLinks(studentList);

// Remember to delete the comments that came with this file, and replace them with your own code comments.

});