# 🏢 Common Ground – MVP Plan

**Common Ground** is a platform for booking rooms **by the hour** — whether in a university, business, or home. Think Airbnb meets Peerspace, but focused on **short, flexible rentals** for meetings, fitness, focus groups, or study sessions.

---

## 🎯 Vision

- Help people **find affordable, nearby spaces** for short-term needs.  
- Enable universities, businesses, and homeowners to **monetize unused rooms**.  
- Build trust and safety into every booking through contracts, payments, and reviews.  

---

## 🧩 MVP Scope

### Core User Flows
1. **Browse & Search**
   - Search by location, time, category (fitness, meeting, study).  
   - Map + list view.  

2. **Book a Space**
   - Select hourly slot, confirm booking, pay with card.  
   - Instant confirmation.  

3. **Host a Space**
   - Create listing with photos, description, hourly rate.  
   - Manage availability calendar.  

4. **Payments**
   - Stripe-powered checkout.  
   - Automatic payouts to hosts.  

5. **Trust & Safety**
   - Basic identity verification.  
   - Ratings and reviews after each booking.  

---

## 🛠️ Tech Stack (MVP)

- **Frontend**: Next.js + Tailwind CSS  
- **Backend**: Node.js (Express/NestJS) + PostgreSQL (PostGIS for location search)  
- **Auth**: Clerk/Auth0 (host & renter accounts)  
- **Payments**: Stripe (hourly billing + payouts)  
- **Maps**: Mapbox/Leaflet for discovery  
- **Hosting**: Vercel (frontend), Render/Railway (backend)  

---

## 📦 Deliverables (Phase 1)

- [ ] Landing page + marketing site  
- [ ] User registration (host vs. renter roles)  
- [ ] Host listing flow (add room, photos, pricing, availability)  
- [ ] Search & booking flow (map + calendar picker)  
- [ ] Stripe checkout & payouts  
- [ ] Ratings/reviews system  
- [ ] Admin dashboard (basic moderation, support)  

---

## ⚖️ Legal & Compliance (Early Considerations)

- Draft **Host Terms & Guest Terms** with liability waivers.  
- Require hosts to certify compliance with **zoning/permits**.  
- Collect/remit sales/occupancy taxes in supported states.  
- Explore liability coverage similar to Airbnb/Peerspace.  

---

## 🚀 Roadmap (Next Steps)

- Phase 2:  
  - Calendar sync with Google/Outlook.  
  - Host analytics dashboard.  
  - Mobile app (React Native).  

- Phase 3:  
  - Insurance add-on products.  
  - Enterprise tools for universities/businesses.  
  - AI-powered recommendations (suggest best space by activity & group size).  
