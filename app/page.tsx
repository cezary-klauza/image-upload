"use client";

import Loading from "@/components/Loading";
import Upload from "@/components/Upload";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Dropzone, { FileRejection } from "react-dropzone";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: async ([data]) => {
      const key = data.key;

      router.push(`/${key}`);
    },
  });

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;

    setError(`${file.file.type} is not supported`);
  };

  const onDropAccepted = (acceptedFiles: File[]) => {
    setIsLoading(true);
    setError("");

    startUpload(acceptedFiles);
  };

  return (
    <>
      {!isLoading ? (
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpg": [".jpg"],
            "image/jpeg": [".jpeg"],
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="bg-card rounded-lg shadow-lg max-w-2xl w-full p-4"
              {...getRootProps()}
            >
              <div className="w-full py-32 border-dashed border-2 border-border rounded-lg">
                <input {...getInputProps()} />
                <Upload />
                {error !== "" && (
                  <p className="text-red-500 w-fit mx-auto mt-4 text-sm">
                    {error}
                  </p>
                )}
              </div>
            </div>
          )}
        </Dropzone>
      ) : (
        <Loading />
      )}
    </>
  );
}
