// ===== DONNÉES DES SERVICES =====
const serviceCategories = {
    cils: {
        title: "Cils & Sourcils",
        services: [
            { name: "Cils à cils", price: "50€" },
            { name: "Rehaussement cils", price: "45€" },
            { name: "Volume russe", price: "80€" },
            { name: "Remplissage cils", price: "30€" },
            { name: "Sourcils (Microblading)", price: "50€" },
            { name: "Teinture cils et sourcils", price: "20€" },
            { name: "Permanente cils", price: "40€" },
            { name: "Démaquillage cils", price: "15€" }
        ]
    },
    visage: {
        title: "Soins du Visage",
        services: [
            { name: "Soin simple", price: "40€" },
            { name: "Hydrafacial", price: "50€" },
            { name: "BB Glow", price: "100€" },
            { name: "Soin anti-âge", price: "55€" },
            { name: "Nettoyage de peau", price: "50€" },
            { name: "Masque purifiant", price: "35€" },
            { name: "Soin éclat", price: "40€" },
            { name: "Peeling doux", price: "30€" },
            { name: "Soin hydratant", price: "45€" }
        ]
    },
    massage: {
        title: "Massage & Bien-être",
        services: [
            { name: "Head Spa Japonais", price: "50€" },
            { name: "Massage relaxant", price: "60€" },
            { name: "Massage aux pierres chaudes", price: "70€" },
            { name: "Massage du visage", price: "40€" },
            { name: "Massage des pieds", price: "35€" },
            { name: "Lifting colombien", price: "80€" },
            { name: "Soin du corps complet", price: "90€" },
            { name: "Massage thérapeutique", price: "65€" },
            { name: "Massage balinais", price: "50€/1h" },
            { name: "Massage holistique", price: "50€/1h" }
        ]
    },
    ongles: {
        title: "Ongles & Nail Art",
        services: [
            { name: "Capsule couleur", price: "45€" },
            { name: "Babyboomer", price: "55€" },
            { name: "French", price: "50€" },
            { name: "Semi-permanent", price: "25€" },
            { name: "Méthode USA", price: "45€" },
            { name: "Nail Art simple", price: "40€" },
            { name: "Nail Art 3D", price: "50€" },
            { name: "Pédicure", price: "35€" },
            { name: "Dépose de vernis", price: "15€" }
        ]
    },
    maquillage: {
        title: "Maquillage",
        services: [
            { name: "Candy lips", price: "100€" },
            { name: "Augmentation lèvres", price: "200€" },
            { name: "Tatouage éphémère", price: "40€" },
            { name: "Changement couleur yeux", price: "100€" },
            { name: "Maquillage de jour", price: "35€" },
            { name: "Maquillage de soirée", price: "45€" },
            { name: "Maquillage mariée", price: "80€" },
            { name: "Cours de maquillage", price: "60€" },
            { name: "Correction de teint", price: "25€" }
        ]
    },
    dentaire: {
        title: "Blanchiment Dentaire",
        services: [
            { name: "Blanchiment professionnel", price: "80€" },
            { name: "Blanchiment express", price: "60€" },
            { name: "Kit de blanchiment maison", price: "40€" },
            { name: "Consultation dentaire", price: "25€" },
            { name: "Strass dentaire", price: "30€" }
        ]
    },
    epilation: {
        title: "Épilation",
        services: [
            { name: "Sourcils", price: "10€" },
            { name: "Lèvres", price: "8€" },
            { name: "Menton", price: "8€" },
            { name: "Aisselles", price: "15€" },
            { name: "Jambes complètes", price: "35€" },
            { name: "Maillot", price: "20€" },
            { name: "Dos", price: "25€" }
        ]
    }
};

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site chargé avec succès');
    initializeAnimations();
    initializeForm();
});

