const toggleNavCheckbox = document.getElementById('toggle-nav');
const bottomNavigation = document.getElementById('bottom-navigation');

toggleNavCheckbox.addEventListener('change', () => {
if (toggleNavCheckbox.checked) {
    bottomNavigation.style.opacity = 1;
} else {
    bottomNavigation.style.opacity = 0;
}
});
