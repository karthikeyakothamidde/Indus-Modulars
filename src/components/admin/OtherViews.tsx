"use client";

import React, { useState } from "react";
import { 
  Users, Search, Trash2, Edit2, CheckCircle, XCircle, Star, MessageSquare, 
  Archive, Reply, Send, Calendar as CalendarIcon, ArrowUpRight, BarChart2, 
  Settings as SettingsIcon, Globe, MapPin, Phone, Mail, Clock, ShieldCheck, 
  Lock, Key, Image as ImageIcon, Save, Plus, ArrowRight, Eye
} from "lucide-react";
import { Customer, Service, Review, Message, analyticsData } from "./mockData";

// ============================================================================
// 1. CUSTOMERS VIEW
// ============================================================================
interface CustomersViewProps {
  customers: Customer[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}
export function CustomersView({ customers, setCustomers }: CustomersViewProps) {
  const [search, setSearch] = useState("");
  const [selectedCust, setSelectedCust] = useState<Customer | null>(null);

  const filtered = customers.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-gold/15 p-4 rounded-2xl shadow-sm">
        <div>
          <h3 className="font-serif text-lg font-bold text-charcoal-black">Customer Index</h3>
          <p className="text-xs text-charcoal-black/40">Track client history and modular spends</p>
        </div>
        <div className="relative w-full sm:w-64">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-black/35">
            <Search size={14} />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by client name..."
            className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl py-2 pl-9 pr-4 text-xs text-charcoal-black focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Customer List */}
        <div className="lg:col-span-7 bg-white border border-gold/15 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gold/10 bg-warm-ivory/10 text-charcoal-black/50 font-mono text-[10px] uppercase">
                  <th className="py-4 px-4">Customer</th>
                  <th className="py-4 px-4">Location</th>
                  <th className="py-4 px-4">Bookings</th>
                  <th className="py-4 px-4">Total Spending</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/5">
                {filtered.map(c => (
                  <tr key={c.id} className="hover:bg-warm-ivory/10 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center font-bold text-gold text-xs">
                          {c.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-bold text-charcoal-black">{c.name}</p>
                          <p className="text-[10px] text-charcoal-black/50">{c.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-charcoal-black/75">{c.location}</td>
                    <td className="py-4 px-4 font-mono font-semibold">{c.totalBookings}</td>
                    <td className="py-4 px-4 font-mono font-bold text-gold">{c.totalSpending}</td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => setSelectedCust(c)}
                        className="p-1.5 rounded-lg border border-gold/20 hover:bg-gold text-gold hover:text-charcoal-black transition-all cursor-pointer"
                      >
                        <Eye size={12} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Customer Profile Details */}
        <div className="lg:col-span-5 bg-white border border-gold/15 p-6 rounded-2xl shadow-sm">
          {selectedCust ? (
            <div className="space-y-6">
              <div className="text-center space-y-2 pb-4 border-b border-gold/10">
                <div className="w-16 h-16 rounded-full bg-gold/5 border border-gold/25 flex items-center justify-center font-bold text-gold text-lg mx-auto">
                  {selectedCust.name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)}
                </div>
                <h4 className="font-serif text-base font-bold text-charcoal-black">{selectedCust.name}</h4>
                <p className="text-xs text-charcoal-black/50">{selectedCust.phone} • {selectedCust.email}</p>
                <p className="text-[10px] bg-warm-ivory text-gold border border-gold/15 px-2.5 py-0.5 rounded-full inline-block font-mono">
                  {selectedCust.preferredService} Client
                </p>
              </div>

              {/* History Timeline */}
              <div className="space-y-4">
                <h5 className="text-[10px] uppercase tracking-wider font-bold text-charcoal-black/45 font-mono">Booking History</h5>
                <div className="space-y-3.5 pl-2 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-gold/15">
                  {selectedCust.bookingHistory.map((hist, hidx) => (
                    <div key={hidx} className="flex items-start space-x-3.5">
                      <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-[8px] font-mono text-gold shrink-0 z-10">
                        {hidx + 1}
                      </div>
                      <div className="space-y-0.5 pt-0.5">
                        <p className="text-xs font-bold text-charcoal-black">{hist.service}</p>
                        <p className="text-[10px] text-charcoal-black/50">{hist.date} • <span className="font-mono text-gold font-semibold">{hist.amount}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center text-charcoal-black/35 italic text-xs">
              Select a customer eye icon to view details and spend records.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. SERVICES VIEW
// ============================================================================
interface ServicesViewProps {
  services: Service[];
  setServices: React.Dispatch<React.SetStateAction<Service[]>>;
}
export function ServicesView({ services, setServices }: ServicesViewProps) {
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  // Form
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Service["status"]>("Active");

  const handleEdit = (srv: Service) => {
    setEditId(srv.id);
    setName(srv.name);
    setPrice(srv.price);
    setDuration(srv.duration);
    setDescription(srv.description);
    setStatus(srv.status);
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId) {
      setServices(prev => prev.map(s => s.id === editId ? { ...s, name, price, duration, description, status } : s));
    } else {
      const newSrv: Service = {
        id: `SRV-00${services.length + 1}`,
        name,
        category: "Residential",
        price,
        duration,
        description,
        status,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
      };
      setServices(prev => [...prev, newSrv]);
    }
    closeModal();
  };

  const closeModal = () => {
    setEditId(null);
    setName("");
    setPrice("");
    setDuration("");
    setDescription("");
    setStatus("Active");
    setShowModal(false);
  };

  const deleteSrv = (id: string) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white border border-gold/15 p-4 rounded-2xl shadow-sm">
        <div>
          <h3 className="font-serif text-lg font-bold text-charcoal-black">Modular Services Catalog</h3>
          <p className="text-xs text-charcoal-black/40">Manage prices, catalogs, and operational timelines</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-gold hover:bg-gold/90 text-charcoal-black rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <Plus size={14} /> Add Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map(srv => (
          <div key={srv.id} className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between hover:border-gold/35 transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-base font-bold text-charcoal-black">{srv.name}</h4>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold font-mono border ${
                  srv.status === "Active" ? "bg-emerald-50 border-emerald-200 text-emerald-600" : "bg-gray-50 border-gray-200 text-gray-600"
                }`}>
                  {srv.status}
                </span>
              </div>
              <p className="text-xs text-charcoal-black/65 leading-relaxed font-light">{srv.description}</p>
              <div className="flex flex-wrap gap-4 text-[11px] text-charcoal-black/50 font-mono">
                <span>Price Range: <strong className="text-gold font-sans">{srv.price}</strong></span>
                <span>•</span>
                <span>Timeframe: <strong>{srv.duration}</strong></span>
              </div>
            </div>

            <div className="pt-4 border-t border-gold/10 flex items-center justify-end space-x-2">
              <button
                onClick={() => handleEdit(srv)}
                className="p-1.5 rounded-lg border border-gold/20 hover:bg-gold text-gold hover:text-charcoal-black transition-all cursor-pointer"
              >
                <Edit2 size={12} />
              </button>
              <button
                onClick={() => deleteSrv(srv.id)}
                className="p-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
              >
                <Trash2 size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-white border border-gold/25 rounded-3xl p-8 max-w-md w-full relative shadow-2xl">
            <h3 className="font-serif text-lg font-bold mb-6">{editId ? "Edit Service" : "Add Service"}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-charcoal-black/60">Service Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-charcoal-black/60">Price range</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="₹6 Lakhs - ₹12 Lakhs"
                    className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase text-charcoal-black/60">Duration</label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="30 Days Handover"
                    className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-charcoal-black/60">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl p-3 text-xs"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-charcoal-black/60">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as Service["status"])}
                  className="w-full bg-white border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex items-center justify-end space-x-3 pt-4">
                <button type="button" onClick={closeModal} className="px-4 py-2 border border-gold/25 rounded-xl text-xs">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-gold text-charcoal-black rounded-xl text-xs">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// 3. REVIEWS VIEW
// ============================================================================
interface ReviewsViewProps {
  reviews: Review[];
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
}
export function ReviewsView({ reviews, setReviews }: ReviewsViewProps) {
  const [replyId, setReplyId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  const updateStatus = (id: string, status: Review["status"]) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const toggleFeatured = (id: string) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, featured: !r.featured } : r));
  };

  const handleReplySubmit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setReviews(prev => prev.map(r => r.id === id ? { ...r, reply: replyText } : r));
    setReplyId(null);
    setReplyText("");
  };

  const deleteReview = (id: string) => {
    setReviews(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gold/15 p-4 rounded-2xl shadow-sm">
        <h3 className="font-serif text-lg font-bold text-charcoal-black">Google Review Moderation</h3>
        <p className="text-xs text-charcoal-black/40">Moderate customer reviews and feature them on the homepage</p>
      </div>

      <div className="space-y-4">
        {reviews.map(rev => (
          <div key={rev.id} className="bg-white border border-gold/15 p-6 rounded-2xl shadow-sm space-y-4 hover:border-gold/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center font-bold text-gold text-xs">
                  {rev.customerName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-charcoal-black text-xs capitalize">{rev.customerName}</h4>
                  <p className="text-[9px] text-charcoal-black/40 font-mono">{rev.date}</p>
                </div>
              </div>

              {/* Stars & Moderation Status */}
              <div className="flex items-center space-x-3 self-start sm:self-auto">
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} fill={i < rev.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold font-mono border ${
                  rev.status === "Approved" ? "bg-emerald-50 border-emerald-200 text-emerald-600" : "bg-amber-50 border-amber-200 text-amber-600"
                }`}>
                  {rev.status}
                </span>
              </div>
            </div>

            <p className="text-xs text-charcoal-black/75 leading-relaxed font-light">{rev.reviewText}</p>

            {/* Official Response */}
            {rev.reply ? (
              <div className="bg-warm-ivory/40 border border-gold/10 rounded-xl p-3.5 text-xs italic text-charcoal-black/75 relative">
                <span className="font-bold text-gold not-italic text-[10px] block mb-1">Official Response:</span>
                "{rev.reply}"
              </div>
            ) : (
              replyId === rev.id ? (
                <form onSubmit={(e) => handleReplySubmit(e, rev.id)} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write a response..."
                    className="flex-grow bg-warm-ivory/20 border border-gold/20 rounded-xl py-2 px-3 text-xs"
                    required
                  />
                  <button type="submit" className="p-2 bg-gold text-charcoal-black rounded-xl">
                    <Send size={12} />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setReplyId(rev.id)}
                  className="text-xs font-semibold text-gold hover:underline flex items-center gap-1.5"
                >
                  <Reply size={12} /> Reply to Review
                </button>
              )
            )}

            {/* Actions Panel */}
            <div className="pt-4 border-t border-gold/5 flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleFeatured(rev.id)}
                  className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
                    rev.featured ? "bg-gold border-gold text-charcoal-black font-semibold" : "border-gold/30 text-gold hover:bg-gold/5"
                  }`}
                >
                  {rev.featured ? "Featured on Home" : "Feature on Home"}
                </button>
              </div>

              <div className="flex items-center space-x-2">
                {rev.status !== "Approved" && (
                  <button
                    onClick={() => updateStatus(rev.id, "Approved")}
                    className="px-2.5 py-1 text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => deleteReview(rev.id)}
                  className="p-1 rounded-lg border border-red-200 text-red-500 hover:bg-red-50"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// 4. MESSAGES INBOX
// ============================================================================
interface MessagesViewProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}
export function MessagesView({ messages, setMessages }: MessagesViewProps) {
  const [selectedMsg, setSelectedMsg] = useState<Message | null>(null);

  const archiveMsg = (id: string) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status: "Archived" } : m));
    setSelectedMsg(null);
  };

  const deleteMsg = (id: string) => {
    setMessages(prev => prev.filter(m => m.id !== id));
    setSelectedMsg(null);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gold/15 p-4 rounded-2xl shadow-sm">
        <h3 className="font-serif text-lg font-bold text-charcoal-black">Inquiry Inbox</h3>
        <p className="text-xs text-charcoal-black/40">Read and manage contact form requests from website visitors</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-6 space-y-3">
          {messages.map(msg => (
            <button
              key={msg.id}
              onClick={() => setSelectedMsg(msg)}
              className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col space-y-2 relative cursor-pointer ${
                selectedMsg?.id === msg.id 
                  ? "bg-white border-gold shadow-md" 
                  : "bg-white border-gold/15 hover:border-gold/30"
              }`}
            >
              {msg.status === "Unread" && (
                <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold" />
              )}
              <div className="flex items-center justify-between pr-4">
                <span className="text-[9px] font-mono font-bold text-gold">{msg.id}</span>
                <span className="text-[9px] text-charcoal-black/40 font-mono">{msg.date}</span>
              </div>
              <h4 className="font-bold text-charcoal-black text-xs">{msg.name}</h4>
              <p className="text-xs font-serif font-bold text-charcoal-black/80 truncate w-[90%]">{msg.subject}</p>
            </button>
          ))}
        </div>

        {/* Message Content Viewer */}
        <div className="lg:col-span-6 bg-white border border-gold/15 p-6 rounded-2xl shadow-sm">
          {selectedMsg ? (
            <div className="space-y-6">
              <div className="space-y-3 border-b border-gold/10 pb-4">
                <span className="text-[10px] font-mono font-bold text-gold">{selectedMsg.id} • Recieved {selectedMsg.date}</span>
                <h4 className="font-serif text-lg font-bold text-charcoal-black">{selectedMsg.subject}</h4>
                <div className="text-xs text-charcoal-black/60 leading-relaxed font-light">
                  <p><strong>From:</strong> {selectedMsg.name}</p>
                  <p><strong>Phone:</strong> {selectedMsg.phone}</p>
                  <p><strong>Email:</strong> {selectedMsg.email}</p>
                </div>
              </div>

              <div className="bg-warm-ivory/20 border border-gold/10 p-4 rounded-xl text-xs text-charcoal-black/85 leading-relaxed font-light">
                {selectedMsg.messageText}
              </div>

              {/* Actions panel */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => archiveMsg(selectedMsg.id)}
                  className="px-4 py-2 border border-gold/20 text-gold hover:bg-gold/5 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Archive size={14} /> Archive
                </button>
                <button
                  onClick={() => deleteMsg(selectedMsg.id)}
                  className="px-4 py-2 border border-red-200 text-red-500 hover:bg-red-50 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center text-charcoal-black/35 italic text-xs">
              Select an inquiry message from the list to view its details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 5. ANALYTICS VIEW
// ============================================================================
export function AnalyticsView() {
  return (
    <div className="space-y-6">
      <div className="bg-white border border-gold/15 p-4 rounded-2xl shadow-sm flex items-center justify-between">
        <div>
          <h3 className="font-serif text-lg font-bold text-charcoal-black">Analytics & Reports</h3>
          <p className="text-xs text-charcoal-black/40">Visual statistics of performance pipelines</p>
        </div>
        <button 
          onClick={() => alert("Report compiled! Download started (mocked).")}
          className="px-4 py-2 bg-gold hover:bg-gold/90 text-charcoal-black rounded-xl text-xs font-semibold"
        >
          Export PDF Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Visitors Chart */}
        <div className="bg-white border border-gold/15 p-6 rounded-2xl shadow-sm">
          <h4 className="font-serif text-sm font-bold text-charcoal-black mb-6">Website Visitor Growth</h4>
          {/* Custom SVG Area chart */}
          <div className="w-full h-48">
            <svg viewBox="0 0 400 150" className="w-full h-full">
              <polygon points="20,130 100,105 180,85 260,70 340,30 340,130" fill="rgba(198,166,100,0.15)" />
              <polyline fill="none" stroke="#C6A664" strokeWidth="2.5" points="20,130 100,105 180,85 260,70 340,30" />
              <circle cx="20" cy="130" r="3.5" fill="#1D3F3B" stroke="#C6A664" strokeWidth="1.5" />
              <circle cx="100" cy="105" r="3.5" fill="#1D3F3B" stroke="#C6A664" strokeWidth="1.5" />
              <circle cx="180" cy="85" r="3.5" fill="#1D3F3B" stroke="#C6A664" strokeWidth="1.5" />
              <circle cx="260" cy="70" r="3.5" fill="#1D3F3B" stroke="#C6A664" strokeWidth="1.5" />
              <circle cx="340" cy="30" r="3.5" fill="#1D3F3B" stroke="#C6A664" strokeWidth="1.5" />
              <text x="20" y="145" fontSize="8" fill="#888" textAnchor="middle">Week 1</text>
              <text x="100" y="145" fontSize="8" fill="#888" textAnchor="middle">Week 2</text>
              <text x="180" y="145" fontSize="8" fill="#888" textAnchor="middle">Week 3</text>
              <text x="260" y="145" fontSize="8" fill="#888" textAnchor="middle">Week 4</text>
              <text x="340" y="145" fontSize="8" fill="#888" textAnchor="middle">Week 5</text>
            </svg>
          </div>
        </div>

        {/* Lead Booking Trends */}
        <div className="bg-white border border-gold/15 p-6 rounded-2xl shadow-sm">
          <h4 className="font-serif text-sm font-bold text-charcoal-black mb-6">Weekly Lead Inflow</h4>
          <div className="w-full h-48">
            <svg viewBox="0 0 400 150" className="w-full h-full">
              {/* Monday to Sunday Bar chart */}
              <rect x="25" y="90" width="16" height="40" fill="#1D3F3B" rx="3" />
              <rect x="75" y="70" width="16" height="60" fill="#C6A664" rx="3" />
              <rect x="125" y="50" width="16" height="80" fill="#1D3F3B" rx="3" />
              <rect x="175" y="80" width="16" height="50" fill="#C6A664" rx="3" />
              <rect x="225" y="40" width="16" height="90" fill="#1D3F3B" rx="3" />
              <rect x="275" y="30" width="16" height="100" fill="#C6A664" rx="3" />
              <rect x="325" y="110" width="16" height="20" fill="#1D3F3B" rx="3" />
              
              <text x="33" y="145" fontSize="8" fill="#888" textAnchor="middle">Mon</text>
              <text x="83" y="145" fontSize="8" fill="#888" textAnchor="middle">Tue</text>
              <text x="133" y="145" fontSize="8" fill="#888" textAnchor="middle">Wed</text>
              <text x="183" y="145" fontSize="8" fill="#888" textAnchor="middle">Thu</text>
              <text x="233" y="145" fontSize="8" fill="#888" textAnchor="middle">Fri</text>
              <text x="283" y="145" fontSize="8" fill="#888" textAnchor="middle">Sat</text>
              <text x="333" y="145" fontSize="8" fill="#888" textAnchor="middle">Sun</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 6. CALENDAR VIEW
// ============================================================================
export function CalendarView() {
  const daysInMonth = Array.from({ length: 31 });
  const mockAppointments = [
    { day: 16, title: "Rahul Kitchen Consult (11 AM)" },
    { day: 18, title: "Priyanka Closet Site-Visit (2:30 PM)" },
    { day: 20, title: "Amit Design Iteration (4 PM)" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gold/15 p-4 rounded-2xl shadow-sm">
        <h3 className="font-serif text-lg font-bold text-charcoal-black">Design Calendar</h3>
        <p className="text-xs text-charcoal-black/40">Track client meetings, site measurements, and deadlines</p>
      </div>

      <div className="bg-white border border-gold/15 p-6 rounded-2xl shadow-sm space-y-4">
        {/* Month header */}
        <div className="flex items-center justify-between text-sm font-semibold border-b border-gold/10 pb-4">
          <span className="font-serif text-base font-bold text-charcoal-black">July 2026</span>
          <div className="flex items-center space-x-2 text-xs font-semibold text-gold">
            <span className="px-2 py-0.5 bg-gold/10 border border-gold/15 rounded-md">Today: July 14</span>
          </div>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-1 text-center font-mono text-[9px] uppercase tracking-wider text-charcoal-black/45 font-bold pb-2">
          <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
        </div>

        <div className="grid grid-cols-7 gap-2.5">
          {/* Pad start for grid alignment (July 2026 starts on Wednesday = 3 padding days) */}
          <div className="h-20 bg-warm-ivory/5 rounded-xl border border-dashed border-gold/5" />
          <div className="h-20 bg-warm-ivory/5 rounded-xl border border-dashed border-gold/5" />
          <div className="h-20 bg-warm-ivory/5 rounded-xl border border-dashed border-gold/5" />

          {daysInMonth.map((_, idx) => {
            const dayNum = idx + 1;
            const hasAppt = mockAppointments.find(a => a.day === dayNum);
            return (
              <div key={idx} className={`h-20 p-2 border border-gold/10 rounded-xl flex flex-col justify-between text-left select-none relative ${
                dayNum === 14 ? "bg-gold/5 border-gold shadow-inner" : "bg-white hover:border-gold/30"
              }`}>
                <span className={`text-[10px] font-bold ${dayNum === 14 ? "text-gold" : "text-charcoal-black/70"}`}>
                  {dayNum}
                </span>
                
                {hasAppt && (
                  <div className="bg-gold hover:bg-gold/90 text-charcoal-black text-[7px] leading-tight font-semibold p-1 rounded font-sans tracking-wide truncate cursor-pointer" title={hasAppt.title}>
                    {hasAppt.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 7. WEBSITE CONTENT VIEW
// ============================================================================
export function ContentView() {
  const [heroTitle, setHeroTitle] = useState("Luxury Interior Design Services");
  const [aboutText, setAboutText] = useState("Indus Modulars is a Hyderabad-based modular interiors company delivering premium, factory-made solutions for homes and commercial spaces.");

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gold/15 p-4 rounded-2xl shadow-sm">
        <h3 className="font-serif text-lg font-bold text-charcoal-black">Website Content Editor</h3>
        <p className="text-xs text-charcoal-black/40">Edit text blocks and settings on the client landing pages</p>
      </div>

      <div className="bg-white border border-gold/15 p-6 rounded-2xl shadow-sm space-y-6">
        <h4 className="font-serif text-sm font-bold text-charcoal-black border-b border-gold/10 pb-3">Homepage Settings</h4>
        
        <form onSubmit={(e) => { e.preventDefault(); alert("Website content updated! (mocked)"); }} className="space-y-5">
          {/* Hero title */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-mono tracking-wider font-semibold text-charcoal-black/60">Homepage Hero Headline</label>
            <input
              type="text"
              value={heroTitle}
              onChange={(e) => setHeroTitle(e.target.value)}
              className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-4 py-2.5 text-xs focus:outline-none"
            />
          </div>

          {/* About Section copy */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-mono tracking-wider font-semibold text-charcoal-black/60">Company Biography Description</label>
            <textarea
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              rows={4}
              className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl p-3.5 text-xs focus:outline-none resize-none leading-relaxed font-light"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-gold text-charcoal-black text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm"
          >
            <Save size={14} /> Update Content
          </button>
        </form>
      </div>
    </div>
  );
}

// ============================================================================
// 8. SETTINGS VIEW
// ============================================================================
export function SettingsView() {
  const [address, setAddress] = useState("B-12-15/7A, IDA PHASE - 1, Patancheruvu, Hyderabad, Telangana 502319");
  const [phone, setPhone] = useState("9666022285");
  const [email, setEmail] = useState("indusmodulars@gmail.com");

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gold/15 p-4 rounded-2xl shadow-sm">
        <h3 className="font-serif text-lg font-bold text-charcoal-black">Global System Settings</h3>
        <p className="text-xs text-charcoal-black/40">Manage contact numbers, coordinates, and hours</p>
      </div>

      <div className="bg-white border border-gold/15 p-6 rounded-2xl shadow-sm space-y-6">
        <h4 className="font-serif text-sm font-bold text-charcoal-black border-b border-gold/10 pb-3">Corporate Coordinates</h4>

        <form onSubmit={(e) => { e.preventDefault(); alert("Corporate settings saved! (mocked)"); }} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-mono font-semibold text-charcoal-black/60">Contact Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-4 py-2.5 text-xs focus:outline-none"
              />
            </div>
            {/* Email */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-mono font-semibold text-charcoal-black/60">Inquiry Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-4 py-2.5 text-xs focus:outline-none"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-mono font-semibold text-charcoal-black/60">Factory Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-4 py-2.5 text-xs focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-gold text-charcoal-black text-xs font-semibold rounded-xl flex items-center gap-1.5 shadow-sm"
          >
            <Save size={14} /> Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}

// ============================================================================
// 9. PROFILE VIEW
// ============================================================================
export function ProfileView() {
  const [name, setName] = useState("K. Karthikeya");
  const [email, setEmail] = useState("karthikeya@indus.com");
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gold/15 p-4 rounded-2xl shadow-sm">
        <h3 className="font-serif text-lg font-bold text-charcoal-black">Admin Account Profile</h3>
        <p className="text-xs text-charcoal-black/40">Manage your profile credentials and security preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Card: Info */}
        <div className="lg:col-span-7 bg-white border border-gold/15 p-6 rounded-2xl shadow-sm space-y-6">
          <h4 className="font-serif text-sm font-bold text-charcoal-black border-b border-gold/10 pb-3">Personal Specifications</h4>

          <form onSubmit={(e) => { e.preventDefault(); alert("Profile updated! (mocked)"); }} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-mono text-charcoal-black/60">Display Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-4 py-2.5 text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-mono text-charcoal-black/60">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-4 py-2.5 text-xs font-mono"
              />
            </div>

            <button type="submit" className="px-5 py-2.5 bg-gold text-charcoal-black text-xs font-semibold rounded-xl">
              Save Changes
            </button>
          </form>
        </div>

        {/* Right Card: 2FA */}
        <div className="lg:col-span-5 bg-white border border-gold/15 p-6 rounded-2xl shadow-sm space-y-6">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="text-gold" size={20} />
            <h4 className="font-serif text-sm font-bold text-charcoal-black">Security & Verification</h4>
          </div>

          <div className="space-y-4 text-xs leading-relaxed font-light text-charcoal-black/75">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-charcoal-black">Two-Factor Authentication (2FA)</p>
                <p className="text-[10px] text-charcoal-black/45">Protect login with mobile authenticator codes</p>
              </div>
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={(e) => setTwoFactor(e.target.checked)}
                className="w-4.5 h-4.5 text-gold border-gold/30 rounded focus:ring-gold/30 cursor-pointer"
              />
            </div>

            {twoFactor && (
              <div className="bg-gold/5 border border-gold/15 p-4 rounded-xl space-y-4 animate-fadeIn">
                <p className="text-[10px] text-charcoal-black/60">Scan code below with Google Authenticator or Duo app:</p>
                {/* Visual QR Placeholder */}
                <div className="w-32 h-32 bg-white border border-gold/25 mx-auto flex items-center justify-center p-2 rounded-lg">
                  <div className="w-full h-full bg-[repeating-conic-gradient(#1D3F3B_0_25%,#fff_0_50%)] bg-[length:16px_16px] opacity-75" />
                </div>
                <p className="text-center font-mono font-bold text-gold text-[10px]">SECRET: INDUS2FA7766</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
