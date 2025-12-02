<template>
  <section class="section solutions-section" id="solutions">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">行业解决方案</h2>
        <p class="section-subtitle">针对不同行业特点，提供定制化的数字化解决方案</p>
      </div>

      <div class="solutions-grid">
        <div v-for="(solution, index) in solutions" :key="index" class="solution-card">
          <div class="card-content">
            <h3>{{ solution.title }}</h3>
            <ul class="feature-list">
              <li v-for="(item, i) in solution.items" :key="i">
                <el-icon class="check-icon"><Check /></el-icon>
                {{ item }}
              </li>
            </ul>
            <div class="card-bg-icon">
              <component :is="solution.icon" />
            </div>
            <div class="card-actions">
               <el-button link type="primary" @click="$router.push('/solution/' + (index + 1))">查看详情 &rarr;</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Check, ShoppingCart, School, Money } from '@element-plus/icons-vue'

const solutions = [
  {
    title: '电商解决方案',
    items: ['多渠道销售平台整合', '智能库存管理系统', '精准营销数据分析'],
    icon: ShoppingCart
  },
  {
    title: '教育行业解决方案',
    items: ['在线学习平台搭建', '教学资源管理系统', '学生行为数据分析'],
    icon: School
  },
  {
    title: '金融行业解决方案',
    items: ['风险控制系统', '客户关系管理平台', '合规数据报告系统'],
    icon: Money
  }
]
</script>

<style scoped>
.section {
  padding: 100px 0;
  background-color: var(--color-bg-primary);
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

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.solution-card {
  background: var(--color-bg-secondary);
  border-radius: 24px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  height: 100%;
}

.solution-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-lg);
}

.solution-card h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  color: var(--color-text-primary);
  position: relative;
  z-index: 2;
}

.feature-list {
  position: relative;
  z-index: 2;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  color: var(--color-text-secondary);
  font-size: 15px;
}

.check-icon {
  color: var(--color-secondary);
  font-weight: bold;
}

.card-bg-icon {
  position: absolute;
  bottom: -20px;
  right: -20px;
  font-size: 150px;
  color: rgba(255, 255, 255, 0.03);
  transform: rotate(-15deg);
  transition: all 0.3s ease;
  z-index: 1;
}

.solution-card:hover .card-bg-icon {
  color: rgba(59, 130, 246, 0.1);
  transform: rotate(0) scale(1.1);
}

@media (max-width: 992px) {
  .solutions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