// ===== ANIMATIONS AU SCROLL =====
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec la classe animate-on-scroll
    document.querySelectorAll('.service-card, .gallery-item, .formation-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// ===== NAVIGATION SMOOTH =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== MODAL DES SERVICES =====
function openServiceModal(category) {
    console.log('Ouverture modal pour:', category);
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalServicesList = document.getElementById('modalServicesList');
    
    const categoryData = serviceCategories[category];
    if (!categoryData) {
        console.error('Catégorie non trouvée:', category);
        return;
    }
    
    modalTitle.textContent = categoryData.title;
    modalServicesList.innerHTML = '';
    
    categoryData.services.forEach(service => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="service-name">${service.name}</span>
            <span class="service-price">${service.price}</span>
        `;
        modalServicesList.appendChild(li);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fermer le modal en cliquant à l'extérieur
window.addEventListener('click', function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeServiceModal();
    }
});

// ===== FORMULAIRE DE CONTACT =====
function initializeForm() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // Créer le message WhatsApp
        const whatsappMessage = `Bonjour, je souhaite prendre rendez-vous :

Nom : ${name}
Email : ${email}
Téléphone : ${phone}
Service : ${service}
Message : ${message || 'Aucun message'}`;
        
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/33619698984?text=${encodedMessage}`;
        
        // Ouvrir WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Afficher un message de confirmation
        alert('Demande envoyée ! Vous allez être redirigé vers WhatsApp.');
        
        // Réinitialiser le formulaire
        form.reset();
    });
}

// ===== EFFETS DE SURVOL =====
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 20px 60px rgba(139, 125, 107, 0.25)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 20px rgba(139, 125, 107, 0.1)';
    });
});

// ===== GESTION DES ERREURS =====
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// ===== OPTIMISATION MOBILE =====
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // Améliorer les interactions tactiles
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// ===== MODAL DE RÉSERVATION =====
let selectedService = null;

function openReservationModal(category) {
    console.log('Ouverture modal réservation pour:', category);
    const modal = document.getElementById('reservationModal');
    const title = document.getElementById('reservationTitle');
    const selection = document.getElementById('servicesSelection');
    const confirmBtn = document.getElementById('confirmBtn');
    
    const categoryData = serviceCategories[category];
    if (!categoryData) {
        console.error('Catégorie non trouvée:', category);
        return;
    }
    
    title.textContent = `Réserver - ${categoryData.title}`;
    selection.innerHTML = '';
    selectedService = null;
    confirmBtn.disabled = true;
    
    categoryData.services.forEach(service => {
        const option = document.createElement('div');
        option.className = 'service-option';
        option.innerHTML = `
            <h4>${service.name}</h4>
            <div class="price">${service.price}</div>
        `;
        option.addEventListener('click', () => selectService(option, service));
        selection.appendChild(option);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function selectService(optionElement, service) {
    // Désélectionner toutes les options
    document.querySelectorAll('.service-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Sélectionner l'option cliquée
    optionElement.classList.add('selected');
    selectedService = service;
    
    // Activer le bouton de confirmation
    const confirmBtn = document.getElementById('confirmBtn');
    confirmBtn.disabled = false;
}

function confirmReservation() {
    if (!selectedService) {
        alert('Veuillez sélectionner un service');
        return;
    }
    
    const whatsappMessage = `Bonjour, je souhaite réserver : ${selectedService.name} - ${selectedService.price}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/33619698984?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    closeReservationModal();
}

function closeReservationModal() {
    const modal = document.getElementById('reservationModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    selectedService = null;
}

// Fermer le modal de réservation en cliquant à l'extérieur
window.addEventListener('click', function(event) {
    const modal = document.getElementById('reservationModal');
    if (event.target === modal) {
        closeReservationModal();
    }
});

// ===== FONCTIONS GLOBALES =====
window.openServiceModal = openServiceModal;
window.closeServiceModal = closeServiceModal;
window.openReservationModal = openReservationModal;
window.closeReservationModal = closeReservationModal;
window.confirmReservation = confirmReservation;