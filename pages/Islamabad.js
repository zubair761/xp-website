import Layout from '../components/Layout';
import faisalmosque from '../destination/Shah Faisal Mosque, Islamabad 2.jpg';
import ReactFlagsSelect from 'react-flags-select';
import hennapattern from '../assets/henapattern.png';
import footer from '../components/Footer';

class Islamabad extends React.Component{


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
                                <span className="two-num-contact-detail-div">
                                    <span className="one-num-payment-contact-detail">2</span>
                                </span>
                                <span className="text-contact-detail">Contact Details</span>
                                <i className="right-div"></i>
                            </div>
                        </div>
                        <div className="select-tour-main-div-two">
                            <div className="pt-4">
                                <span className="three-num-contact-detail-div">
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

                {/* <div class="container-fluid ">
                    <div class="row">
                        <ol class="breadcrumb breadcrumb-arrow">
                            <li><a href="#"><i class="fa fa-fw fa-home"></i></a></li>
                            <li class=""><a href="#">Product</a></li>
                            <li class=""><a href="#">Group A</a></li>
                            <li class="active"><span>Create</span></li>
                        </ol>
                    </div>
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-lg-8 pt-5">
                            <div className="d-flex flex-column bd-highlight mb-3">
                                 <form className="pt-2">
                                    <div className="p-2 bd-highlight">
                                        <i class="fa fa-file-text-o icon-fa-file-text"></i>
                                        <span className="text-contact-detail">Contact Detail</span>
                                        
                                            <div className="form-group row pt-4">
                                                <label for="inputEmail3" className="col-sm-2 col-form-label-destination-form">First Name*</label>
                                                <div className="col-sm-10">
                                                <input type="text" className="form-control-contact-billing-detail" id="inputEmail3" placeholder="First Name"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputPassword3" className="col-sm-2 col-form-label-destination-form">Last Name*</label>
                                                <div className="col-sm-10">
                                                <input type="text" className="form-control-contact-billing-detail" id="inputPassword3" placeholder="Last Name"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputEmail3" className="col-sm-2 col-form-label-destination-form">Email*</label>
                                                <div className="col-sm-10">
                                                <input type="email" className="form-control-contact-billing-detail" id="inputEmail3" placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputPassword3" className="col-sm-2 col-form-label-destination-form">Phone*</label>
                                                <div className="col-sm-10">
                                                <input type="text" className="form-control-contact-billing-detail" id="inputPassword3" placeholder="Phone"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputState" className="col-sm-2 col-form-label-destination-form">Country*</label>
                                                <div className="col-sm-10">
                                                    <ReactFlagsSelect className="form-control-contact-billing-detail-country-dropdown"  searchable={true} />
                                                </div>
                                            </div>
                                            <div className="form-group row pb-5">
                                                <label for="inputPassword3" className="col-sm-2 col-form-label-destination-form">Address</label>
                                                <div className="col-sm-10">
                                                <textarea className="textarea-contact-detail" rows="6" cols="79"  name="comment" form="usrform"></textarea>
                                                </div>
                                            </div>
                                    
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <i className="fa fa-file-text-o icon-fa-file-text"></i>
                                        <span className="text-contact-detail">Billing Detail</span>
                                    
                                        <div className="form-group row pt-4">
                                            <div className="col-sm-1"></div>
                                                <div className="col-sm-8">
                                                <div className="form-check">
                                                    <input className="form-check-input-contact-billing-detail" type="checkbox" id="gridCheck1"/>
                                                    <label className="form-check-label-contact-billing-detail" for="gridCheck1">
                                                        The same as contact details
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputEmail3" className="col-sm-2 col-form-label-destination-form">First Name*</label>
                                                <div className="col-sm-10">
                                                <input type="text" className="form-control-contact-billing-detail" id="inputEmail3" placeholder="First Name"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputPassword3" className="col-sm-2 col-form-label-destination-form">Last Name*</label>
                                                <div className="col-sm-10">
                                                <input type="text" className="form-control-contact-billing-detail" id="inputPassword3" placeholder="Last Name"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputEmail3" className="col-sm-2 col-form-label-destination-form">Email*</label>
                                                <div className="col-sm-10">
                                                <input type="email" className="form-control-contact-billing-detail" id="inputEmail3" placeholder="Email"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputPassword3" className="col-sm-2 col-form-label-destination-form">Phone*</label>
                                                <div className="col-sm-10">
                                                <input type="text" className="form-control-contact-billing-detail" id="inputPassword3" placeholder="Phone"/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label for="inputState" className="col-sm-2 col-form-label-destination-form">Country*</label>
                                                <div className="col-sm-10">
                                                <select id="" className="form-control-contact-billing-detail-country-dropdown" >
                                                    <option selected>Afghanistan</option>
                                                    <option >United State</option>
                                                    <option >Pakistan</option>
                                                    <option>Arab Emirates</option>
                                                    <option>Europe</option>                                        
                                                </select>
                                                </div>
                                            </div>
                                            <div className="form-group row pb-5">
                                                <label for="inputPassword3" className="col-sm-2 col-form-label-destination-form">Address</label>
                                                <div className="col-sm-10">
                                                <textarea className="textarea-contact-detail" rows="6" cols="79"  name="comment" form="usrform"></textarea>
                                                </div>
                                            </div>
                                        
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <i class="fa fa-file-text-o icon-fa-file-text"></i>
                                        <span className="text-contact-detail">Notes</span> 
                                        <div className="form-group row pt-4">
                                            <label for="inputPassword3" className="col-sm-2 col-form-label-destination-form">Additional Notes</label>
                                            <div className="col-sm-10">
                                                <textarea className="textarea-contact-detail" rows="6" cols="90"  name="comment" form="usrform"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <div className="pd-div-btn-contact-billing-detail">
                                        <a href="#" class="btn-contact-billing-detail">Next Step</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4 payment-div-main-contact-detail">
                            <div className="d-flex flex-column bd-highlight mb-3 payment-div-submain-contact-detail">
                                <div className="p-2 bd-highlight ">
                                    <div className="payment-div-bg p-4">
                                        <h6 className="text-destination-city pt-2">Islamabad</h6>
                                        <p className="text-travel-date pt-2 pb-1">Travel Date: <span>March 23,2020</span><a href="#" className="edit-travel-date">(edit)</a></p>
                                        <p className="text-traveller ">Traveller:<span className="pl-2">2</span></p>
                                        <div className="pt-3">
                                            <input className="coupen-input-destination-page" type="text" placeholder="Coupon Code"/>
                                            <a href="#" className="pl-2 text-apply">Apply</a>
                                        </div>
                                        <div className="dropdown pt-4">
                                            <button className="btn-view-price-breakdown" type="button" data-toggle="dropdown">View Price Breakdown</button>
                                            <ul className="dropdown-menu traveller-dropdown-destination">
                                                <li className="p-1"><span className="traveller-base-price">Traveller Base Price</span><span className="pl-5 traveller-base-price"> 5 * 785</span><span className="traveller-base-price-number pl-4">3,925.00</span></li>
                                                <div className="dropdown-divider"></div>
                                                <li className="p-1 "><span className="traveller-base-price-sub-total">Sub Total Price</span><span className="traveller-base-price-sub-total-number">3,925.00</span></li>
                                                <div className="dropdown-divider"></div>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="total-price-div">
                                        <span className="traveller-base-price-total-text"><i className="icon_tag_alt"></i><i className="fa fa-pencil-square-o pr-2" aria-hidden="true"></i>Total Price</span>
                                        <span className="traveller-base-price-total-number">3,925.00</span>
                                        </div>
                                    <div className="">
                                        <a href="/payment" className="btn-payment-next-step">Next Step</a>
                                    </div>
                                </div>
                                <div className="p-2 bd-highlight ">
                                    <div className="pt-3" style={{background: `url(${hennapattern})`,backgroundSize: "800px 500px"}}>
                                        <span className="pl-4 text-center text-why-book-with-us-heading ">Why Book With Us?</span>
                                        <div className="pl-4 pt-2"><p className=" text-why-book-with-us-para"><i className="fa fa-dollar pr-2"></i>No-hassle best price guarantee</p></div>
                                        <div className="dropdown-divider"></div>
                                        <div className="pl-4 pt-2"><p className="text-why-book-with-us-para"><i className="fa fa-headphones pr-2" aria-hidden="true"></i>Customer care available 24/7</p></div>
                                        <div className="dropdown-divider"></div>
                                        <div className="pl-4 pt-2"><p className="text-why-book-with-us-para"> <i class="fa fa-star pr-2" aria-hidden="true"></i>Hand-picked Tours & Activities</p></div>
                                        <div className="dropdown-divider"></div>
                                        <div className="pl-4 pt-2"><p className="text-why-book-with-us-para pb-3"><i className="fa fa-soccer-ball-o pr-2"></i>Free Travel Insurance</p></div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Islamabad;

