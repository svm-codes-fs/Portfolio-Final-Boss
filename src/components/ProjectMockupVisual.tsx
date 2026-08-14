import React from 'react';
import { Smartphone, CheckCircle, XCircle, AlertCircle, Database, ShieldAlert, Cpu, BarChart3, Users, FileSpreadsheet, Layers, Sparkles } from 'lucide-react';

interface ProjectMockupVisualProps {
  type: 'presentplus' | 'loanlens' | 'placement' | 'agentic';
}

export const ProjectMockupVisual: React.FC<ProjectMockupVisualProps> = ({ type }) => {
  if (type === 'presentplus') {
    return (
      <div className="w-full h-full min-h-[340px] sm:min-h-[420px] bg-[#0E0E0E] rounded-xl border border-[#222222] p-4 sm:p-6 flex flex-col justify-between overflow-hidden relative group-hover:border-[#C8FF00]/40 transition-colors">
        {/* Background Subtle Grid & Blueprint Lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        
        {/* Top Bar / Phone Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#222222] pb-3 font-mono-code text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00]" />
            <span className="text-[#F5F5F0] font-semibold tracking-wider uppercase">PRESENTPLUS // ANDROID_NATIVE</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#C8FF00]/15 text-[#C8FF00] text-[10px] font-bold tracking-widest uppercase">
            OFFLINE_SQLITE_STORAGE
          </span>
        </div>

        {/* Realistic Android App UI Simulation */}
        <div className="relative z-10 my-auto py-3">
          <div className="max-w-md mx-auto bg-[#141414] rounded-lg border border-[#282828] p-3 sm:p-4 shadow-2xl">
            {/* App Internal Bar */}
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#222222]">
              <div>
                <div className="text-xs font-bold text-[#F5F5F0]">Batch 2024 · Computer Engg</div>
                <div className="text-[10px] text-[#A0A0A0] font-mono-code">Total Students: 200 | Present: 184</div>
              </div>
              <div className="text-right">
                <span className="font-mono-code text-[11px] text-[#C8FF00] font-bold">92.0% ATTENDANCE</span>
              </div>
            </div>

            {/* Simulated Student Attendance Rows */}
            <div className="space-y-2 font-mono-code text-xs">
              {[
                { roll: 'COE-101', name: 'Aarav Sharma', status: 'PRESENT', time: '09:02 AM' },
                { roll: 'COE-102', name: 'Bhavna Patel', status: 'PRESENT', time: '09:04 AM' },
                { roll: 'COE-103', name: 'Chetan Verma', status: 'ABSENT', time: '—' },
                { roll: 'COE-104', name: 'Divya Nair', status: 'PRESENT', time: '09:07 AM' },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 rounded bg-[#1A1A1A] border border-[#262626]"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#A0A0A0]">{row.roll}</span>
                    <span className="text-[#F5F5F0] font-medium text-[11px]">{row.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {row.status === 'PRESENT' ? (
                      <span className="flex items-center gap-1 text-[10px] text-[#C8FF00] font-semibold">
                        <CheckCircle className="w-3 h-3" /> PRESENT
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] text-[#FF4D4D] font-semibold">
                        <XCircle className="w-3 h-3" /> ABSENT
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-3 pt-2 border-t border-[#222222] flex items-center justify-between font-mono-code text-[10px]">
              <span className="text-[#A0A0A0] flex items-center gap-1">
                <Database className="w-3 h-3 text-[#C8FF00]" /> SQLite Local Transaction Active
              </span>
              <span className="text-[#C8FF00] flex items-center gap-1">
                <FileSpreadsheet className="w-3 h-3" /> Export CSV ↗
              </span>
            </div>
          </div>
        </div>

        {/* Technical Footer Badges */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#222222] font-mono-code text-[11px] text-[#A0A0A0]">
          <span>HACKATHON FINALIST // 2ND PLACE</span>
          <span className="text-[#F5F5F0]">NO-NETWORK TOLERANT</span>
        </div>
      </div>
    );
  }

  if (type === 'loanlens') {
    return (
      <div className="w-full h-full min-h-[340px] sm:min-h-[420px] bg-[#0E0E0E] rounded-xl border border-[#222222] p-4 sm:p-6 flex flex-col justify-between overflow-hidden relative group-hover:border-[#C8FF00]/40 transition-colors">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#222222] pb-3 font-mono-code text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00]" />
            <span className="text-[#F5F5F0] font-semibold tracking-wider uppercase">LOANLENS // XAI_ENGINE</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#C8FF00]/15 text-[#C8FF00] text-[10px] font-bold tracking-widest uppercase">
            FLASK + SCIKIT-LEARN
          </span>
        </div>

        {/* XAI Attribution Visualization Simulation */}
        <div className="relative z-10 my-auto py-3">
          <div className="max-w-md mx-auto bg-[#141414] rounded-lg border border-[#282828] p-3 sm:p-4 shadow-2xl space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-[#222222]">
              <div>
                <span className="text-[10px] text-[#A0A0A0] font-mono-code">PREDICTION OUTCOME</span>
                <div className="text-sm font-bold text-[#C8FF00] flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> APPROVED (88.4% CONFIDENCE)
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-[#A0A0A0] font-mono-code">LATENCY</span>
                <div className="text-xs font-mono-code text-[#F5F5F0]">38ms</div>
              </div>
            </div>

            {/* Feature Attribution Bars */}
            <div className="space-y-2 font-mono-code text-xs">
              <span className="text-[10px] text-[#A0A0A0] uppercase tracking-wider block">
                Top Decision Attribution Weights (XAI)
              </span>

              {[
                { factor: 'Credit Score (>750)', weight: '+0.42', width: '85%', positive: true },
                { factor: 'Debt-to-Income (<28%)', weight: '+0.28', width: '68%', positive: true },
                { factor: 'Employment History (>3yr)', weight: '+0.15', width: '45%', positive: true },
                { factor: 'Requested Loan Amount', weight: '-0.09', width: '25%', positive: false },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#F5F5F0]">{item.factor}</span>
                    <span className={item.positive ? 'text-[#C8FF00]' : 'text-[#FF4D4D]'}>
                      {item.weight}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-[#222222] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.positive ? 'bg-[#C8FF00]' : 'bg-[#FF4D4D]'}`}
                      style={{ width: item.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#222222] font-mono-code text-[11px] text-[#A0A0A0]">
          <span>AUDITABLE INFERENCE</span>
          <span className="text-[#C8FF00]">REST API ENDPOINTS</span>
        </div>
      </div>
    );
  }

  // Default: placement
  return (
    <div className="w-full h-full min-h-[340px] sm:min-h-[420px] bg-[#0E0E0E] rounded-xl border border-[#222222] p-4 sm:p-6 flex flex-col justify-between overflow-hidden relative group-hover:border-[#C8FF00]/40 transition-colors">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#222222] pb-3 font-mono-code text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C8FF00]" />
          <span className="text-[#F5F5F0] font-semibold tracking-wider uppercase">PLACEMENT ENGINE // RECRUITMENT_CORE</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-[#C8FF00]/15 text-[#C8FF00] text-[10px] font-bold tracking-widest uppercase">
          REACT + SQL SCHEMA
        </span>
      </div>

      {/* Placement System Simulation */}
      <div className="relative z-10 my-auto py-3">
        <div className="max-w-md mx-auto bg-[#141414] rounded-lg border border-[#282828] p-3 sm:p-4 shadow-2xl space-y-3">
          <div className="grid grid-cols-3 gap-2 text-center font-mono-code">
            <div className="p-2 rounded bg-[#1A1A1A] border border-[#262626]">
              <span className="text-[9px] text-[#A0A0A0]">ELIGIBLE</span>
              <div className="text-sm font-bold text-[#F5F5F0]">142</div>
            </div>
            <div className="p-2 rounded bg-[#1A1A1A] border border-[#262626]">
              <span className="text-[9px] text-[#A0A0A0]">SHORTLISTED</span>
              <div className="text-sm font-bold text-[#C8FF00]">38</div>
            </div>
            <div className="p-2 rounded bg-[#1A1A1A] border border-[#262626]">
              <span className="text-[9px] text-[#A0A0A0]">OFFERS</span>
              <div className="text-sm font-bold text-[#F5F5F0]">12</div>
            </div>
          </div>

          <div className="space-y-1.5 font-mono-code text-xs">
            <div className="flex items-center justify-between p-2 rounded bg-[#1A1A1A] border border-[#262626]">
              <div>
                <div className="text-[#F5F5F0] font-medium text-[11px]">Goldman Sachs · Software Analyst</div>
                <div className="text-[9px] text-[#A0A0A0]">Min GPA: 8.0 | Criteria: No Active Backlogs</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#C8FF00]/10 text-[#C8FF00] text-[10px]">ACTIVE</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded bg-[#1A1A1A] border border-[#262626]">
              <div>
                <div className="text-[#F5F5F0] font-medium text-[11px]">Oracle · Cloud Systems Engineer</div>
                <div className="text-[9px] text-[#A0A0A0]">Min GPA: 7.5 | Skills: Java, Python, SQL</div>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#C8FF00]/10 text-[#C8FF00] text-[10px]">OPEN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#222222] font-mono-code text-[11px] text-[#A0A0A0]">
        <span>ROLE-BASED WORKFLOWS</span>
        <span className="text-[#F5F5F0]">NORMALIZED DATA MODEL</span>
      </div>
    </div>
  );
};
