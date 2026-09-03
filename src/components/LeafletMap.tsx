import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Leaflet's default marker icon references image paths that break under
// Vite's bundling (the paths get resolved to fingerprinted URLs, not the
// relative paths Leaflet's CSS expects) — this is the standard fix, not
// optional boilerplate.
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Real coordinates for Uthiru, Westlands, Nairobi — confirmed against
// Wikipedia (1°16'27.99"S 36°42'10.26"E = -1.2744, 36.7029), not
// estimated. Precise to the neighbourhood, not the exact building, since
// the registered address doesn't include a plot number.
const OFFICE_COORDS: [number, number] = [-1.2744, 36.7029];

/**
 * Real interactive Leaflet map, OpenStreetMap tiles — no API key required,
 * genuinely pannable/zoomable, not a static embed. Replaces the previous
 * Google Maps iframe on the Contact section.
 */
const LeafletMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: OFFICE_COORDS,
      zoom: 14,
      scrollWheelZoom: false, // don't hijack page scroll inside an embedded map
    });
    mapInstanceRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    L.marker(OFFICE_COORDS)
      .addTo(map)
      .bindPopup("<strong>GIOSPATIAL</strong><br />Naivasha Road, Uthiru, Westlands, Nairobi");

    // Re-enable scroll-zoom only once the visitor has clicked into the map,
    // so scrolling the page past it doesn't accidentally zoom the map.
    map.on("click", () => map.scrollWheelZoom.enable());

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className="rounded-lg overflow-hidden border border-black/[0.08]"
      style={{ height: 220 }}
      role="application"
      aria-label="Map showing GIOSPATIAL's office location in Uthiru, Westlands, Nairobi"
    />
  );
};

export default LeafletMap;
