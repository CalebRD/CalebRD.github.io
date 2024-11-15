// JavaScript for switching tabs
document.querySelectorAll('nav a').forEach(tab => {
    tab.addEventListener('click', function () {
        document.querySelectorAll('.tab').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(this.id.replace('-tab', '')).classList.add('active');
    });
});
