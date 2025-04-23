// Örnek etkinlik verileri
const etkinlikler = [
    {
        id: 1,
        baslik: "Elazığ Gençlik Festivali",
        tarih: "2024-05-15",
        konum: "Fırat Üniversitesi Kampüsü",
        tur: "kultur",
        aciklama: "Gençlik festivali ve konserler",
        kulup: "Fırat Üniversitesi Öğrenci Konseyi"
    },
    {
        id: 2,
        baslik: "Yazılım Geliştirme Semineri",
        tarih: "2024-05-20",
        konum: "Elazığ Teknokent",
        tur: "seminer",
        aciklama: "Web geliştirme ve yapay zeka konularında seminer",
        kulup: "Elazığ Yazılım Kulübü"
    },
    {
        id: 3,
        baslik: "Basketbol Turnuvası",
        tarih: "2024-05-25",
        konum: "Elazığ Spor Salonu",
        tur: "spor",
        aciklama: "Üniversiteler arası basketbol turnuvası",
        kulup: "Elazığ Spor Kulübü"
    }
];

// Örnek kulüp verileri
const kulupler = [
    {
        id: 1,
        isim: "Fırat Üniversitesi Öğrenci Konseyi",
        aciklama: "Üniversite öğrencilerinin temsil organı",
        logo: "images/kulup1.jpg"
    },
    {
        id: 2,
        isim: "Elazığ Yazılım Kulübü",
        aciklama: "Yazılım geliştirme ve teknoloji kulübü",
        logo: "images/kulup2.jpg"
    },
    {
        id: 3,
        isim: "Elazığ Spor Kulübü",
        aciklama: "Spor etkinlikleri ve turnuvalar düzenleyen kulüp",
        logo: "images/kulup3.jpg"
    }
];

// Etkinlikleri listeleme fonksiyonu
function etkinlikleriListele(filtreliEtkinlikler = etkinlikler) {
    const etkinlikListesi = document.querySelector('.etkinlik-listesi');
    etkinlikListesi.innerHTML = '';
    
    filtreliEtkinlikler.forEach(etkinlik => {
        const etkinlikKarti = document.createElement('div');
        etkinlikKarti.className = 'etkinlik-karti';
        etkinlikKarti.innerHTML = `
            <h3>${etkinlik.baslik}</h3>
            <div class="etkinlik-bilgi">
                <i class="fas fa-calendar"></i>
                <p>${etkinlik.tarih}</p>
            </div>
            <div class="etkinlik-bilgi">
                <i class="fas fa-map-marker-alt"></i>
                <p>${etkinlik.konum}</p>
            </div>
            <div class="etkinlik-bilgi">
                <i class="fas fa-users"></i>
                <p>${etkinlik.kulup}</p>
            </div>
            <p>${etkinlik.aciklama}</p>
            <button onclick="etkinligeKatil(${etkinlik.id})">Katıl</button>
        `;
        etkinlikListesi.appendChild(etkinlikKarti);
    });
}

// Kulüpleri listeleme fonksiyonu
function kulupleriListele() {
    const kulupListesi = document.querySelector('.kulup-listesi');
    
    kulupler.forEach(kulup => {
        const kulupKarti = document.createElement('div');
        kulupKarti.className = 'kulup-karti';
        kulupKarti.innerHTML = `
            <img src="${kulup.logo}" alt="${kulup.isim}">
            <h3>${kulup.isim}</h3>
            <p>${kulup.aciklama}</p>
        `;
        kulupListesi.appendChild(kulupKarti);
    });
}

// Etkinlikleri filtreleme fonksiyonu
function etkinlikleriFiltrele() {
    const aramaMetni = document.getElementById('etkinlikArama').value.toLowerCase();
    const secilenTur = document.getElementById('etkinlikTuru').value;
    const secilenTarih = document.getElementById('etkinlikTarihi').value;
    
    const filtreliEtkinlikler = etkinlikler.filter(etkinlik => {
        const baslikEslesiyor = etkinlik.baslik.toLowerCase().includes(aramaMetni);
        const turEslesiyor = !secilenTur || etkinlik.tur === secilenTur;
        const tarihEslesiyor = !secilenTarih || etkinlik.tarih === secilenTarih;
        
        return baslikEslesiyor && turEslesiyor && tarihEslesiyor;
    });
    
    etkinlikleriListele(filtreliEtkinlikler);
}

// Etkinliğe katılma fonksiyonu
function etkinligeKatil(etkinlikId) {
    const etkinlik = etkinlikler.find(e => e.id === etkinlikId);
    alert(`${etkinlik.baslik} etkinliğine katılım başvurunuz alındı!`);
}

// Sayfa yüklendiğinde etkinlikleri ve kulüpleri listele
document.addEventListener('DOMContentLoaded', () => {
    etkinlikleriListele();
    kulupleriListele();
});

// Arama formu event listener'ları
document.getElementById('etkinlikArama').addEventListener('input', etkinlikleriFiltrele);
document.getElementById('etkinlikTuru').addEventListener('change', etkinlikleriFiltrele);
document.getElementById('etkinlikTarihi').addEventListener('change', etkinlikleriFiltrele);

// Navigasyon menüsü için smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 