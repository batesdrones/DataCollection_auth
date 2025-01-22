document.addEventListener("DOMContentLoaded", () => {
    const sections = {
        login: document.getElementById("login-section"),
        createAccount: document.getElementById("create-account-section"),
        forgotPassword: document.getElementById("forgot-password-section"),
        dashboard: document.getElementById("dashboard-section"),
        assessment: document.getElementById("assessment-section"),
        publicInfo: document.getElementById("public-info")
    };

    const headerTitle = document.getElementById("header-title");
    const loginForm = document.getElementById("login-form");
    const createAccountBtn = document.getElementById("create-account-btn");
    const backToLoginBtns = document.querySelectorAll("#back-to-login-btn, #back-to-login-btn-2");
    const takeAssessmentsBtn = document.getElementById("take-assessments-btn");

    headerTitle.addEventListener("click", () => {
        const isLoggedIn = sections.dashboard.style.display === "block";
        Object.values(sections).forEach(section => section.style.display = "none");
        if (isLoggedIn) {
            sections.dashboard.style.display = "block";
        } else {
            sections.login.style.display = "block";
        }
    });

    loginForm.addEventListener("submit", event => {
        event.preventDefault();
        // Simulated login flow
        sections.login.style.display = "none";
        sections.dashboard.style.display = "block";
    });

    createAccountBtn.addEventListener("click", () => {
        sections.login.style.display = "none";
        sections.createAccount.style.display = "block";
    });

    backToLoginBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            Object.values(sections).forEach(section => section.style.display = "none");
            sections.login.style.display = "block";
        });
    });

    takeAssessmentsBtn.addEventListener("click", event => {
        event.preventDefault();
        Object.values(sections).forEach(section => section.style.display = "none");
        sections.assessment.style.display = "block";
    });
});
