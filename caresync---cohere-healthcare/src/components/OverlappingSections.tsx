import React, { useState } from 'react';
import {
  Cpu,
  Zap,
  Activity,
  Code2,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  Terminal,
  Send,
  Sliders,
  UserCheck,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { GPU_MODELS, ARTICLES, ARTICLES as BLOG_POSTS } from '../data/mockData';
import dashboardPreviewImg from '../assets/images/dashboard_preview_1784897864426.jpg';
import { Article } from '../types';

interface OverlappingSectionsProps {
  onOpenArticle: (article: Article) => void;
  onOpenHealthSetup: () => void;
}

export const OverlappingSections: React.FC<OverlappingSectionsProps> = ({
  onOpenArticle,
  onOpenHealthSetup,
}) => {
  // GPU Calculator state
  const [selectedGpu, setSelectedGpu] = useState(0);
  const [concurrentUsers, setConcurrentUsers] = useState(150);

  // Inference simulator state
  const [symptomInput, setSymptomInput] = useState('Patient age 68, reports slight dizziness in morning and missed morning Lisinopril dose.');
  const [inferenceResult, setInferenceResult] = useState<string | null>(
    'Analysis: Blood pressure medication skip detected. Recommend hydration, 15-min rest, and logging BP reading before 11:00 AM. Alert sent to Dr. Pendelton.'
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Docs tab state
  const [codeLang, setCodeLang] = useState<'curl' | 'typescript' | 'python'>('typescript');

  const handleRunInference = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptomInput.trim()) return;
    setIsAnalyzing(true);
    setInferenceResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setInferenceResult(
        `AI Diagnostic Inference Output:\n- Vitals Alert Level: Mild / Normal\n- Recommended Action: Check hydration & re-check BP in 30 mins.\n- Care Team Sync: Synchronized to CareSync Dashboard (Latency: 14ms).`
      );
    }, 800);
  };

  const currentGpu = GPU_MODELS[selectedGpu];
  const calculatedTokens = concurrentUsers * 18;
  const estimatedCost = (concurrentUsers * parseFloat(currentGpu.pricePerHour.replace('$', '')) / 10).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* SECTION 1: GPUs & Infrastructure (#gpus) */}
      <section
        id="gpus"
        className="sticky top-20 bg-[#FAF7EE] border border-[#E5DFD3] rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-300 mb-32 sm:mb-48"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2DAD0]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE8] text-[#084127] text-xs font-bold uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5" /> High Performance GPUs
            </div>
            <h2 className="font-serif-custom text-3xl sm:text-5xl text-[#161D1A]">
              Infrastructure Built for Sub-Millisecond AI Diagnostics
            </h2>
          </div>
          <button
            onClick={onOpenHealthSetup}
            className="bg-[#084127] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#052C1A] transition-colors cursor-pointer whitespace-nowrap"
          >
            Deploy CareSync Node
          </button>
        </div>

        {/* GPU Model Selector & Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[#2E3A35] text-base leading-relaxed font-normal">
              Cohere GPU clusters power CareSync's clinical intelligence with guaranteed zero-wait latency, enabling continuous telemetry for elderly health care teams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {GPU_MODELS.map((gpu, idx) => (
                <button
                  key={gpu.name}
                  onClick={() => setSelectedGpu(idx)}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedGpu === idx
                      ? 'bg-[#084127] text-white border-[#084127] shadow-md'
                      : 'bg-[#FFFDF7] text-[#1E2522] border-[#E2DAD0] hover:border-[#084127]'
                  }`}
                >
                  <p className="text-xs opacity-80 font-mono mb-1">{gpu.architecture}</p>
                  <h4 className="font-bold text-sm mb-1">{gpu.name}</h4>
                  <p className="text-xs font-semibold">{gpu.vram}</p>
                </button>
              ))}
            </div>

            {/* Selected GPU Details */}
            <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#E2DAD0] space-y-3">
              <h3 className="font-bold text-lg text-[#161D1A] flex items-center justify-between">
                <span>{currentGpu.name} Specs</span>
                <span className="text-sm font-mono text-[#084127] bg-[#E8EFE8] px-2.5 py-1 rounded-lg">
                  {currentGpu.pricePerHour}
                </span>
              </h3>
              <p className="text-xs text-[#525E5A]">{currentGpu.recommendedFor}</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-[#EAE3D3]">
                <div>
                  <span className="text-xs text-[#62706B]">Throughput</span>
                  <p className="font-bold text-base text-[#161D1A]">{currentGpu.throughput}</p>
                </div>
                <div>
                  <span className="text-xs text-[#62706B]">Latency</span>
                  <p className="font-bold text-base text-[#084127]">{currentGpu.latency}</p>
                </div>
                <div>
                  <span className="text-xs text-[#62706B]">VRAM Memory</span>
                  <p className="font-bold text-base text-[#161D1A]">{currentGpu.vram}</p>
                </div>
              </div>
            </div>
          </div>

          {/* GPU Interactive Calculator Card */}
          <div className="lg:col-span-5 bg-[#1E2522] text-white p-6 rounded-2xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A1D9BD] flex items-center gap-1">
                  <Sliders className="w-3.5 h-3.5" /> Interactive Workload Calculator
                </span>
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-white/80">Live Estimate</span>
              </div>

              <div className="space-y-4 my-6">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-white/70">Concurrent Active Vitals Streams</span>
                    <span className="font-bold text-[#A1D9BD]">{concurrentUsers} Patients</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={concurrentUsers}
                    onChange={(e) => setConcurrentUsers(parseInt(e.target.value))}
                    className="w-full accent-[#A1D9BD] cursor-pointer"
                  />
                </div>

                <div className="p-4 bg-white/5 rounded-xl space-y-2 border border-white/10">
                  <div className="flex justify-between text-xs text-white/80">
                    <span>Est. Processing Speed:</span>
                    <span className="font-bold text-white">{calculatedTokens} tokens/sec</span>
                  </div>
                  <div className="flex justify-between text-xs text-white/80">
                    <span>Inference Latency Target:</span>
                    <span className="font-bold text-[#A1D9BD]">{currentGpu.latency}</span>
                  </div>
                  <div className="flex justify-between text-xs text-white/80">
                    <span>Estimated Node Cost:</span>
                    <span className="font-bold text-white">${estimatedCost} / hr</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenHealthSetup}
              className="w-full bg-[#A1D9BD] text-[#084127] hover:bg-white py-3 rounded-xl font-bold text-sm transition-colors cursor-pointer text-center"
            >
              Reserve GPU Capacity
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: AI Inference Engine (#inference) */}
      <section
        id="inference"
        className="sticky top-24 bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-300 mb-32 sm:mb-48"
      >
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE3D3] text-[#2E2822] text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-[#084127]" /> Diagnostic Intelligence
          </div>
          <h2 className="font-serif-custom text-3xl sm:text-5xl text-[#161D1A]">
            Real-Time Health AI Inference Simulator
          </h2>
          <p className="text-[#2E3A35] text-base leading-relaxed mt-2 font-normal">
            Test how Cohere AI interprets patient telemetry, medication schedules, and clinical notes in real time.
          </p>
        </div>

        {/* Interactive Simulator Box */}
        <div className="bg-[#FFFDF7] rounded-2xl border border-[#E2DAD0] p-6 shadow-sm">
          <form onSubmit={handleRunInference} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#161D1A] uppercase tracking-wider mb-2">
                Patient Status / Clinical Note Input
              </label>
              <div className="relative">
                <textarea
                  rows={3}
                  value={symptomInput}
                  onChange={(e) => setSymptomInput(e.target.value)}
                  className="w-full bg-[#FAF8F3] border border-[#E5DFD3] rounded-xl p-4 text-sm text-[#1E2522] focus:outline-none focus:border-[#084127] transition-colors resize-none"
                  placeholder="Enter patient symptoms or vital readings..."
                />
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="absolute bottom-3 right-3 bg-[#084127] text-white hover:bg-[#052C1A] px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <span>Running Model...</span>
                  ) : (
                    <>
                      <span>Run Inference</span>
                      <Send className="w-3 h-3" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Model Output Container */}
          {inferenceResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-5 rounded-xl bg-[#E8EFE8] border border-[#C8DCC8] text-[#084127]"
            >
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#C8DCC8]">
                <div className="flex items-center gap-2 font-bold text-xs">
                  <Sparkles className="w-4 h-4 text-[#084127]" />
                  <span>Cohere Clinical Model Response</span>
                </div>
                <span className="text-[10px] font-mono bg-white/80 px-2 py-0.5 rounded">
                  Response Time: 12ms
                </span>
              </div>
              <p className="text-sm font-medium whitespace-pre-line leading-relaxed">
                {inferenceResult}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* SECTION 3: About CareSync (#about) */}
      <section
        id="about"
        className="sticky top-28 bg-[#FAF7EE] border border-[#E5DFD3] rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-300 mb-32 sm:mb-48"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE8] text-[#084127] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> About CareSync & Cohere
            </div>
            <h2 className="font-serif-custom text-3xl sm:text-5xl text-[#161D1A] leading-tight">
              Designed Specifically for Adults Over 45 and Their Care Circles
            </h2>
            <p className="text-[#2E3A35] text-base sm:text-lg leading-relaxed font-normal">
              CareSync brings together medications, doctor visit logs, caloric intakes, and continuous vital monitoring into a cohesive single-pane dashboard.
            </p>

            <div className="space-y-3">
              {[
                'Automated medication cross-checks and adherence reminders',
                '2,050 Kcal metabolic goal calibration and caloric tracking',
                'Direct telehealth doctor visit scheduling & pocket consultation',
                'HIPAA-compliant shared access for adult children & family caregivers',
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#084127] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#1E2522]">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-8 border-t border-[#E2DAD0]">
              <div>
                <h4 className="font-serif-custom text-3xl font-bold text-[#084127]">5.8k+</h4>
                <p className="text-xs text-[#525E5A]">Active Members</p>
              </div>
              <div>
                <h4 className="font-serif-custom text-3xl font-bold text-[#084127]">94.2%</h4>
                <p className="text-xs text-[#525E5A]">Medication Adherence</p>
              </div>
              <div>
                <h4 className="font-serif-custom text-3xl font-bold text-[#084127]">12ms</h4>
                <p className="text-xs text-[#525E5A]">AI Inference Speed</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E2DAD0]">
              <img
                src={dashboardPreviewImg}
                alt="CareSync Connected Dashboard Preview"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Blog & Insights (#blog) */}
      <section
        id="blog"
        className="sticky top-32 bg-[#FAF8F3] border border-[#E5DFD3] rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-300 mb-32 sm:mb-48"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE3D3] text-[#2E2822] text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#084127]" /> Health & AI Research
            </div>
            <h2 className="font-serif-custom text-3xl sm:text-5xl text-[#161D1A]">
              Latest Articles & Clinical Insights
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onOpenArticle(article)}
              className="bg-[#FFFDF7] rounded-2xl border border-[#E2DAD0] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-[#084127] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-[#62706B] mb-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-bold text-lg text-[#161D1A] group-hover:text-[#084127] transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#525E5A] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#F2EFE8] mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-semibold text-[#2E3532]">{article.author.name}</span>
                </div>
                <span className="text-xs font-bold text-[#084127] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 5: Docs & API Playground (#docs) */}
      <section
        id="docs"
        className="sticky top-36 bg-[#1E2522] text-white border border-[#2E3A35] rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#A1D9BD] text-xs font-bold uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" /> CareSync API & Docs
            </div>
            <h2 className="font-serif-custom text-3xl sm:text-5xl text-white">
              Integrate CareSync Telemetry with 3 Lines of Code
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Our SDKs allow healthcare providers and EHR systems to stream real-time vitals and calorie goals straight to patient dashboards.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setCodeLang('typescript')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  codeLang === 'typescript' ? 'bg-[#A1D9BD] text-[#084127]' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                TypeScript
              </button>
              <button
                onClick={() => setCodeLang('python')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  codeLang === 'python' ? 'bg-[#A1D9BD] text-[#084127]' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Python
              </button>
              <button
                onClick={() => setCodeLang('curl')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  codeLang === 'curl' ? 'bg-[#A1D9BD] text-[#084127]' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                cURL
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#121715] p-6 rounded-2xl border border-white/10 font-mono text-xs overflow-x-auto">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white/50">
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#A1D9BD]" />
                <span>caresync-vitals-stream.{codeLang === 'typescript' ? 'ts' : codeLang === 'python' ? 'py' : 'sh'}</span>
              </span>
              <span className="text-[10px] text-[#A1D9BD]">v2.4.0-latest</span>
            </div>

            <pre className="text-[#D8E6DF] leading-relaxed">
              {codeLang === 'typescript' && `import { CareSyncClient } from '@cohere/caresync';

const client = new CareSyncClient({
  apiKey: process.env.COHERE_API_KEY,
  region: 'us-east-1'
});

// Stream daily caloric intake & vitals
const stream = await client.vitals.subscribe({
  patientId: 'patient_45_9812',
  targetCalories: 2050,
  onUpdate: (data) => console.log('Current Intake:', data.consumedKcal)
});`}

              {codeLang === 'python' && `from cohere_caresync import CareSyncClient

client = CareSyncClient(api_key="COHERE_API_KEY")

# Stream daily caloric goal (2,050 Kcal)
patient_vitals = client.vitals.get_daily_summary(
    patient_id="patient_45_9812",
    target_kcal=2050
)
print(f"Intake Today: {patient_vitals.consumed_kcal} / {patient_vitals.goal_kcal}")`}

              {codeLang === 'curl' && `curl -X POST https://api.cohere.com/v1/caresync/vitals \\
  -H "Authorization: Bearer $COHERE_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "patient_id": "patient_45_9812",
    "calorie_goal": 2050,
    "include_doctor_alerts": true
  }'`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};
