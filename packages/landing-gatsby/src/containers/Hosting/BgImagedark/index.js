import React from 'react';

import darkRightImg from 'common/src/assets/image/hosting/Background/Benefits/dark-bg-right.svg';
import darkLeftImg from 'common/src/assets/image/hosting/Background/Benefits/dark-bg-left.svg';
import darkRightMobImg from 'common/src/assets/image/hosting/Background/Benefits/dark-bg-right-mobile.svg';
import darkLeftMobImg from 'common/src/assets/image/hosting/Background/Benefits/dark-bg-left-mobile.svg';

const BgImageDark = () => {
  return (
    <aside className="dark-bg">
      <img
        className="dark-bg-image dark-bg-image-right data"
        src={darkRightImg}
      />
      <img className="dark-bg-image" src={darkLeftImg} />
      <img
        className="dark-bg-image dark-bg-image-right bg-image--mobile data"
        src={darkRightMobImg}
      />
      <img
        className="dark-bg-image bg-image--mobile data"
        src={darkLeftMobImg}
      />
    </aside>
  );
};

export default BgImageDark;
