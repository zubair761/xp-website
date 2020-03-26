import Layout from '../components/Layout';
import Carousel from "react-multi-carousel";
import silhouettesexperience from '../assets/silhouettes-experiecnes.png';
import silhouettesdestinations from '../assets/silhouettes-destinations.png';
import sliderBanner from '../assets/sliderBanner.png';
import nangparbat from '../assets/Trek Nanga Parbat1.jpg';
import sp3 from '../assets/SP-3.jpg';
import chitral from '../assets/chitral.png';
import hunza from '../assets/hunza.png';
import islamabad from '../assets/islamabad.png';
import lahore from '../assets/lahore.png';
import naran from '../assets/naran.png';
import swat from '../assets/swat.png';
import packaofthemonth from '../assets/packaofthemonth.png';
import adventure from '../assets/adventure.png';
import bridal from '../assets/bridal.png';
// import creativeworkshop from '../assets/creativeworkshop.png';
import foodtours from '../assets/food_tours.png';
import golfig from '../assets/golfing.png';
import motorbike from '../assets/motorbike.png';
import hennapattern from '../assets/henapattern.png';

class Home extends React.Component{
 
    render(){
        
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5,
              slidesToSlide: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 768 },
              items: 4,
            },
            mobile: {
              breakpoint: { max: 520, min: 410 },
              items: 2,
            },
          };


        return(
            <Layout>
                <div id="demo" className="carousel slide pt-4" data-ride="carousel">
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="slider-home-page-image" src={sliderBanner} alt="sliderBanner" />
                        </div>
                        <div className="carousel-item">
                            <img className="slider-home-page-image" src={nangparbat} alt="nangparbat"/>
                        </div>
                        <div className="carousel-item">
                            <img className="slider-home-page-image" src={sp3} alt="sp3" />
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-12 text-center">
                        <i className="fa fa-map-marker location-icon"></i>
                        <h3 className="text-experience">Experiences</h3>
                    </div>
                    <div className="col-12 pt-3 carousel-div">
                        <Carousel responsive={responsive} 
                              draggable={true} 
                              responsive={responsive}
                              ssr={true}
                              infinite={true}
                              autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all 1s ease"
                              cursor="pointer"
                              transitionDuration={2000}
                              containerClass="carousel-container"
                              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                              deviceType={this.props.deviceType}
                        >
                            <div className="destination-imgage-div"> 
                                <img className="destination-images" src={chitral} alt="chitral"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Chitral</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={hunza} alt="hunza"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Hunza</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={naran} alt="naran"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Naran</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={swat} alt="swat"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Swat</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={lahore} alt="lahore"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Lahore</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={islamabad} alt="islamabad"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Islamabad</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={hunza} alt="hunza"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Hunza</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={naran} alt="naran"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Naran</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={swat} alt="swat"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Swat</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={islamabad} alt="islamabad"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Islamabad</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={lahore} alt="islamabad"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Lahore</a>
                            </div>
                        </Carousel>
                    </div>
                    <div className="col-12">
                        <div className="experience-bg-img-div">
                            <img className="silhouettes-experience-img" src={silhouettesexperience} alt="silhouettes"/>
                        </div>
                    </div>
                </div> 
                <div className="row pt-5">
                    <div className="col-12 text-center">
                        <i className="fa fa-map-marker location-icon"></i>
                        <h3 className="text-experience">Destination</h3>
                    </div>
                    <div className="col-12 pt-3 destination-bg">
                        <Carousel responsive={responsive} 
                              draggable={true} 
                              responsive={responsive}
                              ssr={true}
                              infinite={true}
                              autoPlay={this.props.deviceType !== "mobile" ? true : false}
                              autoPlaySpeed={1000}
                              keyBoardControl={true}
                              customTransition="all 1s ease"
                              cursor="pointer"
                              transitionDuration={2000}
                              containerClass="carousel-container"
                              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                              deviceType={this.props.deviceType}
                        >
                            <div className="destination-imgage-div"> 
                                <img className="destination-images" src={adventure} alt="adventure"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Adventure</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={bridal} alt="bridal"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Bridal</a>
                            </div>
                        
                            <div destination-imgage-div> 
                                <img className="destination-images" src={foodtours} alt="foodtours"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Food</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={golfig} alt="golfig"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Golfig</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={motorbike} alt="motorbike"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered motorbike-">Motorbike</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={hunza} alt="hunza"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Hunza</a>
                            </div>
                            <div className="destination-imgage-div"> 
                                <img className="destination-images" src={adventure} alt="adventure"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Adventure</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={bridal} alt="bridal"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Bridal</a>
                            </div>
                           
                            <div destination-imgage-div> 
                                <img className="destination-images" src={foodtours} alt="foodtours"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Food </a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={golfig} alt="golfig"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Golfig</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={motorbike} alt="motorbike"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Motorbike </a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={hunza} alt="hunza"/>
                                <i className="fa fa-map-marker icon"></i>
                                <a href="#" className="centered">Hunza</a>
                            </div>
                        </Carousel>
                    </div>
                    <div className="col-12">
                        <div className="destination-bg-img-div">
                            <img className="silhouettes-experience-img" src={silhouettesdestinations} alt="silhouettes"/>
                        </div>
                    </div>
                </div>
                <div className="package-section-main-div">
                    <div className="container pd-container-package">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-6 p-5">
                                <h3 className="text-package">Package of the</h3>
                                <h1 className="text-month">month!</h1>
                                <p className="text-para-package-month">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
                                    as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                                     have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6 p-4">
                                <img className="package-month-img" src={packaofthemonth} alt="Package Month"/>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="" style={{background: `url(${hennapattern})`,backgroundSize: '800px'}}> 
                    <div className="row pt-5">
                        <div className="col-12 text-center">
                            <h3 className="text-about-us">About US</h3>
                        </div>
                    </div> 
                    <div className="container pt-5 pb-5">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-6">
                                <p className="video-para-one">
                                    We are specialist in customized experiential tour catering for small groups. 
                                    Each client is different therefore no two experiences are ever the same.
                                </p>
                                <p className="video-para-two">
                                    We pride ourselves on customer care,authenticity and cre-activity, ensuring 
                                    the time you spend with us is optimized with the most memorable experience.
                                    We have done this by drawing on our extensive knowledge & local experties in 
                                    some of the most captivating destinations.
                                </p>
                                <p className="video-para-three">
                                    We believe in collaboration and have teamed up with some of the most reputable household names for 
                                    accomodation & experiential tours.
                                </p>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6">
                                <div className="video-border-div">
                                    <div className="embed-responsive embed-responsive-16by9 video-height">
                                        <iframe className="embed-responsive-item" src="//www.youtube.com/embed/zB4I68XVPzQ"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-12">
                            <h3 className="text-center text-what-do-they-say">What do they say about us?</h3>
                            <div id="carouselExampleControls" className="carousel slide carousel-main" data-ride="carousel">
                                <div className="carousel-inner carousel-inner-text">
                                    <div className="carousel-item active ">
                                        <div className="carousel-caption carousel-caption-text">
                                            <p className="text-slider">
                                                We are specialist in customized experiential tour catering for small groups. 
                                                Each client is different therefore no two experiences are ever the same.
                                            </p>
                                            <p className="text-slider">
                                                We pride ourselves on customer care,authenticity and cre-activity, ensuring 
                                                the time you spend with us is optimized with the most memorable experience.
                                            </p>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <h6 className="text-by-name-date text-center">By Lorem Ispum on 20th December, 2020</h6>
                                        </div>
                                    </div>
                                    <div className="carousel-item text-center">
                                        <div className="carousel-caption carousel-caption-text">
                                            <p className="text-slider">
                                                We are specialist in customized experiential tour catering for small groups. 
                                                Each client is different therefore no two experiences are ever the same.
                                            </p>
                                            <p className="text-slider">
                                                We pride ourselves on customer care,authenticity and cre-activity, ensuring 
                                                the time you spend with us is optimized with the most memorable experience.
                                            </p>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <h6 className="text-by-name-date text-center">By Lorem Ispum on 20th December, 2020</h6>
                                        </div>
                                    </div>
                                    <div className="carousel-item text-center">
                                        <div className="carousel-caption carousel-caption-text">
                                            <p className="text-slider">
                                                We are specialist in customized experiential tour catering for small groups. 
                                                Each client is different therefore no two experiences are ever the same.
                                            </p>
                                            <p className="text-slider">
                                                We pride ourselves on customer care,authenticity and cre-activity, ensuring 
                                                the time you spend with us is optimized with the most memorable experience.
                                            </p>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <i className="material-icons star-icon p-3">star</i>
                                            <h6 className="text-by-name-date text-center">By Lorem Ispum on 20th December, 2020</h6>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <i className="fa fa-angle-left right-icon" aria-hidden="true"></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next hello" href="#carouselExampleControls" role="button" data-slide="next">
                                    <i className="fa fa-angle-right right-icon" aria-hidden="true"></i>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>   
                </div>    
            </Layout>
             
        )
    }    
}


export default Home
