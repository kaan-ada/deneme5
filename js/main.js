// Mobil menü aç/kapat
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('mobile-menu-close');

    function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('animate-fade-in');
        document.body.style.overflow = '';
    }

    if (menuBtn && mobileMenu && closeBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('animate-fade-in');
            document.body.style.overflow = 'hidden';
        });
        closeBtn.addEventListener('click', closeMobileMenu);
        document.querySelectorAll('#mobile-menu nav a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // Fade-in animasyonu
    document.querySelectorAll('section, header').forEach(function (el, i) {
        el.style.opacity = 0;
        el.style.transform = 'translateY(10px)';
        setTimeout(() => {
            el.style.transition = 'all 0.8s cubic-bezier(.4,0,.2,1)';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 200 + i * 150);
    });

    // Skill bar animasyonu
    document.querySelectorAll('.skill-progress').forEach(function (bar) {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 1.2s cubic-bezier(.4,0,.2,1)';
            bar.style.width = width;
        }, 500);
    });

    // Sayfa yüklendiğinde hash varsa scroll'u en üste al
    if (window.location.hash) {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 10);
    }

    // Proje kartlarına hover animasyonu
    document.querySelectorAll('.portfolio-card').forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            card.style.boxShadow = '0 20px 40px 0 rgba(59,130,246,0.10)';
            card.style.transform = 'translateY(-8px) scale(1.03)';
        });
        card.addEventListener('mouseleave', function () {
            card.style.boxShadow = '';
            card.style.transform = '';
        });
    });

    // Typewriter efekti (Hoşgeldiniz yazısı için) - Ortada ve sabit kalsın
    const welcomeEl = document.querySelector('.typewriter');
    if (welcomeEl) {
        const text = "TK Studio'ya Hoşgeldiniz";
        let i = 0;
        welcomeEl.textContent = "";
        welcomeEl.style.whiteSpace = "nowrap"; // Tek satırda kalsın
        function typeWriter() {
            if (i < text.length) {
                welcomeEl.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 70);
            }
        }
        typeWriter();
    }
});

// Navbar scroll shadow ve arka plan efekti
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 10) {
            nav.classList.add('bg-white', 'shadow-lg', 'backdrop-blur', 'bg-opacity-90');
        } else {
            nav.classList.remove('shadow-lg', 'backdrop-blur', 'bg-opacity-90');
        }
    }
});

// Mouse trail effect
const cursorTrail = document.getElementById('cursor-trail');
if (cursorTrail) {
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorTrail.style.left = mouseX + 'px';
        cursorTrail.style.top = mouseY + 'px';
    });
    // Ekstra trail efektleri eklemek isterseniz buraya ekleyebilirsiniz
}

// "Nasıl Çalışıyoruz" kutularına animasyon ekle
document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('#how-we-work .bg-gray-50');
    steps.forEach((step, i) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(40px)';
        step.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1), box-shadow 0.5s, background 0.5s';

        // Daha hoş bir hover animasyonu: hafif büyüme, hafif mavi arka plan ve yumuşak gölge
        step.addEventListener('mouseenter', function () {
            step.style.boxShadow = '0 16px 40px 0 rgba(59,130,246,0.13)';
            step.style.transform = 'translateY(-4px) scale(1.035)';
            step.style.background = 'linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 100%)';
        });
        step.addEventListener('mouseleave', function () {
            step.style.boxShadow = '';
            step.style.transform = 'translateY(0)';
            step.style.background = '';
        });
    });

    function animateSteps() {
        const section = document.getElementById('how-we-work');
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            steps.forEach((step, i) => {
                setTimeout(() => {
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0)';
                }, i * 180);
            });
            window.removeEventListener('scroll', animateSteps);
        }
    }

    window.addEventListener('scroll', animateSteps);
    animateSteps();
});

// İletişim kutusuna animasyon ekle
document.addEventListener('DOMContentLoaded', function () {
    const contactSection = document.querySelector('#contact .container');
    if (contactSection) {
        contactSection.style.opacity = '0';
        contactSection.style.transform = 'translateY(40px)';
        contactSection.style.transition = 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)';
        function animateContact() {
            const rect = contactSection.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                contactSection.style.opacity = '1';
                contactSection.style.transform = 'translateY(0)';
                window.removeEventListener('scroll', animateContact);
            }
        }
        window.addEventListener('scroll', animateContact);
        animateContact();

        // WhatsApp butonuna daha modern bir hover animasyonu
        const whatsappBtn = contactSection.querySelector('a.bg-green-500');
        if (whatsappBtn) {
            whatsappBtn.style.transition = 'box-shadow 0.4s cubic-bezier(.4,0,.2,1), background 0.4s, color 0.4s, transform 0.4s';
            whatsappBtn.addEventListener('mouseenter', function () {
                whatsappBtn.style.background = 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)';
                whatsappBtn.style.color = '#fff';
                whatsappBtn.style.boxShadow = '0 8px 32px 0 rgba(34,197,94,0.18), 0 0 0 4px #bbf7d0';
                whatsappBtn.style.transform = 'scale(1.08)';
            });
            whatsappBtn.addEventListener('mouseleave', function () {
                whatsappBtn.style.background = '';
                whatsappBtn.style.color = '';
                whatsappBtn.style.boxShadow = '';
                whatsappBtn.style.transform = 'scale(1)';
            });
        }
    }
});