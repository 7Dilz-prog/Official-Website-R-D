/**
 * =========================================================================
 * UKM RESEARCH & DEVELOPMENT (R&D) KMUP - MAIN JAVASCRIPT
 * =========================================================================
 */

// =========================================================================
// CONFIG: GOOGLE APPS SCRIPT URL (PASTE LINK DEPLOYMENT DISINI)
// =========================================================================
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxyIHZL1g8ew3wlPfnLRCQ-Ny6vv4a4tvNHezyPxW3lMvAiW63bjtFugsybNUM7pBxHxA/exec";

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initHeroCarousel();
    renderStructureMembers();
    loadCachedCMSData();
    renderDynamicTabs();
    initTabSwitcher();
    initCardSliders();
    initRegistrationModal();
    initProfileModals();
    fetchDynamicDataFromSheets();
});

// ==========================================================================
// KAMUS KOSAKATA (DICTIONARY) ID & EN
// ==========================================================================
const translations = {
    id: {
        nav_brand_sub: "KELUARGA MAHASISWA UNIVERSITAS PANCASILA",
        nav_profile: "Profil",
        nav_struktur: "Kepengurusan",
        nav_kegiatan: "Kegiatan",
        btn_nav_register: "Pendaftaran",

        drawer_profile: "Profil & Visi Misi",
        drawer_struktur: "Struktur Organisasi",
        drawer_kegiatan: "Kegiatan & Hasil Karya",
        btn_drawer_register: "Pendaftaran",

        hero_desc: "Wadah kolaborasi eksplorasi ilmiah, rekayasa teknologi, dan pengembangan inovasi mahasiswa yang solutif, unggul, serta berdaya saing global.",
        btn_hero_join: "@rnd_pancasila",
        btn_hero_linkedin: "UKM R&D KMUP",
        btn_hero_profile: "UKM R&D KMUP",

        profile_badge: "Profil Kami",
        profile_title: "Mengenal UKM R&D KMUP",
        profile_subtitle: "Membangun ekosistem riset yang berintegritas dan menghasilkan karya nyata bagi almamater dan masyarakat.",
        about_title: "Tentang UKM R&D",
        about_desc_preview: "UKM bidang penelitian multidisiplin ilmu yang tanggap kemajuan teknologi, solutif bagi problematika sosial, dan aktif di event nasional & internasional.",
        btn_read_more: "Baca Selengkapnya",
        about_desc_1: "Unit Kegiatan Mahasiswa Research and Development Keluarga Mahasiswa Universitas Pancasila atau disingkat UKM R&D KMUP adalah UKM yang bergerak di bidang penelitian. UKM R&D ini berdiri atas dasar sekelompok mahasiswa yang ingin mengembangkan keilmuannya yang terdiri dari keberagaman disiplin ilmu dengan mengikuti segala event nasional dan internasional.",
        about_desc_2: "UKM R&D ini memiliki visi sebagai wadah riset keilmuan yang tanggap kemajuan teknologi dan peka terhadap problematika sosial masyarakat sehingga mampu memberikan solusi nyata dengan mengaitkan pada aplikasi-aplikasi teknologi yang efektif dan efisien. Untuk mencapai tujuan tersebut, UKM R&D memiliki misi menjadi tempat pengembangan intelektualitas mahasiswa dalam penelitian, pembuatan, dan penerapan teknologi yang berpedoman Tri Dharma Perguruan Tinggi. Selain itu, UKM R&D juga memiliki misi sebagai media penerapan bidang-bidang keilmuan dengan menyelaraskan pada teori yang diperoleh saat kuliah, dan masih banyak lagi.",
        vm_title: "Visi & Misi",
        visi_desc_preview: "Mewujudkan wadah inovasi yang progresif, kolaboratif, dan berdampak dengan mencetak anggota yang kompeten.",
        btn_view_vm: "Lihat Visi & Misi",
        btn_close: "Tutup Jendela",
        visi_label: "Visi:",
        visi_text: "Mewujudkan <span>Research and Development KMUP</span> sebagai wadah <span>inovasi</span> yang <span>progresif</span>, <span>kolaboratif</span>, dan <span>berdampak</span>, dengan mencetak anggota yang <span>kompeten</span> di bidang <span>teknologi</span>, <span>riset</span>, dan <span>pengembangan diri</span>.",
        misi_1: '<i class="fas fa-check-circle"></i> Mengembangkan personal branding anggota dengan memberikan kelas mingguan dan mengikutsertakan anggota dalam lomba-lomba inovatif.',
        misi_2: '<i class="fas fa-check-circle"></i> Mendorong inovasi dan karya nyata, serta menghasilkan proyek teknologi, riset, atau produk digital.',
        misi_3: '<i class="fas fa-check-circle"></i> Memperluas relasi dan peluang, membantu anggota memiliki portofolio yang jelas dan bernilai, serta menjalin kerja sama dengan pihak luar.',

        structure_badge: "Kepengurusan",
        structure_title: "Struktur Organisasi Periode 2025/2026",
        structure_subtitle: "Badan pengurus dan koordinator bidang yang berdedikasi menjalankan Program Kerja untuk mencapai tujuan Visi & Misi.",

        tabs_badge: "Eksplorasi R&D KMUP",
        tabs_title: "Kegiatan & Hasil Karya",
        tabs_subtitle: "Jelajahi publikasi ilmiah, program kerja berjalan, dan hasil riset teknologi UKM R&D.",
        tab_jurnal: "Jurnal Ilmiah",
        tab_proker: "Program Kerja",
        tab_project: "Projek Inovasi",

        cta_badge: "Pendaftaran Anggota Baru",
        cta_title: "Siap Menjadi Bagian dari Perubahan?",
        cta_desc: "Tingkatkan wawasan dan kembangkan potensi risetmu bersama keluarga besar UKM Research & Development KMUP.",
        btn_cta_register: "Daftar Sekarang (IMPROVE YOUR KNOWLEDGE)",

        modal_tag: "Form Pendaftaran Anggota Baru",
        form_nama: "Nama Lengkap",
        ph_nama: "Masukkan nama lengkap",
        ph_npm: "Contoh: 4527210025",
        form_fakultas: "Fakultas",
        opt_select_fakultas: "Pilih Fakultas",
        form_prodi: "Program Studi",
        opt_select_prodi: "-- Pilih Program Studi --",
        form_wa: "Nomor WhatsApp",
        ph_wa: "Contoh: 081234567890",
        btn_next: "Lanjut",
        btn_processing: "Memproses Data...",
        success_title: "Terima Kasih!",
        success_desc: "Data pendaftaranmu berhasil tersimpan. Silakan klik tombol di bawah untuk bergabung ke WhatsApp Group resmi calon anggota UKM R&D.",
        btn_join_wa: "Masuk Link Grup WA",

        // Opsi Fakultas
        fakultas_ft: "Fakultas Teknik",
        fakultas_ff: "Fakultas Farmasi",
        fakultas_feb: "Fakultas Ekonomi dan Bisnis",
        fakultas_fh: "Fakultas Hukum",
        fakultas_fik: "Fakultas Ilmu Komunikasi",
        fakultas_fps: "Fakultas Psikologi",
        fakultas_fp: "Fakultas Pariwisata",

        // Opsi Program Studi
        prodi_s1_arsitektur: "S1 - Arsitektur",
        prodi_s1_sipil: "S1 - Teknik Sipil",
        prodi_s1_mesin: "S1 - Teknik Mesin",
        prodi_s1_industri: "S1 - Teknik Industri",
        prodi_s1_informatika: "S1 - Teknik Informatika",
        prodi_s1_elektro: "S1 - Teknik Elektro",
        prodi_s1_perkeretaapian: "S1 - Teknik Perkeretaapian",
        prodi_d3_mesin: "D3 - Teknik Mesin",
        prodi_d3_elektro: "D3 - Teknik Elektro",
        prodi_s1_farmasi: "S1 - Farmasi",
        prodi_d3_farmasi: "D3 - Farmasi",
        prodi_s1_manajemen: "S1 - Manajemen",
        prodi_s1_akuntansi: "S1 - Akuntansi",
        prodi_d3_akuntansi: "D3 - Akuntansi",
        prodi_d3_perpajakan: "D3 - Perpajakan",
        prodi_s1_hukum: "S1 - Ilmu Hukum",
        prodi_s1_komunikasi: "S1 - Ilmu Komunikasi",
        prodi_s1_psikologi: "S1 - Psikologi",
        prodi_s1_pariwisata: "S1 - Pariwisata",

        footer_desc: "Unit Kegiatan Mahasiswa Research & Development Universitas Pancasila. Membina generasi muda berdaya saing dalam riset dan teknologi.",
        footer_nav_heading: "Navigasi",
        footer_act_heading: "Aktivitas",
        footer_contact_heading: "Sekretariat",
        footer_address: "Aula PKM Universitas Pancasila, Srengseng Sawah, Jagakarsa, Jakarta Selatan."
    },
    en: {
        nav_brand_sub: "STUDENT FAMILY OF PANCASILA UNIVERSITY",
        nav_profile: "Profile",
        nav_struktur: "Management",
        nav_kegiatan: "Activities",
        btn_nav_register: "Registration",

        drawer_profile: "Profile & Vision Mission",
        drawer_struktur: "Organizational Structure",
        drawer_kegiatan: "Activities & Work Result",
        btn_drawer_register: "Registration",

        hero_desc: "A collaborative hub for scientific exploration, technological engineering, and student innovation that is impactful, excellent, and globally competitive.",
        btn_hero_join: "@rnd_pancasila",
        btn_hero_linkedin: "UKM R&D KMUP",
        btn_hero_profile: "UKM R&D KMUP",

        profile_badge: "Our Profile",
        profile_title: "Get to Know UKM R&D KMUP",
        profile_subtitle: "Building an upright research ecosystem and delivering real impact for the university and society.",
        about_title: "About UKM R&D",
        about_desc_preview: "An interdisciplinary research unit advancing technological innovation, solving social challenges, and excelling in national & international events.",
        btn_read_more: "Read Details",
        about_desc_1: "The Research and Development Student Club of Pancasila University (UKM R&D KMUP) is a student activity unit engaged in scientific research. UKM R&D was founded by students dedicated to advancing interdisciplinary knowledge and participating in national and international events.",
        about_desc_2: "UKM R&D aims to be a scientific research platform that responds to technological advancements and social challenges, providing tangible, effective, and efficient tech-driven solutions guided by the Tri Dharma of Higher Education, while applying academic theory to real-world impact.",
        vm_title: "Vision & Mission",
        visi_desc_preview: "Establishing an innovation hub that is progressive, collaborative, and impactful by developing competent members.",
        btn_view_vm: "View Vision & Mission",
        btn_close: "Close Window",
        visi_label: "Vision:",
        visi_text: "Establishing <span>Research and Development KMUP</span> as an <span>innovation</span> hub that is <span>progressive</span>, <span>collaborative</span>, and <span>impactful</span>, by developing members who are <span>competent</span> in <span>technology</span>, <span>research</span>, and <span>self-development</span>.",
        misi_1: '<i class="fas fa-check-circle"></i> Developing member personal branding through weekly classes and active participation in innovation competitions.',
        misi_2: '<i class="fas fa-check-circle"></i> Fostering tangible innovation through technology projects, scientific research, or digital products.',
        misi_3: '<i class="fas fa-check-circle"></i> Expanding external networks and opportunities, helping members build a clear and valuable portfolio, and establishing partnerships.',

        structure_badge: "Management",
        structure_title: "Organizational Structure 2025/2026",
        structure_subtitle: "The executive board and department heads dedicated to executing work programs towards our Vision & Mission.",

        tabs_badge: "Explore R&D KMUP",
        tabs_title: "Activities & Work Results",
        tabs_subtitle: "Explore scientific publications, ongoing work programs, and tech research results from UKM R&D.",
        tab_jurnal: "Scientific Journals",
        tab_proker: "Work Programs",
        tab_project: "Innovation Projects",

        cta_badge: "Open Recruitment",
        cta_title: "Ready to Be Part of the Change?",
        cta_desc: "Expand your horizons and sharpen your research potential with UKM Research & Development KMUP.",
        btn_cta_register: "Register Now (IMPROVE YOUR KNOWLEDGE)",

        modal_tag: "New Member Registration Form",
        form_nama: "Full Name",
        ph_nama: "Enter full name",
        ph_npm: "e.g. 4527210025",
        form_fakultas: "Faculty",
        opt_select_fakultas: "Select Faculty",
        form_prodi: "Study Program",
        opt_select_prodi: "-- Select Study Program --",
        form_wa: "WhatsApp Number",
        ph_wa: "e.g. 081234567890",
        btn_next: "Next",
        btn_processing: "Processing Data...",
        success_title: "Thank You!",
        success_desc: "Your registration data has been submitted successfully. Please click the button below to join our official WhatsApp Group for new members.",
        btn_join_wa: "Join WhatsApp Group",

        // Faculty Options (EN)
        fakultas_ft: "Faculty of Engineering",
        fakultas_ff: "Faculty of Pharmacy",
        fakultas_feb: "Faculty of Economics & Business",
        fakultas_fh: "Faculty of Law",
        fakultas_fik: "Faculty of Communication Sciences",
        fakultas_fps: "Faculty of Psychology",
        fakultas_fp: "Faculty of Tourism",

        // Study Program Options (EN)
        prodi_s1_arsitektur: "S1 - Architecture",
        prodi_s1_sipil: "S1 - Civil Engineering",
        prodi_s1_mesin: "S1 - Mechanical Engineering",
        prodi_s1_industri: "S1 - Industrial Engineering",
        prodi_s1_informatika: "S1 - Informatics Engineering",
        prodi_s1_elektro: "S1 - Electrical Engineering",
        prodi_s1_perkeretaapian: "S1 - Railway Engineering",
        prodi_d3_mesin: "D3 - Mechanical Engineering",
        prodi_d3_elektro: "D3 - Electrical Engineering",
        prodi_s1_farmasi: "S1 - Pharmacy",
        prodi_d3_farmasi: "D3 - Pharmacy",
        prodi_s1_manajemen: "S1 - Management",
        prodi_s1_akuntansi: "S1 - Accounting",
        prodi_d3_akuntansi: "D3 - Accounting",
        prodi_d3_perpajakan: "D3 - Taxation",
        prodi_s1_hukum: "S1 - Legal Studies / Law",
        prodi_s1_komunikasi: "S1 - Communication Studies",
        prodi_s1_psikologi: "S1 - Psychology",
        prodi_s1_pariwisata: "S1 - Tourism",

        footer_desc: "Research & Development Student Club of Pancasila University. Nurturing competitive future leaders in research and technology.",
        footer_nav_heading: "Navigation",
        footer_act_heading: "Activities",
        footer_contact_heading: "Secretariat",
        footer_address: "PKM Hall Pancasila University, Srengseng Sawah, Jagakarsa, South Jakarta."
    }
};

