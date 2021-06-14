<template>
  <div >

    <TabMenu :model="navItems">
      <template #item="{item}">
        <a :href="item.url">{{item.label}}</a>
      </template>
    </TabMenu>

    <router-view></router-view>
  </div>
  <!--<f7-app v-bind="f7params" >-->

  <!--&lt;!&ndash; Left panel with cover effect&ndash;&gt;
  <f7-panel left cover theme-dark>
    <f7-view>
      <f7-page>
        <f7-navbar title="Left Panel"></f7-navbar>
        <f7-block>Left panel content goes here</f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>


  &lt;!&ndash; Right panel with reveal effect&ndash;&gt;
  <f7-panel right reveal theme-dark>
    <f7-view>
      <f7-page>
        <f7-navbar title="Right Panel"></f7-navbar>
        <f7-block>Right panel content goes here</f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>
-->


  <!--&lt;!&ndash; Your main view, should have "view-main" class &ndash;&gt;
  <f7-view main class="safe-areas" url="/"></f7-view>


    &lt;!&ndash; Popup &ndash;&gt;
    <f7-popup id="my-popup">
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>-->

    <!--<f7-login-screen id="my-login-screen"
      :opened="loginScreenOpened"
      @loginscreen:closed="loginScreenOpened = false"
      style="transition: 3s">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>
            <img class="logo_big" src="static/images/logo_big.png" alt="">
          </f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              label="Login Name"
              type="text"
              name="username"
              placeholder="Your username"
              v-model:value="username"
            ></f7-list-input>
            <f7-list-input
              label="Password"
              type="password"
              name="password"
              placeholder="Your password"
              v-model:value="password"
            ></f7-list-input>
          </f7-list>
          &lt;!&ndash;<f7-list>
            <router-link
                class="text-color-white"
                to="/assets"
              >Forgot password?
            </router-link>
          </f7-list>&ndash;&gt;
          <f7-list class="btn-group-2">
            <f7-list-button class="reg-btn" title="Registration" @click="alertLoginData"></f7-list-button>
            <f7-list-button class="log-btn" title="Login" @click="alertLoginData"></f7-list-button>
            &lt;!&ndash;<f7-block-footer>
              Some text about login information.<br>Click "Sign In" to close Login Screen
            </f7-block-footer>&ndash;&gt;
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>-->
<!--  </f7-app>-->
</template>
<script>
  import { ref, onMounted, computed, watch } from 'vue';
  import { useStore } from 'vuex'
  import { f7, f7ready } from 'framework7-vue';
  import { useI18n } from 'vue-i18n'
  import TabMenu from 'primevue/tabmenu';

  import routes from '../js/routes.js';

  export default {
    data() {
      return {
        loginScreenOpened: true,
        username: '',
        password: '',

        navItems: [
          {label: 'Prestarts', icon: 'icon icon-menu-profile', to: '/'},
          {label: 'Trips', icon: 'icon icon-menu-trips', to: '/trips'},
          {label: 'Assets', icon: 'icon icon-other-asset', to: { path: `/assets` }},/*
            {label: 'Employees', icon: 'icon icon-profile-name', to: '/assets'},
            {label: 'Faults', icon: 'icon icon-other-fail', to: '/assets'},
            {label: 'Checklists', icon: 'icon icon-other-checklist', to: '/assets'},
            {label: 'Groups', icon: 'icon icon-other-passed-items', to: '/assets'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/presets'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/'}*/
        ]

      }
    },
    components: {
      TabMenu
    },
    methods: {
      signIn() {
        f7.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
          f7.loginScreen.close();
        });
      },
    },
    setup() {
      const store = useStore()
      const { t } = useI18n()
      // Framework7 Parameters
      const f7params = {
        name: 'Dashboard', // App name
        theme: 'aurora', // Automatic theme detection

        // App routes
        routes: routes,

      };
      // Login screen data
      const username = ref('');
      const password = ref('');

      const alertLoginData = () => {
        setTimeout(x => f7.loginScreen.close(), 1000)
        console.log(username, password)
        /*f7.dialog.alert('Username: ' + username.value + '<br>Password: ' + password.value, () => {
          f7.loginScreen.close();
        });*/

      }

      let error = computed(() => store.state.ERROR )
      watch(error, (err) => {
        console.log(err)
        let msg = t('COM_MSG051') //"An issue has been detected, please try again later or contact our support team"
        if (err.method === "SIM_SEND_COMMAND" && err.MajorCode === '100'){
          msg = t('SIM_MANAGE_MSG015')
        }
        f7.dialog.alert(msg, 'Error')
      })



      onMounted(() => {

        /*f7ready(() => {
          // Call F7 APIs here
          let params = {}
          if(f7.views.main.router.currentRoute.query.MajorToken && f7.views.main.router.currentRoute.query.MinorToken){
            params = {
              MajorToken: f7.views.main.router.currentRoute.query.MajorToken,
              MinorToken: f7.views.main.router.currentRoute.query.MinorToken
            }
          }else{
          console.log('MOUNT1', f7.views.main.router.currentRoute.query)
            /!*params = {
              MajorToken: "aabc9ee0-b36d-4806-8e4d-b65899f7da7c",
              MinorToken: "196ee8a3-37f6-4438-bbee-3ba2f6264c36"
            }*!/
          }
          if(params.MajorToken && params.MinorToken){
            store.dispatch('GET_DASHBOARD', params)
            store.dispatch('GET_USAGE_OVERVIEW', params)
            store.dispatch('GET_USER_INFO', {code: params.MinorToken})
            store.dispatch('SIM_GET_COMMANDS', params)

            setInterval(()=>{
              store.dispatch('GET_DASHBOARD', params)
              store.dispatch('GET_USAGE_OVERVIEW', params)
            }, 60 * 2000)
          }

        });*/
      });

      return {
        f7params,
        username,
        password,
        alertLoginData,
        error
      }
    }
  }
</script>