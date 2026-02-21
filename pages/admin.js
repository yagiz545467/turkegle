import { useState } from 'react';

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [users] = useState([
    { ip: "176.24.55.102", city: "İstanbul", time: "Aktif" },
    { ip: "88.230.12.44", city: "Ankara", time: "1 dk önce" }
  ]);

  if (!authed) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-80 text-center">
          <h2 className="font-black text-2xl mb-4 text-turk-red italic">TÜRKEGLE ADMIN</h2>
          <input type="password" placeholder="Şifre" className="w-full border p-3 rounded-xl mb-4 text-black outline-none border-red-200" onChange={(e)=>setPass(e.target.value)} />
          <button onClick={() => pass === "admin123" ? setAuthed(true) : alert("Hatalı!")} className="w-full bg-turk-red text-white py-3 rounded-xl font-bold">Giriş</button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto font-sans">
      <h1 className="text-4xl font-black text-gray-800 mb-8 border-b-4 border-turk-red pb-4 italic">KONTROL <span className="text-turk-red">PANELİ</span></h1>
      <div className="space-y-4">
        {users.map((u, i) => (
          <div key={i} className="bg-white border-2 border-gray-100 p-6 rounded-2xl flex justify-between items-center hover:border-red-500 transition shadow-sm">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Kullanıcı IP</p>
              <p className="text-2xl font-mono font-bold text-gray-700">{u.ip}</p>
              <p className="text-sm text-gray-400">{u.city} - {u.time}</p>
            </div>
            <button onClick={() => alert(u.ip + " banlandı!")} className="bg-turk-red hover:bg-black text-white px-8 py-3 rounded-xl font-bold shadow-lg transition">BANLA</button>
          </div>
        ))}
      </div>
    </div>
  );
}
