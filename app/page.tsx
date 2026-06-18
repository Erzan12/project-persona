import { CopilotSidebar } from "@copilotkit/react-core/v2";
import ChatHome from "@/app/component/chat";

export default function Home() {
  return (
    <div>
      <main>
        <ChatHome />
        <CopilotSidebar/>
      </main>
    </div>
  );
}
