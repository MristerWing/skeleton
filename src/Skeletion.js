import React from 'react';
import './App.css';
import './Skeleton.css';

const Skeletion = () => {
	return (
		<div className="container">
			<div className="tmnail skeleton"></div>
			<div className="info-layer">
				<div className="item skeleton">
					<strong></strong>
				</div>
				<div className="item skeleton"></div>
			</div>
		</div>
	);
};

export default Skeletion;
