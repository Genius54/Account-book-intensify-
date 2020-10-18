<template>
  <div>
    <table class="app-table" id="app-right-table" border="3">
      <tr>
        <td><input style="border: 0px;outline:none; width: 100%;" placeholder="收支描述..." v-model="$store.state.des"></td>
        <td><input style="border: 0px;outline:none; width: 100%;" placeholder="+表示收入，-表示支出..." v-model="$store.state.fun"></td>
        <td><input type="date" v-model="$store.state.time"></td>
        <td>
          <el-button @click="addItem" type="text" size="small">添加</el-button>
        </td>
      </tr>
    </table>
    <div>
      <template>
        <el-table
          :data="getTableDatas"
          stripe
          height="400"
          style="width: 100%">
          <el-table-column label="---描述" width="180">
              <el-input slot-scope="scope"  v-model="scope.row.description"></el-input>
          </el-table-column>
          <el-table-column label="---出入" width="180">
            <el-input slot-scope="scope"  v-model="scope.row.fund"></el-input>
          </el-table-column>
          <el-table-column label="---时间" width="180">
            <el-input slot-scope="scope"  v-model="scope.row.time"></el-input>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="editItem(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="deleteItem(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {Table,TableColumn,Button,Input} from 'element-ui'
  import '../assets/css/self.css'
  export default {
    name: "Table",
    components:{
      elTable:Table,
      elTableColumn:TableColumn,
      elButton:Button,
      elInput:Input,
    },
    data(){
      return {
        item:'',
        tableDatas:'',
        columns : [
          { description: '描述', fund: '出入', time: '时间',action: '操作' }
        ],
      }
    },
    created(){
      this.tableDatas=this.$store.getters.getDatas();
    },
    methods:{
      ...mapMutations(['addItem','deleteItem','editItem']),
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
    },
    computed:{
      getTableDatas(){
        return this.$store.getters.getDatas;
      },
      getIncome(){
        return this.$store.getters.income
      },
      getExpenditure(){
        return this.$store.getters.expenditure
      },
      getBalance(){
        return this.$store.getters.balance
      }
    }
  }
</script>

<style scoped>
  .app-table{
    width: 100%;
    border: 0px;
  }
  .el-input input{
    border:none;
    outline: none;
  }
</style>
