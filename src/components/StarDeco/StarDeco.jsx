import React from 'react';
import './StarDeco.css';
import { ReactComponent as STAR } from '../../assets/AYON_STAR_D.svg';

const StarDeco = () => {
	return ( 
		<>
			<div className='starDeco-container'>
			<div className='starDeco-subcontainer'>
				<STAR className='starDeco-star'/>
				<STAR className='starDeco-star'/>
				<STAR className='starDeco-star'/>
				<STAR className='starDeco-star'/>
				<STAR className='starDeco-star'/>
				<STAR className='starDeco-star'/>
			</div>
			<div className='starDeco-subcontainer'>
				<STAR className='starDeco-star'/>
				<STAR className='starDeco-star'/>
				<STAR className='starDeco-star'/>
				<STAR className='starDeco-star'/>
				<STAR className='starDeco-star'/>
				<STAR className='starDeco-star'/>
			</div>
		</div>
		</>
	);
};

export default StarDeco;

