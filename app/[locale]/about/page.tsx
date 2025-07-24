import { useTranslations } from 'next-intl';

// Define types for the data structures
type InspirationItem = {
  name: string;
  description: string;
  type: string;
};

type Paper = {
  title: string;
  author: string;
  year: string;
  url: string;
  description: string;
};

type Article = {
  title: string;
  author: string;
  url: string;
  description: string;
};

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    { locale: 'fr' }
  ];
}

export default function AboutPage() {
  const t = useTranslations('About');
    
  return (
    <div className="bg-[#6366f1] min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[#6366f1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-8xl md:text-9xl font-black text-white mb-8 uppercase tracking-tighter transform -skew-y-2">
              {t('title')}
            </h1>
            <p className="text-3xl text-[#22c55e] font-black uppercase leading-tight mb-20 transform skew-x-1">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="py-20 bg-[#22c55e] border-t-8 border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black text-black mb-12 uppercase tracking-tighter transform -skew-x-3 text-center">
              {t('project.title')}
            </h2>
            <div className="bg-white border-8 border-black p-12 transform hover:scale-105 transition-all">
              <p className="text-2xl text-black font-black uppercase leading-tight text-center">
                {t('project.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-20 bg-[#fbbf24]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-6xl md:text-7xl font-black text-black mb-16 uppercase tracking-tighter transform -skew-x-3 text-center">
            {t('inspiration.title')}
          </h2>
                    
          <div className="grid md:grid-cols-2 gap-8">
            {(t.raw('inspiration.items') as InspirationItem[]).map((item: InspirationItem, index: number) => (
              <div key={index} className="bg-black border-8 border-black p-8 transform hover:scale-105 hover:rotate-2 transition-all">
                <div className="mb-4">
                  <span className="px-4 py-2 bg-[#ef4444] text-white font-black uppercase text-sm border-4 border-white">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-[#fbbf24] mb-6 uppercase">
                  {item.name}
                </h3>
                <p className="text-white font-bold uppercase text-lg leading-tight">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Literature Section */}
      <section className="py-20 bg-[#8b5cf6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-16 uppercase tracking-tighter transform -skew-x-3 text-center">
            {t('literature.title')}
          </h2>
                    
          {/* Research Papers */}
          <div className="mb-16">
            <h3 className="text-4xl font-black text-[#22c55e] mb-8 uppercase tracking-wide">
              {t('literature.sections.papers')}
            </h3>
            <div className="grid gap-6">
              {(t.raw('literature.papers') as Paper[]).map((paper: Paper, index: number) => (
                <div key={index} className="bg-white border-8 border-black p-8 transform hover:scale-105 hover:-rotate-1 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-black text-black mb-2 uppercase">
                        <a href={paper.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#ef4444] transition-colors">
                          {paper.title}
                        </a>
                      </h4>
                      <p className="text-lg font-bold text-black mb-2">
                        {paper.author} • {paper.year}
                      </p>
                      <p className="text-black font-medium leading-tight">
                        {paper.description}
                      </p>
                    </div>
                    <a 
                      href={paper.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-[#ef4444] text-white font-black uppercase border-4 border-black hover:bg-[#dc2626] transition-colors"
                    >
                      {t('literature.sections.read')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div>
            <h3 className="text-4xl font-black text-[#fbbf24] mb-8 uppercase tracking-wide">
              {t('literature.sections.articles')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {(t.raw('literature.articles') as Article[]).map((article: Article, index: number) => (
                <div key={index} className="bg-[#22c55e] border-8 border-black p-8 transform hover:scale-105 hover:rotate-2 transition-all">
                  <h4 className="text-2xl font-black text-black mb-4 uppercase">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      {article.title}
                    </a>
                  </h4>
                  <p className="text-lg font-bold text-black mb-4">
                    {article.author}
                  </p>
                  <p className="text-black font-medium leading-tight mb-6">
                    {article.description}
                  </p>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-black text-[#22c55e] font-black uppercase border-4 border-black hover:bg-gray-800 transition-colors"
                  >
                    {t('literature.sections.explore')}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 