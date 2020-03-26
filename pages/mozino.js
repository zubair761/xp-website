import Layout from '../components/Layout';
import MozinoEnquiryTab from '../components/MozinoEnquiryTab';
import flower from '../assets/flower.png';
import sliderBanner from '../assets/sliderBanner.png';
import nangparbat from '../assets/Trek Nanga Parbat1.jpg';
import sp3 from '../assets/SP-3.jpg';
import pound from '../innerexperience/pound.png';
import hotels from '../innerexperience/hotels.png';
import landmarks from '../innerexperience/landmark.png';
import referfriend from '../innerexperience/refer friend icon.png';
import stars from '../innerexperience/stars.png';
import whyus from '../innerexperience/why us.png';
import ramada from '../innerexperience/hotels/ramada.png';
import hindikush from '../innerexperience/hotels/hindikush heights.png';
import hashoo from '../innerexperience/hotels/hashoo.png';
import pc from '../innerexperience/hotels/pc.png';
import airmen from '../innerexperience/hotels/airmen golf course.png';
import defence from '../innerexperience/hotels/defence raya.png';
import serena from '../innerexperience/hotels/serena.png';
import marriott from '../innerexperience/hotels/marriott.png';
import hotelone from '../innerexperience/hotels/hotel one.png';
import khunjerab from '../innerexperience/landmarks/Khunjerab Pass.png';
import attabad from '../innerexperience/landmarks/Attabad Lake.png';
import altitbaltit from '../innerexperience/landmarks/Altit Baltit Fort.png';
import islamiacollege from '../innerexperience/landmarks/Islamia College.png';
import faisalmosque from '../innerexperience/landmarks/Faisal Mosque.png';
import minarpakistan from '../innerexperience/landmarks/Minar-e-Pakistan.png';
import pakistanmonument from '../innerexperience/landmarks/Pakistan Monument.png';
import rohtasfort from '../innerexperience/landmarks/Rohtas Fort.png';
import derawarfort from '../innerexperience/landmarks/Derawar Fort.png';
import chowkyadgar from '../innerexperience/landmarks/Chowk Yadgar.png';
import mahabatkhan from '../innerexperience/landmarks/Mahabat Khan.png';
import babkhyber from '../innerexperience/landmarks/Bab-e-Khyber.png';
import badshahimosque from '../innerexperience/landmarks/Badshahi Mosque.png';
import shahiqila from '../innerexperience/landmarks/Shahi Qila.png';
import mizarquaid from '../innerexperience/landmarks/Mizar-e-Quaid.png';
import mohattapalace from '../innerexperience/landmarks/Mohatta Palace.png';
import customercare from '../innerexperience/whyus/customer care.png';
import handpickedactivities from '../innerexperience/whyus/hand picked activities.png';
import poundwhyus from '../innerexperience/whyus/pound.png';
import hennapattern from '../assets/henapattern.png';
import poundcross from '../innerexperience/price/pound cross.png';
import poundtick from '../innerexperience/price/pound tick.png';
import threesixty from '../innerexperience/360 icon.png';

