interface NavbarProps {
  createExistence: Function;
  createExists: Boolean;
}

const Navbar: React.FC<NavbarProps> = ({ createExistence, createExists }) => {
  return (
    <div className="relative py-2 px-4 flex items-center justify-between bg-gray-900 text-gray-100">
      <h1 className="text-2xl font-semibold">ForeverSave</h1>
      <div className="border-slate-700 hover:border-2 px-3 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {createExists ? (
          <p
            onClick={() => {
              createExistence(false);
            }}
            className="text-xl font-normal cursor-pointer"
          >
            See other Saves
          </p>
        ) : (
          <p
            onClick={() => {
              createExistence(true);
            }}
            className="text-xl font-normal cursor-pointer"
          >
            Create your own save
          </p>
        )}
      </div>
      <p className="text-xl font-normal">About</p>
    </div>
  );
};

export default Navbar;
