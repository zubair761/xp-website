import Layout from '../Layout';
import heavy from '../../personalShopper/Inner-bridal wear-Q4_Embellishments/Heavy.png';
import moderate from '../../personalShopper/Inner-bridal wear-Q4_Embellishments/Moderate.png';
import minimal from '../../personalShopper/Inner-bridal wear-Q4_Embellishments/Minimal.png';
import flower from '../../assets/flower.png';

class stepFour extends React.Component{

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
                            <p className="progress-bar-fill-stepfour">
                                <img className="image-flower-bridalwear-stepfour" src={flower} alt="flower"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h3 className="text-what-your-style">What type of embellishments do you want on your dress?</h3>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="" src={heavy} alt="heavy" width="100%" />
                            <p className="text-conservative">Heavy</p>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="" src={moderate} alt="moderate" width="100%"/>
                            <p className="text-conservative">Moderate</p>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="" src={minimal} alt="minimal" width="100%"/>
                            <p className="text-conservative">Minimal</p>
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

export default stepFour;