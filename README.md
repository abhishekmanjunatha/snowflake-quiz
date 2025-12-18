# SnowPro Core (COF-C02) Practice Quiz

An interactive, lightweight web application designed to help you prepare for the **Snowflake SnowPro Core (COF-C02)** certification. This app provides a focused environment to practice domain-specific questions and scenarios.

![SnowPro Quiz App](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Features

- **Two Study Modes**:
  - **🎓 Exam Mode**: Simulate the real exam environment. Domains are locked sequentially. You must score **80% or higher** to unlock the next domain.
  - **📖 Practice Mode**: Open access to all domains. Get immediate feedback on your answers with detailed explanations.
- **🏢 Scenario-Based Learning**: View real-world business scenarios for each domain to understand the context behind the questions.
- **📊 Progress Tracking**: Your progress (unlocked domains) is saved automatically using your browser's local storage. No login required.
- **📱 Fully Responsive**: Optimized for both desktop and mobile devices.
- **⚡ Fast & Lightweight**: Built with React and Vite for instant load times.

## 🛠️ Tech Stack

- **Frontend**: React (TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Automated via GitHub Actions)

## 🏃‍♂️ Running Locally

1.  **Clone the repository**
    ```bash
    git clone https://github.com/abhishekmanjunatha/snowflake-quiz.git
    cd snowflake-quiz
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Parse the Data**
    The app uses a Markdown file as the source of truth for questions. Run the parser to generate the JSON data:
    ```bash
    npm run parse-data
    ```

4.  **Start the development server**
    ```bash
    npm run dev
    ```

## 📝 Data Management

The quiz content is stored in `resource/SnowPro Core (COF-C02) Practice & Scenarios.md`.
To update questions or add new domains:
1.  Edit the Markdown file.
2.  Run `npm run parse-data` to update `src/data/quiz-data.json`.
3.  Commit and push your changes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
