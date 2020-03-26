import Layout from '../components/Layout';
import register from '../assets/register.png';



class Register extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return(
            <Layout>
                <section className="bg-section-register mt-4">
                    <div className="container pt-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-8 col-xl-6 register-col-main-div">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <div className="">
                                            <h1 className="text-register mb-0">Register</h1>
                                        </div>
                                        <div className="register-border-div">
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 mt-4">
                                        <input type="text" className="register-email" placeholder="Username *"/>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-12 mt-4">
                                        <input type="email" className="register-email" placeholder="Email *"/>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col-12">
                                        <input type="password" className="register-email" placeholder="Password *"/>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col-12">
                                        <input type="password" className="register-email" placeholder="Re-enter Password *"/>
                                    </div>
                                </div>
                                <div className="row text-center mt-4">
                                    <div className="col-12">
                                        <button type="submit" className="mt-2 btn-register">Register</button>
                                    </div>
                                </div>
                                <div className="row text-center mt-4">
                                    <div className="col-12">
                                        <a className="text-goolge" href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                                            Register via 
                                            <span className="text-G">G</span>
                                            <span className="text-o-red">o</span>
                                            <span className="text-o-yellow">o</span>
                                            <span className="text-g">g</span>
                                            <span className="text-l">l</span>
                                            <span className="text-o-red">e</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="row text-center mt-4">
                                    <div className="col-12">
                                        <a className="mt-2 btn-facebook" href="https://www.facebook.com/">Register via Facebook</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="bg-section-register">
                    <div className="row">
                        <div className="col-12">
                            <div className="silhouettes-register-div">
                                <img className="silhouettes-register-img" src={register} alt="silhouettes"/>
                            </div>
                        </div>
                    </div>     
                </div>
            </Layout>
        )
    }
}

export default Register;
