document.getElementById("contactForm").addEventListener("submit", function(e){
    
    document.getElementById("successMessage").innerText = "Thank you! Your message has been sent successfully.";
    this.reset();
});