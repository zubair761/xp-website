import Layout from '../Layout';
import flower from '../../assets/flower.png';


class stepSeven extends React.Component{

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
                            <p className="casualwear-progress-bar-fill-stepseven">
                                <img className="image-flower-bridalwear-stepseven" src={flower} alt="flower"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h3 className="text-what-your-style">Mode of Shipping</h3>
                        </div>
                    </div>
                    <div className="row pt-5 text-center">
                        <div className="col-12 col-sm-2 col-lg-2">
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <div className="casual-wear-length-stepOne-div">
                                <p className="casual-wear-fit-stepfour">Air Freight <br /> (7-Days Delivery)</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <div className="casual-wear-length-stepOne-div">
                                <p className="casual-wear-fit-stepfour">Sea Freight <br /> (45-60 Days Delivery)</p>
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

export default stepSeven;