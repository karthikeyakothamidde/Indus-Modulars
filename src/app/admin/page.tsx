"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, Bell, ChevronLeft, ChevronRight, LogOut, User, Users,
  LayoutDashboard, Calendar, Briefcase, Star, MessageSquare, 
  Settings, Globe, BarChart3, HelpCircle, ShieldAlert, FolderHeart, 
  PackageSearch, Sparkles, ChevronDown
} from "lucide-react";
import Logo from "@/components/ui/Logo";

// Import mock data and sub-views
import { 
  initialBookings, 
  initialCustomers, 
  initialProjects, 
  initialServices, 
  initialReviews, 
  initialMessages, 
  Booking, 
  Project, 
  Service, 
  Review, 
  Message,
  Customer
} from "@/components/admin/mockData";

import DashboardView from "@/components/admin/DashboardView";
import BookingsView from "@/components/admin/BookingsView";
import ProjectsView from "@/components/admin/ProjectsView";
import { 
  CustomersView, 
  ServicesView, 
  ReviewsView, 
  MessagesView, 
  AnalyticsView, 
  CalendarView, 
  ContentView, 
  SettingsView, 
  ProfileView 
} from "@/components/admin/OtherViews";

export default function AdminDashboard() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Core Data States
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  // Modal Triggers for Quick Actions
  const [showAddBooking, setShowAddBooking] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);

  // Authenticate Admin on load
  useEffect(() => {
    const auth = sessionStorage.getItem("admin_auth");
    if (auth !== "true") {
      router.push("/admin/login");
    } else {
      setAuthorized(true);
      
      // Load initial seeded data sets
      setBookings(initialBookings);
      setCustomers(initialCustomers as any);
      setProjects(initialProjects);
      setServices(initialServices);
      setReviews(initialReviews);
      setMessages(initialMessages);
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth");
    router.push("/admin/login");
  };

  if (authorized === null) {
    return (
      <div className="min-h-screen bg-charcoal-black flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-t-2 border-r-2 border-gold rounded-full animate-spin" />
        <span className="text-[10px] text-gold uppercase tracking-[0.25em] font-mono">Loading Control Center...</span>
      </div>
    );
  }

  // Sidebar Menu configs
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "bookings", label: "Bookings", icon: Calendar },
    { id: "customers", label: "Customers", icon: Users },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "services", label: "Services", icon: PackageSearch },
    { id: "reviews", label: "Reviews", icon: Star },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "content", label: "Website Content", icon: Globe },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "profile", label: "Admin Profile", icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-charcoal-black flex relative font-sans">
      {/* 1. Sidebar Section */}
      <aside 
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-[#1D3F3B] text-white flex flex-col justify-between transition-all duration-300 relative border-r border-gold/15 select-none shrink-0 z-30`}
      >
        <div className="space-y-6 pt-6">
          {/* Brand Header */}
          <div className="flex items-center px-4 space-x-3.5">
            <div className="w-10 h-10 shrink-0">
              <Logo lightMode={true} className="w-full h-full" />
            </div>
            {sidebarOpen && (
              <div className="animate-fadeIn">
                <h2 className="font-serif text-sm font-bold tracking-wide text-white">Indus Admin</h2>
                <p className="text-[8px] text-gold uppercase tracking-widest font-mono">Control Panel</p>
              </div>
            )}
          </div>

          {/* Collapsible toggle chevron */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute -right-3 top-7 w-6 h-6 bg-gold text-charcoal-black rounded-full flex items-center justify-center border border-[#1D3F3B] hover:scale-105 transition-all cursor-pointer z-40"
          >
            {sidebarOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
          </button>

          {/* Menu Items */}
          <nav className="space-y-1.5 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center p-3 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive 
                      ? "bg-gold text-charcoal-black font-bold shadow-md shadow-gold/15" 
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  } ${sidebarOpen ? "space-x-3.5" : "justify-center"}`}
                >
                  <Icon size={16} className="shrink-0" />
                  {sidebarOpen && <span className="animate-fadeIn">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout at bottom */}
        <div className="p-3 border-t border-white/10">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center p-3 rounded-xl text-xs font-semibold text-red-300 hover:bg-red-500/10 hover:text-red-400 transition-colors cursor-pointer ${
              sidebarOpen ? "space-x-3.5" : "justify-center"
            }`}
          >
            <LogOut size={16} className="shrink-0" />
            {sidebarOpen && <span className="animate-fadeIn">Logout</span>}
          </button>
        </div>
      </aside>

      {/* 2. Primary Layout wrapper */}
      <div className="flex-grow flex flex-col min-w-0">
        
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gold/15 flex items-center justify-between px-6 md:px-8 select-none relative z-20 shadow-sm">
          {/* Breadcrumb Info */}
          <div>
            <h1 className="font-serif text-sm md:text-base font-bold text-charcoal-black capitalize tracking-wide">
              {activeTab === "content" ? "Website Content" : activeTab === "profile" ? "Admin Profile" : activeTab}
            </h1>
            <p className="text-[9px] font-mono text-charcoal-black/40 uppercase tracking-widest">
              Indus Control Portal / {activeTab}
            </p>
          </div>

          {/* Right utility toolbar */}
          <div className="flex items-center space-x-4">
            
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="w-10 h-10 rounded-full border border-gold/15 flex items-center justify-center text-charcoal-black/75 hover:bg-warm-ivory/30 transition-colors relative cursor-pointer"
              >
                <Bell size={16} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-gold animate-pulse" />
              </button>

              <AnimatePresence>
                {notificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2.5 w-64 bg-white border border-gold/20 rounded-2xl p-4 shadow-xl space-y-3 z-50 text-xs animate-scaleUp"
                  >
                    <p className="font-bold text-charcoal-black border-b border-gold/10 pb-2">Control Notifications</p>
                    <div className="space-y-2">
                      <p className="text-[10px] text-charcoal-black/70 leading-normal font-light">
                        💬 <span className="font-bold">Vikram Rathore</span> requested a L-shaped kitchen layout consult.
                      </p>
                      <p className="text-[10px] text-charcoal-black/70 leading-normal font-light">
                        ⭐ <span className="font-bold">ajay kumar</span> left a new 5-star review on Google reviews.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center space-x-2 p-1.5 pr-3 rounded-full border border-gold/15 hover:bg-warm-ivory/30 transition-colors cursor-pointer select-none"
              >
                <div className="w-7 h-7 rounded-full bg-[#1D3F3B] text-white flex items-center justify-center font-bold text-xs">
                  KK
                </div>
                <span className="text-xs font-semibold text-charcoal-black hidden sm:inline">Karthikeya</span>
                <ChevronDown size={12} className="text-charcoal-black/55" />
              </button>

              <AnimatePresence>
                {profileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2.5 w-48 bg-white border border-gold/20 rounded-2xl p-2 shadow-xl z-50 animate-scaleUp"
                  >
                    <button
                      onClick={() => { setActiveTab("profile"); setProfileDropdownOpen(false); }}
                      className="w-full flex items-center space-x-2.5 p-2.5 text-xs text-charcoal-black hover:bg-warm-ivory/30 rounded-xl font-semibold"
                    >
                      <User size={14} className="text-gold" />
                      <span>My Profile</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2.5 p-2.5 text-xs text-red-500 hover:bg-red-50 rounded-xl font-semibold border-t border-gold/5 mt-1"
                    >
                      <LogOut size={14} />
                      <span>Logout</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </header>

        {/* 3. Main content body */}
        <main className="flex-grow p-6 md:p-8 overflow-y-auto max-w-7xl w-full mx-auto space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "dashboard" && (
                <DashboardView 
                  bookings={bookings}
                  projects={projects}
                  messages={messages}
                  reviews={reviews}
                  setTab={setActiveTab}
                  openAddBooking={() => { setActiveTab("bookings"); setShowAddBooking(true); }}
                  openAddProject={() => { setActiveTab("projects"); setShowAddProject(true); }}
                />
              )}

              {activeTab === "bookings" && (
                <BookingsView 
                  bookings={bookings}
                  setBookings={setBookings}
                  showAddModal={showAddBooking}
                  setShowAddModal={setShowAddBooking}
                />
              )}

              {activeTab === "customers" && (
                <CustomersView customers={customers} setCustomers={setCustomers} />
              )}

              {activeTab === "projects" && (
                <ProjectsView 
                  projects={projects}
                  setProjects={setProjects}
                  showAddModal={showAddProject}
                  setShowAddModal={setShowAddProject}
                />
              )}

              {activeTab === "services" && (
                <ServicesView services={services} setServices={setServices} />
              )}

              {activeTab === "reviews" && (
                <ReviewsView reviews={reviews} setReviews={setReviews} />
              )}

              {activeTab === "messages" && (
                <MessagesView messages={messages} setMessages={setMessages} />
              )}

              {activeTab === "analytics" && <AnalyticsView />}

              {activeTab === "calendar" && <CalendarView />}

              {activeTab === "content" && <ContentView />}

              {activeTab === "settings" && <SettingsView />}

              {activeTab === "profile" && <ProfileView />}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Admin Footer */}
        <footer className="h-12 bg-white border-t border-gold/10 flex items-center justify-between px-8 text-[10px] text-charcoal-black/40 font-mono select-none">
          <span>&copy; {new Date().getFullYear()} Indus Modulars Console</span>
          <span>Logged in as Super Admin</span>
        </footer>

      </div>
    </div>
  );
}
