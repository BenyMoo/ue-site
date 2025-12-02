<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col brand-col">
          <div class="logo">易悦<span class="logo-dot">.</span></div>
          <p class="brand-desc">
            专业的互联网服务与程序开发公司，致力于为企业提供定制化数字化解决方案，助力业务增长与创新。
          </p>
        </div>
        
        <div class="footer-col">
          <h3>产品服务</h3>
          <ul>
            <li><a href="#">网站开发</a></li>
            <li><a href="#">移动应用开发</a></li>
            <li><a href="#">企业管理系统</a></li>
            <li><a href="#">电商平台建设</a></li>
            <li><a href="#">技术咨询服务</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>解决方案</h3>
          <ul>
            <li><a href="#">电商解决方案</a></li>
            <li><a href="#">教育行业解决方案</a></li>
            <li><a href="#">金融行业解决方案</a></li>
            <li><a href="#">制造业解决方案</a></li>
            <li><a href="#">医疗健康解决方案</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>支持服务</h3>
          <ul>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">新闻资讯</a></li>
            <li><a href="#">成功案例</a></li>
            <li><a href="#">技术支持</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">© {{ new Date().getFullYear() }} 易悦 版权所有 | 沪ICP备86992326号</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: 80px 0 30px;
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: 20px;
}

.logo-dot {
  color: var(--color-primary);
}

.brand-desc {
  color: var(--color-text-secondary);
  font-size: 14px;
  line-height: 1.8;
  max-width: 300px;
}

.footer-col h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 24px;
}

.footer-col ul li {
  margin-bottom: 12px;
}

.footer-col ul li a {
  color: var(--color-text-secondary);
  font-size: 14px;
  transition: color 0.2s ease;
}

.footer-col ul li a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding-top: 30px;
  text-align: center;
}

.copyright {
  color: var(--color-text-secondary);
  font-size: 13px;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .brand-desc {
    max-width: 100%;
  }
}
</style>
