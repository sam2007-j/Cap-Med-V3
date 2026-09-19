# Cap-Med-V3
CAP-MED-V3 is a bio-robotic micro-capsule that transforms stubborn fat into CO₂ and water
# CAP-MED-V3 — Targeted Micro-Robotic Fat Metabolism Platform

![Version](https://img.shields.io/badge/version-3.0.0--hackathon-00f3ff)
![License](https://img.shields.io/badge/license-MIT-00e5a3)
![Stack](https://img.shields.io/badge/tech-HTML5%20%7C%20TailwindCSS%20%7C%20SVG%20%7C%20VanillaJS-a855f7)

**CAP-MED-V3** is an interactive, web-based single-page conceptual application built to demonstrate a next-generation Bio-MEMS medical device platform. The system visualizes a battery-free, swallowable micro-robotic capsule designed for targeted, non-invasive subcutaneous fat metabolism and intracellular lipolysis.

---

## 🌟 Key Features

- **Interactive 4-Stage Mechanism Visualizer**: Step through the core operational lifecycle (Swallow $\rightarrow$ Detect $\rightarrow$ Activate $\rightarrow$ Deliver) with real-time dynamic SVG schematics and ray simulations.
- **Hero Schematics & Ray Scanning**: Features custom animated vector graphics depicting optical sensing, wireless near-infrared (NIR) / ultrasound energy harvesting, and micro-injection arrays.
- **HUD Dark-Mode Aesthetic**: Styled with a high-contrast Cyber-Med UI utilizing Tailwind CSS, glassmorphism panels (`backdrop-filter`), and floating background canvas particles.
- **Executive Pitch Modal**: Integrated 30-second summary pop-up designed for rapid hackathon judging or investor briefings.
- **Zero-Dependency Architecture**: Fully self-contained in a single lightweight file, requiring no backend compilation or heavy framework runtime.

---

## 🔬 System Concept Overview

| Parameter | Specification |
| :--- | :--- |
| **Form Factor** | 11mm $\times$ 26mm Swallowable Capsule |
| **Housing Materials** | Biocompatible Fluoropolymer & Titanium-coated seams |
| **Power Architecture** | **0% Internal Battery** — Wireless transcutaneous harvesting (808nm NIR Light / 1.5MHz Ultrasound) |
| **Targeting Array** | Multispectral Micro-Lens Array (Subcutaneous Adipocyte selection) |
| **Actuation Mechanism** | 50-Micron Retractable Silicon MEMS Micro-Injectors |
| **Byproduct Clearance** | Endogenous elimination ($\text{CO}_2$ exhaled, $\text{H}_2\text{O}$ renal exit, ATP energy) |

---

## 🛠️ Built With

* **HTML5**: Structured semantically for single-page presentation.
* **Tailwind CSS (CDN v3)**: Utility-first styling for glassmorphism, responsive grid layouts, and custom palette configuration.
* **Inline Animated SVG**: Vector graphics utilizing custom CSS keyframes (`dashMove`, `rayScan`, `pulseGlow`).
* **Vanilla JavaScript**: Lightweight event handling for state management, dynamic DOM swapping, and HTML5 Canvas particle rendering.

---

## 🚀 Getting Started

### Prerequisites

All dependencies (Tailwind CSS CDN and fonts) are loaded via standard public CDNs. No installation of `node`, `npm`, or build tooling is required.

### Quick Start

1. Clone or download the repository:
   ```bash
   git clone [https://github.com/your-username/cap-med-v3.git](https://github.com/your-username/cap-med-v3.git)
   cd cap-med-v3
