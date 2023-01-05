import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const trackerRef = useRef(null);
  let mouse = {
    x: 0,
    y: 0,
  };
  let x = 0;
  let y = 0;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const move = () => {
    const distX = mouse.x - x;
    const distY = mouse.y - y;

    x = x + distX * 0.1;
    y = y + distY * 0.1;

    trackerRef.current.style.left = `${
      x - trackerRef.current.offsetWidth / 2
    }px`;
    trackerRef.current.style.top = `${
      y - trackerRef.current.offsetHeight / 2
    }px`;
  };

  const animate = () => {
    move();
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div
      id="tracker"
      ref={trackerRef}
      style={{
        borderRadius: "100%",
        position: "absolute",
        width: "10px",
        height: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    />
  );
};

export default Cursor;
