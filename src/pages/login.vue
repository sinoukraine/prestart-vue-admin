<template>
  <!--<f7-login-screen id="my-login-screen">
      <f7-view>-->
        <f7-page login-screen>
          <f7-login-screen-title class="logo padding-horizontal">
            <img :src="logo" alt="">
          </f7-login-screen-title>

          <form @submit.prevent="signIn" autocomplete="off">
            <f7-list>
              <f7-list-input
                floating-label
                type="text"
                required
                validate
                name="username"
                class="custom-input"
                :label="$t('LOGIN_MSG000')"
                :placeholder="$t('LOGIN_MSG000')"
                :value="username"
                @input="username = $event.target.value"
              >
                <!--<f7-icon material="email" slot="media" class="text-color-gray"></f7-icon>-->
              </f7-list-input>
              <f7-list-input
                floating-label
                required
                validate
                :type="passwordType"
                name="password"
                class="custom-input"
                :label="$t('LOGIN_MSG001')"
                :placeholder="$t('LOGIN_MSG001')"
                :value="password"
                @input="password = $event.target.value"
              >
                <!--<f7-icon material="lock" slot="media" class="text-color-gray"></f7-icon>-->
                <!--<a href="/forget-password/" slot="content-end" class="margin-right link text-color-gray">{{$ml.get('AUTH_MSG003')}}</a>-->
                <div slot="content-end" @click="switchVisability('passwordType')" class="margin-right link">
                  <i class="f7-icons icon-password " :class="{'text-color-gray': passwordType === 'password'}"></i>
                </div>
              </f7-list-input>
            </f7-list>
            <f7-list no-hairlines-between no-hairlines>
              <f7-list-item >
                <f7-button
                  type="submit"
                  fill
                  large
                  class="color-custom"
                >{{ $t('LOGIN_MSG002') }}</f7-button>
              </f7-list-item>

            <!--  <f7-list-item
                link="/register/"
                no-chevron
                class="custom-item-link"
                :title="$ml.get('AUTH_MSG005')"

              >

              </f7-list-item>-->


            </f7-list>
          </form>


        </f7-page>
    <!--  </f7-view>
    </f7-login-screen>-->
</template>

<script>

  export default {
    name: "login-screen",

    data() {
      return {
        passwordType: 'password',
        logo: 'static/images/logowhite.svg',
        username: null,
        password: null,


      }
    },

    components:{

    },

    methods: {
      switchVisability(name) {
        this[name] = this[name] === 'password' ? 'text' : 'password';
      },
      async signIn() {
        const data = {
          LoginName: this.username.trim(),
          Password: this.password.trim(),
          "AppKey": 'com.monitoring.app',
          "MobileToken": 'webapp',
          "DeviceToken": 'webapp',
          "DeviceType": 'browser',
        };
        this.$f7.methods.hideKeyboard();

        this.$f7.progressbar.show();
        let result = await this.$store.dispatch('LOGIN', data);
        console.log(result)
        /*
        Vue.axios.defaults.headers.common["client-token"] = result['client_token'];*/
        this.$f7.progressbar.hide();
        if(!result){
          return
        }
        localStorage.USERNAME = data.LoginName;
        localStorage.PASSWORD = data.Password;
        this.$store.commit('SET_USER_INFO', result);
        this.$store.commit('SET_AUTH_STATE', true);
        //this.$store.dispatch('GET_ALL_STATIC_INFOS', {lang: result.lang});

        /*localStorage.USERNAME = data.username;
        localStorage.PASSWORD = data.password;
        this.$store.commit('SET_AUTH_STATE', true);*/

      },

    },
    async mounted() {
      //AUTOLOGIN GOES HERE
      if (localStorage.USERNAME && localStorage.PASSWORD){
        this.username = localStorage.USERNAME
        this.password = localStorage.PASSWORD
        this.signIn()
      }
    },
    beforeDestroy() {

    }
  }
</script>

<style lang="scss">


</style>