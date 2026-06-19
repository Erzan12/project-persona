import { CopilotSidebar } from "@copilotkit/react-core/v2";

export default function Home() {
  return (
    <main>
      <div
        style={{
          height: "500px",
          width: "350px",
          position: "relative",
        }}
      >
        <CopilotSidebar />
      </div>
    </main>
  );
}
