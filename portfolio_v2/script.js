// 🌙 Theme Toggle with Emoji Animation + localStorage + GSAP

  /*st toggleThemeBtn = document.getElementById('toggle-theme');
  toggleThemeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });

  // Scroll Indicator
  const scrollIndicator = document.getElementById('scroll-indicator');
  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    scrollIndicator.style.width = `${scrolled}%`;
  });
*/

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-theme");
    const root = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    toggleBtn.textContent = "🌞";
  } else {
    toggleBtn.textContent = "🌚";
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Switch Emoji
    toggleBtn.textContent = isDark ? "🌞" : "🌚";

    // Animate icon
    gsap.fromTo(
      toggleBtn,
      { scale: 0.7, rotate: -15 },
      { scale: 1, rotate: 0, duration: 0.4, ease: "back.out(1.7)" }
    );
  });
});

// // 🎯 Scroll Progress Bar
// window.addEventListener("scroll", () => {
//   const scrollTop = window.scrollY;
//   const docHeight = document.body.scrollHeight - window.innerHeight;
//   const progress = (scrollTop / docHeight) * 100;
//   document.getElementById("scroll-indicator").style.width = `${progress}%`;
// });

// ✨ GSAP Animations on Scroll
gsap.registerPlugin(ScrollTrigger);

// Hero animation
gsap.from(".hero h2", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});
gsap.from(".hero p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power2.out",
});

//Sections fade in
// document.querySelectorAll("section").forEach((section) => {
//   gsap.from(section, {
//     scrollTrigger: {
//       trigger: section,
//       start: "top 80%",
//     },
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//   });
// });


  function copyPhoneNumber() {
    const number = '0975 079 0488';
    navigator.clipboard.writeText(number).then(() => {
      alert('Phone number copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }