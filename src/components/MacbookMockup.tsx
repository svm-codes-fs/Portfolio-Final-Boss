import React from 'react';
import { ProjectMockupVisual } from './ProjectMockupVisual';
import { Project } from '../types';

interface MacbookMockupProps {
  project: Project;
  onClick?: () => void;
}

export const MacbookMockup: React.FC<MacbookMockupProps> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-full max-w-[580px] mx-auto select-none cursor-pointer group/laptop transition-transform duration-500 hover:scale-[1.02]"
    >
      {/* Laptop Screen Bezel */}
      <div className="relative bg-[#0d0f14] rounded-t-2xl pt-3 px-3 pb-1 border-[3px] border-[#2a2d36] shadow-2xl overflow-hidden ring-1 ring-white/10">
        {/* Top Notch & Camera */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#0d0f14] rounded-b-md flex items-center justify-center gap-1.5 z-30">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1b1e28] border border-white/10 flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-[#3d70ff]/60" />
          </div>
        </div>

        {/* Laptop Display Screen Content */}
        <div className="relative rounded-t-lg overflow-hidden bg-[#090b10] border border-white/5 aspect-[16/10] flex flex-col">
          <ProjectMockupVisual type={project.visualType} />
        </div>
      </div>

      {/* Laptop Aluminum Base & Keyboard Lip */}
      <div className="relative -mt-[1px] h-3.5 bg-gradient-to-b from-[#2a2d36] via-[#1e212a] to-[#15171e] rounded-b-xl px-8 flex items-center justify-center shadow-2xl border-t border-white/10">
        {/* Trackpad Opening Notch */}
        <div className="w-20 h-1 bg-[#0f1117] rounded-b-sm border-t border-white/5" />
      </div>

      {/* Laptop Base Bottom Lip */}
      <div className="w-[96%] mx-auto h-1.5 bg-[#101217] rounded-b-lg shadow-[0_15px_30px_rgba(0,0,0,0.8)] opacity-90" />

      {/* Screen Glare Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none rounded-t-2xl" />
    </div>
  );
};
