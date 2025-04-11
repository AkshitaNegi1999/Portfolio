import { useEffect, useRef, useState } from "react";

const techStack = [
  "ReactJS", "NextJS", "JavaScript", "TypeScript", "Node.js", "SQL",
  "jQuery", "ASP.NET", "TailwindCSS", "Material UI", "ShadCN", "CSS", "HTML5"
];

const colorPalette = [
  "#66fcf1", "#45a29e", "#8be9fd", "#b084f9", "#f1fa8c", "#ff79c6",
  "#50fa7b", "#bd93f9", "#ffb86c", "#8afff7", "#9aedfe", "#f093fb", "#6c5ce7"
];

export default function TechNetwork() {
  const canvasRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [points, setPoints] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      generatePoints();
    };

    const generatePoints = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const baseRadius = Math.min(width, height) / 2.5;
      const radius = width < 768 ? baseRadius * 0.75 : baseRadius;
      const centerX = width / 2;
      const centerY = height / 2;
      const angleStep = (2 * Math.PI) / techStack.length;

      const newPoints = techStack.map((tech, index) => {
        const angle = angleStep * index;
        return {
          x: centerX + radius * Math.cos(angle),
          y: centerY + radius * Math.sin(angle),
          label: tech
        };
      });

      setPoints(newPoints);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const p1 = points[i];
          const p2 = points[j];

          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;

          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          gradient.addColorStop(0, colorPalette[i % colorPalette.length]);
          gradient.addColorStop(1, colorPalette[j % colorPalette.length]);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.quadraticCurveTo(midX, midY - 60, p2.x, p2.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = (i === hoverIndex || j === hoverIndex) ? 2.2 : 1;
          ctx.globalAlpha = (i === hoverIndex || j === hoverIndex) ? 0.85 : 0.15;
          ctx.shadowBlur = (i === hoverIndex || j === hoverIndex) ? 10 : 4;
          ctx.shadowColor = gradient;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }

      points.forEach((p, index) => {
        ctx.save();
        const color = colorPalette[index % colorPalette.length];
        const isHovered = index === hoverIndex;

        ctx.shadowColor = color;
        ctx.shadowBlur = isHovered ? 18 : 5;
        ctx.fillStyle = color;
        ctx.font = isHovered ? "bold 17px 'Segoe UI'" : "bold 14px 'Segoe UI'";
        ctx.textAlign = "center";
        ctx.translate(p.x, p.y);
        if (isHovered) ctx.scale(1.2, 1.2);
        ctx.fillText(p.label, 0, 0);
        ctx.restore();
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, [points, hoverIndex, isMobile]);

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const found = points.findIndex(p => {
      const dx = p.x - x;
      const dy = p.y - y;
      return Math.sqrt(dx * dx + dy * dy) < 50;
    });

    setHoverIndex(found);
  };

  return (
    <>
      {!isMobile && (
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
      )}

      {isMobile && (
        <div className="absolute top-0 left-0 p-4 flex flex-col gap-4 z-10">
          {techStack.map((tech, i) => (
            <div
              key={tech}
              className="flex items-center gap-3 transition-transform duration-200 hover:scale-105"
            >
              <div
                className="w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: colorPalette[i % colorPalette.length] }}
              />
              <span
                className="text-white text-sm font-semibold"
                style={{ color: colorPalette[i % colorPalette.length] }}
              >
                {tech}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
