<template>
  <section class="section contact-section" id="contactUs">
    <div class="container">
      <div class="contact-wrapper-glow">
        <div class="contact-wrapper glass-panel">
          <div class="contact-content text-center">
            <h2 class="section-title">联系我们</h2>
            <p class="section-desc">如有任何合作意向或技术咨询，请随时与我们联系</p>
            
            <div class="info-grid">
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

            <div class="action-area">
              <el-button type="primary" size="large" class="submit-btn" @click="handleEmail">
                发送邮件咨询 <el-icon class="el-icon--right"><Promotion /></el-icon>
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Location, ChatDotRound, Message, Clock, Promotion } from '@element-plus/icons-vue'

const handleEmail = () => {
  const subject = `项目咨询`
  const body = `您好，我想咨询关于...`
  
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
  max-width: 900px;
  margin: 0 auto;
}

@keyframes gradientBorder {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.contact-wrapper {
  padding: 60px;
  border-radius: 32px;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(20px);
  border: none;
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(to right, #fff, #94a3b8);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-desc {
  color: var(--color-text-secondary);
  font-size: 16px;
  margin-bottom: 60px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 800px;
  margin-bottom: 60px;
}

.info-item {
  display: flex;
  gap: 20px;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.3);
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
  flex-shrink: 0;
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
  text-align: left;
}

.info-item p {
  color: var(--color-text-secondary);
  font-size: 14px;
  text-align: left;
}

.action-area {
  width: 100%;
  max-width: 400px;
}

.submit-btn {
  width: 100%;
  height: 64px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 32px;
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

@media (max-width: 768px) {
  .contact-wrapper {
    padding: 40px 20px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .info-item {
    padding: 20px;
  }
}
</style>
