import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SavedCouple = {
  boyName: string;
  girlName: string;
};

const LS_COUPLE_KEY = "valentine_couple"; // store original couple (from url / your game)
const LS_LAST_TEST_KEY = "valentine_last_test";

function normalize(n: string) {
  return (n || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function titleCase(n: string) {
  return (n || "")
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0]?.toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

/** numerology number: sum of letters then reduce to 1-9 (except 11,22 optional) */
function numerologyNumber(name: string) {
  const s = normalize(name);
  let sum = 0;
  for (const ch of s) {
    if (ch >= "a" && ch <= "z") sum += ch.charCodeAt(0) - 96;
  }
  // reduce to 1-9
  while (sum > 9) {
    sum = sum
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
  }
  return sum || 1;
}

/** zodiac-ish: not real kundali. A fun "astro vibe" based on numerology number */
function pseudoZodiac(n: number) {
  const map = [
    "aries 🔥",
    "taurus 🌿",
    "gemini 🌬️",
    "cancer 🌊",
    "leo ☀️",
    "virgo 🌾",
    "libra ⚖️",
    "scorpio 🦂",
    "sagittarius 🏹",
  ];
  return map[(n - 1) % map.length];
}

function traits(n: number) {
  const t: Record<number, string[]> = {
    1: ["leader", "bold", "independent"],
    2: ["caring", "soft", "romantic"],
    3: ["funny", "charming", "creative"],
    4: ["loyal", "stable", "protective"],
    5: ["adventurous", "flirty", "energetic"],
    6: ["family-first", "sweet", "supportive"],
    7: ["deep", "mysterious", "emotional"],
    8: ["ambitious", "strong", "serious"],
    9: ["dreamy", "kind", "magnetic"],
  };
  return t[n] ?? t[2];
}

/** deterministic percent for "other names" using numerology combo */
function compatibilityPercent(boy: string, girl: string) {
  const bN = numerologyNumber(boy);
  const gN = numerologyNumber(girl);

  // base: how close numbers are
  const diff = Math.abs(bN - gN);
  const closeness = 9 - diff; // 1..9

  // spice: deterministic pseudo-random using name chars
  const seed = normalize(boy) + "|" + normalize(girl);
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = Math.imul(31, h) + seed.charCodeAt(i);
  const wiggle = Math.abs(h) % 15; // 0..14

  // result range 35..95
  const p = Math.min(95, Math.max(35, Math.round(closeness * 9 + wiggle)));
  return p;
}

/** if matched couple => always high */
function couplePercentHigh() {
  // 90..100 random each click (or change to exactly 100)
  return Math.floor(Math.random() * 11) + 90;
  // return 100;
}

export const LoveTesterGame: React.FC<{
  // optional: if you want to pass names from VictoryPage
  defaultBoy?: string;
  defaultGirl?: string;
}> = ({ defaultBoy, defaultGirl }) => {
  const [boyName, setBoyName] = useState(defaultBoy ?? "");
  const [girlName, setGirlName] = useState(defaultGirl ?? "");

  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  // Read saved “main couple” from localStorage (your real pair)
  const savedCouple = useMemo(() => {
    try {
      const raw = localStorage.getItem(LS_COUPLE_KEY);
      if (!raw) return null;
      return JSON.parse(raw) as SavedCouple;
    } catch {
      return null;
    }
  }, []);

  // If component loads and localStorage has couple, set inputs to it (only if empty)
  useEffect(() => {
    if (!boyName && savedCouple?.boyName) setBoyName(savedCouple.boyName);
    if (!girlName && savedCouple?.girlName) setGirlName(savedCouple.girlName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedCouple?.boyName, savedCouple?.girlName]);

  const isSavedCoupleMatch = () => {
    if (!savedCouple) return false;
    return (
      normalize(boyName) === normalize(savedCouple.boyName) &&
      normalize(girlName) === normalize(savedCouple.girlName)
    );
  };

  const onTest = async () => {
    const b = titleCase(boyName);
    const g = titleCase(girlName);

    setBoyName(b);
    setGirlName(g);

    setLoading(true);
    setResult(null);
    setShowResult(true);

    // little dramatic delay
    await new Promise((r) => setTimeout(r, 900));

    const percent = isSavedCoupleMatch()
      ? couplePercentHigh()
      : compatibilityPercent(b, g);

    setResult(percent);
    setLoading(false);

    localStorage.setItem(
      LS_LAST_TEST_KEY,
      JSON.stringify({ boyName: b, girlName: g, percent, at: new Date().toISOString() })
    );
  };

  const onReset = () => {
    setResult(null);
    setShowResult(false);
    setLoading(false);
  };

  const bNum = numerologyNumber(boyName);
  const gNum = numerologyNumber(girlName);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Game Frame */}
      <div className="bg-[#2d83b7] rounded-3xl p-3 sm:p-6 shadow-2xl">
        <div className="bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-500 rounded-2xl p-4 sm:p-8 relative overflow-hidden">
          {/* Diamond pattern bg (simple) */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_25%_25%,white_0,transparent_45%),radial-gradient(circle_at_75%_75%,white_0,transparent_45%)]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* LEFT FORM */}
            <div className="text-white">
              <div className="text-center font-extrabold text-2xl sm:text-3xl mb-6 tracking-wide">
                YOUR NAME
              </div>

              <div className="space-y-4">
                {/* Boy */}
                <div className="bg-white/20 border border-white/30 rounded-xl p-3">
                  <div className="text-xs uppercase opacity-90 mb-1">Boy Name</div>
                  <input
                    value={boyName}
                    onChange={(e) => setBoyName(e.target.value)}
                    placeholder="e.g. Rahul"
                    className="w-full bg-transparent outline-none text-white text-lg placeholder:text-white/70"
                  />
                </div>

                {/* Girl */}
                <div className="bg-white/20 border border-white/30 rounded-xl p-3">
                  <div className="text-xs uppercase opacity-90 mb-1">Girl Name</div>
                  <input
                    value={girlName}
                    onChange={(e) => setGirlName(e.target.value)}
                    placeholder="e.g. Priya"
                    className="w-full bg-transparent outline-none text-white text-lg placeholder:text-white/70"
                  />
                </div>

                {/* Test Button (Heart) */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onTest}
                  className="w-full mt-2 rounded-2xl bg-white text-rose-600 font-extrabold text-xl py-4 shadow-2xl"
                >
                  TEST YOUR LOVE ❤️
                </motion.button>

               
              </div>
            </div>

            {/* RIGHT RESULT HEART */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72">
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20 blur-2xl"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-[56px] bg-white/15 border border-white/25 flex flex-col items-center justify-center px-6">
                    <div className="text-white font-extrabold text-2xl sm:text-3xl text-center leading-tight">
                      TEST YOUR
                      <br />
                      LOVE
                    </div>

                    <AnimatePresence mode="wait">
                      {!showResult ? (
                        <motion.div
                          key="hint"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="mt-6 text-white/90 text-center"
                        >
                          Enter names & tap ❤️
                        </motion.div>
                      ) : (
                        <motion.div
                          key="result"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="mt-6 text-center"
                        >
                          {loading ? (
                            <div className="text-white font-bold">
                              Cupid is calculating… 💘
                            </div>
                          ) : (
                            <>
                              <div className="text-white text-lg sm:text-xl font-bold">
                                {titleCase(boyName || "Boy")} 💞 {titleCase(girlName || "Girl")}
                              </div>

                              <motion.div
                                className="mt-3 text-white font-extrabold text-5xl sm:text-6xl"
                                animate={{ scale: [1, 1.06, 1] }}
                                transition={{ duration: 1.2, repeat: Infinity }}
                              >
                                {result ?? 0}%
                              </motion.div>

                              <div className="mt-2 text-white/95 font-semibold">
                                {result !== null && result >= 90
                                  ? "Perfect match 😍 Soulmates!"
                                  : result !== null && result >= 75
                                  ? "Strong chemistry 😄💕"
                                  : "Cute but tricky 😜 Try again!"}
                              </div>

                              <button
                                onClick={onReset}
                                className="mt-4 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white font-bold"
                              >
                                Reset
                              </button>
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Astrology/Numerology Block */}
              <div className="mt-6 w-full max-w-md bg-white/15 border border-white/25 rounded-2xl p-4 text-white">
                <div className="font-extrabold text-lg mb-2">Astro + Numerology Vibe ✨</div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="font-bold">Boy</div>
                    <div>Number: {bNum}</div>
                    <div>Sign: {pseudoZodiac(bNum)}</div>
                    <div className="opacity-90 mt-1">
                      {traits(bNum).map((t) => `• ${t}`).join(" ")}
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-3">
                    <div className="font-bold">Girl</div>
                    <div>Number: {gNum}</div>
                    <div>Sign: {pseudoZodiac(gNum)}</div>
                    <div className="opacity-90 mt-1">
                      {traits(gNum).map((t) => `• ${t}`).join(" ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
