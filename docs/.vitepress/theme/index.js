import DefaultTheme from 'vitepress/theme'
import {onMounted} from "vue";
import './custom.css'

export default {
  ...DefaultTheme,
  setup() {
    const defaultSetup = DefaultTheme.setup ? DefaultTheme.setup() : undefined;

    const setImg = (button, img) => {
      console.log(button.getAttribute('title'))
      if (!button.getAttribute('title').includes('dark')) img.setAttribute('src', 'allcance-logo-white.png');
      else img.setAttribute('src', 'allcance-logo-black.png');
    }

    onMounted(() => {
      const img = document.querySelector('.VPNavBarTitle img:last-child');
      setTimeout(() => {setImg(document.querySelector('.VPSwitch.VPSwitchAppearance'), img)}, 1000);

      document.addEventListener("click", (event) => {
        const button = event.target.closest('.VPSwitch.VPSwitchAppearance');
        if (button) {
          button.addEventListener('click', () => {
            setImg(button, img)
          })
        }
      });
    });

    return defaultSetup;
  },
};
