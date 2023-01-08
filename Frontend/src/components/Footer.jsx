import React from 'react'
import { Link, NavLink } from "react-router-dom";    
import linkedin from '../assets/icons/linkedin.png'
import facebook from '../assets/icons/facebook.png'
import twitter from '../assets/icons/twitter.png'
import instagram from '../assets/icons/instagram.png'


const Footer = () => {
    return (
        <div className='px-2 sm:px-16  mx-auto dark:bg-gray-900  text-white py-5  bottom-0 flex md:justify-between flex-col gap-6 md:flex-row items-center'>
            <div className='text-white flex md:flex-col md:gap-2 gap-16 items-center'>
                <svg width="200" height="44" viewBox="0 0 356 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_1319)">
                            <path d="M77.0643 21.7536C77.0627 23.2419 76.9092 24.7263 76.606 26.1836C76.1283 28.4745 75.2811 30.673 74.0973 32.6935C73.9766 32.8978 73.856 33.1022 73.7234 33.2945C71.7668 36.4224 69.0431 39.0019 65.8092 40.7897C62.5753 42.5775 58.9378 43.5148 55.2398 43.5131H21.8186C18.9526 43.5131 16.1146 42.9504 13.4667 41.8572C10.8189 40.764 8.41297 39.1617 6.38638 37.1416C4.35979 35.1216 2.75222 32.7236 1.65543 30.0843C0.558651 27.445 -0.00585938 24.6163 -0.00585938 21.7596C-0.00585938 18.9029 0.558651 16.0741 1.65543 13.4349C2.75222 10.7956 4.35979 8.39748 6.38638 6.37748C8.41297 4.35747 10.8189 2.75512 13.4667 1.6619C16.1146 0.568684 18.9526 0.00601671 21.8186 0.0060168H33.4756V10.2246H21.8186C18.7462 10.2246 15.7996 11.4411 13.627 13.6066C11.4545 15.7721 10.234 18.7091 10.234 21.7716C10.234 24.834 11.4545 27.7711 13.627 29.9365C15.7996 32.102 18.7462 33.3186 21.8186 33.3186H55.2338C57.7403 33.3187 60.1791 32.5076 62.1835 31.0074C64.1878 29.5071 65.6492 27.3988 66.348 24.9995C66.8739 23.1812 66.9484 21.2627 66.5651 19.4093C66.0221 16.814 64.5992 14.4842 62.5356 12.8115C60.472 11.1389 57.8936 10.2254 55.2338 10.2246H48.769V28.2934H38.5171V0H55.2277C58.9239 0.00787864 62.5578 0.949242 65.79 2.73619C69.0223 4.52315 71.7476 7.0974 73.7113 10.2186C73.9847 10.6434 74.238 11.0761 74.4711 11.5169C75.6647 13.7326 76.4607 16.1391 76.8231 18.6279C76.9796 19.6625 77.0602 20.7072 77.0643 21.7536Z" fill="#0071CE"/>
                            <path d="M153.665 21.7834V43.4769H143.413V21.7834C143.413 18.721 142.192 15.7839 140.02 13.6185C137.847 11.453 134.9 10.2364 131.828 10.2364C128.756 10.2364 125.809 11.453 123.636 13.6185C121.464 15.7839 120.243 18.721 120.243 21.7834V43.4769H109.991V21.7834C109.991 18.721 108.771 15.7839 106.598 13.6185C104.426 11.453 101.479 10.2364 98.4068 10.2364C95.3344 10.2364 92.3878 11.453 90.2153 13.6185C88.0427 15.7839 86.8222 18.721 86.8222 21.7834V43.4769H76.5703V21.7834C76.5682 17.3199 77.9439 12.9639 80.5109 9.30654C83.0778 5.64919 86.7116 2.8677 90.9191 1.3396C95.1265 -0.188507 99.7037 -0.389199 104.03 0.764753C108.355 1.91871 112.22 4.37143 115.099 7.78997C117.98 4.37481 121.845 1.92523 126.17 0.77332C130.494 -0.378588 135.07 -0.177106 139.276 1.35046C143.482 2.87802 147.115 5.65777 149.682 9.31285C152.249 12.9679 153.627 17.3215 153.628 21.7834H153.665Z" fill="#0071CE"/>
                            <path d="M76.7678 8.58972L63.5273 21.7871L76.7678 34.9845L90.0082 21.7871L76.7678 8.58972Z" fill="#E7004C"/>
                            <path d="M177.805 20.2568H174.355V23.088H177.805V20.2568Z" fill="#FFFFFF"/>
                            <path d="M182.906 15.1002H169.813C169.401 15.1163 168.991 15.0467 168.607 14.8958C168.306 14.7672 168.045 14.5594 167.853 14.2947C167.661 13.9992 167.529 13.6681 167.467 13.3209C167.391 12.8945 167.355 12.4618 167.359 12.0286V10.7422H164.32V12.3652C164.305 13.2059 164.423 14.0436 164.669 14.8477C164.87 15.495 165.212 16.0902 165.67 16.5909C166.089 17.0474 166.61 17.3995 167.19 17.6188C167.802 17.8531 168.453 17.9694 169.108 17.9614H186.355V7.64062H182.906V15.1002Z" fill="#FFFFFF"/>
                            <path d="M214.186 0.642578H210.736V3.47373H214.186V0.642578Z" fill="#FFFFFF"/>
                            <path d="M250.786 15.0998H242.886C242.612 15.1022 242.339 15.074 242.072 15.0157C241.817 14.9684 241.574 14.8747 241.354 14.7392C241.143 14.6107 240.963 14.436 240.829 14.2283C240.684 13.9964 240.612 13.726 240.624 13.4528V12.7796C240.644 11.8788 240.473 10.9839 240.124 10.1528C239.818 9.43609 239.354 8.79714 238.767 8.28344C238.17 7.78213 237.479 7.40412 236.735 7.17142C235.088 6.66656 233.328 6.66656 231.681 7.17142C230.938 7.40291 230.249 7.78109 229.655 8.28344C229.064 8.79523 228.598 9.43457 228.292 10.1528C227.945 10.9844 227.776 11.8792 227.797 12.7796V13.4528C227.807 13.7267 227.734 13.9971 227.586 14.2283C227.455 14.4357 227.277 14.6105 227.068 14.7392C226.843 14.8748 226.596 14.9685 226.338 15.0157C226.075 15.0725 225.806 15.1007 225.536 15.0998H220.452H219.445C219.065 15.0998 218.685 15.0998 218.317 15.0998H217.467V14.9796C218.017 14.5113 218.456 13.9282 218.754 13.2717C219.052 12.6151 219.202 11.9013 219.192 11.1807C219.208 10.4966 219.087 9.81616 218.836 9.17908C218.626 8.65737 218.293 8.19358 217.865 7.82662C217.425 7.46471 216.91 7.20403 216.358 7.06322C215.728 6.8969 215.079 6.81602 214.428 6.82279H204.544V7.25558C205.029 7.74616 205.422 8.32049 205.702 8.95066C206.033 9.65995 206.347 10.3993 206.648 11.1567C206.95 11.914 207.251 12.6414 207.571 13.3326C207.828 13.9421 208.194 14.5002 208.65 14.9796V15.0758H198.338C198.037 15.075 197.737 15.0509 197.44 15.0037C197.145 14.96 196.861 14.8621 196.602 14.7151C196.352 14.5702 196.144 14.363 195.998 14.114C195.829 13.8031 195.747 13.4519 195.763 13.0982V7.62223H192.29V17.5523C192.338 18.4723 192.198 19.3925 191.88 20.2572C191.757 20.5364 191.551 20.7711 191.29 20.9293C191.029 21.0874 190.725 21.1613 190.42 21.1408C190.168 21.1407 189.916 21.1206 189.666 21.0807C189.44 21.0394 189.224 20.9513 189.033 20.8222V23.3168C189.366 23.4556 189.714 23.5544 190.07 23.6113C190.443 23.6759 190.82 23.708 191.198 23.7075C191.952 23.7338 192.7 23.5791 193.381 23.2567C193.953 22.972 194.437 22.5378 194.78 22.0004C195.152 21.4062 195.407 20.7475 195.534 20.0588C195.696 19.2334 195.773 18.3934 195.763 17.5523V16.4162H195.86C195.957 16.6545 196.098 16.8726 196.276 17.0594C196.452 17.2453 196.655 17.4035 196.879 17.5283C197.109 17.6588 197.354 17.7617 197.609 17.8348C197.839 17.9042 198.079 17.9407 198.32 17.943H225.687C226.322 17.9419 226.946 17.774 227.496 17.4561C228.018 17.1755 228.456 16.7604 228.762 16.2539C229.319 17.0636 230.104 17.691 231.018 18.0572C233.052 18.8345 235.303 18.8345 237.338 18.0572C238.254 17.6929 239.041 17.0653 239.599 16.2539C239.902 16.7617 240.337 17.1774 240.86 17.4561C241.409 17.774 242.033 17.9419 242.669 17.943H254.235V0.643555H250.786V15.0998ZM215.507 12.461C215.358 12.9375 215.143 13.3907 214.868 13.8075C214.597 14.2097 214.253 14.5582 213.855 14.8354C213.469 15.1078 213.007 15.2529 212.534 15.2501C212.208 15.2486 211.894 15.1216 211.66 14.8955C211.379 14.6384 211.145 14.3355 210.966 13.9998C210.752 13.614 210.569 13.212 210.417 12.7977C210.255 12.3589 210.098 11.9321 209.947 11.5113C209.796 11.0905 209.64 10.7119 209.495 10.3632C209.389 10.0779 209.225 9.8178 209.012 9.59984H213.77C214.258 9.58711 214.739 9.71215 215.157 9.96049C215.352 10.0792 215.51 10.2479 215.616 10.4489C215.723 10.6499 215.772 10.8757 215.76 11.1026C215.748 11.5658 215.663 12.0243 215.507 12.461ZM236.843 14.0239C236.735 14.3975 236.554 14.7466 236.313 15.0518C236.077 15.3444 235.778 15.5806 235.438 15.743C235.06 15.9175 234.648 16.0058 234.232 16.0015C233.816 16.0073 233.403 15.9189 233.026 15.743C232.685 15.5822 232.386 15.3457 232.151 15.0518C231.907 14.7471 231.725 14.398 231.615 14.0239C231.374 13.1934 231.374 12.3118 231.615 11.4813C231.727 11.1043 231.909 10.7516 232.151 10.4414C232.383 10.1416 232.683 9.90065 233.026 9.73809C233.404 9.56427 233.816 9.47795 234.232 9.48563C234.648 9.47939 235.06 9.56564 235.438 9.73809C235.78 9.90289 236.079 10.1435 236.313 10.4414C236.553 10.752 236.733 11.1047 236.843 11.4813C237.084 12.3118 237.084 13.1934 236.843 14.0239Z" fill="#FFFFFF"/>
                            <path d="M261.574 0.642578H258.125V17.9601H261.574V0.642578Z" fill="#FFFFFF"/>
                            <path d="M292.674 0.642578H289.225V3.47373H292.674V0.642578Z" fill="#FFFFFF"/>
                            <path d="M295.261 7.54369C294.672 7.03479 293.981 6.65582 293.235 6.43166C292.416 6.1854 291.564 6.06381 290.708 6.071C289.854 6.0619 289.005 6.19186 288.193 6.45571C287.453 6.69882 286.77 7.08941 286.185 7.60378C285.612 8.12193 285.161 8.7604 284.865 9.47319C284.531 10.2831 284.369 11.1527 284.388 12.0278C284.39 12.6048 284.528 13.1732 284.792 13.6869C285.024 14.1827 285.35 14.6296 285.751 15.0033V15.0994H277.031C276.619 15.1161 276.208 15.0465 275.825 14.895C275.523 14.7664 275.263 14.5587 275.071 14.294C274.875 13.9998 274.744 13.6681 274.685 13.3202C274.609 12.8937 274.572 12.461 274.576 12.0278V10.7415H271.513V12.3644C271.498 13.2051 271.616 14.0428 271.863 14.847C272.064 15.4943 272.406 16.0895 272.864 16.5901C273.281 17.0452 273.8 17.3971 274.377 17.618C274.991 17.8518 275.644 17.9681 276.301 17.9606H290.684C291.54 17.9689 292.392 17.8452 293.211 17.594C293.956 17.3716 294.646 16.9969 295.237 16.494C295.826 15.9878 296.292 15.3547 296.6 14.6426C297.268 12.9629 297.268 11.0927 296.6 9.41308C296.296 8.69973 295.839 8.06156 295.261 7.54369ZM293.343 13.2661C293.231 13.6375 293.049 13.9843 292.807 14.288C292.57 14.5784 292.271 14.8125 291.932 14.9732C291.556 15.1517 291.143 15.2402 290.726 15.2317C290.327 15.2594 289.928 15.1927 289.56 15.0371C289.192 14.8814 288.866 14.6412 288.609 14.336C288.118 13.6623 287.871 12.8419 287.91 12.0098C287.907 11.5785 287.968 11.1491 288.091 10.7355C288.201 10.3589 288.381 10.0062 288.622 9.69559C288.855 9.39769 289.154 9.15712 289.496 8.99232C289.874 8.81987 290.286 8.73362 290.702 8.73986C291.118 8.73218 291.53 8.8185 291.908 8.99232C292.251 9.15488 292.551 9.39583 292.783 9.69559C293.025 10.0059 293.207 10.3586 293.319 10.7355C293.442 11.1491 293.503 11.5785 293.5 12.0098C293.512 12.4341 293.459 12.8576 293.343 13.2661Z" fill="#FFFFFF"/>
                            <path d="M355.408 9.41283C355.098 8.6972 354.632 8.05884 354.045 7.54344C353.456 7.03454 352.766 6.65558 352.019 6.43142C351.2 6.18516 350.348 6.06356 349.492 6.07076C348.639 6.06166 347.789 6.19161 346.978 6.45547C346.238 6.6973 345.557 7.08808 344.975 7.60354C344.4 8.12146 343.947 8.75987 343.649 9.47295C343.319 10.2837 343.156 11.1527 343.172 12.0276C343.177 12.6042 343.315 13.172 343.576 13.6866C343.809 14.1825 344.134 14.6294 344.535 15.003V15.0992H337.437C337.134 15.0998 336.831 15.0594 336.539 14.979C336.24 14.9044 335.956 14.7783 335.701 14.6063C335.447 14.4317 335.241 14.1987 335.097 13.927C334.935 13.6006 334.857 13.2392 334.868 12.8751V12.0276C334.892 11.1691 334.708 10.3176 334.332 9.54508C333.992 8.87641 333.495 8.29914 332.884 7.86202C332.243 7.40591 331.517 7.08107 330.749 6.90629C329.895 6.69771 329.018 6.59475 328.138 6.59972C327.237 6.5983 326.344 6.76339 325.503 7.08661C324.649 7.41178 323.838 7.84187 323.091 8.36694C322.333 8.90472 321.625 9.50816 320.974 10.1702C320.333 10.8044 319.729 11.4747 319.165 12.1779H319.123V8.32486H315.818V15.1052H308.617C308.317 15.1044 308.016 15.0802 307.719 15.0331C307.424 14.9893 307.14 14.8915 306.881 14.7445C306.631 14.5991 306.423 14.3921 306.278 14.1434C306.113 13.8309 306.034 13.4804 306.048 13.1276V7.65164H302.575V17.5817C302.625 18.5023 302.483 19.4232 302.159 20.2866C302.038 20.5659 301.834 20.8009 301.573 20.9592C301.313 21.1175 301.01 21.1912 300.705 21.1702C300.453 21.1703 300.201 21.1502 299.952 21.1101C299.724 21.0698 299.509 20.9817 299.318 20.8516V23.3462C299.649 23.4841 299.995 23.583 300.35 23.6407C300.722 23.705 301.099 23.7372 301.477 23.7369C302.233 23.7632 302.983 23.6086 303.666 23.2861C304.238 23.0014 304.722 22.5671 305.065 22.0298C305.432 21.433 305.687 20.7753 305.819 20.0883C305.979 19.2623 306.055 18.4227 306.048 17.5817V16.4456H306.145C306.24 16.6851 306.382 16.9035 306.561 17.0888C306.736 17.276 306.939 17.4343 307.164 17.5577C307.395 17.6872 307.64 17.79 307.894 17.8642C308.127 17.9332 308.368 17.9696 308.611 17.9724H334.247C334.417 17.7279 334.548 17.4581 334.633 17.1729C334.714 16.9348 334.781 16.6919 334.832 16.4456H334.929C335.024 16.6865 335.167 16.9054 335.351 17.0888C335.538 17.2751 335.751 17.4331 335.984 17.5577C336.214 17.6882 336.459 17.7911 336.714 17.8642C336.947 17.9336 337.188 17.97 337.431 17.9724H349.492C350.349 17.9807 351.201 17.857 352.019 17.6057C352.764 17.3833 353.454 17.0087 354.045 16.5057C354.635 15.9995 355.101 15.3665 355.408 14.6544C356.076 12.9747 356.076 11.1045 355.408 9.42485V9.41283ZM331.413 15.0992H319.991C319.991 15.0391 320.148 14.8587 320.365 14.5582C320.582 14.2576 320.878 13.897 321.245 13.4822C321.613 13.0675 322.029 12.6167 322.518 12.1478C323.016 11.6684 323.552 11.2301 324.122 10.8374C324.704 10.4355 325.332 10.1027 325.991 9.84562C326.651 9.58929 327.352 9.4588 328.06 9.46093C328.913 9.41845 329.762 9.60969 330.514 10.0139C331.117 10.3866 331.413 11.0839 331.413 12.0997V15.0992ZM352.128 13.2959C352.015 13.6659 351.835 14.0123 351.597 14.3178C351.358 14.6083 351.057 14.8424 350.717 15.003C350.34 15.1816 349.927 15.2701 349.51 15.2615C349.112 15.2892 348.712 15.2226 348.344 15.0669C347.976 14.9112 347.651 14.671 347.394 14.3658C346.905 13.6906 346.659 12.8713 346.694 12.0396C346.691 11.6083 346.752 11.1789 346.875 10.7653C346.987 10.3884 347.169 10.0357 347.412 9.7254C347.644 9.42563 347.943 9.18468 348.286 9.02213C348.673 8.85573 349.089 8.7699 349.51 8.7699C349.931 8.7699 350.348 8.85573 350.735 9.02213C351.079 9.18522 351.38 9.426 351.615 9.7254C351.853 10.0374 352.033 10.3897 352.146 10.7653C352.269 11.1789 352.33 11.6083 352.327 12.0396C352.322 12.4559 352.255 12.8692 352.128 13.2658V13.2959Z" fill="#FFFFFF"/>
                            <path d="M164.32 37.4351V37.399C164.302 36.5219 164.463 35.6503 164.794 34.8371C165.124 34.0238 165.616 33.2858 166.241 32.6677C166.866 32.0496 167.61 31.5642 168.428 31.241C169.246 30.9177 170.122 30.7633 171.001 30.787C171.934 30.7421 172.866 30.8939 173.736 31.2326C174.606 31.5713 175.394 32.0893 176.049 32.7526L174.24 34.8143C173.378 33.928 172.203 33.4125 170.965 33.3777C168.806 33.3777 167.25 35.181 167.25 37.351V37.387C167.25 39.575 168.77 41.4023 170.965 41.4023C172.431 41.4023 173.323 40.8012 174.33 39.9056L176.139 41.7089C175.493 42.4594 174.685 43.0543 173.776 43.4489C172.866 43.8434 171.878 44.0274 170.887 43.987C170.02 44 169.16 43.8394 168.357 43.5146C167.554 43.1899 166.824 42.7077 166.212 42.0966C165.599 41.4855 165.116 40.758 164.791 39.9572C164.466 39.1565 164.306 38.2988 164.32 37.4351Z" fill="#FFFFFF"/>
                            <path d="M179.131 31.0167H184.987C185.664 30.9746 186.343 31.0678 186.984 31.2908C187.625 31.5137 188.215 31.8619 188.719 32.315C189.088 32.7034 189.375 33.1615 189.564 33.6621C189.752 34.1628 189.838 34.696 189.817 35.2303V35.2664C189.858 36.1352 189.612 36.9935 189.117 37.7092C188.621 38.4249 187.903 38.9584 187.073 39.2276L190.203 43.7839H186.904L184.16 39.7145H181.947V43.7959H179.131V31.0167ZM184.8 37.2199C186.175 37.2199 186.958 36.4926 186.958 35.4167V35.3806C186.958 34.1784 186.12 33.5773 184.745 33.5773H181.947V37.244L184.8 37.2199Z" fill="#FFFFFF"/>
                            <path d="M193.086 31.0164H202.735V33.5169H195.896V36.1076H201.927V38.6082H195.896V41.2891H202.849V43.7836H193.086V31.0164ZM199.038 27.1514L201.45 28.1912L198.966 29.9945H196.843L199.038 27.1514Z" fill="#FFFFFF"/>
                            <path d="M206.088 31.0156H211.087C215.116 31.0156 217.896 33.7686 217.896 37.3632V37.3992C217.896 41.0058 215.116 43.7828 211.087 43.7828H206.088V31.0156ZM211.087 41.2342C211.599 41.2645 212.112 41.1867 212.592 41.006C213.072 40.8253 213.509 40.5457 213.873 40.1855C214.237 39.8253 214.521 39.3926 214.706 38.9156C214.891 38.4386 214.973 37.928 214.947 37.4173V37.3812C214.973 36.8692 214.891 36.3574 214.706 35.879C214.521 35.4005 214.238 34.966 213.874 34.6035C213.51 34.241 213.074 33.9585 212.594 33.7743C212.114 33.5901 211.601 33.5083 211.087 33.5342H208.91V41.2342H211.087Z" fill="#FFFFFF"/>
                            <path d="M221.266 31.0156H224.082V43.7828H221.266V31.0156Z" fill="#FFFFFF"/>
                            <path d="M230.999 33.6071H227.104V31.0164H237.711V33.6071H233.815V43.7836H230.993L230.999 33.6071Z" fill="#FFFFFF"/>
                            <path d="M246.836 31.0166H251.829C255.858 31.0166 258.638 33.7696 258.638 37.3641V37.4002C258.638 41.0068 255.858 43.7838 251.829 43.7838H246.836V31.0166ZM251.829 41.2352C252.342 41.2654 252.855 41.1876 253.335 41.0069C253.815 40.8263 254.252 40.5468 254.617 40.1867C254.981 39.8266 255.266 39.394 255.452 38.917C255.637 38.4399 255.72 37.9293 255.695 37.4182V37.3822C255.721 36.8696 255.639 36.3573 255.453 35.8784C255.268 35.3995 254.984 34.9647 254.62 34.6021C254.256 34.2395 253.819 33.9572 253.338 33.7734C252.857 33.5896 252.343 33.5084 251.829 33.5352H249.652V41.2352H251.829Z" fill="#FFFFFF"/>
                            <path d="M261.684 38.3129V31.0156H264.5V38.2287C264.5 40.3085 265.543 41.3845 267.262 41.3845C268.981 41.3845 270.024 40.3446 270.024 38.3189V31.0156H272.846V38.2287C272.846 42.0938 270.669 43.9932 267.226 43.9932C263.782 43.9932 261.684 42.0697 261.684 38.3129Z" fill="#FFFFFF"/>
                            <path d="M282.675 31.0166H285.691L289.056 36.4264L292.427 31.0166H295.442V43.7838H292.644V35.4527L289.026 40.9046H288.953L285.383 35.4948V43.7718H282.621L282.675 31.0166Z" fill="#FFFFFF"/>
                            <path d="M303.685 30.9268H306.284L311.778 43.7841H308.829L307.665 40.9169H302.238L301.032 43.7781H298.197L303.685 30.9268ZM306.652 38.4404L304.951 34.3049L303.245 38.4464L306.652 38.4404Z" fill="#FFFFFF"/>
                            <path d="M314.486 31.016H320.33C321.008 30.9733 321.687 31.0661 322.328 31.2891C322.969 31.5121 323.559 31.8607 324.063 32.3143C324.433 32.702 324.72 33.1599 324.909 33.6607C325.098 34.1616 325.183 34.6952 325.16 35.2296V35.2657C325.202 36.1345 324.956 36.9928 324.46 37.7085C323.964 38.4242 323.246 38.9577 322.416 39.2269L325.546 43.7832H322.254L319.522 39.7138H317.315V43.7952H314.498L314.486 31.016ZM320.161 37.2193C321.536 37.2193 322.32 36.4919 322.32 35.416V35.3799C322.32 34.1777 321.476 33.5766 320.107 33.5766H317.315V37.2433L320.161 37.2193Z" fill="#FFFFFF"/>
                            <path d="M327.885 37.4363V37.4003C327.954 35.6495 328.699 33.9932 329.965 32.7772C331.23 31.5612 332.918 30.8797 334.676 30.875C336.434 30.8704 338.125 31.5429 339.397 32.7522C340.669 33.9615 341.423 35.6139 341.502 37.3642V37.4003C341.433 39.151 340.687 40.8074 339.422 42.0233C338.156 43.2393 336.468 43.9208 334.711 43.9255C332.953 43.9302 331.261 43.2576 329.989 42.0483C328.717 40.8391 327.963 39.1867 327.885 37.4363ZM338.553 37.4363V37.4003C338.571 36.8811 338.483 36.3637 338.297 35.8787C338.11 35.3938 337.827 34.9512 337.466 34.5772C337.104 34.2032 336.671 33.9055 336.191 33.7017C335.712 33.498 335.196 33.3923 334.675 33.391C334.158 33.3889 333.645 33.4914 333.169 33.6922C332.692 33.893 332.261 34.1879 331.902 34.5592C331.543 34.9306 331.264 35.3706 331.08 35.8527C330.896 36.3347 330.812 36.8489 330.834 37.3642V37.4003C330.816 37.9197 330.903 38.4374 331.09 38.9227C331.276 39.408 331.559 39.851 331.92 40.2254C332.282 40.5999 332.715 40.8982 333.195 41.1026C333.674 41.307 334.19 41.4134 334.711 41.4156C335.229 41.4176 335.742 41.315 336.219 41.1139C336.696 40.9127 337.127 40.6172 337.486 40.2452C337.845 39.8732 338.125 39.4325 338.308 38.9497C338.492 38.4669 338.575 37.9521 338.553 37.4363Z" fill="#FFFFFF"/>
                            <path d="M344.175 37.4354V37.3993C344.158 36.5224 344.32 35.6512 344.651 34.8383C344.981 34.0255 345.474 33.2878 346.098 32.6699C346.723 32.0519 347.466 31.5665 348.284 31.243C349.102 30.9194 349.977 30.7644 350.857 30.7873C351.791 30.7415 352.723 30.8929 353.594 31.2317C354.465 31.5704 355.255 32.0888 355.91 32.7529L354.101 34.8146C353.24 33.9272 352.065 33.4115 350.827 33.378C348.668 33.378 347.112 35.1813 347.112 37.3512V37.3873C347.112 39.5753 348.632 41.4026 350.827 41.4026C352.292 41.4026 353.185 40.8015 354.192 39.9059L356.001 41.7092C355.355 42.46 354.547 43.0552 353.637 43.4498C352.727 43.8444 351.74 44.0281 350.748 43.9873C349.881 44.0011 349.02 43.8411 348.217 43.5167C347.413 43.1923 346.683 42.7102 346.069 42.099C345.456 41.4879 344.973 40.7601 344.647 39.9589C344.322 39.1578 344.161 38.2996 344.175 37.4354Z" fill="#FFFFFF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_1319">
                            <rect width="356" height="44" fill="white"/>
                            </clipPath>
                            </defs>
                </svg>
            </div>

            <div className='flex gap-12'>
                <NavLink 
                    to={"/"} 
                    className={({ isActive }) => (isActive ? 'block py-2 pl-3 pr-4 text-white  md:bg-transparent md:text-blue- hover:text-primary md:p-0 dark:text-white' : 'block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent')} >
                    Home
                </NavLink>
                <NavLink 
                    to={"/About"} 
                    className={({ isActive }) => (isActive ? 'block py-2 pl-3 pr-4 text-white md:bg-transparent md:text-blue- hover:text-primary md:p-0 dark:text-white' : 'block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent')} >
                    About Us
                </NavLink>
                <NavLink 
                    to={"/Contact"} 
                    className={({ isActive }) => (isActive ? 'block py-2 pl-3 pr-4 text-white md:bg-transparent md:text-blue- hover:text-primary md:p-0 dark:text-white' : 'block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent')} >
                    Contact
                </NavLink>
            </div>

            <div className='flex gap-12 md:gap-4'>
                <img className='w-6 h-6' src={ linkedin } alt="linkedin"></img>
                <img className='w-6 h-6' src={ instagram } alt="instagram"></img>
                <img className='w-6 h-6' src={ facebook } alt="facebook"></img>
                <img className='w-6 h-6' src={ twitter } alt="twitter"></img>
            </div>
        </div>
    )
}

export default Footer