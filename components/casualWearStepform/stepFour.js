import Layout from '../Layout';
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
                            <p className="casualwear-progress-bar-fill-stepfour">
                                <img className="image-flower-bridalwear-stepfour" src={flower} alt="flower"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h3 className="text-what-your-style">What's your fabric preference?</h3>
                        </div>
                    </div>
                    <div className="row pt-5 pb-5">
                        <div className="col-12 col-sm-3 col-lg-3">
                            <div className="casual-wear-length-stepOne-div">
                                <p className="casual-wear-fit-stepfour">Organic Fabric</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 col-lg-3">
                            <div className="casual-wear-length-stepOne-div">
                                <p className="casual-wear-fit-stepfour">Drapes</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 col-lg-3">
                            <div className="casual-wear-length-stepOne-div">
                                <p className="casual-wear-fit-stepfour">Synthetic</p>   
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 col-lg-3">
                            <div className="casual-wear-length-stepOne-div">
                                <p className="casual-wear-fit-stepfour">Not bothered!</p>   
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

export default stepFour;