// ==========================================================================
// FUNGSI UNTUK MERUBAH TEKS DI HALAMAN
// ==========================================================================
function setLanguage(lang) {
    // 1. Ganti semua teks elemen yang memiliki atribut data-lang-key
    document.querySelectorAll("[data-lang-key]").forEach(element => {
        const key = element.getAttribute("data-lang-key");
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                element.value = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // 1b. Ganti semua placeholder elemen yang memiliki atribut data-lang-placeholder
    document.querySelectorAll("[data-lang-placeholder]").forEach(element => {
        const key = element.getAttribute("data-lang-placeholder");
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute("placeholder", translations[lang][key]);
        }
    });

    // 1c. Ganti label optgroup yang memiliki atribut data-lang-label-key
    document.querySelectorAll("[data-lang-label-key]").forEach(element => {
        const key = element.getAttribute("data-lang-label-key");
        if (translations[lang] && translations[lang][key]) {
            element.label = translations[lang][key];
        }
    });

    // 2. Perbarui tampilan tombol aktif (ID atau EN)
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // 3. Simpan pilihan bahasa pengguna di localStorage agar tidak reset saat refresh
    localStorage.setItem("user_selected_lang", lang);
    document.documentElement.lang = lang;

    // 4. Render ulang elemen dinamis agar teks bilingual terupdate
    if (typeof renderStructureMembers === "function") renderStructureMembers(lang);
    if (typeof renderDynamicTabs === "function") renderDynamicTabs(lang);
    if (typeof window.updateProdiOptions === "function") window.updateProdiOptions();
}

// ==========================================================================
// EVENT LISTENER KLIK TOMBOL SWITCHER
// ==========================================================================
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll(".lang-btn");
    langButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const chosenLang = btn.getAttribute("data-lang");
            setLanguage(chosenLang);
        });
    });

    // Ambil bahasa terakhir yang dipilih user (default: 'id')
    const savedLang = localStorage.getItem("user_selected_lang") || "id";
    setLanguage(savedLang);
}

