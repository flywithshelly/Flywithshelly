import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../page';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found | Fly With Shelly' };
  return {
    title: `${post.title} | Fly With Shelly Blog`,
    description: post.excerpt,
  };
}

const articleContent: Record<string, React.ReactNode> = {
  'how-to-ace-your-flight-attendant-interview': (
    <>
      <p>After sitting in hundreds of flight attendant interviews — first as a nervous candidate, then as someone who&apos;s helped coach over 1,200 students — I can tell you exactly what separates the people who get hired from those who don&apos;t.</p>
      <p>It&apos;s not talent. It&apos;s not luck. It&apos;s preparation.</p>
      <h2>1. Know the Airline&apos;s Values Inside Out</h2>
      <p>Before your interview, spend serious time on the airline&apos;s website. Read their mission statement. Look at their social media. What do they care about? Safety? Customer experience? Innovation? Every answer you give in the interview should echo their values back to them.</p>
      <p>If Delta talks about &ldquo;people first,&rdquo; your answers should be full of examples where you put people first.</p>
      <h2>2. Master the STAR Method</h2>
      <p>Airlines use behavioral interview questions almost exclusively. &ldquo;Tell me about a time when...&rdquo; — these questions are testing your past behavior as a predictor of future performance.</p>
      <p>The STAR method gives you a framework to answer these confidently:</p>
      <ul>
        <li><strong>Situation:</strong> Set the scene briefly</li>
        <li><strong>Task:</strong> What was your responsibility?</li>
        <li><strong>Action:</strong> What specific steps did YOU take?</li>
        <li><strong>Result:</strong> What was the outcome?</li>
      </ul>
      <h2>3. Body Language is Half the Battle</h2>
      <p>Walk in like you already work there. Firm handshake, eye contact, genuine smile. Sit tall. Don&apos;t fidget. Airlines are hiring the face and attitude of their brand — show them yours is great.</p>
      <h2>4. Prepare 10 Strong Stories</h2>
      <p>Build a bank of 10 specific, real-life examples that demonstrate: customer service excellence, problem-solving under pressure, teamwork, conflict resolution, and going above and beyond.</p>
      <p>With 10 solid stories in your back pocket, you can adapt them to almost any behavioral question they throw at you.</p>
      <h2>5. Practice Out Loud — A Lot</h2>
      <p>Thinking your answers is completely different from saying them out loud. Record yourself. Do mock interviews. Have a friend grill you. The more you say your stories out loud, the more natural and confident they&apos;ll come out in the real thing.</p>
    </>
  ),
  'what-to-wear-to-a-flight-attendant-interview': (
    <>
      <p>I can&apos;t tell you how many times I&apos;ve seen an otherwise great candidate hurt their chances because of something completely avoidable: how they presented themselves visually.</p>
      <p>Airlines are in the business of first impressions. Before you open your mouth, they&apos;re evaluating whether they can picture you in uniform, representing their brand at 35,000 feet.</p>
      <h2>What to Wear</h2>
      <p>The safest approach: dress as though you&apos;re already wearing the airline&apos;s uniform. Conservative, professional, clean. Think navy, charcoal, black, or burgundy for your base outfit.</p>
      <ul>
        <li><strong>Women:</strong> A tailored dress or skirt suit, closed-toe heels (2–3 inches), minimal jewelry, hair neatly pulled back or styled away from the face</li>
        <li><strong>Men:</strong> A well-fitted suit in a dark color, white or light blue dress shirt, conservative tie, polished dress shoes</li>
      </ul>
      <h2>Grooming Details That Matter</h2>
      <p>Airlines are meticulous about appearance standards. Here&apos;s what they notice:</p>
      <ul>
        <li>Natural makeup (women) — visible tattoos need to be covered</li>
        <li>Nails: clean, trimmed, neutral colors</li>
        <li>Hair: clean, styled, away from the face</li>
        <li>Fragrance: light or none — many passengers have allergies</li>
        <li>Shoes: clean and polished</li>
      </ul>
      <h2>What NOT to Wear</h2>
      <ul>
        <li>Casual clothing (jeans, sneakers, t-shirts)</li>
        <li>Strong perfume or cologne</li>
        <li>Excessive jewelry or accessories</li>
        <li>Visible tattoos or piercings (beyond one ear piercing per ear for women)</li>
      </ul>
    </>
  ),
};

const defaultContent = (
  <>
    <p>This is a full-length article by Coach Shelly covering everything you need to know about this topic. The complete article is available for members.</p>
    <p>Key points covered in this article:</p>
    <ul>
      <li>Industry-specific tips and strategies backed by real experience</li>
      <li>Common mistakes candidates make and how to avoid them</li>
      <li>Actionable steps you can take today to improve your chances</li>
      <li>Real examples and stories from successful students</li>
    </ul>
    <p>Ready to get the full coaching experience? Join one of our membership plans for access to live sessions, mock interviews, and personalized feedback from Coach Shelly.</p>
  </>
);

const categoryColors: Record<string, string> = {
  'Interview Prep': 'bg-blue-100 text-blue-700',
  'Appearance': 'bg-pink-100 text-pink-700',
  'Airlines': 'bg-sky-100 text-sky-700',
  'Resume': 'bg-green-100 text-green-700',
  'Mindset': 'bg-purple-100 text-purple-700',
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* ── Article Header ── */}
      <div className="bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF0F5] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[#FF6B6B] font-medium mb-6 hover:underline"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="font-medium text-gray-700">Coach Shelly</span>
            </div>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </div>

      {/* ── Article Body ── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-6xl mb-10 text-center">{post.emoji}</div>
        <div className="prose prose-lg prose-gray max-w-none
          prose-headings:font-extrabold prose-headings:text-gray-900
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-ul:text-gray-600 prose-li:leading-relaxed
          prose-strong:text-gray-900
          prose-a:text-[#FF6B6B] prose-a:no-underline hover:prose-a:underline">
          {articleContent[slug] ?? defaultContent}
        </div>

        {/* Author CTA */}
        <div className="mt-16 bg-[#FFF8F8] rounded-2xl p-6 border border-[#FFE4E4] flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#ff8a8a] flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
            S
          </div>
          <div className="flex-1">
            <p className="font-bold text-gray-900 mb-1">Written by Coach Shelly</p>
            <p className="text-sm text-gray-500 mb-3">
              Former flight attendant & certified career coach with 10+ years in aviation.
              Helping aspiring FAs get hired since 2018.
            </p>
            <Link
              href="/about"
              className="text-sm font-semibold text-[#FF6B6B] hover:underline"
            >
              Read more about Shelly →
            </Link>
          </div>
        </div>
      </article>

      {/* ── Related Posts ── */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-extrabold text-gray-900 mb-8">More from the Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-[#FF6B6B]/30 hover:shadow-md transition-all overflow-hidden"
              >
                <div className="bg-gradient-to-br from-gray-50 to-[#FFF0F0] h-32 flex items-center justify-center text-5xl">
                  {p.emoji}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-[#FF6B6B] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2">{p.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Membership CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-[#FF6B6B] to-[#ff8a8a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Want Personalized Coaching?
          </h2>
          <p className="text-white/80 mb-6">
            Join Coach Shelly&apos;s membership and get live sessions, mock interviews,
            and direct feedback tailored to your specific situation.
          </p>
          <Link
            href="/membership"
            className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-50 text-[#FF6B6B] font-bold rounded-2xl shadow-lg transition-all hover:-translate-y-0.5"
          >
            View Membership Plans
          </Link>
        </div>
      </section>
    </>
  );
}
