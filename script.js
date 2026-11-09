
// ==========================================
// PORTFOLIO DAFFA UBAYDILLAH
// FULL VERSION
// ==========================================

const PASSWORD = "ubayxxx7777";

const defaults = {
    name: "Daffa Ubaydillah",
    tag: "Kreator • Pelajar • Freelancer",
    about: "Halo, saya Daffa Ubaydillah. Selamat datang di portfolio pribadi saya. Di sini kamu bisa mengenal saya, melihat foto, menemukan tautan penting, dan menjelajahi proyek yang pernah saya buat.",
    heroImage: "images/hero.jpg",

    links: [
        {
            title: "YouTube",
            desc: "Ikuti aktivitas saya",
            url: "https://youtube.com/@KINGDAFFZ-n3x",
            symbol: "◎"
        },
        {
            title: "TikTok",
            desc: "Video dan konten saya",
            url: "https://www.tiktok.com/@daffaubaydillah95",
            symbol: "♪"
        },
        {
            title: "WhatsApp",
            desc: "Hubungi saya",
            url: "https://wa.me/6285151833180",
            symbol: "✆"
        }
    ],

    photos: [
        "images/galeri-1.jpg",
        "images/galeri-2.jpg",
        "images/galeri-3.jpg"
    ],

    projects: [
        {
            title: "Belajar SI",
            desc: "Proyek website pembelajaran Sistem Informasi.",
            category: "WEB",
            image: "images/proyek-1.jpg",
            url: "https://belajar-si.onrender.com"
        },
        {
            title: "My Life Dafzz",
            desc: "Website personal tentang kehidupan dan aktivitas saya.",
            category: "PERSONAL",
            image: "images/proyek-2.jpg",
            url: "https://my-life-dafzz.onrender.com"
        },
        {
            title: "Hollow Dafzz",
            desc: "Proyek kreatif digital karya saya.",
            category: "CREATIVE",
            image: "images/proyek-3.jpg",
            url: "https://hollow-dafzz.onrender.com"
        }
    ]
};

// ==========================================
// DATA & STORAGE
// ==========================================

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let data;

try {
    data = JSON.parse(localStorage.getItem("myPortfolio")) || clone(defaults);
} catch (e) {
    data = clone(defaults);
}

const $ = s => document.querySelector(s);

function persist(message = "Perubahan berhasil disimpan!") {
    try {
        localStorage.setItem("myPortfolio", JSON.stringify(data));
        render();
        toast(message);
    } catch (e) {
        toast("Penyimpanan penuh! Kurangi ukuran foto.");
    }
}

function safe(s = "") {
    return String(s).replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[c]));
}

// ==========================================
// NOTIFICATION
// ==========================================

function toast(message) {
    let t = $("#toast");
    if (!t) {
        t = document.createElement("div");
        t.id = "toast";
        document.body.appendChild(t);
    }

    t.textContent = message;
    t.classList.add("show");

    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
        t.classList.remove("show");
    }, 2500);
}

// ==========================================
// RENDER WEBSITE
// ==========================================

function render() {
    if ($("#heroName")) $("#heroName").textContent = data.name;
    if ($("#aboutName")) $("#aboutName").textContent = data.name;
    if ($("#heroTag")) $("#heroTag").textContent = data.tag;
    if ($("#aboutText")) $("#aboutText").textContent = data.about;
    if ($("#heroImage")) $("#heroImage").src = data.heroImage;
    if ($("#year")) $("#year").textContent = new Date().getFullYear();

    if ($("#linkList")) {
        $("#linkList").innerHTML = data.links.map(x => `
            <a class="link-card"
               href="${safe(x.url)}"
               target="_blank"
               rel="noopener">
                <span class="symbol">${safe(x.symbol || "↗")}</span>
                <span class="arrow">↗</span>
                <h3>${safe(x.title)}</h3>
                <p>${safe(x.desc)}</p>
            </a>
        `).join("");
    }

    if ($("#photoList")) {
        $("#photoList").innerHTML = data.photos.map((x, i) => `
            <div class="photo-card">
                <img src="${safe(x)}"
                     alt="Foto ${i + 1}"
                     loading="lazy"
                     class="zoom-photo"
                     data-photo="${i}">
            </div>
        `).join("");
    }

    if ($("#projectList")) {
        $("#projectList").innerHTML = data.projects.map(x => `
            <a class="project-card"
               href="${safe(x.url || "#")}"
               target="_blank"
               rel="noopener">
                <img src="${safe(x.image)}"
                     alt="${safe(x.title)}"
                     loading="lazy">
                <div class="project-info">
                    <small>${safe(x.category)}</small>
                    <h3>${safe(x.title)}</h3>
                    <p>${safe(x.desc)}</p>
                </div>
            </a>
        `).join("");
    }
}

