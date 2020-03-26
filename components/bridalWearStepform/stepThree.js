import Layout from '../Layout';
import pastel from '../../personalShopper/Inner-bridal wear-Q3_Color/pastel.png';
import bold from '../../personalShopper/Inner-bridal wear-Q3_Color/bold.png';
import dark from '../../personalShopper/Inner-bridal wear-Q3_Color/dark.png';
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
        const { values } = this.props;
        return(
          <Layout>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="progress-bar-border-div">
                            <p className="progress-bar-fill-stepthree">
                                <img className="image-flower-bridalwear-stepthree" src={flower} alt="flower"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h3 className="text-what-your-style">What look do you want to achieve?</h3>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="" src={pastel} alt="pastel" width="100%" />
                            <p className="text-conservative">Pastel</p>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="" src={bold} alt="bold" width="100%"/>
                            <p className="text-conservative">Bold</p>
                        </div>
                        <div className="col-12 col-sm-4 col-lg-4">
                            <img className="" src={dark} alt="dark" width="100%"/>
                            <p className="text-conservative">Dark</p>
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