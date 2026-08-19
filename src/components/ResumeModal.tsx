import React, { useEffect, useState } from 'react';
import { X, Download, Copy, Check, ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Printer } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, ACHIEVEMENTS, EDUCATIONS } from '../data/portfolioData';
import { jsPDF } from 'jspdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    setIsGeneratingPdf(true);
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const margin = 15;
      let y = 18;
      const pageWidth = doc.internal.pageSize.getWidth();
      const contentWidth = pageWidth - margin * 2;

      // Header - Name
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(20, 20, 20);
      doc.text('SHIVAM RAJ', margin, y);
      y += 6;

      // Subtitle
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      doc.text('Computer Engineering Undergraduate | Software Developer | Full-Stack & Android', margin, y);
      y += 5;

      // Contact Line
      doc.setFontSize(8.5);
      doc.setTextColor(100, 100, 100);
      const contactInfo = `Email: ${PERSONAL_INFO.email}  |  Phone: ${PERSONAL_INFO.phone}  |  Location: Patiala, India  |  GitHub: github.com/svm-codes-fs`;
      doc.text(contactInfo, margin, y);
      y += 4;

      // Divider
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.4);
      doc.line(margin, y, pageWidth - margin, y);
      y += 6;

      // Section: Professional Summary
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('PROFESSIONAL SUMMARY', margin, y);
      y += 4.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(50, 50, 50);
      const summary = `Computer Engineering undergraduate at Thapar Institute of Engineering and Technology with hands-on experience building Android applications, backend systems, REST APIs, and machine learning solutions. Strong foundation in Data Structures and Algorithms, Object-Oriented Programming, and software engineering principles, with experience in Java, C++, Python, SQL, Flask, Git, and Android development. Proven ability to design, debug, and deliver software through team-based projects and real-world development experience.`;
      const splitSummary = doc.splitTextToSize(summary, contentWidth);
      doc.text(splitSummary, margin, y);
      y += splitSummary.length * 4 + 3;

      // Section: Technical Skills
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('TECHNICAL SKILLS & COMPETENCIES', margin, y);
      y += 4.5;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(50, 50, 50);
      const skills = [
        'Languages: Java, C++, Python, SQL',
        'Software Engineering: DSA, Algorithm Design, OOP, SOLID Principles, MVC Architecture, Multithreading, Debugging, Agile Collaboration',
        'Backend & APIs: Flask, RESTful API Design & Integration, SQLite, Database Design, Server-Side Logic',
        'Android: Android SDK, XML, Activities, Intents, Android Studio, Offline Storage',
        'ML & Data: scikit-learn, Predictive Modeling, Explainable AI (XAI), Agentic AI, Feature Engineering, Risk Modeling',
        'Tools: Git, GitHub, VS Code, Jupyter Notebook; learning Spring Boot, AWS, System Design',
      ];
      skills.forEach((s) => {
        doc.text(`•  ${s}`, margin, y);
        y += 4;
      });
      y += 3;

      // Section: Experience
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('WORK EXPERIENCE', margin, y);
      y += 4.5;

      EXPERIENCES.forEach((exp) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(20, 20, 20);
        doc.text(`${exp.role} - ${exp.company}`, margin, y);

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(100, 100, 100);
        doc.text(`${exp.period} | ${exp.locationType}`, pageWidth - margin - 50, y);
        y += 4;

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(50, 50, 50);
        exp.achievements.forEach((ach) => {
          const achText = `•  ${ach}`;
          const splitAch = doc.splitTextToSize(achText, contentWidth);
          doc.text(splitAch, margin + 2, y);
          y += splitAch.length * 3.8;
        });
        y += 2.5;
      });

      // Section: Key Projects
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('KEY ENGINEERING PROJECTS', margin, y);
      y += 4.5;

      PROJECTS.slice(0, 2).forEach((proj) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(20, 20, 20);
        doc.text(`${proj.title} - ${proj.subtitle}`, margin, y);
        
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(100, 100, 100);
        doc.text(`${proj.category}`, pageWidth - margin - 50, y);
        y += 4;
        
        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(100, 100, 100);
        doc.text(proj.tags.slice(0, 5).join(', '), margin, y);
        y += 4;

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(50, 50, 50);
        proj.highlights.forEach((highlight) => {
          const splitDesc = doc.splitTextToSize(`•  ${highlight}`, contentWidth);
          doc.text(splitDesc, margin + 2, y);
          y += splitDesc.length * 3.8;
        });
        y += 2.5;
      });

      // Section: Education & Certifications
      if (y > 240) {
        doc.addPage();
        y = 18;
      }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(15, 23, 42);
      doc.text('EDUCATION & HONORS', margin, y);
      y += 4.5;

      EDUCATIONS.forEach((edu) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(20, 20, 20);
        doc.text(`${edu.degree} - ${edu.institution}`, margin, y);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(`${edu.period}`, pageWidth - margin - 30, y);
        y += 4;
      });

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(20, 20, 20);
      doc.text('•  Oracle Certified Associate: Foundations of Agentic AI (Credential ID: 330498011AAI26OFA)', margin, y);
      y += 4;
      doc.text('•  2nd Place Finalist - District Level Hackathon (PresentPlus Android App)', margin, y);

      // Save the generated PDF
      doc.save('Shivam_Raj_Resume.pdf');
    } catch (err) {
      console.error('Error generating PDF:', err);
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#090909]/95 backdrop-blur-xl animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0E0E0E] border border-[#262626] rounded-2xl p-5 sm:p-8 md:p-12 shadow-2xl flex flex-col justify-between">
        {/* Actions Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222222] pb-5 mb-8 print:hidden">
          <div className="flex items-center gap-2 font-mono-code text-xs text-[#C8FF00] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse shrink-0" />
            <span className="truncate">OFFICIAL CV // SHIVAM RAJ</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181818] border border-[#2A2A2A] text-xs font-mono-code text-[#F5F5F0] hover:border-[#C8FF00] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#C8FF00]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED' : 'COPY EMAIL'}</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181818] border border-[#2A2A2A] text-xs font-mono-code text-[#F5F5F0] hover:border-[#C8FF00] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#C8FF00]" />
              <span className="hidden sm:inline">VIEW ON DRIVE</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeDownloadUrl}
              target="_blank"
              rel="noreferrer"
              download="Shivam_Raj_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#C8FF00] text-[#090909] text-xs font-mono-code font-bold hover:bg-[#b8eb00] transition-colors shadow-lg"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME (.PDF)</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181818] border border-[#2A2A2A] text-[#F5F5F0] text-xs font-mono-code hover:border-white/40 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PRINT</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#181818] border border-[#2A2A2A] text-[#A0A0A0] hover:text-[#F5F5F0] transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="space-y-8 text-[#F5F5F0]">
          {/* Header */}
          <div className="border-b border-[#222222] pb-6">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-mono-code text-xs sm:text-sm text-[#C8FF00] mt-1">
              Computer Engineering Undergraduate · Software Developer · Batch of 2028
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-mono-code text-xs text-[#A0A0A0] mt-3">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#C8FF00]" /> {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C8FF00]" /> {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C8FF00]" /> Patiala, India
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-mono-code text-xs text-[#C8FF00] uppercase tracking-widest mb-2">
              // PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
              Computer Engineering undergraduate at Thapar Institute of Engineering and Technology with hands-on experience building Android applications, backend systems, REST APIs, and machine learning solutions. Strong foundation in Data Structures and Algorithms, Object-Oriented Programming, and software engineering principles, with experience in Java, C++, Python, SQL, Flask, Git, and Android development. Proven ability to design, debug, and deliver software through team-based projects and real-world development experience.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-mono-code text-xs text-[#C8FF00] uppercase tracking-widest mb-2">
              // TECHNICAL SKILLS & COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-code">
              <div className="p-3 rounded bg-[#141414] border border-[#222222]">
                <span className="text-[#A0A0A0] block text-[10px]">LANGUAGES</span>
                <span className="text-[#F5F5F0] font-semibold">Java, C++, Python, SQL</span>
              </div>
              <div className="p-3 rounded bg-[#141414] border border-[#222222]">
                <span className="text-[#A0A0A0] block text-[10px]">SOFTWARE ENGINEERING</span>
                <span className="text-[#F5F5F0] font-semibold">DSA, Algorithm Design, OOP, SOLID Principles, MVC Architecture, Multithreading, Debugging, Agile Collaboration</span>
              </div>
              <div className="p-3 rounded bg-[#141414] border border-[#222222]">
                <span className="text-[#A0A0A0] block text-[10px]">BACKEND & APIs</span>
                <span className="text-[#F5F5F0] font-semibold">Flask, RESTful API Design & Integration, SQLite, Database Design, Server-Side Logic</span>
              </div>
              <div className="p-3 rounded bg-[#141414] border border-[#222222]">
                <span className="text-[#A0A0A0] block text-[10px]">ANDROID</span>
                <span className="text-[#F5F5F0] font-semibold">Android SDK, XML, Activities, Intents, Android Studio, Offline Storage</span>
              </div>
              <div className="p-3 rounded bg-[#141414] border border-[#222222]">
                <span className="text-[#A0A0A0] block text-[10px]">ML & DATA</span>
                <span className="text-[#F5F5F0] font-semibold">scikit-learn, Predictive Modeling, Explainable AI (XAI), Agentic AI, Feature Engineering, Risk Modeling</span>
              </div>
              <div className="p-3 rounded bg-[#141414] border border-[#222222]">
                <span className="text-[#A0A0A0] block text-[10px]">TOOLS</span>
                <span className="text-[#F5F5F0] font-semibold">Git, GitHub, VS Code, Jupyter Notebook; learning Spring Boot, AWS, System Design</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-mono-code text-xs text-[#C8FF00] uppercase tracking-widest mb-3">
              // WORK EXPERIENCE
            </h2>
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#141414] border border-[#222222] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-sm font-bold text-[#F5F5F0] uppercase font-headline">
                    {exp.role} — {exp.company}
                  </h3>
                  <span className="font-mono-code text-xs text-[#C8FF00]">
                    {exp.period} ({exp.locationType})
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-[#A0A0A0] pt-1">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-[#C8FF00]">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="font-mono-code text-xs text-[#C8FF00] uppercase tracking-widest mb-3">
              // KEY ENGINEERING PROJECTS
            </h2>
            <div className="space-y-3">
              {PROJECTS.slice(0, 2).map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-[#141414] border border-[#222222] space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-[#F5F5F0] uppercase font-headline">
                      {proj.title} — {proj.subtitle}
                    </h3>
                    <span className="font-mono-code text-xs text-[#C8FF00]">
                      {proj.category}
                    </span>
                  </div>
                  <div className="font-mono-code text-[10px] text-[#A0A0A0]">
                    {proj.tags.join(', ')}
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#A0A0A0] pt-1">
                    {proj.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#C8FF00]">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="font-mono-code text-xs text-[#C8FF00] uppercase tracking-widest mb-3">
                // EDUCATION
              </h2>
              <div className="space-y-3 font-mono-code text-xs">
                {EDUCATIONS.map((edu, eIdx) => (
                  <div key={eIdx} className="border-l-2 border-[#C8FF00] pl-3">
                    <div className="font-bold text-[#F5F5F0]">{edu.degree}</div>
                    <div className="text-[#A0A0A0]">{edu.institution}</div>
                    <div className="text-[10px] text-[#C8FF00]">{edu.period}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-mono-code text-xs text-[#C8FF00] uppercase tracking-widest mb-3">
                // CERTIFICATIONS & HONORS
              </h2>
              <div className="space-y-3 font-mono-code text-xs">
                <div className="border-l-2 border-[#C8FF00] pl-3">
                  <div className="font-bold text-[#F5F5F0]">Oracle Certified Associate — Agentic AI</div>
                  <div className="text-[#A0A0A0]">Credential ID: 330498011AAI26OFA · Aug 2026</div>
                </div>
                <div className="border-l-2 border-[#C8FF00] pl-3">
                  <div className="font-bold text-[#F5F5F0]">2nd Place — District Level Hackathon</div>
                  <div className="text-[#A0A0A0]">PresentPlus Attendance Management App · 2024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Original Google Drive Resume Download Action Banner */}
          <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#141414] p-5 rounded-xl border border-white/10 print:hidden">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#C8FF00]/10 text-[#C8FF00]">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <div className="font-headline text-sm font-bold text-[#F5F5F0] uppercase tracking-wide">
                  ORIGINAL VERIFIED RESUME (.PDF)
                </div>
                <div className="font-mono-code text-[11px] text-[#A0A0A0]">
                  Official document hosted on Google Drive — ready to download or view.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono-code text-[#F5F5F0] border border-white/10 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C8FF00]" />
                <span>OPEN ON DRIVE</span>
              </a>
              <a
                href={PERSONAL_INFO.resumeDownloadUrl}
                target="_blank"
                rel="noreferrer"
                download="Shivam_Raj_Resume.pdf"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C8FF00] hover:bg-[#b8eb00] text-xs font-mono-code font-bold text-[#090909] shadow-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD (.PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