// ==========================================
// PASSWORD MODE EDIT
// ==========================================

let authenticated = false;
let current = "";

function login() {
    const password = prompt("Masukkan password Mode Edit:");

    if (password === null) return false;

    if (password === PASSWORD) {
        authenticated = true;
        toast("Mode Edit berhasil dibuka!");
        return true;
    }

    toast("Password salah!");
    return false;
}

function checkAuth() {
    if (authenticated) return true;
    return login();
}

// ==========================================
// EDITOR COMPONENTS
// ==========================================

function field(label, value, key, type = "text") {
    return `
        <div class="field">
            <label>${label}</label>
            <input type="${type}"
                   data-key="${key}"
                   value="${safe(value || "")}">
        </div>
    `;
}

function area(label, value, key) {
    return `
        <div class="field">
            <label>${label}</label>
            <textarea data-key="${key}">${safe(value || "")}</textarea>
        </div>
    `;
}

function itemEditor(arr, type) {
    return arr.map((x, i) => `
        <div class="editor-item" data-index="${i}">

            ${type === "links" ? `
                ${field("Nama link", x.title, "title")}
                ${field("Deskripsi", x.desc, "desc")}
                ${field("Alamat URL", x.url, "url")}
                ${field("Simbol", x.symbol, "symbol")}
            ` : ""}

            ${type === "projects" ? `
                ${field("Nama proyek", x.title, "title")}
                ${field("Kategori", x.category, "category")}
                ${area("Deskripsi", x.desc, "desc")}
                ${field("Link proyek", x.url, "url")}
                ${field("URL gambar", x.image, "image")}
                <input type="file" accept="image/*" class="project-upload">
            ` : ""}

            ${type === "photos" ? `
                ${field("URL foto", x, "photo")}
                <input type="file" accept="image/*" class="single-photo-upload">
                <button type="button" class="crop-photo">Crop Kotak</button>
                <button type="button" class="remove-bg">Hapus Background Polos</button>
                <button type="button" class="move-up">↑ Naik</button>
                <button type="button" class="move-down">↓ Turun</button>
            ` : ""}

            <button type="button" class="remove-item">Hapus</button>

        </div>
    `).join("");
}

// ==========================================
// OPEN EDITOR
// ==========================================

function openEditor(type) {
    if (!checkAuth()) return;

    current = type;

    let html = "";
    let title = "";

    if (type === "profile") {
        title = "Edit Profil";

        html =
            field("Nama kamu", data.name, "name") +
            field("Tulisan singkat", data.tag, "tag") +
            area("Tentang saya", data.about, "about") +
            field("URL foto utama", data.heroImage, "heroImage") +
            `<div class="field">
                <label>Pilih foto utama dari HP</label>
                <input type="file" id="heroUpload" accept="image/*">
            </div>`;
    }

    if (type === "links") {
        title = "Ubah Link";

        html =
            itemEditor(data.links, "links") +
            `<button class="add-btn" id="addItem">＋ Tambah Link</button>`;
    }

    if (type === "photos") {
        title = "Ubah Foto";

        html = `
            <div class="field">
                <label>Upload foto dari galeri HP</label>
                <input type="file"
                       id="photoUpload"
                       accept="image/*"
                       multiple>
            </div>
            <p>Gunakan tombol naik/turun untuk mengatur urutan foto.</p>
        ` + itemEditor(data.photos, "photos") +
            `<button class="add-btn" id="addItem">＋ Tambah URL Foto</button>`;
    }

    if (type === "projects") {
        title = "Ubah Proyek";

        html =
            itemEditor(data.projects, "projects") +
            `<button class="add-btn" id="addItem">＋ Tambah Proyek</button>`;
    }

    $("#editorTitle").textContent = title;
    $("#editorBody").innerHTML = html;

    $("#editor").classList.add("open");
    $("#editor").setAttribute("aria-hidden", "false");

    bindEditorEvents(type);
}

