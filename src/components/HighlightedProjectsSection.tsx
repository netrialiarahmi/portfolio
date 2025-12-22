import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, ArrowUpRight, FileText, GithubLogo, Globe } from '@phosphor-icons/react'

const competitionProjects = [
  {
    award: '3rd Winner | PHIC UNAIR 2024',
    title: 'APTO: AI-Powered Brain Tumor Detector',
    description: 'Architected APTO, an end-to-end, AI-powered diagnostic application designed to address Indonesia\'s rising brain tumor incidence, which accounts for 5,323 new cases and 4,229 deaths annually. Engineered a Vision Transformer (ViT) model trained on MRI scans to classify three primary tumor types (glioma, meningioma, pituitary). This core AI was integrated into a comprehensive mobile app with patient and clinician support tools, including tumor sizing and symptom tracking, to facilitate a more effective diagnostic workflow.',
    outcomes: [
      'Secured 3rd Place in the Public Health International Competition 2024, validating the project\'s technical innovation and positioning it as a leading example of leveraging Big Data for healthcare solutions',
      'Achieved a 98.5% overall classification accuracy, outperforming prior benchmarks like CNN+SVM (94.8%) and Back-Propagation Neural Networks (91.9%). The model demonstrated high reliability across four classes, including 99.5% for "Notumor" and 99.0% for "Meningioma"',
      'Delivered a tool that accelerates diagnosis from weeks to minutes, supports Indonesia\'s Tele-Radiology services, and fulfills all 7 dimensions of WHO service quality, with the ultimate goal of reducing the national mortality rate',
    ],
    techStack: ['Python', 'Classification', 'Vision Transformer (ViT)', 'TensorFlow', 'Deep Learning', 'Medical Imaging', 'MRI Analysis', 'Healthcare AI'],
    links: [
      { type: 'publication', url: 'https://online.fliphtml5.com/netrialiarahmi/zgrp/', label: 'Publication' },
      { type: 'webapp', url: 'https://apto-braintumor.streamlit.app', label: 'Web App' },
      { type: 'github', url: 'https://github.com/netrialiarahmi/brain-tumor/', label: 'GitHub' },
    ],
  },
  {
    award: '1st Winner | FindIT! UGM 2024',
    title: 'Promotion Optimization and Personalization',
    description: 'To address the challenge of inefficient, generic retail promotions, this project was developed to optimize marketing strategies using predictive analytics. The core of the project involved engineering a robust predictive model from a dataset of over 5,000 unique customer data points. A soft voting ensemble of three powerful gradient boosting algorithms (CatBoost, XGBoost, and LightGBM) was employed to ensure high accuracy. A real-time interactive dashboard was also developed to support data-driven decision-making for marketing teams.',
    outcomes: [
      'Secured 1st Place victory out of 202 teams by achieving F1 Score of 83.34%. Engineered a high-performance predictive model by developing a soft voting ensemble of CatBoost, XGBoost, and LightGBM on a dataset of over 5,000 customer points',
      'Deployed the predictive model to identify high-potential customer segments, enabling a strategic shift from mass-marketing to targeted campaigns. This data-driven approach allowed for more efficient budget allocation, contributing to a 20% reduction in marketing costs while improving campaign relevance and driving a 30% increase in customer response rates',
      'Contributed to a 25% Increase in Customer Retention Through Personalization. Utilized the model to predict promotion acceptance on an individual customer level, enabling the delivery of highly personalized offers based on unique shopping behaviors',
    ],
    techStack: ['Python','Classification', 'Tree Model', 'Ensemble Learning', 'Soft Voting', 'Scikit-learn', 'Pandas', 'Streamlit', 'Data Visualization'],
    links: [
      { type: 'publication', url: 'https://online.fliphtml5.com/netrialiarahmi/bgpb/', label: 'Publication' },
      { type: 'webapp', url: 'https://iristentan-findit2024.streamlit.app', label: 'Web App' },
      { type: 'github', url: 'https://github.com/netrialiarahmi/Retail-Promotion-Optimization/', label: 'GitHub' },
    ],
  },
  {
    award: '3rd Winner | MCF ITB 2024',
    title: 'Predictive Modeling for Cardiovascular Health',
    description: 'To address the challenge of proactive cardiovascular health management, the analysis was developed to analyze variable and predict cholesterol levels. The project involved analyzing a complex dataset of health metrics and lifestyle data from over 1,300 individuals. An advanced machine learning framework was engineered, utilizing feature engineering and a soft voting ensemble of CatBoost, ExtraTreesClassifier, and Neural Networks to ensure high predictive power and model robustness.',
    outcomes: [
      'Secured 3rd Place in a Prestigious National Competition. Won a top-three rank in the MCF ITB 2024 Data Science Competition, validating the project\'s advanced technical implementation and its significant potential for public health innovation',
      'Achieved 98.04% F1 Score in Health Prediction. The ensemble model delivered exceptional performance, achieving an F1 Score of 98.04% and an accuracy of 97.96% in predicting cholesterol levels, demonstrating high precision and reliability for a critical health metric',
      'Developed a Robust, Multi-Classifier Machine Learning Framework. Engineered a sophisticated and reliable machine learning framework that successfully integrates multiple diverse classifiers. This provided a powerful system for delivering the personalized healthcare recommendations essential for proactive health management',
    ],
    techStack: ['Python', 'Regression', 'Tree Model', 'Neural Networks', 'Ensemble Learning', 'Feature Engineering', 'Scikit-learn', 'TensorFlow', 'Healthcare Analytics'],
    links: [
      { type: 'publication', url: 'https://online.fliphtml5.com/netrialiarahmi/kpdg/', label: 'Publication' },
      { type: 'webapp', url: 'https://cholesterol-prediction.streamlit.app', label: 'Web App' },
      { type: 'github', url: 'https://cholesterol-prediction.streamlit.app', label: 'GitHub' },
    ],
  },
  {
    award: '3rd Winner | Best Presentation | GAMMAFEST IPB 2024',
    title: 'Sirekap NextGen: OCR-Powered Election Form Verification',
    description: 'To address the challenges of manual vote tallying from C1 election forms, a process prone to human error and delays, the Sirekap NextGen platform was developed. The project involved building an advanced image classification system to automate the recognition of handwritten numbers and symbols. A ResNet50 deep learning model was engineered and trained on a dataset of over 1,800 C1 forms that underwent rigorous preprocessing, including rotation correction, noise reduction, and contrast enhancement.',
    outcomes: [
      'Secured Top-Tier Recognition for Technical Excellence and Presentation. Won 3rd Place and the Best Presentation award at the Gammafest IPB 2024 Data Science Competition, recognizing the project\'s technical sophistication and its impactful solution for electoral integrity',
      'Achieved 98.7% Accuracy with High-Speed Processing. The ResNet50 model delivered a 98.7% accuracy in recognizing numbers and symbols on C1 forms. The system was optimized to achieve a processing time of under 10 seconds per form, making it highly effective for rapid validation',
      'Designed a Scalable Solution for Enhanced Electoral Transparency. Provided an essential tool for improving data transparency, designed for real-time vote tallying across 200 polling stations and scalable to support up to 700 election locations',
    ],
    techStack: ['Python', 'Classification', 'ResNet50', 'OCR', 'Computer Vision', 'Deep Learning', 'TensorFlow', 'Image Preprocessing', 'OpenCV', 'Election Technology'],
    links: [
      { type: 'publication', url: 'https://online.fliphtml5.com/netrialiarahmi/oelb/', label: 'Publication' },
      { type: 'presentation', url: 'https://perfectia.my.canva.site/gammafestipb', label: 'Presentation' },
      { type: 'github', url: 'https://github.com/netrialiarahmi/sirekap-nextgen/', label: 'GitHub' },
    ],
  },
  {
    award: '3rd Winner | ICONIC IT UNSIL 2024',
    title: 'Fintech Risk Assessment & Automation',
    description: 'Built a predictive model to automate and optimize the credit card approval process, analyzing 1,548 customer data points across demographic and financial profiles. The solution utilized a Catboost model for its superior performance and integrated SHAP analysis to ensure model interpretability and fairness. Additionally, developed a multiclass classification model to predict various mental health conditions from questionnaire responses, addressing the need for early and accurate diagnosis. The project leveraged Llama 3.1 and LangChain to analyze text data from 5,000 patients, applying advanced NLP and feature extraction techniques to interpret nuanced responses.',
    outcomes: [
      'Secured 3rd Place in the ICONIC IT UNSIL 2024 Data Science Competition, validating the project\'s innovative approach and technical execution',
      'Dramatically improved approval efficiency by increasing the approval rate from a baseline of 11.3% to 70.3%. Minimized financial risk for the institution by reducing the credit default rate to an exceptionally low 0.1%, effectively filtering out high-risk applicants',
      'Achieved a 90.32% accuracy in classifying different mental health conditions, demonstrating the model\'s high reliability for clinical support. Provided clear, actionable insights into the key drivers of creditworthiness by using SHAP analysis',
    ],
    techStack: ['Python', 'Classification','CatBoost', 'SHAP', 'LLaMA 3.1', 'LangChain', 'NLP', 'Explainable AI', 'Scikit-learn', 'Financial Analytics'],
    links: [
      { type: 'publication', url: 'https://online.fliphtml5.com/netrialiarahmi/hxta/', label: 'Publication' },
      { type: 'webapp', url: 'https://fintech-risk-iconic.streamlit.app', label: 'Web App' },
      { type: 'github', url: 'https://github.com/netrialiarahmi/Mental-Health-Fintech/', label: 'GitHub' },
    ],
  },
  {
    award: 'Most Favorite Project | Bukit Vista 2024',
    title: 'Competitive Pricing Analysis & Growth Strategy',
    description: 'In a 24-hour data science hackathon, a robust framework for competitive pricing analysis was developed to enhance Bukit Vista\'s market strategy. The project involved analyzing a massive dataset of 12,228 competitor Airbnb listings and 364 Bukit Vista properties. A multi-model approach was engineered, utilizing Prophet for base price forecasting and an ensemble of LightGBM and CatBoost to identify pricing outliers.',
    outcomes: [
      'Won "Most Favorite Project" for Delivering Critical Market Insights. The project earned this award by providing clear, data-driven insights through an interactive visualization, which revealed that Bukit Vista\'s prices were frequently higher than market averages. This identified immediate opportunities for strategic price adjustments to improve competitiveness',
      'Delivered a Comprehensive Machine Learning Framework for Pricing. Provided a reusable framework that integrates time-series forecasting (Prophet) with advanced outlier detection (LightGBM, CatBoost). This enables Bukit Vista to continuously optimize pricing based on market trends and supports dynamic, data-informed decision-making',
      'Identified Actionable Opportunities for Strategic Growth. The analysis extended beyond pricing to provide data-backed recommendations for business growth. This included identifying and recommending strategic expansion into underrepresented, high-potential areas like Kintamani to improve market reach',
    ],
    techStack: ['Python', 'Clustering',  'Time Series','Spatial Analysis', 'Outlier Detection','Prophet', 'Ensemble Learning', 'Data Visualization', 'Market Analysis'],
    links: [
      { type: 'publication', url: 'https://online.fliphtml5.com/netrialiarahmi/hxta/', label: 'Publication' },
      { type: 'presentation', url: 'https://www.canva.com/design/DAGzWjT5eOI/sPSazDLbp7pNUqXeyQJfkA/view?utm_content=DAGzWjT5eOI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc10b82ba38', label: 'Presentation' },
      { type: 'github', url: 'https://github.com/netrialiarahmi/Competitive-Pricing-Analysis-Growth-Strategy', label: 'GitHub' },
    ],
  },
  {
    award: '2nd Winner | Data Slayer IT Telkom 2023',
    title: 'EcoFuture: Predictive Modeling for Carbon Emission Reduction',
    description: 'To address the critical challenge of rising transportation emissions, the EcoFuture platform was developed to accurately predict and manage carbon footprints. The project involved analyzing a comprehensive dataset of 54,937 data points on vehicle emissions and fuel consumption. A high-performance LightGBM model was engineered to forecast emissions, with its reliability validated through a rigorous 10-fold cross-validation process.',
    outcomes: [
      'Secured 2nd Place in a National Machine Learning Competition. Won a top-two rank in the Data Slayer IT Telkom 2023 competition, recognizing the project\'s technical rigor, model accuracy, and its potential for positive environmental impact',
      'Achieved High-Precision Forecasting with an RMSE of 19.05. The LightGBM model delivered exceptional precision, achieving a low Root Mean Square Error (RMSE) of 19.05 on the test data. This demonstrated the model\'s strong capability to accurately forecast carbon emissions',
      'Delivered Actionable Insights for Emission Reduction. The model successfully identified vehicles with high emission rates (over 243 g/km). Based on these predictions, the platform provided tailored recommendations for reducing emissions by optimizing factors like engine size and transmission type',
    ],
    techStack: ['Python','Regression', 'LightGBM', 'Machine Learning', 'Cross-Validation', 'Scikit-learn', 'Pandas', 'Environmental Analytics', 'Emission Forecasting'],
    links: [
      { type: 'publication', url: 'https://online.fliphtml5.com/netri/unob/', label: 'Publication' },
      { type: 'github', url: 'https://github.com/netrialiarahmi/Predictive-Modeling-for-Carbon-Emission-Reduction', label: 'GitHub' },
    ],
  },
  {
    award: 'Best Metric Performance | Satria Data 2023',
    title: 'Indo-LegalBERT & Plate Detection Model',
    description: 'To address the legal uncertainty caused by contradictory laws in Indonesia, Indo-LegalBERT, the nation\'s first domain-specific language model for the legal sector, was developed. This 335.2 million parameter model was adapted from the IndoBERT-large architecture and trained via Masked Language Modeling (MLM) on a custom corpus of 10,000 Indonesian legal documents. The model was subsequently fine-tuned for a Natural Language Inference (NLI) task on a synthetic dataset of 33,273 legal clause pairs to accurately detect contradictions. Additionally, developed a computer vision pipeline to provide a highly accurate and efficient solution for real-time traffic monitoring and security applications.',
    outcomes: [
      'The domain adaptation dramatically improved legal text comprehension, reducing the model\'s Perplexity score from 42,627.77 down to 4.38—a ~99.99% reduction that proves its superior understanding of the legal domain',
      'The fine-tuned NLI model achieved a final accuracy of 85.42% on the unseen test set (a 25.6% improvement over its 68% baseline), with a high macro precision of 85.66%. Demonstrated real-world value by analyzing approximately 1 million legal clause pairs and successfully performing a zero-shot prediction',
      'Engineered the plate detection system using CRAFT for text detection and a CRNN for character recognition. Achieved 98.89% recognition accuracy while processing 200 images in just 36 seconds',
    ],
    techStack: ['Python', 'Classification', 'Indo-LegalBERT', 'NLP', 'MLM', 'NLI', 'Transformers', 'CRAFT', 'CRNN', 'OCR', 'Computer Vision', 'PyTorch', 'Legal Tech'],
    links: [
      { type: 'publication', url: 'https://online.fliphtml5.com/netri/rknr/', label: 'Publication' },
      { type: 'webapp', url: 'https://huggingface.co/archi-ai/Indo-LegalBERT', label: 'HuggingFace' },
      { type: 'github', url: 'https://github.com/netrialiarahmi/plate-detection', label: 'GitHub' },
    ],
  },
]

