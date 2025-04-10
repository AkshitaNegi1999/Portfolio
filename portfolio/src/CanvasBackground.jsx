
import { useEffect } from "react";

export default function CanvasBackground() {
  useEffect(() => {
   
    const script = document.createElement("script");
    script.src = "/matter.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
     
    };
  }, []);

  return (
    <div
      id="wrapper-canvas"
      className="absolute inset-0 -z-10"
    />
  );
}
