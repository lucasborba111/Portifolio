export default function SkillCard({index, src, skillName, years, style}) {
    return (
      <div className="skill-card bg-white rounded-xl shadow-md p-5 w-35 h-auto md:w-40 flex flex-col items-center relative" style={style}>
        <img
          src={src}
          alt={skillName}
          className="w-[50px] h-[50px] md:h-[60px] md:w-[60px] absolute -top-7 p-1"
        />
        <div className="mt-0 md:mt-4 text-center mx-auto">
          <h3 className="text-gray-800 font-semibold md:text-lg">{skillName}</h3>
          <p className="text-gray-500 text-[12px] md:text-sm mt-1">{years} year(s) experience</p>
        </div>
      </div>
    );
}