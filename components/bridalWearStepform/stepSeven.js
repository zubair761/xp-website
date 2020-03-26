import Layout from '../Layout';
import Shapeone from '../../personalShopper/Inner-bridal wear-Q7_Shape/shape 1.png';
import Shapetwo from '../../personalShopper/Inner-bridal wear-Q7_Shape/shape 2.png';
import Shapethree from '../../personalShopper/Inner-bridal wear-Q7_Shape/shape 3.png';
import Shapefour from '../../personalShopper/Inner-bridal wear-Q7_Shape/shape 4.png';
import Shapefive from '../../personalShopper/Inner-bridal wear-Q7_Shape/shape 5.png';
import Shapesix from '../../personalShopper/Inner-bridal wear-Q7_Shape/shape 6.png';
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
        const { values } = this.props;
        return(
          <Layout>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="progress-bar-border-div">
                            <p className="progress-bar-fill-stepseven">
                                <img className="image-flower-bridalwear-stepseven" src={flower} alt="flower"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h3 className="text-what-your-style">What is your body shape?</h3>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 col-sm-2 col-lg-2 text-center shape-div-radio">
                            <img className="" src={Shapeone} alt="Shapeone" width="25%" />
                            <input className="shape-radio-input" type="radio" id="shapeone" name="gender" value="shapeone"/>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2 text-center shape-div-radio">
                            <img className="" src={Shapetwo} alt="Shapetwo" width="25%"/>
                            <input className="shape-radio-input" type="radio" id="shapetwo" name="gender" value="shapetwo"/>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2 text-center shape-div-radio">
                            <img className="" src={Shapethree} alt="Shapethree" width="25%"/>
                            <input className="shape-radio-input" type="radio" id="shapethree" name="gender" value="shapethree"/>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2 text-center shape-div-radio">
                            <img className="" src={Shapefour} alt="Shapefour" width="25%" />
                            <input className="shape-radio-input" type="radio" id="shapefour" name="gender" value="shapefour"/>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2 text-center shape-div-radio">
                            <img className="" src={Shapefive} alt="Shapefive" width="25%"/>
                            <input className="shape-radio-input" type="radio" id="shapefive" name="gender" value="shapefive"/>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2 text-center shape-div-radio">
                            <img className="" src={Shapesix} alt="Shapesix" width="25%"/>
                            <input className="shape-radio-input" type="radio" id="shapesix" name="gender" value="shapesix"/>
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