 document.addEventListener("DOMContentLoaded", function () {
            var contactPage = document.getElementById("contact-page");
            var contactButton = document.querySelector(".buttons button:nth-child(2)");
            var contactForm = document.getElementById("contact-form");

            contactButton.addEventListener("click", function () {
                contactPage.style.display = 'block';
            });

            contactForm.addEventListener("submit", function (event) {
                
                event.preventDefault(); 

                alert("Form submitted!");

                
                contactPage.style.display = 'none';
            });
        });