import StepOne from '../components/casualWearStepform/stepOne';
import StepTwo from '../components/casualWearStepform/stepTwo';
import StepThree from '../components/casualWearStepform/stepThree';
import StepFour from '../components/casualWearStepform/stepFour';
import StepFive from '../components/casualWearStepform/stepFive';
import StepSix from '../components/casualWearStepform/stepSix';
import StepSeven from '../components/casualWearStepform/stepSeven';
import StepEight from '../components/casualWearStepform/stepEight';
import StepNine from '../components/casualWearStepform/stepNine';
import StepTen from '../components/casualWearStepform/stepTen';



class casualWear extends React.Component {
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
            return  <StepFive
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
        case 10:
            return <StepTen
                    prevStep={this.prevStep}
                    />
       
        }
    }
}

export default casualWear;