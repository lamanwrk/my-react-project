import { useEffect, useState } from "react";
function Statistics() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );
    const statsSection = document.querySelector(".Statistics");
    if (statsSection) observer.observe(statsSection);
    return () => {
      if (statsSection) observer.unobserve(statsSection);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const countUp = (setter, target, duration) => {
        let start = 0;
        const increment = target / duration;
        const interval = setInterval(() => {
          start += increment;
          setter(Math.min(start, target));
          if (start >= target) clearInterval(interval);
        }, 1);
      };
      countUp(setCount1, 230, 2000);
      countUp(setCount2, 26, 2000);
      countUp(setCount3, 14, 2000);
      countUp(setCount4, 80, 2000);
    }
  }, [isInView]);
  return (
    <div className="Statistics">
      <div className="stat">
        <h1>{Math.floor(count1)}</h1>
        <p>Pastry Shops</p>
      </div>
      <div className="stat">
        <h1>{Math.floor(count2)}</h1>
        <p>Candies Collections</p>
      </div>
      <div className="stat">
        <h1>{Math.floor(count3)}</h1>
        <p>Years of Experience</p>
      </div>
      <div className="stat">
        <h1>{Math.floor(count4)}</h1>
        <p>Creative Pastry Chefs</p>
      </div>
    </div>
  );
}

export default Statistics;
