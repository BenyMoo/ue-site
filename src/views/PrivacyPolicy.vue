<template>
  <div class="privacy-policy">
    <div class="container">
      <div class="page-header animate-fade-in">
        <h1 class="text-gradient">隐私政策</h1>
        <p class="last-updated">最后更新时间：2024年1月1日</p>
      </div>

      <div class="policy-content glass-panel animate-fade-in">
        <section class="policy-section">
          <h2>1. 信息收集</h2>
          <p>
            我们重视用户的隐私保护，承诺不收集任何敏感个人信息。我们仅收集为提供服务所必需的基本信息，包括：
          </p>
          <ul>
            <li>用户主动提供的联系信息（如邮箱、电话等）</li>
            <li>浏览器基本信息（如浏览器类型、访问时间等）</li>
            <li>为改善服务而收集的使用统计信息</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>2. 信息使用</h2>
          <p>我们收集的信息仅用于以下目的：</p>
          <ul>
            <li>提供和改进我们的服务</li>
            <li>响应用户的咨询和需求</li>
            <li>发送服务相关的通知</li>
            <li>进行数据分析和研究，优化用户体验</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>3. 信息保护</h2>
          <p>我们采用行业标准的加密技术来保护用户信息：</p>
          <ul>
            <li>所有数据传输采用HTTPS加密协议</li>
            <li>敏感信息采用AES-256加密算法存储</li>
            <li>定期更新安全协议和加密密钥</li>
            <li>严格限制数据访问权限，仅授权人员可访问</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>4. 数据保留与删除</h2>
          <p>我们承诺定期清理和删除用户数据：</p>
          <ul>
            <li>用户联系信息：服务完成后90天内删除</li>
            <li>临时会话数据：会话结束后24小时内删除</li>
            <li>统计数据：保留不超过2年，到期自动删除</li>
            <li>用户可随时要求删除其个人信息</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>5. Cookie政策</h2>
          <p>我们使用Cookie来改善用户体验：</p>
          <ul>
            <li>仅使用必要的功能性Cookie</li>
            <li>不存储任何个人身份信息</li>
            <li>用户可随时清除或禁用Cookie</li>
            <li>Cookie有效期不超过30天</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>6. 第三方服务</h2>
          <p>
            我们可能会使用第三方服务来改善用户体验，这些服务同样遵守严格的隐私保护标准。我们不会与第三方分享任何可识别个人身份的信息。
          </p>
        </section>

        <section class="policy-section">
          <h2>7. 用户权利</h2>
          <p>用户拥有以下权利：</p>
          <ul>
            <li>了解我们收集了哪些信息</li>
            <li>要求删除个人信息</li>
            <li>拒绝信息收集（可能影响部分服务）</li>
            <li>随时联系我们咨询隐私相关问题</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>8. 政策更新</h2>
          <p>
            我们可能会不时更新本隐私政策。任何重大变更都会通过适当方式通知用户。建议用户定期查看本页面以了解最新的隐私保护政策。
          </p>
        </section>

        <section class="policy-section">
          <h2>9. 联系我们</h2>
          <p>如果您对我们的隐私政策有任何疑问或建议，请通过以下方式联系我们：</p>
          <div class="contact-info">
            <p>邮箱：benymast@outlook.com</p>
            <p>公众号：易悦网络</p>
            <p>地址：上海市浦东新区科技园区创新大厦8楼</p>
          </div>
        </section>
      </div>

      <div class="back-button animate-fade-in">
        <router-link to="/" class="btn-back">
          <span>返回首页</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 隐私政策页面组件
</script>

<style scoped>
.privacy-policy {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--color-bg-primary) 0%, #0c1220 100%);
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
}

.privacy-policy::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

.page-header {
  text-align: center;
  margin-bottom: 80px;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.last-updated {
  color: var(--color-text-secondary);
  font-size: 1rem;
  opacity: 0.8;
}

.policy-content {
  padding: 60px;
  margin-bottom: 60px;
  border: 1px solid var(--color-border);
  transition: var(--transition-normal);
}

.policy-content:hover {
  border-color: var(--color-border-hover);
  box-shadow: var(--shadow-glow);
}

.policy-section {
  margin-bottom: 50px;
}

.policy-section:last-child {
  margin-bottom: 0;
}

.policy-section h2 {
  font-size: 1.75rem;
  color: var(--color-text-primary);
  margin-bottom: 24px;
  font-weight: 600;
  border-left: 4px solid var(--color-primary);
  padding-left: 20px;
  line-height: 1.3;
}

.policy-section p {
  line-height: 1.8;
  color: var(--color-text-secondary);
  margin-bottom: 20px;
  font-size: 1.05rem;
}

.policy-section ul {
  list-style: none;
  padding-left: 0;
}

.policy-section li {
  position: relative;
  padding-left: 32px;
  margin-bottom: 16px;
  line-height: 1.7;
  color: var(--color-text-secondary);
  font-size: 1.05rem;
}

.policy-section li::before {
  content: '▸';
  color: var(--color-text-accent);
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.contact-info {
  background: var(--color-bg-secondary);
  padding: 30px;
  border-radius: 12px;
  margin-top: 20px;
  border: 1px solid var(--color-border);
}

.contact-info p {
  margin-bottom: 12px;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.contact-info p:last-child {
  margin-bottom: 0;
}

.back-button {
  text-align: center;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-hover) 100%);
  color: white;
  padding: 16px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.btn-back::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn-back:hover::before {
  left: 100%;
}

.btn-back:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow);
}

.btn-back span {
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .privacy-policy {
    padding: 100px 0 60px;
  }

  .page-header {
    margin-bottom: 60px;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .policy-content {
    padding: 40px 30px;
  }

  .policy-section h2 {
    font-size: 1.5rem;
  }

  .policy-section p,
  .policy-section li {
    font-size: 1rem;
  }

  .btn-back {
    padding: 14px 32px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .policy-content {
    padding: 30px 20px;
  }

  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
