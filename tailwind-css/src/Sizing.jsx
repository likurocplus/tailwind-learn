function Sizing() {
  return (
    <div>
      <h1>Width</h1>
      <h1>Width</h1>
      <div className="p-20">
        <div className="bg-teal-300 p-5">
          <div className="h-48 w-0 bg-red-500">0</div>
          <div className="w-1 bg-red-500">1</div>
          <div className="w-1.5 bg-red-500">1.5</div>
          <div className="w-2 bg-red-500">1</div>
          <div className="w-2.5 bg-red-500">1</div>
          <div className="w-3 bg-red-500">1</div>
          <div className="w-4 bg-red-500">1</div>
          <div className="w-4 bg-red-500">1</div>
          <div className="w-5 bg-red-500">1</div>
          <div className="w-6 bg-red-500">1</div>
          <div className="w-7 bg-red-500">1</div>
          <div className="w-8 bg-red-500">1</div>
          <div className="w-9 bg-red-500">1</div>
          <div className="w-10 bg-red-500">1</div>
          <div className="w-11 bg-red-500">1</div>
          <div className="w-12 bg-red-500">1</div>
          <div className="w-14 bg-red-500">1</div>
        </div>
        <h1>Percentages</h1>
        <div className="mt-5 w-auto bg-lime-500 p-5">
          <div className="w-1/2 bg-red-600 p-2"></div>
        </div>
        <div className="mt-5 w-auto bg-lime-500 p-5">
          <div className="w-1/3 bg-red-600 p-2"></div>
        </div>
        <div className="mt-5 w-auto bg-lime-500 p-5">
          <div className="w-1/6 bg-red-600 p-2"></div>
        </div>
        <div className="mt-5 w-auto bg-lime-500 p-5">
          <div className="w-2/3 bg-red-600 p-2"></div>
        </div>
        <h1>Max Width</h1>
        <div className="bg-cyan-600 p-4">
          <p className="max-w-[600px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sizing;
