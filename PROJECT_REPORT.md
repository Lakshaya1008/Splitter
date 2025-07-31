# AI Splitwise Clone - Comprehensive Project Report

## 📋 Project Overview

**Project Name:** AI Splitwise Clone  
**Technology Stack:** Next.js 15, Convex (Backend-as-a-Service), Clerk (Authentication), Tailwind CSS, Shadcn UI  
**Project Type:** Full-stack expense splitting application with AI integration  
**Repository:** Based on tutorial from https://youtu.be/Ce7O3p7-YDI

## 🏗️ Architecture & Technology Stack

### Frontend
- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS v4.1.3 with custom design system
- **UI Components:** Shadcn UI with Radix primitives
- **State Management:** React hooks with custom Convex integration
- **Form Handling:** React Hook Form with Zod validation
- **Icons:** Lucide React
- **Charts:** Recharts for data visualization

### Backend
- **Database:** Convex (serverless backend-as-a-Service)
- **Authentication:** Clerk with JWT integration
- **Email Service:** Resend for transactional emails
- **Background Jobs:** Inngest for scheduled tasks
- **AI Integration:** Google Generative AI (Gemini)

### Development Tools
- **Linting:** ESLint with Next.js config
- **Build Tool:** Turbopack for development
- **Package Manager:** npm

## 📊 Database Schema

### Core Tables

#### Users
```javascript
{
  name: string,
  email: string,
  tokenIdentifier: string,
  imageUrl: optional(string)
}
```

#### Expenses
```javascript
{
  description: string,
  amount: number,
  category: optional(string),
  date: number, // timestamp
  paidByUserId: id("users"),
  splitType: string, // "equal", "percentage", "exact"
  splits: array({
    userId: id("users"),
    amount: number,
    paid: boolean
  }),
  groupId: optional(id("groups")),
  createdBy: id("users")
}
```

#### Groups
```javascript
{
  name: string,
  description: optional(string),
  createdBy: id("users"),
  members: array({
    userId: id("users"),
    role: string, // "admin" or "member"
    joinedAt: number
  })
}
```

#### Settlements
```javascript
{
  amount: number,
  note: optional(string),
  date: number, // timestamp
  paidByUserId: id("users"),
  receivedByUserId: id("users"),
  groupId: optional(id("groups")),
  relatedExpenseIds: optional(array(id("expenses"))),
  createdBy: id("users")
}
```

## 🚀 Key Features

### 1. Authentication & User Management
- **Clerk Integration:** Complete auth system with sign-in/sign-up
- **Protected Routes:** Middleware-based route protection
- **User Profiles:** Avatar, name, email management

### 2. Expense Management
- **Multiple Split Types:** Equal, percentage, and exact amount splits
- **Categories:** Predefined expense categories with custom options
- **Date Selection:** Calendar-based date picker
- **Group vs Individual:** Support for both group and one-on-one expenses

### 3. Group Management
- **Group Creation:** Create groups for roommates, trips, events
- **Member Management:** Add/remove members with role-based permissions
- **Group Balances:** Real-time balance calculations per group

### 4. Settlement System
- **Smart Settlements:** Algorithm to minimize payment transactions
- **Payment Tracking:** Log settlements between users
- **Balance Reconciliation:** Automatic balance updates

### 5. Dashboard & Analytics
- **Balance Overview:** Total balance, amounts owed/owed by
- **Monthly Spending:** Year-to-date spending analytics
- **Group Summaries:** Quick access to group balances
- **Recent Activity:** Latest expenses and settlements

### 6. AI Integration
- **Google Gemini:** AI-powered features (implementation details in codebase)
- **Smart Suggestions:** Potential AI-driven expense categorization

## 📁 Project Structure

```
ai-splitwise-clone/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/                   # Protected main app routes
│   │   ├── dashboard/            # Main dashboard
│   │   ├── expenses/             # Expense management
│   │   ├── groups/               # Group management
│   │   ├── contacts/             # Contact management
│   │   ├── settlements/          # Settlement tracking
│   │   └── person/               # Individual person views
│   ├── api/                      # API routes
│   ├── layout.js                 # Root layout
│   ├── page.jsx                  # Landing page
│   └── globals.css               # Global styles
├── components/                    # Reusable components
│   ├── ui/                       # Shadcn UI components
│   ├── expense-list.jsx          # Expense display component
│   ├── group-balances.jsx        # Group balance component
│   ├── settlement-list.jsx       # Settlement display
│   └── header.jsx                # Navigation header
├── convex/                       # Backend functions
│   ├── schema.js                 # Database schema
│   ├── users.js                  # User management
│   ├── expenses.js               # Expense operations
│   ├── groups.js                 # Group operations
│   ├── settlements.js            # Settlement operations
│   ├── dashboard.js              # Dashboard queries
│   ├── contacts.js               # Contact management
│   ├── inngest.js                # Background job logic
│   └── email.js                  # Email functionality
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
└── public/                       # Static assets
```

