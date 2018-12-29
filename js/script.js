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
   // END OF GLOBAL VARIABLES ********************************************



   // START OF 'showPage' FUNCTION ***************************************
   // Create/define the function to show 10 'studentList' items per page
   const showPage = (list, page) => { 
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
            pageLinksUl.appendChild(pageLi);
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            // Set the textContent of each button/link with its respective page number
            a.textContent = i;
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

   // 1. When search button is clicked, list is filtered to match search value
   //searchButton.addEventListener('click', filterInput);
   // 2. Add keyup event listener to filter in real time

   // Get input element
   //let searchInput = document.getElementsByClassName('searchInput');
   // Add event listener to input
   searchInput.addEventListener('keyup', filterInput);
   
   function filterInput() {
      // Get value of input
      let inputValue = searchInput.value.toLowerCase();

      // Capture 'student-list' UL element
      //let ul = document.getElementsByClassName('student-list');
      // Capture LI elements from the UL (LI elements contained in global 'const studentList')
      let li = document.querySelectorAll('li.student-item');

      // Loop through the LI elements  DELETE: NAME(h3) & EMAIL(span.email)
      for (let i = 0; i < li.length; i++) {
         let h3 = li[i].getElementsByTagName('h3')[0];
         // If matched
         if (h3.innerHTML.toLowerCase().indexOf(inputValue) > -1) {
            li[i].style.display = 'block';
         }  else {
            li[i].style.display = 'none';
         }
      }
   }


// NUMBER 3: Paginate the Search Results

   // 1. Change page links depending upon how many results are returned
   // HINT: Each function already created (3) will make this easier


// NUMBER 4: Handle No Results Returned

   // 1. If no matches are found, include an HTML message to say there are no matches
   // HINT: This message must be printed to the page 



// END OF EXCEEDS EXPECTATION ITEMS **************************************   

});