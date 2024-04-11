import React, { useEffect, useRef } from 'react';
import AYON_TYPE_DRK from 'assets/AYON_TYPE_WHTE.svg';
import './LoadingEnd.css';

const LoadingEnd = ({ onAnimationEnd }) => {
  const ref = useRef();

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('animationend', onAnimationEnd);
      return () => {
        node.removeEventListener('animationend', onAnimationEnd);
      };
    }
  }, [onAnimationEnd]);

  return (
    <div className="loading-end-container">
      <div ref={ref} className="loading-end-div">
        <img src={AYON_TYPE_DRK} />
      </div>
    </div>
  );
};

export default LoadingEnd;