import { createFileRoute } from "@tanstack/react-router";
import AddTrip from "../pages/AddTrip";

export const Route = createFileRoute("/Trip")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      {" "}
      <AddTrip></AddTrip>
    </div>
  );
}
