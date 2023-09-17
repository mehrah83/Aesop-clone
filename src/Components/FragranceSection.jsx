const FragranceSection = () => {
  return (
    <>
     <section className="section fragranceSection">
        <div className="container grid grid-three-column">
           <div className="fragranceInfo">
            <h3 className="common-upper-heading">Fragrance</h3>
            <h2 className="common-heading">Our personal scents</h2>
            <p className="common-para">Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.</p>
            <a href="">See all Fragrance <i className="fa-solid fa-arrow-right"></i></a>
           </div>
           <div className="firstFragrance">
            <figure>
              <picture>
              <img src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" alt="" />
              </picture>
            </figure>
            <h5>Ouranon Eau de Parfum</h5>
            <h6>Woody, spicy, resinous</h6>
           </div>
           <div className="secondFragrance">
            <figure>
              <picture>
              <img src="https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png" alt="" />
              </picture>
            </figure>
            <h5>Gloam Eau de Parfum</h5>
            <h6>Floral, spicy, green</h6>
           </div>
           <div className="pagination"></div>
        </div>
        </section> 
    </>
  )
}

export default FragranceSection
