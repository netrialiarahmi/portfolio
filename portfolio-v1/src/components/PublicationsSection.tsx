import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, ArrowUpRight } from '@phosphor-icons/react'

const publications = [
  {
    title: 'Indo-LegalBERT: Adaptasi Model XLM-RoBERTa Pada Korpus Hukum di Indonesia',
    authors: 'Netri Alia Rahmi',
    journal: 'Universitas Airlangga',
    year: '2025',
    url: 'https://ir.unair.ac.id/opac/detail-opac?id=ee3fa4195b790b480825f4382fe589273108351c',
    description: 'Perkembangan pesat Natural Language Processing (NLP) berbasis Transformer membuka peluang besar untuk otomatisasi di berbagai domain, termasuk sektor hukum yang memiliki karakteristik linguistik unik. Namun, model NLP umum seringkali gagal memahami kompleksitas teks hukum berbahasa Indonesia karena menghadapi kesenjangan semantik dan terminologis (lexical gap).',
    keyContributions: [
      'Indo-LegalBERT menunjukkan kinerja unggul dengan nilai Perplexity terendah (3,11), jauh melampaui XLM-RoBERTa (5,50), mDeBERTa (23,88), dan IndoBERT (40.865,70)',
      'Peningkatan MAP signifikan hingga 11,56 poin dibandingkan XLM-RoBERTa dalam tugas Information Retrieval',
      'Utilized LLM-OCR untuk ekstraksi teks yang akurat dengan Word Error Rate (WER) sangat rendah rata-rata 0,00315%',
    ],
    techStack: ['Python', 'PyTorch', 'Transformers', 'XLM-RoBERTa', 'BERT', 'NLP', 'LLM-OCR', 'Information Retrieval', 'MLM'],
  },
  {
    title: 'Chatbots in Academia: A Retrieval-Augmented Generation Approach for Improved Efficient Information Access',
    authors: 'Netri Alia Rahmi et al.',
    journal: 'IEEE',
    year: '2024',
    url: 'https://ieeexplore.ieee.org/document/10499652',
    description: 'Developed an intelligent chatbot to enhance information access for prospective university students, leveraging a Retrieval Augmented Generation (RAG) architecture. The system was designed to provide relevant, context-aware answers by combining a document retriever with a powerful large language model.',
    keyContributions: [
      'Designed and implemented an end-to-end RAG architecture, utilizing OpenAI GPT-3.5-Turbo for answer generation and OpenAI Ada embeddings with cosine similarity for retrieval',
      'Conducted rigorous evaluation using standard industry metrics (Recall, Precision, BLEU, ROUGE)',
      'Performed comparative analysis against alternative methods like MMR Search and other embedding models (Google Embedding-001, MPNet-Multilingual)',
      'Produced key insight that chatbot\'s advantage lies in leveraging stored conversation history for more coherent and contextual interactions',
    ],
    techStack: ['Python', 'LangChain', 'OpenAI GPT-3.5', 'RAG', 'Vector Databases', 'Embeddings', 'Cosine Similarity', 'NLP'],
  },
  {
    title: 'Latent Dirichlet Allocation Utilization as a Text Mining Method to Elaborate Learning Effectiveness',
    authors: 'Netri Alia Rahmi et al.',
    journal: 'Journal of Science and Engineering',
    year: '2023',
    url: 'https://doi.org/10.30650/jse.v1i1.3680',
    description: 'Authored a research paper analyzing Indonesian student opinions on learning effectiveness. This study utilized text mining and topic modeling (LDA) to extract actionable insights from social media data, providing a data-driven framework for educational improvement.',
    keyContributions: [
      'Conducted text mining analysis on 3,778 relevant tweets collected over a three-month period (Jan-Mar 2022) using Python Twisel library',
      'Applied Latent Dirichlet Allocation (LDA) to classify unstructured student feedback with comprehensive preprocessing using nltk and Sastrawi libraries',
      'Successfully identified three primary topics: desire for more effective learning methods, common difficulties with current systems, and high interest in cross-departmental learning',
      'Provided data-driven recommendations for educational institutions to improve teaching strategies and foster more active student participation',
    ],
    techStack: ['Python', 'LDA', 'Topic Modeling', 'Text Mining', 'nltk', 'Sastrawi', 'Twitter API', 'NLP', 'Social Media Analytics'],
  },
]

export function PublicationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="publications" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-accent">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                <div className="flex gap-4">
                  <div className="hidden sm:block p-3 bg-accent/10 rounded-lg h-fit group-hover:bg-accent/20 transition-colors">
                    <BookOpen size={28} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-foreground/70 mb-2">{pub.authors}</p>
                    <p className="text-sm text-accent/80 mb-3">
                      <span className="italic">{pub.journal}</span> ({pub.year})
                    </p>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                      {pub.description}
                    </p>

                    {pub.keyContributions && pub.keyContributions.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Key Contributions & Findings:</p>
                        <ul className="space-y-1">
                          {pub.keyContributions.map((contribution, cIndex) => (
                            <li key={cIndex} className="text-xs text-foreground/60 leading-relaxed pl-4 border-l-2 border-accent/30">
                              {contribution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {pub.techStack && pub.techStack.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-muted-foreground mb-2">Tech Stack:</p>
                        <div className="flex flex-wrap gap-2">
                          {pub.techStack.map((tech, tIndex) => (
                            <Badge key={tIndex} variant="secondary" className="bg-accent/10 text-accent border-accent/30 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-accent/50 text-accent hover:bg-accent/10"
                      asChild
                    >
                      <a href={pub.url} target="_blank" rel="noopener noreferrer">
                        View Publication
                        <ArrowUpRight size={16} className="ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}