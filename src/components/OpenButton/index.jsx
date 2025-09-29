import {
  Plus,
  ChatCircleDots,
  Headset,
  Binoculars,
  MagnifyingGlass,
  MagicWand,
} from "@phosphor-icons/react";

const CHAT_ICONS = {
  plus: Plus,
  chatBubble: ChatCircleDots,
  support: Headset,
  search2: Binoculars,
  search: MagnifyingGlass,
  magic: MagicWand,
};

export default function OpenButton({ settings, isOpen, toggleOpen }) {
  if (isOpen) return null;
  return (
    <button
      style={{
        backgroundColor: settings.buttonColor,
        padding: 0,
        width: 56,
        height: 56,
      }}
      id="anything-llm-embed-chat-button"
      onClick={toggleOpen}
      className={`hover:allm-cursor-pointer allm-border-none allm-flex allm-items-center allm-justify-center allm-rounded-full allm-text-white allm-text-2xl hover:allm-opacity-95`}
      aria-label="Toggle Menu"
    >
      <img
        src={settings.brandImageUrl}
        alt="Brand"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    </button>
  );
}
