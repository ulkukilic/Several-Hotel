
      document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.querySelector(".menu-toggle");
        const navList = document.querySelector(".nav-list");

        menuToggle.addEventListener("click", function () {
          navList.classList.toggle("active");
          const isExpanded = navList.classList.contains("active");
          menuToggle.setAttribute("aria-expanded", isExpanded);
        });

        document.addEventListener("click", function (event) {
          if (
            !event.target.closest(".nav-list") &&
            !event.target.closest(".menu-toggle") &&
            navList.classList.contains("active")
          ) {
            navList.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
          }
        });

        document.addEventListener("keydown", function (event) {
          if (event.key === "Escape" && navList.classList.contains("active")) {
            navList.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
          }
        });
      });


