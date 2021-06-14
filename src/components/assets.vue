<template>
  <div>
    <form class="p-grid p-fluid" @submit.prevent="loadLazyData">        
      <div class="p-col-12 p-sm-6 p-md-3 p-lg-2" v-tooltip.top="$t('TOP_USAGE_MSG019')">
        <label>Status</label>
        <Dropdown v-model="selectedUsageType" :options="usageTypes" optionLabel="name" optionValue="code" :placeholder="'All statuses'" class="p-inputtext-sm" />
      </div>
      <!--<div class="p-col-12 p-sm-6 p-md-3 p-lg-3">
        <label>From Date</label>
        <div class="p-inputgroup">
          <InputText placeholder="Select Date"/>
          <Button icon="pi pi-search" class="p-button-warning bg-lightgrey"/>
        </div>
      </div>
      <div class="p-col-12 p-sm-6 p-md-3 p-lg-3">
        <label>To Date</label>
        <div class="p-inputgroup">
          <InputText placeholder="Select Date"/>
          <Button icon="pi pi-calendar" class="p-button-warning bg-lightgrey"/>
        </div>
      </div>-->
      <div class="p-col-12 p-sm-6 p-md-3 p-lg-3" v-tooltip.top="$t('TOP_USAGE_MSG020')">
        
        <!--<Dropdown v-model="selectedPeriod" :options="periods" optionLabel="name" optionValue="code" :placeholder="$t('TOP_USAGE_MSG004')" class="p-inputtext-sm"/>
        -->
        <Button label="NEW CHECKLIST"/>
      </div>
      <div class="p-col-12 p-sm-6 p-md-3 p-lg-3" v-tooltip.top="$t('TOP_USAGE_MSG020')">
        <!--<Dropdown v-model="selectedPeriod" :options="periods" optionLabel="name" optionValue="code" :placeholder="$t('TOP_USAGE_MSG004')" class="p-inputtext-sm"/>
        -->
        <label>Search</label>
        <div class="p-inputgroup">
          <InputText placeholder="Enter checklist name..."/>
          <Button icon="pi pi-search" class="p-button-warning bg-lightgrey"/>
        </div>
      </div>
      <!--<div class="p-col-12 p-sm-6 p-md-3 p-lg-2" v-tooltip.top="$t('TOP_USAGE_MSG021')">
        <Dropdown v-model="selectedSolution" :options="solutions" optionLabel="name" optionValue="code" :placeholder="$t('TOP_USAGE_MSG005')" class="p-inputtext-sm"/>
      </div>
      <div class="p-col-12 p-sm-6 p-md-3 p-lg-2" v-tooltip.top="$t('TOP_USAGE_MSG022')">
        <Dropdown v-model="selectedSimStatus" :options="simStatuses" optionLabel="name" optionValue="code" :placeholder="$t('TOP_USAGE_MSG006')" class="p-inputtext-sm"/>
      </div>

      <div class="p-col-12 p-sm-6 p-md-3 p-lg-2" v-tooltip.top="$t('TOP_USAGE_MSG023')">
        <Dropdown v-model="selectedProduct" :options="productList" optionLabel="Name" optionValue="Code" :filter="true" :placeholder="$t('TOP_USAGE_MSG007')" class="p-inputtext-sm"/>
      </div>
      <div class="p-col-12 p-sm-6 p-md-3 p-lg-2" v-tooltip.top="$t('TOP_USAGE_MSG024')">
        <Dropdown v-model="selectedDeviceStatus" :options="deviceStatuses" optionLabel="name" optionValue="code" :placeholder="$t('TOP_USAGE_MSG008')" class="p-inputtext-sm">
          <template #value="slotProps">
            <div class="p-dropdown-status-value" v-if="slotProps.value">
              <span :class="'rag-wrapper margin-right-half bg-' + getRagColor(slotProps.value)"></span>
              <span>{{ getRagLabel(slotProps.value) }}</span>
            </div>
            <span v-else>
              {{ $t('TOP_USAGE_MSG009') }}
            </span>
          </template>
          <template #option="slotProps">
            <div class="p-dropdown-status-option" >
              <span v-if="slotProps.option.code" :class="'rag-wrapper margin-right-half bg-' + getRagColor(slotProps.option.code)"></span>
              <span>{{slotProps.option.name}}</span>
            </div>
          </template>
        </Dropdown>
      </div>-->
      <!--<div class="p-col-12 p-md-3 p-lg-2">
        <Button type="submit" :label="$t('COM_MSG011')" icon="pi pi-search" iconPos="left" class="p-button-sm"/>
      </div>-->
    </form>

    <div class="card margin-bottom overflow-visible">    
      <!--<div class="card-header">{{ $t('TOP_USAGE_MSG000') }}</div>-->
      <div class="card-content min-height-140">
        
        <DataTable
            ref="dt"
            class="p-datatable-sm p-datatable-striped p-datatable-bordered"
            showGridlines 
            :value="data"
            :lazy="true"
            :scrollable="true"
            scrollDirection="both"
            :loading="isLoading"
            @page="onPage($event)"         
            :paginator="true" 
            :rows="10"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"            
            
        >
          <template #empty>
            {{ $t('COM_MSG012') }}
          </template>
          <Column field="NAME" :header="$t('Name')" :style="{'width':'80px'}">
       
          </Column>
          <Column field="NOTES" :header="$t('Notes')" :style="{'width':'1034px'}">
            <!--<template #body="{data}">
              <f7-link popover-open=".popover-menu" @click="selectedAsset={IMEI: data.AS_NAME, IMSI: data.CHECKLIST, AssetName: data.AS_NAME, IMSIStatus: data.SIM_STATUS, DeviceType: data.AS_TYPE}">{{ data.CHECKLIST }}</f7-link>
            </template>-->
          </Column>       
          <Column field="OPTIONS" :header="$t('Options')" :style="{'width':'130px'}">
            <template #body="{data}">
              <Button label="Options" icon="pi pi-chevron-down" class=" p-button-sm" iconPos="right" />
            </template>
          </Column>
            <!--<Column field="AS_NAME" :header="$t('TOP_USAGE_MSG017')" :style="{'width':'160px'}"></Column>
          <Column field="CS_NAME" :header="$t('TOP_USAGE_MSG018')" :style="{'width':'200px'}"></Column>-->
          <template #paginatorLeft>
              <Button type="button" icon="pi pi-refresh" class="p-button-text" />
          </template>
          <template #paginatorRight>
              <Button type="button" icon="pi pi-cloud" class="p-button-text" />
          </template>
        </DataTable>
      </div>
    </div>

    <f7-popover class="popover-menu popover-sm" :backdrop="false" :close-on-escape="true">
      <f7-list>
        <f7-list-item v-if="SimCommands && SimCommands.length" link="#" popover-close :title="$t('TOP_USAGE_MSG025')" @click="isSendCommandModalOpened=true"></f7-list-item>
        <f7-list-item link="#" popover-close :title="$t('TOP_USAGE_MSG026')" @click="isSmsHistoryModalOpened=true"></f7-list-item>
        <f7-list-item link="#" popover-close :title="$t('TOP_USAGE_MSG027')" @click="isReplaceSimModalOpened=true"></f7-list-item>
        <f7-list-item link="#" popover-close :title="$t('TOP_USAGE_MSG028')" @click="isChangeSimStatusModalOpened=true"></f7-list-item>
      </f7-list>
    </f7-popover>

    <asset-location-modal
      v-model:isOpened = isAssetLocationModalOpened
      :selectedAsset = "selectedAsset"
    />
    <sms-history-modal
        v-model:isOpened = isSmsHistoryModalOpened
        :selectedAsset = "selectedAsset"
    />
    <change-sim-status-modal
        v-model:isOpened = isChangeSimStatusModalOpened
        :selectedAsset = "selectedAsset"
        @statusChanged = "loadLazyData()"
    />
    <replace-sim-modal
        v-model:isOpened = isReplaceSimModalOpened
        :selectedAsset = "selectedAsset"
        @statusChanged = "loadLazyData()"
    />
    <send-command-modal
        v-model:isOpened = isSendCommandModalOpened
        :selectedAsset = "selectedAsset"
        @statusChanged = "loadLazyData()"
    />
  </div>  
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Tooltip from 'primevue/tooltip';
import {mapGetters} from "vuex";
import { useStore } from 'vuex'
import {useI18n} from "vue-i18n";
import Calendar from 'primevue/calendar';
import Badge from 'primevue/badge';
import Rating from 'primevue/rating';



