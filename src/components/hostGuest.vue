<template>
    <div>
      <el-row :gutter="24">
        <el-col :span="4"><div class="grid-content bg-purple">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="hostName"
              label="万得主客">
            </el-table-column>
            <el-table-column
              prop="hostNumber"
              label="万得主客联系方式">
            </el-table-column>
          </el-table>
        </div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="visitGuest"
              label="拜访客户">
            </el-table-column>
            <el-table-column
              prop="year"
              label="年度">
            </el-table-column>
            <el-table-column
              prop="quarterYear"
              label="季度">
            </el-table-column>
            <el-table-column
              prop="month"
              label="月份">
            </el-table-column>
            <el-table-column
              prop="day"
              label="日">
            </el-table-column>
            <el-table-column
              prop="visitLog"
              label="拜访日志">
            </el-table-column>
            <el-table-column
              prop="guestRequire"
              label="客户需求">
            </el-table-column>
            <el-table-column
              prop="operator"
              label="运营人员">
            </el-table-column>
          </el-table>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div></el-col>
      </el-row>
    </div>
</template>
<script>
    export default {
        name: "hostGuest",
      data() {
          return {
            tableData: [{
              hostName: '蔡军',
              hostNumber: '18657553331'
            }, {
              hostName: '蔡俊雅',
              hostNumber: '18656717788'
            }, {
              hostName: '黄忠',
              hostNumber: '15036136346'
            }, {
              hostName: '刘备',
              hostNumber: '15787876534'
            }]
          }
      }
    }
</script>

<style scoped>

</style>
