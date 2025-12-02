<template>
  <div class="news-page">
    <NavBar />
    
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">新闻资讯</h1>
        <p class="page-subtitle">关注易悦最新动态，了解行业前沿技术趋势</p>
      </div>
    </div>

    <div class="container page-content">
      <div class="news-grid">
        <div v-for="(item, index) in news" :key="index" class="news-card">
          <div class="news-date">
            <span class="day">{{ item.day }}</span>
            <span class="month">{{ item.month }}</span>
          </div>
          <div class="news-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <router-link :to="'/news/' + (index + 1)" class="read-more">阅读全文 &rarr;</router-link>
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

const news = [
  {
    day: '15',
    month: '10月',
    title: 'AI赋能新零售：智能推荐系统助力业绩翻倍',
    description: '通过深度学习算法分析用户行为数据，我们的智能推荐引擎帮助某知名零售品牌实现转化率提升120%，客单价增长45%的显著成果。'
  },
  {
    day: '28',
    month: '09月',
    title: '云原生架构升级：支撑千万级用户并发访问',
    description: '技术团队成功完成核心产品云原生架构改造，通过微服务、容器化、DevOps等先进技术，系统性能提升300%，运维成本降低60%。'
  },
  {
    day: '12',
    month: '09月',
    title: '制造业数字化转型标杆：从传统工厂到智能制造',
    description: '某传统制造企业通过我们的数字化解决方案，实现生产效率提升85%，产品良率提高至99.2%，订单交付周期缩短50%，成为行业数字化转型典范。'
  },
  {
    day: '05',
    month: '09月',
    title: '2024数字化趋势白皮书：把握未来发展脉搏',
    description: '基于对上千家企业数字化实践的深入研究，我们发布了年度数字化趋势报告，深度解析AI、区块链、物联网等技术如何重塑商业格局。'
  },
  {
    day: '20',
    month: '08月',
    title: '携手阿里云：共建企业数字化生态',
    description: '与阿里云达成深度战略合作，整合双方技术优势，为中小企业提供一站式数字化转型服务，预计惠及10万家企业客户。'
  },
  {
    day: '08',
    month: '08月',
    title: '绿色计算计划：以科技力量守护地球家园',
    description: '启动绿色数据中心建设计划，通过AI优化的能源管理系统，预计每年减少碳排放3000吨，为构建可持续发展的数字未来贡献力量。'
  },
  {
    day: '25',
    month: '07月',
    title: '边缘智能突破：毫秒级响应赋能工业场景',
    description: '发布新一代边缘智能平台，在工业现场实现毫秒级数据处理和智能决策，帮助制造企业降低设备故障率70%，大幅提升生产连续性。'
  },
  {
    day: '10',
    month: '07月',
    title: '数据安全再升级：零信任架构护航企业上云',
    description: '推出基于零信任理念的数据安全解决方案，通过身份动态验证和细粒度权限管控，为企业上云提供金融级安全保障。'
  },
  {
    day: '30',
    month: '06月',
    title: '低代码平台3.0：让业务创新触手可及',
    description: '全新低代码平台V3.0正式上线，可视化开发效率提升80%，非IT人员也能快速构建企业级应用，加速业务创新落地。'
  }
]
</script>

<style scoped>
.news-page {
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

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.news-card {
  background: var(--color-bg-secondary);
  border-radius: 16px;
  padding: 30px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.news-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.news-date {
  margin-bottom: 20px;
  display: flex;
  align-items: baseline;
  gap: 4px;
  color: var(--color-primary);
}

.day {
  font-size: 32px;
  font-weight: 800;
  line-height: 1;
}

.month {
  font-size: 14px;
  font-weight: 600;
}

.news-content h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
  line-height: 1.4;
}

.news-content p {
  color: var(--color-text-secondary);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.read-more {
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.read-more:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

@media (max-width: 992px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 32px;
  }
  
  .page-subtitle {
    font-size: 16px;
  }
}
</style>