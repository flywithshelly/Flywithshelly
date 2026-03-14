import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Blog | Fly With Shelly',
  description: 'Tips, advice, and insider knowledge from Coach Shelly to help you become a flight attendant. Read the latest posts on interviews, grooming, airlines, and more.',
};

export const blogPosts = [
  {
    slug: 'how-to-ace-your-flight-attendant-interview',
    title: 'How to Ace Your Flight Attendant Interview (From Someone Who\'s Been on Both Sides)',
    excerpt: 'I\'ve sat in the interviewee\'s chair — nervous, rehearsed, unsure. And I\'ve watched hundreds of candidates go through the same process from the other side. Here\'s what truly separates the hires from the passes.',
    category: 'Interview Prep',
    date: 'February 28, 2026',
    readTime: '8 min read',
    emoji: '🎤',
  },
  {
    slug: 'what-to-wear-to-a-flight-attendant-interview',
    title: 'What to Wear to a Flight Attendant Interview: The Complete Guide',
    excerpt: 'First impressions happen before you say a word. Here\'s the definitive guide on presentation, grooming, and wardrobe choices that airlines actually notice — and what to absolutely avoid.',
    category: 'Appearance',
    date: 'February 14, 2026',
    readTime: '6 min read',
    emoji: '👗',
  },
  {
    slug: 'star-method-flight-attendant-behavioral-questions',
    title: 'Using the STAR Method for Flight Attendant Behavioral Questions',
    excerpt: 'Behavioral interview questions are a key part of every airline interview. Master the STAR framework and you\'ll have a confident, structured answer for every scenario they throw at you.',
    category: 'Interview Prep',
    date: 'January 30, 2026',
    readTime: '7 min read',
    emoji: '⭐',
  },
  {
    slug: 'top-airlines-hiring-flight-attendants-2026',
    title: 'Top Airlines Hiring Flight Attendants in 2026',
    excerpt: 'Which airlines are actively recruiting right now? We break down the top carriers with open positions, their hiring timelines, and what they look for in candidates.',
    category: 'Airlines',
    date: 'January 15, 2026',
    readTime: '5 min read',
    emoji: '✈️',
  },
  {
    slug: 'group-interview-tips-flight-attendants',
    title: 'Group Interview Survival Guide for Flight Attendant Candidates',
    excerpt: 'Group interviews are one of the most nerve-wracking parts of the FA hiring process. Learn how to stand out, collaborate, and show your personality without coming across as aggressive.',
    category: 'Interview Prep',
    date: 'December 20, 2025',
    readTime: '9 min read',
    emoji: '👥',
  },
  {
    slug: 'flight-attendant-resume-tips',
    title: '5 Resume Tips That Will Get Your Flight Attendant Application Noticed',
    excerpt: 'Recruiters spend seconds scanning each resume. Here are five specific, actionable changes you can make today to make your application stand out in the pile.',
    category: 'Resume',
    date: 'December 5, 2025',
    readTime: '5 min read',
    emoji: '📝',
  },
];

const categories = ['All', 'Interview Prep', 'Appearance', 'Airlines', 'Resume', 'Mindset'];

const categoryColors: Record<string, string> = {
  'Interview Prep': 'bg-blue-100 text-blue-700',
  'Appearance': 'bg-pink-100 text-pink-700',
  'Airlines': 'bg-sky-100 text-sky-700',
  'Resume': 'bg-green-100 text-green-700',
  'Mindset': 'bg-purple-100 text-purple-700',
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#FFF5F5] via-white to-[#FFF0F5] py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-[#FFF0F0] text-[#FF6B6B] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Coach Shelly&apos;s Blog
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Tips, Advice &amp; Insider Knowledge
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Free articles to help you prepare for your flight attendant interview,
            build your resume, and navigate the application process.
          </p>
        </div>
      </section>

      {/* ── Category Filters ── */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                cat === 'All'
                  ? 'bg-[#FF6B6B] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#FFF0F0] hover:text-[#FF6B6B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* ── Featured Post ── */}
        <div className="mb-14">
          <p className="text-xs font-semibold text-[#FF6B6B] uppercase tracking-wider mb-4">Featured Post</p>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-8 bg-[#FFF8F8] rounded-3xl p-8 border border-[#FFE4E4] hover:border-[#FF6B6B]/40 hover:shadow-lg transition-all"
          >
            <div className="bg-gradient-to-br from-[#FF6B6B] to-[#ff8a8a] rounded-2xl flex items-center justify-center min-h-48 text-8xl">
              {featured.emoji}
            </div>
            <div className="flex flex-col justify-center">
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 w-fit ${categoryColors[featured.category] ?? 'bg-gray-100 text-gray-600'}`}>
                {featured.category}
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-[#FF6B6B] transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── Post Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-[#FF6B6B]/30 hover:shadow-md transition-all overflow-hidden"
            >
              <div className="bg-gradient-to-br from-gray-50 to-[#FFF0F0] h-40 flex items-center justify-center text-6xl">
                {post.emoji}
              </div>
              <div className="p-5">
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                  {post.category}
                </span>
                <h3 className="font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#FF6B6B] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Newsletter CTA ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#FFF8F8]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            Get New Posts in Your Inbox
          </h2>
          <p className="text-gray-500 mb-8">
            Join 5,000+ aspiring flight attendants who get Coach Shelly&apos;s latest tips every week.
          </p>
          <NewsletterForm />
          <p className="text-xs text-gray-400 mt-3">Unsubscribe anytime. No spam.</p>
        </div>
      </section>
    </>
  );
}
