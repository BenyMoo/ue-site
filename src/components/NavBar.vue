<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container navbar-content">
      <div class="logo">
        <span class="logo-text">易悦</span>
        <span class="logo-dot">.</span>
      </div>
      
      <div class="desktop-menu hidden-sm-and-down">
        <a v-for="item in menuItems" 
           :key="item.index" 
           href="#" 
           @click.prevent="handleScroll(item.target)"
           class="menu-item">
          {{ item.label }}
        </a>
        <el-button type="primary" round class="contact-btn" @click="handleScroll('contactUs')">
          联系我们
        </el-button>
      </div>

      <div class="mobile-menu-btn hidden-md-and-up" @click="drawerVisible = true">
        <div class="hamburger" :class="{ 'active': drawerVisible }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <el-drawer
      v-model="drawerVisible"
      direction="rtl"
      size="70%"
      :with-header="false"
      custom-class="mobile-drawer"
    >
      <div class="mobile-menu-content">
        <div class="mobile-logo">易悦</div>
        <div class="mobile-links">
          <a v-for="item in menuItems" 
             :key="item.index" 
             href="#" 
             @click.prevent="handleMobileClick(item.target)"
             class="mobile-link">
            {{ item.label }}
          </a>
        </div>
        <el-button type="primary" size="large" class="mobile-contact-btn" @click="handleMobileClick('contactUs')">
          联系我们
        </el-button>
      </div>
    </el-drawer>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const drawerVisible = ref(false)

const menuItems = [
  { index: '1', label: '产品服务', target: 'services' },
  { index: '2', label: '解决方案', target: 'solutions' },
  { index: '3', label: '成功案例', target: 'successCases' },
  { index: '4', label: '关于我们', target: 'aboutUs' },
  { index: '5', label: '新闻资讯', target: 'news' },
]

const handleScroll = (targetId: string) => {
  const element = document.getElementById(targetId)
  if (element) {
    const offset = 80 // Header height
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const handleMobileClick = (targetId: string) => {
  drawerVisible.value = false
  setTimeout(() => {
    handleScroll(targetId)
  }, 300)
}

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background: transparent;
  backdrop-filter: blur(0px);
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
}

.navbar-content {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 28px;
  font-weight: 800;
  color: var(--color-text-primary);
  letter-spacing: -0.5px;
}

.logo-dot {
  color: var(--color-primary);
}

.desktop-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.menu-item {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text-secondary);
  position: relative;
}

.menu-item:hover {
  color: var(--color-text-primary);
}

.menu-item::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.menu-item:hover::after {
  width: 100%;
}

.contact-btn {
  background: var(--color-primary);
  border: none;
  padding: 10px 24px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
  box-shadow: var(--shadow-glow);
}

/* Mobile Menu Button */
.hamburger {
  width: 24px;
  height: 20px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text-primary);
  transition: all 0.3s ease;
}

/* Mobile Drawer Styles */
.mobile-menu-content {
  padding: 24px;
  height: 100%;
  background: var(--color-bg-primary);
  display: flex;
  flex-direction: column;
}

.mobile-logo {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 48px;
  color: var(--color-text-primary);
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: auto;
}

.mobile-link {
  font-size: 18px;
  font-weight: 500;
  color: var(--color-text-secondary);
}

.mobile-link:hover {
  color: var(--color-primary);
}

.mobile-contact-btn {
  width: 100%;
  margin-top: 24px;
}

/* Responsive Utilities */
@media (max-width: 768px) {
  .hidden-sm-and-down {
    display: none !important;
  }
}

@media (min-width: 769px) {
  .hidden-md-and-up {
    display: none !important;
  }
}
</style>
