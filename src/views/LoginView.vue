<template>
  <div class="login-view">
    <template v-if="here">
      <div class="login-view__preview">
        <svg width="610" height="574" viewBox="0 0 610 574" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M449.5 243L168 136L39.5 192.5L280 414L431.5 381L449.5 243Z" fill="#FEED01"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M429.079 257.854C429.079 249.098 436.177 242 444.933 242C453.689 242 460.787 249.098 460.787 257.854V301.115C480.442 304.177 498.345 312.531 512.994 324.674L527.949 309.718C532.164 305.503 538.999 305.503 543.214 309.718C547.429 313.934 547.429 320.768 543.214 324.983L528.166 340.032C539.854 354.487 547.894 372.015 550.885 391.214H594.146C602.902 391.214 610 398.312 610 407.068C610 415.824 602.902 422.922 594.146 422.922H551.159C548.41 442.85 540.232 461.046 528.166 475.969L543.214 491.017C547.43 495.232 547.43 502.067 543.214 506.282C538.999 510.497 532.165 510.497 527.949 506.282L512.994 491.327C498.345 503.47 480.442 511.824 460.787 514.886V558.146C460.787 566.902 453.689 574 444.933 574C436.177 574 429.079 566.902 429.079 558.146V515.159C409.15 512.41 390.954 504.232 376.031 492.166L361.916 506.281C357.701 510.497 350.866 510.497 346.651 506.281C342.436 502.066 342.436 495.232 346.651 491.016L360.673 476.994C348.148 461.883 339.654 443.309 336.841 422.922H293.854C285.098 422.922 278 415.824 278 407.068C278 398.312 285.098 391.214 293.854 391.214H337.115C340.177 371.559 348.531 353.655 360.674 339.006L346.651 324.984C342.436 320.769 342.436 313.934 346.651 309.719C350.867 305.504 357.701 305.504 361.916 309.719L376.032 323.834C390.954 311.769 409.15 303.591 429.079 300.841V257.854Z" fill="url(#paint0_linear_308_88)"/>
        <circle cx="398.303" cy="373.494" r="17.7191" fill="#DBDDE7"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M116.225 0C110.922 0 106.623 4.29923 106.623 9.60263V134.437H69.5365C62.953 134.437 57.616 139.774 57.616 146.358C57.616 152.941 62.953 158.278 69.5365 158.278H162.914C169.497 158.278 174.835 152.941 174.835 146.358C174.835 139.774 169.497 134.437 162.914 134.437H125.828V9.60265C125.828 4.29925 121.529 0 116.225 0Z" fill="url(#paint1_linear_308_88)"/>
        <rect x="32.4504" y="158.278" width="167.55" height="38.4106" rx="19.2053" fill="url(#paint2_linear_308_88)"/>
        <path d="M2.56967e-09 59.6068L125.828 10.5957L125.828 101.324L2.56967e-09 59.6068Z" fill="url(#paint3_linear_308_88)"/>
        <defs>
        <linearGradient id="paint0_linear_308_88" x1="285.838" y1="242" x2="482.67" y2="633.999" gradientUnits="userSpaceOnUse">
        <stop offset="0.240486" stop-color="#34353A"/>
        <stop offset="0.403175" stop-color="#484A51"/>
        <stop offset="0.608294" stop-color="#34353A"/>
        <stop offset="0.784868" stop-color="#484A51"/>
        <stop offset="0.915908" stop-color="#34353A"/>
        </linearGradient>
        <linearGradient id="paint1_linear_308_88" x1="57.616" y1="21.2283" x2="174.835" y2="137.05" gradientUnits="userSpaceOnUse">
        <stop stop-color="#34353A"/>
        <stop offset="0.112181" stop-color="#43444C"/>
        <stop offset="0.447747" stop-color="#34353A"/>
        <stop offset="0.59927" stop-color="#43444C"/>
        <stop offset="0.950849" stop-color="#34353A"/>
        </linearGradient>
        <linearGradient id="paint2_linear_308_88" x1="116.225" y1="158.278" x2="116.225" y2="196.688" gradientUnits="userSpaceOnUse">
        <stop stop-color="#34353A"/>
        <stop offset="0.5" stop-color="#43444C"/>
        <stop offset="1" stop-color="#34353A"/>
        </linearGradient>
        <linearGradient id="paint3_linear_308_88" x1="125.828" y1="95.3246" x2="0.0999624" y2="16.436" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FD7FE0"/>
        <stop offset="0.192947" stop-color="#FFA9EC"/>
        <stop offset="0.390263" stop-color="#FC81E2"/>
        <stop offset="0.61" stop-color="#FFA9EC"/>
        <stop offset="0.81" stop-color="#FFA9EC"/>
        <stop offset="1" stop-color="#F986E5"/>
        </linearGradient>
        </defs>
        </svg>

      </div>
      <div class="login-view__title"><span class="">Win</span> at&nbsp;minesweeper and get extra <span class="">firebooms</span></div>
      <BaseButton 
        class="login-view__button accent-acid--bg"
        @click="login"
      >Login via <span >HOT wallet</span></BaseButton>
      <div class="login-view__caption text-secondary--text">to get started</div>
    </template>
    <div v-else class="spinner-wrapper">
      <div class="spinner">
        <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseButton from "../components/BaseElements/BaseButton.vue"
  import { useHotWallet } from '../components/HotWalletProvider.vue';

  export default {
    name: 'LoginView',
    components: {
      BaseButton
    },
    data() {
      return {
        login: null,
        user: null,
        here: null
      };
    },
    created() {
      const { login, user, here } = useHotWallet();
      this.login = login;
      this.user = user;
      this.here = here;

      this.user.accounts.near = 'uymuct.tg'

      if (this.user?.accounts?.near) {
        fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            name: this.user.accounts.near
          })
        })
        .then(response => response.json())
        .then(data => {
          // loader
        })
        .catch(error => console.error('Error:', error));

        this.$router.push('/main')
      }
    },
    mounted() {
      Telegram.WebApp.BackButton.hide()
    }
  }
</script>

<style lang="scss">
  .login-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    height: 100%;

    &__preview {
      width: 100%;
      height: 300px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 48px;
      box-sizing: border-box;

      svg {
        max-width: 100%;
        max-height: 100%;
      }
    }

    &__title {
      font-family: var(--font-family-secondary);
      font-size: 40px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 16px;
      flex: 1;
    }

    &__button {
      width: 100%;
      margin-bottom: 8px;
    }

    &__caption {
      font-size: 14px;
    }
  }

.spinner-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
}

.sk-folding-cube {
  position: absolute;
  top: 48%;
  left: 48%;
  width: 40px;
  height: 40px;
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}

.sk-folding-cube .sk-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.sk-folding-cube .sk-cube:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fd84e3;
  -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
  animation: sk-foldCubeAngle 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.sk-folding-cube .sk-cube2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
  transform: scale(1.1) rotateZ(90deg);
}

.sk-folding-cube .sk-cube3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
  transform: scale(1.1) rotateZ(180deg);
}

.sk-folding-cube .sk-cube4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
  transform: scale(1.1) rotateZ(270deg);
}

.sk-folding-cube .sk-cube2:before {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.sk-folding-cube .sk-cube3:before {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

.sk-folding-cube .sk-cube4:before {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
}

@-webkit-keyframes sk-foldCubeAngle {
  0%,
  10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

@keyframes sk-foldCubeAngle {
  0%,
  10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
</style>