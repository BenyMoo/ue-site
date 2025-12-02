<template>
  <div class="cases-page">
    <NavBar />

    <div class="page-header">
      <div class="container">
        <h1 class="page-title">成功案例</h1>
        <p class="page-subtitle">我们帮助众多企业实现了数字化转型和业务增长</p>
      </div>
    </div>

    <div class="container page-content">
      <div class="cases-grid">
        <div v-for="(item, index) in cases" :key="index" class="case-card">
          <div class="case-img-wrapper">
            <img :src="item.image" :alt="item.title" class="case-img" />
            <div class="case-overlay">
              <el-button type="primary" round @click="$router.push('/case/' + (index + 1))"
                >查看详情</el-button
              >
            </div>
          </div>
          <div class="case-content">
            <div class="case-category">{{ item.category }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
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

interface CaseItem {
  category: string
  title: string
  description: string
  image?: string
}

const cases: CaseItem[] = [
  {
    category: '新零售电商',
    title: '星链购全渠道零售平台',
    description:
      '打造集线上商城、线下门店、社交营销于一体的智慧零售生态，助力传统品牌数字化转型，会员复购率提升85%',
  },
  {
    category: '智能制造',
    title: '华工智造MES生产执行系统',
    description:
      '构建数字化工厂大脑，实现生产全流程可视化管控，设备稼动率提升40%，订单交付周期缩短30%',
  },
  {
    category: '金融科技',
    title: '云财富移动理财平台',
    description:
      '重塑移动金融服务体验，集成AI智能投顾、生物识别、区块链等前沿技术，用户月均活跃时长突破300分钟',
    // image:
    // 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: '智慧教育',
    title: '智学云在线教育生态系统',
    description:
      '融合5G+VR/AR技术打造沉浸式学习场景，支持百万级并发直播，让优质教育资源触达每一个偏远角落',
    // image:
    //   'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
  },
  {
    category: '数字医疗',
    title: '慧医通智慧医院管理平台',
    description:
      '打通挂号、诊疗、药房、医保全流程，患者平均候诊时间减少60%，医生诊疗效率提升45%，医患满意度双提升',
    // image:
    //   'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: '智慧物流',
    title: '极智物流智能调度中枢',
    description:
      '运用大数据算法优化千万级订单配送路径，车辆利用率提升50%，配送时效从48小时缩短至24小时，碳排放减少35%',
    // image:
    //   'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
  },
]
</script>

<style scoped>
.cases-page {
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

.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.case-card {
  background: var(--color-bg-glass);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-border-hover);
}

.case-img-wrapper {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.case-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.case-card:hover .case-img {
  transform: scale(1.1);
}

.case-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.case-card:hover .case-overlay {
  opacity: 1;
}

.case-content {
  padding: 24px;
}

.case-category {
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.case-card h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-text-primary);
  line-height: 1.4;
}

.case-card p {
  color: var(--color-text-secondary);
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 992px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .cases-grid {
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
