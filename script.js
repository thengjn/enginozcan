// Translations
const translations = {
    tr: {
        // Header
        subtitle: "siber güvenlik analist adayı",
        status: "çevrimiçi • muhtemelen yeni şeyler öğreniyorum",
        menu: "menü",
        close: "kapat",
        
        // Nav
        navHome: "ana sayfa",
        navAbout: "hakkımda",
        navProjects: "projeler",
        navBlog: "blog",
        navContact: "iletişim",
        
        // Index page
        introP1: "Merhaba, ben Engin. İçeriklerimi ve projelerimi burada bulabilirsin.",
        introP2: "Ayrıca sosyal medya hesaplarım aşağıda.",
        socialTitle: "sosyal-bağlantılar",
        
        // Terminal
        terminal1: " BNP Paribas Cardif'te helpdesk stajyeri olarak çalışıyorum",
        terminal2: " doğayı ve hayvanları seviyorum",
        terminal3: " country rock hayranı",
        terminal4: " part time daytrader ve algotrader",
        
        // About page
        aboutTitle: "hakkımda",
        aboutP1: "Şu anda BNP Paribas Cardif'te Helpdesk Stajyeri olarak çalışıyorum. Kurumsal IT ortamlarında, kullanıcı desteğinde ve sistem operasyonlarında pratik deneyim kazanıyorum.",
        aboutP2: "Boş zamanlarımda TryHackMe ve HackTheBox gibi platformlarda CTF çözüyor, yeni güvenlik araçları öğreniyor ve güvenlik hakkında okumalar yapıyorum. Özellikle web uygulama güvenliği, penetrasyon testi ve güvenlik mimarisi konularına ilgi duyuyorum.",
        aboutP3: "Teknoloji dışında doğayı, yeni yerler keşfetmeyi, kedileri ve iskoç viskisini seviyorum. Country rock müzik dinlemeyi baya severim. Ayrıca part-time olarak daytrading yapıyor ve algoritmik trading stratejileri geliştiriyorum.",
        aboutP4: "Yeni şeyler öğrenmeyi ve bilgimi başkalarıyla paylaşmayı seviyorum. Bu siteyi oluşturmamın sebebi de bu. Evet, claude ile yaptım. Detaylı özgeçmişim için LinkedIn profilime bakabilirsiniz.",
        
        // Projects page
        projectsTitle: "projeler",
        projectDesc1: "Daytrader ve algotrader'lar için gelişmiş algoritmik trading backtesting platformu.",
        projectDesc2: "Bir araba bayiliği için veritabanı yönetim sistemi.",
        
        // Experience
        experienceTitle: "deneyim",
        exp1Date: "2025 - Devam",
        exp1Title: "Helpdesk Stajyeri",
        exp1Desc: "Teknik destek sağlama, IT biletlerini yönetme ve kurumsal IT ortamlarında pratik deneyim kazanma.",
        exp2Date: "2024",
        exp2Title: "Yaz Stajı",
        exp2Desc: "HTML, CSS, JavaScript ve Bootstrap kullanarak bir web sitesi tasarladım. Git/GitHub iş akışını ve proje yapısı geliştirmeyi öğrendim.",
        
        // Contact page
        contactMessage: "Sunucu kiralayıncaya kadar bana aşağıdan ulaşabilirsiniz.",
        
        // Footer
        footer: "© 2026 • claude'a teşekkürler :3"
    },
    en: {
        // Header
        subtitle: "aspiring cyber security analyst",
        status: "online • probably im learning new stuff rn",
        menu: "menu",
        close: "close",
        
        // Nav
        navHome: "home",
        navAbout: "about",
        navProjects: "projects",
        navBlog: "blog",
        navContact: "contact",
        
        // Index page
        introP1: "Hi, im Engin. You can find my content and projects here.",
        introP2: "And also my social media accounts below.",
        socialTitle: "social-links",
        
        // Terminal
        terminal1: " im working as a helpdesk intern at BNP Paribas Cardif",
        terminal2: " i love nature and animals",
        terminal3: " country rock fan",
        terminal4: " part time daytrader and algotrader",
        
        // About page
        aboutTitle: "about-me",
        aboutP1: "Currently i'm working as a Helpdesk Intern at a BNP Paribas Cardif, gaining hands-on experience in enterprise IT environments, user support, and system operations.",
        aboutP2: "In my free time, I solve CTFs on platforms like TryHackMe and HackTheBox, learning new security tools and reading some stuff about security. Im particularly interested in web application security, penetration testing and security architecture.",
        aboutP3: "Outside of tech, I love nature, discovering new places, cats and scotch whisky. I enjoy listening to country rock music. I also do part-time daytrading and developing algorithmic trading strategies.",
        aboutP4: "I love to learn new things and share my knowledge with others. Thats also the reason why i created this site. Yes, i made it with claude. For my detailed resume, you can check my linkedin profile.",
        
        // Projects page
        projectsTitle: "projects",
        projectDesc1: "Advanced algorithmic trading backtesting platform for daytraders and algotraders.",
        projectDesc2: "A database management system for a car dealership.",
        
        // Experience
        experienceTitle: "experience",
        exp1Date: "2025 - Present",
        exp1Title: "Helpdesk Intern",
        exp1Desc: "Providing technical support, managing IT tickets, and gaining hands-on experience in enterprise IT environments.",
        exp2Date: "2024",
        exp2Title: "Summer Intern",
        exp2Desc: "Designed a website using HTML, CSS, JavaScript and Bootstrap. Learned Git/GitHub workflow and project structure development.",
        
        // Contact page
        contactMessage: "You can reach me below until I rent a server.",
        
        // Footer
        footer: "© 2026 • thx to claude :3"
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'en';

// Apply translations
function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'tr' ? 'tr' : 'en';
}

// Language toggle
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update button states
    const buttons = document.querySelectorAll('.lang-toggle button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === lang.toUpperCase()) {
            btn.classList.add('active');
        }
    });
    
    // Apply translations
    applyTranslations(lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial button state
    const buttons = document.querySelectorAll('.lang-toggle button');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === currentLang.toUpperCase()) {
            btn.classList.add('active');
        }
    });
    
    // Apply saved language
    applyTranslations(currentLang);
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Konami code easter egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        document.body.style.animation = 'glitchAnimation 0.5s ease infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
    }
});

// Matrix rain effect on scroll (subtle)
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (Math.abs(currentScroll - lastScroll) > 100) {
        document.body.style.backgroundPosition = `0 ${currentScroll * 0.1}px`;
        lastScroll = currentScroll;
    }
});

// Mobile menu toggle
function toggleMenu() {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    nav.classList.toggle('active');
    
    // Update button text based on language
    const menuText = translations[currentLang].menu;
    const closeText = translations[currentLang].close;
    
    if (nav.classList.contains('active')) {
        menuToggle.innerHTML = `<span class="menu-icon">[x]</span> ${closeText}`;
    } else {
        menuToggle.innerHTML = `<span class="menu-icon">[=]</span> ${menuText}`;
    }
}

// Close menu when clicking a link (mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav');
        const menuToggle = document.querySelector('.menu-toggle');
        if (window.innerWidth <= 600 && nav.classList.contains('active')) {
            nav.classList.remove('active');
            const menuText = translations[currentLang].menu;
            menuToggle.innerHTML = `<span class="menu-icon">[=]</span> ${menuText}`;
        }
    });
});
