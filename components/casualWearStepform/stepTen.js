import Layout from '../Layout';
import flower from '../../assets/flower.png';
import pound from '../../destination/poundgold.png';

class stepTen extends React.Component{

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
                            <p className="casualwear-progress-bar-fill-stepten">
                                <img className="image-flower-casualwear-stepten" src={flower} alt="flower"/>
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
                            <div className="casual-wear-length-stepOne-div text-center">
                                <img className="" src={pound} alt="traditional" width="5%" />
                                <p className="casual-wear-fit-stepfour">Value for Money</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 col-lg-3">
                            <div className="casual-wear-length-stepOne-div text-center">
                                <img className="" src={pound} alt="traditional" width="5%" />
                                <p className="casual-wear-fit-stepfour">Mid-Range</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 col-lg-3">
                            <div className="casual-wear-length-stepOne-div text-center">
                                <img className="" src={pound} alt="traditional" width="5%" />
                                <p className="casual-wear-fit-stepfour">Branded</p>   
                            </div>
                        </div>
                        <div className="col-12 col-sm-3 col-lg-3">
                            <div className="casual-wear-length-stepOne-div text-center">
                                <img className="" src={pound} alt="traditional" width="5%" />
                                <p className="casual-wear-fit-stepfour">Couture</p>   
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 col-sm-6 col-lg-6 text-left">
                            <button className="btn-back-bridal-wear-step-two" type="button" onClick={this.back}>Back</button>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 text-right">
                            <button className="btn-next-bridal-wear-step-two" type="button" >Submit</button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default stepTen;