import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', {
  state: () => ({ 
    gameOptions: [
      {
        difficulty: 'Easy',
        cols: 9,
        rows: 9,
        prize: 19
      },
      {
        difficulty: 'Medium',
        cols: 16,
        rows: 16,
        prize: 57
      },
      {
        difficulty: 'Hard',
        cols: 16,
        rows: 30,
        prize: 99
      }
    ],
    shopItems: [
      {
        name: 'Fireboom',
        quantity: 1,
        price: 9000
      },
      {
        name: 'Fireboom',
        quantity: 3,
        price: 25000
      },
      {
        name: 'Fireboom',
        quantity: 9,
        price: 70000
      }
    ],
    icons: {
      'question-circle': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2C3034" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9.09003 8.99999C9.32513 8.33166 9.78918 7.7681 10.4 7.40912C11.0108 7.05015 11.7289 6.91893 12.4272 7.0387C13.1255 7.15848 13.7588 7.52151 14.2151 8.06352C14.6714 8.60552 14.9211 9.29151 14.92 9.99999C14.92 12 11.92 13 11.92 13" stroke="#2C3034" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 17H12.01" stroke="#2C3034" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>',
      'user': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.23019 18.2418C6.94749 16.6525 9.25912 16 12 16C14.7409 16 17.0525 16.6525 17.7698 18.2418C19.4488 16.689 20.5 14.4673 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.4673 4.55121 16.689 6.23019 18.2418ZM19.3172 5.18385C17.4916 3.22498 14.8889 2 12 2C6.47715 2 2 6.47715 2 12C2 14.8886 3.22477 17.4912 5.18335 19.3167C7.00887 21.2753 9.61142 22.5 12.5 22.5C18.0229 22.5 22.5 18.0229 22.5 12.5C22.5 9.61142 21.2757 7.00936 19.3172 5.18385ZM19.3617 5.23195L19.3172 5.18385C19.3321 5.19983 19.3469 5.21587 19.3617 5.23195ZM16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11Z" fill="#2C3034"/> </svg>',
      'flag': '<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17 4.5V21.5" stroke="#2C3034" stroke-width="2"/> <path d="M6 8.5L15 5.0359L15 11.9641L6 8.5Z" fill="#E65252" stroke="#E65252" stroke-width="2" stroke-linejoin="bevel"/> </svg>',
      'bomb': '<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12.5" r="8" fill="#2C3034" stroke="#2C3034" stroke-width="2"/> <path d="M12 4.5V1.5" stroke="#2C3034" stroke-width="2"/> <path d="M20 12.5H23M12 20.5V23.5M4 12.5H1M6.5 7L4 4.5M17.5 7L20 4.5M17.5 18L20 20.5M6.5 18L4 20.5" stroke="#2C3034" stroke-width="2"/> <rect x="8" y="8.5" width="2" height="2" fill="#F3EBEA"/> </svg>',
      'bomb-crossed': '<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12.5" r="8" fill="#2C3034" stroke="#2C3034" stroke-width="2"/> <path d="M12 4.5V1.5" stroke="#2C3034" stroke-width="2"/> <path d="M20 12.5H23M12 20.5V23.5M4 12.5H1M6.5 7L4 4.5M17.5 7L20 4.5M17.5 18L20 20.5M6.5 18L4 20.5" stroke="#2C3034" stroke-width="2"/> <rect x="8" y="8.5" width="2" height="2" fill="#F3EBEA"/> <path d="M2 22.5L22 2.5" stroke="#E65252" stroke-width="2"/> <path d="M22 22.5L2 2.5" stroke="#E65252" stroke-width="2"/> </svg>',
      'arrow-right': '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 12.5H22M22 12.5C21.058 12.5 15 13.1 15 17.5M22 12.5C21.058 12.5 15 11.9 15 7.5" stroke="#2C3034" stroke-width="2" stroke-linecap="round"/> </svg>',
      'reload': '<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_205_495)"> <path d="M13.7678 8.81808C15.8891 6.69676 18.7585 9.5662 19.4246 10.2323C18.7585 9.5662 15.8891 6.69676 18.0104 4.57544" stroke="#2C3034" stroke-width="2" stroke-linecap="round"/> <path d="M16.2318 7.06111C13.0898 4.28412 8.28793 4.39834 5.28248 7.4038C2.15829 10.528 2.15829 15.5933 5.28248 18.7175C8.40668 21.8417 13.472 21.8417 16.5962 18.7175C17.6266 17.6871 18.3171 16.4456 18.6678 15.1323" stroke="#2C3034" stroke-width="2"/> </g> <defs> <clipPath id="clip0_205_495"> <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/> </clipPath> </defs> </svg>',
      'logout': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.702 3.99999C14.003 3.9992 14.3012 4.05771 14.5796 4.17216C14.8579 4.28662 15.1111 4.45478 15.3244 4.66706C15.5378 4.87933 15.7073 5.13156 15.8232 5.40934C15.9391 5.68711 15.9992 5.985 16 6.28599V7.30199C16 7.72199 15.657 8.06299 15.234 8.06299C15.0315 8.06352 14.8372 7.98368 14.6935 7.84099C14.5499 7.6983 14.4688 7.50444 14.468 7.30199V6.28599C14.4677 6.18566 14.4477 6.08637 14.4091 5.99377C14.3704 5.90118 14.3139 5.81711 14.2428 5.74635C14.1717 5.67559 14.0873 5.61953 13.9945 5.58138C13.9017 5.54323 13.8023 5.52373 13.702 5.52399H6.553C6.45267 5.52373 6.35327 5.54323 6.26048 5.58138C6.16768 5.61953 6.08331 5.67559 6.01218 5.74635C5.94105 5.81711 5.88456 5.90118 5.84592 5.99377C5.80728 6.08637 5.78726 6.18566 5.787 6.28599V17.46C5.787 17.881 6.13 18.222 6.553 18.222H13.703C13.9055 18.2223 14.0997 18.1422 14.2432 17.9993C14.3866 17.8564 14.4675 17.6624 14.468 17.46V16.444C14.468 16.024 14.811 15.683 15.234 15.683C15.657 15.683 16 16.023 16 16.444V17.46C16 18.277 15.57 18.993 14.922 19.397C14.642 19.764 14.2 20 13.702 20H6.042C5.023 20 4 18.984 4 17.968V6.28599C4 5.78999 4.238 5.34999 4.606 5.07199C4.81352 4.74335 5.10094 4.47266 5.44141 4.2852C5.78189 4.09773 6.16433 3.99961 6.553 3.99999H13.703H13.702Z" fill="#D63E3E"/> <path d="M10 12H19M17 14C17 12.24 19.596 12 20 12C19.596 12 17 11.76 17 10" stroke="#D63E3E" stroke-width="1.5" stroke-linecap="round"/> </svg>',
    },
  })
})