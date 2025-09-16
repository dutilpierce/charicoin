import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Head>
        <title>ChariCoin — Turn Memes Into Meaning</title>
        <meta name="description" content="ChariCoin is the meme coin that lets you choose the change. Buy, vote, and track real-world impact on-chain." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="ChariCoin — Turn Memes Into Meaning" />
        <meta property="og:description" content="The meme coin that lets YOU choose the change." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://charicoin.net" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ChariCoin — Turn Memes Into Meaning" />
        <meta name="twitter:description" content="Community-voted charity meme coin." />
        <meta name="twitter:image" content="/og.png" />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-bold">❤</div>
            <span className="text-2xl font-extrabold text-gray-900">ChariCoin</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a className="hover:text-green-600" href="#how">How It Works</a>
            <a className="hover:text-green-600" href="#vote">Vote</a>
            <a className="hover:text-green-600" href="#impact">Impact</a>
            <a className="hover:text-green-600" href="#tokenomics">Tokenomics</a>
          </nav>
          <a href="https://example-dex-link.com" className="inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-white text-sm font-semibold hover:bg-green-700">Buy Now</a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-green-100 to-green-200">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Turn Memes Into Meaning</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Buy ChariCoin, vote where the money goes, and track real-world impact. The community chooses the change.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a className="rounded-full bg-green-600 text-white px-6 py-3 text-lg font-semibold hover:bg-green-700" href="https://example-dex-link.com">Buy $CHC</a>
          <a className="rounded-full border border-gray-300 px-6 py-3 text-lg font-semibold hover:bg-white" href="https://discord.gg/your-invite">Join Discord</a>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Buy ChariCoin", desc: "Get $CHC like any meme token."},
              { title: "Treasury Fills", desc: "A % of trades funds the Charity Treasury."},
              { title: "Community Votes", desc: "Holders vote on which cause to support."},
              { title: "Track Impact", desc: "See on-chain receipts and confirmations."},
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white shadow p-6">
                <div className="text-green-600 text-sm font-semibold mb-2">Step {i+1}</div>
                <div className="text-xl font-bold mb-2">{s.title}</div>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Vote */}
      <section id="vote" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Live Community Vote</h2>
          {[
            {name: "Plant Trees", pct: 45},
            {name: "Clean Water Wells", pct: 35},
            {name: "Animal Rescue", pct: 20},
          ].map((o, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-4 mb-4">
              <div className="flex justify-between text-sm font-semibold">
                <span>{o.name}</span><span>{o.pct}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
                <div className="bg-green-500 h-3" style={{width:`${o.pct}%`}}"></div>
              </div>
            </div>
          ))}
          <div className="text-center mt-6">
            <a href="https://snapshot.org/#/your-space" className="rounded-full bg-green-600 text-white px-6 py-3 text-lg font-semibold hover:bg-green-700">Connect Wallet & Vote</a>
          </div>
          <p className="text-center text-xs text-gray-500 mt-3">Demo links — wire to your DEX, Discord, and voting space when ready.</p>
        </div>
      </section>

      {/* Impact Tracker */}
      <section id="impact" className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Impact Tracker</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:"🌳", text:"12,000 trees planted"},
              {icon:"💧", text:"40 wells funded"},
              {icon:"🐶", text:"$35,000 donated to shelters"},
            ].map((it, i) => (
              <div key={i} className="rounded-2xl bg-white shadow p-8 text-center">
                <div className="text-5xl mb-2">{it.icon}</div>
                <div className="text-lg font-bold">{it.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Tokenomics</h2>
        <div className="rounded-2xl bg-white shadow p-8">
            <ul className="space-y-3 text-lg">
              <li>70% → Charity Treasury</li>
              <li>20% → Liquidity & Marketing</li>
              <li>10% → Admin Fee (Owner)</li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">Example tax: 5% per trade → 3.5% Charity, 1% Liquidity/Marketing, 0.5% Admin.</p>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-green-600 text-white text-center">
        <p className="font-semibold">© {new Date().getFullYear()} ChariCoin — Community-driven meme coin for good.</p>
        <p className="text-sm opacity-80 mt-1">Transparency pledge • Open-source contracts (coming soon)</p>
      </footer>
    </div>
  )
}
