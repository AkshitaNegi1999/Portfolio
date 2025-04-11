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

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generatePoints();
    };

    const generatePoints = () => {
      const radius = Math.min(canvas.width, canvas.height) / 3;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

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
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw curved lines
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
          ctx.lineWidth = (i === hoverIndex || j === hoverIndex) ? 2.2 : 1.2;
          ctx.globalAlpha = (i === hoverIndex || j === hoverIndex) ? 0.8 : 0.18;
          ctx.shadowBlur = (i === hoverIndex || j === hoverIndex) ? 10 : 4;
          ctx.shadowColor = gradient;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }

      // Draw tech labels
      points.forEach((p, index) => {
        ctx.save();
        ctx.shadowColor = colorPalette[index % colorPalette.length];
        ctx.shadowBlur = index === hoverIndex ? 16 : 6;
        ctx.fillStyle = colorPalette[index % colorPalette.length];
        ctx.font = index === hoverIndex ? "bold 17px 'Segoe UI'" : "bold 15px 'Segoe UI'";
        ctx.textAlign = "center";
        ctx.translate(p.x, p.y);
        if (index === hoverIndex) ctx.scale(1.15, 1.15);
        ctx.fillText(p.label, 0, 0);
        ctx.restore();
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, [points, hoverIndex]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const found = points.findIndex(p => {
      const dx = p.x - clientX;
      const dy = p.y - clientY;
      return Math.sqrt(dx * dx + dy * dy) < 50;
    });
    setHoverIndex(found);
  };

  const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <>
      {isLargeScreen && (
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
      )}
    </>
  );
}
