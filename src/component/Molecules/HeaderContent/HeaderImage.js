import React from "react";
import Image from "../../Atoms/Image/Image";
import PropTypes from "prop-types";

/**
 *
 * @param {string} param0
 */
const HeaderImage = ({ srcImg, altText }) => {
	return (
		<div>
			<Image srcImg={srcImg} altText={altText} />
		</div>
	);
};
HeaderImage.prototype = {
	srcImg: PropTypes.string,
	altText: PropTypes.string,
};

export default HeaderImage;
