
    {
        id: 1,
        title: "Bahar Festivali",
        description: "Bu bahar kampüsümüzde gerçekleşecek olan festivale davetlisiniz. Müzik, eğlence ve daha fazlası!",
        imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        buttonText: "Detaylı Bilgi",
        buttonLink: "#"
    },
    {
        id: 2,
        title: "Kültür Sanat Haftası",
        description: "Kampüsümüzde düzenlenecek olan kültür sanat haftasında birbirinden farklı etkinlikler sizleri bekliyor.",
        imageUrl: "https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", 
        buttonText: "Programa Bakın",
        buttonLink: "#"
    },
    {
        id: 3,
        title: "Bilim ve Teknoloji Günleri",
        description: "Yeni teknolojileri keşfedin, bilim atölyelerine katılın ve geleceğin teknolojilerini deneyimleyin.",
        imageUrl: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        buttonText: "Keşfedin",
        buttonLink: "#"
    }
];

/**
 * Etkinlik Yapılandırması
 * Aşağıdaki bilgileri değiştirerek etkinlik listesini güncelleyebilirsiniz
 */
const eventsConfig = [
    {
        id: 1,
        title: "Konser: Müzik Kulübü",
        date: "15 Haziran 2023, 19:00",
        location: "Ana Kampüs Amfi Tiyatro",
        description: "Müzik kulübümüzün hazırladığı yıl sonu konseri için tüm öğrencilerimizi bekliyoruz.",
        imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        registrationDeadline: "13 Haziran 2023"
    },
    {
        id: 2,
        title: "Kariyer Günleri",
        date: "20-22 Haziran 2023, 10:00-16:00",
        location: "Merkez Konferans Salonu",
        description: "Sektörün önde gelen şirketleriyle tanışma ve networking fırsatı yakalayın.",
        imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        registrationDeadline: "18 Haziran 2023"
    },
    {
        id: 3,
        title: "Spor Şenliği",
        date: "25 Haziran 2023, 09:00-17:00",
        location: "Spor Kompleksi",
        description: "Farklı spor dallarında düzenlenecek turnuvalara katılın ve ödüller kazanın.",
        imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        registrationDeadline: "20 Haziran 2023"
    },
    {
        id: 4,
        title: "Yapay Zeka Atölyesi",
        date: "28 Haziran 2023, 13:00-16:00",
        location: "Bilgisayar Mühendisliği Laboratuvarı",
        description: "Yapay zeka temellerini öğrenin ve kendi modelinizi geliştirin.",
        imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        registrationDeadline: "25 Haziran 2023"
    }
];

/**
 * Kulüp Yapılandırması
 * Aşağıdaki bilgileri değiştirerek kulüp listesini güncelleyebilirsiniz
 */
