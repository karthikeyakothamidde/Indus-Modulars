"use client";

import React from "react";
import { 
  TrendingUp, 
  Calendar, 
  Briefcase, 
  MessageSquare, 
  Users, 
  Star, 
  ArrowRight, 
  Zap, 
  DollarSign,
  Plus
} from "lucide-react";
import { Booking, Project, Message, Review } from "./mockData";

interface DashboardViewProps {
  bookings: Booking[];
  projects: Project[];
  messages: Message[];
  reviews: Review[];
  setTab: (tab: string) => void;
  openAddBooking: () => void;
  openAddProject: () => void;
}

export default function DashboardView({
  bookings,
  projects,
  messages,
  reviews,
  setTab,
  openAddBooking,
  openAddProject
}: DashboardViewProps) {
  // Compute metrics dynamically from state
  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter(b => b.status === "New").length;
  const activeProjects = projects.filter(p => p.status === "Published").length;
  const unreadMessages = messages.filter(m => m.status === "Unread").length;
  const avgRating = reviews.length > 0 
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  // Mock analytics totals
  const monthlyRevenue = "₹41.0 L";
  const visitorCount = "1,840";

  // Custom SVG Bar Chart calculation (Service Popularity)
  // Kitchen: 40%, Wardrobes: 25%, Home Interior: 20%, Living Room: 15%
  const popularityData = [
    { name: "Kitchen", percentage: 40, color: "#1D3F3B" },
    { name: "Wardrobes", percentage: 25, color: "#A9725C" },
    { name: "Home Interior", percentage: 20, color: "#A8745E" },
    { name: "Living Room", percentage: 15, color: "#C8A45D" },
  ];

  return (
    <div className="space-y-8">
      {/* 1. KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Revenue KPI */}
        <div className="bg-white border border-gold/15 p-6 rounded-2xl shadow-sm flex items-center justify-between group hover:border-gold/30 transition-all duration-300">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/45 font-mono">Monthly Revenue</p>
            <h3 className="font-serif text-2xl font-bold text-charcoal-black">{monthlyRevenue}</h3>
            <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5 font-mono">
              <TrendingUp size={10} /> +12.4% vs last mo.
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
            <DollarSign size={20} />
          </div>
        </div>

        {/* Bookings KPI */}
        <div className="bg-white border border-gold/15 p-6 rounded-2xl shadow-sm flex items-center justify-between group hover:border-gold/30 transition-all duration-300">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/45 font-mono">Total Bookings</p>
            <h3 className="font-serif text-2xl font-bold text-charcoal-black">{totalBookings}</h3>
            <span className="text-[10px] text-gold font-semibold font-mono">
              {pendingBookings} awaiting consults
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
            <Calendar size={20} />
          </div>
        </div>

        {/* Active Projects KPI */}
        <div className="bg-white border border-gold/15 p-6 rounded-2xl shadow-sm flex items-center justify-between group hover:border-gold/30 transition-all duration-300">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/45 font-mono">Active Projects</p>
            <h3 className="font-serif text-2xl font-bold text-charcoal-black">{activeProjects}</h3>
            <span className="text-[10px] text-emerald-600 font-semibold font-mono">
              100% on-time delivery rate
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
            <Briefcase size={20} />
          </div>
        </div>

        {/* Messages KPI */}
        <div className="bg-white border border-gold/15 p-6 rounded-2xl shadow-sm flex items-center justify-between group hover:border-gold/30 transition-all duration-300">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-black/45 font-mono">Unread Messages</p>
            <h3 className="font-serif text-2xl font-bold text-charcoal-black">{unreadMessages}</h3>
            <span className="text-[10px] text-gold font-semibold font-mono">
              {avgRating}★ Avg rating ({reviews.length} reviews)
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
            <MessageSquare size={20} />
          </div>
        </div>
      </div>

      {/* 2. Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Line Chart: Revenue Trend (Left) */}
        <div className="lg:col-span-8 bg-white border border-gold/15 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="font-serif text-base font-bold text-charcoal-black">Monthly Revenue Trend</h4>
              <p className="text-xs text-charcoal-black/40">Fiscal year 2026 sales pipeline</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider font-bold text-gold font-mono">Total YTD: ₹1.8 Cr</span>
            </div>
          </div>
          
          {/* Custom SVG Line Chart */}
          <div className="w-full h-64 relative pt-4">
            <svg viewBox="0 0 500 200" className="w-full h-full">
              {/* Grid Lines */}
              <line x1="40" y1="20" x2="480" y2="20" stroke="#f1f1f1" strokeWidth="1" />
              <line x1="40" y1="65" x2="480" y2="65" stroke="#f1f1f1" strokeWidth="1" />
              <line x1="40" y1="110" x2="480" y2="110" stroke="#f1f1f1" strokeWidth="1" />
              <line x1="40" y1="155" x2="480" y2="155" stroke="#f1f1f1" strokeWidth="1" />
              
              {/* Y Axis Labels */}
              <text x="30" y="25" textAnchor="end" fontSize="8" fill="#a1a1a1">₹40L</text>
              <text x="30" y="70" textAnchor="end" fontSize="8" fill="#a1a1a1">₹30L</text>
              <text x="30" y="115" textAnchor="end" fontSize="8" fill="#a1a1a1">₹20L</text>
              <text x="30" y="160" textAnchor="end" fontSize="8" fill="#a1a1a1">₹10L</text>

              {/* Gradient Shading Under Line */}
              <defs>
                <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C8A45D" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#C8A45D" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon
                points="40,155 100,140 160,115 220,125 280,85 340,75 400,35 400,155 40,155"
                fill="url(#chart-glow)"
              />

              {/* Line */}
              <polyline
                fill="none"
                stroke="#C8A45D"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="40,155 100,140 160,115 220,125 280,85 340,75 400,35"
              />

              {/* Scatter Points */}
              <circle cx="40" cy="155" r="4.5" fill="#1D3F3B" stroke="#C8A45D" strokeWidth="1.5" />
              <circle cx="100" cy="140" r="4.5" fill="#1D3F3B" stroke="#C8A45D" strokeWidth="1.5" />
              <circle cx="160" cy="115" r="4.5" fill="#1D3F3B" stroke="#C8A45D" strokeWidth="1.5" />
              <circle cx="220" cy="125" r="4.5" fill="#1D3F3B" stroke="#C8A45D" strokeWidth="1.5" />
              <circle cx="280" cy="85" r="4.5" fill="#1D3F3B" stroke="#C8A45D" strokeWidth="1.5" />
              <circle cx="340" cy="75" r="4.5" fill="#1D3F3B" stroke="#C8A45D" strokeWidth="1.5" />
              <circle cx="400" cy="35" r="4.5" fill="#1D3F3B" stroke="#C8A45D" strokeWidth="1.5" />

              {/* X Axis Labels */}
              <text x="40" y="175" textAnchor="middle" fontSize="9" fill="#777">Jan</text>
              <text x="100" y="175" textAnchor="middle" fontSize="9" fill="#777">Feb</text>
              <text x="160" y="175" textAnchor="middle" fontSize="9" fill="#777">Mar</text>
              <text x="220" y="175" textAnchor="middle" fontSize="9" fill="#777">Apr</text>
              <text x="280" y="175" textAnchor="middle" fontSize="9" fill="#777">May</text>
              <text x="340" y="175" textAnchor="middle" fontSize="9" fill="#777">Jun</text>
              <text x="400" y="175" textAnchor="middle" fontSize="9" fill="#777">Jul</text>
            </svg>
          </div>
        </div>

        {/* Bar Chart: Service Popularity (Right) */}
        <div className="lg:col-span-4 bg-white border border-gold/15 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="font-serif text-base font-bold text-charcoal-black">Service Breakdown</h4>
            <p className="text-xs text-charcoal-black/40">Popularity distribution</p>
          </div>

          <div className="space-y-4 py-6">
            {popularityData.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-charcoal-black/80">{item.name}</span>
                  <span className="text-gold font-mono">{item.percentage}%</span>
                </div>
                {/* Custom Bar progress indicator */}
                <div className="w-full h-2.5 bg-warm-ivory rounded-full overflow-hidden border border-gold/5">
                  <div 
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setTab("services")}
            className="w-full py-2.5 bg-warm-ivory hover:bg-gold/10 border border-gold/25 rounded-xl text-center text-xs font-semibold text-gold transition-colors duration-300 flex items-center justify-center gap-1.5"
          >
            <span>Configure Services</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* 3. Quick Actions & Recent Timeline Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Quick Actions (Left) */}
        <div className="lg:col-span-4 bg-white border border-gold/15 p-6 rounded-2xl shadow-sm space-y-6">
          <div>
            <h4 className="font-serif text-base font-bold text-charcoal-black">Quick Actions</h4>
            <p className="text-xs text-charcoal-black/40">Common operational triggers</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <button 
              onClick={openAddBooking}
              className="flex items-center space-x-3.5 p-3.5 rounded-xl border border-gold/15 hover:border-gold/45 bg-warm-ivory/20 hover:bg-gold/5 transition-all duration-300 text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <Plus size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-charcoal-black">New Layout Booking</p>
                <p className="text-[10px] text-charcoal-black/50">Register lead from direct calls</p>
              </div>
            </button>

            <button 
              onClick={openAddProject}
              className="flex items-center space-x-3.5 p-3.5 rounded-xl border border-gold/15 hover:border-gold/45 bg-warm-ivory/20 hover:bg-gold/5 transition-all duration-300 text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <Plus size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-charcoal-black">Add Portfolio Project</p>
                <p className="text-[10px] text-charcoal-black/50">Upload new handover pictures</p>
              </div>
            </button>

            <button 
              onClick={() => setTab("content")}
              className="flex items-center space-x-3.5 p-3.5 rounded-xl border border-gold/15 hover:border-gold/45 bg-warm-ivory/20 hover:bg-gold/5 transition-all duration-300 text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <Zap size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-charcoal-black">Homepage FAQ Update</p>
                <p className="text-[10px] text-charcoal-black/50">Add answers to the client pages</p>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Bookings List (Right) */}
        <div className="lg:col-span-8 bg-white border border-gold/15 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-serif text-base font-bold text-charcoal-black">Incoming Consultations</h4>
              <p className="text-xs text-charcoal-black/40">Latest customer form requests</p>
            </div>
            <button
              onClick={() => setTab("bookings")}
              className="text-xs font-semibold text-gold hover:underline flex items-center gap-1"
            >
              <span>View All Bookings</span>
              <ArrowRight size={12} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gold/10 text-charcoal-black/50 font-mono text-[10px] uppercase font-semibold">
                  <th className="py-3 px-2">ID</th>
                  <th className="py-3 px-2">Client</th>
                  <th className="py-3 px-2">Requested Service</th>
                  <th className="py-3 px-2">Budget Allocation</th>
                  <th className="py-3 px-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/5">
                {bookings.slice(0, 4).map((book) => (
                  <tr key={book.id} className="hover:bg-warm-ivory/20 transition-colors">
                    <td className="py-3.5 px-2 font-mono font-bold text-gold">{book.id}</td>
                    <td className="py-3.5 px-2">
                      <p className="font-bold text-charcoal-black">{book.name}</p>
                      <p className="text-[10px] text-charcoal-black/50">{book.phone}</p>
                    </td>
                    <td className="py-3.5 px-2">{book.service}</td>
                    <td className="py-3.5 px-2 font-medium">{book.budget}</td>
                    <td className="py-3.5 px-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold font-mono tracking-wider uppercase border ${
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
