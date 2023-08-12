<template>
    <div :style="containerStyle" class="datatable-container">
      <table class="datatable">
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">{{ column.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in currentPageData" :key="rowIndex">
            <td v-for="(col, colIndex) in columns" :key="colIndex">{{ row[col.key] }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button @click="goToPage(page - 1)" :disabled="page === 1">Предыдущая</button>
        <span>Страница {{ page }} из {{ totalPages }}</span>
        <button @click="goToPage(page + 1)" :disabled="page === totalPages">Следующая</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: "DataTable",
    props: {
      columns: {
        type: Array,
        required: true,
      },
      data: {
        type: Array,
        required: true,
      },
      itemsPerPage: {
        type: Number,
        default: 10,
      },
      width: {
        type: String,
        default: "100%", // Значение по умолчанию: 100% ширины
      },
      height: {
        type: String,
        default: "auto", // Значение по умолчанию: автоматическая высота
      },
    },
    setup(props) {
      const page = ref(1);
  
      const totalPages = computed(() => {
        return Math.ceil(props.data.length / props.itemsPerPage);
      });
  
      const currentPageData = computed(() => {
        const startIndex = (page.value - 1) * props.itemsPerPage;
        const endIndex = startIndex + props.itemsPerPage;
        return props.data.slice(startIndex, endIndex);
      });
  
      const containerStyle = computed(() => {
        return {
          width: props.width,
          height: props.height,
        };
      });
  
      function goToPage(newPage) {
        if (newPage >= 1 && newPage <= totalPages.value) {
          page.value = newPage;
        }
      }
  
      return {
        page,
        totalPages,
        currentPageData,
        containerStyle,
        goToPage,
      };
    },
  };
  </script>
  
  <style scoped>
  .datatable-container {
    margin: 20px;
    background-color: #111; /* неоновый цвет */
    box-shadow: 0px 0px 10px #37e5ff; /* синяя тень */
    border-radius: 10px; /* добавляем закругление */
  }
  
  .datatable {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
    border-radius: 10px; /* добавляем закругление */
    color: white;
  }
  
  .datatable th,
  .datatable td {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 10px; /* добавляем закругление */
  }
  
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pagination button {
    color: white;
  }
  .pagination span {
    color: white;
  }
  </style>
  