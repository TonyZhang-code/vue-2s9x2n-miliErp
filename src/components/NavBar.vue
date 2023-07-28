<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/sales">销售处理</router-link></li>
        <li><router-link to="/inventory">进货处理</router-link></li>
        <li><router-link to="/stock">库存查看</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav ul {
  list-style-type: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}
</style>
