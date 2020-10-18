import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state:Vue.observable({
    datas:JSON.parse(localStorage.getItem('list')),
    data_bridge:JSON.parse(localStorage.getItem('list')),
    k:0,
    item:'',
    des:'',
    fun:'',
    time:'',
  }),
  getters:Vue.observable({
    getDatas:state=>{
      const sorted_data=state.datas;
      sorted_data.sort((a,b)=>{
      if(a.time>b.time){
        return -1
      }else if(a.time<b.time){
        return 1
      }
      return 0
    })
      return sorted_data;
    },
    income: state => {//总收入
      const result=state.data_bridge.filter(item=>item.fund>0);
      return parseFloat(eval(result.map((item) => item.fund).join('+'))).toFixed(2);
    },
    expenditure: state => {//总支出
      const result=state.data_bridge.filter(item=>item.fund<0);
      return parseFloat(eval(result.map((item) => item.fund).join('+'))).toFixed(2);
    },
    balance: state => {//总收支余额
      const result=state.data_bridge;
      return parseFloat(eval(result.map((item) => item.fund).join('+'))).toFixed(2);
    }
  }),
  mutations:{
    addItem:state=>{
      state.k=state.k+1;
      let ite={key:state.k,description:state.des,fund:parseFloat(state.fun).toFixed(2),time:state.time};
      state.datas=JSON.parse(localStorage.getItem('list'));
      state.datas=state.datas.concat(ite);
      state.des='';
      state.fun='';
      state.time='';
      localStorage.setItem('list',JSON.stringify(state.datas));
      state.data_bridge=JSON.parse(localStorage.getItem('list'));
    },
    deleteItem:(state,e)=>{
      const list1=JSON.parse(localStorage.getItem('list'));
      const list=list1.filter(list1=>list1.key!=e.key);
      localStorage.setItem('list',JSON.stringify(list));
      state.datas=JSON.parse(localStorage.getItem('list'));
      state.data_bridge=JSON.parse(localStorage.getItem('list'));
    },
    editItem:(state,e)=>{
      const data_list=JSON.parse(localStorage.getItem('list'));
      data_list.forEach((ite)=>{
        if(ite.key===e.key){
          ite.description=e.description;
          ite.fund=e.fund;
          ite.time=e.time;
        }
      })
      localStorage.setItem('list',JSON.stringify(data_list));
      state.datas=JSON.parse(localStorage.getItem('list'));
      state.data_bridge=JSON.parse(localStorage.getItem('list'));
      alert("修改成功...")
    },
    searchAll:state=>{//查询全部
      state.datas=JSON.parse(localStorage.getItem('list'));
    },
    searchIncome:state=>{//查询总收入
      state.datas=JSON.parse(localStorage.getItem('list'));
      state.datas=state.datas.filter(datas=>datas.fund>0);
    },
    searchExpenditure:state=>{//查询总支出
      state.datas=JSON.parse(localStorage.getItem('list'));
      state.datas=state.datas.filter(datas=>datas.fund<0);
    },
    searchByMonth:(state,e)=>{
      state.datas=JSON.parse(localStorage.getItem('list'));
      state.datas=state.datas.filter(datas=>datas.time.indexOf(e)!=-1);
      //alert(e);
    },
  },
  actions:{

  },
  modules:{

  },

})
