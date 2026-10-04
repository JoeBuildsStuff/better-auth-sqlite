# BetterAuth with SQLite

A modern, full-stack authentication application built with [Next.js](https://nextjs.org), [BetterAuth](https://www.better-auth.com), and SQLite. Features a beautiful marketing homepage and a fully functional dashboard with a collapsible sidebar navigation.

## Features

- 🎨 **Modern UI** - Built with [shadcn/ui](https://ui.shadcn.com) components and Tailwind CSS v4
- 🌓 **Dark Mode** - Complete dark/light theme support with system preference detection
- 📱 **Responsive Design** - Mobile-first design that works on all devices
- 🗂️ **Sidebar Navigation** - Collapsible sidebar with icon mode support
- 🔐 **BetterAuth Integration** - Fully integrated email/password authentication with SQLite backend
- ⚡ **Next.js 16** - Built with the latest Next.js App Router
- 🎯 **TypeScript** - Full type safety throughout the application

## Project Structure

```
better-auth-sqlite/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Marketing homepage
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   └── app/               # Dashboard app routes
│   │       ├── layout.tsx     # App layout with sidebar
│   │       ├── page.tsx       # Dashboard home
│   │       ├── users/         # Users page
│   │       └── settings/      # Settings page
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── app-sidebar.tsx    # Main sidebar component
│   │   ├── sidebar-user-menu.tsx  # User menu with theme toggle
│   │   ├── mode-toggle.tsx    # Theme toggle component
│   │   └── theme-provider.tsx # Theme context provider
│   └── lib/
│       └── utils.ts           # Utility functions
└── docs/                      # Documentation
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended), npm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd better-auth-sqlite
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Set up environment variables:
   
   Create a `.env.local` file in the root directory:
```bash
# Better Auth Configuration
# Generate a secure secret key with: openssl rand -base64 32
BETTER_AUTH_SECRET=your-secret-key-here-change-this-to-a-random-32-character-string
BETTER_AUTH_URL=http://localhost:3000

# Public URL (for client-side)
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

   **Important:** Replace `BETTER_AUTH_SECRET` with a secure random string. You can generate one using:
   ```bash
   openssl rand -base64 32
   ```

4. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

6. Initialize the database:
   
   After the first build, run the migration command to create the database tables:
   ```bash
   pnpm dlx @better-auth/cli@latest migrate
   # or
   npm exec @better-auth/cli migrate
   ```
   
   **Note:** If you get an error about better-sqlite3 bindings, make sure to rebuild it first:
   ```bash
   pnpm rebuild better-sqlite3
   ```
   
   The SQLite database file (`database.sqlite`) will be created in the project root.

## Pages

- **Homepage** (`/`) - Marketing landing page with features and CTAs
- **Sign In** (`/sign-in`) - User sign in page
- **Sign Up** (`/sign-up`) - User registration page
- **Dashboard** (`/app`) - Main application dashboard with sidebar navigation (protected)
- **Users** (`/app/users`) - User management page (protected)
- **Settings** (`/app/settings`) - Application settings page (protected)

## Keyboard Shortcuts

- `Cmd/Ctrl + B` - Toggle sidebar (desktop)

## Theme

The application supports three theme modes:
- **Light** - Light theme
- **Dark** - Dark theme  
- **System** - Follows your system preference

You can switch themes via the user menu in the sidebar footer.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Theme:** next-themes
- **Type Safety:** TypeScript
- **Authentication:** BetterAuth with email/password
- **Database:** SQLite (better-sqlite3)

## Authentication

This application uses Better Auth with SQLite for authentication. Features include:

- ✅ Email and password authentication
- ✅ Secure password hashing with scrypt
- ✅ Session management
- ✅ Protected routes with middleware
- ✅ Client-side session hooks

### Database

The SQLite database is automatically created on first run. The database file (`database.sqlite`) will be created in the project root. Better Auth will automatically create all necessary tables when the application starts.

## Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [BetterAuth Documentation](https://www.better-auth.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
