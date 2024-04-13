import React, { useEffect, useRef } from 'react';
import {ReactComponent as AYON_TYPE_WHTE} from 'assets/AYON_TYPE_WHTE.svg';
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
        <AYON_TYPE_WHTE className="loading-end-logo" />
      </div>
    </div>
  );
};

export default LoadingEnd;