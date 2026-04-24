const temaButonu = document.getElementById("temaButonu");
const basvuruFormu = document.getElementById("basvuruFormu");
const temizleButonu = document.getElementById("temizleButonu");
const sonucAlani = document.getElementById("sonucAlani");

// Etkileşim 1: Tema değiştirme
temaButonu.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    this.textContent = document.body.classList.contains("dark-theme")
        ? "Açık Temaya Geç"
        : "Koyu Temaya Geç";
});

// Etkileşim 2: Form özeti oluşturma
basvuruFormu.addEventListener("submit", function (e) {
    e.preventDefault();

    const adSoyad = document.getElementById("adSoyad").value.trim();
    const eposta = document.getElementById("eposta").value.trim();
    const bolum = document.getElementById("bolum").value.trim();
    const sinif = document.getElementById("sinif").value;
    const oturum = document.getElementById("oturum").value;
    const katilimTuru = document.getElementById("katilimTuru").value;
    const mesaj = document.getElementById("mesaj").value.trim();
    const onay = document.getElementById("onayCheckbox").checked;

    if (!adSoyad || !eposta || !bolum || !sinif || !oturum || !katilimTuru) {
        sonucAlani.innerHTML = `
            <div class="alert alert-danger">
                <strong>Hata!</strong> Lütfen tüm zorunlu alanları doldurun.
            </div>`;
        sonucAlani.scrollIntoView({ behavior: "smooth" });
        return;
    }

    if (!onay) {
        sonucAlani.innerHTML = `
            <div class="alert alert-warning">
                <strong>Uyarı!</strong> Devam etmek için onay kutusunu işaretlemeniz gerekmektedir.
            </div>`;
        sonucAlani.scrollIntoView({ behavior: "smooth" });
        return;
    }

    sonucAlani.innerHTML = `
        <div class="card border-success shadow rounded-4">
            <div class="card-header bg-success text-white fw-bold">
                Başvuru Özeti
            </div>
            <div class="card-body">
                <div class="row g-2">
                    <div class="col-sm-6">
                        <p class="mb-1"><span class="text-secondary">Ad Soyad</span></p>
                        <p class="fw-semibold">${adSoyad}</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="mb-1"><span class="text-secondary">E-posta</span></p>
                        <p class="fw-semibold">${eposta}</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="mb-1"><span class="text-secondary">Bölüm</span></p>
                        <p class="fw-semibold">${bolum}</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="mb-1"><span class="text-secondary">Sınıf</span></p>
                        <p class="fw-semibold">${sinif}</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="mb-1"><span class="text-secondary">Katılmak İstediğiniz Oturum</span></p>
                        <p class="fw-semibold">${oturum}</p>
                    </div>
                    <div class="col-sm-6">
                        <p class="mb-1"><span class="text-secondary">Katılım Türü</span></p>
                        <p class="fw-semibold">${katilimTuru}</p>
                    </div>
                    ${mesaj ? `
                    <div class="col-12">
                        <p class="mb-1"><span class="text-secondary">Kısa Mesaj</span></p>
                        <p class="fw-semibold">${mesaj}</p>
                    </div>` : ""}
                </div>
                <div class="alert alert-success mt-3 mb-0">
                    Başvurunuz başarıyla oluşturuldu!
                </div>
            </div>
        </div>`;

    sonucAlani.scrollIntoView({ behavior: "smooth" });
});

// Formu temizle
temizleButonu.addEventListener("click", function () {
    basvuruFormu.reset();
    sonucAlani.innerHTML = `
        <div class="alert alert-info">
            Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.
        </div>`;
});
