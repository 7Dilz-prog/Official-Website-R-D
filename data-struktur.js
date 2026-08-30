/**
 * =========================================================================
 * DATA KONFIGURASI ORGANISASI UKM R&D KMUP (MULTI-LANGUAGE READY)
 * =========================================================================
 */

const RND_DATA = {
    // ---------------------------------------------------------------------
    // 1. LINK GRUP WHATSAPP PENDAFTAR BARU
    // ---------------------------------------------------------------------
    whatsappGroupUrl: "https://chat.whatsapp.com/GantiDenganLinkGrupKamu",

    // ---------------------------------------------------------------------
    // 2. BACKGROUND FOTO HERO / CAROUSEL 
    // ---------------------------------------------------------------------
    heroBackgrounds: [
        {
            url: "./Gambar/Foto-BPH.png",
            mobileurl: "./Gambar/Mobile-1.jpeg",
            caption: "BPH Periode 2025/2026 UKM R&D KMUP"
        },
        {
            url: "./Gambar/Bidang-1.jpg",
            mobileurl: "./Gambar/Mobile-2.jpg",
            caption: "Bidang 1 - Pendidikan"
        },
        {
            url: "./Gambar/Bidang-2.jpg",
            mobileurl: "./Gambar/Mobile-3.jpg",
            caption: "Bidang 2 - Penelitian & Pengembangan"
        },
        {
            url: "./Gambar/Bidang-3.jpg",
            mobileurl: "./Gambar/Mobile-4.JPG",
            caption: "Bidang 3 - Kesejahteraan Anggota"
        },
        {
            url: "./Gambar/Bidang-4.png",
            mobileurl: "./Gambar/Mobile-5.jpeg",
            caption: "Bidang 4 - Publikasi & Inventaris"
        },
    ],

    // ---------------------------------------------------------------------
    // 3. STRUKTUR ORGANISASI (BPH & BIDANG) DUA BAHASA
    // ---------------------------------------------------------------------
    strukturOrganisasi: {
        ketua: {
            nama: "Fircan Ferdinand",
            jurusan: "Teknik Informatika'23",
            jabatan: { id: "KETUA UMUM", en: "PRESIDENT / LEADER" },
            foto: "./Gambar/BPH/Ketua.jpg",
            instagram: "https://www.instagram.com/frcanan_?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
            linkedin: "https://www.linkedin.com/in/fircanferdinand"
        },
        bph: [
            {
                nama: "Az-Zahra Putri",
                jurusan: "Teknik Informatika'24",
                jabatan: { id: "SEKRETARIS UMUM", en: "GENERAL SECRETARY" },
                sub: { id: "Badan Pengurus Harian (BPH)", en: "Central Executive Board" },
                foto: "./Gambar/BPH/Sekre.jpg",
                instagram: "https://www.instagram.com/azzahratr__?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                linkedin: " https://www.linkedin.com/in/az-zahra-putri-7400b535b"
            },
            {
                nama: "Delsyad Iza",
                jurusan: "Teknik Informatika'24",
                jabatan: { id: "WAKIL KETUA", en: "VICE PRESIDENT" },
                sub: { id: "Badan Pengurus Harian (BPH)", en: "Central Executive Board" },
                foto: "./Gambar/BPH/Wakil.jpeg",
                instagram: "https://www.instagram.com/7_dilz_?igsi=MXZ5cWFmam1lcHQ4eA==",
                linkedin: "https://www.linkedin.com/in/delsyad-iza-51a7032a5/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BR1oyKkh7QciYlaJWJe0B0w%3D%3D"
                
            },
            {
                nama: "Belvaria Hendriyani",
                jurusan: "Teknik Informatika'24",
                jabatan: { id: "BENDAHARA UMUM", en: "GENERAL TREASURER" },
                sub: { id: "Badan Pengurus Harian (BPH)", en: "Central Executive Board" },
                foto: "./Gambar/BPH/Bendum.jpg",
                instagram: "https://www.instagram.com/belvahndryn_?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                linkedin: "https://www.linkedin.com/in/belvaria-hendriyani-7906aa424"
            }
        ],
        bidang: [
            {
                namaBidang: { id: "Bidang 1: Pendidikan", en: "Division 1: Education" },
                anggota: [
                    {
                       nama: "Ahmad Khoiri Putranto",
                        jurusan: "Teknik Informatika'23",
                        jabatan: { id: "ANGGOTA BIDANG 1", en: "DIVISION MEMBER" },
                        foto: "./Gambar/Bidang1/Koi.jpg",
                        instagram: "https://www.instagram.com/ahmad.khoiri2.0?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                        linkedin: "#"
                    },
                    {
                        nama: "Muhammad Fathir Alfarqi",
                        jurusan: "Teknik Informatika'24",
                        jabatan: { id: "KETUA BIDANG (KABID)", en: "HEAD OF DIVISION" },
                        foto: "./Gambar/Bidang1/Fathir.jpg",
                        instagram: "https://www.instagram.com/fathir.alf?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                        linkedin: "https://www.linkedin.com/in/muhfathiralf"
                        
                    },
                    {
                        nama: "Inna Lutfiah Fatih",
                        jurusan: "Teknik Informatika'24",
                        jabatan: { id: "ANGGOTA BIDANG 1", en: "DIVISION MEMBER" },
                        foto: "./Gambar/Bidang1/Inna.jpg",
                        instagram: "https://www.instagram.com/theannaliebe?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                        linkedin: "https://www.linkedin.com/in/inna-lutfiah-fatih"
                    }
                ]
            },
            {
                namaBidang: { id: "Bidang 2: Penelitian & Pengembangan", en: "Division 2: Research & Development" },
                anggota: [
                    {
                        nama: "Zaidan Dziaulfawwaz",
                        jurusan: "Teknik Informatika'24",
                        jabatan: { id: "ANGGOTA BIDANG 2", en: "DIVISION MEMBER" },
                        foto: "./Gambar/Bidang2/Zaidan.jpg",
                        instagram: "https://www.instagram.com/neverz_z?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                        linkedin: "#"
                    },
                    {
                        nama: "Aryan Faathir Asq Gunawan",
                        jurusan: "Teknik Informatika'24",
                        jabatan: { id: "KETUA BIDANG (KABID)", en: "HEAD OF DIVISION" },
                        foto: "./Gambar/Bidang2/Aryan.jpg",
                        instagram: "https://www.instagram.com/aryanaasq?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                        linkedin: "https://www.linkedin.com/in/aryan-faathir-asq-gunawan-494591299/"
                        
                    },
                    {
                        nama: "Muhammad Al-Fatih",
                        jurusan: "Teknik Informatika'23",
                        jabatan: { id: "ANGGOTA BIDANG 2", en: "DIVISION MEMBER" },
                        foto: "./Gambar/Bidang2/Fatih.jpg",
                        instagram: "https://www.instagram.com/alfatihhhg?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                        linkedin: " https://www.linkedin.com/in/muhammad-al-fatih-621596276?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    }
                ]
            },
            {
                namaBidang: { id: "Bidang 3: Kesejahteraan Anggota", en: "Division 3: Member Welfare" },
                anggota: [
                    {
                        nama: "Devica Putri Hadiyanti",
                        jurusan: "Teknik Informatika'23",
                        jabatan: { id: "KETUA BIDANG (KABID)", en: "HEAD OF DIVISION" },
                        foto: "./Gambar/Bidang3/Vika.jpg",
                        instagram: "https://www.instagram.com/devicaaputri?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                        linkedin: " https://www.linkedin.com/in/devicaputrihadiyanti"
                    },
                    {
                        nama: "Soja Purnamasari",
                        jurusan: "Teknik Informatika'24",
                        jabatan: { id: "ANGGOTA BIDANG 3", en: "DIVISION MEMBER" },
                        foto: "./Gambar/Bidang3/Soja.jpg",
                        instagram: "https://www.instagram.com/moonsojaa?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                        linkedin: "https://www.linkedin.com/in/soja-purnamasari"
                    }
                ]
            },
            {
                namaBidang: { id: "Bidang 4: Publikasi & Inventaris", en: "Division 4: Publication & Inventory" },
                anggota: [
                    {
                        nama: "Herlyana Ferdiani",
                        jurusan: "Teknik Informatika'24",
                        jabatan: { id: "ANGGOTA BIDANG 4", en: "DIVISION MEMBER" },
                        sub: { id: "Bidang Publikasi", en: "Publication Division" },
                        foto: "./Gambar/Bidang4/Elin.jpg",
                        instagram: "https://www.instagram.com/ryleaan?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                        linkedin: "#"
                    },
                    {
                        nama: "Naila Putri Fahel",
                        jurusan: "Teknik Informatika'24",
                        jabatan: { id: "KETUA BIDANG (KABID)", en: "HEAD OF DIVISION" },
                        sub: { id: "Bidang Publikasi", en: "Publication Division" },
                        foto: "./Gambar/Bidang4/Naila.jpg",
                        instagram: "https://www.instagram.com/nailafahel?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                        linkedin: "#"
                       
                    },
                    {
                        nama: "Alfin Romi Setiawan",
                        jurusan: "Teknik Informatika'23",
                        jabatan: { id: "ANGGOTA BIDANG 4", en: "DIVISION MEMBER" },
                        sub: { id: "Bidang Inventaris", en: "Inventory Division" },
                        foto: "./Gambar/Bidang4/Alfin.jpg",
                        instagram: "https://www.instagram.com/alfinromi1?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
                        linkedin: "#"
                    }
                ]
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 4. KONTEN TAB: JURNAL, PROKER, & PROJECT (OTOMATIS DARI GOOGLE SHEETS)
    // ---------------------------------------------------------------------
    journals: [],
    prokers: [],
    projects: []
};