
/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Ensure the HTML document is completely loaded w/o waiting for loading of stylesheets/images/etc
document.addEventListener('DOMContentLoaded', () => {


   // GLOBAL VARIABLES ***************************************************
      // Capture list of student LI elements in the const 'studentList'
      const studentList = document.getElementsByClassName('student-item');
      // Declare the first page as number 1 for when the showPage function is called at end
      const firstPage = 1;
      const students = Array.from(studentList);
   // END OF GLOBAL VARIABLES ********************************************



   // START OF 'showPage' FUNCTION ***************************************
   // Create/define the function to show 10 'studentList' items per page
   function showPage(list, page) { 
      // Define the first 'studentList' item and the last 'studentList' item on the page
      let firstListItem = (page * 10) - 10;
      let lastListItem = firstListItem + 9;
      

      //Loop over items in the list parameter (each 'studentList' item)
      for (let i = 0; i < list.length; i++) {
         // Set conditions for how 'studentList' items appear on the page (10 per page)
         if (i >= firstListItem && i <= lastListItem) {
            list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
         }
      }      
   }
   // END OF 'showPage' FUNCTION ****************************************
   showPage(studentList, firstPage);



   // START OF 'appendPageLinks' FUNCTION *******************************
   // Create/define the function to generate, append, and add functionality to the pagination buttons
   const appendPageLinks = (list) => {
      
         // Determine how many pages are needed
         let pagesNeeded = Math.ceil(studentList.length / 10);
         
         
         // Create a DIV and give it the class of 'pagination' 
         const paginationDiv = document.createElement('div');
         paginationDiv.className = 'pagination';
         // Select the '.page DIV' and append the new '.pagination DIV' to it
         const pageDiv = document.querySelector('div.page');
         pageDiv.appendChild(paginationDiv);


         // Add a new UL to the '.pagination DIV' to store the pagination buttons/links
         let pageLinksUl = document.createElement('ul');
         paginationDiv.appendChild(pageLinksUl);


         // For every page, add both a new LI and a new A element inside the 'pageLinksUl' UL
         for (let i = 1; i <= pagesNeeded; i++) {
            const pageLi = document.createElement('li'); 
            pageLi.className = 'listItem';
            pageLinksUl.appendChild(pageLi);
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            // Set the textContent of each button/link with its respective page number
            a.textContent = i;
            a.className = 'link';
            pageLi.appendChild(a);
            // Set page 1 as the default 'active' page on every reload of the page
            if (i === 1) {
               a.className = 'active';
            }
         }

         // Add an event listener to each A element   
         pageLinksUl.addEventListener('click', (e) => {
            let currentPage = e.target.textContent;
            // Call the 'showPage' function to display the selected page
            showPage(list, currentPage);
         
         
         // Loop over pagination links to remove the active class from all links
         const pageButtons = document.querySelectorAll('a');
         for (let i = 0; i < pageButtons.length; i++) {
            pageButtons[i].classList.remove('active');
         }
         // Add the active class to the selected link 
         e.target.className = 'active';
      });
   }
   // END OF 'appendPageLinks' FUNCTION **********************************


   // Call both functions to run
   showPage(studentList, firstPage);
   appendPageLinks(studentList);



// EXCEEDS EXPECTATIONS ITEMS ********************************************

// NUMBER 1: Search Component ********************************************
   // Capture the DIV into which the new 'searchDiv' will go
   const pageHeaderDiv = document.querySelector('div.page-header');
   
   // Create the new 'searchDiv', assign it a new className, and append
   const searchDiv = document.createElement('div');
   searchDiv.className = 'student-search';
   pageHeaderDiv.appendChild(searchDiv);

   // Create new search input and button elements and assign attributes and text
   const searchInput = document.createElement('input');
   const searchButton = document.createElement('button');
   searchInput.setAttribute('placeholder', 'Search for students...');
   searchInput.className = 'searchInput';
   searchButton.textContent = 'Search';
   
   // Append input and button inside new 'searchDiv'
   searchDiv.appendChild(searchInput);
   searchDiv.appendChild(searchButton);



// NUMBER 2: Add Functionality to Search Component   

   // Add event listener to input
   searchInput.addEventListener('keyup', () => {
      let studentLi = document.getElementsByClassName('student-item');
      // Get value of input
      let inputValue = searchInput.value.toLowerCase();
      
      // Loop through the LI elements to show matches in real time
      for (let i = 0; i < studentLi.length; i++) {
         let h3 = studentLi[i].getElementsByTagName('h3')[0];
         // If matched
         if (h3.innerHTML.toLowerCase().indexOf(inputValue) > -1) {
            studentLi[i].style.display = 'block';
            students.push(studentList[i]);
         }  else {
            studentLi[i].style.display = 'none';
         }
      }
   });
  
   // Clears search field when button is clicked
   // Sets pageButton className back to 'active' on page 1 on button click to make page 1 the default 'home' page
      searchButton.addEventListener('click', clearSearch);
      function clearSearch() {
         searchInput.value = '';
         showPage(studentList, firstPage);
         const pageButtons = document.querySelectorAll('a');
         for (let i = 0; i < pageButtons.length; i++) {
            pageButtons[0].className = 'active';  
            if (i !== 0) {
               pageButtons[i].className = '';
            }
         }
      }
      // Call function
      clearSearch();

// END OF EXCEEDS EXPECTATION ITEMS **************************************   

});