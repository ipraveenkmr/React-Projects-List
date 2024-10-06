import MixedChart from "./mixedChart/MixedChart";
import LineColumnChart from "./lineColumnChart/LineColumnChart";

export default function Charts() {
    return (
        <div className="mt-10 px-20 flex justify-center">
            <div>
                <div className="max-h-[40vh] max-w-[80vw] min-w-[80vw] shadow-lg border border-slate-400 rounded-lg p-4">
                    <MixedChart />
                </div>
                <div className="max-h-[40vh] max-w-[80vw] min-w-[80vw] mt-16 shadow-lg border border-slate-400 rounded-lg p-4">
                    <LineColumnChart />
                </div>
            </div>
        </div>
    )
}
