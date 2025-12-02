<template>
  <section class="section cases-section" id="successCases">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">成功案例</h2>
        <p class="section-subtitle">我们帮助众多企业实现了数字化转型和业务增长</p>
      </div>

      <div class="cases-grid">
        <div v-for="(item, index) in cases" :key="index" class="case-card">
          <div class="case-img-wrapper">
            <img :src="item.image" :alt="item.title" class="case-img" />
            <div class="case-overlay">
              <el-button type="primary" round>查看详情</el-button>
            </div>
          </div>
          <div class="case-content">
            <div class="case-category">{{ item.category }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-60">
        <el-button size="large" class="outline-btn">查看更多案例</el-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const cases = [
  {
    category: '电商平台',
    title: '某知名零售品牌全渠道电商平台',
    description: '为该品牌构建了线上线下一体化的电商平台，实现销售额同比增长150%',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop'
  },
  {
    category: '企业管理系统',
    title: '大型制造企业ERP系统升级',
    description: '重构企业资源规划系统，提升运营效率30%，降低管理成本20%',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2070&auto=format&fit=crop'
  },
  {
    category: '移动应用',
    title: '金融服务移动应用开发',
    description: '开发安全便捷的移动端金融服务应用，用户活跃度提升200%',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop'
  }
]
</script>

<style scoped>
.section {
  padding: 100px 0;
  background: linear-gradient(to bottom, var(--color-bg-secondary), var(--color-bg-primary));
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

.mt-60 {
  margin-top: 60px;
}

.outline-btn {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  transition: all 0.3s ease;
}

.outline-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

@media (max-width: 992px) {
  .cases-grid {
    grid-template-columns: 1fr;
  }
}
</style>
