import Layout from '../Layout';
import traditional from '../../personalShopper/Inner-bridal wear-Q2_Look/traditional.png';
import contemporary from '../../personalShopper/Inner-bridal wear-Q2_Look/contemporary.png';
import flower from '../../assets/flower.png';


class stepSix extends React.Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
  }

    render(){
        const { values } = this.props;
        return(
          <Layout>
                <div className="row mt-5">
                    <div className="col-12 ">
                        <div className="progress-bar-border-div">
                            <p className="progress-bar-fill-stepsix">
                                <img className="image-flower-bridalwear-stepsix" src={flower} alt="flower"/>
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
                    <div className="row pt-5 text-center">
                        <div className="col-12 col-sm-2 col-lg-2">
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="" src={traditional} alt="traditional" width="100%" />
                            <p className="text-conservative">Traditional</p>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="" src={contemporary} alt="contemporary" width="100%"/>
                            <p className="text-conservative">Contemporary</p>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2">
                        </div>
                    </div>
                    {/* <div class="d-flex justify-content-center">
                        <div className="">
                            <img className="" src={traditional} alt="traditional" width="50%" />
                            <p className="text-conservative">Traditional</p>
                        </div>
                        <div className="">
                            <img className="" src={contemporary} alt="contemporary" width="50%"/>
                            <p className="text-conservative">Contemporary</p>
                        </div>
                    </div> */}
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

export default stepSix;