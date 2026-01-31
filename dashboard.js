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
  document.getElementById("ipt-year").style.color = "#f7eded";
}
//weka mwaka wa ipt
setIptYear();
//
function updateDashboardData() {
  //1.hesabu idadi
  const logEntries = document.querySelectorAll(".log-table tbody tr").length;
  //2.tafuta idadi ya logbook
  const logCountElement = document.querySelector(
    ".dashboard-cards .card:nth-child(1) p",
  );
  if (logCountElement) {
    logCountElement.textContent = `Entries: ${logEntries}`;
  }
}
updateDashboardData();

//
function checkPlacementStatus() {
  const studentStatus = "Assigned";
  const statusElement = document.querySelector(
    ".dashboard-cards .card:nth-child(2) p",
  );
  if (statusElement) {
    statusElement.textContent = `Status: ${studentStatus}`;
    if (studentStatus === "Assigned") {
      statusElement.textContent = studentStatus;
      statusElement.style.color = "#008000";
    } else {
      statusElement.style.color = "#ff5e00";
    }
  }
}
function addRecentActivity(message) {
  const activityList = document.querySelector(".recent-activity ul");
  const leo = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  //add new list
  const newActivity = document.createElement("li");
  newActivity.textContent = `${message} on ${leo}`;
  //iweke juu kabisa
  activityList.prepend(newActivity);
  //futa ujumbe wa mwisho
  if (activityList.children.length > 5) {
    activityList.removeChild(activityList.lastChild);
  }
}

document
  .getElementById("logbook-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const dataIput = document.getElementById("log-date").value;
    const taskInput = document.getElementById("log-task").value;
    if (dataIput && taskInput) {
      //ongeza table
      const tableBody = document.querySelector(".log-table tbody");
      const newRow = tableBody.insertRow(0);
      newRow.innerHTML = `
            <td>${dataIput}</td>
            <td>${taskInput}</td>
            <td><span class="status-badge pending">Pending</span></td>
        `;

      // 3. Update idadi ya Logbook Entries kwenye Dashboard
      const countElement = document.getElementById("logbook-count");
      const currentCount = tableBody.rows.length;
      countElement.textContent = `Entries: ${currentCount}`;

      // 4. Ongeza ujumbe kwenye Recent Activity
      addRecentActivity("Logbook entry added");

      // 5. Safisha fomu na urudi kwenye Dashboard (hiari)
      this.reset();
      alert("Logbook imetumwa kikamilifu!");
      showSection("dashboard-section");
    }
  });
