import L from "leaflet";
import { Marker } from "react-leaflet";
import { Inter } from "next/font/google";
import { task, objective } from "@/lib/types";

const inter = Inter({ subsets: ["latin"] });

export default function TaskMarker({ task, objective }: { task: task, objective: objective }) {
  return (
    <Marker
      riseOnHover
      position={objective.position}
      icon={L.divIcon({
        className: 'marker',
        html: `<div class='task-marker-pin'><img class='task-marker-icon' src='task.png'></img><span class='task-marker-text ${inter.className}'>${task.name}</span></div>`,
        iconSize: [100, 30],
        iconAnchor: [50, 5]
      })}
    >
    </Marker>
  )
}