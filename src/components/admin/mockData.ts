export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  budget: string;
  status: "New" | "Contacted" | "In Progress" | "Completed" | "Archived";
  assignedDesigner: string;
  notes: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  totalBookings: number;
  totalSpending: string;
  preferredService: string;
  bookingHistory: { date: string; service: string; amount: string }[];
}

export interface Project {
  id: string;
  title: string;
  category: "Kitchen" | "Bedroom" | "Living Room" | "Office" | "Wardrobes" | "Dining";
  image: string;
  beforeImage?: string;
  description: string;
  completionDate: string;
  budget: string;
  status: "Published" | "Draft";
  featured: boolean;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  price: string;
  duration: string;
  description: string;
  status: "Active" | "Inactive";
  image: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  reviewText: string;
  date: string;
  status: "Approved" | "Pending" | "Archived";
  featured: boolean;
  reply?: string;
}

export interface Message {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  messageText: string;
  date: string;
  status: "Unread" | "Replied" | "Archived";
}

// ==========================================
// 1. Initial Bookings Seed Data
// ==========================================
export const initialBookings: Booking[] = [
  {
    id: "BK-2026-001",
    name: "Rahul Sharma",
    phone: "9876543210",
    email: "rahul.sharma@example.com",
    service: "Modular Kitchen",
    date: "2026-07-16",
    time: "11:00 AM",
    budget: "₹8 Lakhs - ₹12 Lakhs",
    status: "New",
    assignedDesigner: "Ananya Rao",
    notes: "Client requested an L-shaped kitchen layout with high-gloss acrylic cabinets and built-in chimney slots.",
  },
  {
    id: "BK-2026-002",
    name: "Priyanka Reddy",
    phone: "9123456789",
    email: "priyanka.reddy@example.com",
    service: "Wardrobes & Closets",
    date: "2026-07-18",
    time: "02:30 PM",
    budget: "₹3 Lakhs - ₹5 Lakhs",
    status: "Contacted",
    assignedDesigner: "Vikram Sen",
    notes: "Follow-up call completed. Prefers floor-to-ceiling sliding closets with tinted glass profiles in master bedroom.",
  },
  {
    id: "BK-2026-003",
    name: "Amit Patel",
    phone: "9988776655",
    email: "amit.patel@example.com",
    service: "Home Interior",
    date: "2026-07-20",
    time: "04:00 PM",
    budget: "₹18 Lakhs - ₹25 Lakhs",
    status: "In Progress",
    assignedDesigner: "Ananya Rao",
    notes: "3D design iteration completed. Wardrobes and false ceiling selections are locked down. Production queue scheduled.",
  },
  {
    id: "BK-2026-004",
    name: "Dr. Srinivas Rao",
    phone: "9666011122",
    email: "srinivas.rao@example.com",
    service: "Living Room Designs",
    date: "2026-07-10",
    time: "10:00 AM",
    budget: "₹5 Lakhs - ₹8 Lakhs",
    status: "Completed",
    assignedDesigner: "Neha Gupta",
    notes: "Full wall veneer TV panel and Italian marble cladding installed at site. Handover sign-off completed successfully.",
  },
  {
    id: "BK-2026-005",
    name: "Kiran Kumar",
    phone: "9555444333",
    email: "kiran.kumar@example.com",
    service: "Dining Room Designs",
    date: "2026-07-15",
    time: "12:00 PM",
    budget: "₹3 Lakhs - ₹5 Lakhs",
    status: "New",
    assignedDesigner: "Unassigned",
    notes: "Needs Crockery unit with dynamic warm LED profile lights to match existing marble dining tabletop.",
  },
  {
    id: "BK-2026-006",
    name: "Sandeep Verma",
    phone: "9848022338",
    email: "sandeep.v@example.com",
    service: "Office Interiors",
    date: "2026-07-05",
    time: "03:00 PM",
    budget: "₹5 Lakhs - ₹8 Lakhs",
    status: "Archived",
    assignedDesigner: "Vikram Sen",
    notes: "Project postponed by client due to commercial property zoning delays. Re-contact in September.",
  }
];

