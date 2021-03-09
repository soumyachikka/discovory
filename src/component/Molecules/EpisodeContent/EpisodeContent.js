import React from "react";
import Heading from "../../Atoms/Heading/Heading";
import PropTypes from "prop-types";
/**
 *
 * @param {string} param0
 */
const EpisodeContent = ({ text, className }) => {
	return <Heading className={className} text={text} />;
};
EpisodeContent.prototype = {
	srcImg: PropTypes.string,
	altText: PropTypes.string,
};

export default EpisodeContent;
