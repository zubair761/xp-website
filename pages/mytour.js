import Layout from '../components/Layout';
import hennapattern from '../assets/henapattern.png';
import nangparbat from '../assets/Trek Nanga Parbat1.jpg';
import ProfileImage from '../assets/men1.png';
import itinerar from '../assets/itineraries.png';
import poundgold from '../destination/poundgold.png';


class myTour extends React.Component{
    constructor(props){
    super(props)

    }

    navOpen() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("toggleMenu").style.zIndex = "-1";
        document.getElementById("myTourBorderdiv").style.width = "15%";
      }
      
      navClose() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("toggleMenu").style.zIndex = "0";
        document.getElementById("myTourBorderdiv").style.width = "12%";
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
                        <a className="my-profile-sidenav" href="#"  onClick={this.navClose}>My tours</a>
                        <a className="my-profile-sidenav" href="/myGallery"  onClick={this.navClose}>My Gallery</a>
                        <a className="my-profile-sidenav" href="/paymentdetailprofile"  onClick={this.navClose}>Payment Details</a>
                        <a className="my-profile-sidenav" href="/traveldocument"  onClick={this.navClose}>Travel documents</a>
                        <a className="my-profile-sidenav" href="/travelAccessories"  onClick={this.navClose}>Recommended travel accessories</a>
                        <a className="my-profile-sidenav" href="/wishList"  onClick={this.navClose}>wishlist</a>
                    </div>
                            
                    <div id="main">
                        <div className="row p-2">
                            <div className="col-1">
                                <span id="toggleMenu" onClick={this.navOpen}><i className="fa fa-bars"></i></span>
                            </div>
                            <div className="col-11 text-center">
                                <div className className="">
                                    <h1 className="text-myTour">My Tours</h1>
                                </div>
                                <div id="myTourBorderdiv" className="text-myTour-border-div"></div>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-12 pt-2">
                                <img className="reviews-image" src={nangparbat} alt="nangparbat"/>
                            </div>
                        </div>
                        <div className="pl-3 pr-3">
                            <div className="border-div-content-myTour">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2 col-lg-2">
                                            <img className="itineraries-image" src={itinerar} alt="itineraries"/>
                                        </div>
                                        <div className="col-4 col-lg-8 pt-4">
                                            <h6 className="text-tour-name-itineraries">Nanga Parbat Base Camp</h6>
                                            <p className="text-date-itineraries">July 25, 2019-August 05, 2019</p>
                                        </div>
                                        <div className="col-2 col-lg-2 pt-3">
                                            <span className="itineraries-price"><img className="pound-image-myTour" src={poundgold} alt="poundgold" />1,740</span>
                                            <p className="text-book-again-itineraries pt-2">Book Again <br/> Remove from List</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-3 pr-3 pt-4">
                            <div className="border-div-content-myTour">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2 col-lg-2">
                                            <img className="itineraries-image" src={itinerar} alt="itineraries"/>
                                        </div>
                                        <div className="col-4 col-lg-8 pt-4">
                                            <h6 className="text-tour-name-itineraries">Nanga Parbat Base Camp</h6>
                                            <p className="text-date-itineraries">July 25, 2019-August 05, 2019</p>
                                        </div>
                                        <div className="col-2 col-lg-2 pt-3">
                                            <span className="itineraries-price"><img className="pound-image-payment-total-price" src={poundgold} alt="poundgold" />1,740</span>
                                            <p className="text-book-again-itineraries pt-2">Book Again <br/> Remove from List</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-3 pr-3 pt-4">
                            <div className="border-div-content-myTour">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2 col-lg-2">
                                            <img className="itineraries-image" src={itinerar} alt="itineraries"/>
                                        </div>
                                        <div className="col-4 col-lg-8 pt-4">
                                            <h6 className="text-tour-name-itineraries">Nanga Parbat Base Camp</h6>
                                            <p className="text-date-itineraries">July 25, 2019-August 05, 2019</p>
                                        </div>
                                        <div className="col-2 col-lg-2 pt-3">
                                            <span className="itineraries-price"><img className="pound-image-payment-total-price" src={poundgold} alt="poundgold" />1,740</span>
                                            <p className="text-book-again-itineraries pt-2">Book Again <br/> Remove from List</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-3 pr-3 pt-4">
                            <div className="border-div-content-myTour">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2 col-lg-2">
                                            <img className="itineraries-image" src={itinerar} alt="itineraries"/>
                                        </div>
                                        <div className="col-4 col-lg-8 pt-4">
                                            <h6 className="text-tour-name-itineraries">Nanga Parbat Base Camp</h6>
                                            <p className="text-date-itineraries">July 25, 2019-August 05, 2019</p>
                                        </div>
                                        <div className="col-2 col-lg-2 pt-3">
                                            <span className="itineraries-price"><img className="pound-image-payment-total-price" src={poundgold} alt="poundgold" />1,740</span>
                                            <p className="text-book-again-itineraries pt-2">Book Again <br/> Remove from List</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-3 pr-3 pt-4">
                            <div className="border-div-content-myTour">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2 col-lg-2">
                                            <img className="itineraries-image" src={itinerar} alt="itineraries"/>
                                        </div>
                                        <div className="col-4 col-lg-8 pt-4">
                                            <h6 className="text-tour-name-itineraries">Nanga Parbat Base Camp</h6>
                                            <p className="text-date-itineraries">July 25, 2019-August 05, 2019</p>
                                        </div>
                                        <div className="col-2 col-lg-2 pt-3">
                                            <span className="itineraries-price"><img className="pound-image-payment-total-price" src={poundgold} alt="poundgold" />1,740</span>
                                            <p className="text-book-again-itineraries pt-2">Book Again <br/> Remove from List</p>
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

export default myTour;