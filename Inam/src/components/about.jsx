import img from '../../public/images/btc.jpg'

function About(){
    return(
    <>
    <div className="section">
      <div class="about">
        <div class="content-section">
            <div className="title">
                <h1>About Us</h1>
            </div>
            <div className="content">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing </h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut at eos eum aut qui quaerat sed. Laboriosam, cum. olor sit amet consectetur adipisicing elit. Ut at eos eum aut qui quaerat sed. Laboriosam, cum. </p>
                <button>Read More</button>
            </div>
        </div>
        <div class="img-section">
            <img src={img} alt="" />
        </div>
      </div>
    </div>
    </>
    )
}
export default About;