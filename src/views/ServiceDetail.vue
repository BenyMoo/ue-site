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
          <p>这里是详细内容页面。根据传入的 ID ({{ route.params.id }}) 加载具体数据。</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="Detail Image" class="detail-img" />
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    category.value = '服务详情'
    title.value = '服务项目详情: ' + id
    description.value = '我们提供专业的服务，满足您的业务需求。'
  } else if (path.includes('case')) {
    category.value = '成功案例'
    title.value = '案例详情: ' + id
    description.value = '探索我们如何帮助客户取得成功。'
  } else if (path.includes('solution')) {
    category.value = '解决方案'
    title.value = '解决方案详情: ' + id
    description.value = '为您量身定制的行业解决方案。'
  } else if (path.includes('news')) {
    category.value = '新闻资讯'
    title.value = '新闻详情: ' + id
    description.value = '了解最新的行业动态和公司新闻。'
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
