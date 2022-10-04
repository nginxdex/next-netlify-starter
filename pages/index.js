import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
    <p>Semakin berkembangnya teknologi, semakin banyak pula cara untuk memanfaatkan kemajuan teknologi untuk melakukan kejahatan. Beberapa orang melakukan penipuan, tidak sedikit orang yang meretas komputer atau sistem dan merugikan orang lain untuk tujuan yang melanggar hukum.</p>
<p>Sebagai orang biasa yang tak paham tentang IT, kita sering penasaran dengan keseharian para hacker. Nah, para pembuat film sebenarnya ingin menunjukkan betapa keren dan cerdasnya peretasan yang dilakukan hacker, karena tidak semua peretas selalu negatif. Berikut Daftar <a href="https://www.magelang1337.com/" target="_blank" rel="noopener"><strong>Film Hacker</strong></a> yang masih layak di tonton di tahun 2020 sampai 2023.</p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
