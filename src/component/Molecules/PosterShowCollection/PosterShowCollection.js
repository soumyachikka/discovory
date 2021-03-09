import React from 'react'
import './PosterShowCollection.css'
import Image from '../../Atoms/Image/Image'
import PropTypes from 'prop-types' 
/**
 * renders the poster list of data using this PosterShowCollection Component
 * @param {Object} param0 
 */
const PosterShowCollection = ({item}) =>{
    return (
        <>
            <Image className="posterShow" srcImg={`./images/${item}.png`} altText="no-image" />
       </>
    )
      
}
PosterShowCollection.prototype = {
    item:PropTypes.object
}
export default PosterShowCollection
