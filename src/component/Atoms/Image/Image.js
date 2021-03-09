import React from "react";
import "./Image.css";
import PropTypes from "prop-types";

/**
 * Image Component
 * @param {Object} props
 */
export const Image = (props) => {
	const {
		className = "",
		children,
		srcImg = "",
		altText = "",
		...rest
	} = props;
	console.log(props);
	return (
		<img
			className={`atom--image ${className}`}
			src={srcImg}
			alt={altText}
			{...rest}
		/>
	);
};
Image.prototype = {
	className: PropTypes.string,
	srcImg: PropTypes.string,
	altText: PropTypes.string,
};
export default Image;
