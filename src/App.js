import './App.css';
import TextBox from "./components/textbox/textbox.js";
import Navbar from "./components/navbar/navbar.js";
import Hero from "./components/Hero/hero.js";
import Bcard from "./components/BCard/Bcard.js"
import Testimonial from './components/testimonial/testimonial';
import Chains from "./components/chains/chains.js"


function App() {

  // Component props

   const textboxmessage = {
     text: "Access your JSON-RPC to make your UX smoother and faster, and decrease the latency. Our API allows you to concentrate on growth and development tasks."
   }
   
   const TBStyle = {
     width: "500px",
     marginLeft: "400px",
     borderColor: "#FE83C6",
  }

  const card_text_1 = <>
  <h3>
  Fastest and high available blockchain infrastructure
  </h3>
  <p>Our nodes as a service provide you with the fastest and most stable connection. We are ultra-speedy thanks to:
  </p>

  </>

  // component props end here

  
  return (

    <>

    {/* Title Section Starts */}

    <section className='title'>

     <Navbar />
     <Hero />

     <div className='text-boxes'>

     <TextBox message={textboxmessage} style={TBStyle}/>
     <TextBox message={{text: <>    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 128 128"
    >
      <path d="M61.557 11.238A53 53 0 0021.39 95.51a52.66 52.66 0 0034.76 20.9 53.53 53.53 0 008 .6A53.13 53.13 0 00107 95a2 2 0 00-.46-2.78 2 2 0 00-2.79.45 49 49 0 01-79.14.46A49 49 0 01101.09 32H90a2 2 0 000 4h16a2 2 0 002-2V18a2 2 0 00-4 0v11.25a53 53 0 00-42.443-18.012zm31.209 34.766A8 8 0 0093 62a8 8 0 008-8 8 8 0 00-8.234-7.996zM29.94 48A2 2 0 0028 50v28a2 2 0 004 0V50a2 2 0 00-2.059-2zm15.766.004A10 10 0 0036 58v12a10 10 0 0020 0V58a10 10 0 00-10.293-9.996zm24 0A10 10 0 0060 58v12a10 10 0 0020 0V58a10 10 0 00-10.293-9.996zm47.143.105a2 2 0 00-1.26.48l-28 28a2 2 0 000 2.821 2 2 0 002.82 0l28-28a2 2 0 00-1.56-3.3zm-23.733 1.893A4 4 0 0193 58a4 4 0 01-4-4 4 4 0 014.117-3.998zm-46.941 2A6 6 0 0152 58v12a6 6 0 01-12 0V58a6 6 0 016.176-5.998zm24 0A6 6 0 0176 58v12a6 6 0 01-12 0V58a6 6 0 016.176-5.998zM113 66a8 8 0 108 8 8 8 0 00-8-8zm-.166 4.004A4 4 0 01117 74a4 4 0 01-4 4 4 4 0 01-.166-7.996z"></path>
    </svg> <span>node-as-a-service with a quick launch</span></>}} style={{width: "500px", marginLeft: "760px", borderColor: "", marginTop: "-50px"}} />
    <TextBox message={{text: "In-House Blockchain deployment and support."}} style={{width: "500px", marginLeft: "400px", borderColor: "#FF7000", marginTop: "-50px"}} />
    
    </div>

    </section>

    {/* Title section ends */}

    {/* Benefits section */}

    <section className='benefits'>

          <h1 className='benefits-header'>Benefits of Fast <span className="purple">Blockchain API</span></h1>

        <Bcard svg={<svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 80 80"
    >
      <path d="M42 4.982c-4.51 0-7.371.485-9.248 1.342-1.877.858-2.77 2.314-2.77 3.676 0 .99.38 1.892.979 2.566.598.675 1.383 1.15 2.248 1.502 1.73.707 3.825.95 5.791.95 2.884 0 5.957-1 9.031-1 2.874 0 5.704.827 8.576 4.017-1.345 1.352-2.214 2.84-2.88 3.953-.402.671-.776 1.184-1.174 1.5-.398.317-.81.494-1.553.494-2.16 0-3.443-.66-5.39-1.43-1.948-.768-4.46-1.57-8.61-1.57-8.296 0-16.369 5.543-17.736 14.407-1.16-.893-2.678-1.407-4.264-1.407-1.891 0-3.471.619-4.525 1.737-1.055 1.118-1.543 2.66-1.543 4.33 0 1.262.54 2.655 1.55 3.84 1.01 1.184 2.571 2.129 4.518 2.129 1.765 0 3.303-.586 4.725-1.637 1.02 1.737 2.413 3.07 3.935 3.851 1.83.94 3.68 1.307 5.031 1.307 1.033 0 2.526.204 3.627.664.551.23.996.52 1.268.818.272.299.396.57.396.979 0 .672-.435 1.106-1.18 1.805-.744.698-1.82 1.654-1.82 3.195 0 2.191 1.313 3.695 2.907 4.334 1.593.64 3.438.684 5.111.684 3.459 0 5.308.8 6.672 1.962 1.364 1.162 2.268 2.813 3.488 4.596.764 1.117 1.615 2.177 2.567 2.998.951.822 2.038 1.444 3.273 1.444.838 0 1.712-.231 2.484-.684.773-.453 1.534-1.238 1.534-2.334 0-5.974-4.149-9.576-8.082-11.533-.619-.308-1.087-.377-1.686-.615 5.378-3.084 8.687-6.71 10.48-10.819 1.8-4.123 2.145-8.675 2.21-13.488 1.874.914 3.817 1.473 5.56 1.473 1.651 0 3.423-.018 4.951-.84 1.528-.823 2.567-2.57 2.567-5.178 0-5.255-2.062-8.667-4.881-10.592-2.655-1.813-5.837-2.31-8.602-2.369C57.715 9.303 49.465 4.982 42 4.982zm0 2.036c6.84 0 14.873 4.268 18.098 10.453a1.019 1.019 0 00.902.547c2.627 0 5.682.499 7.988 2.074 2.306 1.575 3.994 4.163 3.994 8.908 0 2.143-.586 2.895-1.496 3.385-.91.49-2.387.597-3.986.597-1.792 0-4.017-.565-5.94-1.832a1.019 1.019 0 00-1.578.85c0 5.337-.314 10.083-2.119 14.217-1.778 4.074-5.014 7.634-11.08 10.732-.371-.11-.88-.357-1.207-.441-.097-.025-.142-.03-.234-.053 2.5-2.188 5.676-6.25 5.676-12.455 0-4.838-2.63-8.646-6.508-10.883a1.02 1.02 0 00-1.02 1.766c3.376 1.947 5.492 4.999 5.492 9.117 0 6.943-4.663 10.967-6.525 12.139a1.019 1.019 0 00-.006.002v1.716s.201.102.236.114c.071.022.087.023.104.027a1.6 1.6 0 00.066.014l.13.021a25.203 25.203 0 012.085.447c1.356.347 3.168.92 4.957 1.811 3.578 1.78 6.953 4.663 6.953 9.709 0 .119-.114.333-.529.576-.415.243-1.041.406-1.453.406-.515 0-1.197-.306-1.941-.949-.745-.643-1.518-1.582-2.22-2.607a1.019 1.019 0 000-.002c-1.14-1.668-2.112-3.519-3.845-4.994-1.733-1.476-4.203-2.448-7.994-2.448-1.612 0-3.268-.103-4.354-.539-1.085-.435-1.628-.933-1.628-2.443 0-.58.424-1 1.18-1.709.755-.709 1.82-1.713 1.82-3.291 0-.92-.376-1.748-.926-2.352-.55-.603-1.25-1.016-1.988-1.324-1.476-.616-3.138-.822-4.413-.822-.956 0-2.59-.307-4.1-1.082-1.508-.775-2.898-1.984-3.65-3.809a1.019 1.019 0 00-1.662-.332c-1.34 1.34-2.449 1.703-4.279 1.703-1.303 0-2.267-.593-2.969-1.416S10.97 40.66 10.97 40.05c0-1.282.357-2.263.988-2.932.63-.668 1.576-1.1 3.043-1.1 1.985 0 3.65.997 4.021 2.268A1.019 1.019 0 0021.018 38c0-9.244 7.862-14.982 15.982-14.982 3.896 0 6.008.698 7.861 1.43 1.854.73 3.55 1.57 6.139 1.57 1.132 0 2.098-.361 2.82-.936.722-.575 1.21-1.305 1.655-2.047.888-1.484 1.623-3.05 3.148-4.23a1.019 1.019 0 00.168-1.448c-3.42-4.208-7.272-5.375-10.76-5.375-3.488 0-6.665 1-9.031 1-1.784 0-3.69-.257-5.021-.8-.666-.272-1.179-.61-1.495-.967-.316-.357-.466-.705-.466-1.215 0-.638.174-1.182 1.58-1.824 1.406-.643 4.045-1.158 8.402-1.158zM13.25 15l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.655L13.25 15zm4 0l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.655L17.25 15zm4 0a1 1 0 100 2h7.25a1 1 0 100-2h-7.25zm-10.621 5l-.8.402-.16.881.612.654.348.063.8-.402.159-.881-.611-.654-.348-.063zm4 0l-.8.402-.16.881.612.654.348.063.8-.402.159-.881-.611-.654-.348-.063zm3.44 0a1 1 0 100 2h4.681a1 1 0 100-2h-4.682zm50.894 4.365a2.119 2.119 0 00-2.12 2.12 2.119 2.119 0 002.12 2.119 2.119 2.119 0 002.117-2.12 2.119 2.119 0 00-2.117-2.119zM7.25 26l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.654L7.25 26zm4 0l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.654L11.25 26zM15 26a1 1 0 100 2h3.486a1 1 0 100-2H15zm24.96 5.691l-.8.4-.158.884.613.654.346.062.803-.402.156-.883-.611-.654-.348-.06zm-3.981.194l-.801.402-.158.881.61.654.349.063.8-.4.158-.883-.613-.655-.345-.062zM32.25 33.25l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.654-.348-.063zm11.299 24.607v.002l-.006.002.006-.004z"></path>
    </svg>} text={card_text_1} marginLeft="300px"/>

    <Bcard svg={<svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 80 80"
    >
      <path d="M42 4.982c-4.51 0-7.371.485-9.248 1.342-1.877.858-2.77 2.314-2.77 3.676 0 .99.38 1.892.979 2.566.598.675 1.383 1.15 2.248 1.502 1.73.707 3.825.95 5.791.95 2.884 0 5.957-1 9.031-1 2.874 0 5.704.827 8.576 4.017-1.345 1.352-2.214 2.84-2.88 3.953-.402.671-.776 1.184-1.174 1.5-.398.317-.81.494-1.553.494-2.16 0-3.443-.66-5.39-1.43-1.948-.768-4.46-1.57-8.61-1.57-8.296 0-16.369 5.543-17.736 14.407-1.16-.893-2.678-1.407-4.264-1.407-1.891 0-3.471.619-4.525 1.737-1.055 1.118-1.543 2.66-1.543 4.33 0 1.262.54 2.655 1.55 3.84 1.01 1.184 2.571 2.129 4.518 2.129 1.765 0 3.303-.586 4.725-1.637 1.02 1.737 2.413 3.07 3.935 3.851 1.83.94 3.68 1.307 5.031 1.307 1.033 0 2.526.204 3.627.664.551.23.996.52 1.268.818.272.299.396.57.396.979 0 .672-.435 1.106-1.18 1.805-.744.698-1.82 1.654-1.82 3.195 0 2.191 1.313 3.695 2.907 4.334 1.593.64 3.438.684 5.111.684 3.459 0 5.308.8 6.672 1.962 1.364 1.162 2.268 2.813 3.488 4.596.764 1.117 1.615 2.177 2.567 2.998.951.822 2.038 1.444 3.273 1.444.838 0 1.712-.231 2.484-.684.773-.453 1.534-1.238 1.534-2.334 0-5.974-4.149-9.576-8.082-11.533-.619-.308-1.087-.377-1.686-.615 5.378-3.084 8.687-6.71 10.48-10.819 1.8-4.123 2.145-8.675 2.21-13.488 1.874.914 3.817 1.473 5.56 1.473 1.651 0 3.423-.018 4.951-.84 1.528-.823 2.567-2.57 2.567-5.178 0-5.255-2.062-8.667-4.881-10.592-2.655-1.813-5.837-2.31-8.602-2.369C57.715 9.303 49.465 4.982 42 4.982zm0 2.036c6.84 0 14.873 4.268 18.098 10.453a1.019 1.019 0 00.902.547c2.627 0 5.682.499 7.988 2.074 2.306 1.575 3.994 4.163 3.994 8.908 0 2.143-.586 2.895-1.496 3.385-.91.49-2.387.597-3.986.597-1.792 0-4.017-.565-5.94-1.832a1.019 1.019 0 00-1.578.85c0 5.337-.314 10.083-2.119 14.217-1.778 4.074-5.014 7.634-11.08 10.732-.371-.11-.88-.357-1.207-.441-.097-.025-.142-.03-.234-.053 2.5-2.188 5.676-6.25 5.676-12.455 0-4.838-2.63-8.646-6.508-10.883a1.02 1.02 0 00-1.02 1.766c3.376 1.947 5.492 4.999 5.492 9.117 0 6.943-4.663 10.967-6.525 12.139a1.019 1.019 0 00-.006.002v1.716s.201.102.236.114c.071.022.087.023.104.027a1.6 1.6 0 00.066.014l.13.021a25.203 25.203 0 012.085.447c1.356.347 3.168.92 4.957 1.811 3.578 1.78 6.953 4.663 6.953 9.709 0 .119-.114.333-.529.576-.415.243-1.041.406-1.453.406-.515 0-1.197-.306-1.941-.949-.745-.643-1.518-1.582-2.22-2.607a1.019 1.019 0 000-.002c-1.14-1.668-2.112-3.519-3.845-4.994-1.733-1.476-4.203-2.448-7.994-2.448-1.612 0-3.268-.103-4.354-.539-1.085-.435-1.628-.933-1.628-2.443 0-.58.424-1 1.18-1.709.755-.709 1.82-1.713 1.82-3.291 0-.92-.376-1.748-.926-2.352-.55-.603-1.25-1.016-1.988-1.324-1.476-.616-3.138-.822-4.413-.822-.956 0-2.59-.307-4.1-1.082-1.508-.775-2.898-1.984-3.65-3.809a1.019 1.019 0 00-1.662-.332c-1.34 1.34-2.449 1.703-4.279 1.703-1.303 0-2.267-.593-2.969-1.416S10.97 40.66 10.97 40.05c0-1.282.357-2.263.988-2.932.63-.668 1.576-1.1 3.043-1.1 1.985 0 3.65.997 4.021 2.268A1.019 1.019 0 0021.018 38c0-9.244 7.862-14.982 15.982-14.982 3.896 0 6.008.698 7.861 1.43 1.854.73 3.55 1.57 6.139 1.57 1.132 0 2.098-.361 2.82-.936.722-.575 1.21-1.305 1.655-2.047.888-1.484 1.623-3.05 3.148-4.23a1.019 1.019 0 00.168-1.448c-3.42-4.208-7.272-5.375-10.76-5.375-3.488 0-6.665 1-9.031 1-1.784 0-3.69-.257-5.021-.8-.666-.272-1.179-.61-1.495-.967-.316-.357-.466-.705-.466-1.215 0-.638.174-1.182 1.58-1.824 1.406-.643 4.045-1.158 8.402-1.158zM13.25 15l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.655L13.25 15zm4 0l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.655L17.25 15zm4 0a1 1 0 100 2h7.25a1 1 0 100-2h-7.25zm-10.621 5l-.8.402-.16.881.612.654.348.063.8-.402.159-.881-.611-.654-.348-.063zm4 0l-.8.402-.16.881.612.654.348.063.8-.402.159-.881-.611-.654-.348-.063zm3.44 0a1 1 0 100 2h4.681a1 1 0 100-2h-4.682zm50.894 4.365a2.119 2.119 0 00-2.12 2.12 2.119 2.119 0 002.12 2.119 2.119 2.119 0 002.117-2.12 2.119 2.119 0 00-2.117-2.119zM7.25 26l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.654L7.25 26zm4 0l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.654L11.25 26zM15 26a1 1 0 100 2h3.486a1 1 0 100-2H15zm24.96 5.691l-.8.4-.158.884.613.654.346.062.803-.402.156-.883-.611-.654-.348-.06zm-3.981.194l-.801.402-.158.881.61.654.349.063.8-.4.158-.883-.613-.655-.345-.062zM32.25 33.25l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.654-.348-.063zm11.299 24.607v.002l-.006.002.006-.004z"></path>
    </svg>} text={card_text_1} marginLeft="400px"/>
  <div className='final-bcard'>
    <Bcard svg={<svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 80 80"

    >
      <path d="M42 4.982c-4.51 0-7.371.485-9.248 1.342-1.877.858-2.77 2.314-2.77 3.676 0 .99.38 1.892.979 2.566.598.675 1.383 1.15 2.248 1.502 1.73.707 3.825.95 5.791.95 2.884 0 5.957-1 9.031-1 2.874 0 5.704.827 8.576 4.017-1.345 1.352-2.214 2.84-2.88 3.953-.402.671-.776 1.184-1.174 1.5-.398.317-.81.494-1.553.494-2.16 0-3.443-.66-5.39-1.43-1.948-.768-4.46-1.57-8.61-1.57-8.296 0-16.369 5.543-17.736 14.407-1.16-.893-2.678-1.407-4.264-1.407-1.891 0-3.471.619-4.525 1.737-1.055 1.118-1.543 2.66-1.543 4.33 0 1.262.54 2.655 1.55 3.84 1.01 1.184 2.571 2.129 4.518 2.129 1.765 0 3.303-.586 4.725-1.637 1.02 1.737 2.413 3.07 3.935 3.851 1.83.94 3.68 1.307 5.031 1.307 1.033 0 2.526.204 3.627.664.551.23.996.52 1.268.818.272.299.396.57.396.979 0 .672-.435 1.106-1.18 1.805-.744.698-1.82 1.654-1.82 3.195 0 2.191 1.313 3.695 2.907 4.334 1.593.64 3.438.684 5.111.684 3.459 0 5.308.8 6.672 1.962 1.364 1.162 2.268 2.813 3.488 4.596.764 1.117 1.615 2.177 2.567 2.998.951.822 2.038 1.444 3.273 1.444.838 0 1.712-.231 2.484-.684.773-.453 1.534-1.238 1.534-2.334 0-5.974-4.149-9.576-8.082-11.533-.619-.308-1.087-.377-1.686-.615 5.378-3.084 8.687-6.71 10.48-10.819 1.8-4.123 2.145-8.675 2.21-13.488 1.874.914 3.817 1.473 5.56 1.473 1.651 0 3.423-.018 4.951-.84 1.528-.823 2.567-2.57 2.567-5.178 0-5.255-2.062-8.667-4.881-10.592-2.655-1.813-5.837-2.31-8.602-2.369C57.715 9.303 49.465 4.982 42 4.982zm0 2.036c6.84 0 14.873 4.268 18.098 10.453a1.019 1.019 0 00.902.547c2.627 0 5.682.499 7.988 2.074 2.306 1.575 3.994 4.163 3.994 8.908 0 2.143-.586 2.895-1.496 3.385-.91.49-2.387.597-3.986.597-1.792 0-4.017-.565-5.94-1.832a1.019 1.019 0 00-1.578.85c0 5.337-.314 10.083-2.119 14.217-1.778 4.074-5.014 7.634-11.08 10.732-.371-.11-.88-.357-1.207-.441-.097-.025-.142-.03-.234-.053 2.5-2.188 5.676-6.25 5.676-12.455 0-4.838-2.63-8.646-6.508-10.883a1.02 1.02 0 00-1.02 1.766c3.376 1.947 5.492 4.999 5.492 9.117 0 6.943-4.663 10.967-6.525 12.139a1.019 1.019 0 00-.006.002v1.716s.201.102.236.114c.071.022.087.023.104.027a1.6 1.6 0 00.066.014l.13.021a25.203 25.203 0 012.085.447c1.356.347 3.168.92 4.957 1.811 3.578 1.78 6.953 4.663 6.953 9.709 0 .119-.114.333-.529.576-.415.243-1.041.406-1.453.406-.515 0-1.197-.306-1.941-.949-.745-.643-1.518-1.582-2.22-2.607a1.019 1.019 0 000-.002c-1.14-1.668-2.112-3.519-3.845-4.994-1.733-1.476-4.203-2.448-7.994-2.448-1.612 0-3.268-.103-4.354-.539-1.085-.435-1.628-.933-1.628-2.443 0-.58.424-1 1.18-1.709.755-.709 1.82-1.713 1.82-3.291 0-.92-.376-1.748-.926-2.352-.55-.603-1.25-1.016-1.988-1.324-1.476-.616-3.138-.822-4.413-.822-.956 0-2.59-.307-4.1-1.082-1.508-.775-2.898-1.984-3.65-3.809a1.019 1.019 0 00-1.662-.332c-1.34 1.34-2.449 1.703-4.279 1.703-1.303 0-2.267-.593-2.969-1.416S10.97 40.66 10.97 40.05c0-1.282.357-2.263.988-2.932.63-.668 1.576-1.1 3.043-1.1 1.985 0 3.65.997 4.021 2.268A1.019 1.019 0 0021.018 38c0-9.244 7.862-14.982 15.982-14.982 3.896 0 6.008.698 7.861 1.43 1.854.73 3.55 1.57 6.139 1.57 1.132 0 2.098-.361 2.82-.936.722-.575 1.21-1.305 1.655-2.047.888-1.484 1.623-3.05 3.148-4.23a1.019 1.019 0 00.168-1.448c-3.42-4.208-7.272-5.375-10.76-5.375-3.488 0-6.665 1-9.031 1-1.784 0-3.69-.257-5.021-.8-.666-.272-1.179-.61-1.495-.967-.316-.357-.466-.705-.466-1.215 0-.638.174-1.182 1.58-1.824 1.406-.643 4.045-1.158 8.402-1.158zM13.25 15l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.655L13.25 15zm4 0l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.655L17.25 15zm4 0a1 1 0 100 2h7.25a1 1 0 100-2h-7.25zm-10.621 5l-.8.402-.16.881.612.654.348.063.8-.402.159-.881-.611-.654-.348-.063zm4 0l-.8.402-.16.881.612.654.348.063.8-.402.159-.881-.611-.654-.348-.063zm3.44 0a1 1 0 100 2h4.681a1 1 0 100-2h-4.682zm50.894 4.365a2.119 2.119 0 00-2.12 2.12 2.119 2.119 0 002.12 2.119 2.119 2.119 0 002.117-2.12 2.119 2.119 0 00-2.117-2.119zM7.25 26l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.654L7.25 26zm4 0l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.654L11.25 26zM15 26a1 1 0 100 2h3.486a1 1 0 100-2H15zm24.96 5.691l-.8.4-.158.884.613.654.346.062.803-.402.156-.883-.611-.654-.348-.06zm-3.981.194l-.801.402-.158.881.61.654.349.063.8-.4.158-.883-.613-.655-.345-.062zM32.25 33.25l-.8.402-.159.881.611.654.348.063.8-.402.159-.881-.611-.654-.348-.063zm11.299 24.607v.002l-.006.002.006-.004z"></path>
    </svg>} text={card_text_1} marginLeft="300px"/>
    </div>
    </section>
    

    <section className='testimonials'>
      <Testimonial />
    </section>

     <Chains /> 
    
    
    

    
   

    </>

    );

  }

export default App;