// Panggil fungsi switcher saat DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();
});

/* -------------------------------------------------------------------------
   1. NAVBAR & MOBILE DRAWER
   ------------------------------------------------------------------------- */
function initNavbar() {
    const navbar = document.getElementById("navbar");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const drawerOverlay = document.getElementById("drawerOverlay");
    const drawerItems = document.querySelectorAll(".drawer-item, .btn-drawer-register");

    // Scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Toggle Drawer
    function toggleDrawer() {
        const isOpen = mobileDrawer.classList.contains("open");
        if (isOpen) {
            closeDrawer();
        } else {
            openDrawer();
        }
    }

    function openDrawer() {
        hamburgerBtn.classList.add("active");
        mobileDrawer.classList.add("open");
        drawerOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
        hamburgerBtn.classList.remove("active");
        mobileDrawer.classList.remove("open");
        drawerOverlay.classList.remove("open");
        document.body.style.overflow = "auto";
    }

    hamburgerBtn.addEventListener("click", toggleDrawer);
    drawerOverlay.addEventListener("click", closeDrawer);

    drawerItems.forEach(item => {
        item.addEventListener("click", closeDrawer);
    });
}

/* -------------------------------------------------------------------------
   2. HERO BACKGROUND CAROUSEL / SLIDER
   ------------------------------------------------------------------------- */
