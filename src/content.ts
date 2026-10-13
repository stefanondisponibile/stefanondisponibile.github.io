// Site content, sourced from Stefano's CV.

export type Role = {
  title: string
  highlights: string[]
}

export type Job = {
  company: string
  url: string
  period: string
  roles: Role[]
}

export type Skill = {
  name: string
  level: 'expert' | 'advanced' | 'intermediate'
  uses: string
}

export type Link = {
  label: string
  url: string
}

export const profile = {
  name: 'Stefano Frassetto',
  tagline: 'I design and operate data platforms and machine learning systems.',
  about: [
    "I'm a Senior Data Engineer at Qonto. For nearly a decade I've built terabyte-scale data platforms, led a data engineering team, and taken NLP and ML models from research to production.",
  ],
}

export const experience: Job[] = [
  {
    company: 'Qonto',
    url: 'https://qonto.com',
    period: '2026 – present',
    roles: [
      {
        title: 'Senior Data Engineer',
        highlights: ['Maintained data pipelines and services within the AI engine team.'],
      },
    ],
  },
  {
    company: 'SpazioDati',
    url: 'https://spaziodati.eu',
    period: '2021 – 2026',
    roles: [
      {
        title: 'Tech Lead',
        highlights: [
          'Owned a multi-source data platform ingesting several TB per week, powering analytics and ML products.',
          'Designed the end-to-end batch and streaming architecture for ingestion, processing and storage.',
          'Led and mentored a team of 5 data engineers, setting technical direction and code quality standards.',
        ],
      },
      {
        title: 'Data Engineer',
        highlights: [
          'Built and operated large-scale pipelines ingesting terabytes from web crawlers, APIs and databases into a unified analytics and ML platform.',
          'Implemented Spark pipelines for cleaning, enrichment and feature generation over high-volume datasets.',
          'Designed data models and storage layouts balancing analytical performance, ML feature access and cost.',
        ],
      },
    ],
  },
  {
    company: 'Responsa',
    url: 'https://responsa.ai',
    period: '2019 – 2021',
    roles: [
      {
        title: 'Machine Learning Engineer',
        highlights: [
          'Built and deployed NLP models (BERT, T5, embeddings) for entity extraction, intent detection and semantic search.',
          'Created training and inference pipelines to move models from research into production.',
          'Exposed ML models via APIs and batch pipelines for customer-facing products.',
        ],
      },
    ],
  },
  {
    company: 'Competitoor',
    url: 'https://competitoor.com',
    period: '2018 – 2019',
    roles: [
      {
        title: 'Machine Learning Engineer',
        highlights: [
          'Built and maintained ML models for product clustering and web page classification over large-scale e-commerce data.',
          'Designed and automated web data ingestion pipelines (scraping, cleaning, labeling) feeding downstream ML and analytics.',
        ],
      },
    ],
  },
  {
    company: 'Benetton',
    url: 'https://benetton.com',
    period: '2017 – 2018',
    roles: [
      {
        title: 'Data Scientist',
        highlights: [
          'Optimized material planning for production scheduling.',
          'Forecast sales and purchase volumes for raw materials.',
          'Automated the creation of analytics reports.',
        ],
      },
    ],
  },
]

export const skills: Skill[] = [
  { name: 'Python', level: 'expert', uses: 'Data processing, machine learning, microservices' },
  { name: 'SQL', level: 'advanced', uses: 'Data analysis, ETL pipelines, query optimization' },
  { name: 'Machine Learning', level: 'advanced', uses: 'LLMs, LangChain and agentic apps, NLP' },
  { name: 'Spark', level: 'intermediate', uses: 'Batch ETL and feature generation on large datasets' },
  { name: 'Kafka', level: 'intermediate', uses: 'Real-time data processing' },
  { name: 'Terraform', level: 'intermediate', uses: 'Infrastructure as code, cloud deployments' },
  { name: 'Docker & Kubernetes', level: 'intermediate', uses: 'Containerization, orchestration, CI/CD' },
]

export const links: Link[] = [
  { label: 'GitHub', url: 'https://github.com/stefanondisponibile' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/stefanofrassetto' },
]
