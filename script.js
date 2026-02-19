document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for reaching out! Jared from VentGuard will contact you shortly to confirm your $99 cleaning.");
    this.reset();
});

// Smooth Scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});