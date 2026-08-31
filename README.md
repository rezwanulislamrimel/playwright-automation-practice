<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,14,30&height=200&section=header&text=Playwright%20Automation&fontSize=42&fontColor=ffffff&fontAlignY=38&desc=JavaScript%20%7C%20UI%20%26%20API%20Testing%20%7C%20POM%20%7C%20GitHub%20Actions&descAlignY=58&descSize=16" />

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&pause=1000&color=2EAD33&center=true&vCenter=true&width=600&lines=Playwright+Automation+with+JavaScript;UI+Testing+%7C+API+Testing+%7C+POM;GitHub+Actions+CI%2FCD+Integration;End-to-End+Test+Automation" alt="Typing SVG" />

<br/>

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

<br/>

![Status](https://img.shields.io/badge/Status-In%20Progress-orange?style=flat-square)
![Topics](https://img.shields.io/badge/Topics-6%20Modules-2EAD33?style=flat-square)
![Testing](https://img.shields.io/badge/Testing-UI%20%26%20API-blueviolet?style=flat-square)
![Pattern](https://img.shields.io/badge/Pattern-Page%20Object%20Model-blue?style=flat-square)

</div>

---

## 📌 Overview

A hands-on **Playwright automation project** built with **JavaScript** — covering UI automation, API testing, Page Object Model (POM), test reporting, and real-world testing practices.

This repository documents a practical, step-by-step journey through Playwright concepts and automation techniques — from fundamentals to advanced scenarios — continuously evolving as new skills are learned and implemented.

---

## 🎯 Learning Goal

```
Playwright Basics  ──▶  UI Automation  ──▶  POM Architecture
                                                    │
CI/CD Integration  ◀──  Reporting & Debug  ◀──  Advanced Testing
```

Build practical, production-ready Playwright automation skills through hands-on implementation of real-world testing scenarios.

---

## 🛠️ Tech Stack

<div align="center">

| Tool | Purpose |
|------|---------|
| ![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white) | Browser automation & test execution |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Test scripting language |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | Runtime environment |
| ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) | CI/CD automated test execution |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | Version control |

</div>

---

## 📂 Project Structure

```text
playwright-automation/
│
├── 📁 tests/
│   ├── 📁 ui/                     # UI automation test specs
│   └── 📁 api/                    # API testing specs
│
├── 📁 pages/                      # Page Object Model classes
│
├── 📁 test-data/                  # Test data files
│
├── 📁 utils/                      # Reusable helper functions
│
├── 📄 playwright.config.js        # Playwright configuration
├── 📄 package.json
└── 📄 README.md
```

---

## 🧪 Topics Covered

<details>
<summary><b>🔹 Module 1 — Playwright Fundamentals</b></summary>

<br/>

- [ ] Playwright installation and setup
- [ ] Browser and page handling
- [ ] Locators
- [ ] CSS selectors and XPath
- [ ] Playwright recommended locators
- [ ] Assertions
- [ ] Auto-waiting
- [ ] Navigation handling

</details>

<details>
<summary><b>🔹 Module 2 — UI Automation</b></summary>

<br/>

- [ ] Login and Logout
- [ ] Form automation
- [ ] CRUD operations
- [ ] Buttons and links
- [ ] Dropdown handling
- [ ] Checkbox and radio button handling
- [ ] Date picker
- [ ] File upload and download
- [ ] Alerts and popups
- [ ] Multiple tabs and windows

</details>

<details>
<summary><b>🔹 Module 3 — Test Structure & Organization</b></summary>

<br/>

- [ ] Page Object Model (POM)
- [ ] Reusable functions
- [ ] Test data management
- [ ] Fixtures
- [ ] Hooks
- [ ] Configuration management
- [ ] Environment variables

</details>

<details>
<summary><b>🔹 Module 4 — Advanced Testing</b></summary>

<br/>

- [ ] API testing with Playwright
- [ ] Authentication and session handling
- [ ] Network interception
- [ ] Request and response validation
- [ ] Data-driven testing
- [ ] Parallel test execution
- [ ] Retry mechanism

</details>

<details>
<summary><b>🔹 Module 5 — Debugging & Reporting</b></summary>

<br/>

- [ ] Playwright HTML Report
- [ ] Screenshots on failure
- [ ] Video recording
- [ ] Trace Viewer
- [ ] Playwright Inspector
- [ ] Debugging failed tests

</details>

<details>
<summary><b>🔹 Module 6 — CI/CD</b></summary>

<br/>

- [ ] Git and GitHub workflow
- [ ] GitHub Actions pipeline
- [ ] Automated test execution on push/PR

</details>

---

## ⚙️ GitHub Actions — CI Pipeline

Automated test execution on every `push` or `pull_request` to the `main` branch.

```yaml
name: Playwright Tests

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  playwright-tests:
    name: Run Playwright Tests
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install Dependencies
        run: npm install

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run Tests
        run: npx playwright test

      - name: Upload HTML Report
        uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

---

## 🚀 Getting Started

```bash
# Step 1 — Clone the repository
git clone https://github.com/rezwanulislamrimel/playwright-automation.git

# Step 2 — Navigate to the project
cd playwright-automation

# Step 3 — Install dependencies
npm install

# Step 4 — Install Playwright browsers
npx playwright install
```

---

## ▶️ Run Tests

```bash
# Run all tests
npx playwright test

# Run in headed mode (see browser)
npx playwright test --headed

# Run a specific test file
npx playwright test tests/ui/login.spec.js

# Run API tests only
npx playwright test tests/api/

# Run tests in parallel
npx playwright test --workers=4

# Run with a specific browser
npx playwright test --project=chromium
```

---

## 📊 Test Reports

```bash
# View HTML report after test run
npx playwright show-report

# View Trace Viewer (for debugging)
npx playwright show-trace trace.zip
```

> HTML Report includes: ✅ Pass/Fail breakdown · 🖼️ Screenshots on failure · 🎥 Video recording · 🔍 Trace Viewer link

---

## 🏆 Skills Demonstrated

<div align="center">

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square)
![UI Automation](https://img.shields.io/badge/UI%20Automation-1d7f60?style=flat-square)
![API Testing](https://img.shields.io/badge/API%20Testing-FF6C37?style=flat-square)
![Page Object Model](https://img.shields.io/badge/Page%20Object%20Model-3178C6?style=flat-square)
![Data-Driven Testing](https://img.shields.io/badge/Data--Driven%20Testing-7c3aed?style=flat-square)
![Network Interception](https://img.shields.io/badge/Network%20Interception-0891b2?style=flat-square)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square)
![Parallel Execution](https://img.shields.io/badge/Parallel%20Execution-f97316?style=flat-square)
![HTML Reporting](https://img.shields.io/badge/HTML%20Reporting-e11d48?style=flat-square)
![Trace Viewer](https://img.shields.io/badge/Trace%20Viewer-6b7280?style=flat-square)

</div>

---

## 👨‍💻 Author

<div align="center">

### Rezwanul Islam (Rimel)
**SQA Engineer**

*UI Automation · API Testing · Performance Testing · CI/CD*

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rezwanulislamrimel)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Rezwanulrimel)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rezwanul.rimel97@gmail.com)

</div>

---

<div align="center">

⭐ **Feel free to explore the repository and follow the learning journey!** ⭐

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,14,30&height=100&section=footer" />

</div>
