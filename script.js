document.addEventListener('DOMContentLoaded', function() {
    // Slider oluşturma
    createSlider();
    
    // Etkinlikleri yükleme
    loadEvents();
    
    // Kulüpleri yükleme
    loadClubs();
    
    // Scroll animasyonu
    initScrollAnimation();
    
    // Modal işlevleri
    initModal();

    // Menü linklerini ayarlama
    initMenuLinks();
});

// Slider Oluşturma Fonksiyonu
function createSlider() {
    const slider = document.querySelector('.slider');
    const sliderDots = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    
    // Slider içeriğini oluşturma
    sliderConfig.forEach((slide, index) => {
        // Slide oluşturma
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        slideElement.style.backgroundImage = `url(${slide.imageUrl})`;
        
        // Slide içeriği
        const slideContent = document.createElement('div');
        slideContent.className = 'slide-content';
        
        const slideTitle = document.createElement('h2');
        slideTitle.className = 'slide-title';
        slideTitle.textContent = slide.title;
        
        const slideDescription = document.createElement('p');
        slideDescription.className = 'slide-description';
        slideDescription.textContent = slide.description;
        
        const slideButton = document.createElement('a');
        slideButton.className = 'slide-btn';
        slideButton.textContent = slide.buttonText;
        slideButton.href = "javascript:void(0)";
        slideButton.dataset.id = slide.id;
        slideButton.dataset.type = "slider";
        slideButton.addEventListener('click', function() {
            showModal(slide.title, slide.description);
        });
        
        slideContent.appendChild(slideTitle);
        slideContent.appendChild(slideDescription);
        slideContent.appendChild(slideButton);
        
        slideElement.appendChild(slideContent);
        slider.appendChild(slideElement);
        
        // Dot oluşturma
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (index === 0) {
            dot.classList.add('active');
        }
        dot.dataset.index = index;
        sliderDots.appendChild(dot);
        
        // Dot tıklama olayı
        dot.addEventListener('click', function() {
            goToSlide(parseInt(this.dataset.index));
        });
    });
    
    // Önceki slide'a gitme
    prevBtn.addEventListener('click', function() {
        goToSlide(currentSlide - 1);
    });
    
    // Sonraki slide'a gitme
    nextBtn.addEventListener('click', function() {
        goToSlide(currentSlide + 1);
    });
    
    // Otomatik geçiş için zamanlayıcı
    let slideInterval = setInterval(function() {
        goToSlide(currentSlide + 1);
    }, 5000);
    
    // Slider üzerine gelindiğinde otomatik geçişi durdurma
    slider.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });
    
    // Slider üzerinden çıkıldığında otomatik geçişi devam ettirme
    slider.addEventListener('mouseleave', function() {
        slideInterval = setInterval(function() {
            goToSlide(currentSlide + 1);
        }, 5000);
    });
    
    // Belirli bir slide'a gitme fonksiyonu
    function goToSlide(index) {
        // Döngüsel slider için
        if (index < 0) {
            index = sliderConfig.length - 1;
        } else if (index >= sliderConfig.length) {
            index = 0;
        }
        
        // Aktif slide'ı güncelleme
        currentSlide = index;
        
        // Slider'ı kaydırma
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Aktif dot'u güncelleme
        document.querySelectorAll('.dot').forEach(function(dot, i) {
            if (i === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
        
        // Slide içeriğini animasyonla gösterme
        resetSlideAnimations();
    }
    
    // Slide animasyonlarını sıfırlama
    function resetSlideAnimations() {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                const title = slide.querySelector('.slide-title');
                const description = slide.querySelector('.slide-description');
                const button = slide.querySelector('.slide-btn');
                
                title.style.animation = 'none';
                description.style.animation = 'none';
                button.style.animation = 'none';
                
                setTimeout(() => {
                    title.style.animation = 'slideUp 0.8s forwards';
                    description.style.animation = 'slideUp 0.8s 0.3s forwards';
                    button.style.animation = 'slideUp 0.8s 0.6s forwards';
                }, 10);
            }
        });
    }
}

