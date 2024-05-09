import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

const Chart = () => {
  const data = [
    { name: "", offline: 3, online: 8 },
    { name: "Mon", offline: 5, online: 10 },
    { name: "Tue", offline: 5, online: 10 },
    { name: "Wed", offline: 4, online: 12 },
    { name: "Thurs", offline: 6, online: 13 },
    { name: "Fri", offline: 5, online: 9 },
    { name: "Sat", offline: 4, online: 7 },
    { name: "Sun", offline: 3, online: 6 },
  ];

  return (
    <div className="bg-white shadow rounded-lg py-4 px-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold ">Working Hours</h2>
        <span className="flex gap-2">
          <span className="flex items-center gap-1">
            {" "}
            <CircleRoundedIcon sx={{fontSize: 12}}  className="text-lime-600"/> <p>Online</p>
          </span>
          <span className="flex gap-1 items-center submitted">
            {" "}
            <CircleRoundedIcon sx={{fontSize: 12}} className="text-red-400" /> <p>Offline</p>
          </span>
        </span>
      </div>
      <LineChart
        width={450}
        height={300}
        data={data}
        margin={{ top: 5, bottom: 5 }}
      >
        <XAxis dataKey="name" tickLine={false} />
        <YAxis tickLine={false} />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="online"
          stroke="#65a30d"
          strokeWidth={4}
          dot={false}
          activeDot={false}
        />
        <Line
          type="monotone"
          dataKey="offline"
          stroke="#f87171"
          strokeWidth={4}
          dot={false}
          activeDot={false}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
