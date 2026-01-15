export default function PageWrapper({ children }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="min-h-screen bg-white/90 dark:bg-gray-900/90">
        {children}
      </div>
    </div>
  );
}