// ==========================================
// 2. Initial Customers Seed Data
// ==========================================
export const initialCustomers: Customer[] = [
  {
    id: "CUST-001",
    name: "Rahul Sharma",
    phone: "9876543210",
    email: "rahul.sharma@example.com",
    location: "Gachibowli, Hyderabad",
    totalBookings: 1,
    totalSpending: "₹10,50,000",
    preferredService: "Modular Kitchen",
    bookingHistory: [
      { date: "2026-07-14", service: "Modular Kitchen Design", amount: "₹10,50,000" }
    ]
  },
  {
    id: "CUST-002",
    name: "Priyanka Reddy",
    phone: "9123456789",
    email: "priyanka.reddy@example.com",
    location: "Jubilee Hills, Hyderabad",
    totalBookings: 1,
    totalSpending: "₹4,20,000",
    preferredService: "Wardrobes & Closets",
    bookingHistory: [
      { date: "2026-07-12", service: "Master Sliding Wardrobes", amount: "₹4,20,000" }
    ]
  },
  {
    id: "CUST-003",
    name: "Amit Patel",
    phone: "9988776655",
    email: "amit.patel@example.com",
    location: "Kondapur, Hyderabad",
    totalBookings: 2,
    totalSpending: "₹22,80,000",
    preferredService: "Home Interior",
    bookingHistory: [
      { date: "2026-06-10", service: "Living Room Accents", amount: "₹4,80,000" },
      { date: "2026-07-02", service: "Full Home 3BHK Modulars", amount: "₹18,000,00" }
    ]
  },
  {
    id: "CUST-004",
    name: "Dr. Srinivas Rao",
    phone: "9666011122",
    email: "srinivas.rao@example.com",
    location: "Banjara Hills, Hyderabad",
    totalBookings: 1,
    totalSpending: "₹7,50,000",
    preferredService: "Living Room Designs",
    bookingHistory: [
      { date: "2026-05-18", service: "Living Room Media Lounge", amount: "₹7,50,000" }
    ]
  }
];

// ==========================================
// 3. Initial Projects Seed Data
// ==========================================
export const initialProjects: Project[] = [
  {
    id: "PRJ-001",
    title: "Gilded Glossy Modular Kitchen",
    category: "Kitchen",
    image: "/project-kitchen-1.png",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    description: "High-gloss dual-tone acrylic kitchen shutters with gold profile handles and white quartz countertops, integrated with custom Hettich corner carousels.",
    completionDate: "2026-06-15",
    budget: "₹12,40,000",
    status: "Published",
    featured: true
  },
  {
    id: "PRJ-002",
    title: "Bespoke Walnut TV Console & Lounge",
    category: "Living Room",
    image: "/project-living-1.jpg",
    beforeImage: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
    description: "Luxury living lounge featuring wood slatted wall panelling, custom floating entertainment drawers, and statement ambient LED strips.",
    completionDate: "2026-07-01",
    budget: "₹7,80,000",
    status: "Published",
    featured: true
  },
  {
    id: "PRJ-003",
    title: "Elegant Tall Modular Wardrobe",
    category: "Wardrobes",
    image: "/project-wardrobe-1.png",
    beforeImage: "https://images.unsplash.com/photo-1558882224-cca166733360?auto=format&fit=crop&w=800&q=80",
    description: "Bespoke premium hinged wardrobe cabinets in ivory matte finish with oak veneer vertical panels and black custom mandala handles.",
    completionDate: "2026-05-20",
    budget: "₹5,20,000",
    status: "Published",
    featured: true
  },
  {
    id: "PRJ-004",
    title: "Curved Pattern Sliding Wardrobe",
    category: "Wardrobes",
    image: "/project-wardrobe-2.png",
    beforeImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    description: "Modern sliding wardrobe closets featuring a unique interlocking curved geometric pattern in matte beige and oak veneer finish.",
    completionDate: "2026-06-29",
    budget: "₹4,60,000",
    status: "Published",
    featured: true
  }
];

// ==========================================
// 4. Initial Services Seed Data
// ==========================================
export const initialServices: Service[] = [
  {
    id: "SRV-001",
    name: "Home Interior",
    category: "Residential",
    price: "₹15 Lakhs - ₹35 Lakhs",
    duration: "45 Days Handover",
    description: "Complete end-to-end interior design and execution covering living spaces, bedrooms, false ceilings, electrical rewiring, and bespoke furniture setup.",
    status: "Active",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SRV-002",
    name: "Modular Kitchen",
    category: "Modular Systems",
    price: "₹6 Lakhs - ₹15 Lakhs",
    duration: "30 Days Handover",
    description: "German-engineered modular kitchens utilizing boiling-water-resistant (BWR) marine plywood, soft-close hardware, and high-performance layouts.",
    status: "Active",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SRV-003",
    name: "Wardrobes & Closets",
    category: "Storage Systems",
    price: "₹3 Lakhs - ₹8 Lakhs",
    duration: "25 Days Handover",
    description: "Custom floor-to-ceiling closets, sliding wardrobes, and luxury walk-in wardrobe spaces featuring LED lighting, drawers, and digital safes.",
    status: "Active",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "SRV-004",
    name: "Living Room Designs",
    category: "Residential",
    price: "₹4 Lakhs - ₹10 Lakhs",
    duration: "30 Days Handover",
    description: "Bespoke media panels, TV console units, marble/wood cladding, indirect dimmable cove ceilings, and premium social lounges.",
    status: "Active",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
  }
];

