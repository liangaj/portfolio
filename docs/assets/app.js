// Mobile nav toggle + current year — vanilla JS, no framework.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector("[data-nav-toggle]")
  var menu = document.querySelector("[data-nav-menu]")
  var iconOpen = document.querySelector("[data-icon-open]")
  var iconClose = document.querySelector("[data-icon-close]")

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isHidden = menu.classList.toggle("hidden")
      toggle.setAttribute("aria-expanded", String(!isHidden))
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle("hidden", !isHidden)
        iconClose.classList.toggle("hidden", isHidden)
      }
    })

    // Close the menu when a link is tapped
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.add("hidden")
        toggle.setAttribute("aria-expanded", "false")
        if (iconOpen && iconClose) {
          iconOpen.classList.remove("hidden")
          iconClose.classList.add("hidden")
        }
      })
    })
  }

  // Populate current year in footers
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear())
  })
})
