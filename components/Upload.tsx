import Image from "next/image";

const Upload = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <Image src="/exit.svg" alt="upload image" width={48} height={48} />
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-semibold">
          Drag & drop a file or <span className="text-blue">browse files</span>
        </h3>
        <p className="text-sm">JPG, PNG or GIF - Max file size 2MB</p>
      </div>
    </div>
  );
};

export default Upload;
