function scrollToDiv(divId) {
    var contactUs = document.getElementById(divId);

    if (contactUs) {
        contactUs.scrollIntoView({ behavior: 'smooth' });
    }
}



function performSearch() {
    var searchTerm = document.getElementById('searchInput').value;

    var searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = '<p>Search results for: ' + searchTerm + '</p>';

    setTimeout(function() {
        searchResultsDiv.innerHTML += '<p>Search results go here...</p>';

    
        var targetDiv = document.getElementById('targetDiv');
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }, 1000); 
}


function submitForm(event) {
    event.preventDefault(); 

    document.getElementById('myForm').style.display = 'none';
    document.getElementById('loadingSpinner').style.display = 'block';

    setTimeout(function() {
        document.getElementById('loadingSpinner').style.display = 'none';
        document.getElementById('confirmationMessage').style.display = 'block';
    }, 2000);
}

// function showPreviousSection(previousSectionId) {
//     document.getElementById('myForm').style.display = 'none';
//     document.getElementById('loadingSpinner').style.display = 'none';
//     document.getElementById('confirmationMessage').style.display = 'none';

//     document.getElementById(previousSectionId).style.display = 'block';
// }