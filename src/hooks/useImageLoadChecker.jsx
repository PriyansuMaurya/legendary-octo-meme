import { useState, useEffect } from "react";

function useImageLoad(imageUrls) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve) => {
        const imageElement = new window.Image();
        imageElement.src = url;
        imageElement.onload = () => {
          resolve();
        };
      });
    });
    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
    });
  }, [imageUrls]);

  return isLoaded;
}

export default useImageLoad;
