/**
 * Travel Nursing Agency - Dashboard JS
 * 
 * Handles:
 * - Tab switching
 * - Theme toggle (internal to dashboard)
 * - Dynamic data rendering (placeholder)
 */

function switchTab(tabId) {
    const tabs = document.querySelectorAll('.dashboard-tab');
    const navLinks = document.querySelectorAll('.nav-link-dashboard');
    const title = document.getElementById('tab-title');
    
    // Hide all tabs
    tabs.forEach(tab => tab.classList.add('d-none'));
    
    // Deactivate all nav links
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Show active tab
    const activeTab = document.getElementById(`${tabId}-content`);
    if (activeTab) {
        activeTab.classList.remove('d-none');
    }
    
    // Activate clicked link
    // Note: In a real app, this would be based on the event target or passed element
    event.currentTarget.classList.add('active');
    
    // Update Title
    title.innerText = tabId.charAt(0).toUpperCase() + tabId.slice(1);
}

// Internal Dashboard Theme Toggle
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const icon = document.querySelector('#theme-toggle-dashboard i');
    if (newTheme === 'dark') {
        icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    } else {
        icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    }
}
