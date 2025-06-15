export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">$GUR Token</h1>
      <div className="bg-white rounded-xl p-4 shadow-md mb-4">
        <p>My Balance: 0 GUR</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Withdraw Token</button>
      </div>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl shadow-md">📊 Tokenomics</div>
        <div className="bg-white p-4 rounded-xl shadow-md">📄 Whitepaper</div>
        <div className="bg-white p-4 rounded-xl shadow-md">ℹ️ About</div>
      </div>
    </div>
  );
}