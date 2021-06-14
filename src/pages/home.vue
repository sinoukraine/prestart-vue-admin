<template>
  <f7-page name="home">
    <f7-navbar>
      <f7-nav-left>
        <f7-link>
          <img class="logo" src="http://android.app.quiktrak.eu/prestart-admin/resources/images/logo_big.png" alt="">
        </f7-link>   
        <TabMenu :model="navItems">
          <template #item="{item}">
              <a :href="item.url">{{item.label}}</a>
          </template>
        </TabMenu>
      </f7-nav-left>
      <f7-nav-title></f7-nav-title>
      <f7-nav-right>
        <f7-link></f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <!--<f7-row class="">
        <f7-col v-if="isSolutionStatsLoaded" v-for="item in solutionStats" width="50" small="33" large="auto" :key="item.name">
          <div class="card margin-bottom">
            <div class="card-header">{{ item.name }}</div>
            <div class="card-content card-content-padding text-color-white" :class="item.bgColor">
              !-- Card content --
              <div class="display-flex justify-content-space-between">
                <div class="">
                  {{ numeralFormat(item.value) }}
                </div>
                <div v-if="item.valueSecond">
                  {{ numeralFormat(item.valueSecond, '+0,0') }}
                </div>
              </div>
            </div>
          </div>
        </f7-col>
        <f7-col v-else v-for="item in 6" width="50" small="33" large="auto" :key="item">
          <div class="card margin-bottom skeleton-text skeleton-effect-wave">
            <div class="card-header">header</div>
            <div class="card-content card-content-padding text-color-white " >
              !-- Card content --
              <div class="display-flex justify-content-space-between">
                <div class="">
                  value
                </div>
                <div class="">
                  value
                </div>
              </div>
            </div>
          </div>
        </f7-col>
      </f7-row>

      <f7-row class="">
        <f7-col width="100" large="75" >
          <f7-row>
            <f7-col width="100" medium="50">
              <f7-row>
                <f7-col v-if="isSimStatsLoaded" v-for="item in simStats" width="50">
                  <div class="card margin-bottom">
                    <div class="card-header">{{ item.name }}</div>
                    <div class="card-content card-content-padding text-color-white" :class="item.bgColor">
                      !-- Card content --
                      <div class="display-flex justify-content-space-between">
                        <div class="">
                          {{ numeralFormat(item.value, item.numeralFormat) }}
                        </div>
                        <div class="">
                          {{ item.valueSecond }}
                        </div>
                      </div>
                    </div>
                  </div>
                </f7-col>
                <f7-col v-else v-for="item in 4" width="50" :key="item">
                  <div class="card margin-bottom skeleton-text skeleton-effect-wave">
                    <div class="card-header">header</div>
                    <div class="card-content card-content-padding text-color-white" :class="item.bgColor">
                      !-- Card content --
                      <div class="display-flex justify-content-space-between">
                        <div class="">
                          value
                        </div>
                        <div class="">
                          value
                        </div>
                      </div>
                    </div>
                  </div>
                </f7-col>
              </f7-row>
            </f7-col>

            !--DATA SESSIONS BAR--
            <f7-col width="100" medium="50">
              <date-sessions-bar />
            </f7-col>
          </f7-row>
        </f7-col>

        !--TOTAL ACTIVATED ASSETS PER PERIOD--
        <f7-col width="100" large="25">
          <total-activated-assets-for-period />
        </f7-col>
      </f7-row>

      <f7-row>
        <f7-col width="100" large="75">
          <f7-row>
            <f7-col v-if="isSimStatsLoaded2" v-for="item in simStats2" width="50" small="33" large="auto" :key="item.name">
              <div class="card margin-bottom">
                <div class="card-header">{{ item.name }}</div>
                <div class="card-content card-content-padding" :class="item.bgColor">
                  !-- Card content --
                  <div class="display-flex justify-content-space-between">
                    <div class="">
                      {{ numeralFormat(item.value) }}
                    </div>
                  </div>
                </div>
              </div>
            </f7-col>
            <f7-col v-else v-for="item in 5" width="50" small="33" large="auto" :key="item">
              <div class="card margin-bottom skeleton-text skeleton-effect-wave">
                <div class="card-header">header</div>
                <div class="card-content card-content-padding text-color-white " >
                  !-- Card content --
                  <div class="display-flex justify-content-space-between">
                    <div class="">
                      value
                    </div>
                    <div class="">
                      value
                    </div>
                  </div>
                </div>
              </div>
            </f7-col>
          </f7-row>
        </f7-col>
        <f7-col width="100" large="25">
          !--CREDITS--
          <f7-row>
            <f7-col width="100">
              <credits />
            </f7-col>
          </f7-row>

        </f7-col>
      </f7-row>-->

      <f7-row>

        <!--TOP USAGE TABLE-->
         <f7-col width="100" large="100">
          <top-usage-table />
        </f7-col>


        <!--<f7-col width="100" large="25">
          <f7-row>
            <f7-col width="100" medium="50" large="100">
              <sms-usage />
            </f7-col>
            <f7-col width="100" medium="50" large="100">
              <total-sims-online />
            </f7-col>
            <f7-col width="100" medium="50" large="100">
              <average-sim-usage />
            </f7-col>
            <f7-col v-if="!IS_ROOT" width="100" medium="50" large="100">
              <f7-link :href="`${ parentUrl }Common/client/`" target="_blank" color="blue" class="col external button button-fill button-small">
                {{ $t('COM_MSG036') }}</f7-link>
            </f7-col>
          </f7-row>
        </f7-col>-->
      </f7-row>


    </f7-block>

  </f7-page>
