<template>
  <div class="detail-page">
    <NavBar />

    <div class="detail-header">
      <div class="container">
        <h1 class="detail-title">{{ title }}</h1>
        <div class="detail-meta" v-if="category">
          <span class="category-tag">{{ category }}</span>
        </div>
      </div>
    </div>

    <div class="container detail-content">
      <div class="glass-panel content-box">
        <p class="lead-text">{{ description }}</p>

        <div class="placeholder-content">
          <p>
            在数字化浪潮席卷全球的今天，{{
              route.params.id
            }}号项目代表了我们对未来商业形态的深度思考与实践探索。通过整合云计算、大数据分析、人工智能等前沿技术，我们为企业构建了一个全方位的数字化运营平台。
          </p>

          <p>
            项目核心亮点包括：智能化数据决策系统，能够实时分析市场趋势和用户行为；自动化业务流程引擎，大幅提升运营效率并降低人工成本；以及模块化架构设计，确保系统具备高度的可扩展性和灵活性。
          </p>

          <img alt="数字化转型解决方案" class="detail-img" />

          <p>
            实施效果显著：客户运营成本平均降低35%，业务处理效率提升60%，用户满意度达到95%以上。更重要的是，我们为企业的未来发展奠定了坚实的数字化基础，让创新成为可能，让增长成为必然。
          </p>

          <p>
            选择我们，就是选择与时代同步，选择可持续发展的未来。让我们携手共创数字化新篇章，在激烈的市场竞争中脱颖而出。
          </p>
        </div>

        <div class="actions">
          <el-button @click="router.back()">返回上一页</el-button>
          <el-button type="primary" @click="handleContact">立即咨询</el-button>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'

const route = useRoute()
const router = useRouter()

const title = ref('')
const category = ref('')
const description = ref('')

// Mock data loader based on route
const loadData = () => {
  const id = route.params.id as string
  const path = route.path

  if (path.includes('service')) {
    category.value = '数字化服务'
    title.value = '企业数字化转型咨询服务'
    description.value =
      '通过深度的行业洞察和前沿技术赋能，为您的企业量身定制数字化转型路径图，实现业务增长与效率提升的双赢局面'
  } else if (path.includes('case')) {
    category.value = '成功实践'
    title.value = '智能制造升级标杆案例'
    description.value =
      '从传统制造到智能工厂的华丽转身，见证数字化技术如何重塑生产效率、降低成本、提升产品质量，打造行业数字化转型典范'
  } else if (path.includes('solution')) {
    category.value = '行业方案'
    title.value = '新零售全渠道解决方案'
    description.value =
      '融合线上线下全场景的营销生态体系，通过数据驱动的精准营销和智能化运营，助力品牌构建私域流量池，实现业绩倍增'
  } else if (path.includes('news')) {
    category.value = '前沿资讯'
    title.value = 'AI赋能企业创新发展趋势'
    description.value =
      '深度解析人工智能、大数据、云计算等前沿技术如何重塑商业格局，为企业决策者提供数字化转型的战略参考和行动指南'
  } else {
    title.value = '详情页面'
  }
}

const handleContact = () => {
  const subject = `项目咨询 - ${title.value}`
  const body = `您好，我对${title.value}感兴趣，想了解更多详情。`
  window.location.href = `mailto:benymast@outlook.com?subject=${subject}&body=${body}`
}

onMounted(loadData)
watch(() => route.params.id, loadData)
</script>

<style scoped>
.detail-page {
  min-height: 100vh;
  background-color: var(--color-bg-primary);
  display: flex;
  flex-direction: column;
}

.detail-header {
  padding: 120px 0 60px;
  background: radial-gradient(circle at top right, #1e293b 0%, #0f172a 100%);
  text-align: center;
}

.detail-title {
  font-size: 42px;
  font-weight: 800;
  color: var(--color-text-primary);
  margin-bottom: 16px;
}

.category-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(59, 130, 246, 0.1);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.detail-content {
  padding: 60px 24px;
  flex-grow: 1;
}

.content-box {
  padding: 40px;
  background: rgba(30, 41, 59, 0.4);
}

.lead-text {
  font-size: 20px;
  color: var(--color-text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
}

.placeholder-content {
  color: var(--color-text-secondary);
  line-height: 1.8;
}

.placeholder-content p {
  margin-bottom: 24px;
}

.detail-img {
  width: 100%;
  border-radius: 16px;
  margin: 32px 0;
  box-shadow: var(--shadow-lg);
}

.actions {
  margin-top: 60px;
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>