const clubsConfig = [
    {
        id: 1,
        name: "Müzik Kulübü",
        description: "Müzik tutkusunu paylaşan öğrencilerin bir araya geldiği, konserler ve etkinlikler düzenlediği kulüp.",
        logoUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "#",
        mainContent: "Müzik Kulübü, üniversitemizin en aktif kulüplerinden biridir. 2005 yılında kurulan kulübümüz, müzik tutkusuyla bir araya gelen öğrencilerin yeteneklerini sergileyebilecekleri bir platform sunmaktadır. Kulübümüz bünyesinde rock, pop, klasik ve halk müziği gibi farklı türlerde çalışmalar yapılmaktadır.<br><br>Her dönem düzenlediğimiz konserler, kampüs içi ve dışında büyük ilgi görmektedir. Ayrıca müzik teorisi, enstrüman eğitimi ve ses teknolojileri üzerine workshoplar düzenlemekteyiz.<br><br>Kulüp üyeleri arasında amatör ve profesyonel birçok müzisyen bulunmaktadır. Haftada iki gün düzenli olarak prova yapan ekibimize, müziğe ilgi duyan tüm öğrenciler katılabilir."
    },
    {
        id: 2,
        name: "Bilim ve Teknoloji Kulübü",
        description: "Bilim ve teknoloji alanındaki yenilikleri takip eden, projeler üreten ve etkinlikler düzenleyen kulüp.",
        logoUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "#",
        mainContent: "Bilim ve Teknoloji Kulübü, 2008 yılında kurulmuş olup, üniversite öğrencilerinin bilimsel ve teknolojik gelişmeleri yakından takip edebilmesi, bu alanlarda projeler geliştirebilmesi amacıyla faaliyet göstermektedir.<br><br>Kulübümüz bünyesinde robotik, yazılım, yapay zeka ve elektronik alanlarında çalışma grupları bulunmaktadır. Her yıl düzenlediğimiz 'Teknoloji Zirvesi' etkinliğimizde sektörün önde gelen isimleri öğrencilerle buluşmaktadır.<br><br>Ayrıca ulusal ve uluslararası robot yarışmaları, hackathon etkinlikleri ve proje yarışmalarına katılım sağlayarak üniversitemizi başarıyla temsil etmekteyiz. Kulübümüz, teknoloji meraklısı tüm öğrencilere projelerini hayata geçirebilecekleri bir ortam sunmaktadır."
    },
    {
        id: 3,
        name: "Tiyatro Kulübü",
        description: "Tiyatro sanatına ilgi duyan öğrencilerin bir araya geldiği, oyunlar sahneleyip atölyeler düzenlediği kulüp.",
        logoUrl: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "#",
        mainContent: "Tiyatro Kulübü, 1998 yılından bu yana üniversitemizde faaliyet göstermektedir. Kulübümüz, tiyatro sanatına gönül vermiş öğrencilerin bir araya gelerek yeteneklerini keşfetmeleri ve geliştirmeleri için kurulmuştur.<br><br>Her dönem en az bir oyun sahneleyerek hem kampüs içinde hem de çeşitli tiyatro festivallerinde izleyiciyle buluşmaktayız. Klasik ve modern tiyatro eserlerinin yanı sıra, kendi yazdığımız özgün oyunları da repertuvarımıza dahil etmekteyiz.<br><br>Kulübümüz bünyesinde düzenli olarak diksiyon, doğaçlama, sahne teknikleri ve oyunculuk atölyeleri düzenlenmektedir. Ayrıca maske yapımı, kostüm tasarımı ve sahne tasarımı gibi tiyatronun teknik yönleriyle ilgilenen arkadaşlarımız da bulunmaktadır.<br><br>Tiyatroya ilgi duyan ve sahne arkasında veya önünde görev almak isteyen tüm öğrencileri aramızda görmekten mutluluk duyarız."
    },
    {
        id: 4,
        name: "Doğa ve Çevre Kulübü",
        description: "Doğa ve çevre bilincini artırmak için çalışan, doğa yürüyüşleri düzenleyen ve çevre projelerine imza atan kulüp.",
        logoUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "#",
        mainContent: "Doğa ve Çevre Kulübü, 2010 yılında kurulmuş olup, öğrencilerde ve toplumda çevre bilincini artırmak, doğa sevgisini aşılamak amacıyla çalışmalar yürütmektedir.<br><br>Kulübümüz düzenli olarak ağaçlandırma çalışmaları, çevre temizlik etkinlikleri, geri dönüşüm projeleri ve farkındalık kampanyaları düzenlemektedir. Ayrıca her ay farklı bölgelere doğa yürüyüşleri ve kamplar organize ederek, üyelerimizin doğayla iç içe zaman geçirmesini sağlıyoruz.<br><br>'Sıfır Atık' projesi kapsamında kampüsümüzde başlattığımız çalışmalar üniversite yönetimi tarafından da desteklenmekte ve tüm fakültelerde uygulanmaktadır.<br><br>Her sene düzenlediğimiz 'Yeşil Kampüs' sempozyumunda, sürdürülebilirlik ve çevre konularında uzman konuşmacıları ağırlıyoruz. Doğaya ve çevreye duyarlı tüm öğrencileri kulübümüze bekliyoruz."
    },
    {
        id: 5,
        name: "Fotoğrafçılık Kulübü",
        description: "Fotoğraf sanatına ilgi duyan öğrencilerin bir araya geldiği, sergiler açan ve geziler düzenleyen kulüp.",
        logoUrl: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "#",
        mainContent: "Fotoğrafçılık Kulübü, 2006 yılında kurulmuş olup, fotoğraf sanatına ilgi duyan öğrencilerin bilgi ve deneyim paylaşımında bulunabilecekleri bir platform sunmaktadır.<br><br>Kulübümüzde temel fotoğrafçılık eğitiminden başlayarak ileri tekniklere kadar birçok konuda atölyeler düzenlenmektedir. Her dönem farklı temalarda fotoğraf gezileri organize ederek, üyelerimizin çekim pratiği yapmalarını sağlıyoruz.<br><br>Yılda iki kez düzenlediğimiz fotoğraf sergilerimizde, üyelerimizin çalışmalarını geniş bir kitleye ulaştırma imkanı sunuyoruz. Ayrıca ulusal ve uluslararası fotoğraf yarışmalarına katılım konusunda üyelerimizi teşvik ediyor ve destekliyoruz.<br><br>Kulübümüz bünyesinde dijital ve analog fotoğrafçılık, portre çekimi, manzara fotoğrafçılığı, sokak fotoğrafçılığı gibi farklı alanlarda çalışma grupları bulunmaktadır. Fotoğraf sanatına ilgi duyan tüm öğrencileri aramızda görmekten mutluluk duyarız."
    },
    {
        id: 6,
        name: "Spor Kulübü",
        description: "Farklı spor dallarında takımlar kuran, turnuvalar düzenleyen ve spor etkinlikleri organize eden kulüp.",
        logoUrl: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "#",
        mainContent: "Spor Kulübü, 2003 yılında kurulmuş olup, öğrencilerin sportif faaliyetlerini desteklemek ve sağlıklı yaşam bilincini yaygınlaştırmak amacıyla çalışmaktadır.<br><br>Kulübümüz bünyesinde futbol, voleybol, basketbol, tenis, masa tenisi, yüzme, atletizm ve satranç gibi birçok branşta takımlar bulunmaktadır. Bu takımlar hem üniversite içi hem de üniversiteler arası turnuvalarda okulumuzu başarıyla temsil etmektedir.<br><br>Her dönem düzenlediğimiz 'Spor Şenliği' etkinliğimizde farklı fakülteler arası turnuvalar organize etmekte ve kampüs genelinde spor ruhunu canlandırmaktayız.<br><br>Ayrıca profesyonel sporcular ve antrenörler eşliğinde düzenlediğimiz workshoplar ile üyelerimizin teknik ve taktik gelişimlerine katkı sağlamaktayız. Düzenli olarak gerçekleştirdiğimiz sabah koşuları ve outdoor etkinliklerimiz ile aktif yaşamı destekliyoruz.<br><br>Spora ilgi duyan ve herhangi bir branşta kendini geliştirmek isteyen tüm öğrencileri kulübümüze bekliyoruz."
    },
    {
    
]; 