document.addEventListener('DOMContentLoaded', () => {

    // ==== FUNGSI UNTUK SPONSOR SLIDER ====
    const track = document.querySelector('.sponsor-track');
    
    // Cek jika track ada di halaman
    if (track) {
        const slides = Array.from(track.children);
        
        // Duplikasi semua slide untuk loop yang mulus
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });

        // Hitung ulang lebar track berdasarkan slide asli dan kloningan
        const totalSlides = track.children.length;
        const slideWidth = slides[0].offsetWidth; // Asumsi semua slide sama lebar
        
        // Atur lebar track di CSS (meskipun sudah diatur di CSS, ini untuk memastikan)
        // Lebar di CSS: (200px * 14) -> 200px * (7 asli + 7 kloning)
        // Jika Anda mengubah jumlah slide di HTML, pastikan CSS juga di-update
        // atau gunakan JS untuk mengaturnya secara dinamis.
    }


    // ==== FUNGSI UNTUK MENU MOBILE (HAMBURGER) ====
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('header nav');
    const navLinks = document.querySelectorAll('header nav a');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            // Ubah ikon burger menjadi 'X' saat menu aktif
            const icon = menuToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Tutup menu saat link di-klik (untuk navigasi di halaman yang sama)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

});