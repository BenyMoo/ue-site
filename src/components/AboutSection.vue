<template>
  <section class="section about-section" id="aboutUs">
    <div class="container">
      <div class="about-grid">
        <div class="about-visual animate-on-scroll">
          <div class="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Team"
              class="about-img"
            />
            <div class="experience-badge">
              <span class="years">10+</span>
              <span class="text">Years Experience</span>
            </div>
          </div>
        </div>
        
        <div class="about-content animate-on-scroll">
          <h2 class="section-title">关于易悦</h2>
          <p class="section-desc">
            易悦专注于互联网服务和程序开发领域，拥有一支经验丰富的技术团队。我们致力于为客户提供高质量的软件开发、网站建设以及数字化转型服务，帮助企业实现业务目标。
          </p>
          
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number text-gradient">2022</div>
              <div class="stat-label">成立年份</div>
            </div>
            <div class="stat-item">
              <div class="stat-number text-gradient">100+</div>
              <div class="stat-label">服务企业</div>
            </div>
            <div class="stat-item">
              <div class="stat-number text-gradient">99%</div>
              <div class="stat-label">项目交付率</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 100px 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.image-wrapper {
  position: relative;
}

.about-img {
  width: 100%;
  border-radius: 24px;
  box-shadow: var(--shadow-lg);
  filter: brightness(0.9);
  transition: all 0.3s ease;
}

.about-img:hover {
  filter: brightness(1);
  transform: scale(1.02);
}

.experience-badge {
  position: absolute;
  bottom: -30px;
  right: -30px;
  background: var(--color-bg-secondary);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  text-align: center;
}

.years {
  display: block;
  font-size: 48px;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
}

.text {
  font-size: 14px;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--color-text-primary);
}

.section-desc {
  font-size: 18px;
  color: var(--color-text-secondary);
  margin-bottom: 48px;
  line-height: 1.8;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.stat-number {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 8px;
}

.stat-label {
  color: var(--color-text-secondary);
  font-size: 14px;
}

@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .experience-badge {
    right: 20px;
    bottom: -20px;
  }
}
</style>
