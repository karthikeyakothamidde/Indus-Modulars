"use client";

import React, { useState } from "react";
import { Plus, Edit2, Trash2, Star, Eye, Calendar, DollarSign, Image as ImageIcon } from "lucide-react";
import { Project } from "./mockData";

interface ProjectsViewProps {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  showAddModal: boolean;
  setShowAddModal: (show: boolean) => void;
}

export default function ProjectsView({
  projects,
  setProjects,
  showAddModal,
  setShowAddModal
}: ProjectsViewProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEdit, setIsEdit] = useState(false);

  // Form State
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState<Project["category"]>("Kitchen");
  const [formImage, setFormImage] = useState("");
  const [formBeforeImage, setFormBeforeImage] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formBudget, setFormBudget] = useState("");
  const [formFeatured, setFormFeatured] = useState(false);

  const handleEditClick = (project: Project) => {
    setSelectedProject(project);
    setIsEdit(true);
    setFormTitle(project.title);
    setFormCategory(project.category);
    setFormImage(project.image);
    setFormBeforeImage(project.beforeImage || "");
    setFormDescription(project.description);
    setFormDate(project.completionDate);
    setFormBudget(project.budget);
    setFormFeatured(project.featured);
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit && selectedProject) {
      // Update Project
      setProjects(prev => prev.map(p => p.id === selectedProject.id ? {
        ...p,
        title: formTitle,
        category: formCategory,
        image: formImage || "/project-kitchen-1.png",
        beforeImage: formBeforeImage || undefined,
        description: formDescription,
        completionDate: formDate,
        budget: formBudget,
        featured: formFeatured
      } : p));
    } else {
      // Create new Project
      const newProj: Project = {
        id: `PRJ-00${projects.length + 1}`,
        title: formTitle,
        category: formCategory,
        image: formImage || "/project-kitchen-1.png",
        beforeImage: formBeforeImage || undefined,
        description: formDescription,
        completionDate: formDate || new Date().toISOString().split("T")[0],
        budget: formBudget || "₹5,00,000",
        status: "Published",
        featured: formFeatured
      };
      setProjects(prev => [newProj, ...prev]);
    }
    closeModal();
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsEdit(false);
    setShowAddModal(false);
    setFormTitle("");
    setFormCategory("Kitchen");
    setFormImage("");
    setFormBeforeImage("");
    setFormDescription("");
    setFormDate("");
    setFormBudget("");
    setFormFeatured(false);
  };

  const toggleFeatured = (id: string) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, featured: !p.featured } : p));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header Panel */}
      <div className="flex items-center justify-between bg-white border border-gold/15 p-4 rounded-2xl shadow-sm">
        <div>
          <h3 className="font-serif text-lg font-bold text-charcoal-black">Portfolio Project Assets</h3>
          <p className="text-xs text-charcoal-black/40">Manage client-facing project portfolio and details</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-gold hover:bg-gold/90 text-charcoal-black rounded-xl text-xs font-semibold tracking-wide transition-colors duration-300 flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <Plus size={14} />
          <span>Add Project</span>
        </button>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div key={proj.id} className="bg-white border border-gold/15 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group hover:border-gold/30 transition-all duration-300">
            {/* Project Image */}
            <div className="relative h-48 bg-charcoal-black overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/60 border border-white/10 px-2.5 py-1 rounded-md backdrop-blur-md">
                <span className="text-[9px] font-bold text-gold uppercase tracking-wider font-mono">{proj.category}</span>
              </div>
              <div className="absolute top-3 right-3 flex items-center space-x-1.5">
                <button
                  onClick={() => toggleFeatured(proj.id)}
                  title={proj.featured ? "Unmark Featured" : "Mark Featured"}
                  className={`p-1.5 rounded-full border backdrop-blur-md transition-all cursor-pointer ${
                    proj.featured 
                      ? "bg-gold border-gold text-charcoal-black" 
                      : "bg-black/60 border-white/10 text-white/70 hover:text-gold"
                  }`}
                >
                  <Star size={10} fill={proj.featured ? "currentColor" : "none"} />
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[9px] text-charcoal-black/40 font-mono">
                  <span>ID: {proj.id}</span>
                  <span className="flex items-center gap-1"><Calendar size={10} /> {proj.completionDate}</span>
                </div>
                <h4 className="font-serif text-sm font-bold text-charcoal-black group-hover:text-gold transition-colors duration-300">
                  {proj.title}
                </h4>
                <p className="text-xs text-charcoal-black/60 line-clamp-2 leading-relaxed font-light">
                  {proj.description}
                </p>
              </div>

              {/* Footer info & CRUD panel */}
              <div className="pt-4 border-t border-gold/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-gold">{proj.budget}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEditClick(proj)}
                    className="p-2 rounded-lg border border-gold/20 text-gold hover:bg-gold hover:text-charcoal-black transition-all cursor-pointer"
                  >
                    <Edit2 size={12} />
                  </button>
                  <button
                    onClick={() => deleteProject(proj.id)}
                    className="p-2 rounded-lg border border-red-200 text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal Form */}
      {(showAddModal || isEdit) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-white border border-gold/25 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl animate-scaleUp">
            <div className="absolute inset-2 border border-gold/5 rounded-2xl pointer-events-none" />
            
            <h3 className="font-serif text-xl font-bold text-charcoal-black mb-6">
              {isEdit ? "Edit Project Portfolio Details" : "Publish New Portfolio Project"}
            </h3>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              {/* Title */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Project Title</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Minimal Oak Bedroom Wardrobes"
                  className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-gold/60"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Category */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Category</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as Project["category"])}
                    className="w-full bg-white border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none"
                  >
                    <option value="Kitchen">Kitchen</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Living Room">Living Room</option>
                    <option value="Office">Office</option>
                    <option value="Wardrobes">Wardrobes</option>
                    <option value="Dining">Dining</option>
                  </select>
                </div>
                {/* Budget */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Budget Cost</label>
                  <input
                    type="text"
                    value={formBudget}
                    onChange={(e) => setFormBudget(e.target.value)}
                    placeholder="e.g. ₹6,50,000"
                    className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Image Path (After)</label>
                  <input
                    type="text"
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    placeholder="/project-kitchen-1.png"
                    className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Before Image Path (Optional)</label>
                  <input
                    type="text"
                    value={formBeforeImage}
                    onChange={(e) => setFormBeforeImage(e.target.value)}
                    placeholder="e.g. /before-image-url"
                    className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Completion Date */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Completion Date</label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none"
                    required
                  />
                </div>
                {/* Featured Check */}
                <div className="flex items-center space-x-3.5 pt-6 pl-2">
                  <input
                    type="checkbox"
                    id="featured-check"
                    checked={formFeatured}
                    onChange={(e) => setFormFeatured(e.target.checked)}
                    className="w-4.5 h-4.5 text-gold border-gold/30 rounded focus:ring-gold/30 cursor-pointer"
                  />
                  <label htmlFor="featured-check" className="text-xs font-semibold text-charcoal-black/75 cursor-pointer">
                    Feature on Homepage
                  </label>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Project Description</label>
                <textarea
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  rows={3}
                  placeholder="Details of materials, hinges, spatial engineering layouts..."
                  className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl p-3.5 text-xs focus:outline-none resize-none"
                  required
                />
              </div>

              {/* Actions panel */}
              <div className="flex items-center justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2.5 border border-gold/20 text-charcoal-black/60 hover:text-charcoal-black rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gold hover:bg-gold/90 text-charcoal-black rounded-xl text-xs font-semibold cursor-pointer shadow-sm"
                >
                  {isEdit ? "Save Changes" : "Publish Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
