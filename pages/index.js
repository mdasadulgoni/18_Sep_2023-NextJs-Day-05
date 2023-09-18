
// 1. Import Area
import Head from 'next/head'

// 2. Functions Defination Area
function Home() {
  return (

    <>
      <Head>
        <title>Welcome to my first nextjs application</title>
      </Head>
      <header>
          <h3>Header Component</h3>
      </header>
      <main>
      <aside><h3>Aside Component</h3></aside>
      <section><h3>Section Component</h3></section>
      </main>
      <footer>
      <h3>Footer Component</h3>
      </footer>
    </>
  )
}

// Export Area
export default Home
