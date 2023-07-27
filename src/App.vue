<template>
  <div id="app">
    <h1>销售记录</h1>

    <form @submit.prevent="addSale">
      <label>
        商品名称：
        <select v-model="newSale.productName" required>
          <option disabled value="">请选择商品名称</option>
          <option>绿色印花连衣裙</option>
          <option>藏青色香槟小花连衣裙</option>
        </select>
      </label>

      <label>
        尺码：
        <select v-model="newSale.size" required>
          <option disabled value="">请选择尺码</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
      </label>

      <label>
        销售数量：
        <input v-model.number="newSale.quantity" required />
      </label>

      <button type="submit">添加销售记录</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>商品名称</th>
          <th>尺码</th>
          <th>销售数量</th>
          <th>操作员名称</th>
          <th>操作时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sale, index) in sales" :key="index">
          <td>{{ sale.productName }}</td>
          <td>{{ sale.size }}</td>
          <td>{{ sale.quantity }}</td>
          <td>{{ sale.operator }}</td>
          <td>{{ sale.timestamp }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newSale: {
        productName: '',
        size: '',
        quantity: 0,
      },
      sales: [],
    };
  },
  methods: {
    addSale() {
      const timestamp = new Date().toLocaleString();
      const operator = '当前登录用户'; // 您需要替换为实际的获取用户名称的方法
      this.sales.push({ ...this.newSale, operator, timestamp });
      this.newSale.productName = '';
      this.newSale.size = '';
      this.newSale.quantity = 0;
    },
  },
};
</script>

<style scoped>
body {
  background-color: #f0f0f0;
}

#app {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table th, table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: rgba(135,206,235, 0.5); /* semi-transparent light blue */
}

form {
  margin-bottom: 20px;
}

form label {
  display: block;
  margin-bottom: 10px;
}

form input, form select {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

form button {
  margin-top: 10px;
  padding: 10px 20px;
}
</style>
