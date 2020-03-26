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
            startDate: new Date(),
            datePickerIsOpen: false,
          };
          this.handleChange = this.handleChange.bind(this);
          this.openDatePicker = this.openDatePicker.bind(this)
        }
      
        handleChange(date) {
          this.setState({
            startDate: date
          })
        }
        
        openDatePicker() {
          this.setState({
            datePickerIsOpen: !this.state.datePickerIsOpen,
          });
        };

        // handleClick() {
        //   $('#datetimepicker1').datetimepicker();
        // }
        // $(function () {
        //     $('#datetimepicker1').datetimepicker();
        // });
    
      
render() {
    const bookingForm = <div class="container">
                          <div className="row text-center">
                            <div className="col-12 pt-5">
                              <div className="datepicker-parent-div">
                                  <div className="datepicker-image-div">
                                    <img className="" src={calendar} width="43%"/>
                                  </div>
                                <DatePicker
                                  selected={ this.state.startDate }
                                  onChange={ this.handleChange }
                                  onClickOutside={this.openDatePicker}
                                  open={this.state.datePickerIsOpen}
                                  dateFormat="MMMM d, yyyy"                 
                                />
                                <div className="fa-angle-down-datepicker">
                                  <i class="fa fa-angle-down datepicker-icon" onClick={this.openDatePicker}></i>
                                </div>
                                </div>
                              </div>
                              <div className="col-12 pt-5">
                                <div className="datepicker-image-div">
                                  <img className="" src={people} width="42%"/>
                                </div>
                                <div className="people-select-parent-div">
                                    <select id="" className="people-selected" >
                                      <option className="" selected></option>
                                      <option className="" selected>1-3</option>
                                      <option className="" >4-6</option>
                                      <option className="" >7-9</option>
                                      <option className="">10+</option>                                      
                                    </select>
                                </div>
                              </div>
                              <div className="col-12 pt-5">
                                <button className="btn-enquiry-form"  type="button" >Proceed to Booking</button>
                              </div>
                              <div className="col-12 pt-5">
                                <div className="save-wishlist-div">
                                  <i className="fa fa-heart text-save-wishlist pr-3"></i>
                                  <span className="text-save-wishlist">Save to Wishlist</span>
                                </div>
                                <div className="save-wishlist-num-count-div">
                                  <i className="fa fa-eye text-save-wishlist pr-2"></i>
                                  <span className="text-save-wishlist">304</span>
                                </div>
                              </div>
                          </div>
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
            leftContentStyle={{ background:  `url(${hennapattern})`,backgroundSize: '800px',height: '90%' }}
            rightContentStyle={{ background:  `url(${hennapattern})`, backgroundSize: '800px',height: '90%'}}
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