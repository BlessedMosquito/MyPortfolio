import ConstructionContent from "./construction-content";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function ConstructionPage() {
  await delay(1000);
  return <ConstructionContent />;
}
