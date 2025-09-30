<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row align="middle">
          <el-col :span="6">
            <div class="logo">易 悦</div>
          </el-col>
          <el-col :span="18">
            <el-menu mode="horizontal" :ellipsis="false" @select="handleMenuSelect">
              <el-menu-item index="1">产品服务</el-menu-item>
              <el-menu-item index="2">解决方案</el-menu-item>
              <el-menu-item index="3">支持服务</el-menu-item>
              <el-menu-item index="4">关于我们</el-menu-item>
              <el-menu-item index="5">联系我们</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <div class="banner">
          <el-row>
            <el-col :span="12">
              <h1>我们是专业的互联网服务与<br />程序开发</h1>
              <p>为企业提供定制化数字化解决方案，助力业务增长与创新</p>
              <el-button type="primary" size="large" style="background-color: #2563eb"
                >立即咨询</el-button
              >
              <el-button size="large">查看案例</el-button>
            </el-col>
            <el-col :span="12">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                class="banner-img"
                alt="Tech Background"
              />
            </el-col>
          </el-row>
        </div>
        <div class="about-us" ref="aboutUs">
          <el-row :gutter="20">
            <el-col :span="12">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                class="about-img"
                alt="Team discussing"
              />
            </el-col>
            <el-col :span="12">
              <h2>关于易悦</h2>
              <p>
                易悦专注于互联网服务和程序开发领域，拥有一支经验丰富的技术团队。我们致力于为客户提供高质量的软件开发、网站建设以及数字化转型服务，帮助企业实现业务目标。
              </p>
              <el-row>
                <el-col :span="8">
                  <h3>2022</h3>
                  <p>成立年份</p>
                </el-col>
                <el-col :span="8">
                  <h3>100+</h3>
                  <p>服务企业</p>
                </el-col>
                <el-col :span="8">
                  <h3>99%</h3>
                  <p>项目交付率</p>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="services" ref="services">
          <h2>我们的服务</h2>
          <p>为企业提供全方位的技术解决方案，助力数字化转型</p>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-card>
                <h3>网站开发</h3>
                <p>定制化企业官网、电商平台、门户网站开发，响应式设计适配各种设备</p>
                <el-link>了解更多 &rarr;</el-link>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card>
                <h3>移动应用开发</h3>
                <p>iOS/Android原生应用及跨平台应用开发，提供完整的移动解决方案</p>
                <el-link>了解更多 &rarr;</el-link>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card>
                <h3>企业管理系统</h3>
                <p>ERP、CRM、OA等企业管理系统的定制开发，提升运营效率</p>
                <el-link>了解更多 &rarr;</el-link>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="solutions" ref="solutions">
          <h2>行业解决方案</h2>
          <p>针对不同行业特点，提供定制化的数字化解决方案</p>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-card>
                <h3>电商解决方案</h3>
                <ul>
                  <li>多渠道销售平台整合</li>
                  <li>智能库存管理系统</li>
                  <li>精准营销数据分析</li>
                </ul>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card>
                <h3>教育行业解决方案</h3>
                <ul>
                  <li>在线学习平台搭建</li>
                  <li>教学资源管理系统</li>
                  <li>学生行为数据分析</li>
                </ul>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card>
                <h3>金融行业解决方案</h3>
                <ul>
                  <li>风险控制系统</li>
                  <li>客户关系管理平台</li>
                  <li>合规数据报告系统</li>
                </ul>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <div class="success-cases" ref="successCases">
          <h2>成功案例</h2>
          <p>我们帮助众多企业实现了数字化转型和业务增长</p>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-card>
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
                  class="case-img"
                  alt="E-commerce"
                />
                <h4>电商平台</h4>
                <h3>某知名零售品牌全渠道电商平台</h3>
                <p>为该品牌构建了线上线下一体化的电商平台，实现销售额同比增长150%</p>
                <el-link>查看详情 &rarr;</el-link>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card>
                <img
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=2070&auto=format&fit=crop"
                  class="case-img"
                  alt="ERP System"
                />
                <h4>企业管理系统</h4>
                <h3>大型制造企业ERP系统升级</h3>
                <p>重构企业资源规划系统，提升运营效率30%，降低管理成本20%</p>
                <el-link>查看详情 &rarr;</el-link>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card>
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
                  class="case-img"
                  alt="Mobile App"
                />
                <h4>移动应用</h4>
                <h3>金融服务移动应用开发</h3>
                <p>开发安全便捷的移动端金融服务应用，用户活跃度提升200%</p>
                <el-link>查看详情 &rarr;</el-link>
              </el-card>
            </el-col>
          </el-row>
          <el-button>查看更多案例</el-button>
        </div>
        <div class="news" ref="news">
          <h2>新闻资讯</h2>
          <p>关注易悦最新动态，了解行业前沿技术趋势</p>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-card>
                <h4>2023年10月15日</h4>
                <h3>易悦荣获年度最佳技术创新奖</h3>
                <p>
                  在近日举办的中国互联网技术大会上，易悦凭借在人工智能领域的突破性创新荣获此殊荣
                </p>
                <el-link>阅读全文 &rarr;</el-link>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card>
                <h4>2023年9月28日</h4>
                <h3>易悦与知名企业达成战略合作</h3>
                <p>易悦与国内某知名零售集团签署长期技术合作协议，共同推进数字化转型项目</p>
                <el-link>阅读全文 &rarr;</el-link>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card>
                <h4>2023年9月12日</h4>
                <h3>易悦发布新一代低代码开发平台</h3>
                <p>全新低代码平台V3.0正式上线，大幅降低企业应用开发门槛，提升开发效率50%以上</p>
                <el-link>阅读全文 &rarr;</el-link>
              </el-card>
            </el-col>
          </el-row>
          <el-button style="margin-top: 18px">查看所有新闻</el-button>
        </div>
        <div class="contact-us" ref="contactUs">
          <h2>联系我们</h2>
          <p>如有任何合作意向或技术咨询，请随时与我们联系</p>
          <el-row :gutter="20" style="margin: 16px">
            <el-col :span="12">
              <el-form label-position="top">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="姓名 *">
                      <el-input placeholder="请输入您的姓名"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="邮箱 *">
                      <el-input placeholder="请输入您的邮箱"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="电话">
                      <el-input placeholder="请输入您的电话"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="公司名称">
                      <el-input placeholder="请输入公司名称"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="项目需求 *">
                      <el-input
                        type="textarea"
                        :rows="4"
                        placeholder="请详细描述您的项目需求"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-button type="primary">提交咨询</el-button>
              </el-form>
            </el-col>
            <el-col :span="12">
              <div class="contact-info">
                <p><strong>公司地址:</strong> 上海市浦东新区陆家嘴金融中心环路1000号</p>
                <p><strong>联系电话:</strong> +86 021-1234-5678</p>
                <p><strong>商务合作:</strong> beny@yuetop.com</p>
                <p><strong>联系时间:</strong> 周一至周五 9:00-18:00</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer>
        <div class="footer-content">
          <el-row>
            <el-col :span="6">
              <h3 style="text-align: center">易悦</h3>
              <p style="font-size: 12px; padding: 16px; text-align: left">
                专业的互联网服务与程序开发公司，致力于为企业提供定制化数字化解决方案，助力业务增长与创新。
              </p>
            </el-col>
            <el-col :span="6">
              <h3>产品服务</h3>
              <ul>
                <li>网站开发</li>
                <li>移动应用开发</li>
                <li>企业管理系统</li>
                <li>电商平台建设</li>
                <li>技术咨询服务</li>
              </ul>
            </el-col>
            <el-col :span="6">
              <h3>解决方案</h3>
              <ul>
                <li>电商解决方案</li>
                <li>教育行业解决方案</li>
                <li>金融行业解决方案</li>
                <li>制造业解决方案</li>
                <li>医疗健康解决方案</li>
              </ul>
            </el-col>
            <el-col :span="6">
              <h3>支持服务</h3>
              <ul>
                <li>关于我们</li>
                <li>新闻资讯</li>
                <li>成功案例</li>
                <li>技术支持</li>
                <li>联系我们</li>
              </ul>
            </el-col>
          </el-row>
          <div class="copyright">© 2023 易悦 版权所有 | 沪ICP备12345678号</div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const services = ref<HTMLElement | null>(null)