export function HighlightedProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getIconForLinkType = (type: string) => {
    switch (type) {
      case 'github':
        return <GithubLogo size={14} className="mr-1" />
      case 'webapp':
        return <Globe size={14} className="mr-1" />
      case 'publication':
        return <FileText size={14} className="mr-1" />
      case 'presentation':
        return <FileText size={14} className="mr-1" />
      default:
        return <ArrowUpRight size={14} className="mr-1" />
    }
  }

  return (
    <section id="highlighted-projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Competition <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Award-winning data science projects from national and international competitions, demonstrating excellence in statistical analysis, NLP, and computer vision
          </p>
        </motion.div>

        <div className="space-y-8">
          {competitionProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
                <div className="flex gap-4">
                  <div className="hidden sm:block p-3 bg-accent/10 rounded-lg h-fit group-hover:bg-accent/20 transition-colors">
                    <Lightbulb size={28} className="text-accent" weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <Badge className="bg-accent/20 text-accent border-accent/50 font-semibold mb-2 text-xs">
                        {project.award}
                      </Badge>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Key Outcomes & Results:</p>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, oIndex) => (
                          <li key={oIndex} className="text-sm text-foreground/60 leading-relaxed pl-4 border-l-2 border-accent/30">
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, tIndex) => (
                          <Badge key={tIndex} variant="secondary" className="bg-accent/10 text-accent border-accent/30 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link, lIndex) => (
                          <Button
                            key={lIndex}
                            size="sm"
                            variant="outline"
                            className="border-accent/50 text-accent hover:bg-accent/10 text-xs"
                            asChild
                          >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                              {getIconForLinkType(link.type)}
                              {link.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    )}
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
