export const stageData = {
    1: {
        badge: "STAGE 01 // ORAL GI ROUTE",

        title: "Swallow: Oral Administration",

        desc:
            "The capsule is swallowed as a conceptual oral delivery mechanism. " +
            "The proposed capsule is represented as remaining within the GI route.",

        specs: [
            {
                label: "Transit Path",
                val: "Esophagus → GI lumen"
            },
            {
                label: "Shell",
                val: "Conceptual biocompatible housing"
            },
            {
                label: "Target Interaction",
                val: "Not shown in GI view"
            }
        ],

        svg: `
            <rect
                x="50"
                y="50"
                width="500"
                height="200"
                rx="12"
                fill="rgba(0,243,255,0.02)"
                stroke="rgba(0,243,255,0.15)"
            />

            <path
                d="M100 150 Q250 80 400 150 T500 150"
                fill="none"
                stroke="#00f3ff"
                stroke-width="2"
                stroke-dasharray="6 4"
                class="flow-line"
            />

            <g transform="translate(260 125)">
                <rect
                    x="0"
                    y="0"
                    width="80"
                    height="40"
                    rx="20"
                    fill="#0a1322"
                    stroke="#00f3ff"
                    stroke-width="2"
                />

                <circle
                    cx="20"
                    cy="20"
                    r="8"
                    fill="#00f3ff"
                    class="animate-ping"
                />

                <text
                    x="35"
                    y="24"
                    fill="#00e5a3"
                    font-family="monospace"
                    font-size="10"
                    font-weight="bold"
                >
                    INERT
                </text>
            </g>
        `
    },

    2: {
        badge: "STAGE 02 // OPTICAL TARGETING",

        title: "Detect: Onboard Optical Sensing",

        desc:
            "The conceptual device uses an optical sensing module to inspect " +
            "a separate target-tissue visualization.",

        specs: [
            {
                label: "Sensor",
                val: "Conceptual optical array"
            },
            {
                label: "Target",
                val: "Target tissue micro-site"
            },
            {
                label: "View logic",
                val: "Separate from GI transit"
            }
        ],

        svg: `
            <!-- Put Stage 2 SVG here -->
        `
    },

    3: {
        badge: "STAGE 03 // WIRELESS POWER",

        title: "Activate: Wireless Energy",

        desc:
            "External energy is illustrated as a conceptual activation mechanism " +
            "rather than an established clinical capability.",

        specs: [
            {
                label: "Energy",
                val: "NIR / ultrasound concept"
            },
            {
                label: "Battery",
                val: "Conceptual battery-free design"
            },
            {
                label: "Activation",
                val: "External trigger"
            }
        ],

        svg: `
            <!-- Put Stage 3 SVG here -->
        `
    },

    4: {
        badge: "STAGE 04 // TARGET-TISSUE CONCEPT",

        title: "Deliver: Localized Interaction",

        desc:
            "The separate micro-site view illustrates the proposed interaction " +
            "between the device and a conceptual target region.",

        specs: [
            {
                label: "Interface",
                val: "Conceptual micro-injector"
            },
            {
                label: "Target",
                val: "Localized target zone"
            },
            {
                label: "Validation",
                val: "Requires experimental study"
            }
        ],

        svg: `
            <!-- Put Stage 4 SVG here -->
        `
    }
};
