/* =========================================================
   冉起阳 · 个人展示平台  —  数据驱动渲染
   想新增项目？直接在 projects 数组里加一条即可。
   ========================================================= */

/* ---------- 项目数据 ---------- */
const projects = [
  {
    title: "STM32 平衡车控制系统",
    period: "2023.02 – 2023.03",
    category: "embedded",
    catLabel: "嵌入式控制",
    tags: ["STM32", "C 语言", "蓝牙控制", "自动避障", "PID"],
    summary: "基于 STM32 的自平衡小车，完成姿态控制、蓝牙遥控与自动避障功能的软硬件开发。",
    details: [
      "负责平衡车控制系统的软件设计和硬件开发，主程序编写及调试，实现设备的蓝牙控制与自动避障功能。",
      "参与系统的硬件选型与调试，确保软硬件协同稳定工作。",
      "完成项目的需求分析与方案设计，编写详细的设计文档与测试报告。"
    ]
  },
  {
    title: "STM32 无人机控制系统",
    period: "2024.06 – 2024.08",
    category: "embedded",
    catLabel: "嵌入式控制",
    tags: ["STM32", "PID 算法", "姿态解算", "无线通信", "C 语言"],
    summary: "设计并实现无人机飞行主控，包含元器件选型、电路绘制焊接、PID 与姿态解算及无线通信。",
    details: [
      "负责无人机控制系统的软件设计与开发，完成飞行主控及遥控器元器件选取、电路绘制与焊接。",
      "编写主控程序及 PID 算法、姿态解算模块，实现无线通信控制。",
      "使用 C 语言编程，实现多传感器协同配合与电机驱动控制；参与硬件选型与调试，协同排查确保软硬件适配、稳定工作。"
    ]
  },
  {
    title: "基于 STM32 的智能门锁系统",
    period: "大创项目 · 已结项",
    category: "hardware",
    catLabel: "硬件 / 智能硬件",
    tags: ["STM32", "智能硬件", "创新创业", "嵌入式"],
    summary: "大学生创新创业训练计划项目，基于 STM32 设计实现一套智能门锁系统，并成功结项。",
    details: [
      "作为创新创业大赛立项项目，基于 STM32 完成智能门锁系统的方案设计与开发。",
      "项目已顺利结项，体现从需求到落地的完整工程实践能力。"
    ]
  },
  {
    title: "电子科技协会 & 爱电创新基地工作室",
    period: "2022.10 – 2025.02",
    category: "team",
    catLabel: "团队 / 竞赛",
    tags: ["技术带领", "智能小车", "无人机", "电子设计竞赛"],
    summary: "作为主要成员组织并带领团队参与电子设计竞赛，完成智能小车、无人机等项目的开发与调试。",
    details: [
      "组织和带领团队成员参与电子设计竞赛，完成智能小车、无人机等项目的开发与调试。",
      "负责项目的需求分析、方案设计、代码编写、硬件调试与测试验证。",
      "参与技术交流与培训活动，提升团队成员技术水平与协作能力。"
    ]
  }
];

/* ---------- 技能数据 ---------- */
const skills = [
  { name: "C 语言 / 嵌入式编程", level: 90 },
  { name: "STM32 / 51 单片机", level: 88 },
  { name: "PID 控制 & 姿态解算", level: 82 },
  { name: "Altium Designer (PCB)", level: 78 },
  { name: "Keil / Proteus 开发", level: 85 },
  { name: "SolidWorks 3D 建模", level: 72 }
];
const skillTags = ["C", "STM32", "51 单片机", "Altium Designer", "Keil", "Proteus", "SolidWorks", "PID", "姿态解算", "嵌入式系统", "自动控制原理", "传感器融合", "电机驱动", "PCB 绘制"];

/* ---------- 教育 / 经历时间线 ---------- */
const timeline = [
  {
    date: "2026.09 – 至今",
    title: "上海杉达学院",
    org: "电子信息 · 硕士研究生（在读）",
    desc: "攻读电子信息专业硕士学位，围绕嵌入式系统与电子信息技术持续深入，研究方向聚焦软硬件协同与控制应用。"
  },
  {
    date: "2022.09 – 2026.07",
    title: "郑州西亚斯学院",
    org: "自动化 · 本科",
    desc: "扎实掌握自动控制原理、嵌入式系统等核心理论；自主学习 51/STM32 单片机、Altium Designer PCB 绘制、SolidWorks 三维建模，形成软硬件技术链；参与机器人 / 电子设计竞赛，熟练运用 Keil、Proteus，解决过传感器偏差、PCB 干扰等实际问题。"
  }
];

