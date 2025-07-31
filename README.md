# 💰 Splitter - AI-Powered Expense Splitting App

A modern, full-stack expense splitting application built with cutting-edge technologies. Split expenses with friends, roommates, or groups effortlessly with AI-powered features.

![Splitter App](https://github.com/user-attachments/assets/11e138c4-efcf-4a85-8586-f2993da118d8)

## ✨ Features

- **🔐 Secure Authentication** - Built with Clerk for seamless sign-in/sign-up
- **💰 Smart Expense Tracking** - Multiple split types (equal, percentage, exact amounts)
- **👥 Group Management** - Create groups for roommates, trips, or events
- **🤖 AI Integration** - Google Gemini for intelligent expense categorization
- **📊 Real-time Analytics** - Live balance tracking and spending insights
- **💳 Smart Settlements** - Algorithm to minimize payment transactions
- **📧 Email Notifications** - Automated reminders via Resend
- **📱 Responsive Design** - Works perfectly on all devices

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript
- **Styling:** Tailwind CSS, Shadcn UI
- **Backend:** Convex (Serverless Database)
- **Authentication:** Clerk
- **AI:** Google Gemini
- **Email:** Resend
- **Deployment:** Vercel

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Convex account
- Clerk account
- Google Gemini API key
- Resend account (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lakshaya1008/Splitter.git
   cd Splitter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```bash
   # Convex Backend
   CONVEX_DEPLOYMENT=your_convex_deployment
   NEXT_PUBLIC_CONVEX_URL=https://your_deployment.convex.cloud

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key
   CLERK_SECRET_KEY=sk_test_your_key
   CLERK_JWT_ISSUER_DOMAIN=https://your_domain.clerk.accounts.dev
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   # Email Service (Optional)
   RESEND_API_KEY=re_your_key

   # AI Integration (Optional)
   GEMINI_API_KEY=AIzaSy_your_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Live Demo

Visit the deployed application: [Your Vercel URL]

## 🎯 Key Features Explained

### Expense Management
- **Multiple Split Types:** Equal, percentage, or exact amount splits
- **Categories:** Predefined categories with custom options
- **Date Tracking:** Calendar-based expense recording
- **Group Support:** Both individual and group expenses

### Smart Settlements
- **Optimization Algorithm:** Minimizes the number of transactions needed
- **Balance Tracking:** Real-time balance calculations
- **Payment History:** Complete settlement tracking

### AI Integration
- **Smart Categorization:** AI-powered expense categorization
- **Intelligent Suggestions:** Smart expense recommendations
- **Pattern Recognition:** Spending pattern analysis

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Project Structure
```
├── app/                 # Next.js App Router
│   ├── (auth)/         # Authentication routes
│   ├── (main)/         # Protected app routes
│   └── api/            # API routes
├── components/          # Reusable components
├── convex/             # Backend functions
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── public/             # Static assets
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by Splitwise for expense management
- Powered by AI for intelligent features

---

**Built with ❤️ by Lakshaya**
