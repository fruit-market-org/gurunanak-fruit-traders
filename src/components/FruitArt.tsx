import type { FruitArtKey } from '@/constants/site';
import type { JSX } from 'react';

/* ------------------------------------------------------------------ *
 *  Hand-drawn fruit illustrations.
 *  Each entry draws inside a 200 x 200 viewBox and is referenced from
 *  src/constants/site.ts by its key. To use a photograph instead, set
 *  `image` on the product or gallery item — the card will prefer it.
 * ------------------------------------------------------------------ */

const shadow = (cx = 100, cy = 176, rx = 52, ry = 9) => (
  <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#17171A" opacity="0.07" />
);

const leaf = (d: string, id: string, from = '#5EA87A', to = '#1E5033') => (
  <>
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={from} />
        <stop offset="100%" stopColor={to} />
      </linearGradient>
    </defs>
    <path d={d} fill={`url(#${id})`} />
  </>
);

const ART: Record<FruitArtKey, JSX.Element> = {
  /* ---------------- Mango ---------------- */
  mango: (
    <>
      <defs>
        <radialGradient id="a-mango" cx="35%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#FFE27A" />
          <stop offset="45%" stopColor="#F9B23C" />
          <stop offset="100%" stopColor="#D2581F" />
        </radialGradient>
      </defs>
      {shadow()}
      <path
        d="M118 40c28 4 48 30 48 62 0 36-28 62-64 62-30 0-52-20-52-48 0-30 18-54 42-66 9-5 18-8 26-10Z"
        fill="url(#a-mango)"
      />
      <path
        d="M118 40c28 4 48 30 48 62 0 36-28 62-64 62-7 0-13-1-19-3 36-5 62-33 62-69 0-21-10-39-27-52Z"
        fill="#B8450F"
        opacity="0.22"
      />
      <ellipse cx="82" cy="74" rx="22" ry="13" transform="rotate(-34 82 74)" fill="#FFF6D0" opacity="0.55" />
      <path d="M114 42c1-10 3-16 7-22" stroke="#6E4A1A" strokeWidth="5.5" strokeLinecap="round" fill="none" />
      {leaf('M121 24c6-12 18-18 34-18-4 16-16 23-34 18Z', 'a-mango-l')}
    </>
  ),

  /* ---------------- Kesar Mango ---------------- */
  kesarMango: (
    <>
      <defs>
        <radialGradient id="a-kesar" cx="34%" cy="26%" r="80%">
          <stop offset="0%" stopColor="#FFD86B" />
          <stop offset="40%" stopColor="#F2912C" />
          <stop offset="100%" stopColor="#B8451A" />
        </radialGradient>
      </defs>
      {shadow()}
      <path
        d="M100 30c34 0 62 30 62 70 0 38-26 66-62 66s-62-28-62-66c0-40 28-70 62-70Z"
        fill="url(#a-kesar)"
      />
      <path
        d="M118 32c26 10 44 36 44 68 0 38-26 66-62 66-8 0-15-1-22-4 38-4 66-32 66-70 0-26-10-47-26-60Z"
        fill="#9C3A14"
        opacity="0.22"
      />
      <ellipse cx="80" cy="68" rx="20" ry="12" transform="rotate(-28 80 68)" fill="#FFF3C8" opacity="0.6" />
      <circle cx="128" cy="118" r="3" fill="#C2561C" opacity="0.4" />
      <circle cx="140" cy="96" r="2.4" fill="#C2561C" opacity="0.35" />
      {leaf('M103 31c-2-15 7-26 25-30-1 18-10 28-25 30Z', 'a-kesar-l')}
      <path d="M99 34c0-9 1-15 4-21" stroke="#6E4A1A" strokeWidth="5" strokeLinecap="round" fill="none" />
    </>
  ),

  /* ---------------- Watermelon ---------------- */
  watermelon: (
    <>
      <defs>
        <linearGradient id="a-wm-rind" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4FA564" />
          <stop offset="100%" stopColor="#1E5033" />
        </linearGradient>
        <linearGradient id="a-wm-flesh" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF7D86" />
          <stop offset="100%" stopColor="#E23D52" />
        </linearGradient>
      </defs>
      {shadow(100, 174, 56, 9)}
      <circle cx="74" cy="100" r="58" fill="url(#a-wm-rind)" />
      <path d="M74 42c-6 14-10 36-10 58s4 44 10 58" stroke="#8FC5A2" strokeWidth="5" fill="none" opacity="0.5" />
      <path d="M42 58c-4 14-6 28-6 42s2 28 6 42" stroke="#8FC5A2" strokeWidth="5" fill="none" opacity="0.4" />
      <path d="M106 58c4 14 6 28 6 42s-2 28-6 42" stroke="#8FC5A2" strokeWidth="5" fill="none" opacity="0.4" />
      <path d="M150 40c24 0 42 26 42 60s-18 60-42 60c-22 0-40-26-40-60s18-60 40-60Z" fill="url(#a-wm-rind)" />
      <path d="M150 48c20 0 35 23 35 52s-15 52-35 52c-18 0-33-23-33-52s15-52 33-52Z" fill="#F5F7F0" />
      <path d="M150 54c18 0 31 21 31 46s-13 46-31 46c-16 0-30-21-30-46s14-46 30-46Z" fill="url(#a-wm-flesh)" />
      <g fill="#2B1A12">
        <ellipse cx="150" cy="76" rx="3.4" ry="5" />
        <ellipse cx="136" cy="100" rx="3.4" ry="5" />
        <ellipse cx="164" cy="100" rx="3.4" ry="5" />
        <ellipse cx="150" cy="124" rx="3.4" ry="5" />
      </g>
    </>
  ),

  /* ---------------- Muskmelon ---------------- */
  muskmelon: (
    <>
      <defs>
        <radialGradient id="a-musk" cx="35%" cy="30%" r="76%">
          <stop offset="0%" stopColor="#F4E3B4" />
          <stop offset="60%" stopColor="#D9BF83" />
          <stop offset="100%" stopColor="#A98A4E" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 52, 9)}
      <circle cx="100" cy="102" r="62" fill="url(#a-musk)" />
      <g stroke="#FBF3DC" strokeWidth="3" opacity="0.85" fill="none">
        <path d="M44 78c18 10 40 14 56 14s38-4 56-14" />
        <path d="M40 102c20 8 40 12 60 12s40-4 60-12" />
        <path d="M44 126c18 10 40 14 56 14s38-4 56-14" />
        <path d="M70 46c-8 18-12 36-12 56s4 38 12 56" />
        <path d="M100 40v124" />
        <path d="M130 46c8 18 12 36 12 56s-4 38-12 56" />
      </g>
      <ellipse cx="76" cy="70" rx="18" ry="11" transform="rotate(-30 76 70)" fill="#FFFBEE" opacity="0.5" />
      <path d="M100 40c0-10-2-16-6-22" stroke="#7E6A3A" strokeWidth="6" strokeLinecap="round" fill="none" />
    </>
  ),

  /* ---------------- Litchi ---------------- */
  litchi: (
    <>
      <defs>
        <radialGradient id="a-litchi" cx="34%" cy="30%" r="74%">
          <stop offset="0%" stopColor="#F27A6A" />
          <stop offset="60%" stopColor="#D13A3A" />
          <stop offset="100%" stopColor="#8E1F22" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 50, 8)}
      <g>
        <circle cx="68" cy="112" r="40" fill="url(#a-litchi)" />
        <circle cx="134" cy="118" r="34" fill="url(#a-litchi)" />
        <circle cx="104" cy="66" r="36" fill="url(#a-litchi)" />
      </g>
      <g fill="#7E1A1E" opacity="0.4">
        <circle cx="54" cy="100" r="2.6" /><circle cx="70" cy="96" r="2.6" /><circle cx="84" cy="108" r="2.6" />
        <circle cx="60" cy="122" r="2.6" /><circle cx="78" cy="128" r="2.6" /><circle cx="92" cy="60" r="2.6" />
        <circle cx="108" cy="52" r="2.6" /><circle cx="120" cy="70" r="2.6" /><circle cx="98" cy="82" r="2.6" />
        <circle cx="126" cy="110" r="2.6" /><circle cx="142" cy="104" r="2.6" /><circle cx="148" cy="126" r="2.6" />
        <circle cx="128" cy="134" r="2.6" />
      </g>
      <ellipse cx="92" cy="52" rx="13" ry="8" transform="rotate(-30 92 52)" fill="#FFD9D0" opacity="0.45" />
      <path d="M104 30v14M104 32l-16-8M104 32l16-8" stroke="#6E4A1A" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      {leaf('M118 20c10-8 22-9 34-4-9 11-21 14-34 4Z', 'a-litchi-l')}
    </>
  ),

  /* ---------------- Jackfruit ---------------- */
  jackfruit: (
    <>
      <defs>
        <radialGradient id="a-jack" cx="34%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#D8D96A" />
          <stop offset="55%" stopColor="#A8AC3C" />
          <stop offset="100%" stopColor="#6A7020" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 48, 8)}
      <ellipse cx="100" cy="104" rx="58" ry="68" fill="url(#a-jack)" />
      <g fill="#5B6118" opacity="0.4">
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 6 }).map((_, c) => (
            <polygon
              key={`${r}-${c}`}
              points="0,-6 5,-2 3,5 -3,5 -5,-2"
              transform={`translate(${56 + c * 18 + (r % 2 ? 9 : 0)} ${50 + r * 18})`}
            />
          )),
        )}
      </g>
      <ellipse cx="74" cy="66" rx="18" ry="12" transform="rotate(-28 74 66)" fill="#F2F4B8" opacity="0.4" />
      <path d="M100 36V18" stroke="#6B5A24" strokeWidth="7" strokeLinecap="round" fill="none" />
      {leaf('M102 22c10-12 24-15 38-10-8 14-22 18-38 10Z', 'a-jack-l')}
    </>
  ),

  /* ---------------- Custard Apple ---------------- */
  customApple: (
    <>
      <defs>
        <radialGradient id="a-custard" cx="34%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#CFE3B8" />
          <stop offset="55%" stopColor="#9BBE84" />
          <stop offset="100%" stopColor="#5E7D4C" />
        </radialGradient>
      </defs>
      {shadow(100, 174, 48, 8)}
      <circle cx="100" cy="106" r="60" fill="url(#a-custard)" />
      <g fill="none" stroke="#4E6B40" strokeWidth="2.6" opacity="0.55">
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 6 }).map((_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={52 + c * 19 + (r % 2 ? 9 : 0)}
              cy={58 + r * 19}
              r="10"
            />
          )),
        )}
      </g>
      <circle cx="100" cy="106" r="60" fill="none" stroke="#4E6B40" strokeWidth="3" opacity="0.3" />
      <ellipse cx="76" cy="72" rx="17" ry="10" transform="rotate(-30 76 72)" fill="#EAF4DC" opacity="0.5" />
      <path d="M100 46V30" stroke="#6E5A32" strokeWidth="6" strokeLinecap="round" fill="none" />
      {leaf('M102 34c9-11 22-14 35-10-8 13-21 17-35 10Z', 'a-custard-l')}
    </>
  ),

  /* ---------------- Jamun ---------------- */
  jamun: (
    <>
      <defs>
        <radialGradient id="a-jamun" cx="34%" cy="26%" r="76%">
          <stop offset="0%" stopColor="#8F6FC4" />
          <stop offset="50%" stopColor="#4B2C7A" />
          <stop offset="100%" stopColor="#23123F" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 48, 8)}
      <ellipse cx="72" cy="112" rx="30" ry="42" transform="rotate(-10 72 112)" fill="url(#a-jamun)" />
      <ellipse cx="128" cy="118" rx="27" ry="38" transform="rotate(10 128 118)" fill="url(#a-jamun)" />
      <ellipse cx="100" cy="72" rx="26" ry="36" fill="url(#a-jamun)" />
      <ellipse cx="64" cy="92" rx="8" ry="14" transform="rotate(-20 64 92)" fill="#C8B0E8" opacity="0.4" />
      <ellipse cx="92" cy="56" rx="7" ry="12" transform="rotate(-20 92 56)" fill="#C8B0E8" opacity="0.4" />
      <path d="M100 38V24M100 26l-18-6M100 26l18-6" stroke="#4E5A2E" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      {leaf('M116 22c11-9 24-10 36-5-9 12-22 15-36 5Z', 'a-jamun-l')}
    </>
  ),

  /* ---------------- Dragon Fruit ---------------- */
  dragonFruit: (
    <>
      <defs>
        <radialGradient id="a-dragon" cx="34%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#FF8FB0" />
          <stop offset="55%" stopColor="#E0427A" />
          <stop offset="100%" stopColor="#9A1E4E" />
        </radialGradient>
        <linearGradient id="a-dragon-fin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B7D98C" />
          <stop offset="100%" stopColor="#5E8C3E" />
        </linearGradient>
      </defs>
      {shadow(100, 176, 46, 8)}
      <g fill="url(#a-dragon-fin)">
        <path d="M58 70c-18-8-30-6-40 4 14 8 28 10 40-4Z" />
        <path d="M142 70c18-8 30-6 40 4-14 8-28 10-40-4Z" />
        <path d="M54 112c-18-4-30 0-38 12 15 6 29 5 38-12Z" />
        <path d="M146 112c18-4 30 0 38 12-15 6-29 5-38-12Z" />
        <path d="M100 36c-10-16-22-22-36-22 4 17 15 27 36 22Z" />
        <path d="M100 36c10-16 22-22 36-22-4 17-15 27-36 22Z" />
      </g>
      <ellipse cx="100" cy="106" rx="48" ry="62" fill="url(#a-dragon)" />
      <g fill="url(#a-dragon-fin)">
        <path d="M60 86c-14-2-22 2-28 12 12 4 23 2 28-12Z" />
        <path d="M140 86c14-2 22 2 28 12-12 4-23 2-28-12Z" />
        <path d="M66 134c-13 2-20 8-23 19 12 1 22-4 23-19Z" />
        <path d="M134 134c13 2 20 8 23 19-12 1-22-4-23-19Z" />
      </g>
      <ellipse cx="80" cy="76" rx="14" ry="20" transform="rotate(-20 80 76)" fill="#FFC9DB" opacity="0.45" />
    </>
  ),

  /* ---------------- Pear ---------------- */
  pear: (
    <>
      <defs>
        <radialGradient id="a-pear" cx="35%" cy="30%" r="76%">
          <stop offset="0%" stopColor="#E7E88A" />
          <stop offset="55%" stopColor="#BFCB4D" />
          <stop offset="100%" stopColor="#7E8A24" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 44, 8)}
      <path
        d="M100 40c14 0 22 12 20 26-2 13-8 18-4 30 5 15 24 22 24 46 0 24-18 40-40 40s-40-16-40-40c0-24 19-31 24-46 4-12-2-17-4-30-2-14 6-26 20-26Z"
        fill="url(#a-pear)"
      />
      <ellipse cx="80" cy="122" rx="14" ry="22" transform="rotate(-14 80 122)" fill="#F4F5C4" opacity="0.45" />
      <g fill="#8A9430" opacity="0.4">
        <circle cx="118" cy="110" r="2.2" /><circle cx="126" cy="132" r="2.2" /><circle cx="110" cy="146" r="2.2" />
        <circle cx="96" cy="96" r="2.2" /><circle cx="130" cy="96" r="2.2" />
      </g>
      <path d="M100 42V22" stroke="#6E5A32" strokeWidth="6" strokeLinecap="round" fill="none" />
      {leaf('M102 26c10-11 23-13 36-9-9 13-22 16-36 9Z', 'a-pear-l')}
    </>
  ),

  /* ---------------- Pomegranate ---------------- */
  pomegranate: (
    <>
      <defs>
        <radialGradient id="a-pom" cx="34%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#F08A6E" />
          <stop offset="50%" stopColor="#C8302F" />
          <stop offset="100%" stopColor="#7C1216" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 50, 8)}
      <circle cx="100" cy="108" r="60" fill="url(#a-pom)" />
      <path d="M100 48c-9-10-9-22 0-34 9 12 9 24 0 34Z" fill="#9C1C1E" />
      <path d="M100 48c-12-4-20-12-24-24 13 2 21 10 24 24Z" fill="#8B1619" />
      <path d="M100 48c12-4 20-12 24-24-13 2-21 10-24 24Z" fill="#8B1619" />
      <ellipse cx="76" cy="78" rx="18" ry="12" transform="rotate(-30 76 78)" fill="#FFCDBB" opacity="0.4" />
      <path d="M100 168c-24-14-38-36-38-60" stroke="#6B0F12" strokeWidth="4" opacity="0.25" fill="none" />
      <circle cx="136" cy="130" r="3" fill="#7C1216" opacity="0.35" />
    </>
  ),

  /* ---------------- Orange ---------------- */
  orange: (
    <>
      <defs>
        <radialGradient id="a-orange" cx="34%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#FFC65C" />
          <stop offset="50%" stopColor="#F2871F" />
          <stop offset="100%" stopColor="#B84F07" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 50, 8)}
      <circle cx="100" cy="106" r="60" fill="url(#a-orange)" />
      <g fill="#C4620C" opacity="0.3">
        <circle cx="76" cy="86" r="2.4" /><circle cx="94" cy="74" r="2.4" /><circle cx="116" cy="84" r="2.4" />
        <circle cx="130" cy="104" r="2.4" /><circle cx="118" cy="128" r="2.4" /><circle cx="96" cy="140" r="2.4" />
        <circle cx="72" cy="120" r="2.4" /><circle cx="64" cy="100" r="2.4" /><circle cx="102" cy="106" r="2.4" />
        <circle cx="140" cy="84" r="2.4" /><circle cx="86" cy="112" r="2.4" />
      </g>
      <ellipse cx="78" cy="78" rx="18" ry="11" transform="rotate(-30 78 78)" fill="#FFEBC2" opacity="0.5" />
      <circle cx="100" cy="46" r="6" fill="#7A5A1E" />
      {leaf('M104 44c10-14 24-18 40-14-9 16-24 21-40 14Z', 'a-orange-l')}
    </>
  ),

  /* ---------------- Sweet Lime ---------------- */
  sweetLime: (
    <>
      <defs>
        <radialGradient id="a-mosambi" cx="34%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#DCE88A" />
          <stop offset="50%" stopColor="#A6BE3E" />
          <stop offset="100%" stopColor="#64781A" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 50, 8)}
      <circle cx="100" cy="106" r="60" fill="url(#a-mosambi)" />
      <g fill="#718A1E" opacity="0.32">
        <circle cx="78" cy="88" r="2.4" /><circle cx="96" cy="76" r="2.4" /><circle cx="118" cy="86" r="2.4" />
        <circle cx="132" cy="106" r="2.4" /><circle cx="116" cy="130" r="2.4" /><circle cx="94" cy="142" r="2.4" />
        <circle cx="70" cy="122" r="2.4" /><circle cx="64" cy="102" r="2.4" /><circle cx="104" cy="108" r="2.4" />
      </g>
      <ellipse cx="78" cy="78" rx="18" ry="11" transform="rotate(-30 78 78)" fill="#F4F8D2" opacity="0.5" />
      <circle cx="100" cy="46" r="6" fill="#5F6B22" />
      {leaf('M104 44c10-14 24-18 40-14-9 16-24 21-40 14Z', 'a-mosambi-l')}
    </>
  ),

  /* ---------------- Grapes ---------------- */
  grapes: (
    <>
      <defs>
        <radialGradient id="a-grape" cx="34%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#9B7FD0" />
          <stop offset="55%" stopColor="#5B3E96" />
          <stop offset="100%" stopColor="#30205A" />
        </radialGradient>
      </defs>
      {shadow(100, 178, 40, 7)}
      <path d="M100 44V24" stroke="#6E5A32" strokeWidth="6" strokeLinecap="round" fill="none" />
      {leaf('M102 30c12-13 27-15 42-10-10 15-25 19-42 10Z', 'a-grape-l')}
      {[
        [80, 60], [120, 60],
        [62, 86], [100, 86], [138, 86],
        [80, 112], [120, 112],
        [62, 138], [100, 138], [138, 138],
        [80, 160], [120, 160],
        [100, 44],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="19" fill="url(#a-grape)" />
          <ellipse cx={cx - 6} cy={cy - 7} rx="6" ry="4" transform={`rotate(-30 ${cx - 6} ${cy - 7})`} fill="#CDBCEC" opacity="0.4" />
        </g>
      ))}
    </>
  ),

  /* ---------------- Strawberry ---------------- */
  strawberry: (
    <>
      <defs>
        <radialGradient id="a-straw" cx="34%" cy="26%" r="76%">
          <stop offset="0%" stopColor="#FF7E7E" />
          <stop offset="50%" stopColor="#E02A3C" />
          <stop offset="100%" stopColor="#8E0E22" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 44, 8)}
      <path
        d="M100 52c34 0 56 20 56 48 0 34-30 68-56 68S44 134 44 100c0-28 22-48 56-48Z"
        fill="url(#a-straw)"
      />
      <g fill="#FFE9A8">
        {[
          [76, 82], [100, 76], [124, 82], [64, 104], [88, 100], [112, 100], [136, 104],
          [76, 124], [100, 120], [124, 124], [88, 144], [112, 144], [100, 162],
        ].map(([cx, cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx="3" ry="4.6" />
        ))}
      </g>
      <ellipse cx="78" cy="78" rx="14" ry="9" transform="rotate(-30 78 78)" fill="#FFC4C4" opacity="0.45" />
      <g fill="#2F7D4F">
        <path d="M100 56c-10 0-20-4-28-12 12-4 22-2 28 6 6-8 16-10 28-6-8 8-18 12-28 12Z" />
        <path d="M100 56c-8-2-14-8-18-18 10 0 16 6 18 18Z" />
        <path d="M100 56c8-2 14-8 18-18-10 0-16 6-18 18Z" />
      </g>
      <path d="M100 40V26" stroke="#2F7D4F" strokeWidth="5" strokeLinecap="round" fill="none" />
    </>
  ),

  /* ---------------- Apple ---------------- */
  apple: (
    <>
      <defs>
        <radialGradient id="a-apple" cx="33%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#FF8A6B" />
          <stop offset="48%" stopColor="#D9252F" />
          <stop offset="100%" stopColor="#85101C" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 48, 8)}
      <path
        d="M100 54c10-8 24-10 36-4 18 9 26 30 24 54-3 34-24 62-42 62-7 0-12-4-18-4s-11 4-18 4c-18 0-39-28-42-62-2-24 6-45 24-54 12-6 26-4 36 4Z"
        fill="url(#a-apple)"
      />
      <ellipse cx="74" cy="86" rx="15" ry="22" transform="rotate(-22 74 86)" fill="#FFC1AE" opacity="0.4" />
      <path d="M100 54V28" stroke="#6E4A1A" strokeWidth="6" strokeLinecap="round" fill="none" />
      {leaf('M103 36c11-13 26-15 42-10-10 15-26 19-42 10Z', 'a-apple-l')}
    </>
  ),

  /* ---------------- Guava ---------------- */
  guava: (
    <>
      <defs>
        <radialGradient id="a-guava" cx="34%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#E6EDA8" />
          <stop offset="50%" stopColor="#B4C863" />
          <stop offset="100%" stopColor="#6E8030" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 48, 8)}
      <path
        d="M100 44c36 0 60 26 60 62 0 34-26 58-60 58s-60-24-60-58c0-36 24-62 60-62Z"
        fill="url(#a-guava)"
      />
      <ellipse cx="76" cy="80" rx="18" ry="12" transform="rotate(-30 76 80)" fill="#F4F8CE" opacity="0.5" />
      <g fill="#7F9138" opacity="0.3">
        <circle cx="124" cy="92" r="2.4" /><circle cx="136" cy="116" r="2.4" /><circle cx="116" cy="136" r="2.4" />
        <circle cx="92" cy="146" r="2.4" />
      </g>
      <path d="M100 46V30" stroke="#5F6B22" strokeWidth="6" strokeLinecap="round" fill="none" />
      {leaf('M102 34c10-12 24-14 38-10-9 14-23 18-38 10Z', 'a-guava-l')}
      {leaf('M98 34C88 22 74 20 60 24c9 14 23 18 38 10Z', 'a-guava-l2')}
    </>
  ),

  /* ---------------- Chikoo ---------------- */
  chikoo: (
    <>
      <defs>
        <radialGradient id="a-chikoo" cx="34%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#C49A6C" />
          <stop offset="55%" stopColor="#956B42" />
          <stop offset="100%" stopColor="#5A3D22" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 48, 8)}
      <ellipse cx="72" cy="114" rx="38" ry="44" fill="url(#a-chikoo)" />
      <ellipse cx="134" cy="106" rx="34" ry="40" fill="url(#a-chikoo)" />
      <ellipse cx="58" cy="92" rx="14" ry="9" transform="rotate(-30 58 92)" fill="#E2C49E" opacity="0.4" />
      <ellipse cx="122" cy="84" rx="12" ry="8" transform="rotate(-30 122 84)" fill="#E2C49E" opacity="0.35" />
      <circle cx="72" cy="70" r="4" fill="#4A3119" />
      <circle cx="134" cy="66" r="4" fill="#4A3119" />
      {leaf('M136 64c10-12 24-15 38-11-9 14-23 18-38 11Z', 'a-chikoo-l')}
    </>
  ),

  /* ---------------- Banana ---------------- */
  banana: (
    <>
      <defs>
        <linearGradient id="a-banana" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor="#FFE98A" />
          <stop offset="55%" stopColor="#F5C53A" />
          <stop offset="100%" stopColor="#C08A12" />
        </linearGradient>
      </defs>
      {shadow(100, 174, 56, 9)}
      {[
        { t: 'rotate(-14 100 110)', o: 0.85 },
        { t: 'rotate(-4 100 110) translate(0 8)', o: 0.95 },
        { t: 'rotate(6 100 110) translate(0 16)', o: 1 },
      ].map((b, i) => (
        <g key={i} transform={b.t} opacity={b.o}>
          <path
            d="M44 74c4 42 32 72 70 72 20 0 36-8 46-20-18 6-34 4-50-6-22-14-34-34-38-56-6-4-18-4-28 10Z"
            fill="url(#a-banana)"
          />
          <path
            d="M50 70c6 38 32 66 66 68"
            stroke="#FFF6C6"
            strokeWidth="5"
            fill="none"
            opacity="0.55"
            strokeLinecap="round"
          />
          <path d="M160 126c6-2 10 2 8 8-2 5-8 6-12 2Z" fill="#6E5A20" />
          <path d="M44 74c-4-8-8-10-16-10 2 8 6 12 16 10Z" fill="#6E5A20" />
        </g>
      ))}
    </>
  ),

  /* ---------------- Papaya ---------------- */
  papaya: (
    <>
      <defs>
        <linearGradient id="a-papaya" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8DE86" />
          <stop offset="55%" stopColor="#D8A838" />
          <stop offset="100%" stopColor="#A36A14" />
        </linearGradient>
        <linearGradient id="a-papaya-flesh" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFA552" />
          <stop offset="100%" stopColor="#E8692A" />
        </linearGradient>
      </defs>
      {shadow(100, 176, 54, 9)}
      <ellipse cx="78" cy="104" rx="40" ry="62" transform="rotate(-8 78 104)" fill="url(#a-papaya)" />
      <ellipse cx="62" cy="76" rx="14" ry="22" transform="rotate(-20 62 76)" fill="#F6EFB6" opacity="0.45" />
      <path d="M78 42c0-10-2-16-6-22" stroke="#6E5A24" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M152 50c20 10 32 32 32 56s-12 46-32 56Z" fill="url(#a-papaya)" />
      <path d="M152 58c16 9 26 28 26 48s-10 39-26 48Z" fill="url(#a-papaya-flesh)" />
      <g fill="#2E2520">
        <circle cx="160" cy="86" r="4" /><circle cx="166" cy="100" r="4" /><circle cx="160" cy="114" r="4" />
        <circle cx="168" cy="126" r="3.4" /><circle cx="156" cy="128" r="3.4" /><circle cx="156" cy="74" r="3.4" />
      </g>
    </>
  ),

  /* ---------------- Pineapple ---------------- */
  pineapple: (
    <>
      <defs>
        <linearGradient id="a-pine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5C65A" />
          <stop offset="55%" stopColor="#D79A22" />
          <stop offset="100%" stopColor="#8E6208" />
        </linearGradient>
        <linearGradient id="a-pine-top" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2F7D4F" />
          <stop offset="100%" stopColor="#7FC08E" />
        </linearGradient>
      </defs>
      {shadow(100, 178, 44, 8)}
      <g fill="url(#a-pine-top)">
        <path d="M100 66C92 44 94 24 100 8c8 16 10 36 0 58Z" />
        <path d="M100 66C84 52 74 36 72 20c16 8 26 24 28 46Z" />
        <path d="M100 66c16-14 26-30 28-46-16 8-26 24-28 46Z" />
        <path d="M100 66C82 62 68 52 60 40c16 0 32 10 40 26Z" />
        <path d="M100 66c18-4 32-14 40-26-16 0-32 10-40 26Z" />
      </g>
      <ellipse cx="100" cy="118" rx="46" ry="58" fill="url(#a-pine)" />
      <g stroke="#8A5F0A" strokeWidth="2.6" opacity="0.5" fill="none">
        {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
          <path key={`r${i}`} d={`M56 ${118 + i * 17}q44 16 88 0`} />
        ))}
        {[-2, -1, 0, 1, 2].map((i) => (
          <path key={`l${i}`} d={`M${100 + i * 22} 62q-10 56 0 114`} />
        ))}
      </g>
      <ellipse cx="78" cy="94" rx="12" ry="20" transform="rotate(-18 78 94)" fill="#FBE6AC" opacity="0.35" />
    </>
  ),

  /* ---------------- Kiwi ---------------- */
  kiwi: (
    <>
      <defs>
        <radialGradient id="a-kiwi-skin" cx="34%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#A98258" />
          <stop offset="60%" stopColor="#7C5A36" />
          <stop offset="100%" stopColor="#4C3620" />
        </radialGradient>
        <radialGradient id="a-kiwi-flesh" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3F6D8" />
          <stop offset="24%" stopColor="#EDF3CC" />
          <stop offset="30%" stopColor="#A8C94E" />
          <stop offset="100%" stopColor="#6E9426" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 52, 8)}
      <ellipse cx="60" cy="110" rx="36" ry="46" transform="rotate(-12 60 110)" fill="url(#a-kiwi-skin)" />
      <ellipse cx="48" cy="88" rx="12" ry="8" transform="rotate(-30 48 88)" fill="#C8A47A" opacity="0.4" />
      <circle cx="136" cy="106" r="48" fill="url(#a-kiwi-skin)" />
      <circle cx="136" cy="106" r="42" fill="url(#a-kiwi-flesh)" />
      <circle cx="136" cy="106" r="11" fill="#FAFCEC" />
      <g fill="#2B2A18">
        {Array.from({ length: 14 }).map((_, i) => {
          const ang = (i / 14) * Math.PI * 2;
          return (
            <ellipse
              key={i}
              cx={136 + Math.cos(ang) * 23}
              cy={106 + Math.sin(ang) * 23}
              rx="2.4"
              ry="3.6"
              transform={`rotate(${(ang * 180) / Math.PI + 90} ${136 + Math.cos(ang) * 23} ${106 + Math.sin(ang) * 23})`}
            />
          );
        })}
      </g>
      <g stroke="#FAFCEC" strokeWidth="2" opacity="0.7">
        {Array.from({ length: 18 }).map((_, i) => {
          const ang = (i / 18) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={136 + Math.cos(ang) * 12}
              y1={106 + Math.sin(ang) * 12}
              x2={136 + Math.cos(ang) * 39}
              y2={106 + Math.sin(ang) * 39}
            />
          );
        })}
      </g>
    </>
  ),

  /* ---------------- Coconut ---------------- */
  coconut: (
    <>
      <defs>
        <radialGradient id="a-coco" cx="34%" cy="26%" r="76%">
          <stop offset="0%" stopColor="#D9E8A8" />
          <stop offset="55%" stopColor="#9EBE58" />
          <stop offset="100%" stopColor="#5A7524" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 48, 8)}
      <path
        d="M100 38c32 0 56 26 56 62 0 38-24 64-56 64s-56-26-56-64c0-36 24-62 56-62Z"
        fill="url(#a-coco)"
      />
      <path d="M100 38c20 14 30 38 30 64s-10 48-30 62c30-2 52-28 52-64 0-34-22-60-52-62Z" fill="#4E6B1E" opacity="0.2" />
      <ellipse cx="76" cy="74" rx="16" ry="11" transform="rotate(-30 76 74)" fill="#EDF6C8" opacity="0.5" />
      <path d="M100 38c-6-10-6-18 0-26 6 8 6 16 0 26Z" fill="#6E8A2E" />
      <path d="M86 44c-10-8-14-16-12-26 10 6 14 14 12 26Z" fill="#6E8A2E" />
      <path d="M114 44c10-8 14-16 12-26-10 6-14 14-12 26Z" fill="#6E8A2E" />
    </>
  ),

  /* ---------------- Lemon ---------------- */
  lemon: (
    <>
      <defs>
        <radialGradient id="a-lemon" cx="34%" cy="28%" r="76%">
          <stop offset="0%" stopColor="#FFF3A0" />
          <stop offset="55%" stopColor="#F2D23A" />
          <stop offset="100%" stopColor="#B99407" />
        </radialGradient>
      </defs>
      {shadow(100, 176, 50, 8)}
      <path
        d="M100 44c36 0 64 26 64 62 0 34-28 58-64 58s-64-24-64-58c0-36 28-62 64-62Z"
        fill="url(#a-lemon)"
      />
      <path d="M164 106c6 2 10 6 12 12-8 2-13 0-16-6Z" fill="#D9B318" />
      <path d="M36 106c-6 2-10 6-12 12 8 2 13 0 16-6Z" fill="#D9B318" />
      <ellipse cx="76" cy="80" rx="18" ry="12" transform="rotate(-30 76 80)" fill="#FFFBD6" opacity="0.55" />
      <g fill="#C9A411" opacity="0.3">
        <circle cx="124" cy="92" r="2.2" /><circle cx="136" cy="112" r="2.2" /><circle cx="118" cy="132" r="2.2" />
        <circle cx="96" cy="142" r="2.2" /><circle cx="100" cy="104" r="2.2" />
      </g>
      {leaf('M104 46c10-13 24-16 38-12-9 15-23 19-38 12Z', 'a-lemon-l')}
    </>
  ),
};

export type FruitArtProps = {
  art: FruitArtKey;
  className?: string;
  title?: string;
};

export default function FruitArt({ art, className, title }: FruitArtProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label={title ? `${title} illustration` : 'Fruit illustration'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      {ART[art] ?? ART.apple}
    </svg>
  );
}
