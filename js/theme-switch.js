const themeSwitcher = document.getElementById("theme-selector");
const mobileThemeSwitcher = document.getElementById("mobile-theme-selector");

document.addEventListener("DOMContentLoaded", () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    if (window.innerWidth <= 786) {
        mobileThemeSwitcher.style.display = 'block';
    } else {
        themeSwitcher.style.visibility = 'visible';
    }

    document.documentElement.setAttribute("theme", currentTheme);
    themeSwitcher.textContent = currentTheme === "dark" ? "Switch To Light Mode" : "Switch To Dark Mode";
});

window.addEventListener("resize", () => {
    if (window.innerWidth <= 786) {
        mobileThemeSwitcher.style.display = 'block';
    }
});

function switchTheme() {
    let newTheme = document.documentElement.getAttribute("theme") === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeSwitcher.textContent = newTheme === "dark" ? "Switch To Light Mode" : "Switch To Dark Mode";
}