import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const homeInputDirs = [
  path.join(projectRoot, "tmp", "image", "room"),
  path.join(projectRoot, "tmp", "image")
];

const page1InputDir = path.join(projectRoot, "tmp", "image", "page1");

const iconInput = path.join(projectRoot, "tmp", "image", "icon", "icon.png");
const faviconOutput = path.join(projectRoot, "public", "favicon.png");
const appleTouchOutput = path.join(projectRoot, "public", "apple-touch-icon.png");
const siteIconOutput = path.join(projectRoot, "public", "images", "site-icon.webp");
const homeOutputDir = path.join(projectRoot, "public", "images", "home");
const page1OutputDir = path.join(projectRoot, "public", "images", "page1");

const ensureDir = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

const listPngFiles = async (dirs) => {
  const results = [];

  for (const dir of dirs) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      entries
        .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".png"))
        .forEach((entry) => results.push({ dir, name: entry.name }));
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
  }

  return results;
};

const convertImage = async ({ dir, name }, outputDir) => {
  const inputPath = path.join(dir, name);
  const outputName = name.replace(/\.png$/i, ".webp");
  const outputPath = path.join(outputDir, outputName);

  await sharp(inputPath)
    .webp({ quality: 82 })
    .toFile(outputPath);
};

const run = async () => {
  const homeFiles = await listPngFiles(homeInputDirs);
  const page1Files = await listPngFiles([page1InputDir]);

  await ensureDir(homeOutputDir);
  await ensureDir(page1OutputDir);

  if (homeFiles.length > 0) {
    await Promise.all(homeFiles.map((file) => convertImage(file, homeOutputDir)));
  }

  if (page1Files.length > 0) {
    await Promise.all(page1Files.map((file) => convertImage(file, page1OutputDir)));
  }

  try {
    await fs.access(iconInput);
    await sharp(iconInput)
      .resize(32, 32, { fit: "cover" })
      .png()
      .toFile(faviconOutput);
    await sharp(iconInput)
      .resize(180, 180, { fit: "cover" })
      .png()
      .toFile(appleTouchOutput);
    await sharp(iconInput)
      .resize(128, 128, { fit: "cover" })
      .webp({ quality: 82 })
      .toFile(siteIconOutput);
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  if (homeFiles.length === 0 && page1Files.length === 0) {
    console.log("No PNG images found. Icon conversion handled if present.");
  } else {
    console.log(
      `Converted ${homeFiles.length} home image(s) and ${page1Files.length} page1 image(s) to WebP.`
    );
  }
};

run().catch((error) => {
  console.error("Image conversion failed:", error);
  process.exit(1);
});
