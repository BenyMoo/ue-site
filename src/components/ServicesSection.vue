<template>
  <section class="section services-section" id="services">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">我们的服务</h2>
        <p class="section-subtitle">为企业提供全方位的技术解决方案，助力数字化转型</p>
      </div>

      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-card glass-panel">
          <div class="icon-wrapper">
            <el-icon :size="32" class="service-icon">
              <component :is="service.icon" />
            </el-icon>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <router-link :to="'/service/' + (index + 1)" class="learn-more">
            了解更多 <el-icon><ArrowRight /></el-icon>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Monitor, Iphone, OfficeBuilding, ArrowRight } from '@element-plus/icons-vue'

const services = [
  {
    title: '网站开发',
    description: '定制化企业官网、电商平台、门户网站开发，响应式设计适配各种设备',
    icon: Monitor
  },
  {
    title: '移动应用开发',
    description: 'iOS/Android原生应用及跨平台应用开发，提供完整的移动解决方案',
    icon: Iphone
  },
  {
    title: '企业管理系统',
    description: 'ERP、CRM、OA等企业管理系统的定制开发，提升运营效率',
    icon: OfficeBuilding
  }
]
</script>

<style scoped>
.section {
  padding: 100px 0;
  background: linear-gradient(to bottom, var(--color-bg-primary), var(--color-bg-secondary));
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.section-subtitle {
  color: var(--color-text-secondary);
  font-size: 18px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  padding: 40px 30px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-glow);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.service-card:hover .icon-wrapper {
  background: var(--color-primary);
  transform: scale(1.1);
}

.service-icon {
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  color: white;
}

.service-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.service-card p {
  color: var(--color-text-secondary);
  margin-bottom: 24px;
  line-height: 1.6;
}

.learn-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-primary);
  font-weight: 500;
  font-size: 14px;
}

.learn-more:hover {
  gap: 12px;
}

@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
