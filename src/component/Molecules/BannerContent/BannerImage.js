import React from "react";
import Image from "../../Atoms/Image/Image";
import PropTypes from "prop-types";
/**
 *
 * @param {String} params
 */
const BannerImage = ({ srcImg, altText, className }) => {
	return (
		<div>
			<Image srcImg={srcImg} altText={altText} className={className} />
		</div>
	);
};
BannerImage.prototype = {
	srcImg: PropTypes.string,
	altText: PropTypes.string,
	tagName: PropTypes.string,
};

export default BannerImage;
