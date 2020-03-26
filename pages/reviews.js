import Layout from '../components/Layout';
import hennapattern from '../assets/henapattern.png';
import coin from '../assets/coin.png';
import nangparbat from '../assets/Trek Nanga Parbat1.jpg';
import ProfileImage from '../assets/men1.png';

class Reviews extends React.Component{
    constructor(props){
    super(props)

    }

    navOpen() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("toggleMenu").style.zIndex = "-1";
        document.getElementById("reviewsRatingsBorder").style.width = "32%";
      }
      
      navClose() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("toggleMenu").style.zIndex = "0";
        document.getElementById("reviewsRatingsBorder").style.width = "27%";
      }

    render(){
        return(
            <Layout>
                <section className="my-profile-section">
                    <div id="mySidenav" className="sidenav sidenav-reviews" style={{background: `url(${hennapattern})`,backgroundSize: '500px'}}> 
                        <a className="" href="javascript:void(0)" 
                            className="closebtn" 
                            onClick={this.navClose}>
                            &times;
                        </a>
                        <div className="profile-image-div">
                            <img className="profile-image" src={ProfileImage} alt="ProfileImage"/>
                        </div>
                        <a className="my-profile-sidenav mt-4" href="/profile"  onClick={this.navClose}>My Profile</a>
                        <a className="my-profile-sidenav" href="#"  onClick={this.navClose}>Reviews & Ratings</a>
                        <a className="my-profile-sidenav" href="/itineraries"  onClick={this.navClose}>Itineraries</a>
                        <a className="my-profile-sidenav" href="/mytour"  onClick={this.navClose}>My tours</a>
                        <a className="my-profile-sidenav" href="/mygallery"  onClick={this.navClose}>My Gallery</a>
                        <a className="my-profile-sidenav" href="/paymentdetailprofile"  onClick={this.navClose}>Payment Details</a>
                        <a className="my-profile-sidenav" href="/traveldocument"  onClick={this.navClose}>Travel documents</a>
                        <a className="my-profile-sidenav" href="/travelaccessories"  onClick={this.navClose}>Recommended travel accessories</a>
                        <a className="my-profile-sidenav" href="/wishlist"  onClick={this.navClose}>wishlist</a>
                    </div>
                            
                    <div id="main">
                        <div className="row p-2">
                            <div className="col-1">
                                <span id="toggleMenu" onClick={this.navOpen}><i className="fa fa-bars"></i></span>
                            </div>
                            <div className="col-11 text-center">
                                <div className className="">
                                    <h1 className="text-reviews-ratings">Reviews & Ratings</h1>
                                </div>
                                <div id="reviewsRatingsBorder" className="text-reviews-ratings-border-div"></div>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-12 pt-2">
                                <img className="reviews-image" src={nangparbat} alt="nangparbat"/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-12">
                                <h6 className="text-tour-name-reviews-rating">Artisan Tour</h6>
                                <div className="">
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star star-reviews-icon"></span>
                                </div>
                                <p className="text-para-reviews-rating">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh est, 
                                    vulputate ut porttitor eu, bibendum non justo. Cras et massa ac dui 
                                    bibendum vestibulum. Ut lobortis est mi, id cursus tortor laoreet quis. 
                                    Etiam aliquam efficitur neque, id iaculis ante eleifend vel. Donec rutrum 
                                    risus elit, vitae hendrerit metus pulvinar vel. Nulla magna quam, facilisis
                                </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-12 pt-5">
                                <h6 className="text-tour-name-reviews-rating">Artisan Tour</h6>
                                <div className="">
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star star-reviews-icon"></span>
                                </div>
                                <p className="text-para-reviews-rating">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh est, 
                                    vulputate ut porttitor eu, bibendum non justo. Cras et massa ac dui 
                                    bibendum vestibulum. Ut lobortis est mi, id cursus tortor laoreet quis. 
                                    Etiam aliquam efficitur neque, id iaculis ante eleifend vel. Donec rutrum 
                                    risus elit, vitae hendrerit metus pulvinar vel. Nulla magna quam, facilisis
                                </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-12 pt-5">
                                <h6 className="text-tour-name-reviews-rating">Artisan Tour</h6>
                                <div className="">
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star pr-3 star-reviews-icon"></span>
                                    <span className="fa fa-star star-reviews-icon"></span>
                                </div>
                                <p className="text-para-reviews-rating">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh est, 
                                    vulputate ut porttitor eu, bibendum non justo. Cras et massa ac dui 
                                    bibendum vestibulum. Ut lobortis est mi, id cursus tortor laoreet quis. 
                                    Etiam aliquam efficitur neque, id iaculis ante eleifend vel. Donec rutrum 
                                    risus elit, vitae hendrerit metus pulvinar vel. Nulla magna quam, facilisis
                                </p>
                            </div>
                        </div>       
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Reviews;