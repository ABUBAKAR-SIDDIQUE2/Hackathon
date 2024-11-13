var skillsSection = document.getElementById("skills");
var toggleSkillsButton = document.getElementById("toggle-skills");
toggleSkillsButton.textContent = "Show Skills";
function toggleSkillsVisibility() {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsButton.textContent = "Hide Skills";
    }
    else {
        skillsSection.style.display = "none";
        toggleSkillsButton.textContent = "Show Skills";
    }
}
toggleSkillsButton.addEventListener("click", toggleSkillsVisibility);
