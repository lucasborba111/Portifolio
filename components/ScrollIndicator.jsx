export default function ScrollIndicator() {
    return (
        <div className="m-auto w-[35px] h-[64px] rounded-3xl border-4 border-gray-600 flex justify-center items-start p-2">
            <div className="w-3 h-3 rounded-full bg-gray-500 animate-scrollDot" />
        </div>
    );
};