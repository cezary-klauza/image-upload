import { DownloadButton, ShareButton } from "@/components/Buttons";
import { redirect } from "next/navigation";

const HOST = "https://utfs.io/f/";

async function isImageUrl(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    if (!response.ok) {
      console.error(`HTTP Error: ${response.status}`);
      return false;
    }

    const contentType = response.headers.get("Content-Type");
    return contentType?.startsWith("image/") || false;
  } catch (error) {
    console.error("Error fetching URL:", error);
    return false;
  }
}

const page = async ({ params }: { params: Promise<{ key: string }> }) => {
  const { key } = await params;

  if ((await isImageUrl(HOST + key)) === false) redirect("/");

  return (
    <>
      <div className="bg-card rounded-lg shadow-lg max-w-2xl w-full p-4">
        <img src={`${HOST}${key}`} alt="image" className="w-full" />
      </div>
      <div className="flex gap-4 mt-8">
        <ShareButton key={key} />
        <DownloadButton link={`${HOST}${key}`} key={key} />
      </div>
    </>
  );
};

export default page;
