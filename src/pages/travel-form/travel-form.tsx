import { useState } from "react";

async function getVehicleTypes() {
  return new Promise((resolve, reject) => {
    resolve([
      { id: "1", label: "Car" },
      { id: "2", label: "Bus" },
      { id: "3", label: "Plane" },
    ]);
  });
}

export default function TravelForm() {
  interface DestinationListItem {
    id: string | number;
    destination: string;
  }

  const [startingPoint, setStartingPoint] = useState<string>("");
  const [destinationList, setDestinationList] = useState<DestinationListItem[]>(
    [
      {
        id: String(Math.random()),
        destination: "",
      },
    ],
  );

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form className="w-[450px] space-y-6 rounded-lg border border-zinc-950 px-6 py-6 shadow-sm shadow-black">
        <h1 className="text-center text-2xl font-bold leading-tight tracking-tighter text-sky-600">
          Travel Destination Expense
        </h1>
        <div className="flex flex-col space-y-3 text-sm">
          <label htmlFor="starting_point">Starting Point</label>
          <input
            type="text"
            name="starting_point"
            id="starting_point"
            placeholder="eg. Tokyo"
            className="rounded-md border border-zinc-700 bg-transparent px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-0"
          />
        </div>
        <div className="flex flex-col space-y-3 text-sm">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            name="destination"
            id="destination"
            placeholder="eg. Berlin"
            className="rounded-md border border-zinc-700 bg-transparent px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-0"
          />
        </div>
        <button className="rounded-md border-2 border-zinc-700 px-3 py-1.5 text-xs font-medium transition-all hover:border-sky-600">
          + Add new Destination
        </button>
        <div className="flex flex-col space-y-3 text-sm">
          <label htmlFor="vehicle_type">Vehicle Type</label>
          <select
            name="vehicle_type"
            id="vehicle_type"
            className="w-full rounded-md border border-zinc-700 bg-transparent px-3 py-2"
          >
            <option value="bus">Bus</option>
            <option value="car" selected>
              Car
            </option>
            <option value="plane">Plane</option>
          </select>
        </div>
        <div className="flex flex-col space-y-3 text-sm">
          <label htmlFor="expense_name">Expense Name</label>
          <input
            type="text"
            name="expense_name"
            id="expense_name"
            placeholder="eg. Tokyo - Berlin"
            className="rounded-md border border-zinc-700 bg-transparent px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-0"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="select-none text-sm">
            Total Expense: <span className="font-semibold">$4365.75</span>
          </div>
          <button className="rounded-md bg-sky-800 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-opacity-90">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
