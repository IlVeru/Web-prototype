document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("toggleButton");
    const audio = document.getElementById("audio");

    button.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            button.textContent = "BGM ON";
            button.classList.add("on");
        } else {
            audio.pause();
            audio.currentTime = 0; // Reset audio ke awal saat berhenti
            button.textContent = "BGM OFF";
            button.classList.remove("on");
        }
        
    });
});



document.addEventListener("DOMContentLoaded", () => {
    // Data karakter (Nama, Gambar, Deskripsi)
    const characters = [
        {
            name: "Goblin Slayer",
            img: "Goblin_Slayer_Full_Body_II.jpeg",
            description: "Goblin Slayer adalah seorang petualang yang memburu goblin tanpa ampun. Ia selalu mengenakan baju besi dan jarang berbicara."
        },
        {
            name: "Priestess",
            img: "Priestess_Full_Body_II.jpg",
            description: "Priestess adalah seorang pendeta pemula yang memiliki hati baik. Dia bergabung dengan Goblin Slayer setelah selamat dari serangan goblin."
        },
        {
            name: "Cow Girl",
            img: "Cow_Girl_Full_Body_II.jpeg",
            description: "Cow Girl adalah teman masa kecil Goblin Slayer yang mengelola peternakan bersama pamannya."
        },
        {
            name: "High Elf Archer",
            img: "High_Elf_Archer_Full_Body_II.jpeg",
            description: "Seorang pemanah elf yang gesit dan bangga akan keahliannya dalam berburu serta kebenciannya terhadap goblin."
        },
        {
            name: "Dwarf Shaman",
            img: "Dwarf_Shaman.jpeg",
            description: "Dwarf Shaman adalah seorang penyihir kerdil dengan keahlian dalam sihir tanah dan minuman keras."
        },
        {
            name: "Lizard Priest",
            img: "Lizard_Priest_Character_29.jpeg",
            description: "Seorang pendeta kadal yang setia dan memiliki kebijaksanaan tinggi. Ia menggunakan sihir untuk bertarung."
        },
        {
            name: "Guild Girl",
            img: "Guild_Girl_Full_Body_II.jpeg",
            description: "Guild Girl adalah petugas administrasi guild yang selalu membantu para petualang dengan misi dan informasi."
        },
        {
            name: "Sword Maiden",
            img: "Sword_Maiden_Full_Body_II.jpeg",
            description: "Sword Maiden adalah seorang mantan pahlawan yang pernah mengalahkan raja iblis, tetapi memiliki trauma terhadap goblin."
        },
        {
            name: "Hero",
            img: "Hero_LN.jpeg",
            description: "Sword Maiden adalah seorang mantan pahlawan yang pernah mengalahkan raja iblis, t."
        }
    ];

    // Buat elemen modal secara dinamis
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="modal-title"></h2>
            <img id="modal-img" src="" alt="Character Image">
            <p id="modal-text"></p>
        </div>
    `;
    document.body.appendChild(modal);

    // Ambil elemen dalam modal
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalText = document.getElementById("modal-text");
    const closeButton = modal.querySelector(".close");

    // Pilih semua karakter dalam daftar
    const items = document.querySelectorAll(".item");

    items.forEach((item, index) => {
        item.addEventListener("click", () => {
            modal.classList.add("show"); // Tampilkan modal
            modalImg.src = characters[index].img; // Set gambar karakter
            modalTitle.textContent = characters[index].name; // Set nama karakter
            modalText.textContent = characters[index].description; // Set deskripsi karakter
        });
    });

    // Event listener untuk menutup modal
    closeButton.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Tutup modal saat klik di luar modal-content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Menghapus agar animasi bisa diulang
            }
        });
    }, { threshold: 0.5 }); // Threshold lebih kecil agar animasi lebih responsif

    fadeElements.forEach(el => observer.observe(el));
});



document.addEventListener("DOMContentLoaded", () => {
    const trailerSection = document.querySelector(".trailer");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trailerSection.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(trailerSection);
});
