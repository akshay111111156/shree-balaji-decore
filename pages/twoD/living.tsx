import Image from "next/image";

export default function LivingRoom() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-100 min-h-screen p-6">
        <h2 className="text-lg font-bold mb-6">Spaces</h2>
        <ul className="space-y-4">
          <li>🏢 Office</li>
          <li>🛏️ Bedroom</li>
          <li>🍳 Kitchen</li>
          <li className="font-bold text-red-600">🛋️ Living Room</li>
        </ul>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Living Room</h1>
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/living-room.png"
            alt="Living Room"
            fill
            className="object-cover"
          />
        </div>
      </main>
    </div>
  );
}
