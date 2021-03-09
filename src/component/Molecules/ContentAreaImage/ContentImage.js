import React from "react";
import Image from "../../Atoms/Image/Image";
import PropTypes from "prop-types";
/**
 *
 * @param {String} params
 */
const ContentImage = ({ srcImg, altText }) => {
	return (
		<div>
			<Image srcImg={srcImg} altText={altText} />
		</div>
	);
};
ContentImage.prototype = {
	srcImg: PropTypes.string,
	altText: PropTypes.string,
};
export default ContentImage;
