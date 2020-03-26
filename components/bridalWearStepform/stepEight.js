import Layout from '../Layout';
import flower from '../../assets/flower.png';

class stepEight extends React.Component{

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
                            <p className="progress-bar-fill-stepeight">
                                <img className="image-flower-bridalwear-stepeight" src={flower} alt="flower"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h3 className="text-what-your-style">What are your measurements, in term of:</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-6 pt-5">
                            <p className="text-body-measure">Height</p>
                            <div className="measure-input-div">
                                <div className="measure-input-feet-div">
                                    <input className="feet-input" type="text" id="feet" name="feet" />
                                    <span className="text-ft-measure-span">ft</span>
                                </div>
                                <div className="measure-input-inch-div">
                                    <input className="inch-input" type="number" id="inch" name="inch" />
                                    <span className="text-inc-measure-span">in</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 pt-5">
                            <p className="text-body-measure">Waist</p>
                            <div className="measure-input-div">
                                <div className="measure-input-feet-div">
                                    <input className="feet-input" type="text" id="feet" name="feet" />
                                    <span className="text-ft-measure-span">ft</span>
                                </div>
                                <div className="measure-input-inch-div">
                                    <input className="inch-input" type="number" id="inch" name="inch" />
                                    <span className="text-inc-measure-span">in</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 pt-5">
                            <p className="text-body-measure">Shoulder</p>
                            <div className="measure-input-div">
                                <div className="measure-input-feet-div">
                                    <input className="feet-input" type="text" id="feet" name="feet" />
                                    <span className="text-ft-measure-span">ft</span>
                                </div>
                                <div className="measure-input-inch-div">
                                    <input className="inch-input" type="number" id="inch" name="inch" />
                                    <span className="text-inc-measure-span">in</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 pt-5">
                            <p className="text-body-measure">Bust</p>
                            <div className="measure-input-div">
                                <div className="measure-input-feet-div">
                                    <input className="feet-input" type="text" id="feet" name="feet" />
                                    <span className="text-ft-measure-span">ft</span>
                                </div>
                                <div className="measure-input-inch-div">
                                    <input className="inch-input" type="number" id="inch" name="inch" />
                                    <span className="text-inc-measure-span">in</span>
                                </div>
                            </div>
                        </div> 
                        <div className="col-12 col-sm-6 col-lg-6 pt-5">
                            <p className="text-body-measure">Arm Length</p>
                            <div className="measure-input-div">
                                <div className="measure-input-feet-div">
                                    <input className="feet-input" type="text" id="feet" name="feet" />
                                    <span className="text-ft-measure-span">ft</span>
                                </div>
                                <div className="measure-input-inch-div">
                                    <input className="inch-input" type="number" id="inch" name="inch" />
                                    <span className="text-inc-measure-span">in</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 pt-5">
                            <p className="text-body-measure">Leg Length</p>
                            <div className="measure-input-div">
                                <div className="measure-input-feet-div">
                                    <input className="feet-input" type="text" id="feet" name="feet" />
                                    <span className="text-ft-measure-span">ft</span>
                                </div>
                                <div className="measure-input-inch-div">
                                    <input className="inch-input" type="number" id="inch" name="inch" />
                                    <span className="text-inc-measure-span">in</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6 pt-5">
                            <p className="text-body-measure">Hips</p>
                            <div className="measure-input-div">
                                <div className="measure-input-feet-div">
                                    <input className="feet-input" type="text" id="feet" name="feet" />
                                    <span className="text-ft-measure-span">ft</span>
                                </div>
                                <div className="measure-input-inch-div">
                                    <input className="inch-input" type="number" id="inch" name="inch" />
                                    <span className="text-inc-measure-span">in</span>
                                </div>
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

export default stepEight;