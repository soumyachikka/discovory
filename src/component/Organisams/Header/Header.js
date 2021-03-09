import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import HeaderImage from "../../Molecules/HeaderContent/HeaderImage";

/**
 * Header component render the header links
 */
const Header = () => {
	return (
		<div className='header'>
			<Link to='/home' className='li tlc'>
				<HeaderImage srcImg='./images/Tlc.svg' altText='tlc' />
			</Link>
			<Link to='/shows' className='li gridIcon'>
				<HeaderImage srcImg='./images/grid-icon.svg' altText='shows' />
				&nbsp;<span className='shows'>Shows</span>
			</Link>
			<Link to='/onNow' className='li onNow'>
				<HeaderImage srcImg='./images/live.svg' altText='live' />
				&nbsp;<span className='shows'>OnNow</span>
			</Link>
			<li className='li search'>
				<HeaderImage srcImg='./images/search.svg' altText='search' />
				<span>Search</span>
			</li>
			<Link to='/SignIn' className='li profile'>
				<span>xfinity</span>
				<HeaderImage
					srcImg='./images/loginprofile.svg'
					altText='loginprofile'
				/>
			</Link>
		</div>
	);
};

export default Header;
