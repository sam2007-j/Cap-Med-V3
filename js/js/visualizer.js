import { stageData } from "./stageData.js";

export function selectStage(stageNumber) {

    const data = stageData[stageNumber];

    if (!data) {
        console.error(
            `Unknown stage: ${stageNumber}`
        );

        return;
    }

    updateTabs(stageNumber);
    updateStageText(data);
    updateSpecs(data);
    updateVisualization(data);
}

function updateTabs(stageNumber) {

    for (let i = 1; i <= 4; i++) {

        const tab =
            document.getElementById(
                `tab-stage-${i}`
            );

        if (!tab) continue;

        if (i === stageNumber) {

            tab.classList.add(
                "border-l-cyan-400"
            );

            tab.classList.remove(
                "border-l-transparent"
            );

        } else {

            tab.classList.remove(
                "border-l-cyan-400"
            );

            tab.classList.add(
                "border-l-transparent"
            );
        }
    }
}

function updateStageText(data) {

    document.getElementById(
        "stage-badge"
    ).innerText = data.badge;

    document.getElementById(
        "stage-title"
    ).innerText = data.title;

    document.getElementById(
        "stage-desc"
    ).innerText = data.desc;
}

function updateSpecs(data) {

    const container =
        document.getElementById(
            "stage-specs"
        );

    container.innerHTML =
        data.specs.map(spec => `
            <div
                class="flex justify-between
                       text-xs font-mono"
            >
                <span class="text-slate-400">
                    ${spec.label}:
                </span>

                <span class="text-cyan-300 font-bold">
                    ${spec.val}
                </span>
            </div>
        `).join("");
}

function updateVisualization(data) {

    document.getElementById(
        "stage-svg"
    ).innerHTML = data.svg;
}
