/* File: client/src/pages/Policies.jsx - Privacy and terms content */
import { privacyPolicy, termsOfService } from '../data/siteContent.js';

const Policies = () => (
  <div className="flex flex-col gap-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
    <section>
      <p className="text-xs uppercase tracking-widest text-emerald-400">Compliance</p>
      <h1 className="mt-2 text-3xl font-semibold text-emerald-300">Privacy policy</h1>
      <div className="mt-4 space-y-4 text-sm text-slate-300">
        {privacyPolicy.map((paragraph, index) => (
          <p key={`privacy-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
    <section>
      <h2 className="text-2xl font-semibold text-emerald-300">Terms of service</h2>
      <div className="mt-4 space-y-4 text-sm text-slate-300">
        {termsOfService.map((paragraph, index) => (
          <p key={`terms-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  </div>
);

export default Policies;
