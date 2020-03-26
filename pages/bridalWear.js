import StepOne from '../components/bridalWearStepform/stepOne';
import StepTwo from '../components/bridalWearStepform/stepTwo';
import StepThree from '../components/bridalWearStepform/stepThree';
import StepFour from '../components/bridalWearStepform/stepFour';
// import StepFive from '../components/bridalWearStepform/stepFive';
import StepSix from '../components/bridalWearStepform/StepSix';
import StepSeven from '../components/bridalWearStepform/stepSeven';
import StepEight from '../components/bridalWearStepform/stepEight';
import StepNine from '../components/bridalWearStepform/stepNine';
import StepTen from '../components/bridalWearStepform/stepTen';


class MainForm extends React.Component {
    state = {
        step: 1,
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    // handleChange = input => event => {
    //     this.setState({ [input] : event.target.value })
    // }

    render(){
        const {step} = this.state;
    
        switch(step) {
        case 1:
            return <StepOne
                    nextStep={this.nextStep}
                    />
        case 2:
            return <StepTwo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    />
        case 3:
            return <StepThree
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    />
        case 4:
            return <StepFour
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    />
        case 5:
            return  <StepTen
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    />
        case 6:
            return <StepSix
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    />
        case 7:
            return <StepSeven
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    />
        case 8:
            return <StepEight
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    />
        case 9:
            return <StepNine
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    />
       
        }
    }
}

export default MainForm;