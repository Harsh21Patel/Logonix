# AI Logo Generator

[](https://github.com/Harsh21Patel/ai-logo-generator)
[](https://github.com/Harsh21Patel/ai-logo-generator)
[](https://yourdeploymenturl.com)

A full-stack AI-powered logo generator built with Next.js and React. This application integrates the Google Gemini API and Hugging Face models to generate custom logos based on user prompts. It's designed with a modular architecture to ensure smooth interaction between the frontend, backend, and external AI services.

## 📸 Screenshot

## ✨ Key Features

  - **AI-Powered Generation**: Utilizes Google Gemini and Hugging Face models to create unique logos from text descriptions.
  - **Custom Prompts**: Users can input detailed text prompts to guide the logo design process.
  - **Modern Tech Stack**: Built with Next.js, React, and TypeScript for a robust, type-safe, and scalable application.
  - **Responsive Design**: A clean, intuitive, and mobile-friendly user interface crafted with Tailwind CSS.
  - **Modular Architecture**: Clean separation of concerns between the frontend client, backend API routes, and external AI services.

## 🛠️ Tech Stack

  - **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
  - **Backend**: [Node.js](https://nodejs.org/) (via Next.js API Routes)
  - **AI & Machine Learning**: [Google Gemini API](https://ai.google.dev/), [Hugging Face](https://huggingface.co/)
  - **Deployment**: [Vercel](https://vercel.com/) (Recommended)

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

  - [Node.js](https://nodejs.org/en/) (v18 or later)
  - [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Harsh21Patel/Logonix.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Logonix
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

4.  **Set up environment variables:**
    Create a new file named `.env.local` in the root of your project and add the necessary API keys. You can duplicate the example file:

    ```bash
    cp .env.example .env.local
    ```

    Then, open `.env.local` and add your secret keys.

### 🔑 Environment Variables

You will need to provide the following environment variables in your `.env.local` file:

```env
# Google Gemini API Key
GOOGLE_GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"

# Hugging Face API Token (if required by the model you are using)
HUGGINGFACE_API_TOKEN="YOUR_HUGGINGFACE_TOKEN_HERE"
```

### Running the Development Server

Once the installation is complete and your environment variables are set, you can start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the application running.

## ☁️ Deployment

This application is optimized for deployment on [Vercel](https://vercel.com/), the creators of Next.js.

1.  Push your code to a GitHub repository.
2.  Sign up or log in to [Vercel](https://vercel.com/) with your GitHub account.
3.  Create a "New Project" and import your repository.
4.  Add your environment variables in the Vercel project settings.
5.  Click "Deploy". Vercel will automatically build and deploy your application.

## 🤝 Contributing

Contributions are welcome\! If you have any ideas, suggestions, or bug reports, please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

-----
