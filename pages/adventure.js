import Layout from '../components/Layout';
import sp3 from '../assets/SP-3.jpg';
import chitral from '../assets/chitral.png';
import hunza from '../assets/hunza.png';
import naran from '../assets/naran.png';

class adventure extends React.Component{

    render(){
        

        return(
            <Layout>
                <div className="pt-5 pb-5">
                    <img className="bg-image-adventure-page" src={sp3} alt="sp3" />
                    <div className="text-centered-adventure-image-mozino">
                        <h1 className="text-adventure-page-adventure-image">Adventure</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-12 text-center">
                            <i className="fa fa-map-marker location-icon-eperience-page"></i>
                            <h3 className="text-adventure-page-adventure">Adventure</h3>
                        </div>
                    </div>
                    <div className="row pt-4">
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="adventure-images" src={chitral} alt="chitral"/>
                            <i className="fa fa-map-marker icon"></i>
                            <a href="/adventure" className="adventure-sub-categories-text">Day Safari</a> 
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="adventure-images" src={hunza} alt="hunza"/>
                            <i className="fa fa-map-marker icon"></i>
                            <a href="/adventure" className="adventure-sub-categories-text">Camping Khanpur</a>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="adventure-images" src={naran} alt="naran"/>
                            <i className="fa fa-map-marker icon"></i>
                            <a href="/adventure" className="adventure-sub-categories-text">Paragliding Safari</a>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4 pt-5">
                            <img className="adventure-images" src={chitral} alt="chitral"/>
                            <i className="fa fa-map-marker icon"></i>
                            <a href="/adventure" className="adventure-sub-categories-text">Water Sport Adventure</a>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4 pt-5">
                            <img className="adventure-images" src={hunza} alt="hunza"/>
                            <i className="fa fa-map-marker icon"></i>
                            <a href="/adventure" className="adventure-sub-categories-text">Camping Sidhu Retreat</a>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default adventure;
 {/* <img className="adventure-images" src={chitral} alt="chitral"/> */}
