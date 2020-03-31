import React from 'react';

import ShapeOne from 'common/src/assets/image/hosting/shape-1.svg';
import ShapeTwo from 'common/src/assets/image/hosting/shape-2.svg';
import ShapeThree from 'common/src/assets/image/hosting/shape-3.svg';
import ShapeFour from 'common/src/assets/image/hosting/shape-4.svg';
import ShapeFive from 'common/src/assets/image/hosting/shape-5.svg';

const AdditionalContentParticle = () => {
    return (
        <>
            <img
                className="hover-shape-1 hover-shape"
                src={ShapeOne}
                alt="Shape One"
            />
            <img
                className="hover-shape-2 hover-shape"
                src={ShapeTwo}
                alt="Shape Two"
            />
            <img
                className="hover-shape-3 hover-shape"
                src={ShapeThree}
                alt="Shape Three"
            />
            <img
                className="hover-shape-4 hover-shape"
                src={ShapeFour}
                alt="Shape Four"
            />
            <img
                className="hover-shape-5 hover-shape"
                src={ShapeFive}
                alt="Shape Five"
            />
        </>

    );
};


export default AdditionalContentParticle;