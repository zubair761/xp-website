import Layout from '../Layout';
import conservative from '../../personalShopper/Inner-bridal wear-Q1_Style/conservative.png';
import liberal from '../../personalShopper/Inner-bridal wear-Q1_Style/liberal.png';
import bothered from '../../personalShopper/Inner-bridal wear-Q1_Style/not bothered.png';
import flower from '../../assets/flower.png';

class stepOne extends React.Component{
    constructor(props){
        super(props);
    
    }

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    // fnChangeBorder() {
    //     document.getElementById("imgxyz").style.border="2px solid #98885a";
    // }
    // navOpen() {
    //     document.getElementById("imgabc").style.border="2px solid #98885a";
    //   }
      

    render(){
        const { values } = this.props;
        var imgabc
        var imgxyz
        return(
          <Layout>      
            <div className="row mt-5">
                <div className="col-12">
                    <div className="progress-bar-border-div">
                        <p className="progress-bar-fill-stepone">
                            <img className="image-flower-bridalwear-stepone" src={flower} alt="flower"/>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                        <div className="col-12 pt-5">
                            <h3 className="text-what-your-style">What's your style?</h3>
                        </div>
                </div>
                <div className="row pt-5">
                    <div className="col-12 col-sm-4 col-lg-4">
                        <div className="">
                        {/* <img className="" src={conservative} alt="conservative" width="100%" /> */}

                        <img name="imgabc" id="imgabc" src={conservative}
                            width="100%"/>

                       
                        </div>
                        <p className="text-conservative">Conservative</p>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-4">
                        {/* <img className="" src={liberal} alt="liberal" width="100%"/> */}

                        <img name="imgxyz" id="imgxyz" src={liberal} 
                                width="100%"/>

                        <p className="text-conservative">Liberal</p>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-4">
                        <img className="" src={bothered} alt="bothered" width="100%"/>
                        <p className="text-conservative">Not Bothered</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-right  pt-5">
                        <button className="btn-next-bridal-wear" type="button" onClick={this.saveAndContinue}>Next</button>
                    </div>
                </div>
            </div>
           </Layout>
        )
    }
}

export default stepOne;