// ==========================================
// EDITOR EVENTS
// ==========================================

function bindEditorEvents(type) {

    $("#addItem")?.addEventListener("click", () => {

        if (type === "links") {
            data.links.push({
                title: "Link baru",
                desc: "Deskripsi link",
                url: "https://",
                symbol: "↗"
            });
        }

        if (type === "photos") {
            data.photos.push("images/foto-baru.jpg");
        }

        if (type === "projects") {
            data.projects.push({
                title: "Proyek baru",
                desc: "Deskripsi proyek",
                category: "PROJECT",
                image: "images/proyek-baru.jpg",
                url: "#"
            });
        }

        openEditor(type);
    });

    $("#editorBody").querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", () => {
            const i = Number(btn.closest(".editor-item").dataset.index);

            if (!confirm("Yakin ingin menghapus item ini?")) return;

            if (type === "links") data.links.splice(i, 1);
            if (type === "photos") data.photos.splice(i, 1);
            if (type === "projects") data.projects.splice(i, 1);

            openEditor(type);
        });
    });

    $("#editorBody").querySelectorAll(".move-up").forEach(btn => {
        btn.addEventListener("click", () => {
            const i = +btn.closest(".editor-item").dataset.index;
            if (i === 0) return;

            [data.photos[i - 1], data.photos[i]] =
                [data.photos[i], data.photos[i - 1]];

            openEditor("photos");
        });
    });

    $("#editorBody").querySelectorAll(".move-down").forEach(btn => {
        btn.addEventListener("click", () => {
            const i = +btn.closest(".editor-item").dataset.index;
            if (i >= data.photos.length - 1) return;

            [data.photos[i + 1], data.photos[i]] =
                [data.photos[i], data.photos[i + 1]];

            openEditor("photos");
        });
    });

    $("#editorBody").querySelectorAll(".single-photo-upload").forEach(input => {
        input.addEventListener("change", async () => {
            const file = input.files[0];
            if (!file) return;

            const i = +input.closest(".editor-item").dataset.index;
            data.photos[i] = await fileToData(file);
            openEditor("photos");
        });
    });

    $("#editorBody").querySelectorAll(".project-upload").forEach(input => {
        input.addEventListener("change", async () => {
            const file = input.files[0];
            if (!file) return;

            const i = +input.closest(".editor-item").dataset.index;
            data.projects[i].image = await fileToData(file);
            toast("Gambar proyek dipilih. Tekan Simpan Perubahan.");
        });
    });

    $("#editorBody").querySelectorAll(".crop-photo").forEach(btn => {
        btn.addEventListener("click", async () => {
            const i = +btn.closest(".editor-item").dataset.index;
            data.photos[i] = await cropImage(data.photos[i]);
            openEditor("photos");
        });
    });

    $("#editorBody").querySelectorAll(".remove-bg").forEach(btn => {
        btn.addEventListener("click", async () => {
            const i = +btn.closest(".editor-item").dataset.index;
            data.photos[i] = await removePlainBackground(data.photos[i]);
            openEditor("photos");
        });
    });

    $("#photoUpload")?.addEventListener("change", async e => {
        for (const file of e.target.files) {
            data.photos.push(await fileToData(file));
        }

        openEditor("photos");
    });
}

// ==========================================
// SAVE EDITOR
// ==========================================

$("#editToggle").onclick = () => openEditor("profile");

document.querySelectorAll("[data-edit]").forEach(btn => {
    btn.onclick = () => openEditor(btn.dataset.edit);
});

