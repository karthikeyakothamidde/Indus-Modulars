"use client";

import React, { useState } from "react";
import { Search, Filter, Download, Plus, Edit2, Check, X, CalendarClock, CheckCircle, Trash2, Eye } from "lucide-react";
import { Booking } from "./mockData";

interface BookingsViewProps {
  bookings: Booking[];
  setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
  showAddModal: boolean;
  setShowAddModal: (show: boolean) => void;
}

export default function BookingsView({
  bookings,
  setBookings,
  showAddModal,
  setShowAddModal
}: BookingsViewProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isEdit, setIsEdit] = useState(false);

  // Edit/Add Form State
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formService, setFormService] = useState("Modular Kitchen");
  const [formBudget, setFormBudget] = useState("₹5 Lakhs - ₹8 Lakhs");
  const [formDate, setFormDate] = useState("");
  const [formTime, setFormTime] = useState("");
  const [formNotes, setFormNotes] = useState("");

  const handleEditClick = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsEdit(true);
    setFormName(booking.name);
    setFormPhone(booking.phone);
    setFormEmail(booking.email);
    setFormService(booking.service);
    setFormBudget(booking.budget);
    setFormDate(booking.date);
    setFormTime(booking.time);
    setFormNotes(booking.notes);
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit && selectedBooking) {
      // Update Booking
      setBookings(prev => prev.map(b => b.id === selectedBooking.id ? {
        ...b,
        name: formName,
        phone: formPhone,
        email: formEmail,
        service: formService,
        budget: formBudget,
        date: formDate,
        time: formTime,
        notes: formNotes
      } : b));
    } else {
      // Create new Booking
      const newBook: Booking = {
        id: `BK-2026-00${bookings.length + 1}`,
        name: formName,
        phone: formPhone,
        email: formEmail,
        service: formService,
        budget: formBudget,
        date: formDate || new Date().toISOString().split("T")[0],
        time: formTime || "12:00 PM",
        status: "New",
        assignedDesigner: "Unassigned",
        notes: formNotes
      };
      setBookings(prev => [newBook, ...prev]);
    }
    closeModal();
  };

  const closeModal = () => {
    setSelectedBooking(null);
    setIsEdit(false);
    setShowAddModal(false);
    setFormName("");
    setFormPhone("");
    setFormEmail("");
    setFormDate("");
    setFormTime("");
    setFormNotes("");
  };

  const updateStatus = (id: string, status: Booking["status"]) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
  };

  const deleteBooking = (id: string) => {
    setBookings(prev => prev.filter(b => b.id !== id));
  };

  // Compile and Download Leads CSV
  const exportToCSV = () => {
    const headers = ["Booking ID", "Name", "Phone", "Email", "Service", "Date", "Time", "Budget", "Status", "Designer", "Notes"];
    const rows = bookings.map(b => [
      b.id,
      b.name,
      b.phone,
      b.email,
      b.service,
      b.date,
      b.time,
      b.budget,
      b.status,
      b.assignedDesigner,
      `"${b.notes.replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `indus_bookings_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter Bookings
  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase()) || 
                          b.email.toLowerCase().includes(search.toLowerCase()) ||
                          b.phone.includes(search);
    const matchesFilter = statusFilter === "All" || b.status === statusFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* 1. Header Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-gold/15 p-4 rounded-2xl shadow-sm">
        {/* Search & Filter */}
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-black/35">
              <Search size={14} />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by client..."
              className="w-full sm:w-64 bg-warm-ivory/20 border border-gold/20 rounded-xl py-2 pl-9 pr-4 text-xs text-charcoal-black focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all duration-300"
            />
          </div>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-black/35 pointer-events-none">
              <Filter size={12} />
            </span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-warm-ivory/20 border border-gold/20 rounded-xl py-2 pl-9 pr-6 text-xs text-charcoal-black focus:outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Archived">Archived</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={exportToCSV}
            className="px-4 py-2 border border-gold/25 text-gold hover:text-white hover:bg-gold rounded-xl text-xs font-semibold tracking-wide transition-colors duration-300 flex items-center gap-1.5 cursor-pointer"
          >
            <Download size={14} />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-gold hover:bg-gold/90 text-charcoal-black rounded-xl text-xs font-semibold tracking-wide transition-colors duration-300 flex items-center gap-1.5 cursor-pointer shadow-sm shadow-gold/15"
          >
            <Plus size={14} />
            <span>Add Booking</span>
          </button>
        </div>
      </div>

      {/* 2. Main Data Table */}
      <div className="bg-white border border-gold/15 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gold/10 bg-warm-ivory/10 text-charcoal-black/50 font-mono text-[10px] uppercase font-semibold">
                <th className="py-4 px-4">Booking ID</th>
                <th className="py-4 px-4">Client Detail</th>
                <th className="py-4 px-4">Service</th>
                <th className="py-4 px-4">Budget Range</th>
                <th className="py-4 px-4">Consultation Time</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/5">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-charcoal-black/45 italic">
                    No bookings found matching current filters.
                  </td>
                </tr>
              ) : (
                filteredBookings.map((book) => (
                  <tr key={book.id} className="hover:bg-warm-ivory/15 transition-colors">
                    {/* ID */}
                    <td className="py-4 px-4 font-mono font-bold text-gold">{book.id}</td>
                    
                    {/* Customer Info */}
                    <td className="py-4 px-4">
                      <p className="font-bold text-charcoal-black">{book.name}</p>
                      <p className="text-[10px] text-charcoal-black/50 font-mono">{book.phone}</p>
                      <p className="text-[10px] text-charcoal-black/50">{book.email}</p>
                    </td>
                    
                    {/* Service */}
                    <td className="py-4 px-4 font-medium">{book.service}</td>
                    
                    {/* Budget */}
                    <td className="py-4 px-4 font-mono font-semibold text-charcoal-black/75">{book.budget}</td>
                    
                    {/* Date/Time */}
                    <td className="py-4 px-4">
                      <p className="font-medium text-charcoal-black">{book.date}</p>
                      <p className="text-[10px] text-charcoal-black/40">{book.time}</p>
                    </td>
                    
                    {/* Status Badge */}
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold font-mono tracking-wider uppercase border ${
                        book.status === "New"
                          ? "bg-blue-50 border-blue-200 text-blue-600"
                          : book.status === "Contacted"
                          ? "bg-amber-50 border-amber-200 text-amber-600"
                          : book.status === "In Progress"
                          ? "bg-purple-50 border-purple-200 text-purple-600"
                          : book.status === "Completed"
                          ? "bg-emerald-50 border-emerald-200 text-emerald-600"
                          : "bg-gray-50 border-gray-200 text-gray-600"
                      }`}>
                        {book.status}
                      </span>
                    </td>
                    
                    {/* Actions Trigger Panel */}
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end space-x-1.5">
                        {/* Quick Status triggers */}
                        {book.status === "New" && (
                          <button
                            onClick={() => updateStatus(book.id, "Contacted")}
                            title="Mark as Contacted"
                            className="p-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
                          >
                            <Check size={12} />
                          </button>
                        )}
                        {book.status === "Contacted" && (
                          <button
                            onClick={() => updateStatus(book.id, "In Progress")}
                            title="Mark In Progress"
                            className="p-1.5 rounded-lg border border-purple-200 bg-purple-50 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors cursor-pointer"
                          >
                            <CalendarClock size={12} />
                          </button>
                        )}
                        {book.status === "In Progress" && (
                          <button
                            onClick={() => updateStatus(book.id, "Completed")}
                            title="Mark Completed"
                            className="p-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
                          >
                            <CheckCircle size={12} />
                          </button>
                        )}

                        <button
                          onClick={() => handleEditClick(book)}
                          title="Edit Lead Info"
                          className="p-1.5 rounded-lg border border-gold/30 hover:border-gold/60 text-gold bg-gold/5 hover:bg-gold hover:text-charcoal-black transition-all cursor-pointer"
                        >
                          <Edit2 size={12} />
                        </button>
                        
                        <button
                          onClick={() => deleteBooking(book.id)}
                          title="Delete Lead"
                          className="p-1.5 rounded-lg border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Add/Edit Booking Modal popup */}
      {(showAddModal || isEdit) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-white border border-gold/25 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl animate-scaleUp">
            <div className="absolute inset-2 border border-gold/5 rounded-2xl pointer-events-none" />
            
            <h3 className="font-serif text-xl font-bold text-charcoal-black mb-6">
              {isEdit ? "Edit Consultation Details" : "Register Direct Call Booking"}
            </h3>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Full Name</label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-gold/60"
                    required
                  />
                </div>
                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Phone Number</label>
                  <input
                    type="tel"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-gold/60"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Email Address</label>
                <input
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-gold/60"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Service */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Service</label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full bg-white border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-gold/60"
                  >
                    <option>Modular Kitchen</option>
                    <option>Wardrobes & Closets</option>
                    <option>Home Interior</option>
                    <option>Living Room Designs</option>
                    <option>Dining Room Designs</option>
                    <option>Office Interiors</option>
                  </select>
                </div>
                {/* Budget */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Budget</label>
                  <select
                    value={formBudget}
                    onChange={(e) => setFormBudget(e.target.value)}
                    className="w-full bg-white border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-gold/60"
                  >
                    <option>₹3 Lakhs - ₹5 Lakhs</option>
                    <option>₹5 Lakhs - ₹8 Lakhs</option>
                    <option>₹8 Lakhs - ₹12 Lakhs</option>
                    <option>₹12 Lakhs - ₹18 Lakhs</option>
                    <option>₹18 Lakhs - ₹25 Lakhs</option>
                    <option>₹25 Lakhs+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Date</label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none"
                  />
                </div>
                {/* Time */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Time</label>
                  <input
                    type="text"
                    value={formTime}
                    onChange={(e) => setFormTime(e.target.value)}
                    placeholder="e.g. 11:30 AM"
                    className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/60 font-mono">Consultation Notes</label>
                <textarea
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  rows={3}
                  className="w-full bg-warm-ivory/20 border border-gold/20 rounded-xl p-3.5 text-xs focus:outline-none focus:border-gold/60 resize-none"
                />
              </div>

              {/* Action buttons */}
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
                  {isEdit ? "Save Changes" : "Register Lead"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
