window.onload = function() {
    const openButton = document.querySelector('.icon-button');
    const closeButton = document.querySelector('.close-button');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const profileButton = document.querySelector(".profile-button");
    const profile = document.querySelector(".profile-container");
    
    //focus input search
    const searchContainer = document.querySelector(".header-options .search");
    const searchInput = document.getElementById('search-input');

    searchContainer.addEventListener('click', function() {
        searchInput.focus();
    });

    //----------------------------------------------
    // openButton.addEventListener("click", function () {
    //     sidebar.classList.toggle("active");
    //     overlay.classList.toggle("active");
    // });

    // closeButton.addEventListener("click", function () {
    //     sidebar.classList.toggle("active");
    //     overlay.classList.toggle("active");
    // });
    // function openOverlay() {
    //     overlay.classList.add('active');
    // }

    // function closeOverlay() {
    //     overlay.classList.remove('active');
    // }

    function openSidebar() {
        console.log('Opening sidebar...');
        sidebar.classList.add('show');
        overlay.classList.add('show');
    }

    function closeSidebar() {
        console.log('Closing sidebar...');
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
    }

    // function openProfile() {
    //     console.log('Opening profile...');
    //     profile.classList.toggle("show");
    //     openOverlay();
    // }

    // function closeProfile() {
    //     console.log('Close profile...');
    //     profile.classList.toggle("show");
    //     closeOverlay();
    // }

    openButton.addEventListener('click', openSidebar);
    closeButton.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeProfile);
    

    // profileButton.addEventListener("click",openProfile);
};
