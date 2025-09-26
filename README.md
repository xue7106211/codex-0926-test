# Cloud Symphony

Cloud Symphony 是一个基于 **Next.js 13 App Router** 与 **Tailwind CSS** 构建的动态云景网页示例。页面在全屏画布中生成带有随机速度、规模与透明度的云团，以 CSS 变量与动画驱动，使云朵持续横向漂移、轻柔浮动，营造沉浸式的夜空氛围。

## 功能亮点

- 🎨 **程序化云朵生成**：组件运行时随机生成多组云朵参数，让每次刷新都获得不同的天空布景。
- 🌫️ **多层次氛围**：叠加渐变、发光与轻雾效果，形成富有层次感的云层。
- 📱 **响应式布局**：Tailwind CSS 工具类构建自适应布局，兼顾桌面与移动端浏览体验。

## 项目结构

```
├─ app/
│  ├─ layout.tsx        # 全局布局与页面 meta
│  ├─ page.tsx          # 首页内容与 UI 布局
│  └─ globals.css       # Tailwind 引入与自定义样式（云朵形态等）
├─ components/
│  └─ CloudField.tsx    # 动态云朵组件
├─ public/              # 静态资源目录（可按需扩展）
├─ tailwind.config.ts   # Tailwind 配置与自定义动画
├─ postcss.config.js    # PostCSS 配置
├─ tsconfig.json        # TypeScript 配置（含 @/* 路径别名）
└─ package.json         # 脚本与依赖定义
```

## 本地开发

> 需要 Node.js 18+。首次克隆后先安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

然后在浏览器访问 [http://localhost:3000](http://localhost:3000) 即可预览动态云朵效果。

## 设计说明

- 云朵由 `CloudField` 组件在客户端渲染，通过 `useMemo` 生成随机化的云朵数量、位置、缩放与动画时长。
- CSS 自定义属性（`--cloud-duration`、`--cloud-scale`）搭配 Tailwind 扩展的 `drift`/`float` 动画，使云团持续平滑漂移并保持体积。
- 自定义的渐变背景、雾化层与信息模块共同构建富有未来感的交互式演示页面。

欢迎继续扩展更多交互，例如主题切换、速度调节面板或与真实天气数据结合等。祝开发愉快！
