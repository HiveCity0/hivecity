# HiveCity Etkinlik Sitesi

Bu proje, şehirdeki etkinlikleri görüntülemek için HTML, CSS ve JavaScript kullanılarak oluşturulmuş bir web sitesidir.

## Özellikler

- Slider (Kaydırmalı Görsel Galerisi)
- Yaklaşan Etkinlikler Listesi
- Kulüp Bilgileri
- Responsive Tasarım
- Animasyonlar

## Yapılandırma

Site, konfigürasyon dosyaları aracılığıyla kolayca özelleştirilebilir. Tüm içerik `config.js` dosyasından düzenlenebilir.

### Slider Yapılandırması

Slider içeriğini `config.js` dosyasındaki `sliderConfig` dizisini düzenleyerek değiştirebilirsiniz:

```javascript
const sliderConfig = [
    {
        id: 1,
        title: "Etkinlik Başlığı",
        description: "Etkinlik açıklaması",
        imageUrl: "resim-url",
        buttonText: "Buton Metni",
        buttonLink: "#"
    },
    // Diğer slider öğeleri...
];
```


### Etkinlik Yapılandırması

Etkinlikleri `config.js` dosyasındaki `eventsConfig` dizisini düzenleyerek değiştirebilirsiniz:

```javascript
const eventsConfig = [
    {
        id: 1,
        title: "Etkinlik Adı",
        date: "Etkinlik Tarihi",
        location: "Etkinlik Yeri",
        description: "Etkinlik açıklaması",
        imageUrl: "resim-url",
        registrationDeadline: "Son Kayıt Tarihi"
        
    },
    // Diğer etkinlikler...
];
```

### Kulüp Yapılandırması

Kulüpleri `config.js` dosyasındaki `clubsConfig` dizisini düzenleyerek değiştirebilirsiniz:

```javascript
const clubsConfig = [
    {
        id: 1,
        name: "Kulüp Adı",
        description: "Kulüp açıklaması",
        logoUrl: "logo-url",
        link: "#"
    },
    // Diğer kulüpler...
];
```

## Kullanım

1. Projeyi bilgisayarınıza klonlayın veya indirin
2. `index.html` dosyasını web tarayıcınızda açın
3. `config.js` dosyasını düzenleyerek içeriği özelleştirin

## Teknolojiler

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome (ikonlar için)
- Animate.css (animasyonlar için)

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.
