(function () {
  var CHAINS = [
    [
      ["inverse/phase-retrieval.html", "相位恢复"],
      ["inverse/blind-source-separation.html", "盲源分离与ICA"],
      ["inverse/overview.html", "逆问题总述"],
    ],
    [
      ["statistics/hypothesis-testing.html", "假设检验"],
      ["statistics/regression.html", "回归分析"],
      ["statistics/bayesian.html", "贝叶斯思想"],
      ["statistics/as-politics.html", "统计学的本质是政治学"],
    ],
    [
      ["dynamics/frequency-domain.html", "频域分析"],
      ["dynamics/multi-scale.html", "多时间尺度建模"],
      ["dynamics/market-microstructure.html", "市场微观结构"],
    ],
    [
      ["em/dipole-fields.html", "磁偶极子场"],
      ["em/shielding.html", "磁场屏蔽与伪影"],
    ],
    [
      ["math/quaternion.html", "四元数与旋转"],
      ["math/wirtinger-calculus.html", "Wirtinger微积分"],
      ["math/optimization.html", "优化方法"],
    ],
    [
      ["systems/state-machine-trading.html", "状态机与交易执行"],
      ["systems/agent-communication.html", "智能体通信"],
    ],
    [
      ["systems/flash-models.html", "flash模型：大模型的两个维度"],
      ["systems/existentialism.html", "被抛入世与直面虚无"],
      ["systems/existentialism-everyday.html", "存在主义：从文学、音乐到工科处境"],
      ["systems/tech-fundamentalism.html", "技术原教旨主义"],
      ["systems/sacrifice.html", "牺牲自由"],
      ["systems/gpt-chinese.html", "GPT式中文"],
      ["systems/big-tech-meritocracy.html", "大厂与优绩主义"],
      ["systems/politics-ambiguity.html", "政治学的本事，是和含混相处"],
      ["systems/language-object-scene.html", "英文对象化，中文场景化"],
      ["systems/pure-tech-heart.html", "纯粹的技术心灵"],
    ],
    [
      ["systems/tun-dns-debug.html", "Linux TUN 卡住的一次排查"],
      ["systems/ai-engineering-practice.html", "AI 辅助的专利文档修正与自动化工具链踩坑"],
    ],
  ];

  var path = location.pathname.replace(/^\/+/, "");

  var currentChain = null;
  var idx = -1;
  for (var c = 0; c < CHAINS.length; c++) {
    for (var i = 0; i < CHAINS[c].length; i++) {
      if (path.indexOf(CHAINS[c][i][0]) !== -1) {
        currentChain = CHAINS[c];
        idx = i;
        break;
      }
    }
    if (currentChain) break;
  }

  var el = document.getElementById("footer-nav");
  if (!el) return;

  var links = [];

  if (currentChain && idx > 0) {
    var p = currentChain[idx - 1];
    links.push('<a href="' + p[0].split("/").pop() + '">\u2190 ' + p[1] + "</a>");
  }

  links.push('<a href="../index.html">返回首页</a>');

  if (currentChain && idx < currentChain.length - 1) {
    var n = currentChain[idx + 1];
    links.push('<a href="' + n[0].split("/").pop() + '">' + n[1] + " \u2192</a>");
  }

  el.innerHTML = "<p>" + links.join(" &nbsp;&middot;&nbsp; ") + "</p>";
})();