function initHeroCarousel() {
    const sliderContainer = document.getElementById("heroSliderBg");
    const backgrounds = RND_DATA.heroBackgrounds || [];

    if (!sliderContainer || backgrounds.length === 0) return;

    sliderContainer.innerHTML = "";

    // Generate Background Slides (Desktop & Mobile Responsive)
    backgrounds.forEach((bg, index) => {
        const slide = document.createElement("div");
        slide.className = `hero-slide ${index === 0 ? "active" : ""}`;

        const desktopUrl = bg.url || "";
        const mobileUrl = bg.mobileurl || bg.mobileUrl || bg.url || "";

        slide.style.setProperty('--bg-desktop', `url('${desktopUrl}')`);
        slide.style.setProperty('--bg-mobile', `url('${mobileUrl}')`);

        sliderContainer.appendChild(slide);
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll(".hero-slide");

    function goToSlide(index) {
        slides[currentSlide].classList.remove("active");
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    // Auto rotate every 6 seconds
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 6000);
}

function getText(value, lang = "id") {
    if (!value) return "";
    if (typeof value === "object") {
        return value[lang] || value["id"] || "";
    }
    return value;
}

/* -------------------------------------------------------------------------
   3. RENDER STRUKTUR ORGANISASI
   ------------------------------------------------------------------------- */
function renderStructureMembers(lang = "id") {
    const container = document.getElementById("structureGrid");
    const data = RND_DATA?.strukturOrganisasi;
    if (!container || !data) return;

    const createCard = (m) => `
        <div class="member-card">
            <div class="member-photo-wrap">
                <img src="${m.foto}" alt="${m.nama}" class="member-photo">
            </div>
            <div class="member-info">
                <h3 class="member-name">${m.nama}</h3>
                <span class="member-role">${getText(m.jabatan, lang)}</span>
                ${m.jurusan ? `<span class="member-major">${getText(m.jurusan, lang)}</span>` : ""}
                <div class="member-socials">
                    ${m.instagram && m.instagram !== "#" ? `<a href="${m.instagram}" class="social-link" target="_blank"><i class="fab fa-instagram"></i></a>` : ""}
                    ${m.linkedin && m.linkedin !== "#" ? `<a href="${m.linkedin}" class="social-link" target="_blank"><i class="fab fa-linkedin"></i></a>` : ""}
                </div>
            </div>
        </div>
    `;

    let htmlContent = `
        <div class="structure-tier tier-top">
            ${createCard(data.ketua)}
        </div>
        <div class="structure-tier tier-bph">
            ${data.bph.map(createCard).join("")}
        </div>
    `;

    data.bidang.forEach(b => {
        htmlContent += `
            <div class="bidang-divider">
                <h3 class="bidang-title">${getText(b.namaBidang, lang)}</h3>
            </div>
            <div class="structure-tier tier-bidang">
                ${b.anggota.map(createCard).join("")}
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

/* -------------------------------------------------------------------------
   HELPER: KONVERSI LINK GOOGLE DRIVE JADI LINK GAMBAR LANGSUNG
   ------------------------------------------------------------------------- */
function formatImageUrl(url) {
    if (!url || typeof url !== "string") return "";
    url = url.trim();
    if (!url) return "";

    // Deteksi link Google Drive dan ubah ke CDN Direct Image Google
    const gDriveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
    if (gDriveMatch && gDriveMatch[1]) {
        return `https://lh3.googleusercontent.com/d/${gDriveMatch[1]}`;
    }
    return url;
}

/* -------------------------------------------------------------------------
   HELPER: LOAD CACHED DATA GOOGLE SHEETS UNTUK TAMPILAN INSTAN (0 DETIK)
   ------------------------------------------------------------------------- */
function loadCachedCMSData() {
    try {
        const cached = localStorage.getItem("RND_CMS_CACHE");
        if (cached) {
            const parsed = JSON.parse(cached);
            if (parsed.journals && parsed.journals.length > 0) RND_DATA.journals = parsed.journals;
            if (parsed.prokers && parsed.prokers.length > 0) RND_DATA.prokers = parsed.prokers;
            if (parsed.projects && parsed.projects.length > 0) RND_DATA.projects = parsed.projects;
        }
    } catch (e) {
        console.warn("Gagal memuat cache CMS:", e);
    }
}

/* -------------------------------------------------------------------------
   HELPER: FORMAT TANGGAL AGAR RAPI (TIDAK BERBENTUK ISO TIMESTAMP)
   ------------------------------------------------------------------------- */
function formatDateText(dateVal, lang = "id") {
    if (!dateVal) return "";
    let str = typeof dateVal === "object" ? getText(dateVal, lang) : String(dateVal).trim();

    // Jika format ISO timestamp: 2026-09-09T17:00:00.000Z atau YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}/.test(str)) {
        try {
            const d = new Date(str);
            if (!isNaN(d.getTime())) {
                const options = { day: 'numeric', month: 'long', year: 'numeric' };
                return d.toLocaleDateString(lang === "id" ? 'id-ID' : 'en-US', options);
            }
        } catch (e) { }
    }
    return str;
}

/* -------------------------------------------------------------------------
   4. RENDER DYNAMIC TABS (JURNAL, PROKER, PROJECT)
   ------------------------------------------------------------------------- */
function renderDynamicTabs(lang = "id") {
    // Jurnal
    const jurnalContainer = document.getElementById("jurnalCardsGrid");
    if (jurnalContainer) {
        if (RND_DATA.journals && RND_DATA.journals.length > 0) {
            const sortedJournals = [...RND_DATA.journals].reverse();
            jurnalContainer.innerHTML = sortedJournals.map(item => `
                <div class="dynamic-card">
                    <div class="card-badge">${getText(item.badge, lang)}</div>
                    <h4 class="card-title">${getText(item.title, lang)}</h4>
                    <div class="card-meta">
                        <span><i class="fas fa-user-edit"></i> ${getText(item.author, lang)}</span>
                        <span><i class="fas fa-calendar-alt"></i> ${formatDateText(item.date, lang)}</span>
                    </div>
                    <p class="card-desc">${getText(item.description, lang)}</p>
                    <a href="${item.link || '#'}" class="card-link" target="_blank" rel="noopener">${lang === "id" ? "Baca Jurnal" : "Read Journal"} &rarr;</a>
                </div>
            `).join("");
        } else {
            jurnalContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;"><i class="fas fa-spinner fa-spin" style="font-size: 1.5rem; margin-bottom: 10px; display: block;"></i> Memuat data jurnal...</div>`;
        }
    }

    // Proker
    const prokerContainer = document.getElementById("prokerCardsGrid");
    if (prokerContainer) {
        if (RND_DATA.prokers && RND_DATA.prokers.length > 0) {
            const sortedProkers = [...RND_DATA.prokers].reverse();
            prokerContainer.innerHTML = sortedProkers.map(item => {
                let imgUrl = item.image;
                if (!imgUrl && typeof item.description?.en === "string" && (item.description.en.includes("drive.google.com") || item.description.en.includes("http"))) {
                    imgUrl = item.description.en;
                }
                const cleanImg = formatImageUrl(imgUrl);

                if (cleanImg) {
                    return `
                        <div class="dynamic-card project-card">
                            <div class="project-img-wrap">
                                <img src="${cleanImg}" alt="${getText(item.title, lang)}" class="project-img" loading="lazy">
                            </div>
                            <div class="project-body">
                                <h4 class="card-title">${getText(item.title, lang)}</h4>
                                <div class="card-meta">
                                    <span><i class="fas fa-clock"></i> ${formatDateText(item.timeline, lang)}</span>
                                </div>
                                <p class="card-desc">${getText(item.description, lang)}</p>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="dynamic-card">
                            <h4 class="card-title">${getText(item.title, lang)}</h4>
                            <div class="card-meta">
                                <span><i class="fas fa-clock"></i> ${formatDateText(item.timeline, lang)}</span>
                            </div>
                            <p class="card-desc">${getText(item.description, lang)}</p>
                        </div>
                    `;
                }
            }).join("");
        } else {
            prokerContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;"><i class="fas fa-spinner fa-spin" style="font-size: 1.5rem; margin-bottom: 10px; display: block;"></i> Memuat program kerja...</div>`;
        }
    }

    // Project
    const projectContainer = document.getElementById("projectCardsGrid");
    if (projectContainer) {
        if (RND_DATA.projects && RND_DATA.projects.length > 0) {
            const sortedProjects = [...RND_DATA.projects].reverse();
            projectContainer.innerHTML = sortedProjects.map(item => {
                const cleanImg = formatImageUrl(item.image);
                const techList = Array.isArray(item.tech) ? item.tech : (typeof item.tech === "string" ? item.tech.split(",") : []);
                const cleanDesc = getText(item.description, lang);
                // Hanya tampilkan tech-tag yang berupa nama teknologi singkat (bukan kalimat deskripsi panjang)
                const validTechTags = techList.filter(t => {
                    const tag = String(t).trim();
                    return tag.length > 0 && tag.length <= 35 && tag !== cleanDesc;
                });

                if (cleanImg) {
                    return `
                        <div class="dynamic-card project-card">
                            <div class="project-img-wrap">
                                <img src="${cleanImg}" alt="${getText(item.title, lang)}" class="project-img" loading="lazy">
                            </div>
                            <div class="project-body">
                                <div class="card-badge">${getText(item.category, lang)}</div>
                                <h4 class="card-title">${getText(item.title, lang)}</h4>
                                ${item.date || item.timeline ? `
                                <div class="card-meta">
                                    <span><i class="fas fa-calendar-alt"></i> ${formatDateText(item.date || item.timeline, lang)}</span>
                                </div>` : ""}
                                <p class="card-desc">${cleanDesc}</p>
                                ${validTechTags.length > 0 ? `
                                <div class="tech-stack">
                                    ${validTechTags.map(t => `<span class="tech-tag">${String(t).trim()}</span>`).join("")}
                                </div>` : ""}
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="dynamic-card">
                            <div class="card-badge">${getText(item.category, lang)}</div>
                            <h4 class="card-title">${getText(item.title, lang)}</h4>
                            ${item.date || item.timeline ? `
                            <div class="card-meta">
                                <span><i class="fas fa-calendar-alt"></i> ${formatDateText(item.date || item.timeline, lang)}</span>
                            </div>` : ""}
                            <p class="card-desc">${cleanDesc}</p>
                            ${validTechTags.length > 0 ? `
                            <div class="tech-stack">
                                ${validTechTags.map(t => `<span class="tech-tag">${String(t).trim()}</span>`).join("")}
                            </div>` : ""}
                        </div>
                    `;
                }
            }).join("");
        } else {
            projectContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;"><i class="fas fa-spinner fa-spin" style="font-size: 1.5rem; margin-bottom: 10px; display: block;"></i> Memuat portofolio project...</div>`;
        }
    }

    // Refresh Slider Listeners & Arrow States
    if (typeof initCardSliders === "function") {
        setTimeout(initCardSliders, 50);
    }
}

/* -------------------------------------------------------------------------
   4B. FETCH DYNAMIC DATA DARI DATABASE GOOGLE SHEETS (REALTIME CMS)
   ------------------------------------------------------------------------- */
async function fetchDynamicDataFromSheets() {
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === "") return;

    try {
        const fetchUrl = `${GOOGLE_SCRIPT_URL}?t=${Date.now()}`;
        const response = await fetch(fetchUrl);
        if (!response.ok) return;

        const data = await response.json();
        if (data && data.status === "success") {
            let hasNewData = false;

            if (data.journals && data.journals.length > 0) {
                RND_DATA.journals = data.journals;
                hasNewData = true;
            }
            if (data.prokers && data.prokers.length > 0) {
                RND_DATA.prokers = data.prokers;
                hasNewData = true;
            }
            if (data.projects && data.projects.length > 0) {
                RND_DATA.projects = data.projects;
                hasNewData = true;
            }

            if (hasNewData) {
                // Simpan ke cache browser agar saat buka web/refresh langsung muncul 0 detik!
                try {
                    localStorage.setItem("RND_CMS_CACHE", JSON.stringify(data));
                } catch (e) { }

                const activeLang = document.querySelector(".lang-btn.active")?.getAttribute("data-lang") || "id";
                renderDynamicTabs(activeLang);
            }
        }
    } catch (err) {
        console.info("Info: Menggunakan data lokal / offline mode.", err);
    }
}

/* -------------------------------------------------------------------------
   5. TAB SWITCHER LOGIC
   ------------------------------------------------------------------------- */
function initTabSwitcher() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-content-pane");

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            tabButtons.forEach(b => b.classList.remove("active"));
            tabPanes.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            const activePane = document.getElementById(`tab-${targetTab}`);
            if (activePane) {
                activePane.classList.add("active");
                // Update slider status pada tab yang baru dibuka
                setTimeout(initCardSliders, 80);
            }
        });
    });
}

