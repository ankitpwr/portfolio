export default function Navbar() {
  return (
    <div
      className="  md:py-4 py-2 md:px-6 px-4   flex justify-between items-center font-montserrat
bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-[#292929] text-white  "
    >
      <h1 className=" text-sm  font-semibold">~/ankit_panwar</h1>
      <div className="flex gap-6">
        <h1>Home</h1>
        <h1>About</h1>
      </div>
    </div>
  );
}
