// Toggle form
const toggleBtn = document.getElementById('formToggle');
const contactForm = document.getElementById('contactForm');
const toggleIcon = document.getElementById('toggleIcon');

if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
        const isHidden = contactForm.classList.contains('form-hidden');
        if (isHidden) {
            contactForm.classList.remove('form-hidden');
            toggleIcon.textContent = '▲';
        } else {
            contactForm.classList.add('form-hidden');
            toggleIcon.textContent = '▼';
        }
    });
}

// Form submit → mailto
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const ad = document.getElementById('ad').value;
        const email = document.getElementById('email').value;
        const konu = document.getElementById('konu').value;
        const mesaj = document.getElementById('mesaj').value;

        const seciliIlgiler = Array.from(
            document.querySelectorAll('input[name="ilgi"]:checked')
        ).map(cb => cb.value);

        const ilgiMetni = seciliIlgiler.length > 0
            ? seciliIlgiler.join(', ')
            : 'Seçilmedi';

        const mailBody =
            'Ad Soyad: ' + ad + '\n' +
            'E-posta: ' + email + '\n' +
            'İlgi Alanları: ' + ilgiMetni + '\n' +
            'Konu: ' + konu + '\n\n' +
            'Mesaj:\n' + mesaj;

        const mailtoLink = 'mailto:burakttuzcu@gmail.com' +
            '?subject=' + encodeURIComponent('CV Formu: ' + konu) +
            '&body=' + encodeURIComponent(mailBody);

        window.location.href = mailtoLink;
    });
}
