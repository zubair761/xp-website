import Layout from '../components/Layout';
import Carousel from "react-multi-carousel";
import sliderBanner from '../assets/sliderBanner.png';
import nangparbat from '../assets/Trek Nanga Parbat1.jpg';
import sp3 from '../assets/SP-3.jpg';
import chitral from '../assets/chitral.png';
import hunza from '../assets/hunza.png';
import islamabad from '../assets/islamabad.png';
import lahore from '../assets/lahore.png';
import naran from '../assets/naran.png';
import swat from '../assets/swat.png';
import silhouettesexperience from '../assets/silhouettes-experiecnes.png';

 class experience extends React.Component{


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

        return (
            <Layout>
                 <div id="demo" className="carousel slide pt-4" data-ride="carousel">
                    <ul className="carousel-indicators carousel-indicators-mozino">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                        <li data-target="#demo" data-slide-to="3"></li>
                        <li data-target="#demo" data-slide-to="4"></li>
                        <li data-target="#demo" data-slide-to="5"></li>
                    </ul>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item carousel-item-mozino active">
                            <img className="slider-home-page-image" src={sliderBanner} alt="sliderBanner" />
                            <div className="carousel-item-centered-mozino">
                                <h1 className="text-experience-page">Experiences</h1>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-mozino">
                            <img className="slider-home-page-image" src={nangparbat} alt="nangparbat"/>
                            <div className="carousel-item-centered-mozino">
                                <h1 className="text-experience-page">Experiences</h1>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-mozino">
                            <img className="slider-home-page-image" src={sp3} alt="sp3" />
                            <div className="carousel-item-centered-mozino">
                                <h1 className="text-experience-page">Experiences</h1>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-mozino">
                            <img className="slider-home-page-image" src={sliderBanner} alt="sliderBanner" />
                            <div className="carousel-item-centered-mozino">
                                <h1 className="text-experience-page">Experiences</h1>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-mozino">
                            <img className="slider-home-page-image" src={nangparbat} alt="nangparbat"/>
                            <div className="carousel-item-centered-mozino">
                                <h1 className="text-experience-page">Experiences</h1>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-mozino">
                            <img className="slider-home-page-image" src={sp3} alt="sp3" />
                            <div className="carousel-item-centered-mozino">
                                <h1 className="text-experience-page">Experiences</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-12 text-center">
                        <i className="fa fa-map-marker location-icon-eperience-page"></i>
                        <h3 className="text-experience-paage-experience">Experiences</h3>
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
                                <i className="fa fa-map-marker experience-page-subcategories-icon"></i>
                                <a href="#" className="experience-page-subcategoriestext">Day Excursion</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={hunza} alt="hunza"/>
                                <i className="fa fa-map-marker experience-page-subcategories-icon"></i>
                                <a href="/adventure" className="experience-page-subcategoriestext">Adventure Holidays</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={naran} alt="naran"/>
                                <i className="fa fa-map-marker experience-page-subcategories-icon"></i>
                                <a href="#" className="experience-page-subcategoriestext">Back to Nature</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={swat} alt="swat"/>
                                <i className="fa fa-map-marker experience-page-subcategories-icon"></i>
                                <a href="#" className="experience-page-subcategoriestext">Culture & Heritage</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={lahore} alt="islamabad"/>
                                <i className="fa fa-map-marker experience-page-subcategories-icon"></i>
                                <a href="#" className="experience-page-subcategoriestext">Recreational Holidays</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={islamabad} alt="islamabad"/>
                                <i className="fa fa-map-marker experience-page-subcategories-icon"></i>
                                <a href="#" className="experience-page-subcategoriestext">Marriage Holidays</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={hunza} alt="hunza"/>
                                <i className="fa fa-map-marker experience-page-subcategories-icon"></i>
                                <a href="#" className="experience-page-subcategoriestext">Socially Responsible</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={naran} alt="naran"/>
                                <i className="fa fa-map-marker experience-page-subcategories-icon"></i>
                                <a href="#" className="experience-page-subcategoriestext">Socially Responsible</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={swat} alt="swat"/>
                                <i className="fa fa-map-marker experience-page-subcategories-icon"></i>
                                <a href="#" className="experience-page-subcategoriestext">Customize Holidays</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={islamabad} alt="islamabad"/>
                                <i className="fa fa-map-marker experience-page-subcategories-icon"></i>
                                <a href="#" className="experience-page-subcategoriestext">Day Excursion</a>
                            </div>
                            <div destination-imgage-div> 
                                <img className="destination-images" src={lahore} alt="islamabad"/>
                                <i className="fa fa-map-marker experience-page-subcategories-icon"></i>
                                <a href="/adventure" className="experience-page-subcategoriestext">Adventure Holidays</a>
                            </div>
                        </Carousel>
                    </div>
                    <div className="col-12">
                        <div className="experience-bg-img-div">
                            <img className="silhouettes-experience-img" src={silhouettesexperience} alt="silhouettes"/>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default experience;