import  React  from  'react';
import CoolTabs from 'react-cool-tabs';
import hennapattern from '../assets/henapattern.png';
import DatePicker from 'react-datepicker';
import calendar from '../booking form/calenadar.png';
import people from '../booking form/people.png';


 class  MozinoEnquiryTab  extends  React.Component {
     constructor (props) {
          super(props)
          this.state = {
            startDate: new Date()
          };
          this.handleChange = this.handleChange.bind(this);
        }
      
        handleChange(date) {
          this.setState({
            startDate: date
          })
        }
      
render() {
    const bookingForm = <div className="container">
                            
                         </div>

                         
    const enquiryForm =  <div className="container">
                              <div className="row">
                                   <div className="col-12">
                                        <form>
                                             <div className="pt-4 pb-3"><input type="text" className="input-enquiry-ful-name-mozino" placeholder="FullName*"/></div>
                                             <div className="pb-3"><input type="text" className="input-enquiry-email-mozino" placeholder="Email Address*"/></div>
                                             <textarea className="input-enquiry-detail-mozino " rows="4" cols="50"  name="comment" form="usrform">Enquiry details here...</textarea>
                                             <div className="text-center pt-3"><button className="btn-enquiry-form"  type="button" >Submit Enquiry</button></div>
                                        </form>
                                   </div>
                              </div>
                         </div>
   return (
     <div>
	     <CoolTabs
	       tabKey={'1'}
           style={{ width:  1550, height:  500, background:  'white' }}
           tabsHeaderStyle={{height: 100}}
	       activeTabStyle={{ background:  'white', color:  '#98885a' }}
	       unActiveTabStyle={{ background:  '#FAFAFA', color:  '#98885a' }}
	       leftContentStyle={{ background:  `url(${hennapattern})` }}
	       rightContentStyle={{ background:  `url(${hennapattern})` }}
           leftTabTitle={'Booking Form'}
           leftTabTitleStyle={{ fontSize: 40 , fontWeight: 600, textTransform: ' uppercase'}}
           rightTabTitle={'Enquiry Form'}
           rightTabTitleStyle={{ fontSize: 40 , fontWeight: 600,textTransform: ' uppercase'}}
	       leftContent={bookingForm}
	       rightContent={enquiryForm}
	       contentTransitionStyle={'transform 0.6s ease-in'}
	       borderTransitionStyle={'all 0.6s ease-in'}
        />
        
     </div>
);
}}
export  default MozinoEnquiryTab;