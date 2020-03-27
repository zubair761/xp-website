import Layout from '../components/Layout';
import hennapattern from '../assets/henapattern.png';
import nangparbat from '../assets/Trek Nanga Parbat1.jpg';
import ProfileImage from '../assets/men1.png';
import gallery from '../assets/gallery.png';


class myGallery extends React.Component{
    constructor(props){
    super(props);

    }

 

    navOpen() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("toggleMenu").style.zIndex = "-1";
        document.getElementById("myGalleryBorderdiv").style.width = "20%";
      }
      
      navClose() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("toggleMenu").style.zIndex = "0";
        document.getElementById("myGalleryBorderdiv").style.width = "17%";
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
                                    <h1 className="text-myGallery">My Gallery</h1>
                                </div>
                                <div id="myGalleryBorderdiv" className="text-myGallery-border-div"></div>
                            </div>
                        </div>  
                        <div className="row">
                            <div className="col-12 pt-2">
                                <img className="reviews-image" src={nangparbat} alt="nangparbat"/>
                            </div>
                        </div>
                        <div className="my-gallery-image-top-border"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 pt-2">
                                {/* <button type="button" className="mr-4 btn-upload-travel-document" onClick={this.uploadFiles}>upload</button> */}
                                    <form>
                                        <div className="form-group text-center">
                                            <input id="file-upload"  type="file" placeholder="Upload Pictures" className="" onChange={this.uploadMultipleFiles} multiple />
                                            <label for="file-upload" className="custom-file-upload-gallery mr-3">
                                                 Upload Pictures
                                            </label>
                                            <span className="custom-file-upload-gallery-icon-div"><i class="fa fa-upload custom-file-upload-gallery-icon"></i></span>
                                        </div>

                                        <div className="form-group multi-preview">
                                            {(this.fileArray || []).map(url => (
                                                <img src={url} alt="..." />
                                            ))}
                                        </div>
                                       
                                        <img className="pr-4" src={gallery} alt="Card image cap" width="25%"/>
                                        <img className="pr-4" src={gallery} alt="Card image cap" width="25%"/>
                                        <img className="pr-4" src={gallery} alt="Card image cap" width="25%"/>
                                        <img className="pr-4" src={gallery} alt="Card image cap" width="25%"/>
                                        <img className="pr-4 pt-4" src={gallery} alt="Card image cap" width="25%"/>
                                        <img className="pr-4 pt-4" src={gallery} alt="Card image cap" width="25%"/>
                                        
                                        {/* <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button> */}
                                    </form >

                                </div>
                            </div>
                        </div>
                    </div>        
                </section>
            </Layout>
        )
    }
}

export default myGallery;