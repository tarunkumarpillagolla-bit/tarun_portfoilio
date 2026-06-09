import { resume } from "@/data/portfolio";
import { getAssetPath } from "@/lib/basePath";

export async function downloadResume(): Promise<void> {
  const resumeUrl = `${getAssetPath(resume.file)}?v=${resume.version}`;
  const response = await fetch(resumeUrl, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("Resume file not found. Please add your PDF to the public folder.");
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = resume.downloadName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
