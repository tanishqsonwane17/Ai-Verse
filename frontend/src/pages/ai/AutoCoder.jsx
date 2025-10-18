import React, { useState } from "react";

const AutoCoder = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch("http://localhost:3000/api/ai/get-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderFileTree = (fileTree) => {
    return Object.entries(fileTree || {}).map(([fileName, fileData]) => (
      <div key={fileName} className="bg-gray-900 text-gray-100 rounded-lg p-3 mb-3">
        <h2 className="text-lg font-semibold mb-2">{fileName}</h2>
        <pre className="bg-gray-800 text-sm p-3 rounded-md overflow-x-auto">
          {fileData.file.contents}
        </pre>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-[#050928] text-white flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">🧠 ScriptMind - AI Code Generator</h1>

      <textarea
        className="w-full max-w-2xl bg-gray-800 rounded-lg p-4 text-white outline-none"
        rows="4"
        placeholder="Type something like 'Create an Express server'"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>

      <div className="w-full max-w-3xl mt-10">
        {response?.reply && (
          <>
            <h2 className="text-2xl font-semibold mb-4">✨ Generated Code Files:</h2>
            {renderFileTree(JSON.parse(response.reply).fileTree)}
          </>
        )}
      </div>
    </div>
  );
};

export default AutoCoder;
