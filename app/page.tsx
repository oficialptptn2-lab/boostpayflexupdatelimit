export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>BoostPay Flex Update Limit</h1>
      <p>Welcome to the application with Vercel Speed Insights integration.</p>
      
      <div style={{ marginTop: "2rem" }}>
        <h2>Configuration</h2>
        <p>To set up this application, configure the following environment variables:</p>
        <ul>
          <li><code>BOT_TOKEN</code> - Your bot token</li>
          <li><code>CHAT_ID</code> - Your chat ID</li>
          <li><code>SHEET_URL</code> - Your Google Sheets Web App URL</li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2>Speed Insights</h2>
        <p>This application is configured with Vercel Speed Insights to track performance metrics.</p>
        <p>Once deployed to Vercel, you can view the Speed Insights data in your Vercel dashboard.</p>
      </div>
    </main>
  );
}
