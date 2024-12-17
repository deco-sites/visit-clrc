import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";

export default function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`
      Usuário: ${user}
      Password: ${password}
      `);
  };

  return (
    <form className="w-full flex flex-col items-center gap-6">
      <div className="flex flex-col gap-1 w-full">
        <label className="text-gray2">Usuário</label>
        <div className="relative flex items-center">
          <Image
            src={"userIcon.png"}
            alt={"User Icon"}
            width=""
            className="absolute left-3 w-3 h-3"
          />
          <input
            type="text"
            id="email"
            name="email"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="usuario@mail.com"
            className="w-full pl-10 pr-3 py-2 bg-white2 rounded-lg focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <label className="text-gray2">Senha</label>
        <div className="relative flex items-center">
          <Image
            src={"lockIcon.png"}
            alt={"User Icon"}
            width=""
            className="absolute left-3 w-3 h-3"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="w-full pl-10 pr-3 py-2 bg-white2 rounded-lg focus:outline-none"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green1 rounded-xl text-white py-3 px-12 mt-6"
      >
        Entrar
      </button>
    </form>
  );
}
