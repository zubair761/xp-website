import Layout from '../components/Layout';
import landingImage from '../personalShopper/banner.png';
import profileImgae from '../personalShopper/afifa pic.png';
import bridalWear from '../personalShopper/bridal wear.png'; 
import casualWear from '../personalShopper/casual wear.png'; 
import hennapattern from '../assets/henapattern.png';


class personalShopper  extends React.Component{
    constructor(props){
        super(props);


    }

    handleClick() {
        var elem = $("#toggle").text();
        console.log(elem,"elem");
        if (elem == "Read More") {
          $("#toggle").text("Read Less");
          $("#text-personalShopper").slideDown();
          $("#text-one-personalShopper").slideDown();
          $("#text-two-personalShopper").slideDown();
        } else {
          $("#toggle").text("Read More");
          $("#text-personalShopper").slideUp();
          $("#text-one-personalShopper").slideUp();
          $("#text-two-personalShopper").slideUp();
        }
      }

    render(){
        return(
            <Layout>
                 <div className="pt-5">
                    <img className="landing-page-image-main" src={landingImage} alt="landingImage" />
                </div>
                <div className="row">
                    <div className="col-12 text-center pt-4">
                        <i className="fa fa-map-marker location-icon-personalShopper"></i>
                        <h3 className="text-personalShopper">Personal Shopper</h3>
                    </div>
                </div>
                <div className="">
                    <div className="container pt-5 pb-5">
                        <div className="row">
                         
                            <div className="col-12 col-sm-8 col-lg-8">
                                <h6 className="text-profile-name-personal-shoper">Afifa</h6>
                                <p className="text-para-main-personal-shoper">
                                    I graduated with a degree in Textiles and have years of experience in the fashion industry,
                                    working for the top retail and couture brands in Pakistan, such as Sapphire. I’ve now decided
                                    to use my intel and black book for your benefit by assisting you with your shopping sprees. 
                                    Whether you are looking to buy for your big day or want assistance with keeping your wardrobe 
                                    updated on a regular basis with some of the best of Pakistani Fashion, I am here to be your 
                                    personal shopper, whether that’s online or when you are in town visiting Lahore.
                                </p>
                                
                            </div>
                            <div className="col-12 col-sm-4 col-lg-4">
                                <img className="bridal-image-personalShopper" src={profileImgae} alt="profileImgae" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mg-read-more-personalShopper">
                            <div>
                                <br/>
                                <span id="text-personalShopper">
                                    My objective is to be your shopping pal, advising you of what’s on trend as well 
                                    as my <br /> suggestions on what might work for you or not. Due to my diverse black book, 
                                    I can work with all budgets. We can do all of this from the comfort of your couch 
                                    and share a virtual cup of chai whilst doing it. This experience is about providing 
                                    you a personal service at your convenience & in the case of prospective brides, to 
                                    help make your bridal shopping trip to Pakistan more productive. 
                                    <br/>
                                </span>
                            </div>
                            <div>
                                <br/>
                                <span id="text-one-personalShopper">
                                    I offer an initial free 1-hour consultation, in which I get a better understanding
                                    of what you are after and you can get to know me. If you like the sound of what I 
                                    have to offer then the complete service, including mood boards, recommended outfits 
                                    and organisation of physical / virtual appointments with designers (in the case of 
                                    bridals or formal wear) costs £250. 

                                    <br/>
                                </span>
                            </div>
                            <div>
                                <br/>
                                <span id="text-two-personalShopper">
                                    If you’d like to visit Pakistan, then we can also help with transportation 
                                    and accommodation for your trip to Pakistan and one of my team members or 
                                    I can assist you on your shopping trip for an additional fee.
                                    <br/>
                                </span>
                            </div>
                            <div className="btn-container text-center">
                                <button className="btn-read-more" id="toggle" onClick={this.handleClick}>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="personalShopper-hennapattern mt-5" style={{background: `url(${hennapattern})`,backgroundSize: '800px'}}> 
                    <div className="row">
                        <div className="col-12 text-center pt-4">
                            <i className="fa fa-map-marker location-icon-personalShopper"></i>
                            <h3 className="text-personalShopper">Personal Shopper Experience</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center p-4">
                            <div  className="personalShopper-image-div"> 
                                <img className="personalShopper-bridalWear" src={bridalWear} alt="bridalWear"/>
                                {/* <i className="fa fa-map-marker icon-bridalWear-personalShopper  "></i> */}
                                <a href="/bridalWear" className="centered-bridalWear-personalShopper bridalwearhover">
                                    <i className="fa fa-map-marker  "></i>
                                    <br />
                                    Bridal Wear
                                </a>
                            </div>
                            <div className="personalShopper-image-div"> 
                                <img className="personalShopper-casualWear" src={casualWear} alt="casualWear"/>
                                <div >
                                {/* <i className="fa fa-map-marker icon-casualWear-personalShopper"></i>
                                <a href="/casualwear" className="centered-casualWear-personalShopper">Casual Wear</a> */}
                                <a href="/casualwear" className="centered-casualWear-personalShopper bridalwearhover">
                                    <i className="fa fa-map-marker  "></i>
                                    <br />
                                    Casual Wear
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default personalShopper;