import React, {FC, useEffect, useState} from 'react';

interface BackgroundLoopPropsI {
  images: string[]
}

export const BackgroundLoop: FC<BackgroundLoopPropsI> = ({images}) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(/cities/images/${images[imageIndex]})`,
        height: "50vh",
        width: "100vw",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
    </div>
  );
};