export default {
  name: "top-usage-table",

  components: {
    Rating,
    Badge,
    Calendar,
    DataTable,
    Column,
    Button,
    InputText,
    Dropdown,

  },

  directives: {
    'tooltip': Tooltip
  },

  data () {
    const { t } = useI18n()
    return {
      isLoading: false,
      data: [{'NUM':'P-2020',
      'AS_NAME':'Volvo n12',
      'NAME':'for_volvo',
      'CHECKLIST':'For_volvo',
      'DIAGNOSTICS':'0',
      'EMPLOYEE':'Jack Nickson',
      'ROLE':'driver',
      'TYPE':'Daily',
      'FAILREASON':'Not working',
      'QUESTION':'Visually check chassis, suspension including air bags, check cab & body for damage',
      'NOTES':'Sed ut perspiciatis unde omnis iste natus error eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.',
      'PHOTO':'View photo',
      'NUMBER':'E - 17',
      'FIRSTNAME':'Mark',
      'SURNAME':'Radford',
      'MOBILE':'+3040034445',
      'PHONE':'199122',
      'EMAIL':'mr@mail.com',
      'REGISTRATION':'TD61PF',
      'MAKE':'Volvo',
      'MODEL':'FH',
      'COLOR':'White',
      'YEAR':'2005',
      'GROUPS':'AUSTRALIA',
      'INFO':'Edit details',
      'MILEAGE':'2.567km',
      'HOURS':'4d 3h',
      'MAXSPEED':'67 km/h',
      'AVERAGESPEED':'37 km/h',
      'FUELUSED':'45 L',
      'DATE':'06/10/2020 12:12:40'},
      {'NUM':'P-2019',
      'NAME':'for_volvo',
      'AS_NAME':'Volvo n12',
      'CHECKLIST':'For_volvo',
      'DIAGNOSTICS':'0',
      'EMPLOYEE':'Carl Nickson',
      'ROLE':'manager',
      'TYPE':'Daily',      
      'FAILREASON':'Not working',
      'QUESTION':'Visually check chassis, suspension including air bags, check cab & body for damage',
      'NOTES':'Sed ut perspiciatis unde omnis iste natus error eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.',
      'PHOTO':'View photo',
      'NUMBER':'E - 17',
      'FIRSTNAME':'Mark',
      'SURNAME':'Radford',
      'MOBILE':'+3040034445',
      'PHONE':'199122',
      'EMAIL':'mr@mail.com',
      'REGISTRATION':'TD61PF',
      'MAKE':'Volvo',
      'MODEL':'FH',
      'COLOR':'White',
      'YEAR':'2005',
      'GROUPS':'AUSTRALIA',
      'INFO':'Edit details',
      'MILEAGE':'2.567km',
      'HOURS':'4d 3h',
      'MAXSPEED':'67 km/h',
      'AVERAGESPEED':'37 km/h',
      'FUELUSED':'45 L',
      'DATE':'06/10/2020 12:12:40'},
      {'NUM':'P-2018',
      'NAME':'for_volvo',
      'AS_NAME':'DAF 45G',
      'CHECKLIST':'DAF',
      'DIAGNOSTICS':'0',
      'EMPLOYEE':'Alex Nickson',
      'ROLE':'driver',
      'TYPE':'Monthly',
      
      'FAILREASON':'Not working',
      'QUESTION':'Visually check chassis, suspension including air bags, check cab & body for damage',
      'NOTES':'Sed ut perspiciatis unde omnis iste natus error eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.',
      'PHOTO':'View photo',
      'NUMBER':'E - 17',
      'FIRSTNAME':'Mark',
      'SURNAME':'Radford',
      'MOBILE':'+3040034445',
      'PHONE':'199122',
      'EMAIL':'mr@mail.com',
      'REGISTRATION':'TD61PF',
      'MAKE':'Volvo',
      'MODEL':'FH',
      'COLOR':'White',
      'YEAR':'2005',
      'GROUPS':'AUSTRALIA',
      'INFO':'Edit details',
      'MILEAGE':'2.567km',
      'HOURS':'4d 3h',
      'MAXSPEED':'67 km/h',
      'AVERAGESPEED':'37 km/h',
      'FUELUSED':'45 L',
      'DATE':'06/10/2020 12:12:40'},],
      totalRecords: 0,

      searchDevice: '',

      selectedSolution: '',
      solutions: [
        {name: t('TOP_USAGE_MSG009'), code: ''},
        {name: 'BoatWatch', code: 'Boat_watch'},
        {name: 'Loc8', code: 'Loc8'},
        {name: 'Protect', code: 'Protect'},
        {name: 'QProtect', code: 'QProtect'},
        {name: 'Track', code: 'Track'},
        {name: 'Watch', code: 'Watch'},
        {name: 'WiTi QProtect', code: 'WiTiQProtect'},
        {name: 'WiTiTrack', code: 'WiTiTrack'},
      ],


      selectedSimStatus: '',
      simStatuses: [
        {name: t('TOP_USAGE_MSG009'), code: ''},
        {name: 'Deleted', code: 'Deleted'},
        {name: 'OnStock', code: 'OnStock'},
        {name: 'Productive', code: 'Productive'},
        {name: 'Suspended', code: 'Suspended'},
        {name: 'Test', code: 'Test'},
        {name: 'TestProductive', code: 'TestProductive'},
      ],

      selectedUsageType: 'data',
      usageTypes: [
       /* {name: 'Cars', code: 'data'},
        {name: t('TOP_USAGE_MSG003'), code: 'sms'},*/
      ],

      selectedPeriod: 'day',
      periods: [
        {name: t('COM_MSG008'), code: 'day'},
        {name: t('COM_MSG009'), code: 'week'},
        {name: t('COM_MSG010'), code: 'month'},
      ],

      selectedProduct: '',
      /*products: [
        {name: 'All', code: 'All'},
        {name: '2G QT EE 500', code: '2GQTEE500'},
        {name: '3G QT 209A', code: '3GQT209A'},
        {name: '3G QT 209B', code: '3GQT209B'},
      ],*/

      selectedDeviceStatus: '',
      deviceStatuses: [
        {name: t('TOP_USAGE_MSG009'), code: ''},
        {name: 'No Data', code: '9_NO_DATA'},
        {name: 'Offline', code: '3_OFFLINE'},
        {name: 'Offline24h', code: '2_OFFLINE'},
        {name: 'Online', code: '1_ONLINE'},
      ],

      isAssetLocationModalOpened: false,
      selectedAsset: {},

      isSmsHistoryModalOpened: false,
      isChangeSimStatusModalOpened: false,
      isReplaceSimModalOpened: false,
      isSendCommandModalOpened: false,
    }
  },

  computed: {
    ...mapGetters({
      products: 'Products',
      MajorToken: 'MajorToken',
      MinorToken: 'MinorToken',
      IS_LOGGED_IN: 'IS_LOGGED_IN',
      SimCommands: 'SimCommands',
      AllSimsStates: 'AllSimsStates'
    }),
    productList(){
      return [{Name: this.$t('TOP_USAGE_MSG009'), Code: ''}, ...this.products]
    }
  },

  watch: {
    IS_LOGGED_IN(state){
      if(!state){
        return
      }
      this.loadLazyData();
    }
  },

  mounted() {
    if(this.IS_LOGGED_IN){
      this.isLoading = true;

      this.lazyParams = {
        first: 0,
        rows: this.$refs.dt.rows,
        sortField: null,
        sortOrder: null,
        //filters: this.filters
      };

      this.loadLazyData();
    }

  },



  methods: {
    getRagColor(rag){
      let ragColors = {
        '9_NO_DATA': 'color-gray',
        '3_OFFLINE': 'color-red',
        '2_OFFLINE': 'color-orange',
        '1_ONLINE': 'color-green',
      }
      return ragColors[rag] ? ragColors[rag] : 'color-1'
    },
    getRagLabel(rag){
      let ragLabels = {
        '9_NO_DATA': 'No Data',
        '3_OFFLINE': 'Offline',
        '2_OFFLINE': 'Offline24h',
        '1_ONLINE': 'Online',
      };
      return ragLabels[rag] ? ragLabels[rag] : 'Unknown';
    },
    async loadLazyData() {
      this.isLoading = true;
      let params = {
        MajorToken: this.MajorToken,
        MinorToken: this.MinorToken,

        type: this.selectedUsageType,
        solution: this.selectedSolution,
        prdt: this.selectedProduct,
        RAG: this.selectedDeviceStatus,
        status: this.selectedSimStatus,
        time: this.selectedPeriod,
        q: this.searchDevice,
      }

      //let data = await this.$store.dispatch('GET_TOP_USAGE', params);
      //console.log('dat',data)
      //this.data = [{}];
      this.isLoading = false;
    },
    onPage(event) {

      this.lazyParams = event;
      this.loadLazyData();
    },
    showAssetLocation(event, imei, imsi, name){
      this.selectedAsset = {
        IMEI: imei,
        IMSI: imsi,
        AssetName: name
      }
      this.isAssetLocationModalOpened = true
    }
  }
}
</script>

<style scoped>

</style>