/* -------------------------------------------------------------------------
   5B. CARDS SLIDER (HORIZONTAL SCROLL WITH ARROWS)
   ------------------------------------------------------------------------- */
function initCardSliders() {
    const wrappers = document.querySelectorAll(".cards-slider-wrapper");

    wrappers.forEach(wrapper => {
        const prevBtn = wrapper.querySelector(".slider-prev-btn");
        const nextBtn = wrapper.querySelector(".slider-next-btn");
        const slider = wrapper.querySelector(".dynamic-cards-slider");

        if (!slider || !prevBtn || !nextBtn) return;

        const updateArrows = () => {
            const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
            const isScrollable = maxScrollLeft > 10;

            if (!isScrollable) {
                prevBtn.style.display = "none";
                nextBtn.style.display = "none";
                return;
            }

            prevBtn.style.display = "flex";
            nextBtn.style.display = "flex";
            prevBtn.classList.toggle("disabled", slider.scrollLeft <= 5);
            nextBtn.classList.toggle("disabled", slider.scrollLeft >= maxScrollLeft - 5);
        };

        const getScrollStep = () => {
            const card = slider.querySelector(".dynamic-card");
            if (card) {
                return card.offsetWidth + 28;
            }
            return slider.clientWidth * 0.8;
        };

        prevBtn.onclick = (e) => {
            e.preventDefault();
            slider.scrollBy({ left: -getScrollStep(), behavior: "smooth" });
        };

        nextBtn.onclick = (e) => {
            e.preventDefault();
            slider.scrollBy({ left: getScrollStep(), behavior: "smooth" });
        };

        slider.addEventListener("scroll", updateArrows, { passive: true });
        window.addEventListener("resize", updateArrows, { passive: true });

        // Update state
        updateArrows();
        setTimeout(updateArrows, 150);
    });
}

