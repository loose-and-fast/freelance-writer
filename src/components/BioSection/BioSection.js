import React from 'react';
import { Image } from 'semantic-ui-react'
import './BioSection.css';

const BioSection = ({ name, text, src }) => (
    <div className='BioSection'>
        <h2>{name}</h2>
        <Image src={src} size='medium' shape='rounded' floated='left' />
        <p>{text}</p>
    </div>
);

export default BioSection