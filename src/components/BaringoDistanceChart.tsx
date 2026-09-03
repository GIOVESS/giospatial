import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

/**
 * Only 3 real, dated data points exist in public reporting for this
 * specific metric (distance between the two lakes) — "historically"
 * (>20km, undated but referenced as the long-standing baseline),
 * 2020 (~7km, Prof. Simon Onywere via Daily Nation), and 2026 (<3km,
 * same source, current reporting). A smooth interpolated line between
 * these would imply a precision/granularity the public data doesn't
 * actually have — a bar chart of the 3 real snapshots is the honest
 * representation. See src/data/insights.ts sources list for citations.
 */
const DATA = [
  { period: "Historically", distance: 20, label: ">20 km" },
  { period: "2020", distance: 7, label: "~7 km" },
  { period: "2026", distance: 2.5, label: "<3 km" },
];

const BaringoDistanceChart = () => (
  <div className="rounded-xl border border-black/[0.08] p-6" style={{ background: "#f7f7f5" }}>
    <p className="font-bold text-foreground mb-1" style={{ fontSize: 14 }}>
      Distance Between Lake Bogoria and Lake Baringo
    </p>
    <p className="mb-5" style={{ color: "#5a5a5a", fontSize: 12.5 }}>
      The 3 data points below are the only dated figures in public reporting, not a smoothed trend line, since no continuous measurement series is publicly available.
    </p>
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.08)" vertical={false} />
        <XAxis dataKey="period" tick={{ fontSize: 12, fill: "#5a5a5a" }} axisLine={{ stroke: "rgba(0,0,0,0.15)" }} tickLine={false} />
        <YAxis
          tick={{ fontSize: 11, fill: "#5a5a5a" }}
          axisLine={false}
          tickLine={false}
          label={{ value: "Distance (km)", angle: -90, position: "insideLeft", fontSize: 11, fill: "#5a5a5a" }}
        />
        <Tooltip
          formatter={(_value, _name, item) => [item.payload.label, "Approx. distance"]}
          contentStyle={{ fontSize: 12.5, borderRadius: 6, border: "1px solid rgba(0,0,0,0.1)" }}
        />
        <Bar dataKey="distance" radius={[4, 4, 0, 0]}>
          {DATA.map((_, i) => (
            <Cell key={i} fill={i === DATA.length - 1 ? "#B85042" : "#265B01"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    <p className="mt-2" style={{ color: "#888", fontSize: 11 }}>
      Source: Prof. Simon Onywere, via Daily Nation reporting (see sources below)
    </p>
  </div>
);

export default BaringoDistanceChart;
