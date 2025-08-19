# Neural Notes

Neural Notes is a modern note-taking application that combines the power of AI with a clean, minimalist interface. Built with Next.js 15, TypeScript, and Supabase, it offers a seamless experience for creating, managing, and enhancing your notes with AI assistance.

![Neural Notes Logo](/public/Neural_logo.png)

## Features

### 🎨 Modern UI

- Clean, minimalist interface with dark/light mode support
- Responsive design that works on desktop and mobile devices
- Sleek animations and transitions
- Custom-designed components using Radix UI and Tailwind CSS

### 📝 Note Management

- Create and edit notes in real-time
- Rich text formatting support
- Automatic saving
- Clean and intuitive note organization

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (Supabase)
- **Authentication**: Supabase Auth
- **AI Integration**: OpenAI API
- **State Management**: React Context
- **Package Manager**: pnpm

## Getting Started

### Local Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/AmmarMahmood7/Neural-Notes.git
   cd Neural-Notes
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory with the following variables:

   ```
   DATABASE_URL=your_postgresql_url
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   OPENAI_API_KEY=your_openai_api_key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Initialize the database**

   ```bash
   pnpm dlx prisma generate
   pnpm migrate
   ```

5. **Start the development server**

   ```bash
   pnpm dev
   ```

6. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

1. **Create a production build**

   ```bash
   pnpm build
   ```

2. **Start the production server**
   ```bash
   pnpm start
   ```

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `OPENAI_API_KEY`: Your OpenAI API key
- `NEXT_PUBLIC_BASE_URL`: The base URL of your application

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components by [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database hosted on [Supabase](https://supabase.com/)
- AI powered by [OpenAI](https://openai.com/)
