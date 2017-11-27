import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'weui'
import weui from 'weui.js'

Vue.use(MintUI)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

Vue.http.options.emulateJSON = true;
//Vue.http.options.root = 'http://192.168.0.194:8080/';
//Vue.http.options.root = 'http://192.168.0.146:8081/';
Vue.http.options.root = 'http://www.idenger.com:8415/';
Vue.config.productionTip = false;

Vue.http.interceptors.push(function(request, next) {
  var loading = weui.loading('loading', {className: 'custom-classname'});
  let token= this.$store.state.userObj.tokenId;
  request.headers.set('tokenId',token);

  next(function(response) {
      loading.hide();
      if(response.data.responseMsg.message==='success'){
          console.log('success')
      }else if(response.data.data[0]=='1001,Token不存在'){
          this.$store.commit('exitFunc')
      }
  });
});

(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 200 * (clientWidth / 750) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0)
  next();

})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})











