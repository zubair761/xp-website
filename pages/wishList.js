import Layout from '../components/Layout';
import hennapattern from '../assets/henapattern.png';
import nangparbat from '../assets/Trek Nanga Parbat1.jpg';
import ProfileImage from '../assets/men1.png';
import accessory1 from '../assets/travel accessory 1.png';
import accessory2 from '../assets/travel accessory 2.png';
import accessory3 from '../assets/travel accessory 3.png';
import tour1 from '../assets/tour image 1.png';
import tour2 from '../assets/tour image 2.png';
import tour3 from '../assets/tour image 3.png';


class wishList extends React.Component{
    constructor(props){
    super(props);

    }

 

    navOpen() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("toggleMenu").style.zIndex = "-1";
        document.getElementById("wishListBorderdiv").style.width = "14%";
      }
      
      navClose() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("toggleMenu").style.zIndex = "0";
        document.getElementById("wishListBorderdiv").style.width = "12%";
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
                        <a className="my-profile-sidenav" href="/myGallery"  onClick={this.navClose}>My Gallery</a>
                        <a className="my-profile-sidenav" href="/paymentdetailprofile"  onClick={this.navClose}>Payment Details</a>
                        <a className="my-profile-sidenav" href="/traveldocument"  onClick={this.navClose}>Travel documents</a>
                        <a className="my-profile-sidenav" href="/travelAccessories"  onClick={this.navClose}>Recommended travel accessories</a>
                        <a className="my-profile-sidenav" href="#"  onClick={this.navClose}>wishlist</a>
                    </div>
                            
                    <div id="main">
                        <div className="row p-2">
                            <div className="col-1">
                                <span id="toggleMenu" onClick={this.navOpen}><i className="fa fa-bars"></i></span>
                            </div>
                            <div className="col-11 text-center">
                                <div className className="">
                                    <h1 className="text-wishList">wishList</h1>
                                </div>
                                <div id="wishListBorderdiv" className="text-wishList-border-div"></div>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-12 pt-2">
                                <img className="reviews-image" src={nangparbat} alt="nangparbat"/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h6 className="text-tours-wishlist">Tours</h6>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <div className="card" style={{width: "18rem;",border:"none"}}>
                                        <img className="card-img-top" src={tour1} alt="Card image cap"/>
                                        <div className="card-body"  style={{padding: "0"}}>
                                            <h5 class="card-title text-card-title-travel">Lorem Ipsum</h5>
                                            <p className="card-text text-card-travel">PKR 1700/-</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <div className="card" style={{width: "18rem;",border:"none"}}>
                                        <img className="card-img-top" src={tour2} alt="Card image cap"/>
                                        <div className="card-body"  style={{padding: "0"}}>
                                            <h5 class="card-title text-card-title-travel">Lorem Ipsum</h5>
                                            <p className="card-text text-card-travel">PKR 1700/-</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <div className="card" style={{width: "18rem;",border:"none"}}>
                                        <img className="card-img-top" src={tour3} alt="Card image cap"/>
                                        <div className="card-body" style={{padding: "0"}}>
                                            <h5 class="card-title text-card-title-travel">Lorem Ipsum</h5>
                                            <p className="card-text text-card-travel">PKR 1700/-</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <div className="card" style={{width: "18rem;",border:"none"}}>
                                        <img className="card-img-top" src={tour1} alt="Card image cap"/>
                                        <div className="card-body"  style={{padding: "0"}}>
                                            <h5 class="card-title text-card-title-travel">Lorem Ipsum</h5>
                                            <p className="card-text text-card-travel">PKR 1700/-</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-4">
                                <div className="col-12">
                                    <h6 className="text-tours-wishlist">Travel Accessories</h6>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <div className="card" style={{width: "18rem;",border:"none"}}>
                                        <img className="card-img-top" src={accessory1} alt="Card image cap"/>
                                        <div className="card-body"  style={{padding: "0"}}>
                                            <h5 class="card-title text-card-title-travel">Lorem Ipsum</h5>
                                            <p className="card-text text-card-travel">PKR 1700/-</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <div className="card" style={{width: "18rem;",border:"none"}}>
                                        <img className="card-img-top" src={accessory2} alt="Card image cap"/>
                                        <div className="card-body"  style={{padding: "0"}}>
                                            <h5 class="card-title text-card-title-travel">Lorem Ipsum</h5>
                                            <p className="card-text text-card-travel">PKR 1700/-</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <div className="card" style={{width: "18rem;",border:"none"}}>
                                        <img className="card-img-top" src={accessory3} alt="Card image cap"/>
                                        <div className="card-body" style={{padding: "0"}}>
                                            <h5 class="card-title text-card-title-travel">Lorem Ipsum</h5>
                                            <p className="card-text text-card-travel">PKR 1700/-</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-3 col-lg-3">
                                    <div className="card" style={{width: "18rem;",border:"none"}}>
                                        <img className="card-img-top" src={accessory1} alt="Card image cap"/>
                                        <div className="card-body"  style={{padding: "0"}}>
                                            <h5 class="card-title text-card-title-travel">Lorem Ipsum</h5>
                                            <p className="card-text text-card-travel">PKR 1700/-</p>
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

export default wishList;