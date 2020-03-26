import Layout from '../Layout';
import flower from '../../assets/flower.png';

class stepNine extends React.Component{

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
                    <div className="col-12">
                        <div className="progress-bar-border-div">
                            <p className="progress-bar-fill-stepnine">
                                <img className="image-flower-bridalwear-stepnine" src={flower} alt="flower"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5 pb-5">
                            <h3 className="text-what-your-style">What's your budget in PKR?</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-4 col-lg-4">
                            <div className="budget-money-div">
                                <p className="budget-text-para">Value for Money <br /> (50,000 - 150,000)</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <div className="budget-money-div">
                                <p className="budget-text-para">High Street <br /> (<span>e</span>150,000 - 250,000)</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <div className="budget-money-div">
                                <p className="budget-text-para">Branded <br /> (More than 250,000)</p>   
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 col-sm-6 col-lg-6 text-left">
                            <button className="btn-back-bridal-wear-step-two" type="button" onClick={this.back}>Back</button>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 text-right">
                            <button className="btn-next-bridal-wear-step-two" type="button" onClick={this.saveAndContinue}>Submit</button>
                        </div>
                    </div>
                </div>
           </Layout>
        )
    }
}

export default stepNine;