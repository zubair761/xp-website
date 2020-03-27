import Layout from '../Layout';
import traditional from '../../personalShopper/Inner-bridal wear-Q2_Look/traditional.png';
import contemporary from '../../personalShopper/Inner-bridal wear-Q2_Look/contemporary.png';
import bothered from '../../personalShopper/Inner-bridal wear-Q2_Look/not bothered.png';
import flower from '../../assets/flower.png';


class stepThree extends React.Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
  }

    render(){

        return(
            <Layout>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="progress-bar-border-div">
                            <p className="casualwear-progress-bar-fill-stepthree">
                                <img className="image-flower-bridalwear-stepthree" src={flower} alt="flower"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h3 className="text-what-your-style">What type of fit do you feel comfortable in?</h3>
                        </div>
                    </div>
                    <div className="row pt-5 pb-5">
                        <div className="col-12 col-sm-4 col-lg-4">
                            <div className="casual-wear-length-stepOne-div">
                                <p className="casual-wear-fit-stepthree">Loose</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <div className="casual-wear-length-stepOne-div">
                                <p className="casual-wear-fit-stepthree">Snug</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <div className="casual-wear-length-stepOne-div">
                                <p className="casual-wear-fit-stepthree">Not bothered!</p>   
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 col-sm-6 col-lg-6 text-left">
                            <button className="btn-back-bridal-wear-step-two" type="button" onClick={this.back}>Back</button>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 text-right">
                            <button className="btn-next-bridal-wear-step-two" type="button" onClick={this.saveAndContinue}>Next</button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default stepThree;