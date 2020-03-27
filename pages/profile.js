import Layout from '../components/Layout';
import landingImage from '../personalShopper/profile.png';
import hennapattern from '../assets/henapattern.png';
import coin from '../assets/coin.png';
// import nangparbat from '../assets/Trek Nanga Parbat1.jpg';
import ProfileImage from '../assets/men1.png';


class Profile extends React.Component{
    constructor(props){
    super(props)

    }

    navOpen() {
        document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.width = "80%";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("toggleMenu").style.zIndex = "-1";
        document.getElementById("headerBorder").style.width = "15%";
      }
      
      navClose() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("toggleMenu").style.zIndex = "0";
        document.getElementById("headerBorder").style.width = "13%";
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
                        <a className="my-profile-sidenav mt-4" href="#"  onClick={this.navClose}>My Profile</a>
                        <a className="my-profile-sidenav" href="/reviews"  onClick={this.navClose}>Reviews & Ratings</a>
                        <a className="my-profile-sidenav" href="/itineraries"  onClick={this.navClose}>Itineraries</a>
                        <a className="my-profile-sidenav" href="/mytour"  onClick={this.navClose}>My tours</a>
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
                                    <h1 className="text-my-profile">My Profile</h1>
                                </div>
                                <div id="headerBorder" className="profile-border-div"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 pt-2">
                                <img className="myprofile-image" src={landingImage} alt="landingImage"/>
                            </div>
                        </div>
                        <div className="container">
                            <div class="d-flex justify-content-between pt-4">
                                <div className="">
                                    <h6 className="text-name-profile">Abeera Ahmad</h6>
                                    <p className="text-address-profile">134 CCA, Phase IV, DHA</p>
                                    <p className="text-address-profile">Lahore, Pakistan</p>
                                </div>
                                <div className="">
                                    <p className="text-email-profile">abeera.ahmad@gmail.com</p>
                                    <p className="text-email-profile">+92-333-6255447</p>
                                    <p className="text-email-profile">November 13, 1971</p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div class="d-flex justify-content-between pt-4">
                                <div className="">
                                    <h6 className="text-bio-profile">Bio</h6>
                                </div>
                                <div className="">
                                    <img className="" src={coin} alt="coin" width="14%"/>
                                    <span className="text-coin-points">+150 XP Points</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p className="text-para-bio">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh est, 
                                        vulputate ut porttitor eu, bibendum non justo. Cras et massa ac dui 
                                        bibendum vestibulum. Ut lobortis est mi, id cursus tortor laoreet quis. 
                                        Etiam aliquam efficitur neque, id iaculis ante eleifend vel. Donec rutrum 
                                        risus elit, vitae hendrerit metus pulvinar vel. Nulla magna quam, facilisis
                                        vitae tempor nec, tristique sed enim. Orci varius natoque penatibus et 
                                        magnis dis parturient montes, nascetur ridiculus mus. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center pt-5">
                                    <div className className="">
                                        <h3 className="text-invite-a-friend">Invite a friend</h3>
                                    </div>
                                    <div className="text-invite-a-friend-border-div"></div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center pt-5 pb-4">
                                <button type="submit" className="mr-4 btn-refer-afriend">Refer a Friend</button>
                                <button type="submit" className="ml-4 btn-refer-afriend">Invite a Friend</button>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center pt-5">
                                    <div className className="">
                                        <h3 className="text-suggestion-box">Suggestion box</h3>
                                    </div>
                                    <div className="text-suggestioon-box-border-div"></div>
                                </div>
                            </div>
                            <div className="row">
                                <form>
                                    <div className="col-12 pt-5">
                                        <textarea className="textarea-my-profile" rows="6" cols="152"  name="comment" form="usrform" placeholder="Share your suggestion..."></textarea>
                                    </div>
                                    <div className="col-12 text-right">
                                        <button type="submit" className="btn-submit-profile">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Profile;