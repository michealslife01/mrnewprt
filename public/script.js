const sideMenu = document.querySelector ('#sideMenu');
const navBar = document.querySelector ("nav");
const navLinks = document.querySelector ("nav");
const nav_Links = document.querySelectorAll('nav a');



function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)'
}

function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}

window.addEventListener ('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add ('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove ('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent" )  
    }else{
        navBar.classList.remove ('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add ('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', "dark:bg-transparent")  
    }
})
// Dark Mode Toggle
function toggleDarkMode() {
    const htmlElement = document.documentElement;
    const isDarkModeEnabled = htmlElement.classList.toggle('dark');
    localStorage.setItem('dark-mode', isDarkModeEnabled);

    // Update text color based on mode
    document.body.style.color = isDarkModeEnabled ? 'white' : 'black';

    // Change the color of nav links based on mode
    nav_Links.forEach(link => {
        link.style.color = isDarkModeEnabled ? 'white' : 'black';
    });

    // Toggle logos based on dark mode state
    document.getElementById('lightLogo').classList.toggle('hidden', isDarkModeEnabled);
    document.getElementById('darkLogo').classList.toggle('hidden', !isDarkModeEnabled);

    document.getElementById('lightarrow').classList.toggle('hidden', isDarkModeEnabled);
    document.getElementById('darkarrow').classList.toggle('hidden', !isDarkModeEnabled);

    document.getElementById('lightcode').classList.toggle('hidden', isDarkModeEnabled);
    document.getElementById('darkcode').classList.toggle('hidden', !isDarkModeEnabled);

    document.getElementById('lightedu').classList.toggle('hidden', isDarkModeEnabled);
    document.getElementById('darkedu').classList.toggle('hidden', !isDarkModeEnabled);

    document.getElementById('lightproject').classList.toggle('hidden', isDarkModeEnabled);
    document.getElementById('darkproject').classList.toggle('hidden', !isDarkModeEnabled);
    document.getElementById('lightLogo2').classList.toggle('hidden', isDarkModeEnabled);
    document.getElementById('darkLogo2').classList.toggle('hidden', !isDarkModeEnabled);
    document.getElementById('lightemail').classList.toggle('hidden', isDarkModeEnabled);
    document.getElementById('darkemail').classList.toggle('hidden', !isDarkModeEnabled);
    document.getElementById('lightside').classList.toggle('hidden', isDarkModeEnabled);
    document.getElementById('darkside').classList.toggle('hidden', !isDarkModeEnabled);
    document.getElementById('lightright').classList.toggle('hidden', isDarkModeEnabled);
    document.getElementById('darkright').classList.toggle('hidden', !isDarkModeEnabled);
}

// Apply stored dark mode preference on load
window.addEventListener('DOMContentLoaded', () => {
    const storedDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (storedDarkMode) {
        document.documentElement.classList.add('dark');
        document.getElementById('toggle').checked = true;
        document.body.style.color = 'white';  // Set text color for dark mode

        // Show dark mode logo and hide light mode logo if dark mode is enabled
        document.getElementById('lightLogo').classList.add('hidden');
        document.getElementById('darkLogo').classList.remove('hidden');

        document.getElementById('lightarrow').classList.add('hidden');
        document.getElementById('darkarrow').classList.remove('hidden');

        document.getElementById('lightcode').classList.add('hidden');
        document.getElementById('darkcode').classList.remove('hidden');

        document.getElementById('lightedu').classList.add('hidden');
        document.getElementById('darkedu').classList.remove('hidden');

        document.getElementById('lightproject').classList.add('hidden');
        document.getElementById('darkproject').classList.remove('hidden');
        document.getElementById('lightLogo2').classList.add('hidden');
        document.getElementById('darkLogo2').classList.remove('hidden');
        document.getElementById('lightemail').classList.add('hidden');
        document.getElementById('darkemail').classList.remove('hidden');
        document.getElementById('lightside').classList.add('hidden');
        document.getElementById('darkside').classList.remove('hidden');
        document.getElementById('lightright').classList.add('hidden');
        document.getElementById('darkright').classList.remove('hidden');
    } else {
        document.body.style.color = 'black';  // Set text color for light mode
    }
});