// Etkinlikleri Yükleme Fonksiyonu
function loadEvents() {
    const eventsContainer = document.querySelector('.events-container');
    
    eventsConfig.forEach((event, index) => {
        // Etkinlik kartı oluşturma
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.style.animationDelay = `${index * 0.1}s`;
        
        // Etkinlik içeriği
        const eventImage = document.createElement('img');
        eventImage.className = 'event-image';
        eventImage.src = event.imageUrl;
        eventImage.alt = event.title;
        
        const eventDetails = document.createElement('div');
        eventDetails.className = 'event-details';
        
        const eventTitle = document.createElement('h3');
        eventTitle.className = 'event-title';
        eventTitle.textContent = event.title;
        
        const eventDate = document.createElement('div');
        eventDate.className = 'event-date';
        eventDate.innerHTML = `<i class="far fa-calendar-alt"></i> ${event.date}`;
        
        const eventLocation = document.createElement('div');
        eventLocation.className = 'event-location';
        eventLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${event.location}`;
        
        const eventDescription = document.createElement('p');
        eventDescription.className = 'event-description';
        eventDescription.textContent = event.description;
        
        const eventActions = document.createElement('div');
        eventActions.className = 'event-actions';
        
        const registerBtn = document.createElement('button');
        registerBtn.className = 'register-btn';
        registerBtn.textContent = 'Katıl';
        registerBtn.addEventListener('click', function() {
            alert(`${event.title} etkinliğine katılımınız alındı! Son katılım tarihi: ${event.registrationDeadline}`);
        });
        
        const detailBtn = document.createElement('button');
        detailBtn.className = 'share-btn';
        detailBtn.textContent = 'Detaylı Bilgi';
        detailBtn.dataset.id = event.id;
        detailBtn.dataset.type = "event";
        detailBtn.addEventListener('click', function() {
            const detailText = `
                <p><strong>Tarih:</strong> ${event.date}</p>
                <p><strong>Konum:</strong> ${event.location}</p>
                <p><strong>Son Kayıt Tarihi:</strong> ${event.registrationDeadline}</p>
                <p>${event.description}</p>
                <p>Bu etkinliğe katılmak için son kayıt tarihinden önce kaydolmanız gerekmektedir.</p>
            `;
            showModal(event.title, detailText);
        });
        
        eventActions.appendChild(registerBtn);
        eventActions.appendChild(detailBtn);
        
        eventDetails.appendChild(eventTitle);
        eventDetails.appendChild(eventDate);
        eventDetails.appendChild(eventLocation);
        eventDetails.appendChild(eventDescription);
        eventDetails.appendChild(eventActions);
        
        eventCard.appendChild(eventImage);
        eventCard.appendChild(eventDetails);
        
        eventsContainer.appendChild(eventCard);
    });
}

// Kulüpleri Yükleme Fonksiyonu
function loadClubs() {
    const clubsContainer = document.querySelector('.clubs-container');
    
    clubsConfig.forEach((club, index) => {
        // Kulüp kartı oluşturma
        const clubCard = document.createElement('div');
        clubCard.className = 'club-card';
        clubCard.style.animationDelay = `${index * 0.1}s`;
        
        // Kulüp içeriği
        const clubLogo = document.createElement('img');
        clubLogo.className = 'club-logo';
        clubLogo.src = club.logoUrl;
        clubLogo.alt = club.name;
        
        const clubDetails = document.createElement('div');
        clubDetails.className = 'club-details';
        
        const clubName = document.createElement('h3');
        clubName.className = 'club-name';
        clubName.textContent = club.name;
        
        const clubDescription = document.createElement('p');
        clubDescription.className = 'club-description';
        clubDescription.textContent = club.description;
        
        const clubLink = document.createElement('a');
        clubLink.className = 'club-link';
        clubLink.textContent = 'Detaylı Bilgi';
        clubLink.href = "javascript:void(0)";
        clubLink.dataset.id = club.id;
        clubLink.dataset.type = "club";
        clubLink.addEventListener('click', function() {
            // mainContent varsa onu göster, yoksa varsayılan içeriği göster
            const detailText = club.mainContent ? club.mainContent : `
                <p>${club.description}</p>
                <p>Bu kulüp hakkında daha fazla bilgi almak ve etkinliklerini takip etmek için kulüp sayfasını ziyaret edebilirsiniz.</p>
                <div style="text-align: center; margin-top: 20px;">
                    <img src="${club.logoUrl}" alt="${club.name}" style="max-width: 150px; border-radius: 10px;">
                </div>
            `;
            showModal(club.name, detailText);
        });
        
        clubDetails.appendChild(clubName);
        clubDetails.appendChild(clubDescription);
        clubDetails.appendChild(clubLink);
        
        clubCard.appendChild(clubLogo);
        clubCard.appendChild(clubDetails);
        
        clubsContainer.appendChild(clubCard);
    });
}

// Modal İşlevleri
function initModal() {
    const modal = document.getElementById('detailModal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Modal kapatma butonu
    closeBtn.addEventListener('click', function() {
        closeModal();
    });
    
    // Modal dışına tıklandığında kapatma
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // ESC tuşuna basıldığında kapatma
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
}

// Modal Gösterme Fonksiyonu
function showModal(title, content) {
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Sayfanın scrollunu devre dışı bırakma
    
    setTimeout(() => {
        modal.querySelector('.modal-content').classList.add('animate__zoomIn');
    }, 100);
}

// Modal Kapatma Fonksiyonu
function closeModal() {
    const modal = document.getElementById('detailModal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.classList.remove('animate__zoomIn');
    modalContent.classList.add('animate__zoomOut');
    
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Sayfanın scrollunu aktif etme
        modalContent.classList.remove('animate__zoomOut');
    }, 300);
}

// Scroll Animasyonu İçin Fonksiyon
function initScrollAnimation() {
    // Scroll olayını dinleme
    window.addEventListener('scroll', function() {
        // Görünür alanı hesaplama
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        
        // Scroll animasyonu için elementleri seçme
        const elements = document.querySelectorAll('.section-title, .event-card, .club-card');
        
        elements.forEach(element => {
            // Elementin pozisyonunu hesaplama
            const elementTop = element.getBoundingClientRect().top + scrollY;
            
            // Element görünür alanda ise
            if (scrollY > elementTop - windowHeight + 100) {
                if (element.classList.contains('section-title')) {
                    element.classList.add('animate__fadeIn');
                } else if (element.classList.contains('event-card')) {
                    element.style.animationPlayState = 'running';
                } else if (element.classList.contains('club-card')) {
                    element.style.animationPlayState = 'running';
                }
            }
        });
    });
    
    // Sayfa yüklendiğinde scroll pozisyonunu kontrol etme
    window.dispatchEvent(new Event('scroll'));
}

// Menü linklerini ayarlama fonksiyonu
function initMenuLinks() {
    const menuLinks = document.querySelectorAll('nav ul li a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aktif link'i güncelle
            menuLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // İlgili bölüme scroll
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                const targetSection = document.querySelector(`#${targetId}`);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}