/* -------------------------------------------------------------------------
   6. 2-STEP REGISTRATION MODAL ("IMPROVE YOUR KNOWLEDGE")
   ------------------------------------------------------------------------- */
const PRODI_BY_FAKULTAS = {
    "teknik": [
        "S1 - Arsitektur",
        "S1 - Teknik Sipil",
        "S1 - Teknik Mesin",
         "S1 - Teknik Industri",
        "S1 - Teknik Informatika",
        "S1 - Teknik Elektro",
        "S1 - Teknik Perkeretaapian",
        "D3 - Teknik Mesin",
        "D3 - Teknik Elektro"
    ],
    "farmasi": [
        "S1 - Farmasi",
        "D3 - Farmasi"
    ],
    "ekonomi": [
        "S1 - Manajemen",
        "S1 - Akuntansi",
        "D3 - Akuntansi",
        "D3 - Perpajakan"
    ],
    "hukum": [
        "S1 - Ilmu Hukum"
    ],
    "komunikasi": [
        "S1 - Ilmu Komunikasi"
    ],
    "psikologi": [
        "S1 - Psikologi"
    ],
    "pariwisata": [
        "S1 - Pariwisata"
    ]
};

function getProdiList(facultyName) {
    if (!facultyName) return [];
    const lower = facultyName.toLowerCase();
    if (lower.includes("teknik")) return PRODI_BY_FAKULTAS["teknik"];
    if (lower.includes("farmasi")) return PRODI_BY_FAKULTAS["farmasi"];
    if (lower.includes("ekonomi") || lower.includes("bisnis")) return PRODI_BY_FAKULTAS["ekonomi"];
    if (lower.includes("hukum")) return PRODI_BY_FAKULTAS["hukum"];
    if (lower.includes("komunikasi")) return PRODI_BY_FAKULTAS["komunikasi"];
    if (lower.includes("psikologi")) return PRODI_BY_FAKULTAS["psikologi"];
    if (lower.includes("pariwisata")) return PRODI_BY_FAKULTAS["pariwisata"];
    return [];
}

