import { useState } from "react";

const Banner = () => {
  const [activeOverlay, setActiveOverlay] = useState(false);

  const overlayToggle = () => {
    setActiveOverlay(!activeOverlay);
  };
  return (
    <>
      <div className="bannerSection flex align-center justify-center">
        <button className="flex align-center justify-center">
          <p>
            Click and Collect is now available at Hong Kong stores. Enjoy
            complimentary shipping on orders over HK$400
          </p>
          <a href="#" onClick={overlayToggle}>
            <i className="fa-solid fa-plus"></i>
          </a>
        </button>
        <aside
          className={`overlaySection ${
            activeOverlay ? "overlay-open" : "overlay-closed"
          }`}
        >
          <a href="#" onClick={overlayToggle}>
            <i className="fa-solid fa-xmark"></i>
          </a>
          <div className="overlayInfo">
            <h2>Shipping fees and delivery times</h2>
            <div className="border"></div>
            <h2>SF Express (Hong Kong SAR, China)</h2>
            <div className="grid grid-two-column">
              <p>Orders below $400</p>
              <p className="right">$40</p>
              <p>Orders $400 and over</p>
              <p className="right">Complimentary</p>
              <p>Urban areas</p>
              <p className="right">2-3 business days</p>
              <p>Outlying Islands</p>
              <p className="right">3-5 business days</p>
            </div>
            <div className="border"></div>
            <h2>Morning Global (Macau SAR, China)</h2>
            <div className="grid grid-two-column">
              <p>Orders below $400</p>
              <p className="right">$60</p>
              <p>Orders over $400</p>
              <p className="right">Complimentary</p>
              <p>Urban areas</p>
              <p className="right">All areas</p>
              <p>Outlying Islands</p>
              <p className="right">3-5 business days</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Banner;
