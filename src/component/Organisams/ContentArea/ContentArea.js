import React from "react";
import EpisodeContent from "../../Molecules/EpisodeContent/EpisodeContent";
import EpisodeCollection from "../../Molecules/EpisodeCollection/EpisodeCollection";
import PosterShowCollection from "../../Molecules/PosterShowCollection/PosterShowCollection";
import ContentImage from "../../Molecules/ContentAreaImage/ContentImage";

import EpisodeData from "../../../config/EpisodeData";
import PosterData from "../../../config/PosterData";
import "./ContentArea.css";

/**
 * ContentArea component
 */
const ContentArea = () => {
	return (
		<div>
			<EpisodeContent className='episodeContent' text='Continue Watching' />
			<div className='collection'>
				<div className='slider-lf'>
					{" "}
					<ContentImage srcImg='./images/leftslider.svg' altText='slider' />
				</div>
				{EpisodeData.map((item) => {
					return <EpisodeCollection key={item.iconName} item={item.iconName} />;
				})}
				<div className='slider-rg'>
					<ContentImage srcImg='./images/rightSlider.svg' altText='slider' />
				</div>
			</div>
			<EpisodeContent className='episodeContent' text='Recommenended For You' />
			<div className='collection-1'>
				{PosterData.map((item) => {
					return (
						<PosterShowCollection key={item.iconName} item={item.iconName} />
					);
				})}
			</div>
		</div>
	);
};

export default ContentArea;