</template>
<script>
import DateSessionsBar from '../components/data-sessions-bars'
import TotalActivatedAssetsForPeriod from '../components/total-activated-assets-for-period'
import SmsUsage from '../components/sms-usage'
import Credits from '../components/credits/credits'
import TopUsageTable from '../components/top-usage-table'
import TotalSimsOnline from '../components/total-sims-online'
import AverageSimUsage from '../components/average-sim-usage'
import {getParentUrl} from '../js/helper'
import TabMenu from 'primevue/tabmenu'

//import {computed, onMounted, reactive, watch} from "vue";
import { useStore, mapGetters } from 'vuex'
import { useI18n } from 'vue-i18n'

import { ref } from 'vue';

  export default {
    components: {
      TabMenu,
      DateSessionsBar,
      TotalActivatedAssetsForPeriod,
      SmsUsage,
      Credits,
      TopUsageTable,
      TotalSimsOnline,
      AverageSimUsage
    },
    setup() {
        const navItems = ref([
            {
                label: 'Prestarts', 
                icon: 'icon icon-menu-profile', 
                to: '/credits/transfer-history'
            },
            {label: 'Trips', icon: 'icon icon-menu-trips', to: '/assets'},
            {label: 'Assets', icon: 'icon icon-other-asset', to: '/assets'},
            {label: 'Employees', icon: 'icon icon-profile-name', to: '/assets'},
            {label: 'Faults', icon: 'icon icon-other-fail', to: '/assets'},
            {label: 'Checklists', icon: 'icon icon-other-checklist', to: '/assets'},
            {label: 'Groups', icon: 'icon icon-other-passed-items', to: '/assets'},
            {label: 'Home', icon: 'pi pi-fw pi-file', to: '/'},
            /*{label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/presets'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/'}*/
        ])
        
        return { navItems }
    },
    data(){
      return {
        isSolutionStatsLoaded: false,
        isSimStatsLoaded: false,
        isSimStatsLoaded2: false,
        solutionStats: [],
        simStats: [],
        simStats2: [],
        parentUrl: '',
      }
    },

    computed: {
      ...mapGetters(['AllSolutionStats', 'ActivatedPerDay', 'UsageOverview', 'AllSimsStates', 'IS_ROOT']),
    },

    watch: {
      AllSolutionStats(items){
        //console.log(items)
        const onStock = {
          name: 'OnStock',
          value: 0,
          valueSecond: 0,
          bgColor: 'bg-custom-color-1'
        }
        const protect = {
          name: 'Protect',
          value: 0,
          valueSecond: 0,
          bgColor: 'bg-custom-color-2'
        }
        const qProtect = {
          name: 'QProtect',
          value: 0,
          valueSecond: 0,
          bgColor: 'bg-custom-color-3'
        }
        const loc8 = {
          name: 'Loc8',
          value: 0,
          valueSecond: 0,
          bgColor: 'bg-custom-color-4'
        }
        const boatWatch = {
          name: 'BoatWatch',
          value: 0,
          valueSecond: 0,
          bgColor: 'bg-custom-color-8'
        }
        const track = {
          name: 'Track',
          value: 0,
          valueSecond: 0,
          bgColor: 'bg-custom-color-5'
        }
        const watch = {
          name: 'Watch',
          value: 0,
          valueSecond: 0,
          bgColor: 'bg-custom-color-6'
        }

        if(items && items.length){
          for (const [key, value] of Object.entries(items)) {
            switch (value.SOLUTION){
              case 'Unknown':                       onStock.value += value.Numbers; break;
              case 'Protect': case 'WiTiProtect':   protect.value += value.Numbers; break;
              case 'QProtect': case 'WiTiQProtect': qProtect.value += value.Numbers; break;
              case 'Loc8':                          loc8.value += value.Numbers; break;
              case 'Track': case 'WiTiTrack':       track.value += value.Numbers; break;
              case 'Boat_watch':                    boatWatch.value += value.Numbers; break;
              case 'Watch':                         watch.value += value.Numbers; break;
            }
          }
        }

        if(this.ActivatedPerDay && this.ActivatedPerDay.length){
          for (const [key, value] of Object.entries(this.ActivatedPerDay)) {
            switch (value.Solution){
              case 'Unknown':                       onStock.valueSecond += value.Number; break;
              case 'Protect': case 'WiTiProtect':   protect.valueSecond += value.Number; break;
              case 'QProtect': case 'WiTiQProtect': qProtect.valueSecond += value.Number; break;
              case 'Loc8':                          loc8.valueSecond += value.Number; break;
              case 'Track': case 'WiTiTrack':       track.valueSecond += value.Number; break;
              case 'Watch':                         watch.valueSecond += value.Number; break;
              case 'Boat_watch':                    boatWatch.valueSecond += value.Number; break;
            }
          }
        }

        this.solutionStats = [ protect, qProtect, loc8, track, watch, boatWatch ]
        this.isSolutionStatsLoaded = true
      },
      UsageOverview(data){
        this.simStats = [
          {
            name: this.$t('DATA_SESSIONS_MSG000'), //'Data Sessions',
            value: data.SESSION_DAY,
            bgColor: 'bg-custom-color-9',
            numeralFormat: ''
          },
          {
            name: this.$t('DATA_SESSIONS_MSG001'), //'Data Usage',
            value: data.DATA_DAY,
            bgColor: 'bg-custom-color-10',
            numeralFormat: '0.0 b'
          },
          {
            name: this.$t('DATA_SESSIONS_MSG002'), //'SMS Usage',
            value: data.SMS_MO_DAY + data.SMS_MT_DAY,
            bgColor: 'bg-custom-color-11',
            numeralFormat: ''
          },
          {
            name: this.$t('DATA_SESSIONS_MSG003'), //'Online Numbers',
            value:  data.ONLINE_DAY,
            bgColor: 'bg-custom-color-12',
            numeralFormat: ''
          },
        ]

        this.isSimStatsLoaded = true
      },
      AllSimsStates(items){
        const onStock = {
          name: 'On Stock',
          value: 0,
          bgColor: 'bg-color-lightgray'
        }
        const testProductive = {
          name: 'Test Productive',
          value: 0,
          bgColor: 'bg-color-lightblue'
        }
        const productive = {
          name: 'Productive',
          value: 0,
          bgColor: 'bg-color-lightgreen'
        }
        const suspended = {
          name: 'Suspended',
          value: 0,
          bgColor: 'bg-color-lightorange'
        }
        const terminated = {
          name: 'Terminated',
          value: 0,
          bgColor: 'bg-color-lightred'
        }

        if(items && items.length){
          for (const [key, value] of Object.entries(items)) {
            switch (value.SimStatus){
              case 'OnStock':                       onStock.value += value.NUMBERS; break;
              case 'TestProductive':                testProductive.value += value.NUMBERS; break;
              case 'Productive':                    productive.value += value.NUMBERS; break;
              case 'Suspended':                     suspended.value += value.NUMBERS; break;
              case 'Deleted': case 'Deleting':      terminated.value += value.NUMBERS; break;
            }
          }
        }

        this.simStats2 = [onStock, testProductive, productive, suspended, terminated]
        this.isSimStatsLoaded2 = true

      }

    },

    mounted() {
      let parentUrl = getParentUrl()
      this.parentUrl = parentUrl ? parentUrl : 'https://quiktrak.co/'

      /*const { t } = useI18n()
      this.simStats = [
        {
          name: t('DATA_SESSIONS_MSG000'), //'Data Sessions',
          value: 150456,
          bgColor: 'bg-custom-color-3'
        },
        {
          name: t('DATA_SESSIONS_MSG001'), //'Data Usage',
          value: 567,
          bgColor: 'bg-custom-color-7'
        },
        {
          name: t('DATA_SESSIONS_MSG002'), //'SMS Usage',
          value: 34,
          bgColor: 'bg-custom-color-4'
        },
        {
          name: t('DATA_SESSIONS_MSG003'), //'Online Numbers',
          value: 432,
          bgColor: 'bg-custom-color-5'
        },
      ]*/
    },

    methods: {

    }

  }
</script>
