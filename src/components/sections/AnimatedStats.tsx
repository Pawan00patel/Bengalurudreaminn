import React, { useState, useEffect, useRef } from 'react';
import { stats } from '../../data/stats';
import '../../styles/AnimatedStats.css';

interface AnimatedCounterProps {
  targetValue: number;
  suffix: string;
  duration: number;
  delay: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  targetValue, 
  suffix, 
  duration, 
  delay 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      let start = 0;
      const increment = targetValue / (duration / 16);
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setCount(targetValue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, targetValue, duration, delay]);

  return (
    <div ref={counterRef} className="stat-value">
      {count}{suffix}
    </div>
  );
};

const AnimatedStats: React.FC = () => {
  return (
    <div className="stats-container">
      <div className="stats-wrapper">
        <div className="stats-grid glass-card">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <AnimatedCounter
                targetValue={stat.value}
                suffix={stat.suffix}
                duration={2000}
                delay={index * 200}
              />
              <div className="stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;
