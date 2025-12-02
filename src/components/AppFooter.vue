<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col brand-col">
          <div class="logo" @click="goHome" style="cursor: pointer">
            易悦<span class="logo-dot">.</span>
          </div>
          <p class="brand-desc">
            专业的互联网服务与程序开发公司，致力于为企业提供定制化数字化解决方案，助力业务增长与创新。
          </p>
        </div>

        <div class="footer-col">
          <h3>快速导航</h3>
          <ul>
            <li><a href="#" @click.prevent="scrollToSection('aboutUs')">关于我们</a></li>
            <li><a href="#" @click.prevent="scrollToSection('services')">产品服务</a></li>
            <li><a href="#" @click.prevent="scrollToSection('solutions')">解决方案</a></li>
            <li><a href="#" @click.prevent="scrollToSection('successCases')">成功案例</a></li>
            <li><a href="#" @click.prevent="scrollToSection('news')">新闻资讯</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>解决方案</h3>
          <ul>
            <li><a href="#/solutions">新零售解决方案</a></li>
            <li><a href="#/solutions">智能制造方案</a></li>
            <li><a href="#/solutions">金融科技方案</a></li>
            <li><a href="#/solutions">教育数字化方案</a></li>
            <li><a href="#/solutions">医疗健康方案</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>案例&资讯</h3>
          <ul>
            <li><a href="#/cases">成功案例</a></li>
            <li><a href="#/news">新闻资讯</a></li>
            <li><a href="#" @click.prevent="scrollToSection('contactUs')">联系我们</a></li>
            <li><a href="#">技术支持</a></li>
            <li><router-link to="/privacy-policy">隐私政策</router-link></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          © {{ new Date().getFullYear() }} 易悦 版权所有 |
          <a
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            rel="noopener noreferrer"
          >
            沪ICP备86992326号
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToSection = (sectionId: string) => {
  // 检查当前是否在首页
  if (router.currentRoute.value.path !== '/') {
    // 如果不在首页，先跳转到首页，然后滚动到指定位置
    router.push('/').then(() => {
      // 等待DOM更新完成
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const offset = 80 // Header height
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = element.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }, 100)
    })
  } else {
    // 已经在首页，直接滚动
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Header height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }
}

const goHome = () => {
  router.push('/')
}
</script>

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

.copyright a {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: var(--transition-fast);
  border-bottom: 1px solid transparent;
}

.copyright a:hover {
  color: var(--color-text-accent);
  border-bottom-color: var(--color-text-accent);
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
