// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Slider oluşturma
    if (typeof sliderConfig !== 'undefined') {
        createSlider();
    } else {
        console.error("sliderConfig is not defined. Make sure config.js is loaded and defines sliderConfig.");
    }
    
    // Etkinlikleri yükleme (Akademik/Genel Etkinlikler)
    if (typeof eventsConfig !== 'undefined') {
        loadEvents();
    } else {
        console.error("eventsConfig is not defined. Make sure config.js is loaded and defines eventsConfig.");
    }
    
    // Kulüpleri yükleme
    if (typeof clubsConfig !== 'undefined') {
        loadClubs();
    } else {
        console.error("clubsConfig is not defined. Make sure config.js is loaded and defines clubsConfig.");
    }
    
    // Sosyal etkinlikleri yükle
    if (typeof socialEventsConfig !== 'undefined') {
        loadSocialEvents();
    } else {
        console.error("socialEventsConfig is not defined. Make sure config.js is loaded and defines socialEventsConfig.");
    }

    // Scroll animasyonu
    initScrollAnimation();
    
    // Modal işlevleri
    initModal();
});

// Slider Oluşturma Fonksiyonu
function createSlider() {
    const slider = document.querySelector('.slider');
    const sliderDots = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (!slider || !sliderDots || !prevBtn || !nextBtn) {
        // console.warn("Slider elements not found. Skipping slider creation.");
        return;
    }
    
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
        slideButton.href = slide.buttonLink || "javascript:void(0)"; // Use buttonLink from config
        slideButton.dataset.id = slide.id;
        slideButton.dataset.type = "slider";

        // If buttonLink is not "#" or "javascript:void(0)", it's a direct link. Otherwise, open modal.
        if (!slide.buttonLink || slide.buttonLink === "#" || slide.buttonLink === "javascript:void(0)") {
            slideButton.href = "javascript:void(0)"; // Ensure it doesn't navigate
            slideButton.addEventListener('click', function() {
                showModal(slide.title, `<p>${slide.description}</p><img src="${slide.imageUrl}" alt="${slide.title}" style="max-width:100%; margin-top:15px; border-radius:8px;">`);
            });
        } else {
             slideButton.target = "_blank"; // Open external links in new tab
        }
        
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

    if (sliderConfig.length === 0) return; // No slides to operate on
    
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
        if (sliderConfig.length === 0) return;
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
                
                if(title) title.style.animation = 'none';
                if(description) description.style.animation = 'none';
                if(button) button.style.animation = 'none';
                
                setTimeout(() => {
                    if(title) title.style.animation = 'slideUp 0.8s forwards';
                    if(description) description.style.animation = 'slideUp 0.8s 0.3s forwards';
                    if(button) button.style.animation = 'slideUp 0.8s 0.6s forwards';
                }, 10);
            }
        });
    }
    if (sliderConfig.length > 0) { // Initial call if slides exist
       resetSlideAnimations();
    }
}

