function ContainerSpacing() {
  return (
    <div>
      <h1>Margin</h1>
      <div className="m-4 bg-red-100">Margin All</div>
      <div className="mx-10 bg-red-200">Margin X axies</div>
      <div className="my-4 bg-red-300">Margin Y axies</div>
      <div className="mt-4 bg-red-400">Margin Top</div>
      <div className="mr-4 bg-red-500">Margin Right</div>
      <div className="ml-4 bg-red-600">Margin Left</div>
      <div className="mb-4 bg-red-700">Margin Bottom</div>
      <div className="m-[20px] bg-red-800">Margin Arbitrary</div>
      <br />
      <hr />
      <br />
      <h2>Padding</h2>
      <div className="bg-blue-100 p-4">Padding All</div>
      <div className="bg-blue-200 px-4">Padding X axies</div>
      <div className="bg-blue-300 py-4">Padding Y axies</div>
      <div className="bg-blue-400 pt-4">Padding Top</div>
      <div className="bg-blue-500 pl-4">Padding Left</div>
      <div className="bg-blue-600 pr-4">Padding Right</div>
      <div className="bg-blue-700 pb-4">Padding Bottom</div>
      <div className="bg-blue-800 p-[10px]">Padding Arbitrary</div>
      <br />
      <hr />
      <br />
      <h2>Between Space</h2>
      <div className="flex space-x-1">
        <div className="bg-slate-400 p-4">1</div>
        <div className="bg-slate-500 p-4">2</div>
        <div className="bg-slate-600 p-4">3</div>
        <div className="bg-slate-700 p-4">4</div>
      </div>
    </div>
  );
}

export default ContainerSpacing;
