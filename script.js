document.addEventListener("DOMContentLoaded", function() {
    var socialLinks = document.querySelectorAll(".social-link");

    socialLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            alert("You are about to visit " + link.textContent);
        });
    });
});
