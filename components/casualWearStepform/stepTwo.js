import Layout from '../Layout';
import flower from '../../assets/flower.png';
import traditional from '../../personalShopper/casualWear/Traditional.png';
import fusion from '../../personalShopper/casualWear/Fusion.png';
import contemporary from '../../personalShopper/casualWear/Contemporary.png';


class stepTwo extends React.Component{

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
                            <p className="casualwear-progress-bar-fill-steptwo">
                                <img className="image-flower-bridalwear-steptwo" src={flower} alt="flower"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h3 className="text-what-your-style">What's your look?</h3>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="" src={traditional} alt="traditional" width="100%" />
                            <p className="text-conservative">Traditional</p>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="" src={fusion} alt="fusion" width="100%"/>
                            <p className="text-conservative">Fusion</p>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="" src={contemporary} alt="contemporary" width="100%"/>
                            <p className="text-conservative">Contemporary</p>
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

export default stepTwo;