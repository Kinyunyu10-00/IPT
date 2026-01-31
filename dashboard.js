function showSection(sectionId) {
  // 1. Ficha sections zote
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // 2. Onyesha section uliyobonyeza
  document.getElementById(sectionId).style.display = "block";

  // 3. Badilisha 'active' class kwenye sidebar
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    // Kama link ina onclick inayofanana na sectionId, ipe rangi ya active
    if (link.getAttribute("onclick").includes(sectionId)) {
      link.classList.add("active");
    }
  });
}
//ongeza mwaka wa ipt wa sasa
function setIptYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("ipt-year").textContent = currentYear;
  document;
}
//weka mwaka wa ipt
setIptYear();
