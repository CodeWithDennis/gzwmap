import LZMarker from "@/components/map/lz-marker";
import LocationMarker from "@/components/map/location-marker";
import FactionMarker from "@/components/map/faction-marker";
import TaskMarker from "@/components/map/task-marker";
import POIMarker from "@/components/map/poi-marker";
import { Factions } from "@/lib/data/factions";
import { LZs } from "@/lib/data/lzs";
import { Locations } from "@/lib/data/locations";
import { POIs } from "@/lib/data/pois";
import { Tasks } from "@/lib/data/tasks";
import { useMap } from "react-leaflet";

export default function MapMarkers() {
  const map = useMap();
  return (
    <>
      {LZs.map((lz, index) => (
        <LZMarker
          key={index}
          map={map}
          lz={lz}
        />
      ))}
      {Locations.map((location, index) => (
        <LocationMarker
          key={index}
          map={map}
          location={location}
        />
      ))}
      {Factions.map((faction, index) => (
        <FactionMarker
          key={index}
          map={map}
          faction={faction}
        />
      ))}
      {Tasks.map((task) => (
        task.objectives.map((objective, index) => (
          <TaskMarker
            key={index}
            map={map}
            task={task}
            objective={objective}
          />
        ))
      ))}
      {POIs.map((poi, index) => (
        <POIMarker
          key={index}
          map={map}
          poi={poi}
        />
      ))}
    </>
  )
}