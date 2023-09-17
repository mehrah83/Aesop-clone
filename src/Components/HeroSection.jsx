const HeroSection = () => {
  return (
    <>
      <main className="heroSection">
            <div className="image">
          <figure>
            <picture>
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/51ATQtZl3wy8KBBgt4MACM/1588c8b4d7e2291b47796d3d42884f1f/Aesop_Othertopias_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px.jpg"
              alt="hero image"
            />
            </picture>
          </figure>
          <div className="imageInfo flex">
           <figure>
            <picture>
            <img src="/Images/logo.png" alt="" />
            </picture>
           </figure>
            <div>
                <h3>Doorways to the undiscovered</h3>
                <h2>Othertopias: a collection of unorthodox fragrances</h2>
                <p>Step inside six fragrant worlds that transcend our immediate perception—vivid and distinctive.</p>
                <a href="" className="btn">Discover the fragrances <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          </div>
      </main>
    </>
  );
};

export default HeroSection;
