import { useEffect, useRef, useState } from "react";

interface Message {
  who: "USER" | "KAI";
  text: string;
}

const SCRIPT: Message[] = [
  { who: "USER", text: "Hey KAI, can you fit Sam in today?" },
  { who: "KAI", text: "Hey Sam, yes — 16:30 or 18:00 today." },
  { who: "USER", text: "Book the 18:00." },
  { who: "KAI", text: "Done. Calendar invite sent. ~8s." },
];

export function AgentChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentScriptIndex, setCurrentScriptIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentScriptIndex >= SCRIPT.length) return;

    const nextMsg = SCRIPT[currentScriptIndex];

    if (nextMsg.who === "USER") {
      // User posts instantly or after a tiny delay
      const t = setTimeout(() => {
        setMessages((prev) => [...prev, nextMsg]);
        setCurrentScriptIndex((idx) => idx + 1);
      }, 900);
      return () => clearTimeout(t);
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
  }, [currentScriptIndex]);

  const reset = () => {
    setMessages([]);
    setCurrentScriptIndex(0);
    setTyping(false);
    setDisplayedText("");
  };

  return (
    <div ref={ref} className="border border-bone/30 bg-ink p-4 font-mono text-[13px] leading-relaxed relative overflow-hidden">
      {/* Subtle background matrix ticks */}
      <div className="absolute top-1 right-2 font-mono text-[8px] text-muted-foreground opacity-30">
        TRANSCRIPT_SYS
      </div>

      <div className="flex items-center justify-between border-b border-bone/20 pb-2 mb-3">
        <span className="text-muted-foreground text-[10px] tracking-wider">// LIVE_TRANSCRIPT</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-lime led-active rounded-full" />
          <span className="text-lime text-[11px] font-bold">ACTIVE</span>
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
            <span>&gt; KAI  :</span> <span className="text-foreground">{displayedText}</span>
            <span className="blink">▮</span>
          </div>
        )}

        {!typing && currentScriptIndex < SCRIPT.length && (
          <div className="text-muted-foreground">
            <span className="blink">▮</span>
          </div>
        )}
      </div>

      {currentScriptIndex >= SCRIPT.length && !typing && (
        <button
          onClick={reset}
          className="mt-3 text-xs text-muted-foreground hover:text-lime transition-all duration-200 cursor-pointer flex items-center gap-1"
        >
          <span>[</span> REPLAY_TRANSCRIPT <span>]</span>
        </button>
      )}
    </div>
  );
}
