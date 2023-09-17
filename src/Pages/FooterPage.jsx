import ChatSection from "../Components/ChatSection";

const FooterPage = () => {
  const orderData = [
    "Contact us",
    "FAQs",
    "Shipping",
    "Returns",
    "Order History",
    "Terms and conditions",
  ];
  const serviesData = [
    "Live assistance",
    "Corporate gifts",
    "Facial Appointments",
    "Click and Collect",
    "Video consultation",
  ];
  const locationData = ["Shipping:", "Language:", "English", "繁體中文"];
  const aboutData = [
    "Our story",
    "Foundation",
    "Careers",
    "Privacy policy",
    "Accessibility",
    "Cookie Policy",
  ];
  const socialMediaData = [
    "Instagram",
    "Twitter",
    "LinkedIn",
    "WeChat",
    "Weibo",
  ];

  return (
    <>
      <footer className="footerSection">
        <div className="container grid grid-four-column">
          <div className="subscribe">
            <h3>Subscribe to Aesop communications</h3>
            <div className="border"></div>
            <input
              className="emailInput"
              type="email"
              placeholder="Email Address"
            />
            <div className="checkBoxModule flex">
              <input className="checkInput" type="checkbox" />
              <p className="common-para">
                Subscribe to receive communications from Aesop. By subscribing,
                you confirm you have read and understood our{" "}
                <a href="">privacy policy</a>.
              </p>
            </div>
          </div>
          <div className="order">
            <h3>Orders and support</h3>
            <div className="border"></div>
            <ul>
              {orderData.map((order, index) => {
                return (
                  <>
                    <li key={index}>
                      <a className="link" href="#">
                        {order}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="services">
            <h3>Services</h3>
            <div className="border"></div>
            <ul>
              {serviesData.map((services, index) => {
                return (
                  <>
                    <li key={index}>
                      <a className="link" href="#">
                        {services}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="location">
            <h3>Location preferences</h3>
            <div className="border"></div>
            <ul>
              {locationData.map((location, index) => {
                return (
                  <>
                    <li key={index}>
                      <a className="link" href="#">
                        {location}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="group container grid grid-four-column">
          <div className="sustain">
            <h3>Subscribe to Aesop communications</h3>
            <div className="border"></div>
            <p className="common-para">
              All Aesop products are vegan, and we do not test our formulations
              or ingredients on animals. We are Leaping Bunny approved and a
              Certified B Corporation. Learn more
            </p>
          </div>
          <div className="about">
            <h3>About</h3>
            <div className="border"></div>
            <ul>
              {aboutData.map((about, index) => {
                return (
                  <>
                    <li key={index}>
                      <a className="link" href="#">
                        {about}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="socialMedia">
            <h3>About</h3>
            <div className="border"></div>
            <ul>
              {socialMediaData.map((socialMedia, index) => {
                return (
                  <>
                    <li key={index}>
                      <a className="link" href="#">
                        {socialMedia}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="footerBanner"></div>
        <div className="container">
          <h3 className="copyright">© Aesop</h3>
        </div>
       <ChatSection/>
      </footer>
    </>
  );
};

export default FooterPage;
