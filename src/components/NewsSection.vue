<template>
  <section class="section news-section" id="news">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">新闻资讯</h2>
        <p class="section-subtitle">关注易悦最新动态，了解行业前沿技术趋势</p>
      </div>

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

      <div class="text-center mt-60">
        <el-button size="large" class="outline-btn">查看所有新闻</el-button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const news = [
  {
    day: '15',
    month: '10月',
    title: '易悦荣获年度最佳技术创新奖',
    description: '在近日举办的中国互联网技术大会上，易悦凭借在人工智能领域的突破性创新荣获此殊荣'
  },
  {
    day: '28',
    month: '09月',
    title: '易悦与知名企业达成战略合作',
    description: '易悦与国内某知名零售集团签署长期技术合作协议，共同推进数字化转型项目'
  },
  {
    day: '12',
    month: '09月',
    title: '易悦发布新一代低代码开发平台',
    description: '全新低代码平台V3.0正式上线，大幅降低企业应用开发门槛，提升开发效率50%以上'
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
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
