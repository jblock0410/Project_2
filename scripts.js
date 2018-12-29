
// Select student-item and store in variable
const studentItem = document.querySelectorAll('.student-item');
let firstPage = 1;
const studentsPerPage = 10;



// Define the showPage function to show list of 10 students per page
const showPage = (list, page) => {

// Define the first and last indexes 
    let fIndex = (page * studentsPerPage) - studentsPerPage;
    let lIndex = fIndex + (studentsPerPage - 1);


// Loop through the list and display items from the list 
    for (let i = 0; i < list.length; i++) {
        if (i >= fIndex && i <= lIndex) {
            list[i].style.display = 'block';
        } else {
            list[i].style.display = 'none';
        }
    }
    return list;
}



// Define appendPageLinks function
const appendPageLinks = (list) => {
// Determine how many pages are needed
    let numOfPages = Math.ceil(studentItem.length / studentsPerPage);

// Create a DIV, give it the 'pagination' class and append it to .page DIV    
    const pageDiv = document.querySelector('.page');
    let newDiv = document.createElement('div');
    newDiv.className = 'pagination';
    pageDiv.appendChild(newDiv);
    let refNode = document.querySelector('ul');
    refNode.after(newDiv);

// Add UL to the 'pagination' DIV to store pagination links
    const linkList = document.createElement('ul');
    linkList.className = 'pagination';
    newDiv.appendChild(linkList);

// For every page, add LI and A tags with the page number text
    for (let i = 1; i <= numOfPages; i++) {
        const li = document.createElement('li');
        linkList.appendChild(li);
        const aTag = document.createElement('a');
        aTag.setAttribute('href', '#');
        aTag.textContent = i;
        li.appendChild(aTag);
    }

// Add an event listener to each A tag.
// When clicked, they call the showPage function and display the correct page
    linkList.addEventListener('click', (e) => {
        let displayPage = e.target.textContent;
        showPage(studentItem, displayPage);
        
// Loop over the pagination links to remove the active class from all links
    const pagLinks = document.querySelectorAll('a');
    for (let i = 0; i < pagLinks.length; i++) {
        pagLinks[i].classList.remove('active');
    }

// Add the active class to the clicked link.
    e.target.className = 'active';
});
}

// Call functions
showPage(studentItem, firstPage);
appendPageLinks(studentItem);