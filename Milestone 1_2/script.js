var skillsList = document.querySelectorAll('.skills .box h4');
skillsList.forEach(function (skill) {
    skill.addEventListener('click', function () {
        alert("You clicked on ".concat(skill.textContent));
    });
});
