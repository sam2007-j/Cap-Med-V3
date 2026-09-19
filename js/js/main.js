import { initParticles } from "./particles.js";
import { selectStage } from "./visualizer.js";

window.addEventListener("DOMContentLoaded", () => {

    initParticles();

    selectStage(1);

    setupModal();
});

function setupModal() {

    const modal =
        document.getElementById(
            "pitch-modal"
        );

    const openButton =
        document.querySelector(
            "[data-open-pitch]"
        );

    const closeButton =
        document.querySelector(
            "[data-close-pitch]"
        );

    if (openButton) {

        openButton.addEventListener(
            "click",
            () => {
                modal.classList.remove("hidden");
                modal.classList.add("flex");
            }
        );
    }

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeModal
        );
    }

    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {
                closeModal();
            }
        }
    );
}

function closeModal() {

    const modal =
        document.getElementById(
            "pitch-modal"
        );

    modal.classList.add("hidden");
    modal.classList.remove("flex");
}
