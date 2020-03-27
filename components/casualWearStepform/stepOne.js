import Layout from '../Layout';
import flower from '../../assets/flower.png';

class stepOne extends React.Component{
    constructor(props){
        super(props);
    
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    // fnChangeBorder() {
    //     document.getElementById("imgxyz").style.border="2px solid #98885a";
    // }
    // navOpen() {
    //     document.getElementById("imgabc").style.border="2px solid #98885a";
    //   }
      

    render(){
        const { values } = this.props;
        var imgabc
        var imgxyz
        return(
          <Layout>      
            <div className="row mt-5">
                <div className="col-12">
                    <div className="progress-bar-border-div">
                        <p className="casualwear-progress-bar-fill-stepone">
                            <img className="image-flower-bridalwear-stepone" src={flower} alt="flower"/>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-5 pb-2 text-center">
                        <i className="fa fa-map-marker location-icon-eperience-page"></i>
                        <h3 className="text-casualWear-questionnaire">Casual Wear - Questionnaire</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-5 pb-5">
                        <h3 className="text-what-your-style">What length do you prefer?</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-3 col-lg-3">
                        <div className="casual-wear-length-stepOne-div">
                            <p className="casual-wear-length-stepOne">Long <br /> (Closer to Ankles)</p>
                         </div>
                    </div>
                    <div className="col-12 col-sm-3 col-lg-3">
                        <div className="casual-wear-length-stepOne-div">
                            <p className="casual-wear-length-stepOne">Midy <br /> (Up-to to Shin)</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-lg-3">
                        <div className="casual-wear-knee-length">
                            <p className="casual-wear-length-stepOne">Knee Length</p>   
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 col-lg-3">
                        <div className="casual-wear-length-stepOne-div">
                            <p className="casual-wear-length-stepOne">Short<br /> (Above the Knee)</p>   
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-right  pt-5">
                        <button className="btn-next-bridal-wear" type="button" onClick={this.saveAndContinue}>Next</button>
                    </div>
                </div>
            </div>
           </Layout>
        )
    }
}

export default stepOne;