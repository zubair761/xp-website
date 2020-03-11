import Layout from '../components/Layout';
import poundgold from '../destination/poundgold.png';
import faisalmosque from '../destination/Shah Faisal Mosque, Islamabad 2.jpg';
import hennapattern from '../assets/henapattern.png';
import flower from '../assets/flower.png';
import paypal from '../destination/paypal icon.png'

class payment extends React.Component{


    render(){
        return(
            <Layout>
               <div className="pt-5">
                    <img className="bg-image-destination-islamabad-page" src={faisalmosque} alt="faisalmosque" />
                    <div className="text-centered-destination-islamabad-page">
                        <h1 className="text-destination-islamabad-page">Islamabad</h1>
                    </div>
                </div>
                
                <div class="container-fluid bg-container-fluid-breadcrumb-payment">
                    <div className="container">
                        <div className="select-tour-main-div">
                            <div className="pt-4">
                                <span className="fa-check-div-payment">
                                    <i className="fa fa-check fa-check-icon-payment"></i>
                                </span>
                                <span className="text-select-tour">Select Tour</span>
                                <i className="right-div"></i>
                            </div>
                            
                        </div>
                        <div className="select-tour-main-div-two">
                            <div className="pt-4">
                                <span className="fa-check-div-payment">
                                    <i className="fa fa-check fa-check-icon-payment"></i>
                                </span>
                                <span className="text-select-tour">Contact Details</span>
                                <i className="right-div"></i>
                            </div>
                        </div>
                        <div className="select-tour-main-div-two">
                            <div className="pt-4">
                                <span className="three-num-payment-div">
                                    <span className="one-num-payment">3</span>
                                </span>
                                <span className="text-select-tour">Payment</span>
                                <i className="right-div"></i>
                            </div>
                        </div>
                        <div className="select-tour-main-div-two">
                            <div className="pt-4">
                                <span className="four-num-payment-div">
                                    <span className="one-num-payment">4</span>
                                </span>
                                <span className="text-select-tour">Complete</span>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-lg-8 pt-5">
                            <div className="d-flex flex-column bd-highlight mb-3">
                                <div className="p-5 bd-highlight bg-section-select-preferred-additonal-services">
                                        <p className="text-para-preferred-additional-services pb-4">Please select your preferred additional services</p>
                                        <div className="row">
                                            <div className="col-6 pt-2 pl-5">
                                            <form>
                                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                <label className="select-preferred-additional-services-checkbox" for="vehicle1"> Umbrella</label><br/>
                                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                                <label className="select-preferred-additional-services-checkbox" for="vehicle2"> Tip for tour guide</label><br/>
                                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                                <label className="select-preferred-additional-services-checkbox"for="vehicle3"> Entrance Ticket</label><br/>
                                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                                <label className="select-preferred-additional-services-checkbox"for="vehicle3"> Lunch Meal</label><br/>
                                            </form>
                                            </div>
                                            <div className="col-6 text-center">
                                                <div className="pt-3">
                                                    <img className="pound-image-payment" src={poundgold} alt="sliderBanner" />
                                                    <span className="additonal-services-number-payment">8 *</span><input className="additonal-services-number-input pl-3" type="text" id="" name="" value="1"/>
                                                </div>
                                                <div className="pt-3">
                                                    <img className="pound-image-payment" src={poundgold} alt="sliderBanner" />
                                                    <span className="additonal-services-number-payment">20 /</span><span className="additonal-services-person-text-payment">Person </span>
                                                </div>
                                                <div className="pt-3">
                                                    <img className="pound-image-payment" src={poundgold} alt="sliderBanner" />
                                                    <span className="additonal-services-number-payment">15 /</span><span className="additonal-services-person-text-payment">Person </span>
                                                </div>
                                                <div className="pt-3">
                                                    <img className="pound-image-payment" src={poundgold} alt="sliderBanner" />
                                                    <span className="additonal-services-number-payment">12 /</span><span className="additonal-services-person-text-payment">Person </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className="pt-4 pb-5 pl-2 bd-highlight">
                                   <div className="row">
                                   <div className="col-6 pt-5">
                                            <i className="fa fa-file-text-o icon-fa-file-text"></i>
                                            <span className="text-contact-detail">Contact Detail</span>
                                            <div className="row">
                                                <div className="col-4 pt-4">
                                                    <div className="">
                                                        <span  className="payment-contact-detail">First Name:</span>
                                                    </div>
                                                    <div className="">
                                                    <span  className="payment-contact-detail">Last Name:</span>
                                                    </div>
                                                    <div className="">
                                                    <span  className="payment-contact-detail">Email:</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">Phone:</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">Country:</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">Address:</span>
                                                    </div>
                                                </div>
                                                <div className="col-8 pt-4">
                                                    <div className="">
                                                        <span  className="payment-contact-detail">kasda</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">kdshifsu</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">sammmar9.bb@gmail.com</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">131452358</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">Afghanistan</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">johar town Lahore</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 pt-5">
                                            <i className="fa fa-file-text-o icon-fa-file-text"></i>
                                            <span className="text-contact-detail">Billing Detail</span>
                                            <div className="row">
                                                <div className="col-4 pt-4">
                                                    <div className="">
                                                        <span  className="payment-contact-detail">First Name:</span>
                                                    </div>
                                                    <div className="">
                                                    <span  className="payment-contact-detail">Last Name:</span>
                                                    </div>
                                                    <div className="">
                                                    <span  className="payment-contact-detail">Email:</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">Phone:</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">Country:</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">Address:</span>
                                                    </div>
                                                </div>
                                                <div className="col-8 pt-4">
                                                    <div className="">
                                                        <span  className="payment-contact-detail pl-3">kasda</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">kdshifsu</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">sammmar9.bb@gmail.com</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">131452358</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">Afghanistan</span>
                                                    </div>
                                                    <div className="">
                                                        <span  className="payment-contact-detail">johar town Lahore</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bd-highlight"  style={{background: `url(${hennapattern})`, backgroundSize: "800px 500px"}}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="text-center">
                                                <span className="pl-4 text-center text-why-book-with-us-heading text-center">Why Book With Us?</span>
                                                <div className=" pt-2"><p className=" text-why-book-with-us-para"><i className="fa fa-dollar pr-4"></i>No-hassle best price guarantee</p></div>
                                                <div className=" pt-2 pr-3"><p className="text-why-book-with-us-para"><i className="fa fa-headphones pr-4" aria-hidden="true"></i>Customer care available 24/7</p></div>
                                              
                                                <div className="pt-2 pr-2"><p className="text-why-book-with-us-para"> <i class="fa fa-star pr-4" aria-hidden="true"></i>Hand-picked Tours & Activities</p></div>
                                                
                                                <div className="pt-2 pd-free-travel-insurance-payment-page"><p className="text-why-book-with-us-para pb-3"><i className="fa fa-soccer-ball-o pr-4"></i>Free Travel Insurance</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4 payment-div-main">
                            <div className="d-flex flex-column bd-highlight mb-3 payment-div-submain">
                                <div className="p-2 bd-highlight ">
                                    <div className="payment-div-bg p-4">
                                        <h6 className="text-destination-city pt-2">Mozino Pass</h6>
                                        <p className="text-travel-date pt-2 pb-1">Travel Date: <span>March 23,2020</span></p>
                                        <p className="text-traveller ">Traveller:<span className="pl-2">2</span></p>
                                        <div className="pt-3">
                                            <input className="coupen-input-destination-page" type="text" placeholder="Coupon Code"/>
                                            <a href="#" className="pl-2 text-apply">Apply</a>
                                        </div>
                                        <div className="dropdown pt-4">
                                            <button className="btn-view-price-breakdown" type="button" data-toggle="dropdown">View Price Breakdown</button>
                                            <ul className="dropdown-menu traveller-dropdown-destination">
                                                <li className="p-1"><span className="traveller-base-price">Traveller Base Price</span><span className="pl-5 traveller-base-price"> 5 * 785</span><span className="traveller-base-price-number pl-4"><img className="pound-image-payment-total-price" src={poundgold} alt="poundgold" />3,925.00</span></li>
                                                <div className="dropdown-divider"></div>
                                                <li className="p-1 "><span className="traveller-base-price-sub-total">Sub Total Price</span><span className="traveller-base-price-sub-total-number"><img className="pound-image-payment-total-price" src={poundgold} alt="poundgold" />3,925.00</span></li>
                                                <div className="dropdown-divider"></div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="total-price-div">
                                        <span className="traveller-base-price-total-text"><i className="icon_tag_alt"></i><i className="fa fa-pencil-square-o pr-2" aria-hidden="true"></i>Total Price</span>
                                        <span className="traveller-base-price-total-number"><img className="pound-image-payment-total-price" src={poundgold} alt="poundgold" />3,925.00</span>
                                        </div>
                                    <div className="">
                                        <a href="/payment" className="btn-payment-next-step">Next Step</a>
                                    </div>
                                </div>
                                <div className="p-2 bd-highlight ">
                                    <div className="pt-3" style={{background: `url(${hennapattern})`,backgroundSize: "800px 500px"}}>
                                    <div className="row pt-2">
                                        <div className="col-12">
                                            <h3 className="text-center text-referafriend">Refer a Friend</h3>
                                        </div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col-12">
                                            <input type="text" className="input-refer-friend-payment" placeholder="Referral Code"/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center pb-3 pr-4">
                                        <div className="col-2 pt-3 pr-5">
                                            <img className="flower-image-payment-page" src={flower} width="50%"/>
                                            <button type="submit" className="btn-subscribe-payment-page">Subscribe</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="p-2 bd-highlight ">
                                    <div className="p-5" style={{background: `url(${hennapattern})`,backgroundSize: "800px 500px"}}>
                                        <h3 className="text-pay-safely-with-us ">Pay Safely With Us</h3>
                                        <div class="d-flex flex-row bd-highlight mb-3">
                                            <div class="p-2 bd-highlight">
                                                <i class="fa fa-lock pr-5 lock-icon-pay-safely-with-us"></i>
                                            </div>
                                            <div class="p-2 bd-highlight">
                                                <span className="para-pay-safely-with-us">The payment is encrypted and transmitted securely with SSL protocol</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 bd-highlight ">
                                    <div className="p-5" style={{background: `url(${hennapattern})`,backgroundSize: "800px 500px"}}>
                                        <h3 className="text-please-select-payment-method">Please Select a Payment Method</h3>
                                        <form>
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <label className="select-payment-method-checkbox" for="vehicle1"> * I agree with Terms of Service & Privacy Statement</label><br/>
                                        </form>
                                        <div className="paypal-image-div pt-2">
                                            <a href="#"><img className="paypal-image" src={paypal} alt="paypal" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default payment;

