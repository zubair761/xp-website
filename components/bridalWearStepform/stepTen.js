import Layout from '../Layout';
import Shararah from '../../personalShopper/Inner-bridal wear-Q5_Cutline/Shararah.png';
import Lehnga from '../../personalShopper/Inner-bridal wear-Q5_Cutline/Lehnga.png';
import ShirtTrouser from '../../personalShopper/Inner-bridal wear-Q5_Cutline/Shirt & Trousers.png';
import Saari from '../../personalShopper/Inner-bridal wear-Q5_Cutline/Saari.png';
import Angrakha from '../../personalShopper/Inner-bridal wear-Q5_Cutline/Angrakha.png';
import Gown from '../../personalShopper/Inner-bridal wear-Q5_Cutline/Gown.png';
import flower from '../../assets/flower.png';

class stepFive extends React.Component{

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
                            <p className="progress-bar-fill-stepfive">
                                <img className="image-flower-bridalwear-stepfive" src={flower} alt="flower"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 pt-5">
                            <h3 className="text-what-your-style">What sort of cutline style will you prefer to carry?</h3>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 col-sm-2 col-lg-2">
                            <img className="" src={Shararah} alt="Shararah" width="100%" />
                            <p className="text-conservative">Shararah</p>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2">
                            <img className="" src={Lehnga} alt="Lehnga" width="100%"/>
                            <p className="text-conservative">Lehnga</p>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2">
                            <img className="" src={ShirtTrouser} alt="ShirtTrouser" width="100%"/>
                            <p className="text-conservative">Shirt & Trousers</p>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2">
                            <img className="" src={Saari} alt="Saari" width="100%" />
                            <p className="text-conservative">Saari</p>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2">
                            <img className="" src={Angrakha} alt="Angrakha" width="100%"/>
                            <p className="text-conservative">Angrakha</p>
                        </div>
                        <div className="col-12 col-sm-2 col-lg-2">
                            <img className="" src={Gown} alt="Gown" width="100%"/>
                            <p className="text-conservative">Gown</p>
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

export default stepFive;