const translations = {
    tr: {
        // Nav
        "nav.home": "Ana Sayfa",
        "nav.vision": "Vizyon",
        "nav.air": "Hava",
        "nav.land": "Kara",
        "nav.water": "Su",
        "nav.specs": "Özellikler",
        "nav.brochure": "Broşür",

        // Hero
        "hero.air": "Hava",
        "hero.land": "Kara",
        "hero.water": "Su",
        "hero.download": "Broşürü İndir",

        // Vision
        "vision.title": "Sınırları Aşan <br> <span class='text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500'>Vizyon</span>",
        "vision.desc": "Afyon Kocatepe Üniversitesi takımı tarafından geliştirilen Karabatak projesi, otonom sistemlerin sınırlarını zorlayarak hava, kara ve su ortamlarında kesintisiz operasyon kabiliyeti sunar. Hibrit yapısı sayesinde her türlü zorlu koşulda görevini başarıyla tamamlar.",
        "vision.autonomous": "Tam Otonom",
        "vision.durable": "Dayanıklı",
        "vision.range": "Uzun Menzil",
        "vision.ai": "Yapay Zeka",

        // Air Mode
        "air.title": "Hava Modu",
        "air.subtitle": "Sessiz. Hızlı. Kararlı.",
        "air.desc": "İHA'nın gövdesi, düşük sürtünme ve yüksek kaldırma kapasitesine sahip olacak şekilde tasarlanmıştır. H-Frame yapısının aerodinamik avantajları kullanılarak, hava akışının düzgün bir şekilde yönlendirilmesi sağlanmıştır. Ayrıca, kanatların formu ve yerleşimi stabiliteyi artırarak manevra kabiliyetini geliştirmektedir.",
        "air.time": "Uçuş Süresi",

        // Land Mode
        "land.title": "Kara Modu",
        "land.subtitle": "Sağlam. Güvenilir. Hazır.",
        "land.desc": "İHA'nın kara ortamında hareket edebilmesi için aerodinamik yapı bazında, zemine temas sırasında stabilitenin arttırılması üzerine odaklanılmıştır. Kanatların dış kısmında yer alan kauçuk malzeme, tekerlek görevi görmesi amacıyla seçilmiştir ve karada hareket ederken zemine tutunmayı kolaylaştırır.",
        "land.structure": "Yapı",
        "land.body": "Gövde",
        "land.hybrid": "Hibrit",
        "land.carbon": "Karbon Fiber",

        // Water Mode
        "water.title": "Su Modu",
        "water.subtitle": "Su Üstü. Dinamik.",
        "water.desc": "Su yüzeyinde stabilite ve manevra kolaylığı sağlamak için ayakların uç kısımları sivritilmiş ve aerodinamik verimlilik ön planda tutulmuştur. Arka kanatların 60° dönerek su moduna geçiş yapabilmesi, su yüzeyinde hareket edebilme kabiliyetini artıran önemli bir tasarım özelliğidir.",
        "water.angle": "Dönüş Açısı",
        "water.protection": "Koruma",

        // System Components (New)
        "components.title": "Sistem Bileşenleri",
        "components.desc": "En son teknoloji donanımlar ile güçlendirilmiş hibrit yapı.",
        "comp.fc": "Uçuş Kontrol",
        "comp.fc.desc": "Pixhawk Cube Orange+ & Here4 GPS",
        "comp.computer": "Ana Bilgisayar",
        "comp.computer.desc": "Raspberry Pi 5 (16GB RAM)",
        "comp.camera": "Kamera Sistemi",
        "comp.camera.desc": "IMX219-160 8MP IR-CUT",
        "comp.telemetry": "Telemetri",
        "comp.telemetry.desc": "3DR V5 433MHz Uzun Menzil",
        "comp.sensors": "Sensörler",
        "comp.sensors.desc": "URM37 Ultrasonik & IMU",
        "comp.battery": "Güç Kaynağı",
        "comp.battery.desc": "Leopard Power 10000mAh 6S",
        "comp.actuators": "Eyleyiciler",
        "comp.actuators.desc": "Tower Pro MG946 & DC Motorlar",
        "comp.material": "Malzeme",
        "comp.material.desc": "eSun PLA+ & Karbon Fiber",

        // Software & AI (New)
        "software.title": "Yazılım ve Yapay Zeka",
        "software.desc": "Gelişmiş algoritmalar ve güvenli veri iletişimi.",
        "soft.ros": "ROS2 & PX4",
        "soft.ros.desc": "Otonom uçuş ve görev yönetimi entegrasyonu.",
        "soft.vision": "Görüntü İşleme",
        "soft.vision.desc": "OpenCV ile nesne tespiti ve takip.",
        "soft.crypto": "Veri Güvenliği",
        "soft.crypto.desc": "CryptoJS ile uçtan uca şifreleme (AES-256).",
        "soft.ui": "Arayüz",
        "soft.ui.desc": "QGroundControl, Mapbox ve Leaflet.js.",
        "soft.algo": "Algoritmalar",
        "soft.algo.desc": "PID Kontrol ve Kalman Filtresi.",
        "soft.sim": "Simülasyon",
        "soft.sim.desc": "Gazebo ve SITL ile sanal test ortamı.",

        // Specs
        "specs.title": "Teknik Özellikler",
        "specs.takeoff_weight": "Kalkış Ağırlığı",
        "specs.empty_weight": "Boş Ağırlık",
        "specs.battery": "Batarya",
        "specs.flight_time": "Uçuş Süresi",
        "specs.thrust": "Toplam İtki",
        "specs.motors": "Motorlar",

        // Sponsor
        "sponsor.title": "Geleceğe Ortak Olun",
        "sponsor.desc": "Karabatak projesi, yerli ve milli teknoloji hamlesinin bir parçası olarak sınırları zorluyor. Bu vizyoner yolculukta bize destek vererek teknolojinin geleceğine imza atın.",
        "sponsor.btn_sponsor": "Sponsor Olun",
        "sponsor.btn_contact": "İletişime Geçin",

        // Scenarios
        "scenarios.title": "Operasyon Senaryoları",
        "scenarios.rescue.title": "Arama & Kurtarma",
        "scenarios.rescue.desc": "Zorlu hava koşullarında ve gece operasyonlarında termal görüş ile hayat kurtarır.",
        "scenarios.inspection.title": "Endüstriyel Denetim",
        "scenarios.inspection.desc": "Petrol platformları ve enerji hatlarını güvenli mesafeden yüksek çözünürlükle denetler.",
        "scenarios.delivery.title": "Acil Teslimat",
        "scenarios.delivery.desc": "Afet bölgelerine tıbbi malzeme ve acil yardım kitlerini hızla ulaştırır.",

        // Story Mode
        "story.camera.title": "Gelişmiş Gözlem",
        "story.camera.desc": "Yüksek çözünürlüklü sensörler ve akıllı görüntü işleme.",
        "story.motor.title": "Güçlü İtki",
        "story.motor.desc": "Zorlu koşullara dayanıklı, yüksek verimli fırçasız motorlar.",
        "story.body.title": "Aerodinamik Gövde",
        "story.body.desc": "Hafif ve dayanıklı karbon fiber kompozit yapı.",

        // Footer
        "footer.contact": "İletişim",
        "footer.download": "Tanıtım Dosyasını İndir (PDF)",
        "footer.rights": "&copy; 2025 Karabatak UAV Project. Tüm hakları saklıdır."
    },
    en: {
        // Nav
        "nav.home": "Home",
        "nav.vision": "Vision",
        "nav.air": "Air",
        "nav.land": "Land",
        "nav.water": "Water",
        "nav.specs": "Specs",
        "nav.brochure": "Brochure",

        // Hero
        "hero.air": "Air",
        "hero.land": "Land",
        "hero.water": "Water",
        "hero.download": "Download Brochure",

        // Vision
        "vision.title": "Vision Beyond <br> <span class='text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500'>Borders</span>",
        "vision.desc": "Developed by the Afyon Kocatepe University team, the Karabatak project pushes the boundaries of autonomous systems, offering seamless operational capability in air, land, and water environments. Its hybrid structure ensures mission success in all challenging conditions.",
        "vision.autonomous": "Fully Autonomous",
        "vision.durable": "Durable",
        "vision.range": "Long Range",
        "vision.ai": "AI Powered",

        // Air Mode
        "air.title": "Air Mode",
        "air.subtitle": "Silent. Fast. Decisive.",
        "air.desc": "Designed for low drag and high lift capability. Utilizing the aerodynamic advantages of the H-Frame structure, airflow is guided smoothly. The form and placement of the wings enhance maneuverability by increasing stability.",
        "air.time": "Flight Time",

        // Land Mode
        "land.title": "Land Mode",
        "land.subtitle": "Rugged. Reliable. Ready.",
        "land.desc": "Focused on increasing stability during ground contact. Rubber material on the outer part of the wings acts as wheels, facilitating traction on the ground. This ensures stable movement on land with less energy consumption.",
        "land.structure": "Structure",
        "land.body": "Body",
        "land.hybrid": "Hybrid",
        "land.carbon": "Carbon Fiber",

        // Water Mode
        "water.title": "Water Mode",
        "water.subtitle": "Surface. Dynamic.",
        "water.desc": "Designed to ensure minimum drag while moving on the water surface. The rear wings rotate 60° to transition to water mode, a key design feature that enhances movement capability on the water surface.",
        "water.angle": "Rotation Angle",
        "water.protection": "Protection",

        // System Components (New)
        "components.title": "System Components",
        "components.desc": "Hybrid structure powered by state-of-the-art hardware.",
        "comp.fc": "Flight Control",
        "comp.fc.desc": "Pixhawk Cube Orange+ & Here4 GPS",
        "comp.computer": "Main Computer",
        "comp.computer.desc": "Raspberry Pi 5 (16GB RAM)",
        "comp.camera": "Camera System",
        "comp.camera.desc": "IMX219-160 8MP IR-CUT",
        "comp.telemetry": "Telemetry",
        "comp.telemetry.desc": "3DR V5 433MHz Long Range",
        "comp.sensors": "Sensors",
        "comp.sensors.desc": "URM37 Ultrasonic & IMU",
        "comp.battery": "Power Source",
        "comp.battery.desc": "Leopard Power 10000mAh 6S",
        "comp.actuators": "Actuators",
        "comp.actuators.desc": "Tower Pro MG946 & DC Motors",
        "comp.material": "Material",
        "comp.material.desc": "eSun PLA+ & Carbon Fiber",

        // Software & AI (New)
        "software.title": "Software & Intelligence",
        "software.desc": "Advanced algorithms and secure data communication.",
        "soft.ros": "ROS2 & PX4",
        "soft.ros.desc": "Autonomous flight and mission management integration.",
        "soft.vision": "Computer Vision",
        "soft.vision.desc": "Object detection and tracking with OpenCV.",
        "soft.crypto": "Data Security",
        "soft.crypto.desc": "End-to-End encryption with CryptoJS (AES-256).",
        "soft.ui": "Interface",
        "soft.ui.desc": "QGroundControl, Mapbox and Leaflet.js.",
        "soft.algo": "Algorithms",
        "soft.algo.desc": "PID Control and Kalman Filter.",
        "soft.sim": "Simulation",
        "soft.sim.desc": "Virtual testing with Gazebo and SITL.",

        // Specs
        "specs.title": "Technical Specifications",
        "specs.takeoff_weight": "Take-off Weight",
        "specs.empty_weight": "Empty Weight",
        "specs.battery": "Battery",
        "specs.flight_time": "Flight Time",
        "specs.thrust": "Total Thrust",
        "specs.motors": "Motors",

        // Sponsor
        "sponsor.title": "Partner with the Future",
        "sponsor.desc": "The Karabatak project pushes boundaries as part of the national technology initiative. Make your mark on the future of technology by supporting us on this visionary journey.",
        "sponsor.btn_sponsor": "Become a Sponsor",
        "sponsor.btn_contact": "Contact Us",

        // Scenarios
        "scenarios.title": "Mission Scenarios",
        "scenarios.rescue.title": "Search & Rescue",
        "scenarios.rescue.desc": "Saves lives in harsh weather and night operations with thermal vision.",
        "scenarios.inspection.title": "Industrial Inspection",
        "scenarios.inspection.desc": "Inspects oil rigs and power lines from a safe distance with high resolution.",
        "scenarios.delivery.title": "Emergency Delivery",
        "scenarios.delivery.desc": "Rapidly delivers medical supplies and emergency kits to disaster zones.",

        // Story Mode
        "story.camera.title": "Advanced Vision",
        "story.camera.desc": "High-resolution sensors and intelligent image processing.",
        "story.motor.title": "Powerful Thrust",
        "story.motor.desc": "High-efficiency brushless motors built for harsh conditions.",
        "story.body.title": "Aerodynamic Body",
        "story.body.desc": "Lightweight and durable carbon fiber composite structure.",

        // Footer
        "footer.contact": "Contact",
        "footer.download": "Download Brochure (PDF)",
        "footer.rights": "&copy; 2025 Karabatak UAV Project. All rights reserved."
    }
};
