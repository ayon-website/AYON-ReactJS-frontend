import React from 'react';
import './StarDeco.css';
import { ReactComponent as STAR } from '../../assets/AYON_STAR_D.svg';

const StarDeco = () => {
	return ( 
		<>
			<div className='starDeco-container' style={{right:'-2vw'}}>
			<STAR className='starDeco-star'/>
			<STAR className='starDeco-star'/>
			<STAR className='starDeco-star'/>
			<STAR className='starDeco-star'/>
			<STAR className='starDeco-star'/>
			<STAR className='starDeco-star'/>
		</div>
			<div className='starDeco-container' style={{right:'5vw'}} >
			<STAR className='starDeco-star'/>
			<STAR className='starDeco-star'/>
			<STAR className='starDeco-star'/>
			<STAR className='starDeco-star'/>
			<STAR className='starDeco-star'/>
			<STAR className='starDeco-star'/>
		</div>
		</>
	);
};

export default StarDeco;

