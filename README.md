# 🔍 SyntaxTreeX - Smart Repository Analysis Tool

> Explore GitHub repositories smarter, not harder! Get instant code summaries and AI-ready folder structures.

![GitHub last commit](https://img.shields.io/github/last-commit/singhastra/SyntaxTreeX)

## 🚀 About The Project

Goal of SyntaxTreeX is to simplify how developers explore and understand GitHub repositories. Stop wasting time navigating through countless files - get instant, intelligent summaries and structural insights of any GitHub repository.

<!-- TODO: Add a project banner/screenshot here -->

### ✨ Key Features

- 🗂️ **Smart Folder Structure Analysis**: Generate clean, hierarchical views of repository structures
- 📝 **Automated Code Summaries**: Get instant summaries of files, classes, and functions
- 🤖 **AI-Ready Output**: Export folder structures in prompt-friendly formats
- 🔐 **Secure Authentication**: GitHub integration with NextAuth
- 💾 **History Tracking**: Save and revisit your previous analyses

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Code Analysis**: Abstract Syntax Tree (AST) parsing
- **Styling**: Tailwind CSS

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL
- GitHub Account (for API access)

## 💡 Usage

<!-- TODO: Add a GIF or screenshot demonstrating the workflow here -->

1. Log in with your GitHub account / Google Account
2. Paste a GitHub repository URL
3. Get instant analysis including:
   - 📁 Complete folder structure
   - 📝 File summaries
   - 🔍 Code component analysis
   - 📊 Repository statistics

### Example Output

```markdown
📁 project-root
└── 📁 src
├── 📄 App.tsx
│ └── "Main application component with routing setup"
└── 📁 components
├── 📄 Header.tsx
│ └── "Responsive navigation header with auth integration"
└── 📄 Footer.tsx
└── "Footer component with social links"
```

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

### 🌟 Show your support

Give a ⭐️ if this project helped you!

<!--TODO: Add a fun meme or gif related to code exploration here -->
