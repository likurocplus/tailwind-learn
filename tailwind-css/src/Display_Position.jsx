function Display_Position() {
  return (
    <div>
      <h1>Position</h1>
      <div className="relative mx-5 h-[300px] w-[600px] bg-lime-500">
        <div className="absolute left-0 top-0 bg-red-500 p-10 text-white">
          Absolute
        </div>
      </div>
      <div className="relative mx-5 h-[300px] w-[600px] bg-lime-600">
        <div className="absolute right-0 top-0 bg-red-500 p-10 text-white">
          Absolute
        </div>
      </div>
      <div className="relative mx-5 h-[300px] w-[600px] bg-lime-700">
        <div className="absolute bottom-0 left-0 bg-red-500 p-10">Absolute</div>
      </div>
      <div className="relative mx-5 h-[300px] w-[600px] bg-lime-700">
        <div className="absolute bottom-16 left-16 bg-red-500 p-10">
          Absolute
        </div>
      </div>
      <h1>Display</h1>
      <div className="bg-violet-500 p-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. <span className="block">Luong Vo Khoi Quoc</span> Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley
      </div>
      <div className="bg-violet-600 p-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. <span className="inline">Luong Vo Khoi Quoc</span> Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley
      </div>
      <div className="bg-violet-700 p-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <span className="inline-block w-[400px]">Luong Vo Khoi Quoc</span> Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley
      </div>
    </div>
  );
}

export default Display_Position;
