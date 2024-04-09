document.addEventListener('DOMContentLoaded', function() {
    // Gestion de la réservation
    const reservationForm = document.querySelector('#reservation form');
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(reservationForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const datetime = formData.get('datetime-local');
        
        console.log(`Réservation faite au nom de ${name} (Email: ${email}) pour le ${datetime}.`);
        // Ici, vous pourriez ajouter une requête AJAX/Fetch pour envoyer les données au serveur
        
        alert(`Merci, ${name}, votre réservation a été soumise avec succès.`);
        reservationForm.reset(); 
    });

    
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('.navigation a');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });

    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});
