export function initParticles() {
    const canvas = document.getElementById("bg-canvas");

    if (!canvas) {
        return;
    }

    const ctx = canvas.getContext("2d");

    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.size = Math.random() * 2 + 0.5;

            this.speedX =
                (Math.random() - 0.5) * 0.4;

            this.speedY =
                (Math.random() - 0.5) * 0.4;

            this.opacity =
                Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (
                this.x < 0 ||
                this.x > canvas.width ||
                this.y < 0 ||
                this.y > canvas.height
            ) {
                this.reset();
            }
        }

        draw() {
            ctx.fillStyle =
                `rgba(0,243,255,${this.opacity})`;

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }
    }

    resizeCanvas();

    window.addEventListener(
        "resize",
        resizeCanvas
    );

    for (let i = 0; i < 45; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}
