export function GridBackgroundDemo() {
  return (
    <div className="h-[20rem] pb-18  px-96 w-[40rem] max-w-[100vw] dark:bg-black bg-slate-300  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-slate-300 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-6xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 from-gray-900 to-gray-700">
        YoQou
      </p>
    </div>
  );
}
