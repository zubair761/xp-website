import Layout from '../components/Layout';
import register from '../assets/register.png';


class Login extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Layout>
                <section className="bg-section-login mt-4">
                    <div className="container pt-4">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-8 col-xl-6 register-col-main-div">
                                <div className="row">
                                    <div className="col text-center">
                                        <div className="">
                                            <h1 className="text-register mb-0">Login</h1>
                                        </div>
                                        <div className="login-border-div">
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col mt-4">
                                        <input type="text" className="register-email" placeholder="Username *"/>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <input type="password" className="register-email" placeholder="Password *"/>
                                    </div>
                                </div>
                                <div className="row text-right mt-1">
                                    <div className="col">
                                        <a className="text-forgot-password" href="#">Forgot Password?</a>
                                    </div>
                                </div>
                                <div className="row text-center mt-5">
                                    <div className="col">
                                        <button type="submit" className="mt-2 btn-login">Login</button>
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

export default Login;