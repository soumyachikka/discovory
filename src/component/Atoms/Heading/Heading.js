import * as React from "react";
import "./Heading.css";
import PropTypes from "prop-types";
/**
 * Heading Component
 * @param {Object} props
 */
const Heading = (props) => {
	const {
		className = "",
		children,
		text = "",
		tagName = "h1",
		...rest
	} = props;

	const TypeAsComponent = tagName || "h1";

	const headingClassNames = `atom--heading ${className}`;
	return (
		<TypeAsComponent className={headingClassNames} {...rest}>
			{text || children}
		</TypeAsComponent>
	);
};
Heading.prototype = {
	className: PropTypes.string,
	tagName: PropTypes.string,
	text: PropTypes.string,
};
export default Heading;
