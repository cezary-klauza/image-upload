const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-6 max-w-2xl w-full py-12 bg-card rounded-lg shadow-lg">
      <p>
        <strong>Uploading</strong>, please wait...
      </p>
      <div className="relative w-96 h-2 bg-border rounded-full overflow-hidden">
        <div className="absolute w-20 h-2 bg-blue rounded-full top-0 animate-loader" />
      </div>
    </div>
  );
};

export default Loading;
