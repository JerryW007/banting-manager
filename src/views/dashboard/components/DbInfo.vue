<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">创建的线程数</div>
          <count-to
            :start-val="0"
            :end-val="db_info.创建的线程数"
            :duration="2600"
            class="card-panel-num"
            style="color:rebeccapurple"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">当前连接数</div>
          <count-to
            :start-val="0"
            :end-val="db_info.当前连接数"
            :duration="3000"
            class="card-panel-num"
            style="color:aqua"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">打开的连接数</div>
          <count-to
            :start-val="0"
            :end-val="db_info.打开的连接数"
            :duration="3200"
            class="card-panel-num"
            style="color:burlywood"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">最大连接数</div>
          <count-to
            :start-val="0"
            :end-val="db_info.最大连接数"
            :duration="1200"
            class="card-panel-num"
            style="color:cadetblue"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-description">
          <div class="card-panel-text">缓存的线程数</div>
          <count-to
            :start-val="0"
            :end-val="db_info.缓存的线程数"
            :duration="2400"
            class="card-panel-num"
            style="color:chartreuse"
          />
        </div>
      </div>
    </el-col>
  </el-row>
</template>
  
  <script>
import CountTo from "vue-count-to";
import admin from "@/api/admin";
export default {
  components: {
    CountTo,
  },
  data() {
    return {
      db_info: {},
    };
  },
  created() {
    this.getDbInfo();
  },
  methods: {
    async getDbInfo() {
      this.listLoading = true;
      const info = await admin.dbInfo();
      this.db_info = info.body;
      this.listLoading = false;
    },
  },
};
</script>
  
<style lang="scss" scoped>
.panel-group {
    margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
    width: 20%
  }

  .card-panel {
    height: 75px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 10px 0 0 10px;
      padding: 5px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      
      font-weight: bold;
      margin: 10px;
      margin-left: 20px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
  