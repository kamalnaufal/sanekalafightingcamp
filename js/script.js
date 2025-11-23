document.addEventListener("DOMContentLoaded", function() {
    
    // =========================================
    // 1. MOBILE HAMBURGER MENU
    // =========================================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            // Toggle kelas 'active' pada burger dan menu
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    // =========================================
    // 2. TUTUP MENU SAAT LINK DI-KLIK
    // =========================================
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Jika menu sedang terbuka (ada class active), maka tutup menu
            // Berlaku untuk semua link navigasi agar user bisa melihat konten yang dituju
            if (hamburger.classList.contains("active")) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    });

    // =========================================
    // 3. CONTACT FORM KE GOOGLE SHEETS
    // =========================================
    
    // PENTING: Ganti URL di bawah ini dengan URL Web App Google Script Anda sendiri!
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyJXbYfAT7tnTpWfothySSTW6JEeksN2twk2qTVUDMR8nJ7BUqTUKzb5K03s8vlxqSxWw/exec'; 
    
    const form = document.forms['sanekala-contact-form'];
    
    // Cek apakah form ada di halaman ini untuk menghindari error di halaman lain
    if (form) {
        const btnKirim = document.querySelector('.btn-submit');
        const btnLoading = document.querySelector('.btn-loading');
        const myAlert = document.querySelector('.my-alert');

        form.addEventListener('submit', e => {
            e.preventDefault();
            
            // 1. Ubah tombol menjadi Loading
            btnLoading.classList.remove('d-none');
            btnKirim.classList.add('d-none');
            myAlert.classList.add('d-none'); // Sembunyikan alert lama jika ada

            // 2. Kirim data ke Google Sheets
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                // 3. Jika Sukses
                console.log('Success!', response);
                
                // Kembalikan tombol, tampilkan alert sukses
                btnLoading.classList.add('d-none');
                btnKirim.classList.remove('d-none');
                myAlert.classList.remove('d-none');
                
                // Kosongkan form
                form.reset();
            })
            .catch(error => {
                // 4. Jika Gagal
                console.error('Error!', error.message);
                
                // Kembalikan tombol agar user bisa coba lagi
                btnLoading.classList.add('d-none');
                btnKirim.classList.remove('d-none');
                
                // Tampilkan pesan error sederhana (browser alert)
                alert("Maaf, terjadi kesalahan saat mengirim pesan. Pastikan koneksi internet lancar.");
            });
        });
    }
});
