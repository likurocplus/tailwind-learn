function Color() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Text Color</h1>
      <p className="text-red-50">Text Color</p>
      <p className="text-red-100">Text Color</p>
      <p className="text-red-200">Text Color</p>
      <p className="text-red-300">Text Color</p>
      <p className="text-red-400">Text Color</p>
      <p className="text-red-500">Text Color</p>
      <p className="text-red-600">Text Color</p>
      <p className="text-red-700">Text Color</p>
      <p className="text-red-800">Text Color</p>
      <p className="text-red-900">Text Color</p>
      <br />
      <hr />
      <br />
      <h1>Background Color</h1>
      <p className="bg-blue-50">Background Color</p>
      <p className="bg-blue-100">Background Color</p>
      <p className="bg-blue-200">Background Color</p>
      <p className="bg-blue-300">Background Color</p>
      <p className="bg-blue-400">Background Color</p>
      <p className="bg-blue-500">Background Color</p>
      <p className="bg-blue-600">Background Color</p>
      <p className="bg-blue-700">Background Color</p>
      <p className="bg-blue-800">Background Color</p>
      <p className="bg-blue-900">Background Color</p>
      <br />
      <hr />
      <br />
      <h1>Text Decoration Color</h1>
      <p className="underline">Text Decoration</p>
      <p className="overline">Text Decoration</p>
      <p className="line-through">Text Decoration</p>
      <p className="no-underline">Text Decoration</p>
      <p className="underline decoration-red-500">Text Decoration</p>
      <p className="line-through decoration-red-500">Text Decoration</p>
      <br />
      <hr />
      <br />
      <h1>Accents Color</h1>
      <input type="checkbox" className="accent-red-500" />
      <input type="checkbox" className="accent-violet-500" />
      <input type="checkbox" className="accent-purple-500" />
      <input type="checkbox" className="accent-yellow-500" />
    </div>
  );
}

export default Color;
