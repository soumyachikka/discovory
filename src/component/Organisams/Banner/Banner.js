import React from "react";
import "./Banner.css";
import BannerHeading from "../../Molecules/BannerContent/BannerHeading";
import BannerImage from "../../Molecules/BannerContent/BannerImage";

/**
 * Banner Component
 */
const Banner = () => {
	return (
		<>
			<div className='bannerStyles'>
				<BannerImage
					srcImg='./images/americaBanner.png'
					altText='no-image'
					className='bannerImage'
				/>
				<BannerHeading
					text='Season Premiere'
					className='sesson'
					tagName='span'
				/>
				<BannerHeading
					tagName='span'
					className='bannerSpan'
					text='Lorem ipsum dolor sit amet, consecteturadipae'
				/>
				<button>
					<BannerImage srcImg='./images/playbutton.svg' altText='no-image' />
					watch Now
				</button>
			</div>
			<div className='slider-show'>
				<span></span>
				<span className='selected'></span>
				<span></span>
				<span></span>
			</div>
		</>
	);
};

export default Banner;
