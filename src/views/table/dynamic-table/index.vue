<template>
  <div class="app-container">
    <div style="margin: 0 0 5px 20px">
      Fixed header, sorted by header order,
    </div>
    <fixed-thead />

    <div style="margin: 30px 0 5px 20px">
      Not fixed header, sorted by click order
    </div>
    <unfixed-thead />
  </div>
</template>

<script>
import FixedThead from "./components/FixedThead";
import UnfixedThead from "./components/UnfixedThead";
import admin from "@/api/admin";

export default {
  name: "DynamicTable",
  components: { FixedThead, UnfixedThead },
  data() {
    return {
      db_info: []
    }
  },
  created() {
    this.getDbInfo();
  },
  methods: {
    async getDbInfo() {
      this.listLoading = true
      const info = await admin.dbInfo();
      this.db_info = info;
      this.listLoading = false
    },
  },
};
</script>

