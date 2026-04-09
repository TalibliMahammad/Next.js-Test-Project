export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-4xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl p-10">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-6">Giriş</h1>
        <form action="/login/api/auth/login" method="post" className="space-y-5">
          <label className="block text-slate-700 dark:text-slate-300">
            <span className="text-sm font-semibold">İstifadəçi adı</span>
            <input name="username" required className="mt-2 w-full rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </label>
          <label className="block text-slate-700 dark:text-slate-300">
            <span className="text-sm font-semibold">Şifrə</span>
            <input type="password" name="password" required className="mt-2 w-full rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 px-4 py-3 text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </label>
          <button type="submit" className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-white font-bold hover:bg-blue-700 transition">
            Giriş et
          </button>
        </form>
      </div>
    </div>
  );
}
