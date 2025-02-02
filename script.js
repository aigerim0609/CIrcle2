document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");

    // Случайная генерация цвета и размеров для кругов
    circles.forEach((circle, index) => {
        // Случайный цвет для border
        const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        circle.style.borderColor = randomColor;

        // Случайное изменение скорости анимации для каждого круга
        const randomDelay = Math.random() * 1.5; // случайная задержка
        circle.style.animationDelay = `${randomDelay}s`;

        // Случайное изменение масштаба
        const randomScale = 0.5 + Math.random() * 1.5;
        circle.style.transform = `scaleX(${randomScale}) translateZ(50px)`;

        // Добавление эффекта на hover
        circle.addEventListener("mouseenter", () => {
            circle.style.transform = `scaleX(${randomScale * 1.5}) translateZ(60px)`;
            circle.style.transition = "transform 0.3s ease-in-out";
        });

        circle.addEventListener("mouseleave", () => {
            circle.style.transform = `scaleX(${randomScale}) translateZ(50px)`;
        });
    });

    // Создание случайных эффектов для движения кругов
    let angle = 0;
    setInterval(() => {
        circles.forEach((circle, index) => {
            const offset = Math.sin(angle + index) * 30; // движение по оси Y
            const rotation = Math.cos(angle + index) * 30; // вращение вокруг оси
            circle.style.transform = `scaleX(1.5) translateZ(50px) translateY(${offset}px) rotate(${rotation}deg)`;
        });
        angle += 0.05; // увеличение угла для плавного движения
    }, 16); // обновление анимации каждые 16 миллисекунд (60 FPS)
});
