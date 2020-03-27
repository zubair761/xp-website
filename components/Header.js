import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import call from '../assets/call.png';
import whatsapp from '../assets/whatsapp.png';
import skype from '../assets/skype.png';
import email from '../assets/mail.png';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import twitter from '../assets/twitter.png';
import youtube  from '../assets/youtube.png';
import profile from '../assets/login.png';
import logo from '../assets/XP-Logo_horizontal.png';
import search from '../assets/search.png';



class Header extends React.Component{

    render (){
        return (
            <div className="">
                <div className="hearder-main">
                    <div className='container p-2'>
                        <div className='row'>
                            <div className='col-4 col-lg-2 mg-text-header'>
                                <div className="d-flex flex-row bd-highlight">
                                    <div className="bd-highlight">
                                        <img src={call} width="60%"/>
                                    </div>
                                    <div class="bd-highlight">
                                        <span className="text-header">0203 150 1444</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 col-lg-2 mg-text-header'>
                                <div className="d-flex flex-row bd-highlight">
                                    <div className="bd-highlight">
                                        <img src={whatsapp} width="60%"/>
                                    </div>
                                    <div className="bd-highlight">
                                        <span className="text-header">+ 44 7939 040 596</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 col-lg-2 mg-text-header'>
                                <div className="d-flex flex-row bd-highlight">
                                    <div className="bd-highlight">
                                        <a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1583996478&rver=7.1.6819.0&wp=MBI_SSL&wreply=https%3A%2F%2Flw.skype.com%2Flogin%2Foauth%2Fproxy%3Fclient_id%3D360605%26redirect_uri%3Dhttps%253A%252F%252Fsecure.skype.com%252Fportal%252Flogin%253Freturn_url%253Dhttps%25253A%25252F%25252Fsecure.skype.com%25252Fportal%25252Foverview%26response_type%3Dpostgrant%26state%3Ddd2c3c2fd368d480ae502449%26site_name%3Dlw.skype.com&lc=1033&id=293290&mkt=en-US&psi=skype&lw=1&cobrandid=2befc4b5-19e3-46e8-8347-77317a16a5a5&client_flight=ReservedFlight33%2CReservedFlight67"><img src={skype} width="60%"/></a>
                                    </div>
                                    <div className="bd-highlight">
                                        <span className="text-header">saadiababer</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 col-lg-3 mg-text-header'>
                                <div className="d-flex flex-row bd-highlight">
                                    <div className="bd-highlight">
                                        <a className="" href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=AddSession"><img src={email} width="60%"/></a>
                                    </div>
                                    <div className="bd-highlight">
                                        <span className="text-header">info@xperiencepakistan.co.uk</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 col-lg-2 mg-text-header'>
                                <div className="d-flex flex-row bd-highlight">
                                    <div className="bd-highlight pr-2">
                                        <a href="https://www.facebook.com/"><img src={fb} width="50%"/></a>
                                    </div>
                                    <div className="bd-highlight">
                                        <a href="https://www.instagram.com/?hl=en"><img src={insta} width="50%"/></a>
                                    </div>
                                    <div className="bd-highlight">
                                        <a href="https://twitter.com/?lang=en"><img src={twitter} width="50%"/></a>
                                    </div>
                                    <div className="bd-highlight">
                                        <a href="https://www.youtube.com/"><img src={youtube} width="50%"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 col-lg-1 p-0'>
                                <div className="d-flex justify-content-end"> 
                                    <nav>
                                        <ul className="my-profile-ul-main">
                                            <li className="drop-my-profile">
                                                <a className="profile-img" href="#"><img src={profile} width="50%"/></a>
                                                <div class="dropdownContain">
                                                    <div className="dropOut">
                                                        <div className="triangle"></div>
                                                        <ul className="my-profile-dropdown-ul">
                                                            <a className="" href="/profile"><li className="text-profile">My Profile</li></a>
                                                            <a className="" href="/itineraries"><li className="text-profile">Itineraries</li></a>
                                                            <a className="" href="/mytour"><li className="text-profile">My Tours</li></a> 
                                                            <li className="text-profile">Settings</li>
                                                            <li className="text-sign-out">Sign out</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="navbar-div">  
                    <nav className="navbar navbar-expand-lg navbar-light pd-nav">
                        <div className="row">
                            <div className="col-12 col-lg-2 col-sm-2">
                                <a className="navbar-brand" href="/index"><img src={logo} width="100%"/></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            <div className="col-12 col-lg-10 col-sm-10 pl-4">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav p-2">
                                <li class="nav-item dropdown">
                                    <a class="nav-link pd-li" href="/experience" id="navbarDropdownMenuLink"  aria-haspopup="true" aria-expanded="false">
                                        Experiences
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right experience-ul-main" aria-labelledby="navbarDropdownMenuLink">
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="#">Day Excursion <i class="fa fa-angle-right right-icon-day-excursion"></i></a>
                                            <ul class="dropdown-menu experience-ul-menu">
                                                <li class="dropdown-submenu"><a class="dropdown-item" href="/experience">Adventure <i class="fa fa-angle-right right-icon-adventure"></i></a>
                                                    <ul class="dropdown-menu experience-ul-submenu">
                                                        <li><a class="dropdown-item" href="#">Day Safari</a></li>
                                                        <li><a class="dropdown-item" href="#">Camping Khanpur</a></li>
                                                        <li><a class="dropdown-item" href="#">Paragliding</a></li>
                                                        <li><a class="dropdown-item" href="#">Water Sport Adventure</a></li>
                                                        <li><a class="dropdown-item" href="#">Camping Sidhu Retreat</a></li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown-submenu"><a class="dropdown-item" href="#">Culture & Heritage <i class="fa fa-angle-right right-icon-culture"></i></a>
                                                    <ul class="dropdown-menu experience-ul-submenu">
                                                        <li><a class="dropdown-item" href="#">Lahore Walled City</a></li>
                                                        <li><a class="dropdown-item" href="#">Salt Mines & Katas Raj Temples</a></li>
                                                        <li><a class="dropdown-item" href="#">Green Fields Resort</a></li>
                                                        <li><a class="dropdown-item" href="#">Nankana Sahib</a></li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown-submenu"><a class="dropdown-item" href="#">Culinary Sidhu Retreat <i class="fa fa-angle-right right-icon-culinary-sidhu"></i></a>
                                                    <ul class="dropdown-menu experience-ul-submenu">
                                                        <li><a class="dropdown-item" href="#">Culinary Tour of Rawalpindi</a></li>
                                                        <li><a class="dropdown-item" href="#">Indulge in Hunza Cuisine</a></li>
                                                        <li><a class="dropdown-item" href="#">Green Fields Resort</a></li>
                                                        <li><a class="dropdown-item" href="#">Nankana Sahib</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="/adventure">Adventure Holidays <i class="fa fa-angle-right right-icon-adventure-holidays"></i></a>
                                            <ul class="dropdown-menu experience-ul-menu-adventure-holidays ">
                                                <li><a class="dropdown-item" href="#">Motorbike Tours</a></li>
                                                <li class="dropdown-submenu"><a class="dropdown-item" href="#">Trekking Tours <i class="fa fa-angle-right right-icon-trekking"></i></a>
                                                    <ul class="dropdown-menu experience-ul-submenu">
                                                        <li><a class="dropdown-item" href="#">K2 Base Camp</a></li>
                                                        <li><a class="dropdown-item" href="#">Nanga Parbat Base Camp</a></li>
                                                        <li><a class="dropdown-item" href="#">Rakaposhi Base Camp</a></li>
                                                        <li><a class="dropdown-item" href="#">Mazino Pass</a></li>
                                                    </ul>
                                                </li>
                                                <li><a class="dropdown-item" href="#">Rafting Tours</a></li>
                                                <li><a class="dropdown-item" href="#">Steam Railway Engine Tours</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="#">Back to Nature Holidays <i class="fa fa-angle-right right-icon-nature-holidays"></i></a>
                                            <ul class="dropdown-menu nature-holiday-dropdown">
                                                <li><a class="dropdown-item" href="#">The Kingdom of Himalaya – Fairy Meadows & Hunza Valley</a></li>
                                                <li><a class="dropdown-item" href="#">The Kailash Valley & Chitral – Tribes of Hindukush</a></li>
                                                <li><a class="dropdown-item" href="#">Explore Chitral with Royalty</a></li>
                                                <li><a class="dropdown-item" href="#">Kaghan Valley</a></li>
                                                <li><a class="dropdown-item" href="#">Murree</a></li>
                                                <li><a class="dropdown-item" href="#">Nathia Gali</a></li>
                                                <li><a class="dropdown-item" href="#">Skardu Baltistan</a></li>
                                                <li><a class="dropdown-item" href="#">Swat Valley Artisan Tour</a></li>
                                                <li><a class="dropdown-item" href="#">Kaghan & Hunza Valley</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="#">Culture & Heritage Holidays <i class="fa fa-angle-right right-icon-heritage-holidays"></i></a>
                                            <ul class="dropdown-menu heritage-holidays-dropdown">
                                                <li><a class="dropdown-item" href="#">Cholistan Desert Safari – Marvel of Cholistan</a></li>
                                                <li><a class="dropdown-item" href="#">Glimpses of Pakistan Heritage</a></li>
                                                <li><a class="dropdown-item" href="#">Pakistan Highlights – Mughal Delights & Gandhara Civilization</a></li>
                                                <li><a class="dropdown-item" href="#">The Great Silk Route (Caravan of Spices and Color)</a></li>
                                                <li><a class="dropdown-item" href="#">Pocket Friendly Shandur Polo & the Night Event</a></li>
                                                <li><a class="dropdown-item" href="#">Shandur Polo Festival</a></li>
                                                <li><a class="dropdown-item" href="#">History</a></li>
                                                <li><a class="dropdown-item" href="#">Indus Civilization</a></li>
                                                <li><a class="dropdown-item" href="#">Buddhism & Gandara</a></li>
                                                <li><a class="dropdown-item" href="#">Mughal Grandeur</a></li>
                                                <li><a class="dropdown-item" href="#">Sikh Pilgrimage</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="#">Recreational Holidays <i class="fa fa-angle-right right-icon-recreational"></i></a>
                                            <ul class="dropdown-menu recreational-holidays-menu">
                                                <li><a class="dropdown-item" href="#">Yoga</a></li>
                                                <li class="dropdown-submenu"><a class="dropdown-item" href="#">Golfig <i class="fa fa-angle-right right-icon-golfig"></i></a>
                                                    <ul class="dropdown-menu golfig-submenu">
                                                        <li><a class="dropdown-item" href="#">Golf Retreat Package</a></li>
                                                        <li><a class="dropdown-item" href="#">Airmen Golf & Recreational Club Karachi</a></li>
                                                        <li><a class="dropdown-item" href="#">Defence Raya Gold & Country Club</a></li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown-submenu"><a class="dropdown-item" href="#">Culinary <i class="fa fa-angle-right right-icon-culinary"></i></a>
                                                    <ul class="dropdown-menu culinary-submenu">
                                                        <li><a class="dropdown-item" href="#">Chefling Food Tour</a></li>
                                                        <li><a class="dropdown-item" href="#">Culinary Tour of Rawalpindi</a></li>
                                                        <li><a class="dropdown-item" href="#">Indulge in Hunza Cuisine</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="#">Marriage Holidays <i class="fa fa-angle-right right-icon-marriage"></i></a>
                                            <ul class="dropdown-menu marriage-holidays-menu">
                                                <li><a class="dropdown-item" href="#">Destination</a></li>
                                                <li><a class="dropdown-item" href="#">Proposal Wedding</a></li>
                                                <li><a class="dropdown-item" href="#">Pesonal Shopper</a></li>
                                                <li class="dropdown-submenu"><a class="dropdown-item" href="#">Honeymoon Experience <i class="fa fa-angle-right right-icon-honeymoon"></i></a>
                                                    <ul class="dropdown-menu honeymoon-submenu">
                                                        <li><a class="dropdown-item" href="#">Lahore</a></li>
                                                        <li><a class="dropdown-item" href="#">Nathia Gali</a></li>
                                                        <li><a class="dropdown-item" href="#">Skardu Baltistan</a></li>
                                                        <li><a class="dropdown-item" href="#">Murree</a></li>
                                                        <li><a class="dropdown-item" href="#">Kaghan Valley</a></li>
                                                        <li><a class="dropdown-item" href="#">Swat Valley Artisan Tour</a></li>
                                                        <li><a class="dropdown-item" href="#">Shandur Polo Festival</a></li>
                                                        <li><a class="dropdown-item" href="#">Discover Hunza</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="#">Socially Responsible <i class="fa fa-angle-right right-icon-socially"></i></a>
                                            <ul class="dropdown-menu socially-responsible-menu">
                                                <li class="dropdown-submenu"><a class="dropdown-item" href="#">Culinary <i class="fa fa-angle-right right-icon-culinary-socially"></i></a>
                                                    <ul class="dropdown-menu culinary-socially-submenu">
                                                        <li><a class="dropdown-item" href="#">Chefling Food Tour</a></li>
                                                        <li><a class="dropdown-item" href="#">Culinary Tour of Rawalpindi</a></li>
                                                        <li><a class="dropdown-item" href="#">Indulge in Hunza Cuisine</a></li>
                                                    </ul>
                                                </li>
                                                <li><a class="dropdown-item" href="#">Meet the Artisan Tour</a></li>
                                                <li><a class="dropdown-item" href="#">Make your own Naan</a></li>
                                                <li><a class="dropdown-item" href="#">Street Cricket</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item text-day" href="#">Customize Holidays</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link pd-li" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Destinations
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right destination-ul-main" aria-labelledby="navbarDropdownMenuLink">
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="#">Gilgit Baltistan<i class="fa fa-angle-right right-icon-gilgit"></i></a>
                                            <ul class="dropdown-menu gilgit-balistan-menu">
                                                <li><a class="dropdown-item" href="#">The Kingdom of Himalaya – Fairy Meadows & Hunza Valley</a></li>
                                                <li><a class="dropdown-item" href="#">Skardu Baltistan</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="#">Khyber Pakhtunkhawa (KPK)<i class="fa fa-angle-right right-icon-kpk"></i></a>
                                            <ul class="dropdown-menu kpk-menu">
                                                <li><a class="dropdown-item" href="#">Naran Valley</a></li>
                                                <li><a class="dropdown-item" href="#">Peshawar</a></li>
                                                <li><a class="dropdown-item" href="#">Nathia Gali</a></li>
                                                <li><a class="dropdown-item" href="#">Swat Valley Artisan Tour</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="#">Sindh<i class="fa fa-angle-right right-icon-sindh"></i></a>
                                            <ul class="dropdown-menu sindh-menu">
                                                <li><a class="dropdown-item" href="#">Karachi</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="#">Punjab<i class="fa fa-angle-right right-icon-punjab"></i></a>
                                            <ul class="dropdown-menu punjab-menu">
                                                <li><a class="dropdown-item" href="#">Lahore</a></li>
                                                <li><a class="dropdown-item" href="/Islamabad">Islamabad</a></li>
                                                <li><a class="dropdown-item" href="#">Murree</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu"><a class="dropdown-item text-day" href="#">Jammu Kashmir<i class="fa fa-angle-right right-icon-kashmir"></i></a>
                                            <ul class="dropdown-menu kashmir-menu">
                                                <li><a class="dropdown-item" href="#">Neelum Valley</a></li>
                                            </ul>
                                        </li>
                                        <li><a class="dropdown-item text-day" href="#">Balochistan</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link pd-li" href="/personalShopper" id="navbarDropdownMenuLink"  aria-haspopup="true" aria-expanded="false">
                                        Personal Shopper
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right personal-shopper-ul-main" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item text-day" href="#">Gift Cards</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pd-li" href="#">Merchandise</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pd-li" href="#">Travel Advice</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pd-li" href="#">Social Feed</a>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link pd-li" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Become a Partner
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right become-partner-ul-main" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item text-day" href="#">Personal Shopper</a></li>
                                        <li><a class="dropdown-item text-day" href="#">Tours of Travel</a></li>
                                        <li><a class="dropdown-item text-day" href="#">Designer</a></li>
                                        <li><a class="dropdown-item text-day" href="#">Become a Franchise</a></li>
                                        <li><a class="dropdown-item text-day" href="#">Partners</a></li>
                                        <li><a class="dropdown-item text-day" href="#">Login/SignUp</a></li>
                                        <li><a class="dropdown-item text-day" href="#">Blog</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link pd-li" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        My story
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-right my-story-ul-main" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item text-day" href="#">Why Xperience Pakistan?</a></li>
                                        <li><a class="dropdown-item text-day" href="#">Responsible Travel</a></li>
                                        <li><a class="dropdown-item text-day" href="#">Contact Us</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                            </div>
                        </div>
                        
             
                    </nav>
                </div>
                <div className="text-center">
                    <div className="search-main-div">
                        <div className="input-group">
                            <input type="text" className="search-input" placeholder="Search by location on Tour"/>
                            <div className="input-group-append">
                            <button className="btn btn-search" type="button">
                                <img src={search} width="50%"/>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="flags-dropdown-div">
                        <ReactFlagsSelect  searchable={true} placeholder="Select Country Language"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
