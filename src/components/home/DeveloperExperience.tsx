'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Code2 } from 'lucide-react';

export function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState<'session' | 'policy' | 'revoke' | 'intent'>('session');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    session: `import { AegisClient, SpendPolicy } from '@stellar-aegis/sdk';

const aegis = new AegisClient({ network: 'testnet' });

// 1. Grant short-lived session with spend caps
const session = await aegis.grantSession({
  accountAddress: 'CAEGIS...SMART_ACCOUNT',
  validitySeconds: 7200, // 2 Hours
  policies: [
    SpendPolicy.maxSpend('USDC', '100.0000000'),
    SpendPolicy.allowedContracts(['C_DEX_SWAP_CONTRACT'])
  ]
});

console.log('Active Session Key:', session.publicKey);`,

    policy: `import { PolicyCompiler } from '@stellar-aegis/sdk';

// 2. Author human-readable policy YAML
const yamlPolicy = \`
name: GamingMicroSpend
rules:
  - asset: USDC
    max_amount: "25.0000000"
    period: daily
  - allowed_contracts:
      - C_GAME_ITEM_STORE
\`;

// Compile YAML to compact Soroban binary struct
const compiledPolicy = PolicyCompiler.compile(yamlPolicy);
await aegis.deployPolicy('CAEGIS...SMART_ACCOUNT', compiledPolicy);`,

    revoke: `import { RevocationClient } from '@stellar-aegis/sdk';

// 3. Emergency revoke session on-chain seketika
const revocation = new RevocationClient({ network: 'testnet' });

const result = await revocation.revokeSession({
  accountAddress: 'CAEGIS...SMART_ACCOUNT',
  sessionId: 'SESS_9401284',
  reason: 'DEVICE_LOST'
});

console.log('Session Revoked! Tx Hash:', result.hash);`,

    intent: `import { IntentEngine } from '@stellar-aegis/sdk';

// 4. Execute atomic intent workflow
const intent = await IntentEngine.createIntent({
  account: 'CAEGIS...SMART_ACCOUNT',
  inputs: [{ asset: 'USDC', maxAmount: '50.0' }],
  outputs: [{ asset: 'EURC', minAmount: '49.5' }],
  deadlineLedger: 1049200
});

const result = await aegis.executeIntent(intent);
console.log('Intent Executed Atomically:', result.status);`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="devex" className="py-24 bg-slate-950 text-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            Developer Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 font-mono">
            Clean, Intuitive TypeScript SDK
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Replace 500+ lines of custom signature checking and relayer scripts with clean, high-level Aegis SDK calls.
          </p>
        </div>

        {/* Code Playground Box */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden font-mono text-xs">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="font-bold text-slate-200">@stellar-aegis/sdk</span>
            </div>

            {/* Code Tabs */}
            <div className="flex flex-wrap gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px]">
              <button
                onClick={() => setActiveTab('session')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'session' ? 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                grantSession()
              </button>
              <button
                onClick={() => setActiveTab('policy')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'policy' ? 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                createPolicy()
              </button>
              <button
                onClick={() => setActiveTab('revoke')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'revoke' ? 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                revokeSession()
              </button>
              <button
                onClick={() => setActiveTab('intent')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'intent' ? 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                executeIntent()
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Code Viewer */}
          <div className="p-6 overflow-x-auto text-slate-200 bg-slate-950">
            <pre className="leading-relaxed">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
