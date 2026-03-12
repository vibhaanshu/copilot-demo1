import { useMemo, useState } from 'react'

type Channel = 'Email' | 'SMS' | 'Push' | 'Social'

type Campaign = {
  name: string
  owner: string
  phase: string
  audience: string
  channels: string
  launch: string
}

type ApprovalItem = {
  item: string
  owner: string
  status: string
  detail: string
}

const campaignPipeline: Campaign[] = [
  {
    name: 'Spring Launch 2026',
    owner: 'Maya Patel',
    phase: 'Ready for launch',
    audience: 'Loyalty members · 124,000',
    channels: 'Email, Push, Social',
    launch: '14 Mar · 09:00 EST',
  },
  {
    name: 'EMEA Re-engagement',
    owner: 'Jonas Weber',
    phase: 'Approval in progress',
    audience: 'Dormant users · 42,500',
    channels: 'Email, SMS',
    launch: '16 Mar · 11:30 CET',
  },
  {
    name: 'VIP Event Countdown',
    owner: 'Nina Brooks',
    phase: 'Variant test active',
    audience: 'VIP prospects · 8,200',
    channels: 'Email, SMS, Push',
    launch: '19 Mar · 18:00 PST',
  },
]

const approvalQueue: ApprovalItem[] = [
  {
    item: 'Email hero content · Spring Launch 2026',
    owner: 'Luca Kim',
    status: 'Pending review',
    detail: 'Needs legal confirmation for pricing disclaimer.',
  },
  {
    item: 'SMS copy variant B · EMEA Re-engagement',
    owner: 'Ana Costa',
    status: 'Changes requested',
    detail: 'Add opt-out copy and local timezone in CTA.',
  },
  {
    item: 'Push preview · VIP Event Countdown',
    owner: 'Chris Hall',
    status: 'Approved',
    detail: 'Approved with mobile truncation note captured in history.',
  },
]

const alerts = [
  'Launch confirmation alerts enabled for all scheduled campaigns.',
  'Automatic halt threshold set to 10% error rate for every active send.',
  'Workspace export audit trail retains report activity for 36 months.',
]

const channelPreview: Record<Channel, { title: string; summary: string; validation: string[] }> = {
  Email: {
    title: 'Responsive email template',
    summary:
      'Drag-and-drop email layout with desktop/mobile preview, unsubscribe footer, and personalized offer blocks.',
    validation: ['Subject line populated', 'Unsubscribe link present', 'Images optimized', 'Links checked'],
  },
  SMS: {
    title: 'Concise message with compliance controls',
    summary:
      'SMS preview optimized for 160-character delivery and region-specific consent handling through the shared suppression service.',
    validation: ['Opt-out text included', 'Split test tags mapped', 'Quiet hours respected'],
  },
  Push: {
    title: 'High-urgency mobile notification',
    summary:
      'Push notification card tuned for immediate engagement with fallback copy for in-app and browser delivery targets.',
    validation: ['Emoji-safe copy', 'Fallback title added', 'Deep link configured'],
  },
  Social: {
    title: 'Scheduled social publishing panel',
    summary:
      'Unified social post preview with channel-specific character counts, scheduled slots, and asset version references.',
    validation: ['LinkedIn image ratio valid', 'Instagram caption approved', 'Hashtag policy met'],
  },
}

const topMetrics = [
  { label: 'Active campaigns', value: '18', note: '+4 vs last week' },
  { label: 'Audience reached', value: '2.4M', note: 'Across 4 channels' },
  { label: 'Approvals due today', value: '7', note: '2 at risk' },
  { label: 'Avg. dashboard latency', value: '2.1s', note: 'Within NFR target' },
]

const schedule = [
  { time: '09:00', name: 'Spring Launch kickoff', meta: 'Email + Push · EST' },
  { time: '11:30', name: 'EMEA nurture wave', meta: 'Email + SMS · CET' },
  { time: '15:00', name: 'Executive approval slot', meta: 'Workspace North America' },
  { time: '18:00', name: 'VIP Event Countdown', meta: 'AB test checkpoint · PST' },
]

