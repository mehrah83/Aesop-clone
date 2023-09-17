import Banner from "./Banner";
import TopHeader from "./TopHeader";

const Navbar = () => {
  const listData = [
    "Skin Care",
    "Body & Hand",
    "Hair",
    "Fragrance",
    "Home",
    "Kits & Travel",
    "Gifts",
    "Read",
    "Stores",
    "Facial Appointments",
  ];
  return (
    <>
      <TopHeader />
      <Banner />
      <nav className="navbar flex align-center">
        <ul className="navbar-list flex align-center">
          {listData.map((list, index) => {
            return (
              <>
                <li key={index}>
                  <a className="navbarLink" href="">{list}</a>
                </li>
              </>
            );
          })}
          <li>
            <a href="">
              <i className="magnifyLogo fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
        </ul>
        <div className="btn-group flex align-center">
          <button>Log In</button>
          <button>Cabinet</button>
          <button>Cart</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
