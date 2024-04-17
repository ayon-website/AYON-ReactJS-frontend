import React from 'react';
import './StarDeco.css';

const StarDeco = () => {
	return ( 
		<>
		<div className='starDeco-container' style={{filter: 'grayscale(50%)'}}>
		</div>
		<div className='starDeco-container' style={{right: '5vw', bottom: '50px', filter: 'grayscale(50%)'}}>
		</div>
		<div className='starDeco-container' style={{left: '5vw', backgroundSize: '120%'}}>
		</div>
		</>
	);
};

export default StarDeco;