const analyticsRows = [
  {
    campaign: 'Spring Launch 2026',
    delivery: '98.9%',
    openRate: '41.8%',
    clickRate: '12.4%',
    conversion: '5.1%',
  },
  {
    campaign: 'EMEA Re-engagement',
    delivery: '97.6%',
    openRate: '33.2%',
    clickRate: '8.9%',
    conversion: '3.3%',
  },
  {
    campaign: 'VIP Event Countdown',
    delivery: '99.2%',
    openRate: '57.1%',
    clickRate: '16.8%',
    conversion: '7.4%',
  },
]

function App() {
  const [selectedChannel, setSelectedChannel] = useState<Channel>('Email')

  const currentPreview = useMemo(
    () => channelPreview[selectedChannel],
    [selectedChannel],
  )

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">Campaign Management System</p>
          <h1>Marketing operations cockpit</h1>
          <p className="muted">
            A UI prototype generated from the functional specification and target cloud architecture.
          </p>
        </div>

        <nav className="nav-list" aria-label="Primary">
          <a href="#overview">Overview</a>
          <a href="#planning">Planning</a>
          <a href="#content">Content & approval</a>
          <a href="#schedule">Scheduling</a>
          <a href="#analytics">Analytics</a>
          <a href="#governance">Governance</a>
        </nav>

        <div className="sidebar-card">
          <span className="pill accent">Architecture aligned</span>
          <p>
            Workspace-aware UI, approval history, channel orchestration, and export governance mirror
            the BFF, analytics, and compliance services in the architecture plan.
          </p>
        </div>
      </aside>

      <main className="content">
        <section className="hero" id="overview">
          <div>
            <div className="hero-topline">
              <span className="pill">Workspace · North America Retail</span>
              <span className="pill">Role · Campaign Manager</span>
              <span className="pill">Organization · Global Brands Group</span>
            </div>
            <h2>Plan, approve, schedule, launch, and analyze multi-channel campaigns</h2>
            <p>
              The experience combines campaign setup, audience estimation, validation, approval flow,
              realtime monitoring, and export-ready analytics in one browser workspace.
            </p>
          </div>

          <div className="hero-actions">
            <button type="button" className="primary-button">
              Create campaign
            </button>
            <button type="button" className="secondary-button">
              Review approvals
            </button>
          </div>
        </section>

        <section className="metrics-grid" aria-label="Summary metrics">
          {topMetrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <span className="metric-label">{metric.label}</span>
              <strong>{metric.value}</strong>
              <span className="metric-note">{metric.note}</span>
            </article>
          ))}
        </section>

        <section className="dashboard-grid" id="planning">
          <article className="panel span-two">
            <div className="panel-header">
              <div>
                <p className="eyebrow">4.1 Campaign creation & planning</p>
                <h3>Campaign pipeline</h3>
              </div>
              <span className="pill success">3 programs on track</span>
            </div>

            <div className="table-list">
              {campaignPipeline.map((campaign) => (
                <div key={campaign.name} className="table-row">
                  <div>
                    <strong>{campaign.name}</strong>
                    <p>{campaign.owner}</p>
                  </div>
                  <div>
                    <span className="label">Phase</span>
                    <p>{campaign.phase}</p>
                  </div>
                  <div>
                    <span className="label">Audience</span>
                    <p>{campaign.audience}</p>
                  </div>
                  <div>
                    <span className="label">Channels</span>
                    <p>{campaign.channels}</p>
                  </div>
                  <div>
                    <span className="label">Launch</span>
                    <p>{campaign.launch}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">4.2 Audience targeting</p>
                <h3>Segment builder</h3>
              </div>
              <span className="pill">Estimated reach · 124,000</span>
            </div>

            <div className="chip-grid">
              <span className="chip">Age 25-45</span>
              <span className="chip">Location: US + Canada</span>
              <span className="chip">Purchase history: premium tier</span>
              <span className="chip">Engagement: last 30 days</span>
              <span className="chip muted-chip">Exclude unsubscribed contacts</span>
              <span className="chip muted-chip">Exclude loyalty holdout list</span>
            </div>

            <div className="callout">
              <strong>CRM + CSV imports</strong>
              <p>
                Reusable segments support CRM sync, file uploads, exclusion lists, and workspace-safe
                access boundaries.
              </p>
            </div>
          </article>
        </section>

        <section className="dashboard-grid" id="content">
          <article className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">4.3 + 4.4 Channel execution & content</p>
                <h3>Channel preview studio</h3>
              </div>
              <span className="pill accent">{selectedChannel}</span>
            </div>

            <div className="tab-row" role="tablist" aria-label="Channel previews">
              {(Object.keys(channelPreview) as Channel[]).map((channel) => (
                <button
                  key={channel}
                  type="button"
                  className={channel === selectedChannel ? 'tab active' : 'tab'}
                  onClick={() => setSelectedChannel(channel)}
                >
                  {channel}
                </button>
              ))}
            </div>

            <div className="preview-card">
              <h4>{currentPreview.title}</h4>
              <p>{currentPreview.summary}</p>
              <ul>
                {currentPreview.validation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">4.5 Approval workflow</p>
                <h3>Approval queue</h3>
              </div>
              <span className="pill warning">7 pending actions</span>
            </div>

            <div className="stack-list">
              {approvalQueue.map((item) => (
                <div key={item.item} className="stack-item">
                  <div className="stack-topline">
                    <strong>{item.item}</strong>
                    <span className="pill small">{item.status}</span>
                  </div>
                  <p>{item.owner}</p>
                  <p className="muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel span-two">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Workflow coverage</p>
                <h3>Create and launch journey</h3>
              </div>
              <span className="pill">Spec workflow 5.1</span>
            </div>

            <div className="workflow-steps">
              {['Campaign brief', 'Audience segment', 'Channel content', 'Approval queue', 'Schedule', 'Live monitoring'].map(
                (step, index) => (
                  <div key={step} className="workflow-step">
                    <span>{index + 1}</span>
                    <strong>{step}</strong>
                  </div>
                ),
              )}
            </div>
          </article>
        </section>

        <section className="dashboard-grid" id="schedule">
          <article className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">4.6 Scheduling & calendar</p>
                <h3>Shared launch calendar</h3>
              </div>
              <span className="pill">Timezone-aware</span>
            </div>

            <div className="stack-list compact">
              {schedule.map((item) => (
                <div key={item.time + item.name} className="schedule-item">
                  <strong>{item.time}</strong>
                  <div>
                    <p>{item.name}</p>
                    <span>{item.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">4.7 + 4.8 Testing, monitoring & alerts</p>
                <h3>Live controls</h3>
              </div>
              <span className="pill success">Error rate 1.2%</span>
            </div>

            <div className="callout strong-callout">
              <strong>A/B winner automation</strong>
              <p>
                Variant B is leading on click-through rate and will auto-promote after the configured
                test duration unless manually overridden.
              </p>
            </div>

            <ul className="alert-list">
              {alerts.map((alert) => (
                <li key={alert}>{alert}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="dashboard-grid" id="analytics">
          <article className="panel span-two">
            <div className="panel-header">
              <div>
                <p className="eyebrow">4.9 Reporting & analytics</p>
                <h3>Campaign performance comparison</h3>
              </div>
              <div className="hero-topline">
                <span className="pill">Date range · Last 30 days</span>
                <span className="pill">Export · CSV / PDF</span>
              </div>
            </div>

            <div className="analytics-table">
              <div className="analytics-header">
                <span>Campaign</span>
                <span>Delivery</span>
                <span>Open</span>
                <span>CTR</span>
                <span>Conversion</span>
              </div>
              {analyticsRows.map((row) => (
                <div key={row.campaign} className="analytics-row">
                  <strong>{row.campaign}</strong>
                  <span>{row.delivery}</span>
                  <span>{row.openRate}</span>
                  <span>{row.clickRate}</span>
                  <span>{row.conversion}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel" id="governance">
            <div className="panel-header">
              <div>
                <p className="eyebrow">4.10 Workspace management</p>
                <h3>Governance</h3>
              </div>
              <span className="pill">RBAC enforced</span>
            </div>

            <div className="stack-list compact">
              <div className="stack-item">
                <strong>Workspace isolation</strong>
                <p className="muted">Only assigned teams can view campaigns, segments, and exports.</p>
              </div>
              <div className="stack-item">
                <strong>Audit log visibility</strong>
                <p className="muted">Every approval, export, launch, and pause event is time-stamped.</p>
              </div>
              <div className="stack-item">
                <strong>Compliance guardrails</strong>
                <p className="muted">Consent, suppression, and unsubscribe handling are surfaced inline.</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
