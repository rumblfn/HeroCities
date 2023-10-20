import React, {FC, ReactNode, useEffect, useRef, useState} from "react";

interface CarouselItemPropsI {
  children: ReactNode,
  width?: number,
}

export const CarouselItem: FC<CarouselItemPropsI> = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width || "100%" }}>
      {children}
    </div>
  );
};

interface PropsI {
  children: any,
}

export const Carousel: FC<PropsI> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipe = useRef({});

  const updateIndex = (newIndex: number) => {
    if (newIndex >= React.Children.count(children) || newIndex < 0) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex]);

  return (
    <div
      className="carousel"
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};
