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
        <button class="pagination__left" @click="goToPage(page - 1)" :disabled="page === 1">Предыдущая</button>
        <span>Страница {{ page }} из {{ totalPages }}</span>
        <button class="pagination__right" @click="goToPage(page + 1)" :disabled="page === totalPages">Следующая</button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.datatable {
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
  border-collapse: collapse;
  box-shadow: 2px 2px 3px 0px #8526ab;
  background-color: #ffffff;
}

.datatable th,
.datatable td {
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
}

.datatable th {
  background-color: #bddbff;
  font-weight: 600;
}

.datatable tr {
  background-color: white;
}
.datatable tr:hover {
  background-color: #B7B7B7;
  transition: background-color 0.2s;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}

.pagination-btn {
  margin: 0 4px;
  padding: 6px 12px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.pagination-btn:hover {
  background-color: #0056b3;
}

.page-info {
  margin: 0 12px;
  font-weight: 500;
}

.datatable tbody tr:last-child td {
  border-bottom: none;
}

.pagination__left {
  margin-right: 10px;
}
.pagination__right {
  margin-left: 10px;
}
</style>
  