/* ---------- 荣誉 / 证书 ---------- */
const awards = [
  { icon: "🏆", name: "中国工程机器人大赛暨国际公开赛", sub: "二等奖" },
  { icon: "🥈", name: "ICAN 大学生创新创业大赛 AI 视觉检测设计挑战赛", sub: "省赛二等奖" },
  { icon: "🚪", name: "创新创业大赛结项", sub: "基于 STM32 的智能门锁系统" },
  { icon: "🎓", name: "世界机器人大赛青少年机器人设计大赛", sub: "裁判员实习证书" },
  { icon: "🏎️", name: "校级科技文化节车体对抗赛", sub: "二等奖" },
  { icon: "📜", name: "英语 CET-4 证书", sub: "大学英语四级" },
  { icon: "💡", name: "校级二等奖学金", sub: "学业优秀" },
  { icon: "⭐", name: "校级三好学生", sub: "综合荣誉" }
];

/* =========================================================
   渲染逻辑
   ========================================================= */
function el(html) { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; }

function renderProjects(filter = "all") {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = "";
  projects
    .filter(p => filter === "all" || p.category === filter)
    .forEach((p, i) => {
      const card = el(`
        <article class="pcard" data-i="${projects.indexOf(p)}">
          <div class="pcard__top">
            <span class="pcard__cat">${p.catLabel}</span>
            <span class="pcard__period">${p.period}</span>
          </div>
          <h3>${p.title}</h3>
          <p class="pcard__summary">${p.summary}</p>
          <div class="pcard__tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
          <span class="pcard__more">查看详情 →</span>
        </article>`);
      card.addEventListener("click", () => openModal(projects.indexOf(p)));
      grid.appendChild(card);
    });
}

function openModal(i) {
  const p = projects[i];
  const body = document.getElementById("modalBody");
  body.innerHTML = `
    <p class="modal__cat">${p.catLabel}</p>
    <h2 class="modal__title">${p.title}</h2>
    <p class="modal__period">${p.period}</p>
    <div class="modal__tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    <div class="modal__sec">
      <h4>项目详情</h4>
      <ul>${p.details.map(d => `<li>${d}</li>`).join("")}</ul>
    </div>`;
  const modal = document.getElementById("modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function renderSkills() {
  const bars = document.getElementById("skillBars");
  skills.forEach(s => {
    bars.appendChild(el(`
      <div class="sbar">
        <div class="sbar__head"><span>${s.name}</span><span>${s.level}%</span></div>
        <div class="sbar__track"><div class="sbar__fill" data-w="${s.level}"></div></div>
      </div>`));
  });
  document.getElementById("skillTags").innerHTML = skillTags.map(t => `<span class="tag">${t}</span>`).join("");
}

function renderTimeline() {
  document.getElementById("timeline").innerHTML = timeline.map(t => `
    <div class="tl">
      <div class="tl__date">${t.date}</div>
      <div class="tl__title">${t.title}</div>
      <div class="tl__org">${t.org}</div>
      <div class="tl__desc">${t.desc}</div>
    </div>`).join("");
}

function renderAwards() {
  document.getElementById("awardGrid").innerHTML = awards.map(a => `
    <div class="award">
      <div class="award__icon">${a.icon}</div>
      <div class="award__body"><strong>${a.name}</strong><span>${a.sub}</span></div>
    </div>`).join("");
}

/* ---------- 交互绑定 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  renderTimeline();
  renderAwards();
  document.getElementById("year").textContent = new Date().getFullYear();

  // 筛选
  document.getElementById("filters").addEventListener("click", e => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("chip--active"));
    btn.classList.add("chip--active");
    renderProjects(btn.dataset.filter);
  });

  // 弹窗关闭
  document.getElementById("modal").addEventListener("click", e => { if (e.target.dataset.close !== undefined) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  // 移动端菜单
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.addEventListener("click", e => { if (e.target.tagName === "A") links.classList.remove("open"); });

  // 滚动揭示
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("show"); io.unobserve(en.target); } });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(node => io.observe(node));

  // 技能条进入视口后填充
  const skillSec = document.getElementById("skills");
  const sio = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        document.querySelectorAll(".sbar__fill").forEach(f => f.style.width = f.dataset.w + "%");
        sio.disconnect();
      }
    });
  }, { threshold: .3 });
  sio.observe(skillSec);
});
