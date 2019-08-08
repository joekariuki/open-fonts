import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const WebsitePreview = ({ slug, imageData, siteName, font }) => {
    <div className="website-preview">
        <Link to={`/${slug}/`}>
            <Image fluid={imageData} alt={siteName} />
        </Link>
        <h2>
            <Link to={`/${slug}/`}>{ siteName }</Link>
        </h2>
        <p>{ font }</p>
    </div>
}

export default WebsitePreview;