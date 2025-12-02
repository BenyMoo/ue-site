<template>
  <div class="solutions-page">
    <NavBar />

    <div class="page-header">
      <div class="container">
        <h1 class="page-title">行业解决方案</h1>
        <p class="page-subtitle">针对不同行业特点，提供定制化的数字化解决方案</p>
      </div>
    </div>

    <div class="container page-content">
      <div class="solutions-grid">
        <div v-for="(solution, index) in solutions" :key="index" class="solution-card">
          <div class="card-content">
            <div class="card-header">
              <div class="icon-wrapper">
                <el-icon :size="48" class="solution-icon">
                  <component :is="solution.icon" />
                </el-icon>
              </div>
              <h3>{{ solution.title }}</h3>
            </div>
            <ul class="feature-list">
              <li v-for="(item, i) in solution.items" :key="i">
                <el-icon class="check-icon"><Check /></el-icon>
                {{ item }}
              </li>
            </ul>
            <div class="card-actions">
              <el-button type="primary" round @click="$router.push('/solution/' + (index + 1))">
                查看详情
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { Check, ShoppingCart, School, Money, Van, Coin, Cloudy } from '@element-plus/icons-vue'
import { FirstAidKit } from '@element-plus/icons-vue'

const solutions = [
  {
    title: '电商解决方案',
    items: ['多渠道销售平台整合', '智能库存管理系统', '精准营销数据分析', '会员管理系统'],
    icon: ShoppingCart,
  },
  {
    title: '教育行业解决方案',
    items: ['在线学习平台搭建', '教学资源管理系统', '学生行为数据分析', '智能排课系统'],
    icon: School,
  },
  {
    title: '金融行业解决方案',
    items: ['风险控制系统', '客户关系管理平台', '合规数据报告系统', '移动支付解决方案'],
    icon: Money,
  },
  {
    title: '医疗健康解决方案',
    items: ['智慧医院管理系统', '电子病历系统', '远程医疗平台', '医疗大数据分析'],
    icon: FirstAidKit,
  },
  {
    title: '物流运输解决方案',
    items: ['智能调度系统', '实时跟踪平台', '仓储管理系统', '运输成本优化'],
    icon: Van,
  },
  {
    title: '政务解决方案',
    items: ['政务服务平台', '数据共享交换', '智能审批系统', '公共资源交易'],
    icon: Coin,
  },
  {
    title: '云计算解决方案',
    items: ['云原生架构设计', '容器化部署', '自动化运维', '云安全服务'],
    icon: Cloudy,
  },
]
</script>

<style scoped>
.solutions-page {
  min-height: 100vh;
  background-color: var(--color-bg-primary);
  display: flex;
  flex-direction: column;
}

.page-header {
  padding: 120px 0 60px;
  background: radial-gradient(circle at top right, #1e293b 0%, #0f172a 100%);
  text-align: center;
}

.page-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.page-subtitle {
  font-size: 18px;
  color: var(--color-text-secondary);
}

.page-content {
  padding: 60px 24px;
  flex-grow: 1;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.solution-card {
  background: var(--color-bg-secondary);
  border-radius: 24px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  overflow: hidden;
}

.solution-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-lg);
}

.card-content {
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-header {
  text-align: center;
  margin-bottom: 30px;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: all 0.3s ease;
}

.solution-card:hover .icon-wrapper {
  background: var(--color-primary);
  transform: scale(1.1);
}

.solution-icon {
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.solution-card:hover .solution-icon {
  color: white;
}

.card-header h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-text-primary);
}

.feature-list {
  flex-grow: 1;
  margin-bottom: 30px;
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
  flex-shrink: 0;
}

.card-actions {
  text-align: center;
}

@media (max-width: 992px) {
  .solutions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .solutions-grid {
    grid-template-columns: 1fr;
  }

  .page-title {
    font-size: 32px;
  }

  .page-subtitle {
    font-size: 16px;
  }

  .card-content {
    padding: 30px 20px;
  }
}
</style>
