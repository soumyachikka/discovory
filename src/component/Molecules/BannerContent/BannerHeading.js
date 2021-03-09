import React from "react";
import Heading from "../../Atoms/Heading/Heading";
import PropTypes from "prop-types";
/**
 *
 * @param {String} params
 */
const BannerHeading = ({ text, className, tagName }) => {
	return (
		<div>
			<Heading text={text} className={className} tagName={tagName} />
		</div>
	);
};
BannerHeading.prototype = {
	srcImg: PropTypes.string,
	altText: PropTypes.string,
	tagName: PropTypes.string,
};
export default BannerHeading;
