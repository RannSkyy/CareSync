import { Article, GpuModel, Doctor, CalorieData } from '../types';

export const NAV_ITEMS = [
  { label: 'GPUs', href: '#gpus', description: 'Enterprise inference hardware & cloud clusters' },
  { label: 'Inference', href: '#inference', description: 'Sub-millisecond AI diagnostic models' },
  { label: 'About', href: '#about', description: 'CareSync mission and health ecosystem' },
  { label: 'Blog', href: '#blog', description: 'Latest research in AI & adult longevity' },
  { label: 'Docs', href: '#docs', description: 'API documentation & integration guides' },
  { label: 'Contact', href: '#contact', description: 'Reach our care team & technical support' },
];

export const GPU_MODELS: GpuModel[] = [
  {
    name: 'NVIDIA H100 SXM5',
    vram: '80GB HBM3',
    architecture: 'Hopper',
    throughput: '3.2k tokens/sec',
    latency: '12ms',
    pricePerHour: '$2.85/hr',
    recommendedFor: 'Large Clinical Model Fine-tuning & Real-time Vitals Inference',
  },
  {
    name: 'NVIDIA L40S',
    vram: '48GB GDDR6',
    architecture: 'Ada Lovelace',
    throughput: '2.1k tokens/sec',
    latency: '18ms',
    pricePerHour: '$1.45/hr',
    recommendedFor: 'Medical Imaging & ECG Signal Processing',
  },
  {
    name: 'NVIDIA A100 SXM4',
    vram: '80GB HBM2e',
    architecture: 'Ampere',
    throughput: '2.4k tokens/sec',
    latency: '16ms',
    pricePerHour: '$1.95/hr',
    recommendedFor: 'Multi-modal EHR Batch Processing',
  },
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'How AI Diagnostic Assistant Reduces Medication Errors in Adults 45+',
    excerpt: 'Discover how automated prescription cross-referencing lowers drug interaction risks by 41% for seniors managing chronic care.',
    content: `Managing multiple prescriptions as we age can become complex and overwhelming. CareSync's clinical AI engine analyzes daily drug intake, timing, and food interactions to provide real-time alerts.

Key Findings:
1. Automated cross-referencing prevents over 41% of adverse drug combinations.
2. Smart daily pill schedule notifications increase patient adherence to 94.2%.
3. Integrated vitals telemetry allows primary care doctors to adjust dosages proactively.

With Cohere's low-latency inference, every medication entry is validated instantly against clinical pharmacology databases.`,
    category: 'Clinical AI',
    readTime: '4 min read',
    date: 'July 20, 2026',
    author: {
      name: 'Dr. Evelyn Vance, MD',
      role: 'Chief Medical Officer',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    title: 'Continuous Vital Tracking: Why 2,050 Kcal & Heart Rate Variability Matter',
    excerpt: 'Optimizing metabolic health for older adults through precision nutrition tracking and seamless wearable integration.',
    content: `Maintaining metabolic balance after 45 requires looking beyond simple calorie counting. CareSync combines caloric tracking with continuous HRV monitoring to assess recovery and energy expenditure.

In our latest patient cohort study, participants using CareSync's caloric goal engine maintained steady muscle mass while reducing systemic inflammatory markers by 28%.`,
    category: 'Nutrition & Longevity',
    readTime: '6 min read',
    date: 'July 15, 2026',
    author: {
      name: 'Marcus Sterling, PhD',
      role: 'Head of Metabolic Research',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    title: 'Connecting Family Caregivers with Primary Doctors in Real-Time',
    excerpt: 'Bridge the communication gap between family members and healthcare teams with CareSync shared care circles.',
    content: `Caregiving for elderly parents can often feel fragmented. CareSync provides a secure, HIPAA-compliant portal where adult children, caregivers, and attending physicians receive synchronized updates on vital readings and appointment notes.`,
    category: 'Connected Health',
    readTime: '5 min read',
    date: 'July 08, 2026',
    author: {
      name: 'Sarah Chen',
      role: 'Product Lead, CareSync',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    },
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=600&q=80',
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Arthur Pendelton',
    specialty: 'Internal Medicine & Geriatrics',
    rating: 4.9,
    reviewsCount: 184,
    availableSlot: 'Today at 2:30 PM',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'd2',
    name: 'Dr. Maya Lin',
    specialty: 'Cardiology & Metabolic Health',
    rating: 5.0,
    reviewsCount: 212,
    availableSlot: 'Today at 4:15 PM',
    avatar: 'https://images.unsplash.com/photo-1594824813566-888242a4b96f?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'd3',
    name: 'Dr. Robert Thorne',
    specialty: 'Preventive Healthcare',
    rating: 4.8,
    reviewsCount: 145,
    availableSlot: 'Tomorrow at 10:00 AM',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80',
  },
];

export const MOCK_CALORIE_BARS = Array.from({ length: 30 }, (_, i) => {
  const isFilled = i < 24; // 24 filled dark bars out of 30, matching 1940 / 2050 ratio
  const heightPercent = 40 + (Math.sin(i * 0.4) * 35) + (isFilled ? 20 : 5);
  return {
    id: i,
    value: Math.round(heightPercent * 25),
    isFilled,
    time: `${8 + Math.floor(i / 2)}:00`,
  };
});
