'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Settings, Share2, Lock, Eye, ShieldOff, Clock } from 'lucide-react';
import { SpotlightGlow } from './SpotlightGlow';

function CornerSq({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const SQ = 7, OFF = -4;
  const style: React.CSSProperties = {
    position: 'absolute', width: SQ, height: SQ,
    background: '#000000', border: '1px solid rgba(138,138,138,0.45)',
    zIndex: 20, pointerEvents: 'none',
    top: pos === 'tl' || pos === 'tr' ? OFF : undefined,
    bottom: pos === 'bl' || pos === 'br' ? OFF : undefined,
    left: pos === 'tl' || pos === 'bl' ? OFF : undefined,
    right: pos === 'tr' || pos === 'br' ? OFF : undefined,
  };
  return <span aria-hidden="true" style={style} />;
}

const stages = [
  {
    num: '01',
    label: 'Create',
    icon: <UserPlus className="w-4 h-4" />,
    tagline: 'Identity registration (User, AI Agent, Organization, Backend Worker).',
    detail: 'The identity is created. No permissions are granted initially. Aegis establishes the identity anchor — a on-chain address or passkey credential that all future session grants are linked to.',
    code: `// Create a new session identity anchor
const identity = await aegis.identity.create({
  type: 'user',
  credential: passkeyCredential,
  network: 'mainnet',
});
// → returns: { identityId, anchor, createdAt }`,
  },
  {
    num: '02',
    label: 'Configure',
    icon: <Settings className="w-4 h-4" />,
    tagline: 'Define the security policy: spend limits, whitelists, time locks.',
    detail: 'Before any session is granted, the authorization policy is compiled from human-readable YAML into a compact Soroban binary. Policies specify velocity limits, contract allowlists, and time-bound access windows.',
    code: `# policy.yaml
session_policy:
  limit_daily: 500 XLM
  whitelist:
    - swap_contract
    - vault_contract
  time_lock: "09:00-23:00 UTC"
  ttl: 3600`,
  },
  {
    num: '03',
    label: 'Delegate',
    icon: <Share2 className="w-4 h-4" />,
    tagline: 'Grant a session key to a delegated signer with scoped access.',
    detail: 'The master identity delegates a session key — a temporary Ed25519 or Secp256r1 keypair — to an agent or device. The session key is bound to the compiled policy and committed on-chain in Soroban Temporary storage.',
    code: `// Grant a session key to a mobile app
const session = await aegis.session.grant({
  identityId,
  policyId,
  sessionPubkey: mobileSessionKey,
  ttl: 3600, // seconds
});
// → key valid for 1 hour, 500 XLM/day limit`,
  },
  {
    num: '04',
    label: 'Authorize',
    icon: <Lock className="w-4 h-4" />,
    tagline: 'Execute an on-chain transaction through check_auth host vector.',
    detail: 'When the agent submits a transaction, the Soroban smart contract\'s check_auth host vector is invoked. It verifies the session key signature, evaluates all policy constraints, and allows or rejects the operation — entirely on-chain with no oracle dependencies.',
    code: `// Transaction submitted via Fee-Bump envelope
> check_auth invoked:
  ✓ Signature: VALID (ed25519:AKm...7Xq)
  ✓ Spend Cap: 120 / 500 XLM (within limit)
  ✓ Contract: swap_contract (whitelisted)
  ✓ Time Window: 14:22 UTC (within lock)
→ AUTHORIZED — tx propagated to network`,
  },
  {
    num: '05',
    label: 'Observe',
    icon: <Eye className="w-4 h-4" />,
    tagline: 'Monitor active sessions, spend consumption, and auth trends.',
    detail: 'Aegis indexes all Soroban Events emitted during authorization to provide a real-time view of session health — including daily spend progress, active session count, and policy violation attempts.',
    code: `// Query session telemetry
const stats = await aegis.monitor.session({
  identityId,
  range: '24h',
});
// → {
//   activeSessions: 3,
//   dailySpend: '120 XLM',
//   violations: 0,
//   txCount: 47
// }`,
  },
  {
    num: '06',
    label: 'Revoke',
    icon: <ShieldOff className="w-4 h-4" />,
    tagline: 'Instantly invalidate a compromised or suspicious session key.',
    detail: 'Emergency revocation writes a deterministic revocation marker on-chain. Any subsequent check_auth call with the revoked session key will be rejected immediately — no waiting for TTL expiry, no race condition windows.',
    code: `// Emergency revocation
await aegis.session.revoke({
  sessionId: 'sess_AKm...7Xq',
  reason: 'suspicious_activity',
});
// → Revocation committed on Soroban
// → All future check_auth calls: REJECTED
// → Effective immediately (no delay)`,
  },
  {
    num: '07',
    label: 'Expire',
    icon: <Clock className="w-4 h-4" />,
    tagline: 'Automatic TTL-based session expiry — zero cleanup overhead.',
    detail: 'Session keys stored in Soroban Temporary storage automatically decay at ledger close once their TTL elapses. Expired sessions require no manual cleanup — Stellar\'s ledger protocol handles reclamation, keeping on-chain state lean and cheap.',
    code: `// No cleanup needed — auto-expiry via Soroban TTL
// Session stored in TemporaryStorage:
{
  key: 'session:sess_AKm...7Xq',
  ttl: 3600,        // ledgers until expiry
  storage: 'Temporary', // auto-reclaimed at TTL=0
}
// → Post-expiry check_auth: KEY_NOT_FOUND → REJECTED`,
  },
];

export function AuthLifecycle() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = stages[activeIdx];

  return (
    <section id="how-it-works" className="bg-[#000000] text-[#ffffff] scroll-mt-20">
      <div className="relative mx-auto max-w-7xl border-b border-[#8A8A8A]/30">

        {/* Header */}
        <div className="relative text-center max-w-3xl mx-auto pt-24 pb-16 px-6 sm:px-8 space-y-5 overflow-visible z-10">
          <SpotlightGlow />
          <div className="inline-flex items-center px-4 py-1.5 rounded-[661px] bg-[#0d0d0d] border border-[#8A8A8A]/25 text-xs font-mono text-[#8a8a8a] tracking-wider uppercase">
            CONTINUOUS OPERATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#ffffff] font-mono leading-tight">
            The Authorization Lifecycle
          </h2>
          <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed font-sans">
            Authorization is not a single transaction. It is an operational lifecycle from key creation to automatic decay.
          </p>
        </div>

        {/* ── LEFT MENU + RIGHT CONTENT LAYOUT ── */}
        <div className="flex flex-col lg:flex-row border-t border-[#8A8A8A]/30">

          {/* LEFT: Stage Menu */}
          <div className="relative lg:w-[280px] flex-shrink-0 border-b lg:border-b-0 lg:border-r border-[#8A8A8A]/30">
            <CornerSq pos="tl" />
            <CornerSq pos="bl" />
            {stages.map((stage, idx) => {
              const isActive = idx === activeIdx;
              const isLast = idx === stages.length - 1;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`relative w-full text-left flex items-center gap-4 px-6 py-5 transition-all duration-200 group ${
                    !isLast ? 'border-b border-[#8A8A8A]/20' : ''
                  } ${isActive ? 'bg-[#0d0d0d]' : 'hover:bg-[#080808]/60'}`}
                >
                  {/* Active left accent bar */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF4747]" />
                  )}

                  {/* Step number */}
                  <span className={`text-[10px] font-mono w-5 shrink-0 ${isActive ? 'text-[#FF4747]' : 'text-[#8a8a8a]/50'}`}>
                    {stage.num}
                  </span>

                  {/* Icon */}
                  <span className={`transition-colors duration-200 ${isActive ? 'text-[#FF4747]' : 'text-[#8a8a8a]/50 group-hover:text-[#8a8a8a]'}`}>
                    {stage.icon}
                  </span>

                  {/* Label */}
                  <span className={`text-sm font-mono font-semibold tracking-wide transition-colors duration-200 ${isActive ? 'text-[#ffffff]' : 'text-[#8a8a8a] group-hover:text-[#ffffff]'}`}>
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Content Panel */}
          <div className="relative flex-1 min-h-[460px] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
            <CornerSq pos="tl" />
            <CornerSq pos="tr" />
            <CornerSq pos="bl" />
            <CornerSq pos="br" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="h-full flex flex-col gap-6"
              >
                {/* Stage Badge + Title */}
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 border border-[#FF4747]/40 bg-[#FF4747]/10 text-[#FF4747] text-[10px] font-mono tracking-widest rounded-none">
                    Stage {active.num}
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold font-mono text-[#ffffff] tracking-tight">
                    {active.label}
                  </span>
                  <span className="ml-auto text-[#FF4747]/60">
                    {active.icon}
                  </span>
                </div>

                {/* Tagline + Detail */}
                <div className="space-y-3 max-w-2xl">
                  <p className="text-sm font-medium text-[#ffffff]/90 leading-relaxed font-sans">
                    {active.tagline}
                  </p>
                  <p className="text-[12px] text-[#8a8a8a] leading-relaxed font-sans">
                    {active.detail}
                  </p>
                </div>

                {/* Code / Terminal Block */}
                <div className="flex-1 border border-[#8A8A8A]/15 bg-[#050505] p-5 font-mono text-[11px] text-[#8a8a8a] leading-relaxed overflow-auto whitespace-pre-wrap rounded-none">
                  <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-[#8A8A8A]/10">
                    <span className="w-2 h-2 rounded-full bg-red-500/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                    <span className="ml-3 text-[9px] text-[#8a8a8a]/40 tracking-widest">AEGIS SDK // STAGE {active.num}</span>
                  </div>
                  <code className="text-emerald-400/70">{active.code}</code>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
