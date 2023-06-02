import { useState } from 'react';

export function JoinText() {
  const [content, setContent] = useState("");

  const handleFileSelect = (event) => {
    const files = event.target.files;

    Promise.all(Array.from(files).map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsText(file);
      });
    })).then(results => {
      setContent(content + results.join('\n\n'));
    });
  };

  const handleDirectorySelect = (event) => {
    const dir = event.target.files[0];

    if (!dir.webkitRelativePath) {
      alert("This feature is not supported by your browser.");
      return;
    }

    const files = Array.from(event.target.files);
    const filePaths = files.map(file => file.webkitRelativePath);

    Promise.all(files.map(file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsText(file);
      });
    })).then(results => {
      const contents = results.map((content, index) => {
        const filePath = filePaths[index];
        const fileName = filePath.split("/").pop();
        return `--- ${fileName} ---\n\n${content}\n\n`;
      });
      setContent(content + contents.join(""));
    });
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form style={{ width: '50%' }}>
        <div>
          <label htmlFor="file-input">Select file(s):</label>
          <input id="file-input" type="file" multiple onChange={handleFileSelect} />
        </div>
        <div>
          <label htmlFor="directory-input">Select directory:</label>
          <input id="directory-input" type="file" webkitdirectory="" onChange={handleDirectorySelect} />
        </div>
        <div>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            style={{ width: '100%', height: '400px', margin: '20px auto', textAlign: 'left' }} />
        </div>
        <div>
          <button onClick={handleCopyToClipboard}>Copy to clipboard</button>
          <button onClick={() => setContent("")}>borrar</button>
        </div>
      </form>
    </div>
  );
}
