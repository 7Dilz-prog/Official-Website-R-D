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
    initRegistrationModal();
    fetchDynamicDataFromSheets();
});

// ==========================================================================
// KAMUS KOSAKATA (DICTIONARY) ID & EN
// ==========================================================================
const translations = {
    id: {
        nav_brand_sub: "KELUARGA MAHASISWA UNIVERSITAS PANCASILA",
        nav_home: "Beranda",
        nav_profile: "Profil",
        nav_struktur: "Kepengurusan",
        nav_kegiatan: "Kegiatan",
        btn_nav_register: "Pendaftaran",
        
        drawer_home: "Research & Development",
        drawer_profile: "Profil & Visi Misi",
        drawer_struktur: "Struktur Organisasi",
        drawer_kegiatan: "Jurnal, Proker, & Projek",
        btn_drawer_register: "Pendaftaran",

        hero_badge: "Selamat Datang di Website UKM R&D KMUP",
        hero_desc: "Wadah kolaborasi eksplorasi ilmiah, rekayasa teknologi, dan pengembangan inovasi mahasiswa yang solutif, unggul, serta berdaya saing global.",
        btn_hero_join: "@rnd_pancasila",
        btn_hero_profile: "Pelajari Profil Kami",

        profile_badge: "Profil Organisasi",
        profile_title: "Mengenal UKM R&D KMUP",
        profile_subtitle: "Membangun ekosistem riset yang berintegritas dan menghasilkan karya nyata bagi almamater dan masyarakat.",
        about_title: "Tentang UKM R&D",
        about_desc_1: "Unit Kegiatan Mahasiswa Research & Development (R&D) Keluarga Mahasiswa Universitas Pancasila adalah organisasi kemahasiswaan independen yang berfokus pada penalaran ilmiah, penelitian interdisipliner, serta pengembangan produk teknologi dan sosial.",
        about_desc_2: "Kami memfasilitasi mahasiswa dari berbagai fakultas untuk mengasah keahlian teknis, kepemimpinan proyek, dan publikasi karya ilmiah yang bermanfaat.",
        vm_title: "Visi & Misi",
        visi_label: "Visi:",
        visi_text: "<strong>Visi:</strong> Mewujudkan <span>Research and Development KMUP</span> sebagai wadah <span>inovasi</span> yang <span>progresif</span>, <span>kolaboratif</span>, dan <span>berdampak</span>, dengan mencetak anggota yang <span>kompeten</span> di bidang <span>teknologi</span>, <span>riset</span>, dan <span>pengembangan diri</span>.",
        misi_1: '<i class="fas fa-check-circle"></i> Mengembangkan personal branding anggota dengan memberikan kelas mingguan dan mengikutsertakan anggota dalam lomba-lomba inovatif.',
        misi_2: '<i class="fas fa-check-circle"></i> Mendorong inovasi dan karya nyata, serta menghasilkan proyek teknologi, riset, atau produk digital.',
        misi_3: '<i class="fas fa-check-circle"></i> Memperluas relasi dan peluang, membantu anggota memiliki portofolio yang jelas dan bernilai, serta menjalin kerja sama dengan pihak luar.',

        structure_badge: "Kepengurusan",
        structure_title: "Struktur Organisasi",
        structure_subtitle: "Badan pengurus dan koordinator bidang yang berdedikasi menjalankan Program Kerja untuk mencapai tujuan Visi & Misi.",

        tabs_badge: "Eksplorasi Karya",
        tabs_title: "Jurnal, Proker & Projek",
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
        form_fakultas: "Fakultas",
        opt_select_fakultas: "Pilih Fakultas",
        form_prodi: "Program Studi",
        form_wa: "Nomor WhatsApp",
        btn_next: "Lanjut",
        success_title: "Terima Kasih!",
        success_desc: "Data pendaftaranmu berhasil tersimpan. Silakan klik tombol di bawah untuk bergabung ke WhatsApp Group resmi calon anggota UKM R&D.",
        btn_join_wa: "Masuk Link Grup WA",

        footer_desc: "Unit Kegiatan Mahasiswa Research & Development KM Universitas Pancasila. Membina generasi muda berdaya saing dalam riset dan teknologi.",
        footer_nav_heading: "Navigasi",
        footer_act_heading: "Aktivitas",
        footer_contact_heading: "Sekretariat",
        footer_address: "Aula PKM Universitas Pancasila, Srengseng Sawah, Jagakarsa, Jakarta Selatan."
    },
    en: {
        nav_brand_sub: "STUDENT FAMILY OF PANCASILA UNIVERSITY",
        nav_home: "Home",
        nav_profile: "Profile",
        nav_struktur: "Management",
        nav_kegiatan: "Activities",
        btn_nav_register: "Registration",
        
        drawer_home: "Research & Development",
        drawer_profile: "Profile & Vision Mission",
        drawer_struktur: "Organizational Structure",
        drawer_kegiatan: "Journals, Programs, & Projects",
        btn_drawer_register: "Registration",

        hero_badge: "Welcome to UKM R&D KMUP Official Website",
        hero_desc: "A collaborative hub for scientific exploration, technological engineering, and student innovation that is impactful, excellent, and globally competitive.",
        btn_hero_join: "@rnd_pancasila",
        btn_hero_profile: "Explore Our Profile",

        profile_badge: "Organization Profile",
        profile_title: "Get to Know UKM R&D KMUP",
        profile_subtitle: "Building an upright research ecosystem and delivering real impact for the university and society.",
        about_title: "About UKM R&D",
        about_desc_1: "The Research & Development (R&D) Student Club of Pancasila University is an independent student organization focused on scientific reasoning, interdisciplinary research, and technological/social innovation.",
        about_desc_2: "We facilitate students across faculties to enhance technical skills, project management capabilities, and valuable scientific publications.",
        vm_title: "Vision & Mission",
        visi_label: "Vision:",
        visi_text: "<strong>Vision:</strong> Establishing <span>Research and Development KMUP</span> as an <span>innovation</span> hub that is <span>progressive</span>, <span>collaborative</span>, and <span>impactful</span>, by developing members who are <span>competent</span> in <span>technology</span>, <span>research</span>, and <span>self-development</span>.",
        misi_1: '<i class="fas fa-check-circle"></i> Developing member personal branding through weekly classes and active participation in innovation competitions.',
        misi_2: '<i class="fas fa-check-circle"></i> Fostering tangible innovation through technology projects, scientific research, or digital products.',
        misi_3: '<i class="fas fa-check-circle"></i> Expanding external networks and opportunities, helping members build a clear and valuable portfolio, and establishing partnerships.',

        structure_badge: "Management",
        structure_title: "Organizational Structure",
        structure_subtitle: "The executive board and department heads dedicated to executing work programs towards our Vision & Mission.",

        tabs_badge: "Our Works",
        tabs_title: "Journals, Programs & Projects",
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
        form_fakultas: "Faculty",
        opt_select_fakultas: "Select Faculty",
        form_prodi: "Study Program",
        form_wa: "WhatsApp Number",
        btn_next: "Next",
        success_title: "Thank You!",
        success_desc: "Your registration data has been submitted successfully. Please click the button below to join our official WhatsApp Group for new members.",
        btn_join_wa: "Join WhatsApp Group",

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
            element.innerHTML = translations[lang][key];
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

backgrounds.forEach((bg, index) => {
    const slide = document.createElement("div");
    slide.className = `hero-slide ${index === 0 ? "active" : ""}`;
    slide.style.setProperty('--bg-desktop', `url('${bg.url}')`);
    slide.style.setProperty('--bg-mobile', `url('${bg.mobileUrl || bg.url}')`);
    sliderContainer.appendChild(slide);
});


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
                ${m.jurusan ? `<span class="member-major">${m.jurusan}</span>` : ""}
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
        } catch (e) {}
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
            jurnalContainer.innerHTML = RND_DATA.journals.map(item => `
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
            prokerContainer.innerHTML = RND_DATA.prokers.map(item => {
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
            projectContainer.innerHTML = RND_DATA.projects.map(item => {
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
                } catch (e) {}

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
            }
        });
    });
}

/* -------------------------------------------------------------------------
   6. 2-STEP REGISTRATION MODAL ("IMPROVE YOUR KNOWLEDGE")
   ------------------------------------------------------------------------- */
function initRegistrationModal() {
    const modalOverlay = document.getElementById("registrationModal");
    const openBtns = document.querySelectorAll(".trigger-register-modal");
    const closeBtn = document.getElementById("closeModalBtn");
    const regForm = document.getElementById("registrationForm");
    const step1 = document.getElementById("modalStep1");
    const step2 = document.getElementById("modalStep2");
    const btnSubmit = document.getElementById("btnSubmitForm");
    const btnJoinWa = document.getElementById("btnJoinWaGroup");

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
        step1.classList.add("active");
        step2.classList.remove("active");
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `Lanjut <i class="fas fa-arrow-right"></i>`;
    }

    // Handle Form Submit
    regForm.addEventListener("submit", async (e) => {
        e.preventDefault();

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
            alert("Harap lengkapi semua kolom pendaftaran!");
            return;
        }

        // Loading State
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Memproses Data...`;

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
            alert("Terjadi kendala koneksi, data tetap kami simpan di sesi kamu.");
            step1.classList.remove("active");
            step2.classList.add("active");
        } finally {
            btnSubmit.disabled = false;
        }
    });
}
