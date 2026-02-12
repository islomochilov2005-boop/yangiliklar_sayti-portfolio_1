/* ========================================
   IT NEWS UZ - PURE JAVASCRIPT
   No frameworks - Just vanilla JS
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ========================================
  // DARK/LIGHT THEME TOGGLE
  // ========================================
  const themeToggle = document.getElementById("themeToggle")
  const html = document.documentElement

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "dark"
  html.setAttribute("data-theme", savedTheme)
  if (themeToggle) {
    themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙"
  }

  // Theme toggle click
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme")
      const newTheme = currentTheme === "dark" ? "light" : "dark"

      html.setAttribute("data-theme", newTheme)
      localStorage.setItem("theme", newTheme)
      themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙"
    })
  }

  // ========================================
  // MOBILE MENU
  // ========================================
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const closeMenuBtn = document.getElementById("closeMenuBtn")

  function openMobileMenu() {
    if (mobileMenu && mobileOverlay) {
      mobileMenu.classList.add("active")
      mobileOverlay.classList.add("active")
      document.body.style.overflow = "hidden"
    }
  }

  function closeMobileMenu() {
    if (mobileMenu && mobileOverlay) {
      mobileMenu.classList.remove("active")
      mobileOverlay.classList.remove("active")
      document.body.style.overflow = ""
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", openMobileMenu)
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeMobileMenu)
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMobileMenu)
  }

  // Close menu on link click
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  // ========================================
  // SEARCH MODAL
  // ========================================
  const searchBtn = document.getElementById("searchBtn")
  const searchModal = document.getElementById("searchModal")
  const closeSearchBtn = document.getElementById("closeSearchBtn")
  const searchInput = document.getElementById("searchInput")

  function openSearchModal() {
    if (searchModal) {
      searchModal.classList.add("active")
      document.body.style.overflow = "hidden"
      if (searchInput) {
        setTimeout(() => {
          searchInput.focus()
        }, 100)
      }
    }
  }

  function closeSearchModal() {
    if (searchModal) {
      searchModal.classList.remove("active")
      document.body.style.overflow = ""
      if (searchInput) {
        searchInput.value = ""
      }
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", openSearchModal)
  }

  if (closeSearchBtn) {
    closeSearchBtn.addEventListener("click", closeSearchModal)
  }

  // Close modal on background click
  if (searchModal) {
    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) {
        closeSearchModal()
      }
    })
  }

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearchModal()
      closeMobileMenu()
    }
  })

  // ========================================
  // SCROLL TO TOP BUTTON
  // ========================================
  const scrollTopBtn = document.getElementById("scrollTopBtn")

  window.addEventListener("scroll", () => {
    if (scrollTopBtn) {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add("visible")
      } else {
        scrollTopBtn.classList.remove("visible")
      }
    }
  })

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // ========================================
  // NEWSLETTER FORM
  // ========================================
  const newsletterForm = document.getElementById("newsletterForm")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const emailInput = newsletterForm.querySelector('input[type="email"]')
      const email = emailInput.value.trim()

      if (email) {
        alert("Rahmat! " + email + " manziliga obuna tasdiqlandi.")
        emailInput.value = ""
      }
    })
  }

  // ========================================
  // DROPDOWN HOVER FOR TOUCH DEVICES
  // ========================================
  const dropdowns = document.querySelectorAll(".dropdown")

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      // For touch devices
      if (window.innerWidth <= 1024) {
        const menu = dropdown.querySelector(".dropdown-menu")
        if (menu) {
          const isVisible = menu.style.opacity === "1"

          // Close all other dropdowns
          dropdowns.forEach((d) => {
            const m = d.querySelector(".dropdown-menu")
            if (m && m !== menu) {
              m.style.opacity = "0"
              m.style.visibility = "hidden"
            }
          })

          // Toggle current dropdown
          if (isVisible) {
            menu.style.opacity = "0"
            menu.style.visibility = "hidden"
          } else {
            menu.style.opacity = "1"
            menu.style.visibility = "visible"
          }
        }
      }
    })
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((dropdown) => {
        const menu = dropdown.querySelector(".dropdown-menu")
        if (menu) {
          menu.style.opacity = ""
          menu.style.visibility = ""
        }
      })
    }
  })
})
