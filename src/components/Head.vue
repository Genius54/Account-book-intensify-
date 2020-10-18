<template>
  <div>
    <a-page-header title="小明记账">
      <a-row type="flex">
        <a-statistic title="收入" prefix="￥" :value="$store.getters.income"
                     :style="{margin: '0 10px'}"
        />
        <a-statistic title="支出" prefix="￥" :value="$store.getters.expenditure"
                     :style="{margin: '0 10px'}"
        />
        <a-statistic title="余额" prefix="￥" :value="$store.getters.balance"
                     :style="{margin: '0 10px'}"
        />
        <div>
          <label>全部</label><input name="ra" type="radio" checked @click="searchAll">
          <label>收入</label><input name="ra" type="radio" @click="searchIncome">
          <label>支出</label><input name="ra" type="radio" @click="searchExpenditure">
        </div>
        <el-dropdown>
            <span class="el-dropdown-link">
              按月查询<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="x in month" :key="x.key" :value="x.v" @click.native="searchByMonth(x.v)">{{x.M}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </a-row>
    </a-page-header>

  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {/*Table,TableColumn,Button,Input,*/Dropdown,DropdownMenu,DropdownItem} from 'element-ui'
  import '../assets/css/self.css'
  export default {
    name: "Head",
    components:{
      elDropdown:Dropdown,
      elDropdownMenu:DropdownMenu,
      elDropdownItem:DropdownItem,
    },
    data(){
      return {
        value:0,
        month:[
          {key:1,M:'1月',v:'-01-'},
          {key:2,M:'2月',v:'-02-'},
          {key:3,M:'3月',v:'-03-'},
          {key:4,M:'4月',v:'-04-'},
          {key:5,M:'5月',v:'-05-'},
          {key:6,M:'6月',v:'-06-'},
          {key:7,M:'7月',v:'-07-'},
          {key:8,M:'8月',v:'-08-'},
          {key:9,M:'9月',v:'-09-'},
          {key:10,M:'10月',v:'-10-'},
          {key:11,M:'11月',v:'-11-'},
          {key:12,M:'12月',v:'-12-'}
        ],
        data:'',
      }
    },
    computed:{

    },
    methods:{
      ...mapMutations(['searchAll','searchIncome','searchExpenditure','searchByMonth']),
    }
  }
</script>

<style scoped>
  .el-input input{
    border:none;
    outline: none;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
