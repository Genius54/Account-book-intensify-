<template>
  <div class="app">
    <div>
      <Head></Head>
    </div>
    <div>
      <Table></Table>
    </div>
  </div>
</template>

<script>
  import Head from "./components/Head"
  import Table from "./components/Table"
export default {
  name: 'App',
  components: {
    Head,
    Table
  },
  /**
   * 注：本项目在运行中需要将用户存储的数据存放在localStorage中的list[]数组中
   *     所以在用户初始化本项目使，该项目会检查本地浏览器的localStorage中是否存在list[]数组，如果不存在，则创建一个list[]
   *     关于用户创建的每条数据的id生成方法，本项目会取出list[]中最后一条数据的id+1开始作为本次开始添加的数据的id
   */
  created() {
    if(ocalStorage.getItem('list')==null){
      let r=[];
      localStorage.setItem('list',JSON.stringify(r));
    }
    this.$store.state.datas = JSON.parse(localStorage.getItem('list')) || [];
    if(localStorage.getItem('list')=="[]"){
      this.$store.state.k=0;
    }else {
      this.$store.state.k=JSON.parse(localStorage.getItem('list')).pop().key;
    }
  },
  methods: {

  },
}
</script>

<style>
  .app{
    width: 800px;
    height: 600px;
    border: 1px solid green;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
</style>