## 🔧 Core Functionality

### Expense Creation Flow
1. **Form Validation:** Zod schema validation for all inputs
2. **Participant Selection:** Add/remove participants dynamically
3. **Split Calculation:** Automatic calculation based on split type
4. **Group Integration:** Optional group assignment
5. **Real-time Updates:** Immediate UI updates via Convex

### Balance Calculation Algorithm
1. **Expense Processing:** Calculate debts from all expenses
2. **Settlement Application:** Reduce debts based on payments
3. **Net Balance:** Compute final balances between users
4. **Optimization:** Minimize transaction count for settlements

### Group Management
1. **Member Roles:** Admin and member permissions
2. **Balance Tracking:** Per-group balance calculations
3. **Expense Filtering:** Group-specific expense views
4. **Settlement Coordination:** Group-wide settlement tracking

## 🎨 UI/UX Design

### Design System
- **Color Scheme:** Green-focused with teal accents
- **Typography:** Modern, clean font hierarchy
- **Components:** Consistent Shadcn UI components
- **Responsive:** Mobile-first design approach

### Key UI Components
- **Gradient Titles:** Custom gradient text effects
- **Card Layouts:** Consistent card-based layouts
- **Loading States:** Spinner components for async operations
- **Toast Notifications:** Sonner for user feedback

## 🔐 Security & Authentication

### Route Protection
```javascript
// Protected routes requiring authentication
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/expenses(.*)",
  "/contacts(.*)",
  "/groups(.*)",
  "/person(.*)",
  "/settlements(.*)",
]);
```

### Data Validation
- **Server-side Validation:** Convex function validation
- **Client-side Validation:** Zod schemas with React Hook Form
- **User Authorization:** Role-based access control

## 📈 Performance Optimizations

### Database Indexing
- **Compound Indexes:** Optimized queries for common patterns
- **Search Indexes:** Full-text search on user names and emails
- **Date Indexes:** Efficient date-based filtering

### Frontend Optimizations
- **Turbopack:** Fast development builds
- **Image Optimization:** Next.js Image component
- **Code Splitting:** Automatic route-based splitting

## 🚀 Deployment & Environment

### Environment Variables Required
```bash
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_JWT_ISSUER_DOMAIN=
RESEND_API_KEY=
GEMINI_API_KEY=
```

### Build Commands
```bash
npm run dev      # Development with Turbopack
npm run build    # Production build
npm run start    # Production server
npm run lint     # Code linting
```

## 🎯 Key Strengths

1. **Modern Tech Stack:** Latest Next.js 15 with cutting-edge features
2. **Real-time Updates:** Convex provides instant data synchronization
3. **Scalable Architecture:** Serverless backend with automatic scaling
4. **Rich UI/UX:** Professional design with excellent user experience
5. **Comprehensive Features:** Complete expense splitting solution
6. **AI Integration:** Future-ready with AI capabilities
7. **Type Safety:** Strong typing with Zod validation

## 🔮 Potential Enhancements

1. **Mobile App:** React Native version for mobile users
2. **Advanced Analytics:** More detailed spending insights
3. **Export Features:** PDF/CSV export of expense reports
4. **Multi-currency:** Support for different currencies
5. **Recurring Expenses:** Automated recurring expense creation
6. **Photo Receipts:** Image upload for expense receipts
7. **Push Notifications:** Real-time payment reminders

## 📝 Conclusion

This AI Splitwise Clone represents a modern, full-stack expense splitting application built with cutting-edge technologies. The project demonstrates excellent architecture decisions, comprehensive feature implementation, and a focus on user experience. The combination of Next.js 15, Convex, and Clerk provides a robust foundation for a production-ready expense management system.

The codebase is well-structured, follows modern React patterns, and implements proper security measures. The AI integration with Google Gemini adds future-proofing for intelligent features. Overall, this is a high-quality, production-ready application that could serve as a foundation for a commercial expense splitting service. 