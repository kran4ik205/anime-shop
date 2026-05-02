"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EDEDEA] text-black font-sans p-4 md:p-8 overflow-x-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-white rounded-[3rem] border-2 border-black min-h-screen flex flex-col relative shadow-sm"
      >
        
        {/* ШАПКА */}
        <header className="p-8 flex justify-between items-center relative z-50 bg-white/80 backdrop-blur-sm rounded-t-[3rem]">
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-[#38B000] rounded-xl border-2 border-black flex items-center justify-center text-black font-black text-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">K</div>
            <div className="w-12 h-12 bg-white rounded-xl border-2 border-black flex items-center justify-center text-black font-black text-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">+</div>
          </div>
          
          <nav className="hidden md:flex gap-12 font-black text-xs tracking-widest uppercase">
            <a href="#" className="text-black border-b-4 border-[#38B000] pb-1">Главная</a>
            <a href="#" className="text-black opacity-40 hover:opacity-100 transition-opacity">Поиск</a>
            <a href="#" className="text-black opacity-40 hover:opacity-100 transition-opacity">Сообщения</a>
          </nav>

          <div className="flex gap-4">
            <button className="px-10 py-3 rounded-full border-2 border-black font-black text-xs uppercase text-black hover:bg-gray-50 transition-colors">Войти</button>
            <button className="px-10 py-3 rounded-full bg-[#38B000] text-black border-2 border-black font-black text-xs uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Регистрация</button>
          </div>
        </header>

        {/* БАНЕР КОНТЕЙНЕР */}
        <div className="mx-8 relative mt-24 mb-24"> 
          
          {/* ЗЕЛЕНЫЙ ФОН БАНЕРА */}
          <section className="relative bg-[#A7D3A6] rounded-[3rem] border-2 border-black min-h-[480px] flex items-center overflow-hidden z-20">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute bottom-[-20%] left-[-10%] w-[120%] h-[75%] bg-[#C8E6C9] rounded-[100%] rotate-[-4deg]" />
            </div>

            {/* Звездочки */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-60">
                <svg className="absolute top-10 left-[40%] w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M12 0l3.09 8.26h8.91l-7.21 5.48 2.72 8.26-7.51-5.71-7.51 5.71 2.72-8.26-7.21-5.48h8.91z"/></svg>
                <svg className="absolute top-32 left-[55%] w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M12 0l3.09 8.26h8.91l-7.21 5.48 2.72 8.26-7.51-5.71-7.51 5.71 2.72-8.26-7.21-5.48h8.91z"/></svg>
                <svg className="absolute top-20 right-[25%] w-5 h-5 text-white fill-current" viewBox="0 0 24 24"><path d="M12 0l3.09 8.26h8.91l-7.21 5.48 2.72 8.26-7.51-5.71-7.51 5.71 2.72-8.26-7.21-5.48h8.91z"/></svg>
            </div>

            <div className="relative z-30 pl-16 w-full md:w-2/3">
              <h1 className="text-[clamp(50px,8vw,100px)] font-black leading-[0.8] tracking-tighter uppercase mb-6 text-[#1B4332]">
                KRANCHIK<br/><span>STORE</span>
              </h1>
              <p className="max-w-[400px] text-lg font-bold leading-[1.2] mb-10 text-[#1B4332]/80">
                Эксклюзивные аниме наклейки, авторский мерч и качественные канцтовары собственного производства.
              </p>
              <button className="bg-[#1B4332] text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] border-b-4 border-black hover:scale-105 transition-transform active:scale-95">
                Подробнее
              </button>
            </div>

            <div className="absolute right-10 bottom-0 select-none pointer-events-none opacity-[0.1]">
              <span className="text-[clamp(100px,20vw,300px)] font-black italic text-[#1B4332] leading-none uppercase">ANIME</span>
            </div>
          </section>

          {/* ПЕРСОНАЖ: Вынесен из overflow-hidden, чтобы ноги и голова не обрезались */}
          <div className="absolute right-[-20px] top-[45%] -translate-y-1/2 z-40 h-[110%] max-h-[580px] select-none pointer-events-none">
            <img 
              src="/mainstik.png" 
              alt="Character" 
              className="h-full w-auto object-contain scale-x-[-1] drop-shadow-[0_15px_40px_rgba(0,0,0,0.15)]" 
            />
          </div>
        </div>

        {/* НИЖНЯЯ ЧАСТЬ С АНИМАЦИЕЙ */}
        <div className="px-10 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 overflow-hidden">
          
          {/* КАТЕГОРИИ: Вылетают слева */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <h2 className="text-[32px] font-black uppercase mb-8 flex items-center gap-3">
              КАТЕГОРИИ <span className="text-[#38B000] text-4xl">→</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative aspect-[4/5] rounded-[2.5rem] border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-[#38B000]">
                <img src="/souvenirs.jpg" alt="Сувениры" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <span className="text-xl md:text-2xl font-black uppercase text-white">Сувениры</span>
                </div>
              </div>
              <div className="group relative aspect-[4/5] rounded-[2.5rem] border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-[#1B4332]">
                <img src="/clothes.jpg" alt="Одежда" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <span className="text-xl md:text-2xl font-black uppercase text-white">Одежда</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ПОСЛЕДНИЙ ДРОП: Вылетает справа */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            <h2 className="text-[32px] font-black uppercase mb-8 italic tracking-tighter">
              ПОСЛЕДНИЙ ДРОП
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 flex-grow min-h-[350px]">
              <div className="flex-1 bg-white rounded-[3.5rem] border-[3px] border-black flex items-center justify-center p-8 text-center shadow-sm hover:shadow-md transition-all">
                <span className="text-2xl font-black uppercase leading-tight">
                  НОВАЯ КОЛЛЕКЦИЯ<br/><span className="text-[#38B000]">"ANIME 2026"</span>
                </span>
              </div>
              
              <div className="flex-1 bg-[#F2F2F2] rounded-[3.5rem] border-[3px] border-[#38B000] flex flex-col justify-center px-10 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-8xl font-black text-[#38B000] leading-none">01</p>
                  <p className="font-black text-xl uppercase mt-2">КАЧЕСТВО</p>
                </div>
                <p className="absolute right-8 top-1/2 -translate-y-1/2 text-[11px] font-black uppercase leading-tight max-w-[90px] text-right">
                  СДЕЛАНО НА СОВЕСТЬ.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ФУТЕР */}
        <footer className="px-10 py-10 border-t border-gray-100 flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-black/40 mt-auto">
          <p>© 2026 KRANCHIK PRODUCTION</p>
          <span>Нижний Новгород</span>
        </footer>

      </motion.div>
    </main>
  );
}
