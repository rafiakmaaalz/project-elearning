<template>
  <div class="spinner-wrapper">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.spinner-wrapper {
  text-align: center;
  padding: 4rem 0;
}

.spinner {
  border: 5px solid #f3f3f3; /* Track */
  border-top: 5px solid #007bff; /* Kepala */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
