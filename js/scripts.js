window.onload = function() {
    const openButton = document.querySelector('.icon-button');
    const closeButton = document.querySelector('.close-button');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const openProfile = document.querySelector(".profile-button");
    const profile = document.querySelector(".profile-container");
    const moonIcon = document.getElementById('moon');
    const sunIcon = document.getElementById('sun');
    
    //focus input search
    const searchContainer = document.querySelector(".header-options .search");
    const searchInput = document.getElementById('search-input');

    searchContainer.addEventListener('click', function() {
        searchInput.focus();
    });

    //----------------------------------------------
    // openButton.addEventListener("click", function() {
    //     sidebar.classList.toggle("active");
    //     overlay.classList.toggle("active");
    // });

    // closeButton.addEventListener("click", function() {
    //     sidebar.classList.toggle("active");
    //     overlay.classList.toggle("active");
    // });

    // openProfile.addEventListener("click", function() {
    //     profile.classList.toggle("active");
    //     overlay.classList.toggle("active");
    // });
    // function openOverlay() {
    //     overlay.classList.add('active');
    // }

    // function closeOverlay() {
    //     overlay.classList.remove('active');
    // }

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

    openButton.addEventListener('click', function() {
        console.log('Opening sidebar...');
        sidebar.classList.add('show');
        overlay.classList.add('show');
    });

    closeButton.addEventListener('click', function() {
        console.log('Closing sidebar...');
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
    });

    openProfile.addEventListener("click", function() {
        console.log('Opening profile...');
        profile.classList.add('show');
        overlay.classList.add('show');
    });

    overlay.addEventListener('click', function() {
        if (sidebar.classList.contains('show')) {
            sidebar.classList.remove('show');
        }
        if (profile.classList.contains('show')) {
            profile.classList.remove('show');
        }
        overlay.classList.remove('show');
    });

    // document.querySelector('.theme-button').addEventListener('click', function() {
    //     if (moonIcon.style.display === 'block') {
    //         moonIcon.style.display = 'none';
    //         sunIcon.style.display = 'block';
    //     } else {
    //         moonIcon.style.display = 'block';
    //         sunIcon.style.display = 'none';
    //     }
    // });
    
};

function login() {
    window.location.href = "login.html";
}

function register() {
    window.location.href = "register.html";
}
