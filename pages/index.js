import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center font-sans">
      <nav className="fixed top-0 w-full bg-turk-red p-5 shadow-xl flex justify-between items-center z-50">
        <h1 className="text-white text-3xl font-black italic tracking-tighter">TÜRKEGLE</h1>
        <Link href="/admin" className="text-white/70 hover:text-white text-sm font-bold">Yönetim</Link>
      </nav>

      <main className="text-center px-6">
        <div className="mb-6 inline-block bg-red-100 text-turk-red px-6 py-2 rounded-full font-bold animate-pulse">
          Canlı Görüntülü Sohbet Odası
        </div>
        <h2 className="text-6xl font-black text-gray-900 mb-6 leading-tight">
          Yeni İnsanlarla <br/><span className="text-turk-red">Hemen Tanış.</span>
        </h2>
        <p className="text-gray-500 mb-10 max-w-lg mx-auto text-xl">
          Türkegle ile rastgele eşleş, sohbet et ve eğlen. Kayıt gerekmez!
        </p>
        
        <Link href="/chat" className="bg-turk-red text-white px-16 py-5 rounded-2xl font-black text-2xl hover:scale-105 transition-all shadow-2xl block sm:inline-block">
          SOHBETE BAŞLA
        </Link>
        <p className="mt-8 text-xs text-gray-400">Bu siteyi kullanarak kullanım koşullarını kabul etmiş sayılırsınız.</p>
      </main>
    </div>
  );
}
