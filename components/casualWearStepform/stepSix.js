import Layout from '../Layout';
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

        return(
            <Layout>
                 <div className="row mt-5">
                    <div className="col-12 ">
                        <div className="progress-bar-border-div">
                            <p className="casualwear-progress-bar-fill-stepsix">
                                <img className="image-flower-bridalwear-stepsix" src={flower} alt="flower"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h3 className="text-what-your-style">Model of Collection</h3>
                        </div>
                    </div>
                    <div className="row pt-5 text-center">
                        <div className="col-12 col-sm-2 col-lg-2">
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <div className="casual-wear-length-stepOne-div">
                                <p className="casual-wear-fit-stepfour">Personal Pickup</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <div className="casual-wear-length-stepOne-div">
                                <p className="casual-wear-fit-stepfour">Shipping to Location</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2">
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

export default stepSix;