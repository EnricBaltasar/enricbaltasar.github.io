document.addEventListener('DOMContentLoaded', function() {
  var siteHeader = document.getElementById('site-header');
  var toggleBtn = document.getElementById('toggle-navigation');
  var menuPrimary = document.getElementById('menu-primary');
  var main = document.getElementById('main');
  var overflowContainer = document.getElementById('overflow-container');
  var breadcrumbs = document.querySelector('.breadcrumbs');

  // Mobile menu positioning
  function menuPositioning() {
    if (window.innerWidth < 800 && siteHeader) {
      var headerHeight = siteHeader.offsetHeight;
      menuPrimary.style.top = (headerHeight - 4) + 'px';
    } else if (menuPrimary) {
      menuPrimary.style.top = '';
    }
  }

  // Toggle mobile menu
  function openPrimaryMenu() {
    if (!siteHeader || !menuPrimary || !main) return;

    var menuWidth = menuPrimary.offsetWidth;

    if (siteHeader.classList.contains('toggled')) {
      siteHeader.classList.remove('toggled');
      main.style.transform = 'translateX(0)';
      if (breadcrumbs) breadcrumbs.style.transform = 'translateX(0)';
      window.removeEventListener('scroll', closeMenuOnScroll);
      setTimeout(function() {
        menuPrimary.style.height = 'auto';
      }, 400);
    } else {
      siteHeader.classList.add('toggled');
      if (overflowContainer) {
        menuPrimary.style.height = overflowContainer.offsetHeight + 'px';
      }
      main.style.transform = 'translateX(' + menuWidth + 'px)';
      if (breadcrumbs) breadcrumbs.style.transform = 'translateX(' + menuWidth + 'px)';
      window.addEventListener('scroll', closeMenuOnScroll);
    }
  }

  // Close menu when scrolling past menu items
  function closeMenuOnScroll() {
    var menuItems = document.getElementById('menu-primary-items');
    if (!menuItems) return;
    var menuBottom = menuItems.getBoundingClientRect().top + menuItems.offsetHeight + window.scrollY;
    if (window.scrollY > menuBottom) {
      window.removeEventListener('scroll', closeMenuOnScroll);
      openPrimaryMenu();
    }
  }

  // Event listeners
  if (toggleBtn) {
    toggleBtn.addEventListener('click', openPrimaryMenu);
  }

  // Close mobile menu on resize to desktop
  window.addEventListener('resize', function() {
    menuPositioning();
    if (window.innerWidth > 799 && siteHeader && siteHeader.classList.contains('toggled')) {
      siteHeader.classList.remove('toggled');
      if (main) main.style.transform = '';
      if (breadcrumbs) breadcrumbs.style.transform = '';
      if (menuPrimary) menuPrimary.style.height = 'auto';
      window.removeEventListener('scroll', closeMenuOnScroll);
    }
  });

  menuPositioning();

  // Scroll to top
  var scrollBtn = document.getElementById('scroll-to-top');
  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY >= 200) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      scrollBtn.blur();
    });
  }

  // Dark mode toggle
  var themeToggle = document.getElementById('theme-toggle');
  var moonIcon = document.getElementById('moon-icon');
  var sunIcon = document.getElementById('sun-icon');

  function setTheme(dark) {
    if (dark) {
      document.body.classList.add('dark');
      if (moonIcon) moonIcon.style.display = 'none';
      if (sunIcon) sunIcon.style.display = '';
    } else {
      document.body.classList.remove('dark');
      if (moonIcon) moonIcon.style.display = '';
      if (sunIcon) sunIcon.style.display = 'none';
    }
  }

  // Sync icons with current body state (inline script may have already set dark class)
  setTheme(document.body.classList.contains('dark'));

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      var isDark = document.body.classList.contains('dark');
      setTheme(!isDark);
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
  }

  // Listen for system preference changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches);
      }
    });
  }

  // Keyboard navigation for menu items
  var menuLinks = document.querySelectorAll('.menu-item a');
  menuLinks.forEach(function(link) {
    link.addEventListener('focus', function() {
      var li = this.parentElement;
      if (li) li.classList.add('focused');
      var ul = this.closest('ul');
      if (ul) ul.classList.add('focused');
    });
    link.addEventListener('focusout', function() {
      var li = this.parentElement;
      if (li) li.classList.remove('focused');
      var ul = this.closest('ul');
      if (ul) ul.classList.remove('focused');
    });
  });
});

// Skip-to-content link fix for Chrome & IE9
window.addEventListener('hashchange', function() {
  var element = document.getElementById(location.hash.substring(1));
  if (element) {
    if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
      element.tabIndex = -1;
    }
    element.focus();
  }
}, false);
