# 🚀 Panduan Setup Database Cloud (Google Sheets) & Deployment UKM R&D

Panduan praktis ini menjelaskan:
1. Menghubungkan **Form Pendaftaran** ke Google Sheets (Realtime responder).
2. Membuat **Database Konten Dinamis (CMS)** untuk Jurnal, Proker, & Project (Bisa tambah/ubah artikel dan foto langsung dari Google Sheets).
3. Meng-online-kannya ke **GitHub Pages** (100% Gratis & Aktif 24/7).

---

## 📑 Bagian 1: Setup Database Pendaftaran & Konten Dinamis (Google Sheets)

### Langkah 1: Siapkan Tab di Google Sheets
Buka Google Spreadsheet kamu yang sudah ada, lalu buat/pastikan ada 4 Tab (Sheet) di bagian bawah:

#### 1. Tab `Pendaftar` (Untuk Form Registrasi)
Baris ke-1 (Header):
| A1 | B1 | C1 | D1 | E1 | F1 |
|---|---|---|---|---|---|
| `Timestamp` | `Nama Lengkap` | `NPM` | `Fakultas` | `Program Studi` | `No WhatsApp` |

---

#### 2. Tab `Jurnal` (Untuk Artikel / Jurnal Riset)
Baris ke-1 (Header):
| A1 | B1 | C1 | D1 | E1 | F1 | G1 | H1 |
|---|---|---|---|---|---|---|---|
| `Kategori` | `Judul (ID)` | `Judul (EN)` | `Penulis` | `Tanggal` | `Deskripsi (ID)` | `Deskripsi (EN)` | `Link Jurnal` |

*Contoh Isi Baris 2:*
`Artificial Intelligence` | `Pemanfaatan AI dalam Sistem Otomasi` | `AI Utilization in Automation` | `Tim Riset Software` | `Agustus 2026` | `Kajian model deep learning...` | `Study on deep learning...` | `https://drive.google.com/...`

---

#### 3. Tab `Proker` (Untuk Program Kerja)
Baris ke-1 (Header):
| A1 | B1 | C1 | D1 | E1 | F1 | G1 | H1 |
|---|---|---|---|---|---|---|---|
| `Kategori` | `Judul (ID)` | `Judul (EN)` | `Timeline` | `Status` | `Deskripsi (ID)` | `Deskripsi (EN)` | `Link Foto/Gambar` |

*Contoh Isi Baris 2:*
`Pelatihan` | `R&D Tech Bootcamp 2026` | `R&D Tech Bootcamp 2026` | `September - Oktober 2026` | `Akan Datang` | `Pelatihan intensif coding & robotika...` | `Intensive coding bootcamp...` | `./Gambar/Mobile-2.jpg`

---

#### 4. Tab `Project` (Untuk Karya & Portofolio Projek)
Baris ke-1 (Header):
| A1 | B1 | C1 | D1 | E1 | F1 | G1 | H1 |
|---|---|---|---|---|---|---|---|
| `Kategori` | `Judul (ID)` | `Judul (EN)` | `Link Foto/Gambar` | `Deskripsi (ID)` | `Deskripsi (EN)` | `Tech Stack (Pisahkan koma)` | `Link Project` |

*Contoh Isi Baris 2:*
`Web & Mobile` | `Smart Campus Dashboard` | `Smart Campus Dashboard` | `https://images.unsplash.com/...` | `Sistem informasi terintegrasi...` | `Integrated info system...` | `Vue.js, Node.js, PostgreSQL` | `#`

---

### Langkah 2: Perbarui Kode Google Apps Script
1. Di halaman Google Sheets, klik menu **Extensions (Ekstensi)** $\rightarrow$ pilih **Apps Script**.
2. Ganti seluruh isi kode dengan script lengkap dan terbaru di bawah ini:

