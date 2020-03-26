import React from 'react';
import email from '../assets/mail.png';
import flower from '../assets/flower.png';
import pts from '../assets/pts.png';
import AfridiFoundation from '../assets/ShahidAfridiFoundationCanada.png';

class Footer extends React.Component{

    render(){
        return(
            <div className="pt-5">
                <div className="bg-footer-registerform">
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <h6 className="text-signUp">Sign Up to Our Newsletter</h6>
                        </div>
                    </div>
                    <div className="row pt-4 pb-4">
                        <div className="col-12 col-lg-5">
                            <div className="input-container-footer">
                                <img className="icon-footer" src={email} width="2%"/>
                                <input className="input-field-footer" type="text" placeholder="Your Email Address"  name=""/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="input-container-footer">
                                <i className="fa fa-angle-down icon-footer down-icon-footer"></i>
                                <input className="input-field-footer" type="text" placeholder="Country of Residence" name=""/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2 pt-1 mg-btn-subscribe">
                            <img className="flower-image" src={flower} width="20%"/>
                            <button type="submit" className="btn-subscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="bg-footer ">
                    <div className="container-fluid pt-4 pb-4">
                        <div className="row">
                            <div className="col-12 col-lg-3  border-right-footer">
                                <p className="text-para-footer">Xperience Pakistan is an ideology,<br/> 
                                    focused on changing and challenging<br/> 
                                    people’s perception of Pakistan, through diverse experiential packages on offer.&nbsp; It’s&nbsp; founded by&nbsp; 
                                    Sadia Baber who loves everything there is about her country, from the people, to the food, the natural beauty and heritage sites.
                                     She&nbsp; wants&nbsp; &nbsp;to share with the outside world the Pakistan she experienced and continues to experience.
                                </p>
                            </div>
                            <div className="col-12 col-lg-3  border-right-footer pts-img-pd">
                                <div className="">
                                    <img className="img-pts" src={pts} width="80%"/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3  border-right-footer pd-contact-div">
                                <h6 className="text-contact-footer">Contact Info</h6>
                                <p className="text-gloucester">27 Gloucester Street, London, <span>WCIN 3AX.</span></p>
                                <div className="">
                                    <p className="text-num-national">0203 1501444</p>
                                    <p className="text-num-international">+44 7939 040 596</p>
                                    <p className="text-mail-footer">info@xperiencepakista.co.uk</p>
                                </div>
                                <div className="text-xperience-di-footer">
                                    <p className="text-para-xperience-footer">Xperience Travel Tour Operator Ltd.</p>
                                    <p className="text-registered">Registered in <span>England</span></p>
                                    <p className="text-compant-number">Company Number: <span>11379253</span></p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3  pd-partners-div">
                                <h6 className="text-partners-footer">Partners</h6>
                                <p className="text-tc">T&C</p>
                                <p className="text-tc">Privacy Policy</p>
                                <p className="text-tc">Cookies</p>
                                <p className="text-tc">Sitemap</p>
                                <p className="text-tc">Contact Us</p>
                                <p className="text-working">Working with & supporting the Shahid Afridi Foundation</p>
                                <img className="foundation-img" src={AfridiFoundation} width="100%"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;