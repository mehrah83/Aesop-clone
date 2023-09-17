const DecodingSection = () => {
  return (
    <>
     <section className="section decodingSection">
       <div className="container grid grid-two-column">
          <div className="decodingVideo">
            <figure>
        <video autoPlay crossOrigin="anonymous" data-testid="data-testid-VideoPlayer" loop muted playsInline><source src="https://videos.ctfassets.net/u1nb1km7t5q7/1fy7IJOkhkLfiBJNrqqZlL/55ce2547d65d261beb120b441a0ed0df/Aesop_A_Guide_to_Fragrance_Web_Secondary_Mid_01_Rose_Desktop_1920x1080px.mp4" type="video/mp4"/></video>
            </figure>
          </div>
          <div className="decodingInfo">
          <h3 className="common-upper-heading">The Athenaeum</h3>
            <h2 className="common-heading">Decoding fragrance</h2>
            <p className="common-para">The language of notes, sillage and aromatic profiles allows us to describe perfume. Discover our guide to selecting a signature fragrance.</p>
            <a href="" className="btn">Read more<i className="fa-solid fa-arrow-right"></i></a>
          </div>
       </div>
     </section>
    </>
  )
}

export default DecodingSection
