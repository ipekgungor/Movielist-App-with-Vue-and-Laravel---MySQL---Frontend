<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Movie List App. All rights reserved.</p>
      <div class="social-media">
        <a href="/" target="_blank" class="social-icon">Facebook</a>
        <a href="/" target="_blank" class="social-icon">Twitter</a>
        <a href="/" target="_blank" class="social-icon">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: black;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  width: 100%;
}

.footer .footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer .footer-content p {
  margin: 0;
}

.footer .social-media {
  margin-top: 10px;
}

.footer .social-media .social-icon {
  margin: 0 15px;
  color: #fff;
  text-decoration: none;
}

.footer .social-media .social-icon:hover {
  color: #bbb;
}
</style>
