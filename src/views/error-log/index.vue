<template>
  <div class="errPage-container">
    <ErrorA />
    <ErrorB />
    <h3>Please click the bug icon in the upper right corner</h3>
    <aside>
      Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/banting-site/guide/advanced/error.html">
        Document introduction
      </a>
    </aside>
    <a href="#">
      <img src="http://img.pcauto.com.cn/images/ttauto/2021/09/27/7011297659734524453/75b8634bcf654ca8801308929b8a20a2.png">
    </a>
  </div>
</template>

<script>
import ErrorA from './components/ErrorTestA'
import ErrorB from './components/ErrorTestB'

export default {
  name: 'ErrorLog',
  components: { ErrorA, ErrorB }
}
</script>

<style scoped>
  .errPage-container {
    padding: 30px;
  }
</style>
