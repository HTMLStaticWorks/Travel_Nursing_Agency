/**
 * Travel Nursing Agency - Main JS
 * 
 * Handles:
 * - Theme toggle (Dark/Light)
 * - RTL toggle (Development only, persistence)
 * - Sticky Navbar
 * - Preloader
 * - Active Link Highlighting
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 800);
    }

    // 2. Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    };

    const updateThemeIcon = (theme) => {
        if (!themeBtn) return;
        const icon = themeBtn.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('bi-moon-fill');
            icon.classList.add('bi-sun-fill');
        } else {
            icon.classList.remove('bi-sun-fill');
            icon.classList.add('bi-moon-fill');
        }
    };

    // Initialize Theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // 3. Navbar Sticky & Active Links
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled', 'shadow-sm');
        } else {
            navbar.classList.remove('navbar-scrolled', 'shadow-sm');
        }
    });

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // 4. Form Validation (Bootstrap 5)
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // 5. RTL Toggle (For Testing / Ready for RTL)
    const rtlBtn = document.getElementById('rtl-toggle');
    const htmlTag = document.documentElement;

    const toggleRTL = () => {
        const isRTL = htmlTag.getAttribute('dir') === 'rtl';
        const newDir = isRTL ? 'ltr' : 'rtl';
        htmlTag.setAttribute('dir', newDir);
        localStorage.setItem('dir', newDir);
        
        // Optional: Update button text/icon
        if (rtlBtn) {
            rtlBtn.innerHTML = newDir === 'rtl' ? 'LTR' : 'RTL';
        }
    };

    if (rtlBtn) {
        rtlBtn.addEventListener('click', toggleRTL);
    }

    // Initialize RTL from localStorage
    const savedDir = localStorage.getItem('dir') || 'ltr';
});
