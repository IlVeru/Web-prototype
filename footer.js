document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".footer");
    const showFooter = () => {
        if (window.scrollY > 3300) { // Ubah nilai ini sesuai kebutuhan
            footer.classList.add("show");
        } else {
            footer.classList.remove("show");
        }
    };

    window.addEventListener("scroll", showFooter);

    // Update tahun otomatis di footer
    document.getElementById("year").textContent = new Date().getFullYear();
});
