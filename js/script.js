document.addEventListener("DOMContentLoaded", function() {
    
    // --- Mobile Hamburger Menu ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        // Toggle kelas 'active' pada burger dan menu
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // --- Menutup menu saat link di-klik ---
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Cek jika link bukan tombol 'kontak' yang mungkin tidak perlu menutup menu
            if (!link.classList.contains('btn')) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            } else if (navMenu.classList.contains('active')) {
                // Jika itu tombol 'kontak' dan menu terbuka, tutup menu
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    });

    // --- Smooth Scroll (jika menggunakan link internal #) ---
    // (Script di atas sudah meng-handle penutupan menu, 
    // CSS 'scroll-behavior: smooth' di <html> sudah meng-handle scrolling)
    
});