const solutions = ref<HTMLElement | null>(null)
const aboutUs = ref<HTMLElement | null>(null)
const contactUs = ref<HTMLElement | null>(null)
const news = ref<HTMLElement | null>(null)
const successCases = ref<HTMLElement | null>(null)

const handleMenuSelect = (index: string) => {
  let element: HTMLElement | null = null
  switch (index) {
    case '1':
      element = services.value
      break
    case '2':
      element = solutions.value
      break
    case '3':
      element = successCases.value
      break
    case '4':
      element = aboutUs.value
      break
    case '5':
      element = contactUs.value
      break
    case '6':
      element = news.value
      break
  }
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.el-header {
  /* border-bottom: 1px solid #e7e7e7; */
}
.logo {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #2563eb;
}
.el-menu {
  justify-content: flex-end;
  border-bottom: none;
}
.banner {
  background-color: #40a0ff;
  color: white;
  padding: 100px 0;
  text-align: center;
}
.banner h1 {
  font-size: 36px;
}
.banner p {
  font-size: 18px;
  margin: 20px 0;
}
.banner-img {
  background-color: #f0f2f5;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #909399;
  border-radius: 10px;
  margin-right: 16px;
}
.about-us {
  padding: 80px 0;
}
.about-img {
  background-color: #f0f2f5;
  height: 400px;
  border-radius: 10px;
}
.about-us h2 {
  font-size: 30px;
  margin-bottom: 20px;
}
.about-us h3 {
  font-size: 24px;
  font-weight: bold;
}
.services {
  padding: 80px 0;
  text-align: center;
}
.services h2 {
  font-size: 30px;
  margin-bottom: 20px;
}
.services .el-card {
  border: 1px solid #e4e7ed;
  transition: box-shadow 0.3s;
  padding: 20px;
}
.services .el-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.services h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}
.services p {
  color: #606266;
  line-height: 1.6;
  margin-bottom: 15px;
}
.solutions {
  padding: 80px 0;
  background-color: #f7f7f7;
  text-align: center;
}
.solutions h2 {
  font-size: 30px;
  margin-bottom: 20px;
}
.solutions .el-card {
  border: 1px solid #e4e7ed;
  background-color: #fff;
  transition: box-shadow 0.3s;
  padding: 20px;
}
.solutions .el-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.solutions h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}
.solutions ul {
  list-style-type: '✓ ';
  padding-left: 20px;
  text-align: left;
}
.solutions ul li {
  margin-bottom: 10px;
  color: #606266;
}
.solutions ul {
  list-style-type: none;
  padding: 0;
}
.solutions ul li {
  margin-bottom: 10px;
}
.success-cases {
  padding: 80px 0;
  text-align: center;
}
.success-cases h2 {
  font-size: 30px;
  margin-bottom: 20px;
}
.success-cases .el-card {
  margin-bottom: 20px;
}
.case-img {
  background-color: #f0f2f5;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
}
.news {
  padding: 36px 0;
  text-align: center;
}
.news h2 {
  font-size: 30px;
  margin-bottom: 20px;
}
.news .el-card {
  border: 1px solid #e4e7ed;
  transition: box-shadow 0.3s;
  padding: 20px;
  text-align: left;
}
.news .el-card:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.news h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.news p {
  color: #606266;
  line-height: 1.6;
  margin-bottom: 15px;
}
.news h4 {
  color: #909399;
  margin-bottom: 10px;
}
.contact-us {
  padding: 80px 0;
  background-color: #f7f7f7;
}
.contact-us h2 {
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
}
.contact-us > p {
  text-align: center;
  margin-bottom: 40px;
}
.contact-info {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  height: 68%;
}
.contact-info p {
  text-align: left;
  margin-bottom: 20px;
}
.el-footer {
  background-color: #2c3e50;
  color: white;
  padding: 40px 0;
}
.footer-content {
  max-width: 100;
  background-color: #333;
  height: auto;
  margin: 0 auto;
}
.footer-content h3 {
  font-size: 18px;
  margin-bottom: 20px;
}
.footer-content ul {
  list-style-type: none;
  padding: 0;
}
.footer-content ul li {
  margin-bottom: 10px;
}
.copyright {
  text-align: center;
  border-top: 1px solid #555;
  padding-top: 20px;
  padding-bottom: 20px;
}

@media (max-width: 768px) {
  .el-header .el-col {
    width: 100%;
    text-align: center;
  }
  .el-menu {
    justify-content: center;
  }
  .banner-img {
    display: none;
  }
  .about-img {
    display: none;
  }
  .about-us .el-col,
  .services .el-col,
  .solutions .el-col,
  .success-cases .el-col,
  .news .el-col,
  .contact-us .el-col {
    width: 100%;
  }
  .contact-info {
    padding-left: 0;
    margin-top: 40px;
  }
  .footer-content .el-col {
    width: 50%;
    margin-bottom: 20px;
  }
}
</style>
