import React from "react";
import Header from "../Organisams/Header/Header";
import Banner from "../Organisams/Banner/Banner";
import ContentArea from "../Organisams/ContentArea/ContentArea";
import "./Template.css";

/**
 * Discovery home page Template component
 */

const Template = () => {
	return (
		<div className='main'>
			<div className='hero-wrapper'>
				<div className='header'>
					<Header />
				</div>
				<div className='banner'>
					<Banner />
				</div>
			</div>

			<div className='content-wrapper'>
				<ContentArea />
			</div>
		</div>
	);
};

export default Template;