function close() {
    $("#editor").classList.remove("open");
    $("#editor").setAttribute("aria-hidden", "true");
}

$("#closeEditor").onclick = close;
$("#cancelEdit").onclick = close;

$("#editor").addEventListener("click", e => {
    if (e.target === $("#editor")) close();
});

$("#saveEdit").onclick = async () => {

    if (!checkAuth()) return;

    const body = $("#editorBody");

    if (current === "profile") {
        body.querySelectorAll("[data-key]").forEach(el => {
            data[el.dataset.key] = el.value;
        });

        const file = $("#heroUpload")?.files[0];

        if (file) {
            data.heroImage = await fileToData(file);
        }
    }

    if (current === "links" || current === "projects") {
        body.querySelectorAll(".editor-item").forEach(el => {
            const i = +el.dataset.index;

            const obj = current === "links"
                ? data.links[i]
                : data.projects[i];

            el.querySelectorAll("[data-key]").forEach(input => {
                obj[input.dataset.key] = input.value;
            });
        });
    }

    if (current === "photos") {
        body.querySelectorAll(".editor-item").forEach(el => {
            const i = +el.dataset.index;
            data.photos[i] = el.querySelector('[data-key="photo"]').value;
        });

        const files = [...($("#photoUpload")?.files || [])];

        for (const file of files) {
            data.photos.push(await fileToData(file));
        }
    }

    persist();
    close();
};

// ==========================================
// IMAGE UPLOAD
// ==========================================

function fileToData(file) {
    return new Promise((resolve, reject) => {
        if (!file.type.startsWith("image/")) {
            reject(new Error("File bukan gambar"));
            return;
        }

        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file);
    });
}

// ==========================================
// CROP FOTO MENJADI KOTAK
// Crop bagian tengah secara otomatis
// ==========================================

function cropImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
            const size = Math.min(img.width, img.height);
            const canvas = document.createElement("canvas");

            canvas.width = size;
            canvas.height = size;

            const ctx = canvas.getContext("2d");

            ctx.drawImage(
                img,
                (img.width - size) / 2,
                (img.height - size) / 2,
                size,
                size,
                0,
                0,
                size,
                size
            );

            resolve(canvas.toDataURL("image/jpeg", 0.9));
        };

        img.onerror = reject;
        img.src = src;
    });
}

// ==========================================
// HAPUS BACKGROUND POLOS
// Untuk warna putih atau warna terang
// Bukan penghapus AI
// ==========================================

function removePlainBackground(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();

        img.onload = () => {
            const canvas = document.createElement("canvas");

            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext("2d", {
                willReadFrequently: true
            });

            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(
                0, 0, canvas.width, canvas.height
            );

            const pixels = imageData.data;

            for (let i = 0; i < pixels.length; i += 4) {
                const r = pixels[i];
                const g = pixels[i + 1];
                const b = pixels[i + 2];

                if (r > 235 && g > 235 && b > 235) {
                    pixels[i + 3] = 0;
                }
            }

            ctx.putImageData(imageData, 0, 0);

            resolve(canvas.toDataURL("image/png"));
        };

        img.onerror = reject;
        img.src = src;
    });
}

// ==========================================
// FOTO ZOOM FULLSCREEN
// ==========================================

const zoomStyle = document.createElement("style");

zoomStyle.textContent = `
#photoViewer {
    display:none;
    position:fixed;
    inset:0;
    z-index:99999;
    background:rgba(0,0,0,.94);
    align-items:center;
    justify-content:center;
    padding:20px;
}
#photoViewer.active {display:flex}
#photoViewer img {
    max-width:100%;
    max-height:85vh;
    object-fit:contain;
    border-radius:14px;
    animation:photoZoom .3s ease;
}
#photoViewer button {
    position:absolute;
    top:20px;
    right:20px;
    font-size:28px;
    background:transparent;
    color:white;
    border:0;
}
@keyframes photoZoom {
    from {transform:scale(.7);opacity:0}
    to {transform:scale(1);opacity:1}
}
`;

document.head.appendChild(zoomStyle);

