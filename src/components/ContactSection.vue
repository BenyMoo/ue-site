<template>
  <section class="section contact-section" id="contactUs">
    <div class="container">
      <div class="contact-wrapper-glow">
        <div class="contact-wrapper glass-panel">
          <div class="contact-grid">
            <div class="contact-info-col">
              <h2 class="section-title">联系我们</h2>
              <p class="section-desc">如有任何合作意向或技术咨询，请随时与我们联系</p>
              
              <div class="info-list">
                <div class="info-item">
                  <div class="icon-box"><el-icon><Location /></el-icon></div>
                  <div>
                    <h4>公司地址</h4>
                    <p>上海市浦东新区陆家嘴金融中心环路232号</p>
                  </div>
                </div>
                <div class="info-item">
                  <div class="icon-box"><el-icon><ChatDotRound /></el-icon></div>
                  <div>
                    <h4>微信公众号</h4>
                    <p>易悦网络</p>
                  </div>
                </div>
                <div class="info-item">
                  <div class="icon-box"><el-icon><Message /></el-icon></div>
                  <div>
                    <h4>商务合作</h4>
                    <p>benymast@outlook.com</p>
                  </div>
                </div>
                <div class="info-item">
                  <div class="icon-box"><el-icon><Clock /></el-icon></div>
                  <div>
                    <h4>联系时间</h4>
                    <p>周一至周五 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="contact-form-col">
              <el-form label-position="top" class="modern-form">
                <el-row :gutter="20">
                  <el-col :span="12" :xs="24">
                    <el-form-item label="姓名 *">
                      <el-input v-model="form.name" placeholder="请输入您的姓名" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" :xs="24">
                    <el-form-item label="邮箱 *">
                      <el-input v-model="form.email" placeholder="请输入您的邮箱" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" :xs="24">
                    <el-form-item label="电话">
                      <el-input v-model="form.phone" placeholder="请输入您的电话" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="12" :xs="24">
                    <el-form-item label="公司名称">
                      <el-input v-model="form.company" placeholder="请输入公司名称" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="项目需求 *">
                      <el-input
                        v-model="form.message"
                        type="textarea"
                        :rows="4"
                        placeholder="请详细描述您的项目需求"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-button type="primary" size="large" class="submit-btn" @click="handleEmail">
                  发送邮件咨询 <el-icon class="el-icon--right"><Promotion /></el-icon>
                </el-button>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Location, ChatDotRound, Message, Clock, Promotion } from '@element-plus/icons-vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

const handleEmail = () => {
  const subject = `项目咨询 - ${form.company || form.name}`
  const body = `姓名: ${form.name}%0D%0A邮箱: ${form.email}%0D%0A电话: ${form.phone}%0D%0A公司: ${form.company}%0D%0A%0D%0A需求描述:%0D%0A${form.message}`
  
  window.location.href = `mailto:benymast@outlook.com?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.section {
  padding: 100px 0;
  background: radial-gradient(circle at bottom left, #0f172a 0%, #020617 100%);
  position: relative;
  overflow: hidden;
}

/* Animated Background Glow */
.section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  animation: pulse 8s infinite ease-in-out;
  pointer-events: none;
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

.contact-wrapper-glow {
  position: relative;
  padding: 2px;
  border-radius: 34px;
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary), var(--color-primary));
  background-size: 200% 200%;
  animation: gradientBorder 6s ease infinite;
}

@keyframes gradientBorder {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.contact-wrapper {
  padding: 60px;
  border-radius: 32px;
  background: rgba(15, 23, 42, 0.8); /* Darker background for contrast */
  backdrop-filter: blur(20px);
  border: none; /* Border handled by wrapper */
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(to right, #fff, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-desc {
  color: var(--color-text-secondary);
  font-size: 16px;
  margin-bottom: 40px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-item {
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateX(10px);
}

.icon-box {
  width: 56px;
  height: 56px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 24px;
  transition: all 0.3s ease;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.info-item:hover .icon-box {
  background: var(--color-primary);
  color: white;
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
}

.info-item h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

.info-item p {
  color: var(--color-text-secondary);
  font-size: 14px;
}

/* Form Styles */
.modern-form :deep(.el-input__wrapper),
.modern-form :deep(.el-textarea__inner) {
  background-color: rgba(255, 255, 255, 0.03);
  box-shadow: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
  padding: 12px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.modern-form :deep(.el-input__wrapper:hover),
.modern-form :deep(.el-textarea__inner:hover) {
  border-color: var(--color-primary);
  background-color: rgba(255, 255, 255, 0.05);
}

.modern-form :deep(.el-input__wrapper.is-focus),
.modern-form :deep(.el-textarea__inner:focus) {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  background-color: rgba(255, 255, 255, 0.08);
}

.modern-form :deep(.el-form-item__label) {
  color: var(--color-text-secondary);
  font-weight: 500;
}

.submit-btn {
  width: 100%;
  margin-top: 20px;
  height: 56px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 28px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
}

.submit-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: 0.5s;
}

.submit-btn:hover::after {
  left: 100%;
}

@media (max-width: 992px) {
  .contact-wrapper {
    padding: 30px;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
