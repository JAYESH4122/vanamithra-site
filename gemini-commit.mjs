#!/usr/bin/env node
import fs from "fs";
import { execSync } from "child_process";
import { GoogleGenerativeAI } from "@google/generative-ai";

// 1️⃣ Load your API key from env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// 2️⃣ Get git diff
const diff = execSync("git diff --cached", { encoding: "utf8" });
if (!diff.trim()) {
  console.log("⚠️  No staged changes found. Stage your files first.");
  process.exit(0);
}

// 3️⃣ Ask Gemini for a commit message
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const prompt = `
Generate a concise and professional Git commit message for the following changes:
${diff}

Use the conventional commit format (e.g., feat:, fix:, refactor:, chore:, docs:).
`;

const result = await model.generateContent(prompt);
const message = result.response.text().trim();

// 4️⃣ Commit
execSync(`git commit -m "${message}"`);
console.log(`✅ Commit created: ${message}`);
