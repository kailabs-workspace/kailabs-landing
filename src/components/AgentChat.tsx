import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n";

interface Message {
  who: "USER" | "KAI";
  text: string;
}

export function AgentChat() {
  const { t, lang } = useI18n();
  const script = t.home.agentChat.script;
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentScriptIndex, setCurrentScriptIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  // Reset chat whenever language changes
  useEffect(() => {
    setMessages([]);
    setCurrentScriptIndex(0);
    setTyping(false);
    setDisplayedText("");
  }, [lang]);

  useEffect(() => {
    if (currentScriptIndex >= script.length) return;

    const nextMsg = script[currentScriptIndex];

    if (nextMsg.who === "USER") {
      // User posts instantly or after a tiny delay
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, nextMsg]);
        setCurrentScriptIndex((idx) => idx + 1);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      // KAI simulates thinking/typing
      const delay = setTimeout(() => {
        setTyping(true);
        let charIndex = 0;
        setDisplayedText("");

        const typingInterval = setInterval(() => {
          if (charIndex < nextMsg.text.length) {
            setDisplayedText((txt) => txt + nextMsg.text.charAt(charIndex));
            charIndex++;
          } else {
            clearInterval(typingInterval);
            setTyping(false);
            setMessages((prev) => [...prev, nextMsg]);
            setDisplayedText("");
            setCurrentScriptIndex((idx) => idx + 1);
          }
        }, 35); // speed of typing

        return () => clearInterval(typingInterval);
      }, 1000); // delay before starting typing

      return () => clearTimeout(delay);
    }
  }, [currentScriptIndex, script]);

  const reset = () => {
    setMessages([]);
    setCurrentScriptIndex(0);
    setTyping(false);
    setDisplayedText("");
  };

  return (
    <div
      ref={ref}
      className="border border-bone/30 bg-ink p-4 font-mono text-[13px] leading-relaxed relative overflow-hidden"
    >
      {/* Subtle background matrix ticks */}
      <div className="absolute top-1 right-2 font-mono text-[8px] text-muted-foreground opacity-30">
        {t.home.agentChat.transcriptSys}
      </div>

      <div className="flex items-center justify-between border-b border-bone/20 pb-2 mb-3">
        <span className="text-muted-foreground text-[10px] tracking-wider">
          {t.home.agentChat.liveTranscript}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-lime led-active rounded-full" />
          <span className="text-lime text-[11px] font-bold">{t.home.agentChat.active}</span>
        </span>
      </div>

      <div className="space-y-2 min-h-[160px] flex flex-col justify-end">
        {messages.map((m, i) => (
          <div key={i} className="animate-fade-in">
            <span className={m.who === "KAI" ? "text-lime font-bold" : "text-muted-foreground"}>
              {m.who === "KAI" ? "> KAI  :" : "> USER :"}
            </span>{" "}
            <span className="text-foreground">{m.text}</span>
          </div>
        ))}

        {typing && (
          <div className="text-lime">
            <span>&gt; KAI :</span> <span className="text-foreground">{displayedText}</span>
            <span className="blink">▮</span>
          </div>
        )}

        {!typing && currentScriptIndex < script.length && (
          <div className="text-muted-foreground">
            <span className="blink">▮</span>
          </div>
        )}
      </div>

      {currentScriptIndex >= script.length && !typing && (
        <button
          onClick={reset}
          className="mt-3 text-xs text-muted-foreground hover:text-lime transition-all duration-200 cursor-pointer flex items-center gap-1"
        >
          <span>[</span> {t.home.agentChat.replay} <span>]</span>
        </button>
      )}
    </div>
  );
}
