import React from 'react'
import "./hero.css";

function Hero() {
  return (
    <div className='hero-section'>
        <div className='text-container'>
           <h3>Dive into web3 with our <span className='purple'>fastest </span> <span className='blue'>geo-distributed </span> <span className='orange'>high-availability</span> Blockchain API</h3>
           <ul>
            <li><svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 50 50"
    >
      <path d="M25.984.986a1 1 0 00-.884.567l-13.93 21.89a1.001 1.001 0 00-.063.106 1.001 1.001 0 00-.002.002 1 1 0 00-.039.09 1.001 1.001 0 00-.052.193 1 1 0 00-.014.2 1.001 1.001 0 000 .001 1 1 0 00.008.098 1.001 1.001 0 00.004.02 1 1 0 00.035.146 1 1 0 00.008.027 1.001 1.001 0 000 .002 1 1 0 00.037.092 1.001 1.001 0 000 .002 1 1 0 00.047.086 1.001 1.001 0 000 .002 1 1 0 00.054.082 1.001 1.001 0 00.03.035 1 1 0 00.035.043 1 1 0 00.068.07 1.001 1.001 0 00.002.002 1.001 1.001 0 00.158.117 1.001 1.001 0 00.002.002 1 1 0 00.016.008 1.001 1.001 0 00.002.002L25.379 32.8a1 1 0 001.234.004l13.862-7.922a1.001 1.001 0 00.021-.012 1 1 0 00.065-.04 1.001 1.001 0 00.02-.015 1 1 0 00.013-.011 1.001 1.001 0 00.06-.045 1.001 1.001 0 00.004-.004 1 1 0 00.012-.01 1.001 1.001 0 00.06-.06 1.001 1.001 0 00.065-.077 1.001 1.001 0 00.055-.08 1.001 1.001 0 00.002-.002 1 1 0 00.002-.005 1.001 1.001 0 00.046-.08 1.001 1.001 0 000-.003 1 1 0 00.032-.07 1.001 1.001 0 00.007-.021 1 1 0 00.008-.024 1.001 1.001 0 00.02-.068 1.001 1.001 0 00.002-.004 1 1 0 00.002-.006 1.001 1.001 0 00.017-.092 1 1 0 00.01-.076 1.001 1.001 0 000-.008 1 1 0 00.002-.091 1 1 0 00-.004-.059 1.001 1.001 0 00-.006-.063 1.001 1.001 0 000-.001 1 1 0 00-.002-.01 1.001 1.001 0 00-.017-.084 1.001 1.001 0 000-.004 1 1 0 00-.022-.074 1.001 1.001 0 00-.008-.022 1 1 0 00-.01-.023 1.001 1.001 0 00-.027-.067 1.001 1.001 0 00-.002-.002 1 1 0 00-.002-.006 1.001 1.001 0 00-.046-.082 1 1 0 00-.006-.01 1.001 1.001 0 00-.004-.007l-.032-.047-13.916-21.87a1 1 0 00-.912-.56zM25 5.436V17.34l-10.416 4.463L25 5.436zm2 0l10.416 16.367L27 17.34V5.436zm-2 14.08v10.76l-10.758-6.147L25 19.516zm2 0l10.758 4.613L27 30.275v-10.76zm13.008 8.482a1 1 0 00-.504.133L26 35.848 12.496 28.13A1 1 0 0012.02 28a1 1 0 00-.825 1.594l13.934 18.91a1 1 0 001.74.002l13.936-18.912a1 1 0 00-.797-1.596zm-24.395 4.219L25 37.582v7.375l-9.387-12.74zm20.774 0L27 44.957v-7.375l9.387-5.365z"></path>
    </svg><span>Ethereum</span></li>
            <li><svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 128 128"
    >
      <path
        d="M98.02 54.82H116.38V73.18H98.02z"
        transform="rotate(-45 107.19 64)"
      ></path>
      <path
        d="M11.63 54.82H29.990000000000002V73.18H11.63z"
        transform="rotate(-45 20.81 64)"
      ></path>
      <path d="M64 94.22L42.48 72.7 29.5 85.68 64 120.18 98.5 85.68 85.52 72.7 64 94.22z"></path>
      <path d="M64 33.78L85.52 55.3 98.5 42.32 64 7.82 29.5 42.32 42.48 55.3 64 33.78z"></path>
      <path
        d="M54.93 54.93H73.06V73.06H54.93z"
        transform="rotate(-45 64 64)"
      ></path>
    </svg><span>BNB Chain</span></li>
            <li> <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 128 128"
    >
      <path d="M85.52 45.58l-43 24.85a5.24 5.24 0 01-5.2 0L23.55 62.5A5.2 5.2 0 0121 58V42.14a5.2 5.2 0 012.6-4.5l13.73-7.93a5.24 5.24 0 015.2 0l13.73 7.93a5.2 5.2 0 012.6 4.5v7.61a1.3 1.3 0 001.94 1.13l7.15-4.13a2.59 2.59 0 001.29-2.25v-8.36a5.21 5.21 0 00-2.59-4.5L42.48 17.72a5.19 5.19 0 00-5.2 0L13.16 31.64a5.2 5.2 0 00-2.6 4.5V64a5.2 5.2 0 002.6 4.5l24.12 13.92a5.19 5.19 0 005.2 0l43-24.85a5.24 5.24 0 015.2 0l13.73 7.93a5.2 5.2 0 012.6 4.5v15.86a5.2 5.2 0 01-2.6 4.5l-13.69 7.93a5.24 5.24 0 01-5.2 0l-13.73-7.93a5.2 5.2 0 01-2.6-4.5v-7.62a1.29 1.29 0 00-1.94-1.12l-7.15 4.12a2.6 2.6 0 00-1.29 2.25v8.37a5.21 5.21 0 002.59 4.5l24.12 13.92a5.19 5.19 0 005.2 0l24.12-13.92a5.2 5.2 0 002.6-4.5V64a5.2 5.2 0 00-2.6-4.5L90.72 45.58a5.19 5.19 0 00-5.2 0z"></path>
    </svg><span>Polygon</span></li>
           </ul>
        </div>
        <div className='svg-container'>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 256 256"
    >
      <g
        fill="#fff4d2"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0 256V0h256v256z"></path>
      </g>
      <g
        fill="none"
        strokeMiterlimit="10"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path
          fill="#dcd5f2"
          d="M62.5 70.5h9v3h-9z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#8b75a1"
          d="M71 71v2h-8v-2h8m1-1H62v4h10v-4z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#dcd5f2"
          d="M8.5 70.5h9v3h-9z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#8b75a1"
          d="M17 71v2H9v-2h8m1-1H8v4h10v-4z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#dcd5f2"
          d="M7 71.5c-2.5 0-4.5-2-4.5-4.5V13c0-2.5 2-4.5 4.5-4.5h66c2.5 0 4.5 2 4.5 4.5v54c0 2.5-2 4.5-4.5 4.5z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#8b75a1"
          d="M73 9c2.2 0 4 1.8 4 4v54c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V13c0-2.2 1.8-4 4-4h66m0-1H7c-2.8 0-5 2.2-5 5v54c0 2.8 2.2 5 5 5h66c2.8 0 5-2.2 5-5V13c0-2.8-2.2-5-5-5z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#dcd5f2"
          d="M7 68.5c-.8 0-1.5-.7-1.5-1.5V13c0-.8.7-1.5 1.5-1.5h66c.8 0 1.5.7 1.5 1.5v54c0 .8-.7 1.5-1.5 1.5z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#8b75a1"
          d="M73 12c.6 0 1 .4 1 1v54c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V13c0-.6.4-1 1-1h66m0-1H7c-1.1 0-2 .9-2 2v54c0 1.1.9 2 2 2h66c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#b0c1d4"
          d="M48 59.5c-10.8 0-19.5-8.7-19.5-19.5S37.2 20.5 48 20.5 67.5 29.2 67.5 40 58.8 59.5 48 59.5z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#66798f"
          d="M48 21c10.5 0 19 8.5 19 19s-8.5 19-19 19-19-8.5-19-19 8.5-19 19-19m0-1c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#e1ebf2"
          d="M48 51.5c-6.3 0-11.5-5.2-11.5-11.5S41.7 28.5 48 28.5 59.5 33.7 59.5 40 54.3 51.5 48 51.5z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#66798f"
          d="M48 29c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11m0-1c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#fff"
          d="M14 55.5c-1.4 0-2.5-1.1-2.5-2.5V27c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v26c0 1.4-1.1 2.5-2.5 2.5z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#66798f"
          d="M14 25c1.1 0 2 .9 2 2v26c0 1.1-.9 2-2 2s-2-.9-2-2V27c0-1.1.9-2 2-2m0-1c-1.7 0-3 1.3-3 3v26c0 1.7 1.3 3 3 3s3-1.3 3-3V27c0-1.7-1.3-3-3-3z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#e1ebf2"
          d="M14 55c-1.1 0-2-.9-2-2V40h4v13c0 1.1-.9 2-2 2z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#66798f"
          d="M40.073 22.282l.924-.383 1.722 4.158-.924.383zM53.282 53.942l.924-.383 1.722 4.157-.924.383zM61.562 33.796l4.157-1.722.383.923-4.157 1.723zM29.897 47.004l4.157-1.723.383.924-4.157 1.723zM53.26 26.078l1.723-4.157.924.383-1.723 4.157zM40.092 57.701l1.723-4.157.923.383-1.722 4.157zM61.543 46.185l.383-.924 4.157 1.722-.382.924zM29.917 33.014l.383-.924 4.157 1.722-.382.924z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#dcd5f2"
          d="M74.5 21.5h3v7h-3z"
          transform="scale(3.2)"
        ></path>
        <path
          fill="#8b75a1"
          d="M77 22v6h-2v-6h2m1-1h-4v8h4v-8z"
          transform="scale(3.2)"
        ></path>
        <g>
          <path
            fill="#dcd5f2"
            d="M74.5 51.5h3v7h-3z"
            transform="scale(3.2)"
          ></path>
          <path
            fill="#8b75a1"
            d="M77 52v6h-2v-6h2m1-1h-4v8h4v-8z"
            transform="scale(3.2)"
          ></path>
        </g>
      </g>
        </svg>
        </div>
    </div>
  )
}

export default Hero