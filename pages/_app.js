// pages/_app.js
import '../styles.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-flags-select/css/react-flags-select.css';
import "react-datepicker/dist/react-datepicker.css";



export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}