```javascript
// =========================================================================
// GOOGLE APPS SCRIPT: PENDAFTARAN & CMS DYNAMIC CONTENT UKM R&D KMUP (TERBARU)
// =========================================================================

// 1. MENERIMA FORM PENDAFTARAN (POST)
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetPendaftar = ss.getSheetByName("Pendaftar") || ss.getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheetPendaftar.appendRow([
      data.timestamp || new Date(),
      data.nama,
      "'" + data.npm,
      data.fakultas,
      data.prodi,
      "'" + data.whatsapp
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Data berhasil disimpan" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 2. MENGAMBIL DATA JURNAL, PROKER, & PROJEK KE WEBSITE (GET)
function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Ambil Data Jurnal (Cari tab: Jurnal / Journal / Journals)
    var journals = getFlexibleSheetData(ss, ["Jurnal", "Journal", "Journals", "JURNAL"], function(item) {
      var o = item.obj;
      var r = item.raw;
      
      var titleId = o["judul (id)"] || o["judul"] || o["title (id)"] || o["title"] || r[1] || "";
      var titleEn = o["judul (en)"] || o["title (en)"] || o["title_en"] || r[2] || titleId;
      var descId = o["deskripsi (id)"] || o["deskripsi"] || o["description (id)"] || o["description"] || r[5] || r[4] || "";
      var descEn = o["deskripsi (en)"] || o["description (en)"] || o["description_en"] || r[6] || descId;
      var author = o["penulis"] || o["author"] || r[3] || "Tim R&D";
      var date = o["tanggal"] || o["date"] || r[4] || "";
      var badge = o["kategori"] || o["category"] || o["badge"] || r[0] || "Research";
      var link = o["link jurnal"] || o["link"] || o["url"] || r[7] || "#";
      
      return {
        badge: badge,
        title: { id: titleId, en: titleEn },
        author: { id: author, en: author },
        date: { id: date, en: date },
        description: { id: descId, en: descEn },
        link: link
      };
    });

    // Ambil Data Proker (Cari tab: Proker / Program Kerja / Prokers)
    var prokers = getFlexibleSheetData(ss, ["Proker", "Program Kerja", "Prokers", "PROKER"], function(item) {
      var o = item.obj;
      var r = item.raw;

      var titleId = o["judul (id)"] || o["judul"] || o["title (id)"] || o["title"] || r[1] || "";
      var titleEn = o["judul (en)"] || o["title (en)"] || o["title_en"] || r[2] || titleId;
      var timeline = o["timeline"] || o["tanggal"] || o["waktu"] || r[3] || "";
      var status = o["status"] || "Akan Datang";
      var descId = o["deskripsi (id)"] || o["deskripsi"] || o["description (id)"] || o["description"] || r[5] || r[4] || "";
      var descEn = o["deskripsi (en)"] || o["description (en)"] || o["description_en"] || r[6] || descId;
      var badge = o["kategori"] || o["category"] || o["badge"] || r[0] || "Proker";
      
      var img = o["link foto/gambar"] || o["link foto"] || o["link gambar"] || o["gambar"] || o["image"] || o["foto"] || "";
      if (!img) {
        for (var k = 0; k < r.length; k++) {
          var val = String(r[k] || "");
          if (val.indexOf("http") !== -1 || val.indexOf("drive.google") !== -1 || val.indexOf("./Gambar") !== -1) {
            img = val;
            break;
          }
        }
      }

      return {
        badge: { id: badge, en: badge },
        title: { id: titleId, en: titleEn },
        timeline: { id: timeline, en: timeline },
        status: { id: status, en: status },
        description: { id: descId, en: descEn },
        image: img
      };
    });

    // Ambil Data Project (Cari tab: Project / Projek / Projects / PROJEK / PROJECT)
    var projects = getFlexibleSheetData(ss, ["Project", "Projek", "Projects", "PROJEK", "PROJECT"], function(item) {
      var o = item.obj;
      var r = item.raw;

      var titleId = o["judul (id)"] || o["judul"] || o["title (id)"] || o["title"] || r[1] || "";
      var titleEn = o["judul (en)"] || o["title (en)"] || o["title_en"] || r[2] || titleId;
      var category = o["kategori"] || o["category"] || r[0] || "Project";
      var descId = o["deskripsi (id)"] || o["deskripsi"] || o["description (id)"] || o["description"] || r[4] || r[3] || "";
      var descEn = o["deskripsi (en)"] || o["description (en)"] || o["description_en"] || r[5] || descId;
      var tech = o["tech stack (pisahkan koma)"] || o["tech stack"] || o["teknologi"] || o["tech"] || r[6] || "R&D";
      var link = o["link project"] || o["link projek"] || o["link"] || o["url"] || r[7] || "#";

      var img = o["link foto/gambar"] || o["link foto"] || o["link gambar"] || o["gambar"] || o["image"] || o["foto"] || "";
      if (!img) {
        for (var k = 0; k < r.length; k++) {
          var val = String(r[k] || "");
          if (val.indexOf("http") !== -1 || val.indexOf("drive.google") !== -1 || val.indexOf("./Gambar") !== -1) {
            img = val;
            break;
          }
        }
      }

      var date = o["tanggal"] || o["date"] || o["timeline"] || o["waktu"] || "";

      return {
        category: { id: category, en: category },
        title: { id: titleId, en: titleEn },
        date: { id: date, en: date },
        image: img || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        description: { id: descId, en: descEn },
        tech: String(tech).split(",").map(function(t){ return t.trim(); }),
        link: link
      };
    });

    var result = {
      status: "success",
      journals: journals,
      prokers: prokers,
      projects: projects
    };

    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Helper cerdas mencari nama sheet & memetakan berdasarkan nama header kolom
function getFlexibleSheetData(ss, nameOptions, mapFunction) {
  var sheet = null;
  for (var i = 0; i < nameOptions.length; i++) {
    sheet = ss.getSheetByName(nameOptions[i]);
    if (sheet) break;
  }
  if (!sheet) return [];
  
  var data = sheet.getDataRange().getDisplayValues();
  if (data.length <= 1) return [];
  
  var headers = data[0].map(function(h) {
    return String(h || "").trim().toLowerCase();
  });
  
  var list = [];
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var hasContent = false;
    for (var c = 0; c < row.length; c++) {
      if (String(row[c] || "").trim() !== "") { hasContent = true; break; }
    }
    if (!hasContent) continue;
    
    var obj = {};
    for (var h = 0; h < headers.length; h++) {
      obj[headers[h]] = String(row[h] || "").trim();
    }
    list.push(mapFunction({ raw: row, obj: obj }));
  }
  return list;
}
```

