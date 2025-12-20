import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FolderOpen, Plus } from '@phosphor-icons/react'

const sideProjects = [
  {
    title: 'Forecasting Amazon Stock Price',
    tech: ['Python', 'LSTM', 'Time Series'],
    category: 'Statistical Analysis',
    description: 'An LSTM network was engineered and trained on historical price data, configured with a 7-day lookback window to capture temporal dependencies and forecast future movements. The model avoided overfitting, with training and validation loss steadily decreasing to 0.0009 and 0.007 respectively. Clear recommendations for model enhancement were delivered, including integration of trading volume, technical indicators, and sentiment analysis.',
    link: 'https://github.com/netrialiarahmi/AMZN-StockForecast',
  },
  {
    title: 'Analysis of Education in Indonesia',
    tech: ['K-Means', 'IndoBERT', 'Clustering'],
    category: 'Statistical Analysis',
    description: 'Utilizing a 10-year dataset (2013-2023) from BPS, this project employed K-Means clustering to segment provinces, time-series analysis of key indices, and sentiment analysis using IndoBERT. The analysis identified 4 provincial clusters, revealing Papua\'s critical needs with the lowest participation rates and 28.51% of the population over 10 who have never attended school. Sentiment analysis of 484 social media data points uncovered strongly negative public sentiment regarding education costs.',
    link: 'https://github.com/netrialiarahmi/Indonesia-Education-Analysis',
  },
  {
    title: 'Time Series Analysis of Home Sales Using SARIMAX',
    tech: ['SARIMAX', 'ARIMA', 'Forecasting'],
    category: 'Statistical Analysis',
    description: 'A SARIMAX model was engineered to identify and predict long-term trends and seasonal patterns from the S&P/Case-Shiller 20-City Home Price Index (2000-2019). The process involved rigorous data transformation, stationarity testing, and hyperparameter tuning to build a robust forecasting tool. The optimal seasonal ARIMA(0,1,2)(0,1,1)12 model achieved a Mean Absolute Percentage Error (MAPE) of just 6.05% on the validation set.',
    link: 'https://online.fliphtml5.com/netri/bzlb/',
  },
  {
    title: 'Automated Sentiment Analysis For The Indonesian EV Market',
    tech: ['LLaMA 3.1', 'NLP', 'Sentiment Analysis'],
    category: 'NLP',
    description: 'A LLaMA 3.1 model was fine-tuned on a custom dataset of Indonesian social media, forums, and news articles to accurately interpret and classify public opinion on electric vehicles. The model drove a 43.5% absolute increase in marketing campaign effectiveness by targeting audiences with positive sentiment, boosting response rates from 33.2% to 76.7%. High-performance sentiment classification achieved a robust 86% F1 score, supported by 85.5% accuracy, 86% precision, and 85% recall.',
    link: 'https://joiceramiro.my.canva.site/ev-sentiment',
  },
  {
    title: 'Medical Text Classification',
    tech: ['NLP', 'Classification', 'Healthcare'],
    category: 'NLP',
    description: 'Analysis and classification of the Kaggle "Medical Transcriptions" dataset, a challenging and noisy real-world corpus with class imbalance and overlapping text. Domain knowledge was applied to strategically refine a noisy, 40-class problem into a manageable 12-class task, making the complex dataset viable for classification. A baseline machine learning model achieved ~67% accuracy on the refined dataset, with actionable recommendations for future improvement.',
    link: 'https://github.com/netrialiarahmi/MedTextClassification',
  },
  {
    title: 'Mental Health Chatbot',
    tech: ['Bi-LSTM', 'RAG', 'Chatbot'],
    category: 'NLP',
    description: 'A multi-faceted AI system featuring an Ensemble Gradient Boosting model for treatment recommendations, a Stacked Bi-LSTM for text-based emotion detection, and a Retrieval-Augmented Generation chatbot. The Bi-LSTM model achieved 86.81% accuracy in detecting stress from text, providing reliable, real-time emotional insights. The treatment recommendation model achieved 81.74% accuracy, effectively guiding users on whether to seek professional help.',
    link: 'https://github.com/netrialiarahmi/chatbot-mentalhealth',
  },
  {
    title: 'Diabetic Foot Analysis System',
    tech: ['MobileNetV3', 'CNN', 'Healthcare'],
    category: 'Computer Vision',
    description: 'A predictive model using foot pressure maps was developed by leveraging MobileNetV3, a lightweight CNN, to perform advanced image analysis and classify conditions based on pressure distribution patterns. The model achieved a validation accuracy of 87.9% and an average loss of 0.17 in classifying diabetic conditions. Healthcare professionals were provided with actionable insights from image analysis to facilitate earlier and more precise clinical interventions.',
    link: 'https://diafoot.streamlit.app',
  },
  {
    title: 'TanamTepat: Crop Recommendation',
    tech: ['MobileNetV2', 'Agriculture', 'AI'],
    category: 'Computer Vision',
    description: 'A Computer Vision powered tool for rapid soil classification was developed by leveraging MobileNetV2 to classify four primary soil types from user-submitted photos. The lightweight MobileNetV2 CNN with over 10 million parameters achieved 87.88% validation accuracy in classifying soil types directly from images. This precision agriculture tool supports 208 farmers in Lembata, eliminating the need for costly and time-consuming laboratory analysis.',
    link: 'https://github.com/netrialiarahmi/crop-recommendation/tree/main/Modelling',
  },
  {
    title: 'Coastal Litter Detection',
    tech: ['RT-DETR', 'Object Detection', 'Environment'],
    category: 'Computer Vision',
    description: 'A real-time object detection model capable of identifying various types of beach waste was delivered using a state-of-the-art RT-DETR model trained on 2,675 images to recognize 7 categories of litter. The model achieved a strong mAP@IoU[50] of 81.0% and mAP@IoU[50-95] of 60.6% on a validation set of 561 images. High reliability was delivered with an overall precision of 84.8%, performing exceptionally well on key categories like Bottle (90.6%), Styrofoam (90.4%), and Metal (88.2%).',
    link: 'https://github.com/netrialiarahmi/Automated-Coastal-Litter-Detection-Using-Computer-Vision',
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Side <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Personal projects and explorations across various data science domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sideProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="p-4 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group h-full cursor-pointer">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <FolderOpen size={20} className="text-accent" weight="duotone" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Badge className="bg-accent/20 text-accent border-accent/50 text-[10px] mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-sm font-semibold leading-tight group-hover:text-accent transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/60 mb-3 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, tIndex) => (
                      <Badge key={tIndex} variant="secondary" className="bg-muted text-foreground/70 text-[10px] px-2 py-0">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: sideProjects.length * 0.05 }}
          >
            <a 
              href="https://github.com/netrialiarahmi"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="p-4 bg-accent/5 border-accent/30 border-dashed hover:border-accent/60 transition-all duration-300 group h-full flex items-center justify-center cursor-pointer">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-3 group-hover:bg-accent/20 transition-colors">
                    <Plus size={24} className="text-accent" weight="bold" />
                  </div>
                  <p className="text-lg font-bold text-accent mono">+64</p>
                  <p className="text-xs text-muted-foreground">More Projects</p>
                </div>
              </Card>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}