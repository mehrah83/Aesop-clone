const ClimateSection = () => {
  return (
    <>
      <section className="section climateSection">
        <div className="container grid grid-three-column">
          <div className="fragranceInfo">
            <h3 className="common-upper-heading">For warm climates</h3>
            <h2 className="common-heading">Adjusting to seasonal change</h2>
            <p className="common-para">
              In the warmer months, high temperatures and humidity can lead to
              increased sebum production for normal, combination, and oily
              skins. Accordingly, the use of slightly lighter formulations is
              recommended.
            </p>
          </div>
          <div className="firstFragrance">
            <figure>
              <picture>
                <img
                  src="https://www.aesop.com/u1nb1km7t5q7/4MDDVixhlDFtOpXTyqjdcG/ead865d7568cefb70d74a989715c380b/Aesop-Skin-Immediate-Moisture-Facial-Hydrosol-50mL-Large-782x796px.png"
                  alt=""
                />
              </picture>
            </figure>
            <h5>Immediate Moisture Facial Hydrosel</h5>
            <h6>A refreshing mist hydrator</h6>
          </div>
          <div className="secondFragrance">
            <figure>
              <picture>
                <img
                  src="https://www.aesop.com/u1nb1km7t5q7/4MDDVixhlDFtOpXTyqjdcG/ead865d7568cefb70d74a989715c380b/Aesop-Skin-Immediate-Moisture-Facial-Hydrosol-50mL-Large-782x796px.png"
                  alt=""
                />
              </picture>
            </figure>
            <h5>Purifying Facial Exfoliant Paste</h5>
            <h6>A deep cleansing exfoliating cream</h6>
          </div>
          <div className="pagination"></div>
        </div>
      </section>
    </>
  );
};

export default ClimateSection;
