const StoreSection = () => {
  return (
    <>
     <section className="section storeSection">
        <div className="container grid grid-two-column">
           <div className="storeInfo">
            <h2 className="common-heading">Store locator</h2>
            <p className="common-para">Our consultants are available to host you in-store and provide tailored guidance on gift purchases.</p>
            <a href="" className="btn">Find a nearby store<i className="fa-solid fa-arrow-right"></i></a>
           </div>
           <div className="storeSlider">
            <figure>
                <picture>
                <img src="https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg" alt="" />
                </picture>
            </figure>
            <div className="pagination"></div>
            <p className="common-para aesopPara">Aesop ifc mall</p>
           </div>
        </div>
     </section>
    </>
  )
}

export default StoreSection