---

### Langkah 3: Deploy Versi Baru (New Deployment / Manage Deployments)
1. Di editor Apps Script, klik tombol **Deploy** $\rightarrow$ pilih **Manage deployments** (Kelola penerapan).
2. Klik ikon pensil (**Edit**) pada deployment aktif kamu.
3. Pada bagian **Version**, pilih **New version** (Versi baru).
4. Klik **Deploy**.
5. *(Link URL tetap sama, atau jika menggunakan New Deployment, salin URL baru ke `script.js`)*.

---

## ⚙️ Bagian 2: Cara Mengedit Data Anggota, Foto, & Link WA
Semua data profil pengurus dan slider tetap dapat kamu atur di file [data-struktur.js](file:///c:/Users/PC%20Lenovo/Documents/WEB-R&D-2/data-struktur.js):
- **Link Grup WhatsApp:** `whatsappGroupUrl`
- **Foto Slider Hero:** `heroBackgrounds`
- **Anggota Struktur Organisasi:** `strukturOrganisasi`

---

## 🌐 Bagian 3: Cara Hosting Gratis & Go-Online (GitHub Pages)
1. Simpan dan push semua perubahan ke GitHub:
   ```bash
   git add .
   git commit -m "feat: integrated realtime google sheets cms for journals, prokers, and projects"
   git push origin main
   ```
2. Buka repository GitHub kamu di browser $\rightarrow$ **Settings** $\rightarrow$ **Pages**.
3. Pada **Branch**, pilih `main` dan folder `/(root)` $\rightarrow$ klik **Save**.
4. Website kamu resmi online 24/7!
