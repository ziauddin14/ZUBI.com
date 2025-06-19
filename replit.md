# ZUBI E-commerce Platform

## Overview

ZUBI (ZU Business Industries) is a modern e-commerce web application built as a full-stack application with a React frontend and Express.js backend. The application is designed as a complete online shopping platform featuring product browsing, cart management, user authentication, and order processing capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React Context API with useReducer for global state
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom theming and dark mode support
- **Build Tool**: Vite for development and production builds
- **Data Fetching**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage with planned database integration
- **API Design**: RESTful API with `/api` prefix routing

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon serverless database
- **ORM**: Drizzle ORM with schema-first approach
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Client Storage**: LocalStorage for cart, wishlist, and user preferences
- **Session Storage**: Connect-pg-simple for PostgreSQL session store

## Key Components

### User Management
- Simple user authentication system with signup/login
- User profile management
- Session-based authentication (planned)
- In-memory user storage with database schema prepared

### Product Catalog
- Comprehensive product management with categories (electronics, fashion, home, sports)
- Product search and filtering capabilities
- Brand-based filtering
- Price range filtering
- Rating and review system
- Product image galleries

### Shopping Cart & Wishlist
- Persistent cart management with localStorage
- Quantity management and price calculations
- Wishlist functionality for saving favorite items
- Shipping cost calculations
- Tax and total price computation

### Order Processing
- Multi-step checkout process
- Payment form with validation
- Order confirmation and tracking simulation
- Integration-ready payment processing structure

### UI/UX Features
- Responsive design with mobile-first approach
- Dark/light theme toggle
- Toast notifications for user feedback
- Loading states and error handling
- Accessible components using Radix UI

## Data Flow

1. **Client-Side State**: React Context manages global application state including cart, wishlist, user authentication, and theme preferences
2. **Server Communication**: TanStack Query handles API requests with caching and error handling
3. **Data Persistence**: LocalStorage for client-side data, PostgreSQL for server-side data
4. **Real-time Updates**: Context-based state updates trigger UI re-renders across components

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Router via Wouter)
- Express.js with TypeScript support
- Vite for build tooling and development server

### UI and Styling
- Radix UI component primitives
- Tailwind CSS for utility-first styling
- Lucide React for icons
- Class Variance Authority for component variants

### Database and Data Management
- Drizzle ORM for type-safe database operations
- Neon Database for serverless PostgreSQL
- Zod for schema validation
- TanStack Query for data fetching

### Development and Build Tools
- TypeScript for type safety
- ESBuild for server-side bundling
- PostCSS and Autoprefixer for CSS processing
- TSX for TypeScript execution in development

## Deployment Strategy

### Development Environment
- **Development Server**: Vite dev server with HMR for frontend
- **Backend Server**: TSX for TypeScript execution with nodemon-like behavior
- **Database**: Neon serverless PostgreSQL with connection pooling
- **Port Configuration**: Frontend proxy to backend on port 5000

### Production Deployment
- **Build Process**: 
  - Frontend: Vite build to `dist/public`
  - Backend: ESBuild bundle to `dist/index.js`
- **Deployment Target**: Replit autoscale deployment
- **Database**: Production Neon database with connection string
- **Static Assets**: Served by Express.js in production

### Environment Configuration
- Database URL configuration via environment variables
- Development/production mode detection
- Replit-specific configurations for hosting

## Changelog
- June 19, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.