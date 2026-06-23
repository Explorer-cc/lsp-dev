#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const defaultSkillDir = join(rootDir, "skills", "lsp-dev");

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const skillDir = process.argv[2] ? resolve(process.argv[2]) : defaultSkillDir;
    validateSkill(skillDir);
    console.log(`OK: ${skillDir}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export function validateSkill(skillDir = defaultSkillDir) {
  const skillMd = join(skillDir, "SKILL.md");
  assertFile(skillMd);

  const content = readFileSync(skillMd, "utf8");
  const frontmatter = parseFrontmatter(content, skillMd);
  assertEqual(frontmatter.name, "lsp-dev", "SKILL.md name must be lsp-dev.");
  assertPresent(frontmatter.description, "SKILL.md description is required.");

  const referenceMatches = [...content.matchAll(/`(references\/[^`]+\.md)`/g)];
  for (const match of referenceMatches) {
    assertFile(join(skillDir, match[1]));
  }

  const referencesDir = join(skillDir, "references");
  assertDirectory(referencesDir);

  const referenceEntries = readdirSync(referencesDir, { withFileTypes: true });
  const nestedDirectories = referenceEntries.filter((entry) => entry.isDirectory());
  if (nestedDirectories.length > 0) {
    throw new Error(`Unexpected nested directory in references/: ${nestedDirectories.map((entry) => entry.name).join(", ")}`);
  }

  const referenceFiles = referenceEntries.filter((entry) => entry.isFile() && entry.name.endsWith(".md"));
  if (referenceFiles.length === 0) {
    throw new Error("Expected at least one references/*.md file.");
  }

  const agentsFile = join(skillDir, "agents", "openai.yaml");
  assertFile(agentsFile);
}

function parseFrontmatter(content, filePath) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) {
    throw new Error(`${filePath} must start with YAML frontmatter.`);
  }

  const result = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (field) {
      result[field[1]] = field[2].trim();
    }
  }

  return result;
}

function assertFile(filePath) {
  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    throw new Error(`Missing required file: ${filePath}`);
  }
}

function assertDirectory(filePath) {
  if (!existsSync(filePath) || !statSync(filePath).isDirectory()) {
    throw new Error(`Missing required directory: ${filePath}`);
  }
}

function assertPresent(value, message) {
  if (!value) {
    throw new Error(message);
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message} Got "${actual}", expected "${expected}".`);
  }
}