class Mozino extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this); 
        this.state = {
            
          }
      }

      
        handleClick() {
          var elem = $("#toggle").text();
          console.log(elem,"elem");
          if (elem == "Read More") {
            $("#toggle").text("Read Less");
            $("#text").slideDown();
            $("#text-about-tour-one").slideDown();
            $("#text-about-tour-two").slideDown();
          } else {
            $("#toggle").text("Read More");
            $("#text").slideUp();
            $("#text-about-tour-one").slideUp();
            $("#text-about-tour-two").slideUp();
          }
        }
    
    
    render(){
       


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
                                <h1 className="text-mozino-pass">Mazino Pass</h1>
                                <p className="text-from-mozino-carousel-item">from <span className="pl-3 text-price-mozino"><img className="pound-image-mozino" src={pound} alt="sliderBanner" /> 2,135</span></p>
                                <p className="text-price-mozino-per-person">Price is for One Person*</p>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-mozino">
                            <img className="slider-home-page-image" src={nangparbat} alt="nangparbat"/>
                            <div className="carousel-item-centered-mozino">
                                <h1 className="text-mozino-pass">Mozino Pass</h1>
                                <p className="text-from-mozino-carousel-item">from <span className="pl-3 text-price-mozino"><img className="pound-image-mozino" src={pound} alt="sliderBanner" /> 2,135</span></p>
                                <p className="text-price-mozino-per-person">Price is for One Person*</p>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-mozino">
                            <img className="slider-home-page-image" src={sp3} alt="sp3" />
                            <div className="carousel-item-centered-mozino">
                                <h1 className="text-mozino-pass">Mozino Pass</h1>
                                <p className="text-from-mozino-carousel-item">from <span className="pl-3 text-price-mozino"><img className="pound-image-mozino" src={pound} alt="sliderBanner" /> 2,135</span></p>
                                <p className="text-price-mozino-per-person">Price is for One Person*</p>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-mozino">
                            <img className="slider-home-page-image" src={sliderBanner} alt="sliderBanner" />
                            <div className="carousel-item-centered-mozino">
                                <h1 className="text-mozino-pass">Mozino Pass</h1>
                                <p className="text-from-mozino-carousel-item">from <span className="pl-3 text-price-mozino"><img className="pound-image-mozino" src={pound} alt="sliderBanner" /> 2,135</span></p>
                                <p className="text-price-mozino-per-person">Price is for One Person*</p>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-mozino">
                            <img className="slider-home-page-image" src={nangparbat} alt="nangparbat"/>
                            <div className="carousel-item-centered-mozino">
                                <h1 className="text-mozino-pass">Mozino Pass</h1>
                                <p className="text-from-mozino-carousel-item">from <span className="pl-3 text-price-mozino"><img className="pound-image-mozino" src={pound} alt="sliderBanner" /> 2,135</span></p>
                                <p className="text-price-mozino-per-person">Price is for One Person*</p>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item-mozino">
                            <img className="slider-home-page-image" src={sp3} alt="sp3" />
                            <div className="carousel-item-centered-mozino">
                                <h1 className="text-mozino-pass">Mozino Pass</h1>
                                <p className="text-from-mozino-carousel-item">from <span className="pl-3 text-price-mozino"><img className="pound-image-mozino" src={pound} alt="sliderBanner" /> 2,135</span></p>
                                <p className="text-price-mozino-per-person">Price is for One Person*</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image-div-360">
                    <a-scene>
                        <a-sky src="https://aframe.io/aframe/examples/boilerplate/panorama/puydesancy.jpg" rotation="0 -20 0"></a-sky>
                    </a-scene>
                    <img className="image-threesixty" src={threesixty} alt="sp3" />
                </div>
                <div className="mozino-section-two-div-main">
                    <div className="container pt-5 pb-5">
                        <div className="row">
                            <div className="col-12 col-sm-4 col-lg-4">
                                <h1 className="text-about-tour-mozino-sec-two">About Tour</h1>
                            </div>
                            <div className="col-12 col-sm-8 col-lg-8">
                                <p className="text-para-read-more">
                                    Nanga Parbat, second in Pakistan and 9th. highest in world stands alone in Himalayan range of mountains in Pakistan.
                                    It has three famous climbing faces called as Rupal, Diamer & Raikot. Mazino Pass at 5377m is a semi technical trekking 
                                    route connecting Rupal valley with Diamer region. A track circling around Nanga Parbat is challenging and demanding for 
                                    trekkers with basic experience of using rope and harness.
                                </p>
                                <div>
                                    <br/>
                                    <span id="text">
                                        Prices have been quoted based on single occupancy at 5 star hotels or at the best accommodation possible, 
                                        where the 5 star chains do not operate. This tour is not family friendly and would require a degree of fitness.
                                        We would encourage anyone who is interested in booking a holiday with us, to give us a call so that we can provide 
                                        you with an accurate quote based on your requirements.
                                    <br/>
                                    </span>
                                </div>
                                <div>
                                    <br/>
                                    <span id="text-about-tour-one">
                                        The itinerary provided is a suggested plan and can be adapted to suit your requirements.
                                    <br/>
                                    </span>
                                </div>
                                <div>
                                    <br/>
                                    <span id="text-about-tour-two">
                                       Watch this space for group tours specifically targeting 50+ travelers & Single sex.
                                    <br/>
                                    </span>
                                </div>
                                <div className="btn-container">
                                    <button className="btn-read-more" id="toggle" onClick={this.handleClick}>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-tour-highligts-section">
                    <div className="container">
                        <div className="row pt-5 pb-5">
                            <div className="col-12 col-sm-4 col-lg-4">
                                <h1 className="text-about-tour-mozino-sec-two">Tour Highlights</h1>
                            </div>
                            <div className="col-12 col-sm-8 col-lg-8">
                                <div class="d-flex flex-row bd-highlight mb-2">
                                    <div className="p-2 bd-highlight">
                                        <span className="text-tour-highlight-option">No. of Days:</span>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <span className="text-tour-highlight-option-answer pd-no-of-days">12</span>
                                    </div>
                                </div>
                                <div class="d-flex flex-row bd-highlight mb-2">
                                    <div className="p-2 bd-highlight">
                                        <span className="text-tour-highlight-option">Availability:</span>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <span className="text-tour-highlight-option-answer pd-avaiability">April to Oct</span>
                                    </div>
                                </div>
                                <div class="d-flex flex-row bd-highlight mb-2">
                                    <div className="p-2 bd-highlight">
                                        <span className="text-tour-highlight-option">Max People:</span>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <span className="text-tour-highlight-option-answer pd-no-of-days">8</span>
                                    </div>
                                </div>
                                <div class="d-flex flex-row bd-highlight mb-2">
                                    <div className="p-2 bd-highlight">
                                        <span className="text-tour-highlight-option">Min Age:</span>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <span className="text-tour-highlight-option-answer pd-min-age">16+</span>
                                    </div>
                                </div>
                                <div class="d-flex flex-row bd-highlight mb-2">
                                    <div className="p-2 bd-highlight">
                                        <span className="text-tour-highlight-option">Intl. Flights:</span>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <span className="text-tour-highlight-option-answer pd-avaiability">Excluded</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-hotels-section pt-5 pb-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 pd-tab-mozino-category-hotels">
                                <ul className="nav nav-tabs tab-mozino-category-hotels" role="tablist">
                                    <div className="row">
                                        <div className="col-3 pd-hotel-used">
                                        <li className="nav-item">
                                        <img className="hotel-img" src={hotels} alt="hotels" />
                                        <a className="text-hotel-used-mozino" data-toggle="tab" href="#tabs-1" role="tab">Hotels Used</a>
                                        </li>
                                        </div>
                                        <div className="col-2 pd-landmark">
                                        <li className="nav-item ">
                                        <img className="landmark-img " src={landmarks} alt="landmarks" />
                                        <a className=" text-landmarks-mozino" data-toggle="tab" href="#tabs-2" role="tab">Featured landmarks</a>
                                        </li>
                                        </div>
                                        <div className="col-2 pd-whyus">
                                        <li className="nav-item ">
                                        <img className="whyus-img" src={whyus} alt="whyus" />
                                        <a className=" text-whyus-mozino" data-toggle="tab" href="#tabs-3" role="tab">Why us?</a>
                                        </li>
                                        </div>
                                        <div className="col-3 pd-referafriend">
                                        <li className="nav-item ">
                                        <img className="referfriend-img" src={referfriend} alt="referfriend" />
                                        <a className=" text-referfriend-mozino" data-toggle="tab" href="#tabs-4" role="tab">Refer a Friend</a>
                                        </li>
                                        </div>
                                        <div className="col-2 pd-reviews">
                                        <li className="nav-item ">
                                        <img className="reviews-img" src={stars} alt="stars" />
                                        <a className=" text-reviews-mozino" data-toggle="tab" href="#tabs-5" role="tab">Reviews</a>
                                        </li>
                                        </div>
                                    </div>   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-content bg-tab-content-mozino">
                    <div className="tab-pane" id="tabs-1" role="tabpanel">
                        <div className="container">
                            <div className="row pt-5">
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img className="ramada-img" src={ramada} alt="ramada" />
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img className="hindikush-img" src={hindikush} alt="hindikush" />
                                </div>
                                <div className="col-12 col-sm-3 col-lg-2">
                                    <img className="hashoo-img" src={hashoo} alt="hashoo" />
                                </div>
                                <div className="col-12 col-sm-3 col-lg-2">
                                    <img className="pc-img" src={pc} alt="pc" />
                                </div>
                                <div className="col-12 col-sm-3 col-lg-2">
                                    <img className="airmen-img" src={airmen} alt="airmen" /> 
                                </div>
                            </div>
                            <div className="row pt-5 pb-5">
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img className="defence-img" src={defence} alt="defence" />
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img className="serena-img" src={serena} alt="serena" />
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <img className="marriott-img" src={marriott} alt="marriott" />
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3 pl-4">
                                    <img className="hotelone-img" src={hotelone} alt="hotelone" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                        <div className="container pb-5 pt-4">
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <img className="khunjerab-img" src={khunjerab} alt="khunjerab" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="attabad-img" src={attabad} alt="attabad" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="altitbaltit-img" src={altitbaltit} alt="altitbaltit" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="islamiacollege-img" src={islamiacollege} alt="ramada" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="faisalmosque-img" src={faisalmosque} alt="faisalmosque" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="minarpakistan-img" src={minarpakistan} alt="minarpakistan" />
                                </div>
                            </div>
                            <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="p-2 bd-highlight">
                                    <img className="pakistanmonument-img" src={pakistanmonument} alt="pakistanmonument" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="rohtasfort-img" src={rohtasfort} alt="rohtasfort" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="derawarfort-img" src={derawarfort} alt="derawarfort" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="chowkyadgar-img" src={chowkyadgar} alt="chowkyadgar" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="mahabatkhan-img" src={mahabatkhan} alt="mahabatkhan" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="babkhyber-img" src={babkhyber} alt="babkhyber" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="p-2 bd-highlight">
                                    <img className="badshahimosque-img" src={badshahimosque} alt="badshahimosque" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="shahiqila-img" src={shahiqila} alt="shahiqila" />   
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="mizarquaid-img" src={mizarquaid} alt="mizarquaid" />
                                </div>
                                <div className="p-2 bd-highlight">
                                    <img className="mohattapalace-img" src={mohattapalace} alt="mohattapalace" />
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                        <div className="container pt-5 pb-5">
                            <div class="d-flex justify-content-center">
                                <div class="d-flex flex-column bd-highlight mb-3">
                                    <div class="p-2 bd-highlight"> <img className="poundwhyus-img" src={poundwhyus} alt="poundwhyus" /></div>
                                    <div class="p-2 bd-highlight"><img className="customercare-img" src={customercare} alt="customercare" /></div>
                                    <div class="p-2 bd-highlight"><img className="handpickedactivities-img" src={handpickedactivities} alt="handpickedactivities" /></div>
                                </div>
                                <div class="d-flex flex-column bd-highlight mb-3">
                                    <div class="p-2 bd-highlight"> <h3 className="poundwhyus-text">Created & customized for your needs</h3></div>
                                    <div class="p-2 bd-highlight"> <h3 className="customercare-text">Customer care available 24/7</h3></div>
                                    <div class="p-2 bd-highlight"><h3 className="handpickedactivities-text">Hand-picked Tours & Activities</h3></div>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-4" role="tabpanel">
                        <div className="container pb-4">
                            <div className="row pt-5">
                                <div className="col-12">
                                    <h3 className="text-center text-referafriend">Refer a Friend</h3>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-12">
                                    <input type="text" className="input-refer-friend-mozino" placeholder="Referral Code"/>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="col-2 pt-3 mg-btn-subscribe">
                                    <img className="flower-image" src={flower} width="20%"/>
                                    <button type="submit" className="btn-subscribe">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tabs-5" role="tabpanel">
                        <div className="container">
                            <div className="row pt-5">
                                <div className="col-12">
                                    <div id="carouselExampleControls" className="carousel slide carousel-main" data-ride="carousel">
                                        <div className="carousel-inner carousel-inner-text">
                                            <div className="carousel-item active ">
                                                <div className="carousel-caption carousel-caption-text">
                                                    <p className="text-slider-mozino">
                                                        We are specialist in customized experiential tour catering for small groups. 
                                                        Each client is different therefore no two experiences are ever the same.
                                                    </p>
                                                    <p className="text-slider-mozino">
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
                                                    <p className="text-slider-mozino">
                                                        We are specialist in customized experiential tour catering for small groups. 
                                                        Each client is different therefore no two experiences are ever the same.
                                                    </p>
                                                    <p className="text-slider-mozino">
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
                                                    <p className="text-slider-mozino">
                                                        We are specialist in customized experiential tour catering for small groups. 
                                                        Each client is different therefore no two experiences are ever the same.
                                                    </p>
                                                    <p className="text-slider-mozino">
                                                        We pride ourselves on customer care,authenticity and cre-activity, ensuring 
                                                        the time you spend with us is optimized with the most memorable experience.
                                                    </p>
                                                    <i className="material-icons star-icon p-3">star</i>
                                                    <i className="material-icons star-icon p-3">star</i>
                                                    <i className="material-icons star-icon p-3">star</i>
                                                    <i className="material-icons star-icon p-3">star</i>
                                                    <i className="material-icons star-icon p-3">star</i>
                                                    <h6 className="text-by-name-date-mozino text-center">By Lorem Ispum on 20th December, 2020</h6>
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
                    </div>
                </div>    
                <div className="" style={{background: `url(${hennapattern})`, backgroundSize: '800px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 pt-4 pb-4">
                                <h1 className="text-itinerary-tour-map text-center">Itinerary & Tour Maps</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3 pb-5">
                    <div className="col-12 col-lg-6 col-sm-6">
                    <div className="container">
                        <div id="accordion" className="accordion">
                            <div className="card card-itinerary mb-0">
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" href="#collapseOne">
                                    <a className="card-title card-title-itinerary"> Day 1: Islamabad-Chilas <span className="card-title-itinerary-span">(400 KM - 4HRS Drive)</span> </a>
                                </div>
                                <div id="collapseOne" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        We depart early and drive to Besham via Haripur, Abbottabad and Mansehra. 
                                        After a short break at Besham, we resume our drive on Karakoram Highway, along River Indus. 
                                        We will make photo stops at Shatial Rocks with ancient graffiti’s on it. We reach Chilas and transfer to hotel.
                                    </p>
                                </div>
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                    <a className="card-title card-title-itinerary"> Day 2: Chilas - Karimabad ( Hunza Valley ) </a>
                                </div>
                                <div id="collapseTwo" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        From Chilas we travel on towards Hunza and on the way sightseeing at Nanga Parbat View Point
                                        and confluence of 3 mountain ranges (Karakorum, Himalaya and Hindukush) including the confluence
                                        of Gilgit River into the Indus. From here we reach Gilgit. We shall continue bypassing Gilgit and 
                                        following Hunza River. We will have lunch stopover at Rakaposhi viewpoint and then will move on to 
                                        reach Karimabad, the capital of Hunza valley. We will reach Karimabad and transfer to hotel.
                                    </p>
                                </div>
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                    <a className="card-title card-title-itinerary"> Day 3: Karimabad - Excursion Khunjerab Pass </a>
                                </div>
                                <div id="collapseThree" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        Today we will make an excursion to the Sino-Pak border at Khunjerab, crossing the villages of Gulmit,
                                        Passu and Sost en route. Khunjerab is the highest point on KKH at 4734 meters and considered as the highest 
                                        trade route in the world. In the evening we will return to Karimabad.
                                    </p>
                                </div>
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" data-parent="#accordion" href="#collapsefour">
                                    <a className="card-title card-title-itinerary"> Day 4: Karimabad - Tarshing ( Astore ) </a>
                                </div>
                                <div id="collapsefour" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        After 5reakfast we will depart for Tarshing. On reaching Astore we will drive by jeeps to Tarashing, 
                                        a lovely village at the head of jeep track. We will establish our camp for night stay.
                                    </p>
                                </div>
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" data-parent="#accordion" href="#collapsefive">
                                    <a className="card-title card-title-itinerary"> Day 5: Tarashing - Bizhin</a>
                                </div>
                                <div id="collapsefive" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        An easy day of walking apart from crossing a tail of Tarashing Glacier, we camp at Rupal, a green and lovely place.
                                    </p>
                                </div>
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" data-parent="#accordion" href="#collapseSix">
                                    <a className="card-title card-title-itinerary"> Day 6: Bizhin - Shaigiri BC</a>
                                </div>
                                <div id="collapseSix" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        Shaigiri is a vast flower filled place, serving as base camp for climbing teams to Nanga Parbat. 
                                        The south face of Nanga Parbat, known as Rupal Face is a steep rock of 4500 meters high.
                                    </p>
                                </div>
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">
                                    <a className="card-title card-title-itinerary"> Day 7: Shaigiri - Mazino Base Camp </a>
                                </div>
                                <div id="collapseSeven" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        After a comfortable walk with views of Leila and Rupal peaks on back, 
                                        we arrive at a green campsite with stream of running water. Base camp 
                                        is a good place for camping offering superb views around.
                                    </p>
                                </div>
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" data-parent="#accordion" href="#collapseEight">
                                    <a className="card-title card-title-itinerary"> Day 8: Mazino BC - Mazino High Camp </a>
                                </div>
                                <div id="collapseEight" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        A steady climb on loose boulders takes us the high camp, en route Mazino Pass can be viewed ahead.
                                        It’s a short portion of the track but good to have a rest before crossing the pass.
                                    </p>
                                </div>
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" data-parent="#accordion" href="#collapseNine">
                                    <a className="card-title card-title-itinerary"> Day 9: Mazino HC - Loiba </a>
                                </div>
                                <div id="collapseNine" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        Very early start for a tough and long day as we cross the Mazino Pass at 5377m and descend
                                        into Bunar region. After crossing the pass we negotiate a portion with open and hidden crevasses
                                        on the slope, safety fixed ropes are must. After this portion, the walk is easy and we camp for 
                                        overnight besides a stream.
                                    </p>
                                </div>
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" data-parent="#accordion" href="#collapseTen">
                                    <a className="card-title card-title-itinerary"> Day 10: Loiba - Zangot </a>
                                </div>
                                <div id="collapseTen" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        We will leave for Zangot after breakfast, which will take about 6 hours of walking.
                                        We enter a land inhabited by people and walk through pastures. The day is long and 
                                        involves an exhaustingly steep descent. However, it is not as technical as the descent from the Mazino Pass.
                                    </p>
                                </div>
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">
                                    <a className="card-title card-title-itinerary"> Day 11: Zangot - Chilas </a>
                                </div>
                                <div id="collapseEleven" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        This will be last day of trekking. After breakfast, we will leave for bunar das 
                                        from where we will get on to our vehicles and leave for Chilas. We will check in
                                        to hotel on arrival.
                                    </p>
                                </div>
                                <div className="card-header collapsed card-header-itinerary" data-toggle="collapse" data-parent="#accordion" href="#collapseTwelve">
                                    <a className="card-title card-title-itinerary"> Day 12: Chilas - Islamabad </a>
                                </div>
                                <div id="collapseTwelve" className="card-body collapse card-body-itinerary" data-parent="#accordion">
                                    <p className="card-body-para-itinerary">
                                        To drive back to Islamabad, we make an early departure from Chilas and following the course of River Indus,
                                        we arrive in Besham. After lunch stop, we will resume our journey towards Islamabad. Passing through Manshera, 
                                        Abbottabad and Havelian we will reach Islamabad at our designated drop off place.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-lg-6 col-sm-6">
                        <div id="map">
                            <div ><iframe width="95%" height="550" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Malet%20St%2C%20London%20WC1E%207HU%2C%20United%20Kingdom+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/en/journey-planner.htm">find directions</a></iframe></div>
						</div>
                    </div>
                </div>
                <div class="d-flex flex-row bd-highlight mb-3 pl-5 pr-5 pb-5 pt-3">
                    <div className="bd-highlight pd-poundtick-image">
                        <div className="text-center">
                            <img className="poundtick-image" src={poundtick} alt="poundtick" />
                        </div>
                        <div className="text-center pt-2 pb-2">
                            <h1 className="text-price-include-exclude">Price Includes</h1>
                        </div>
                        <div className="">
                            <ul>
                                <li className="text-li-price-include-box">Private air conditioned transport</li>
                                <li className="text-li-price-include-box">Accommodation in standard hotels</li>
                                <li className="text-li-price-include-box">Daily breakfast</li>
                                <li className="text-li-price-include-box">English speaking guide for complete tour</li>
                                <li className="text-li-price-include-box">Basic First Aid keit</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bd-highlight pd-poundcross-image">
                        <div className="text-center">
                            <img className="poundtick-image" src={poundcross} alt="poundcross" />
                        </div>
                        <div className="text-center pt-2 pb-2">
                            <h1 className="text-price-include-exclude">Price Excludes</h1>
                        </div>
                        <div className="">
                            <ul>   
                                <li className="text-li-price-include-box">Late checkout, if different from standard checkout time</li>
                                <li className="text-li-price-include-box">Airfare for Karachi - Larkana and LAahore - Karachi portion</li>
                                <li className="text-li-price-include-box">Personal insurance of clients/luggage</li>
                                <li className="text-li-price-include-box">Meals other than breakfast</li>
                                <li className="text-li-price-include-box">Laundry, beverages & phone calls or other expenses of personal nature</li>
                                <li className="text-li-price-include-box">Extra expenses due to to the acts of nature and political reasons etc.</li>
                                <li className="text-li-price-include-box">Medical aid, evacuation or extr expenses in emergencies</li>
                                <li className="text-li-price-include-box">Any item not mentioned above</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <MozinoEnquiryTab/>
            </Layout>
        )
    }
}

export default Mozino;