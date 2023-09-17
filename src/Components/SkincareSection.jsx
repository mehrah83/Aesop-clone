const SkincareSection = () => {
  return (
    <>
     <section className="section skincareSection">
        <div className="container grid grid-two-column">
           <div className="skinCareInfo">
           <h3 className="common-upper-heading">Parsley Seed Skin Care</h3>
            <h2 className="common-heading">In warm or humid urban settings, skin is vulnerable to a range of environmental factors.</h2>
            <p className="common-para">Pollution, air-conditioning and the stresses of city life can heighten skin’s susceptibility to free radical damage and dehydration. Anti-oxidant rich Parsley Seed formulations help to support skin against these effects.</p>
            <a href="" className="btn">Regiments for warm climates<i className="fa-solid fa-arrow-right"></i></a>
           </div>
           <div className="skinCareImage">
            <figure>
                <picture>
                    <img src="https://www.aesop.com/u1nb1km7t5q7/7tPk6zFo84MiOR6dy8WNAg/1f71197de94be5fb07cbd03365132775/Aesop-Parsley-Seed-Performance-Campaign-2020-Hybris-Homepage-Secondary-1-Mid-Desktop-1690x1185px.jpg" alt="" />
                </picture>
            </figure>
           </div>
        </div>
        </section> 
    </>
  )
}

export default SkincareSection
