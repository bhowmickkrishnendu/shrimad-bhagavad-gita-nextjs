

import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shrimad Bhagavad Gita | Modern Wisdom & Spiritual Guide</title>
        <meta name="description" content="Explore the Shrimad Bhagavad Gita online in a modern, premium design. Discover the teachings of Krishna and Arjuna, learn about Dharma, Karma, Moksha, and more in multiple languages." />
        <meta name="keywords" content="Bhagavad Gita, Shrimad Bhagavad Gita, Krishna, Arjuna, Dharma, Karma, Moksha, Hindu scripture, Gita in Hindi, Gita in Bengali, spiritual wisdom, modern Gita" />
        <meta name="author" content="shrimadbhagvadgita.org" />
        <meta property="og:title" content="Shrimad Bhagavad Gita | Modern Wisdom & Spiritual Guide" />
        <meta property="og:description" content="Explore the Shrimad Bhagavad Gita online in a modern, premium design. Discover the teachings of Krishna and Arjuna, learn about Dharma, Karma, Moksha, and more in multiple languages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shrimadbhagvadgita.org/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shrimad Bhagavad Gita | Modern Wisdom & Spiritual Guide" />
        <meta name="twitter:description" content="Explore the Shrimad Bhagavad Gita online in a modern, premium design. Discover the teachings of Krishna and Arjuna, learn about Dharma, Karma, Moksha, and more in multiple languages." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" />
        <link rel="canonical" href="https://shrimadbhagvadgita.org/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col items-center bg-white font-sans">
      {/* Header with Krishna and Arjun image (placeholder) */}
  <header className="w-full relative h-52 sm:h-80 md:h-[28rem] flex items-end justify-center mb-12">
        {/* Full-width responsive Krishna-Arjun banner image */}
        <Image
          src="/image.jpg"
          alt="Krishna and Arjun on Kurukshetra"
          fill
          style={{objectFit: 'cover'}}
          className="z-0"
          priority
        />
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-yellow-900/20 to-yellow-100/10 z-10 animate-gradient-x" />
  <div className="absolute left-1/2 top-32 -translate-x-1/2 w-[95%] sm:w-3/4 bg-white/30 border border-yellow-300/70 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.18)] backdrop-blur-2xl z-20 flex flex-col items-center justify-center py-8 px-6 ring-2 ring-yellow-200/40 ring-offset-2 ring-offset-yellow-50">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-16 bg-gradient-to-r from-yellow-200/60 via-orange-200/40 to-yellow-100/0 rounded-full blur-2xl opacity-70 animate-pulse" />
          <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl text-center tracking-tight animate-gradient-x">Shrimad Bhagavad Gita</h1>
          <p className="text-lg sm:text-2xl text-yellow-900/90 text-center max-w-2xl mt-3 font-semibold drop-shadow-lg">A Journey of Self-Discovery and Wisdom</p>
          <div className="absolute bottom-2 right-8 w-16 h-16 bg-gradient-to-br from-yellow-300/40 to-orange-200/30 rounded-full blur-2xl opacity-60 animate-pulse" />
        </div>
      </header>

  {/* Main content with semi-transparent white background for opacity effect */}
  <div className="w-full flex flex-col items-center bg-white/80 rounded-3xl shadow-xl backdrop-blur-md" style={{zIndex: 10, position: 'relative'}}>
  {/* Language Cards */}
  <section className="flex flex-col items-center justify-center py-8 w-full">
        <span className="text-lg sm:text-xl font-semibold mb-6 text-center tracking-wide uppercase bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">Select a Language to Begin Your Journey…</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl px-2">
          <a
            href="https://bengali.shrimadbhagvadgita.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl p-8 flex flex-col items-center justify-center bg-white/10 border border-yellow-300/60 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-yellow-200/80 hover:bg-gradient-to-br hover:from-yellow-100/60 hover:to-yellow-300/40 overflow-hidden"
            style={{ minHeight: '170px' }}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-br from-yellow-100/40 via-yellow-200/30 to-yellow-300/20 opacity-80 rounded-3xl blur-[2px]" />
              <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-tr from-yellow-400/40 to-orange-300/30 rounded-full blur-2xl opacity-60" />
              <div className="absolute bottom-2 right-2 w-20 h-20 bg-gradient-to-br from-orange-400/30 to-yellow-200/20 rounded-full blur-2xl opacity-50" />
            </div>
            <span className="relative z-10 text-2xl sm:text-3xl font-extrabold text-yellow-900 mb-2 drop-shadow-lg tracking-tight">Gita in Bengali</span>
            <span className="relative z-10 text-yellow-800 text-center text-base sm:text-lg font-medium">Read the Bhagavad Gita in Bengali</span>
            {/* Removed Web3 badge */}
          </a>
          <a
            href="https://hindi.shrimadbhagvadgita.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-3xl p-8 flex flex-col items-center justify-center bg-white/10 border border-yellow-300/60 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-yellow-200/80 hover:bg-gradient-to-br hover:from-yellow-100/60 hover:to-yellow-300/40 overflow-hidden"
            style={{ minHeight: '170px' }}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-br from-yellow-100/40 via-yellow-200/30 to-yellow-300/20 opacity-80 rounded-3xl blur-[2px]" />
              <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-tr from-yellow-400/40 to-orange-300/30 rounded-full blur-2xl opacity-60" />
              <div className="absolute bottom-2 right-2 w-20 h-20 bg-gradient-to-br from-orange-400/30 to-yellow-200/20 rounded-full blur-2xl opacity-50" />
            </div>
            <span className="relative z-10 text-2xl sm:text-3xl font-extrabold text-yellow-900 mb-2 drop-shadow-lg tracking-tight">Gita in Hindi</span>
            <span className="relative z-10 text-yellow-800 text-center text-base sm:text-lg font-medium">Read the Bhagavad Gita in Hindi</span>
            {/* Removed Web3 badge */}
          </a>
        </div>
      </section>

      {/* Main Content Sections */}
  <main className="w-full max-w-5xl px-2 sm:px-6 flex flex-col gap-2">
        {/* About Section */}
        <section className="py-4">
          <div className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.13)] border border-yellow-200/60 px-10 py-10 flex flex-col justify-center items-center backdrop-blur-xl ring-1 ring-yellow-100/40">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-gradient-to-r from-yellow-200/50 via-orange-200/30 to-yellow-100/0 rounded-full blur-2xl opacity-60 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow-xl text-center tracking-tight">About the Gita</h2>
            <p className="text-yellow-800 text-lg leading-relaxed text-center max-w-3xl font-medium">The Shrimad Bhagavad Gita is a sacred Hindu scripture that is part of the ancient Indian epic Mahabharata. It is a dialogue between Prince Arjuna and his guide and charioteer, Lord Krishna, on the battlefield of Kurukshetra. The conversation takes place just before the start of a great war, as Arjuna is overcome with doubt and despair at the prospect of fighting against his own kin.</p>
            <div className="absolute bottom-2 right-8 w-12 h-12 bg-gradient-to-br from-yellow-300/40 to-orange-200/30 rounded-full blur-2xl opacity-50 animate-pulse" />
          </div>
        </section>
        {/* Dharma Section */}
        <div className="w-full flex justify-center my-2">
          <hr className="w-2/3 border-t-2 border-yellow-300 rounded-full shadow-md" />
        </div>
        <section className="py-4">
          <div className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-3xl shadow-2xl border border-yellow-200/60 px-8 py-8 flex flex-col sm:flex-row items-center sm:items-center gap-8 backdrop-blur-xl ring-1 ring-yellow-100/40">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-r from-yellow-200/40 via-orange-200/20 to-yellow-100/0 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow">Dharma</h2>
              <p className="text-yellow-800 mb-2">Dharma is your unique, inherent duty or moral obligation. In the Gita, Krishna advises Arjuna to fulfill his dharma as a warrior by fighting in the righteous war, even though it’s emotionally difficult. This teaching highlights that one’s duty is not merely a social role but a personal and spiritual obligation that must be carried out in alignment with cosmic order.</p>
            </div>
            <div className="flex items-center justify-end">
              <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-white overflow-hidden">
                <Image src="https://shrimadbhagvadgita.org/wp-content/uploads/2025/09/Dharma-01.jpg?auto=format&fit=crop&w=400&q=80" alt="Dharma" width={224} height={224} className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </section>
        {/* Karma Section */}
        <div className="w-full flex justify-center my-2">
          <hr className="w-2/3 border-t-2 border-yellow-300 rounded-full shadow-md" />
        </div>
        <section className="py-4">
          <div className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-3xl shadow-2xl border border-yellow-200/60 px-8 py-8 flex flex-col sm:flex-row items-center sm:items-center gap-8 backdrop-blur-xl ring-1 ring-yellow-100/40">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-r from-yellow-200/40 via-orange-200/20 to-yellow-100/0 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow">Karma</h2>
              <p className="text-yellow-800 mb-2">Karma is the principle of cause and effect, where every action has a consequence. The Gita’s central teaching on karma is karma yoga, or the path of selfless action. Krishna instructs Arjuna to act without being attached to the results. By performing one’s dharma selflessly and dedicating the outcomes to a higher purpose, a person can neutralize the karmic residue that binds them to the cycle of rebirth.</p>
            </div>
            <div className="flex items-center justify-end">
              <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-white overflow-hidden">
                <Image src="https://shrimadbhagvadgita.org/wp-content/uploads/2025/09/Karma-01.jpg?auto=format&fit=crop&w=400&q=80" alt="Karma" width={224} height={224} className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </section>
        {/* Moksha Section */}
        <div className="w-full flex justify-center my-2">
          <hr className="w-2/3 border-t-2 border-yellow-300 rounded-full shadow-md" />
        </div>
        <section className="py-4">
          <div className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-3xl shadow-2xl border border-yellow-200/60 px-8 py-8 flex flex-col sm:flex-row items-center sm:items-center gap-8 backdrop-blur-xl ring-1 ring-yellow-100/40">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-r from-yellow-200/40 via-orange-200/20 to-yellow-100/0 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow">Moksha</h2>
              <p className="text-yellow-800 mb-2">Moksha is the ultimate goal—liberation from the cycle of birth and death (samsara). It’s a state of self-realization and oneness with the divine, achieved by transcending the ego and material attachments. The Bhagavad Gita presents three main paths, or yogas, to achieve moksha: Karma Yoga (selfless action), Bhakti Yoga (devotion to God), and Gyana Yoga (spiritual knowledge). The Gita ultimately synthesizes these paths, suggesting that true liberation is achieved by acting in the world according to one’s dharma, without attachment to the results, and with a heart full of devotion.</p>
            </div>
            <div className="flex items-center justify-end">
              <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-white overflow-hidden">
                <Image src="https://shrimadbhagvadgita.org/wp-content/uploads/2025/09/Moksha-01.jpg?auto=format&fit=crop&w=400&q=80" alt="Moksha" width={224} height={224} className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </section>
        {/* Krishna Section */}
        <div className="w-full flex justify-center my-2">
          <hr className="w-2/3 border-t-2 border-yellow-300 rounded-full shadow-md" />
        </div>
        <section className="py-4">
          <div className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-3xl shadow-2xl border border-yellow-200/60 px-8 py-8 flex flex-col sm:flex-row items-center sm:items-center gap-8 backdrop-blur-xl ring-1 ring-yellow-100/40">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-r from-yellow-200/40 via-orange-200/20 to-yellow-100/0 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent drop-shadow">Shri Krishna : The Ultimate Reality</h2>
              <p className="text-yellow-800 mb-2">In the Shrimad Bhagavad Gita, Lord Krishna is presented as the ultimate master of the universe, a figure who embodies the highest truth and spiritual authority. His role transcends that of a mere deity; he is the origin, sustainer, and ultimate goal of all existence. This is revealed through his teachings to Arjuna on the battlefield of Kurukshetra.</p>
              <p className="text-yellow-800 mb-2">Krishna reveals that he is the source of everything—the origin, sustainer, and dissolver of the cosmos. He states, “I am the taste of water, the light of the sun and moon, the syllable Om in the Vedic mantras; I am the sound in the ether and ability in man.” This establishes him as the all-pervading reality, from which all creation emanates.</p>
              <p className="text-yellow-800 mb-2">Krishna explains that while the universe is a manifestation of his energy, he remains separate and unaffected by it. He is both within everything (immanent) and beyond everything (transcendent). This concept is captured in his words, “The whole world is woven through with me, in a shape which is formless; all beings dwell in me, while I do not dwell in them.”</p>
              <p className="text-yellow-800 mb-2">To prove his divine nature, Krishna grants Arjuna a temporary divine vision to see his “Vishvarupa” or universal form. This awe-inspiring and terrifying vision shows the entire cosmos—gods, demons, and all of creation—contained within him, confirming his identity as the supreme reality.</p>
            </div>
            <div className="flex items-center justify-end">
              <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-white overflow-hidden">
                <Image src="https://shrimadbhagvadgita.org/wp-content/uploads/2025/09/Borobhai.jpg?auto=format&fit=crop&w=400&q=80" alt="Shri Krishna: The Ultimate Reality" width={224} height={224} className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-16 mb-2">
        <div className="relative w-full bg-white/30 border-t-2 border-yellow-200/60 shadow-2xl backdrop-blur-xl px-0 py-8 flex flex-col items-center text-center ring-1 ring-yellow-100/40 overflow-hidden">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 h-10 bg-gradient-to-r from-yellow-200/40 via-orange-200/20 to-yellow-100/0 rounded-full blur-2xl opacity-40 animate-pulse" />
          <div className="mb-2 text-lg font-semibold text-yellow-900 drop-shadow bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent">Karmanye vadhikaraste ma phaleshu kadachana</div>
          <div className="mb-2 text-base font-medium text-yellow-800/90">Shrimad Bhagavad Gita</div>
          <div className="text-sm text-yellow-700/80">Copyright &copy; {new Date().getFullYear()} shrimadbhagvadgita.org. All rights reserved.</div>
          <div className="absolute bottom-2 right-8 w-16 h-12 bg-gradient-to-br from-yellow-300/40 to-orange-200/30 rounded-full blur-2xl opacity-30 animate-pulse" />
        </div>
      </footer>
      </div>
    </div>
    </>
  );
}
