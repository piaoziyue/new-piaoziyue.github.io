import type { Config } from "tailwindcss";
import express, { Request, Response } from 'express';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;

const app = express();

// Use express.static to serve files from the "assets" directory
app.use('/assets', express.static('assets'));

// Example route for the homepage
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my website!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
