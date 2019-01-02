// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "es6-promise/auto";
import App from "./App";
import Vue from "vue";
import router from "./router";
import "./fonts.sass";
import "vue-popperjs/dist/css/vue-popper.css";
import VueProgressiveImage from "vue-progressive-image";
import store from "./store";
import VeeValidate from "vee-validate";

import BlurryImageLoader from "@/components/BlurryImageLoader";
import BaseButton from "@/components/BaseButton";
import BaseIcon from "@/components/BaseIcon";
import ExternalLink from "@/components/ExternalLink";
import FadeTranslateTransitionGroup from "@/components/FadeTranslateTransitionGroup";
import InternalLink from "@/components/InternalLink";
import SlideToLink from "@/components/SlideToLink";
import MainTitle from "@/components/MainTitle";
import ContentPreloader from "@/components/ContentPreloader";

Vue.component("fade-translate-transition-group", FadeTranslateTransitionGroup);
Vue.component("main-title", MainTitle);
Vue.component("content-preloader", ContentPreloader);
Vue.component("internal-link", InternalLink);
Vue.component("slide-to-link", SlideToLink);
Vue.component("blurry-image-loader", BlurryImageLoader);
Vue.component("base-button", BaseButton);
Vue.component("base-icon", BaseIcon);
Vue.component("external-link", ExternalLink);

Vue.use(VeeValidate);

Vue.use(VueProgressiveImage, {
  blur: 30,
  delay: 1000
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