// ==========================================
// 5. Initial Reviews Seed Data
// ==========================================
export const initialReviews: Review[] = [
  {
    id: "REV-001",
    customerName: "ajay kumar",
    rating: 5,
    reviewText: "Great experience with Indus Modulars for our home interiors. Everything was factory-made and installed neatly at site. No mess, clean work and premium finish.",
    date: "2026-04-14",
    status: "Approved",
    featured: true,
    reply: "Thank you for your wonderful feedback! We’re happy you appreciated the clean installation and premium factory finish."
  },
  {
    id: "REV-002",
    customerName: "Dalavai Serena Susan",
    rating: 5,
    reviewText: "Indus Modulars designed and installed our sliding wardrobes and storage units. The space-saving design and smooth finishing show their factory precision. If you are searching for modular wardrobes in Hyderabad with premium quality, this is the right company.",
    date: "2026-03-12",
    status: "Approved",
    featured: true,
    reply: "Thank you for the wonderful feedback! We’re delighted that you loved the wardrobe design and finish."
  },
  {
    id: "REV-003",
    customerName: "chanakya yadav meegada",
    rating: 5,
    reviewText: "We chose Indus Modulars for complete home modular interiors in Hyderabad, including kitchen, wardrobes, and TV unit. The factory-finished furniture and global-standard quality really impressed us. Delivery was on time and installation was hassle-free. One of the most professional modular interior companies in Hyderabad.",
    date: "2026-03-02",
    status: "Approved",
    featured: true,
    reply: "We appreciate your feedback! It was a pleasure delivering your complete home modular interiors."
  },
  {
    id: "REV-004",
    customerName: "damu sunny",
    rating: 5,
    reviewText: "Very happy with the work by Indus Modulars. Factory-made furniture and smooth installation without any on-site mess. Quality and precision are excellent.",
    date: "2026-04-10",
    status: "Approved",
    featured: true
  }
];

// ==========================================
// 6. Initial Messages Seed Data
// ==========================================
export const initialMessages: Message[] = [
  {
    id: "MSG-001",
    name: "Vikram Rathore",
    phone: "9900887766",
    email: "vikram.r@example.com",
    subject: "Requirement for 3BHK Villa Modular Kitchen",
    messageText: "Hello, I am looking for a quote for a modular kitchen setup in Kokapet. Would love to schedule a design call. I already have raw layouts from my architect.",
    date: "2026-07-14",
    status: "Unread"
  },
  {
    id: "MSG-002",
    name: "Shalini Sinha",
    phone: "9888776655",
    email: "shalini.sinha@example.com",
    subject: "Wardrobes and storage unit requirements",
    messageText: "Do you supply factory-finished sliding wardrobes in Banjara Hills? Please share catalogs or quote ranges for double door sliding systems.",
    date: "2026-07-12",
    status: "Replied"
  },
  {
    id: "MSG-003",
    name: "Meera Nair",
    phone: "9555666777",
    email: "meera.nair@example.com",
    subject: "Consultation Request",
    messageText: "Would like to book a free structural site measurement and L-shaped kitchen consult. Available this Friday morning.",
    date: "2026-07-13",
    status: "Unread"
  }
];

// ==========================================
// 7. Analytics Data Set
// ==========================================
export const analyticsData = {
  monthlyRevenue: [
    { name: "Jan", revenue: 1420000 },
    { name: "Feb", revenue: 1850000 },
    { name: "Mar", revenue: 2300000 },
    { name: "Apr", revenue: 2100000 },
    { name: "May", revenue: 2950000 },
    { name: "Jun", revenue: 3200000 },
    { name: "Jul", revenue: 4100000 }
  ],
  bookingTrends: [
    { name: "Mon", bookings: 12 },
    { name: "Tue", bookings: 18 },
    { name: "Wed", bookings: 24 },
    { name: "Thu", bookings: 15 },
    { name: "Fri", bookings: 28 },
    { name: "Sat", bookings: 32 },
    { name: "Sun", bookings: 5 }
  ],
  servicePopularity: [
    { name: "Kitchen", percentage: 40 },
    { name: "Wardrobes", percentage: 25 },
    { name: "Home Interior", percentage: 20 },
    { name: "Living Room", percentage: 15 }
  ],
  visitorGrowth: [
    { name: "Week 1", visitors: 420 },
    { name: "Week 2", visitors: 580 },
    { name: "Week 3", visitors: 690 },
    { name: "Week 4", visitors: 820 }
  ]
};
