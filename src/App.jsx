import useGetScriptAttributes from "@/hooks/useScriptAttributes";
import useSessionId from "@/hooks/useSessionId";
import useOpenChat from "@/hooks/useOpen";
import Head from "@/components/Head";
import OpenButton from "@/components/OpenButton";
import ChatWindow from "./components/ChatWindow";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "@/i18n";

export default function App() {
  const { isChatOpen, toggleOpenChat } = useOpenChat();
  const embedSettings = useGetScriptAttributes();
  const sessionId = useSessionId();

  useEffect(() => {
    // Sempre abrir o chat quando carregar
    toggleOpenChat(true);
  }, [embedSettings.loaded]);

  if (!embedSettings.loaded) return null;

  const positionClasses = {
    "bottom-left": "allm-bottom-0 allm-left-0 allm-ml-4",
    "bottom-right": "allm-bottom-0 allm-right-0 allm-mr-4",
    "top-left": "allm-top-0 allm-left-0 allm-ml-4 allm-mt-4",
    "top-right": "allm-top-0 allm-right-0 allm-mr-4 allm-mt-4",
  };

  const position = embedSettings.position || "bottom-right";
  const windowWidth = embedSettings.windowWidth ?? "400px";
  const windowHeight = embedSettings.windowHeight ?? "700px";

  // Detecta tema do sistema
  const isDarkMode =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <I18nextProvider i18n={i18next}>
      <Head />
      <div
        id="anything-llm-embed-chat-container"
        className={`allm-w-full allm-h-full ${isDarkMode ? "dark" : ""}`}
      >
        <div
          className={`allm-h-full allm-w-full allm-bg-white dark:allm-bg-black-900 allm-flex allm-flex-col allm-rounded-lg allm-border allm-border-gray-300 allm-shadow-lg`}
          id="anything-llm-chat"
        >
          <ChatWindow
            closeChat={() => toggleOpenChat(false)}
            settings={embedSettings}
            sessionId={sessionId}
          />
        </div>
      </div>
    </I18nextProvider>
  );
}
