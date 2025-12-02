<template>
  <section class="hero-section">
    <div class="hero-bg">
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
    </div>

    <div class="container hero-content">
      <div class="hero-text animate-fade-in">
        <h1 class="hero-title">
          我们是专业的<br />
          <span class="text-gradient">互联网服务与程序开发</span>
        </h1>
        <p class="hero-subtitle">为企业提供定制化数字化解决方案，助力业务增长与创新</p>
        <div class="hero-actions">
          <el-button type="primary" size="large" class="cta-btn primary-cta" @click="handleEmail">
            立即咨询
          </el-button>
          <el-button size="large" class="cta-btn secondary-cta" @click="scrollToCases">
            查看案例
          </el-button>
        </div>
      </div>

      <div class="hero-visual animate-fade-in" style="animation-delay: 0.2s">
        <div class="glass-card">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_1280.jpg"
            alt="Tech Visualization"
            class="hero-img"
          />
          <div class="floating-badge badge-1">
            <el-icon><DataLine /></el-icon>
            <span>数据驱动</span>
          </div>
          <div class="floating-badge badge-2">
            <el-icon><Monitor /></el-icon>
            <span>全平台适配</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { DataLine, Monitor } from '@element-plus/icons-vue'

const handleEmail = () => {
  const subject = `项目支持`
  const body = `您好，我想咨询关于：`
  window.location.href = `mailto:benymast@outlook.com?subject=${subject}&body=${body}`
}

const scrollToCases = () => {
  const element = document.getElementById('successCases')
  if (element) {
    const offset = 80
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
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--header-height);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(circle at top right, #1e293b 0%, #0f172a 100%);
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
}

.glow-1 {
  top: -10%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: var(--color-primary);
}

.glow-2 {
  bottom: -10%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: var(--color-secondary);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-title {
  font-size: 56px;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 24px;
  color: var(--color-text-primary);
}

.hero-subtitle {
  font-size: 20px;
  color: var(--color-text-secondary);
  margin-bottom: 40px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

.cta-btn {
  height: 56px;
  padding: 0 40px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 28px;
  transition: all 0.3s ease;
}

.primary-cta {
  background: var(--color-primary);
  border: none;
  box-shadow: var(--shadow-glow);
}

.primary-cta:hover {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
}

.secondary-cta {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
  backdrop-filter: blur(10px);
}

.secondary-cta:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-text-primary);
  transform: translateY(-2px);
}

.hero-visual {
  position: relative;
}

.glass-card {
  position: relative;
  border-radius: 24px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
}

.hero-img {
  width: 100%;
  border-radius: 16px;
  display: block;
  box-shadow: var(--shadow-lg);
}

.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--color-text-primary);
  font-weight: 600;
  box-shadow: var(--shadow-lg);
  animation: float 6s ease-in-out infinite;
}

.badge-1 {
  top: 40px;
  left: -40px;
}

.badge-2 {
  bottom: 40px;
  right: -40px;
  animation-delay: 3s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  .hero-title {
    font-size: 40px;
  }

  .hero-subtitle {
    margin: 0 auto 40px;
  }

  .hero-actions {
    justify-content: center;
  }

  .badge-1 {
    left: 0;
  }

  .badge-2 {
    right: 0;
  }
}
</style>