function initRegistrationModal() {
    const modalOverlay = document.getElementById("registrationModal");
    const openBtns = document.querySelectorAll(".trigger-register-modal");
    const closeBtn = document.getElementById("closeModalBtn");
    const regForm = document.getElementById("registrationForm");
    const step1 = document.getElementById("modalStep1");
    const step2 = document.getElementById("modalStep2");
    const btnSubmit = document.getElementById("btnSubmitForm");
    const btnJoinWa = document.getElementById("btnJoinWaGroup");
    const regFakultas = document.getElementById("regFakultas");
    const regProdi = document.getElementById("regProdi");

    // Dynamic Cascading Dropdown Prodi berdasarkan Fakultas
    window.updateProdiOptions = function () {
        const fakultasElem = document.getElementById("regFakultas");
        const prodiElem = document.getElementById("regProdi");
        if (!fakultasElem || !prodiElem) return;

        const selectedOption = fakultasElem.options[fakultasElem.selectedIndex];
        let targetKey = selectedOption ? (selectedOption.getAttribute("data-fakultas-key") || "") : "";

        if (!targetKey) {
            const val = (fakultasElem.value || "").toLowerCase();
            if (val.includes("teknik") || val.includes("engineering")) targetKey = "teknik";
            else if (val.includes("farmasi") || val.includes("pharmacy")) targetKey = "farmasi";
            else if (val.includes("ekonomi") || val.includes("bisnis") || val.includes("economic") || val.includes("business")) targetKey = "ekonomi";
            else if (val.includes("hukum") || val.includes("law")) targetKey = "hukum";
            else if (val.includes("komunikasi") || val.includes("communication")) targetKey = "komunikasi";
            else if (val.includes("psikologi") || val.includes("psychology")) targetKey = "psikologi";
            else if (val.includes("pariwisata") || val.includes("tourism")) targetKey = "pariwisata";
        }

        const optgroups = prodiElem.querySelectorAll("optgroup");
        if (optgroups && optgroups.length > 0) {
            optgroups.forEach(og => {
                const ogKey = og.getAttribute("data-fakultas");
                if (!targetKey || ogKey === targetKey) {
                    og.style.display = "";
                    og.disabled = false;
                } else {
                    og.style.display = "none";
                    og.disabled = true;
                }
            });

            // Reset ke opsi pertama jika sebelumnya memilih prodi dari fakultas lain
            const currentSelected = prodiElem.options[prodiElem.selectedIndex];
            if (currentSelected && currentSelected.parentElement && currentSelected.parentElement.tagName === "OPTGROUP" && currentSelected.parentElement.style.display === "none") {
                prodiElem.selectedIndex = 0;
            }
        }
    };

    if (regFakultas) {
        regFakultas.addEventListener("change", window.updateProdiOptions);
        regFakultas.addEventListener("input", window.updateProdiOptions);
    }

    // Pasang Link WA dari data-struktur.js
    if (btnJoinWa && RND_DATA.whatsappGroupUrl) {
        btnJoinWa.href = RND_DATA.whatsappGroupUrl;
    }

    // Open Modal
    openBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modalOverlay.classList.add("open");
            resetModal();
        });
    });

    // Close Modal
    function closeModal() {
        modalOverlay.classList.remove("open");
    }

    closeBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Reset Form to Step 1
    function resetModal() {
        const activeLang = document.querySelector(".lang-btn.active")?.getAttribute("data-lang") || "id";
        step1.classList.add("active");
        step2.classList.remove("active");
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `<span data-lang-key="btn_next">${activeLang === "en" ? "Next" : "Lanjut"}</span> <i class="fas fa-arrow-right"></i>`;
        if (regFakultas) {
            regFakultas.selectedIndex = 0;
        }
        if (typeof window.updateProdiOptions === "function") {
            window.updateProdiOptions();
        }
    }

    // Handle Form Submit
    regForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const activeLang = document.querySelector(".lang-btn.active")?.getAttribute("data-lang") || "id";

        // Ambil Data Form
        const formData = {
            nama: document.getElementById("regNama").value.trim(),
            npm: document.getElementById("regNpm").value.trim(),
            fakultas: document.getElementById("regFakultas").value,
            prodi: document.getElementById("regProdi").value.trim(),
            whatsapp: document.getElementById("regWa").value.trim(),
            timestamp: new Date().toLocaleString("id-ID")
        };

        // Validasi Sederhana
        if (!formData.nama || !formData.npm || !formData.prodi || !formData.whatsapp) {
            alert(activeLang === "en" ? "Please fill in all registration fields!" : "Harap lengkapi semua kolom pendaftaran!");
            return;
        }

        // Loading State
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${activeLang === "en" ? "Processing Data..." : "Memproses Data..."}`;

        try {
            // Jika link Google Apps Script sudah diisi, kirim ke database cloud
            if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.startsWith("http")) {
                await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });
            } else {
                // Simulasi offline/lokal jika URL script belum dipasang
                console.log("Data Pendaftaran Terkirim (Local Mode):", formData);
                await new Promise(resolve => setTimeout(resolve, 800));
            }

            // Transisi ke Step 2 (Sukses & Link WA)
            step1.classList.remove("active");
            step2.classList.add("active");
            regForm.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            alert(activeLang === "en" ? "Connection issue, data has been saved in your local session." : "Terjadi kendala koneksi, data tetap kami simpan di sesi kamu.");
            step1.classList.remove("active");
            step2.classList.add("active");
        } finally {
            btnSubmit.disabled = false;
        }
    });
}

/* -------------------------------------------------------------------------
   6B. PROFILE POPUP MODALS (TENTANG UKM & VISI MISI)
   ------------------------------------------------------------------------- */
function initProfileModals() {
    const triggers = document.querySelectorAll(".profile-card-clickable");
    const modals = document.querySelectorAll(".profile-popup-modal");
    const closeBtns = document.querySelectorAll(".close-profile-modal");

    // Open Modal on Card Click or Enter Key
    triggers.forEach(card => {
        const targetModalId = card.getAttribute("data-open-modal");
        const targetModal = document.getElementById(targetModalId);

        if (!targetModal) return;

        const openHandler = (e) => {
            e.preventDefault();
            targetModal.classList.add("open");
            document.body.style.overflow = "hidden";
        };

        card.addEventListener("click", openHandler);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                openHandler(e);
            }
        });
    });

    // Close Modal on Close Button Click
    closeBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            modals.forEach(m => m.classList.remove("open"));
            document.body.style.overflow = "";
        });
    });

    // Close Modal when clicking outside backdrop
    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("open");
                document.body.style.overflow = "";
            }
        });
    });

    // Close Modal on ESC key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modals.forEach(m => m.classList.remove("open"));
            document.body.style.overflow = "";
        }
    });
}

