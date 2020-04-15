import React, { useState } from 'react';

import HEADER_LINKS from './../../constants/content--header-links';
import './header.css';

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  window.onscroll = () => {
    if (window.scrollY > 0) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  }

  const scrollTo = (item) => {
    let scrollHeight = 0;
    if (item !== 'home') {
      let obj = document.getElementById(item);
      scrollHeight = obj.offsetTop - 64;
    }

    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth'
    });
  }

  let headerLinks = HEADER_LINKS.map((link, index) => {
    return(
      <div 
        key={index}
        className='header__link'
        onClick={() => scrollTo(link.id)}
      >
        {link.text}
      </div>
    );
  });

  return (
    <div 
      id='header'
      className={isTransparent ? 'header--transparent' : ''}
    >
      <svg 
        className='header__site-logo' 
        onClick={() => scrollTo('home')}
        viewBox="0 0 128 128" version="1.1"
      >
        <path d="M64.0641848,127.541834 C28.8114029,132.349031 3.51654327,98.9317121 0.233376641,63.8579003 C-3.04978998,28.7840886 28.8114029,2.83067188 64.0641848,0.173967112 C99.3169668,-2.48273765 130.029334,26.4788719 127.894993,63.8579003 C125.760652,101.236929 99.3169668,122.734636 64.0641848,127.541834 Z M42.6810238,91.324559 L44.6078171,91.0193849 L46.6491818,90.63304 C47.2577473,90.4526195 47.8691691,90.1562041 48.4834657,89.7437847 C49.0977623,89.3313654 49.490263,88.8595439 49.6609797,88.3283061 L49.6220284,88.0823772 C49.4532386,87.0166799 48.1879189,86.6708796 45.8260314,87.0449658 L42.3745861,87.7806947 L39.3655971,68.782686 C39.5687734,68.45639 39.98113,68.2440233 40.6026794,68.1455796 L41.4106895,68.0176034 L42.1662828,67.9609537 C42.6220856,67.8887616 42.9745325,67.6333638 43.2236339,67.1947525 C43.4727353,66.7561413 43.5583333,66.2909125 43.4804303,65.7990522 C43.4090192,65.3481802 43.1592619,64.9780824 42.731151,64.6887476 C42.3030401,64.3994128 41.8610899,64.2908431 41.405287,64.3630352 C40.8666109,64.4483531 40.2023924,64.6796028 39.4126115,65.0567913 L38.5716602,65.3790585 L38.1506511,61.9163651 C38.0217762,60.2981304 37.8956674,59.0996416 37.7723209,58.3208628 L37.1124311,54.9590289 L36.7154627,53.2572152 C36.2381041,51.3160257 35.8890675,49.6486539 35.6683423,48.2550497 C35.7447236,48.2009355 35.9693757,48.1443462 36.3423053,48.0852799 C36.6737982,48.0327766 36.9670962,48.0073307 37.2222078,48.0089416 L38.0923725,47.871121 C39.9984571,47.5692269 40.8541078,46.8034659 40.6593503,45.5738152 C40.5749553,45.0409666 40.1911524,44.6290756 39.5079298,44.33813 C38.8247073,44.0471843 38.1516131,43.9542162 37.4886272,44.0592229 C36.8256412,44.1642295 36.0720588,44.3676171 35.2278575,44.6693918 C34.3007828,44.9842923 33.5472005,45.1876799 32.9670877,45.2795607 C32.6875301,45.6599709 32.2864329,46.4797855 31.763784,47.7390291 L31.7929975,47.9234758 C31.9228359,48.7432429 32.2334033,49.7654605 32.7247091,50.9901592 C33.1940541,52.3443858 33.4839035,53.3698848 33.5942661,54.0666869 L39.2519444,89.7878617 C39.4012585,90.7305939 39.84435,91.2486384 40.5812321,91.3420106 C41.1938044,91.4550715 41.893728,91.4492544 42.6810238,91.324559 Z M59.1868185,89.1110792 C59.9255559,88.9940747 60.461061,88.656459 60.79335,88.0982221 C61.1627187,88.0397198 61.4942965,88.0082697 61.7880933,88.0038708 L62.8346327,87.8381153 C63.3681653,87.753612 63.7547936,87.6713094 63.9945293,87.5912051 L64.2505389,87.6138578 C64.5918868,87.6440615 64.8241186,87.6494129 64.9472415,87.6299122 C65.3576512,87.5649097 65.6890869,87.3333487 65.9415587,86.9352224 C66.1940305,86.5370961 66.2844597,86.1119736 66.2128491,85.6598419 C66.1151983,85.0432988 65.5866252,84.4950166 64.6271141,84.0149787 L59.8869063,84.7657539 L59.6330154,83.1627498 C58.5067758,76.0519527 57.5989207,70.7184095 56.909423,67.1619603 L56.6750621,65.6822642 L56.4963206,64.9521665 C56.190348,63.0203314 55.5018509,59.3373787 54.4308086,53.9031977 C53.4033562,49.0098544 52.6943389,45.3301517 52.3037356,42.8639793 C52.2256149,42.3707448 51.9742062,41.9786974 51.5495021,41.6878252 C51.1247979,41.396953 50.6662069,41.2905201 50.1737153,41.3685231 C49.7633057,41.4335256 49.4323651,41.6018081 49.1808836,41.8733756 C48.9294022,42.1449432 48.8329582,42.4656851 48.8915487,42.8356109 C49.7053056,47.9734701 51.0204552,54.9489042 52.8370369,63.7621224 C54.8944906,74.0961469 56.2128952,81.0921321 56.7922901,84.7502879 C56.8378605,85.038008 56.8446545,85.4793319 56.8126724,86.0742729 C56.7331393,86.6346113 56.7226681,87.0997364 56.7812586,87.4696623 C56.8658893,88.0039996 57.1545882,88.4322742 57.6473639,88.7544989 C58.1401395,89.0767236 58.653286,89.1955825 59.1868185,89.1110792 Z M76.3012292,86.0667329 C77.5055977,85.8759797 77.9489315,84.7777192 77.6312439,82.7719185 C77.3913573,81.2573343 77.0165491,79.4284553 76.506808,77.2852266 C76.0035503,75.1829326 75.6287421,73.3540536 75.3823721,71.7985347 C75.1749027,70.488624 74.6982883,68.1513577 73.9525146,64.7866654 C73.3520056,62.0703508 72.8961559,59.7297956 72.5849517,57.7649296 C72.3515485,56.2912801 72.1616052,54.9576333 72.0151159,53.7639491 L71.4550052,49.8243703 C71.0984171,47.5729614 70.5543401,45.0785362 69.8227578,42.34102 L70.4457039,42.242355 C70.8610034,42.176578 71.238009,42.1378467 71.576732,42.1261598 L72.70776,42.0099646 C73.2476494,41.9244546 73.6697771,41.7002425 73.974156,41.3373218 C74.2785349,40.974401 74.3918222,40.5473388 74.3140211,40.0561223 C74.2362201,39.5649058 73.9637402,39.1884529 73.4965734,38.9267522 C73.0294065,38.6650515 72.5466507,38.5736687 72.0482913,38.6526011 C71.7575816,38.698645 70.9127138,38.8744199 69.5136624,39.179931 C66.0575639,39.9371311 63.6416774,40.6764381 62.2659303,41.397874 C61.3275623,41.9241511 60.8972853,42.4328902 60.9750863,42.9241067 C61.0528874,43.4153232 61.3237464,43.7815426 61.7876716,44.022776 C62.2515967,44.2640093 62.7534964,44.3418698 63.2933857,44.2563597 L65.0181846,43.8572943 C65.8293333,43.6029362 66.3594895,43.4560263 66.6086692,43.4165601 C67.1536371,44.1694773 67.6627583,46.0400246 68.136048,49.0282583 C68.3240672,50.2153648 68.462144,51.2215389 68.5502824,52.0468108 C68.666984,52.7836355 68.7425057,53.3276566 68.7768498,53.6788905 C68.8111939,54.0301244 68.8380907,54.2671398 68.857541,54.3899439 C69.0844607,55.8226587 69.7355126,58.9924964 70.8107161,63.8995522 C71.8859197,68.8066079 72.5369715,71.9764456 72.7638913,73.4091604 L73.1547314,76.6831864 L73.2829943,78.299365 C73.4280787,80.2905417 73.6075947,81.9615277 73.8215476,83.3123731 C73.9576994,84.1720019 74.249278,84.8706273 74.6962922,85.4082701 C75.1433063,85.945913 75.67828,86.1653984 76.3012292,86.0667329 Z M92.310132,83.9720174 C92.8833852,83.881223 93.3470628,83.6286672 93.7011785,83.2143424 C94.0552942,82.8000175 94.1932788,82.346176 94.1151364,81.8528042 L93.8709426,80.311025 L93.5136771,78.8503727 L93.1661794,77.4513917 L91.7442288,69.2685821 C91.0418326,65.6288638 90.5506366,62.9250873 90.2706263,61.1571716 L90.1143422,60.1704329 C90.05386,60.0535753 90.0157271,59.6803094 89.9999424,59.050624 L89.9664977,58.0444294 C89.5888093,55.659799 89.5299173,52.1078686 89.7898198,47.3885318 C90.0497223,42.6691949 89.9940861,39.1378214 89.6229097,36.7943053 C89.557791,36.3831621 88.9724605,36.265144 87.8669006,36.4402475 C87.2936473,36.5310419 86.8739242,37.0611152 86.6077187,38.0304834 C86.3694361,38.9111376 86.2307091,40.1553166 86.1915335,41.7630579 C86.1811663,44.0827132 86.3233831,46.9681977 86.6181882,50.419598 C86.7056034,51.5015409 86.7399855,52.3811417 86.7213354,53.0584267 L85.6773574,50.4421745 L84.2049265,46.3133269 C84.0644263,45.9562686 83.6159474,44.8472389 82.8594764,42.9862044 C82.1030053,41.1251699 81.3944461,39.6990998 80.7337776,38.7079513 C80.174538,37.8271752 79.6697191,37.4224624 79.2193058,37.4938008 C78.8507859,37.5521687 78.5190239,37.7100773 78.22401,37.9675314 C77.928996,38.2249855 77.8042824,38.4976085 77.8498655,38.7854088 C78.0908046,40.3066385 78.597642,42.0491374 79.3703927,44.0129577 C80.1431435,45.976778 80.9970845,47.7907362 81.9322415,49.4548869 C82.9213688,51.1947809 83.8006667,53.0363318 84.5701615,54.9795949 C85.3396563,56.9228581 85.8481216,58.6756354 86.0955726,60.2379794 C86.2974405,61.5125233 86.7854328,63.2685432 87.559564,65.5060919 C88.2992604,67.7912402 88.7635238,69.5299459 88.952368,70.7222611 C89.1607478,72.0379193 89.4151496,74.0416616 89.715581,76.7335482 L90.5402137,82.7351074 C90.6053324,83.1462506 90.8142301,83.4713975 91.1669132,83.7105579 C91.5195962,83.9497183 91.9006653,84.0368706 92.310132,83.9720174 Z"></path>
      </svg>
      <div className='header__links'>
        {headerLinks}
      </div>
    </div>
  );
};

export default Header;