// Etkinlikleri Yükleme Fonksiyonu (Genel/Akademik Etkinlikler)
function loadEvents() {
    const eventsContainer = document.querySelector('.events-container');
    if (!eventsContainer) {
        // console.warn("'.events-container' not found. Skipping loading general events.");
        return;
    }
    eventsContainer.innerHTML = ''; // Clear existing content
    
    eventsConfig.forEach((event, index) => {
        // Etkinlik kartı oluşturma
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card'; // Bu class scroll animasyonu tarafından hedefleniyor
        eventCard.style.animationDelay = `${index * 0.1}s`;
        
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
        registerBtn.textContent = 'Katıl'; // Veya "Kayıt Ol"
        registerBtn.addEventListener('click', function() {
            // Bu etkinlik türü için özel bir kayıt süreci olabilir
            // Şimdilik bir alert gösterelim veya modal'a yönlendirelim
            showModal(event.title + " - Katılım", 
                `<p>${event.title} etkinliğine katılımınız için teşekkürler.</p>
                 <p>Son katılım tarihi: ${event.registrationDeadline}.</p>
                 <p>Lütfen kayıt için ilgili duyuruları takip ediniz veya organizatör ile iletişime geçiniz.</p>`
            );
            // alert(`${event.title} etkinliğine katılımınız alındı! Son katılım tarihi: ${event.registrationDeadline}`);
        });
        
        const detailBtn = document.createElement('button');
        detailBtn.className = 'detail-btn'; // 'share-btn' yerine 'detail-btn' daha uygun olabilir
        detailBtn.textContent = 'Detaylı Bilgi';
        detailBtn.dataset.id = event.id;
        detailBtn.dataset.type = "event"; // Genel etkinlikler için
        detailBtn.addEventListener('click', function() {
            const detailText = `
                <div style="text-align:center; margin-bottom:15px;">
                    <img src="${event.imageUrl}" alt="${event.title}" style="max-width:100%; max-height:200px; border-radius:8px;">
                </div>
                <p><strong>Tarih:</strong> ${event.date}</p>
                <p><strong>Konum:</strong> ${event.location}</p>
                <p><strong>Son Kayıt Tarihi:</strong> ${event.registrationDeadline}</p>
                <hr>
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
    if (!clubsContainer) {
        // console.warn("'.clubs-container' not found. Skipping loading clubs.");
        return;
    }
    clubsContainer.innerHTML = ''; // Clear existing content
    
    clubsConfig.forEach((club, index) => {
        const clubCard = document.createElement('div');
        clubCard.className = 'club-card'; // Bu class scroll animasyonu tarafından hedefleniyor
        clubCard.style.animationDelay = `${index * 0.1}s`;
        
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
        clubLink.className = 'club-link detail-btn'; // Stil tutarlılığı için detail-btn class'ı eklenebilir
        clubLink.textContent = 'Detaylı Bilgi';
        clubLink.href = "javascript:void(0)";
        clubLink.dataset.id = club.id;
        clubLink.dataset.type = "club";
        clubLink.addEventListener('click', function() {
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

// Sosyal Etkinlikleri Yükleme Fonksiyonu
function loadSocialEvents() {
    const socialEventsContainer = document.querySelector('.social-events-container');
    if (!socialEventsContainer) {
        // console.warn("Sosyal etkinlikler için .social-events-container elementi bulunamadı.");
        return;
    }
    socialEventsContainer.innerHTML = ''; // Clear previous content

    socialEventsConfig.forEach((event, index) => {
        const eventCard = document.createElement('div');
        // Hem genel etkinlik kartı stilini (scroll animasyonu için) hem de özel bir class alabilir
        eventCard.className = 'social-event-card event-card'; 
        eventCard.style.animationDelay = `${index * 0.1}s`;

        const eventImage = document.createElement('img');
        eventImage.className = 'social-event-image event-image'; 
        eventImage.src = event.imageUrl;
        eventImage.alt = event.title;

        const eventDetails = document.createElement('div');
        eventDetails.className = 'social-event-details event-details';

        const eventTitle = document.createElement('h3');
        eventTitle.className = 'social-event-title event-title';
        eventTitle.textContent = event.title;

        const eventDate = document.createElement('div');
        eventDate.className = 'event-date';
        eventDate.innerHTML = `<i class="far fa-calendar-alt"></i> ${event.date}`;

        const eventLocation = document.createElement('div');
        eventLocation.className = 'event-location';
        eventLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${event.location}`;

        const eventDescription = document.createElement('p');
        eventDescription.className = 'social-event-description event-description';
        eventDescription.textContent = event.description;

        const eventActions = document.createElement('div');
        eventActions.className = 'social-event-actions event-actions';

        const registerBtn = document.createElement('button');
        registerBtn.className = 'register-btn';
        registerBtn.textContent = 'Katıl';
        registerBtn.addEventListener('click', function() {
            registerForEvent(event.id);
        });

        const detailBtn = document.createElement('button');
        detailBtn.className = 'detail-btn';
        detailBtn.textContent = 'Detaylı Bilgi';
        detailBtn.addEventListener('click', function() {
            let modalContentText = `
                <div class="modal-event-image-container" style="text-align:center; margin-bottom:15px;">
                    <img src="${event.imageUrl}" alt="${event.title}" style="max-width:100%; height:auto; max-height:200px; border-radius: 8px;">
                </div>
                <p><strong>Tarih:</strong> ${event.date}</p>
                <p><strong>Konum:</strong> ${event.location}</p>
                <p><strong>Son Kayıt Tarihi:</strong> ${event.registrationDeadline}</p>
                <hr>
                <p>${event.mainDescription || event.description}</p>`;

            if (event.requirements && event.requirements.length > 0) {
                modalContentText += `<h4>Katılım Şartları:</h4><ul>`;
                event.requirements.forEach(req => {
                    modalContentText += `<li>${req}</li>`;
                });
                modalContentText += `</ul>`;
            }

            if (event.categories && event.categories.length > 0) {
                modalContentText += `<p style="margin-top:10px;"><strong>Kategoriler:</strong> ${event.categories.join(', ')}</p>`;
            }
             modalContentText += `
                <div style="margin-top: 20px; text-align: center;">
                    <button onclick="registerForEvent(${event.id})" class="register-btn modal-register-btn">Bu Etkinliğe Katıl</button>
                    <button onclick="shareEvent(${event.id})" class="share-btn modal-share-btn" style="margin-left:10px;">Paylaş</button>
                </div>
            `;
            showModal(event.title, modalContentText);
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

        socialEventsContainer.appendChild(eventCard);
    });
     // Yeni eklenen kartlar için scroll animasyonunu tetikle
    if (typeof initScrollAnimation === "function" && socialEventsConfig.length > 0) {
        window.dispatchEvent(new Event('scroll'));
    }
}


// `registerForEvent` fonksiyonu (sosyal etkinlikler için)
function registerForEvent(eventId) {
    const event = socialEventsConfig.find(e => e.id === eventId);
    if (event) {
        if (event.form && event.form !== "#" && event.form.trim() !== "") {
            window.open(event.form, '_blank'); // Yeni sekmede açar
        } else {
            alert(`${event.title} etkinliği için şu anda aktif bir kayıt formu bulunmamaktadır veya yakında eklenecektir.`);
        }
    } else {
        console.error(`ID'si ${eventId} olan sosyal etkinlik bulunamadı.`);
        alert("Etkinlik bilgileri yüklenirken bir sorun oluştu.");
    }
}

// `shareEvent` fonksiyonu (sosyal etkinlikler için)
function shareEvent(eventId) {
    const event = socialEventsConfig.find(e => e.id === eventId);
    if (event) {
        const shareText = `Harika bir etkinlik: ${event.title}! Detaylar için HiveCity'ye göz atın.`;
        const shareUrl = window.location.href; // Mevcut sayfa URL'si
        // Etkinliğe özel bir URL varsa onu kullanmak daha iyi olur:
        // const shareUrl = event.eventSpecificUrl || window.location.href;

        if (navigator.share) {
            navigator.share({
                title: event.title,
                text: shareText,
                url: shareUrl,
            })
            .then(() => console.log('Başarıyla paylaşıldı'))
            .catch((error) => console.log('Paylaşım hatası:', error));
        } else {
            // Fallback: Örneğin bir linki kopyalama veya mailto
            alert(`Paylaşmak için:\nBaşlık: ${event.title}\nAçıklama: ${shareText}\nURL: ${shareUrl}`);
        }
    } else {
        console.error(`ID'si ${eventId} olan sosyal etkinlik bulunamadı.`);
        alert("Paylaşılacak etkinlik bilgileri yüklenirken bir sorun oluştu.");
    }
}

// Modal İşlevleri
function initModal() {
    const modal = document.getElementById('detailModal');
    const closeBtn = document.querySelector('.close-modal');

    if (!modal || !closeBtn) {
        // console.warn("Modal elements not found. Modal functionality will be limited.");
        return;
    }
    
    closeBtn.addEventListener('click', function() {
        closeModal();
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });
}

function showModal(title, content) {
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContentEl = document.getElementById('modalContent'); // Renamed to avoid conflict

    if (!modal || !modalTitle || !modalContentEl) {
        console.error("Modal display elements (detailModal, modalTitle, modalContent) not found.");
        alert("Detaylar gösterilirken bir hata oluştu.\nBaşlık: " + title); // Basic fallback
        return;
    }
    
    modalTitle.textContent = title;
    modalContentEl.innerHTML = content; // Use the renamed variable
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    
    // Ensure modal content element for animation exists
    const modalDialog = modal.querySelector('.modal-content');
    if (modalDialog) {
        modalDialog.classList.remove('animate__zoomOut'); // Remove if present from previous close
        modalDialog.classList.add('animate__animated', 'animate__zoomIn'); // Added animate__animated
    }
}

function closeModal() {
    const modal = document.getElementById('detailModal');
    if (!modal) return;

    const modalDialog = modal.querySelector('.modal-content');
    
    if (modalDialog) {
        modalDialog.classList.remove('animate__zoomIn');
        modalDialog.classList.add('animate__zoomOut'); // animate.css class
    
        // Wait for animation to finish before hiding
        modalDialog.addEventListener('animationend', function handler() {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
            modalDialog.classList.remove('animate__zoomOut', 'animate__animated'); // Clean up classes
            modalDialog.removeEventListener('animationend', handler); // Remove listener
        }, { once: true });
    } else {
        // Fallback if .modal-content is not found or animation is not critical
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Scroll Animasyonu İçin Fonksiyon
function initScrollAnimation() {
    const elements = document.querySelectorAll('.section-title, .event-card, .club-card, .social-event-card'); // .social-event-card eklendi (gerçi event-card da kapsıyor)
    
    function checkElementsInView() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + scrollY;
            // Element görünür alana girdiğinde (biraz pay bırakarak)
            if (scrollY > elementTop - windowHeight + 100) {
                if (element.classList.contains('section-title')) {
                    element.classList.add('animate__animated', 'animate__fadeIn');
                } else if (element.classList.contains('event-card') || 
                           element.classList.contains('club-card') ||
                           element.classList.contains('social-event-card')) {
                    // CSS'de animation: cardFadeInUp 0.5s forwards; ve animation-play-state: paused; olmalı
                    element.style.animationPlayState = 'running';
                }
            }
        });
    }
    
    window.addEventListener('scroll', checkElementsInView);
    window.addEventListener('resize', checkElementsInView); // Pencere boyutu değiştiğinde de kontrol et
    checkElementsInView(); // Sayfa yüklendiğinde ilk kontrol
}