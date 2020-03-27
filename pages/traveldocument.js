import Layout from '../components/Layout';
import hennapattern from '../assets/henapattern.png';
import nangparbat from '../assets/Trek Nanga Parbat1.jpg';
import ProfileImage from '../assets/men1.png';
// import doc1 from '../assets/doc 1.png';
// import doc2 from '../assets/doc 2.png';



class TravelDocument extends React.Component{

    fileObj = [];
    fileArray = [];

    constructor(props){
    super(props);
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })

        // $('#i_file').change( function(event) {
        //     $("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
        // });
    //     if (input.files && input.files[0])
    // reader = new FileReader()

    // reader.onload = (e) 
    //   $('.image_to_upload').attr('src', e.target.result)
    //   preview = $('.preview');
    //   if preview.hasClass('hide')
    //     preview.toggleClass('hide');

    // reader.readAsDataURL(input.files[0]);
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file,"this.state.file")
    }
    // showFile = async (e) => {
    //     e.preventDefault()
    //     const reader = new FileReader()
    //     reader.onload = async (e) => { 
    //       const text = (e.target.result)
    //       console.log(text)
    //       alert(text)
    //     };
    //     reader.readAsText(e.target.files[0])
    //   }

   
        

    navOpen() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("toggleMenu").style.zIndex = "-1";
        document.getElementById("travelDocumentBorderdiv").style.width = "33%";
      }
      
      navClose() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("toggleMenu").style.zIndex = "0";
        document.getElementById("travelDocumentBorderdiv").style.width = "27%";
      }
      
    render(){
        const file = this.state;
        console.log(file,"file");

        const fillenenj = this.fileObj
        console.log(fillenenj,"fillenenj")

        const fillenearrrayy = this.fileArray
        console.log(fillenearrrayy,"fillenearrrayy")
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
                        <a className="my-profile-sidenav" href="#"  onClick={this.navClose}>Travel documents</a>
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
                                    <h1 className="text-travelDocument">Travel documents</h1>
                                </div>
                                <div id="travelDocumentBorderdiv" className="text-travelDocument-border-div"></div>
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
                                    <ol>
                                        <li className="text-traveldocument-type">Lorem Ipsum Nisucys.doc</li>
                                        <li className="text-traveldocument-type">Lorem Ipsum Nisucys.pdf</li>
                                        <li className="text-traveldocument-type">Lorem Ipsum Nisucys.jpg</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center pt-5">
                                    
                                    <form>
                                        <button  type="button" className="mr-4 btn-upload-travel-document" onClick={this.uploadFiles}>upload</button>
                                        <h6 className="text-uploaded-document text-left pb-4">Uploaded Documents</h6>
                                        {/* <img className="" src={doc1} alt="Card image cap" width="20%"/>
                                        <img className="" src={doc2} alt="Card image cap" width="20%"/>
                                        <img className="" src={doc1} alt="Card image cap" width="20%"/>
                                        <img className="" src={doc2} alt="Card image cap" width="20%"/> */}
                                        <div className="form-group multi-preview">
                                            {(this.fileArray || []).map((url,i) => (
                                                <img key={i} src={url} alt="..."  width="20%"/>
                                            ))}
                                        </div>
                                        <div className="form-group">
                                            <input  id="file-upload"  type="file" className="" onChange={this.uploadMultipleFiles} multiple />
                                        </div>
                                        <label for="file-upload" className="custom-file-upload-gallery mr-3">
                                                 Choose Pictures
                                            </label>
                                        {/* <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button> */}
                                    </form >

                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 pt-5">
                                    <h6 className="text-note-travel-document">Note:</h6>
                                    <p className="text-para-travel-document">Upload all important PDFs or URLs for your clients to access anywhere at anytime</p>
                                    <ul className="text-ul-travel-document">
                                        <li>Include boarding passes, confirmation, reservation details and anything else your clients need.</li>
                                        <li>No need to print out documents or resend updated information in emails.</li>
                                        <li>Add in nice to have such as local historical information, good hiking routes and restaurent menus.</li>
                                    </ul>  
                                </div>
                            </div>
                        </div>
                    </div>        
                </section>
            </Layout>
        )
    }
}

export default TravelDocument;