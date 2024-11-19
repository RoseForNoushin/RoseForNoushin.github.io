document.addEventListener('DOMContentLoaded', function () {
    const revealButton = document.getElementById('revealButton');
    const secretBox = document.getElementById('secretBox');

    revealButton.addEventListener('click', function () {
        console.log("in");
        
        if (secretBox.style.display === 'block') {
            secretBox.style.display = 'none';
        } else {
            secretBox.style.display = 'block';
            secretBox.style.animation = 'fadeIn 1s ease-out';
        }
    });
});