const viewer = document.createElement("div");
viewer.id = "photoViewer";
viewer.innerHTML = `
    <button type="button" aria-label="Tutup">×</button>
    <img src="" alt="Foto diperbesar">
`;

document.body.appendChild(viewer);

viewer.querySelector("button").onclick = () => {
    viewer.classList.remove("active");
};

viewer.onclick = e => {
    if (e.target === viewer) viewer.classList.remove("active");
};

document.addEventListener("click", e => {
    const img = e.target.closest(".zoom-photo");

    if (!img) return;

    viewer.querySelector("img").src = img.src;
    viewer.classList.add("active");
});

// ==========================================
// BACKUP DATA JSON
// ==========================================

function backupData() {
    const blob = new Blob(
        [JSON.stringify(data, null, 2)],
        { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "backup-portfolio-daffa.json";
    a.click();

    URL.revokeObjectURL(url);

    toast("Backup berhasil dibuat!");
}

// ==========================================
// RESTORE DATA JSON
// ==========================================

function restoreData(file) {
    const reader = new FileReader();

    reader.onload = () => {
        try {
            const restored = JSON.parse(reader.result);

            if (
                !restored.name ||
                !Array.isArray(restored.links) ||
                !Array.isArray(restored.photos) ||
                !Array.isArray(restored.projects)
            ) {
                throw new Error("Format backup tidak sesuai");
            }

            data = restored;
            persist("Data berhasil dipulihkan!");
        } catch (e) {
            toast("File backup tidak valid!");
        }
    };

    reader.readAsText(file);
}

// ==========================================
// PANEL BACKUP & RESTORE
// ==========================================

const backupPanel = document.createElement("div");

backupPanel.id = "portfolioBackup";
backupPanel.style.cssText = `
position:fixed;
bottom:20px;
left:20px;
z-index:9999;
display:flex;
gap:8px;
flex-wrap:wrap;
`;

backupPanel.innerHTML = `
<button id="backupButton" type="button">Backup Data</button>
<button id="restoreButton" type="button">Restore Data</button>
<input type="file" id="restoreFile"
       accept=".json,application/json"
       hidden>
`;

document.body.appendChild(backupPanel);

$("#backupButton").onclick = () => {
    if (checkAuth()) backupData();
};

$("#restoreButton").onclick = () => {
    if (checkAuth()) $("#restoreFile").click();
};

$("#restoreFile").onchange = e => {
    const file = e.target.files[0];

    if (file && confirm("Ganti semua data dengan backup ini?")) {
        restoreData(file);
    }

    e.target.value = "";
};

// ==========================================
// MUSIC PLAYER
// File: background.mp3
// Letakkan sejajar dengan index.html
// ==========================================

const music = new Audio("background.mp3");

music.loop = true;
music.volume = 0.35;

const musicButton = document.createElement("button");

musicButton.id = "musicButton";
musicButton.textContent = "♫ Putar Musik";

musicButton.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
z-index:9999;
padding:12px 18px;
border-radius:30px;
border:1px solid rgba(255,255,255,.3);
background:#142c50;
color:white;
cursor:pointer;
`;

document.body.appendChild(musicButton);

musicButton.onclick = async () => {
    try {
        if (music.paused) {
            await music.play();
            musicButton.textContent = "Ⅱ Pause Musik";
        } else {
            music.pause();
            musicButton.textContent = "♫ Putar Musik";
        }
    } catch (e) {
        toast("Musik tidak ditemukan. Periksa background.mp3");
    }
};

// ==========================================
// KUNCI MODE EDIT
// ==========================================

const lockButton = document.createElement("button");

lockButton.textContent = "🔒 Kunci Edit";

lockButton.style.cssText = `
position:fixed;
bottom:70px;
right:20px;
z-index:9999;
padding:10px 15px;
border-radius:25px;
background:#142c50;
color:white;
border:1px solid rgba(255,255,255,.3);
`;

document.body.appendChild(lockButton);

lockButton.onclick = () => {
    authenticated = false;
    close();
    toast("Mode Edit dikunci!");
};

// ==========================================
// START WEBSITE
// ==========================================

render();
