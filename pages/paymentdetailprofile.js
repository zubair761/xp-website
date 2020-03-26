import Layout from '../components/Layout';
import hennapattern from '../assets/henapattern.png';
import nangparbat from '../assets/Trek Nanga Parbat1.jpg';
import ProfileImage from '../assets/men1.png';
import poundgold from '../destination/poundgold.png';
import mastercard from '../assets/mastercard icon.png';


class PaymentDetail extends React.Component{
    constructor(props){
    super(props)

    }

    navOpen() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("toggleMenu").style.zIndex = "-1";
        document.getElementById("paymentDetailBorderdiv").style.width = "29%";
      }
      
      navClose() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("toggleMenu").style.zIndex = "0";
        document.getElementById("paymentDetailBorderdiv").style.width = "24%";
      }
      
    render(){
        return(
            <Layout>
                <section className="my-profile-section">
                    <div id="mySidenav" className="sidenav" style={{background: `url(${hennapattern})`,backgroundSize: '500px'}}> 
                        <a className="" href="javascript:void(0)" 
                            className="closebtn" 
                            onClick={this.navClose}>
                            &times;
                        </a>
                        <div className="profile-image-div">
                            <img className="profile-image" src={ProfileImage} alt="ProfileImage"/>
                        </div>
                        <a className="my-profile-sidenav mt-4" href="/profile"  onClick={this.navClose}>My Profile</a>
                        <a className="my-profile-sidenav" href="/reviews"  onClick={this.navClose}>Reviews & Ratings</a>
                        <a className="my-profile-sidenav" href="/itineraries"  onClick={this.navClose}>Itineraries</a>
                        <a className="my-profile-sidenav" href="/mytour"  onClick={this.navClose}>My tours</a>
                        <a className="my-profile-sidenav" href="#"  onClick={this.navClose}>My Gallery</a>
                        <a className="my-profile-sidenav" href="#"  onClick={this.navClose}>Payment Details</a>
                        <a className="my-profile-sidenav" href="/traveldocument"  onClick={this.navClose}>Travel documents</a>
                        <a className="my-profile-sidenav" href="/travelaccessories"onClick={this.navClose}>Recommended travel accessories</a>
                        <a className="my-profile-sidenav" href="/wishlist"  onClick={this.navClose}>wishlist</a>
                    </div>
                            
                    <div id="main">
                        <div className="row p-2">
                            <div className="col-1">
                                <span id="toggleMenu" onClick={this.navOpen}><i className="fa fa-bars"></i></span>
                            </div>
                            <div className="col-11 text-center">
                                <div className className="">
                                    <h1 className="text-paymentDetail">Payment Details</h1>
                                </div>
                                <div id="paymentDetailBorderdiv" className="text-paymentDetail-border-div"></div>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-12 pt-2">
                                <img className="reviews-image" src={nangparbat} alt="nangparbat"/>
                            </div>
                        </div>
                        <div className="pl-3 pr-3">
                            <div className="border-content-div-paymentdetail">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 col-lg-4">
                                            <h3 className="paymentDetailHeader pl-3">Tour Details</h3>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center">
                                            <h3 className="paymentDetailHeader">Payment Method</h3>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center">
                                            <h3 className="paymentDetailHeader">Status</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-3 pr-3 pt-4">
                            <div className="border-content-div-paymentdetail">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 col-lg-4">
                                            <h6 className="text-tour-name-paymentDetail">Nanga Parbat Base Camp</h6>
                                            <p className="text-date-paymentDetail">July 25, 2019-August 05, 2019</p>
                                            <span className="paymentDetail-price"><img className="pound-image-payment-detail-profile" src={poundgold} alt="poundgold" />1,740</span>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center">
                                            <a href="#"><img className="mastercard-paymentDetail-image" src={mastercard} alt="mastercard" /></a>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center pt-4">
                                            <h3 className="text-payment-status">Cleared</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-3 pr-3 pt-4">
                            <div className="border-content-div-paymentdetail">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 col-lg-4">
                                            <h6 className="text-tour-name-paymentDetail">Nanga Parbat Base Camp</h6>
                                            <p className="text-date-paymentDetail">July 25, 2019-August 05, 2019</p>
                                            <span className="paymentDetail-price"><img className="pound-image-payment-detail-profile" src={poundgold} alt="poundgold" />1,740</span>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center">
                                            <a href="#"><img className="mastercard-paymentDetail-image" src={mastercard} alt="mastercard" /></a>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center pt-4">
                                            <h3 className="text-payment-status">Cleared</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-3 pr-3 pt-4">
                            <div className="border-content-div-paymentdetail">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 col-lg-4">
                                            <h6 className="text-tour-name-paymentDetail">Nanga Parbat Base Camp</h6>
                                            <p className="text-date-paymentDetail">July 25, 2019-August 05, 2019</p>
                                            <span className="paymentDetail-price"><img className="pound-image-payment-detail-profile" src={poundgold} alt="poundgold" />1,740</span>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center">
                                            <a href="#"><img className="mastercard-paymentDetail-image" src={mastercard} alt="mastercard" /></a>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center pt-4">
                                            <h3 className="text-payment-status">Cleared</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-3 pr-3 pt-4">
                            <div className="border-content-div-paymentdetail">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 col-lg-4">
                                            <h6 className="text-tour-name-paymentDetail">Nanga Parbat Base Camp</h6>
                                            <p className="text-date-paymentDetail">July 25, 2019-August 05, 2019</p>
                                            <span className="paymentDetail-price"><img className="pound-image-payment-detail-profile" src={poundgold} alt="poundgold" />1,740</span>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center">
                                            <a href="#"><img className="mastercard-paymentDetail-image" src={mastercard} alt="mastercard" /></a>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center pt-4">
                                            <h3 className="text-payment-status">Cleared</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-3 pr-3 pt-4">
                            <div className="border-content-div-paymentdetail">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 col-lg-4">
                                            <h6 className="text-tour-name-paymentDetail">Nanga Parbat Base Camp</h6>
                                            <p className="text-date-paymentDetail">July 25, 2019-August 05, 2019</p>
                                            <span className="paymentDetail-price"><img className="pound-image-payment-detail-profile" src={poundgold} alt="poundgold" />1,740</span>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center">
                                            <a href="#"><img className="mastercard-paymentDetail-image" src={mastercard} alt="mastercard" /></a>
                                        </div>
                                        <div className="col-4 col-lg-4 text-center pt-4">
                                            <h3 className="text-payment-status">Cleared</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>         
                </section>
            </Layout>
        )
    }
}

export default PaymentDetail;