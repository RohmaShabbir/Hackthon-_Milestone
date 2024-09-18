const skillsList = document.querySelectorAll('.skills .box h4');

skillsList.forEach((skill) => {
    skill.addEventListener('click', () => {
        alert(`You clicked on ${skill.textContent}`);
    });
});
