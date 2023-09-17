const FacialSection = () => {
  return (
    <>
      <section className="section facialSection">
        <div className="container grid grid-two-column">
        <div className="facialImage">
            <figure>
              <picture>
                <img
                  src="https://www.aesop.com/u1nb1km7t5q7/6a0rFYweQvQusUfEHpowUJ/32611c5a1ea838756fd635261d88d2db/Aesop-Generic-Images-Facial-Appointments-1-Mid-Desktop-2560x1440px.jpg"
                  alt=""
                />
              </picture>
            </figure>
          </div>
          <div className="facialInfo">
            <h3 className="common-upper-heading">Facial Appointments</h3>
            <h2 className="common-heading">Composure for the skin and senses</h2>
            <p className="common-para">
            For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.
            </p>
            <a href="" className="btn">
              Learn more<i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacialSection;
