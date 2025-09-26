import Link from "next/link";
import { CloudField } from "@/components/CloudField";

const highlights = [
  "基于随机参数的云团生成，营造自然流动效果",
  "多层级渐变与浮动动画叠加，构建沉浸式天空场景",
  "Tailwind CSS 工具类快速布局，自适应移动端",
];

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0">
        <CloudField />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-night-900/10 via-sky-night-900/50 to-sky-night-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(96,165,250,0.45),transparent_55%)]" />
      </div>

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16 text-sky-50 md:px-12">
        <div className="flex flex-col gap-10 md:gap-14">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-sky-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              实时云景实验室
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              让云朵随思绪飘动
            </h1>
            <p className="text-lg text-sky-100 md:text-xl">
              Cloud Symphony 利用 Next.js 与 Tailwind CSS 构建可视化实验，
              通过动态参数生成不同密度、透明度与速度的云团，营造沉浸式的夜空景象。
            </p>
          </div>

          <div className="grid gap-6 text-sm text-sky-100 md:grid-cols-3 md:text-base">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:border-white/30 hover:bg-white/10"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="https://nextjs.org/"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-night-800 shadow-lg shadow-sky-night-900/40 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              开始探索
            </Link>
            <span className="text-sm text-sky-200/80">
              Tailwind 实现的全屏云层效果，开箱即用
            </span>
          </div>
        </div>
      </section>

      <footer className="relative z-10 flex items-center justify-between px-6 pb-8 text-xs text-sky-100/70 md:px-12">
        <span>© {new Date().getFullYear()} Cloud Symphony Studio, Designed by Alan Xue.</span>
        <div className="flex items-center gap-3">
          <Link className="transition hover:text-white" href="https://tailwindcss.com/">
            Tailwind CSS
          </Link>
          <span className="h-1 w-1 rounded-full bg-sky-200/50" />
          <Link className="transition hover:text-white" href="https://vercel.com/">
            Next.js
          </Link>
        </div>
      </footer>
    </main>
  );
}
