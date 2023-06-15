import BoardGame from "../components/BoardGame";
import PlayerCard from "../components/PlayerCard";

export default function HomePage() {
  return (
    <div className="w-281 h-218 bg-browns-500 rounded flex flex-col justify-center items-center">
      <PlayerCard />
      <BoardGame />
    </div>
  )
}