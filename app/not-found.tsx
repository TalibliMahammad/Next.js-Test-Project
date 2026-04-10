import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-zinc-50 dark:bg-black">
      <h1 className="text-8xl font-bold text-gray-200">404</h1>
      <h2 className="text-2xl font-bold">Səhifə tapılmadı</h2>
      <Link href="/Home" className="bg-blue-600 text-white px-6 py-2 rounded-lg">
        Məhsullara qayıt
      </Link>
    </div>
  )
}