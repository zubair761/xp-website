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

class Mozino extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this); 
        this.state = {
            bgColor: ""
          }
      }

      
        handleClick() {
          var elem = $("#toggle").text();
          console.log(elem,"elem");
          if (elem == "Read More") {
            $("#toggle").text("Read Less");
            $("#text").slideDown();
          } else {
            $("#toggle").text("Read More");
            $("#text").slideUp();
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
                <div className="mozino-section-two-div-main">
                    <div className="container pt-5 pb-5">
                        <div className="row">
                            <div className="col-12 col-sm-4 col-lg-4">
                                <h1 className="text-about-tour-mozino-sec-two">About Tour</h1>
                            </div>
                            <div className="col-12 col-sm-8 col-lg-8">
                                <p className="text-para-read-more">
                                    Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written
                                    in a markup language.Although most often used to set the visual style of web pages and user interfaces written in HTML
                                    and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering
                                    in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create
                                    visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.
                                </p>
                                <div>
                                    <br/>
                                    <span id="text">CSS is designed primarily to enable the separation of document content from document presentation, including aspects such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.
                                    Separation of formatting and content makes it possible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. It can also display the web page differently depending on the screen size or viewing device. Readers can also specify a different style sheet, such as a CSS file stored on their own computer, to override the one the author specified.
                                    Changes to the graphic design of a document (or hundreds of documents) can be applied quickly and easily, by editing a few lines in the CSS file they use, rather than by changing markup in the documents.
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
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ul className="nav nav-tabs tab-mozino-category-hotels" role="tablist">
                                    <li className="nav-item pd-nav-item-hotels">
                                        <img className="hotel-img" src={hotels} alt="hotels" />
                                        <a className="text-hotel-used-mozino" data-toggle="tab" href="#tabs-1" role="tab">Hotels Used</a>
                                    </li>
                                    <li className="nav-item">
                                        <img className="landmark-img pl-2" src={landmarks} alt="landmarks" />
                                        <a className=" text-landmarks-mozino" data-toggle="tab" href="#tabs-2" role="tab">Featured landmarks</a>
                                    </li>
                                    <li className="nav-item pd-nav-item">
                                        <img className="whyus-img" src={whyus} alt="whyus" />
                                        <a className=" text-whyus-mozino" data-toggle="tab" href="#tabs-3" role="tab">Why us?</a>
                                    </li>
                                    <li className="nav-item pd-nav-item">
                                        <img className="referfriend-img" src={referfriend} alt="referfriend" />
                                        <a className=" text-referfriend-mozino" data-toggle="tab" href="#tabs-4" role="tab">Refer a Friend</a>
                                    </li>
                                    <li className="nav-item">
                                        <img className="reviews-img" src={stars} alt="stars" />
                                        <a className=" text-reviews-mozino" data-toggle="tab" href="#tabs-5" role="tab">Reviews</a>
                                    </li>
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
                <div className="" style={{background: `url(${hennapattern})`}}>
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
                        <h1 className="pl-4">Hello Xp WhatsUp</h1>
                    </div>
                    <div className="col-12 col-lg-6 col-sm-6">
                        <div id="map">
                            <div ><iframe width="95%" height="475" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Malet%20St%2C%20London%20WC1E%207HU%2C%20United%20Kingdom+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.mapsdirections.info/en/journey-planner.htm">find directions</a></iframe></div>
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