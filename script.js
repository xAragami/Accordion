
document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll(".panel");

    function togglePanel(body, icon) {
        const isOpen = body.classList.contains("active");
        body.classList.toggle("active", !isOpen);
        icon.textContent = isOpen ? "expand_more" : "expand_less";
    }

    panels.forEach(panel => {
        const header = panel.querySelector(".panel-header");
        const body = panel.querySelector(".panel-body");
        const icon = panel.querySelector(".icon-toggle");

        header.addEventListener("click", () => {
            togglePanel(body, icon);

            panels.forEach(otherPanel => {
                if (otherPanel !== panel) {
                    const otherBody = otherPanel.querySelector(".panel-body");
                    const otherIcon = otherPanel.querySelector(".icon-toggle");
                    if (otherBody.classList.contains("active")) {
                        togglePanel(otherBody, otherIcon);
                    }
                }
            });
        });
    });
});