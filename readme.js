import fs from "fs";
import path from "path";

const packagePath = path.resolve("package.json");
const readmePath = path.resolve("README.md");

const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));

const readmeContent = `${packageJson.description}

\`\`\`bash
npm install ${packageJson.name}
\`\`\`

by ${packageJson.author}
`;

fs.writeFileSync(readmePath, readmeContent, "utf8");