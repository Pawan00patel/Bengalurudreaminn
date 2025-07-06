import React, { useState, useEffect, useRef } from 'react';
import { stats } from '../../data/stats';

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
    <div ref={counterRef} style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>
      {count}{suffix}
    </div>
  );
};

const AnimatedStats: React.FC = () => {
  return (
    <div  style={{ background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 50%,rgb(63, 17, 17) 100%)', color: '#fff', overflow: 'hidden', padding: '4rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{ flex: '1 1 200px', minWidth: 200, textAlign: 'center' }}
            >
              <AnimatedCounter
                targetValue={stat.value}
                suffix={stat.suffix}
                duration={2000}
                delay={index * 200}
              />
              <div style={{ color: '#fff', fontSize: '1.25rem', marginTop: 16, fontWeight: 500 }}>
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
