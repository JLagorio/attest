/* @ds-bundle: {"format":4,"namespace":"IdiomDesignSystem_c24a1d","components":[{"name":"ObjectHeader","sourcePath":"components/assurance/ObjectHeader.jsx"},{"name":"Provenance","sourcePath":"components/assurance/Provenance.jsx"},{"name":"ResidualPanel","sourcePath":"components/assurance/ResidualPanel.jsx"},{"name":"SourceCompare","sourcePath":"components/assurance/SourceCompare.jsx"},{"name":"StateBadge","sourcePath":"components/assurance/StateBadge.jsx"},{"name":"UnknownItem","sourcePath":"components/assurance/UnknownItem.jsx"},{"name":"WorkRow","sourcePath":"components/assurance/WorkRow.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Link","sourcePath":"components/core/Link.jsx"},{"name":"KeyValue","sourcePath":"components/data/KeyValue.jsx"},{"name":"LineChart","sourcePath":"components/data/LineChart.jsx"},{"name":"ListRow","sourcePath":"components/data/ListRow.jsx"},{"name":"Meter","sourcePath":"components/data/Meter.jsx"},{"name":"Metric","sourcePath":"components/data/Metric.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Menu","sourcePath":"components/feedback/Menu.jsx"},{"name":"Notice","sourcePath":"components/feedback/Notice.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FilterBar","sourcePath":"components/forms/FilterBar.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"NavGroup","sourcePath":"components/navigation/NavGroup.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ConsoleAside","sourcePath":"ui_kits/console/ConsoleAside.jsx"},{"name":"ConsoleCollection","sourcePath":"ui_kits/console/ConsoleCollection.jsx"},{"name":"ConsoleNav","sourcePath":"ui_kits/console/ConsoleNav.jsx"},{"name":"ConsoleScreen","sourcePath":"ui_kits/console/ConsoleScreen.jsx"}],"sourceHashes":{"components/assurance/ObjectHeader.jsx":"374aab68a914","components/assurance/Provenance.jsx":"5eb51cec2552","components/assurance/ResidualPanel.jsx":"295b9afaeec0","components/assurance/SourceCompare.jsx":"b9e268638ede","components/assurance/StateBadge.jsx":"a5910c8e2db8","components/assurance/UnknownItem.jsx":"2549abba8ffb","components/assurance/WorkRow.jsx":"99444a8dc4f6","components/core/Avatar.jsx":"025586976ad6","components/core/Badge.jsx":"ab67dc0b6a18","components/core/Button.jsx":"ba9546a16e11","components/core/Icon.jsx":"522a89be1712","components/core/IconButton.jsx":"c69dda429c35","components/core/Link.jsx":"40902a74da9d","components/data/KeyValue.jsx":"d2bf827d7aa6","components/data/LineChart.jsx":"a4e2b87bb2cf","components/data/ListRow.jsx":"7d4584293162","components/data/Meter.jsx":"f8d8886549f9","components/data/Metric.jsx":"00d877ebf1f8","components/data/Pagination.jsx":"0a482196988f","components/data/Table.jsx":"8c7feea50a4b","components/feedback/Dialog.jsx":"f53e963b34bd","components/feedback/EmptyState.jsx":"9badfc55ba86","components/feedback/Menu.jsx":"bc916c30b1c6","components/feedback/Notice.jsx":"81c477ecd812","components/forms/Checkbox.jsx":"e0d065adc930","components/forms/FilterBar.jsx":"a8b9f2fb7a66","components/forms/Input.jsx":"6602e280d73e","components/forms/SearchInput.jsx":"cde6bb93f703","components/forms/Select.jsx":"2e2fb241d03a","components/forms/Switch.jsx":"9e466d060466","components/navigation/Breadcrumb.jsx":"c047185fa210","components/navigation/NavGroup.jsx":"eabb3a9b2273","components/navigation/NavItem.jsx":"c8b71abcbb05","components/navigation/SegmentedControl.jsx":"49384e456627","components/navigation/Tabs.jsx":"0f72cb871f9d","ui_kits/console/ConsoleAside.jsx":"561c8d936ec8","ui_kits/console/ConsoleCollection.jsx":"5080e77b25f4","ui_kits/console/ConsoleNav.jsx":"1f93c17cbf65","ui_kits/console/ConsoleScreen.jsx":"63c28b0d8230"},"inlinedExternals":[],"unexposedExports":[{"name":"toneFor","sourcePath":"components/assurance/StateBadge.jsx"}]} */

(() => {

const __ds_ns = (window.IdiomDesignSystem_c24a1d = window.IdiomDesignSystem_c24a1d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/assurance/ObjectHeader.jsx
try { (() => {
function ObjectHeader({
  crumbs = [],
  name,
  type,
  states = [],
  meta = [],
  actions,
  onWhy,
  onActivity
}) {
  const NS = window.IdiomDesignSystem_c24a1d;
  return /*#__PURE__*/React.createElement("header", {
    className: "objhead"
  }, crumbs.length > 0 && /*#__PURE__*/React.createElement(NS.Breadcrumb, {
    trail: crumbs
  }), /*#__PURE__*/React.createElement("div", {
    className: "objhead-id"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "t-title"
  }, name), (type || states.length > 0) && /*#__PURE__*/React.createElement("div", {
    className: "states"
  }, type && /*#__PURE__*/React.createElement("span", {
    className: "t-label"
  }, type), states.map((s, i) => /*#__PURE__*/React.createElement(NS.StateBadge, {
    key: i,
    state: s
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), actions), meta.length > 0 && /*#__PURE__*/React.createElement("dl", {
    className: "objhead-meta"
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("dt", null, m.label), /*#__PURE__*/React.createElement("dd", null, m.value)))), (onWhy || onActivity) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-5)"
    }
  }, onWhy && /*#__PURE__*/React.createElement(NS.Link, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onWhy();
    }
  }, "Why is this here?"), onActivity && /*#__PURE__*/React.createElement(NS.Link, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onActivity();
    }
  }, "Activity")));
}
Object.assign(__ds_scope, { ObjectHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/assurance/ObjectHeader.jsx", error: String((e && e.message) || e) }); }

// components/assurance/Provenance.jsx
try { (() => {
function Provenance({
  state,
  tone,
  steps = [],
  residual,
  invalidatedBy,
  authority
}) {
  const NS = window.IdiomDesignSystem_c24a1d;
  const tail = [residual && {
    label: "Residual responsibility",
    value: residual
  }, invalidatedBy && {
    label: "What would change this",
    value: invalidatedBy
  }, authority && {
    label: "Authority to change",
    value: authority
  }].filter(Boolean);
  return /*#__PURE__*/React.createElement("div", null, state && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(NS.StateBadge, {
    state: state,
    tone: tone
  })), /*#__PURE__*/React.createElement("ol", {
    className: "why"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, s.label), s.detail && /*#__PURE__*/React.createElement("span", null, s.detail))))), tail.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(NS.KeyValue, {
    items: tail,
    labelWidth: 168
  })));
}
Object.assign(__ds_scope, { Provenance });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/assurance/Provenance.jsx", error: String((e && e.message) || e) }); }

// components/assurance/ResidualPanel.jsx
try { (() => {
function ResidualPanel({
  provider,
  version,
  covers,
  residual,
  attestation = 0,
  evidence,
  lastAssessed,
  items = [],
  actions
}) {
  const NS = window.IdiomDesignSystem_c24a1d;
  const total = covers + residual + attestation;
  return /*#__PURE__*/React.createElement("div", null, (provider || version) && /*#__PURE__*/React.createElement("div", {
    className: "t-strong",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, provider, version && /*#__PURE__*/React.createElement("span", {
    className: "t-mono",
    style: {
      marginLeft: 8
    }
  }, version)), /*#__PURE__*/React.createElement("div", {
    className: "residual"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, "Covered by provider"), /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, covers)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, "Yours to work"), /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, residual)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, "Attestation only"), /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, attestation))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(NS.Meter, {
    total: total,
    showKey: false,
    segments: [{
      label: "Covered",
      value: covers
    }, {
      label: "Residual",
      value: residual
    }, {
      label: "Attestation",
      value: attestation
    }]
  })), (evidence || lastAssessed) && /*#__PURE__*/React.createElement("dl", {
    className: "objhead-meta",
    style: {
      marginTop: "var(--space-4)"
    }
  }, lastAssessed && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Provider last assessed"), /*#__PURE__*/React.createElement("dd", null, lastAssessed)), evidence && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", null, "Evidence"), /*#__PURE__*/React.createElement("dd", null, evidence))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-strong",
    style: {
      marginBottom: "var(--space-2)"
    }
  }, "What stays with you"), items.map((it, i) => /*#__PURE__*/React.createElement(NS.ListRow, {
    key: i,
    title: it.title,
    meta: it.meta,
    trailing: it.state ? /*#__PURE__*/React.createElement(NS.StateBadge, {
      state: it.state
    }) : undefined
  }))), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-5)"
    }
  }, actions));
}
Object.assign(__ds_scope, { ResidualPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/assurance/ResidualPanel.jsx", error: String((e && e.message) || e) }); }

// components/assurance/SourceCompare.jsx
try { (() => {
function SourceCompare({
  rows = [],
  effective,
  conflict = false,
  note
}) {
  const NS = window.IdiomDesignSystem_c24a1d;
  return /*#__PURE__*/React.createElement("div", null, conflict && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(NS.Notice, {
    tone: "problem",
    label: "Conflict"
  }, "Sources disagree and no rule resolves them. A decision is required before this obligation can be assessed.")), /*#__PURE__*/React.createElement(NS.Table, {
    columns: [{
      label: "Source",
      width: 210
    }, {
      label: "Value",
      width: 130
    }, {
      label: "Scope",
      width: 170
    }, {
      label: "Authority"
    }]
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, r.source), /*#__PURE__*/React.createElement("td", {
    className: "num"
  }, r.value), /*#__PURE__*/React.createElement("td", null, r.scope), /*#__PURE__*/React.createElement("td", {
    className: "t-micro",
    style: {
      textAlign: "left"
    }
  }, r.authority))), effective && !conflict && /*#__PURE__*/React.createElement("tr", {
    className: "on"
  }, /*#__PURE__*/React.createElement("td", {
    className: "t-strong"
  }, "Effective"), /*#__PURE__*/React.createElement("td", {
    className: "t-strong num"
  }, effective.value), /*#__PURE__*/React.createElement("td", {
    className: "t-strong"
  }, effective.scope), /*#__PURE__*/React.createElement("td", {
    className: "t-micro",
    style: {
      textAlign: "left"
    }
  }, effective.authority))), note && /*#__PURE__*/React.createElement("p", {
    className: "t-label",
    style: {
      marginTop: "var(--space-4)"
    }
  }, note));
}
Object.assign(__ds_scope, { SourceCompare });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/assurance/SourceCompare.jsx", error: String((e && e.message) || e) }); }

// components/assurance/StateBadge.jsx
try { (() => {
/* The platform's state vocabulary, mapped to four tints. Labels are readable without colour;
   the tint only says how loud the state is. Satisfied is deliberately absent from every tone. */
const TONE = {};
const put = (tone, labels) => labels.forEach(l => TONE[l] = tone);
put("none", ["satisfied", "verified", "current", "canonical/active", "accepted/validated", "confirmed unchanged", "no known impact", "complete"]);
put("neutral", ["planned", "new", "packaged", "assigned", "delegated", "inherited", "inherited — current", "inherited - current", "local", "candidate", "local/candidate", "program-specific", "draft", "published", "superseded", "retired", "applicable", "active", "not applicable", "closed", "accepted as input", "triaged", "approved", "merged/superseded", "ended/superseded", "false positive", "accepted/deferred", "metadata-only", "result visible"]);
put("attention", ["awaiting response", "in progress", "submitted", "ready for review", "clarification requested", "insufficient information", "insufficient info", "attestation required", "needs review", "review required", "under review", "reassessment required", "reassess", "expiring", "ready for validation", "remediation planned", "in remediation", "open", "duplicate review", "scope review", "promotion review", "evidence stale", "partially active", "delta", "unreviewed", "candidate/unreviewed", "returned for clarification", "waiting on response"]);
put("problem", ["other than satisfied", "not satisfied", "conflict", "impacted", "expired", "revoked", "rejected/kept local", "rejected", "overdue", "blocked", "invalidated"]);
put("unknown", ["unknown", "not reviewed", "evidence restricted", "restricted", "implementation detail restricted", "boundary unknown", "unresolved"]);
function toneFor(state) {
  return TONE[String(state || "").trim().toLowerCase()] || "neutral";
}
function StateBadge({
  state,
  tone,
  children,
  hideSatisfied = false
}) {
  const label = children || state;
  const t = tone || toneFor(state);
  if (t === "none") return hideSatisfied ? null : /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, label);
  return /*#__PURE__*/React.createElement("span", {
    className: "badge " + t
  }, label);
}
Object.assign(__ds_scope, { toneFor, StateBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/assurance/StateBadge.jsx", error: String((e && e.message) || e) }); }

// components/assurance/UnknownItem.jsx
try { (() => {
function UnknownItem({
  subject,
  what,
  owner,
  neededBy,
  blocks = [],
  action
}) {
  const NS = window.IdiomDesignSystem_c24a1d;
  return /*#__PURE__*/React.createElement("div", {
    className: "unknown-item"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-strong"
  }, subject), /*#__PURE__*/React.createElement("div", {
    className: "t-label",
    style: {
      marginTop: 2
    }
  }, what)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(NS.StateBadge, {
    state: "Unknown"
  }), action), /*#__PURE__*/React.createElement("div", {
    className: "blocks"
  }, blocks.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "t-micro"
  }, b)), /*#__PURE__*/React.createElement("span", {
    className: "t-micro"
  }, "Owner ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: owner ? "var(--ink-secondary)" : "var(--ink-muted)"
    }
  }, owner || "Unassigned")), neededBy && /*#__PURE__*/React.createElement("span", {
    className: "t-micro"
  }, "Needed by ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-secondary)"
    }
  }, neededBy))));
}
Object.assign(__ds_scope, { UnknownItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/assurance/UnknownItem.jsx", error: String((e && e.message) || e) }); }

// components/assurance/WorkRow.jsx
try { (() => {
function WorkRow({
  title,
  kind,
  target,
  owner,
  due,
  state,
  blocking,
  onOpen,
  trailing
}) {
  const NS = window.IdiomDesignSystem_c24a1d;
  const meta = [kind, target, owner].filter(Boolean).join(" · ");
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "workrow",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-strong",
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "t-micro",
    style: {
      marginTop: 2,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, meta), blocking && /*#__PURE__*/React.createElement("div", {
    className: "t-micro",
    style: {
      marginTop: 2,
      color: "var(--problem-fg)"
    }
  }, blocking)), state ? /*#__PURE__*/React.createElement(NS.StateBadge, {
    state: state
  }) : /*#__PURE__*/React.createElement("span", null), trailing || /*#__PURE__*/React.createElement("span", {
    className: "due"
  }, due));
}
Object.assign(__ds_scope, { WorkRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/assurance/WorkRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  initials,
  size = 30,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "avatar",
    style: Object.assign({
      width: size,
      height: size
    }, style)
  }, initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: "neutral",
  attention: "attention",
  problem: "problem",
  unknown: "unknown"
};
function Badge({
  tone = "unknown",
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "badge " + (TONES[tone] || TONES.unknown)
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "secondary",
  icon,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "btn" + (variant !== "secondary" ? " " + variant : "")
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const G = {
  search: [["circle", {
    cx: 11,
    cy: 11,
    r: 7
  }], ["path", {
    d: "m20 20-3.6-3.6"
  }]],
  home: [["path", {
    d: "M3.5 10.5 12 3.5l8.5 7"
  }], ["path", {
    d: "M5.5 9.6V20.5h13V9.6"
  }]],
  org: [["rect", {
    x: 3.5,
    y: 3.5,
    width: 10,
    height: 17,
    rx: 1.5
  }], ["path", {
    d: "M13.5 8.5h7v12h-7M6.5 7.5h4M6.5 11.5h4M6.5 15.5h4"
  }]],
  box: [["path", {
    d: "M12 3.2 3.7 7.6v8.8L12 20.8l8.3-4.4V7.6L12 3.2Z"
  }], ["path", {
    d: "M3.7 7.6 12 12l8.3-4.4M12 12v8.8"
  }]],
  lib: [["path", {
    d: "M4.5 4v16M8.5 4v16"
  }], ["path", {
    d: "m12.5 5.4 4.6-1 3 14.2-4.6 1z"
  }]],
  lay: [["path", {
    d: "m12 3.4 8.4 4.7-8.4 4.7-8.4-4.7 8.4-4.7Z"
  }], ["path", {
    d: "m3.6 13.4 8.4 4.7 8.4-4.7"
  }]],
  clip: [["rect", {
    x: 5,
    y: 4,
    width: 14,
    height: 16.5,
    rx: 2
  }], ["path", {
    d: "M9.2 4h5.6v3H9.2zM9 12.5h6M9 16h4"
  }]],
  inbox: [["path", {
    d: "M4 13.2h4.2l1.4 2.9h4.8l1.4-2.9H20"
  }], ["path", {
    d: "M4 13.2 6 5.2h12l2 8v6.6H4v-6.6Z"
  }]],
  flag: [["path", {
    d: "M5.5 20.5V4h11l-1.6 4.2 1.6 4.2h-11"
  }]],
  shield: [["path", {
    d: "M12 3.4 5.4 6.2v6c0 4.4 2.9 7.4 6.6 8.7 3.7-1.3 6.6-4.3 6.6-8.7v-6L12 3.4Z"
  }], ["path", {
    d: "M12 9.2v4M12 16.1h.01"
  }]],
  chev: [["path", {
    d: "m6 9.5 6 6 6-6"
  }]],
  help: [["circle", {
    cx: 12,
    cy: 12,
    r: 8.5
  }], ["path", {
    d: "M9.8 9.6a2.3 2.3 0 1 1 2.7 2.3v1.4M12.5 16.6h.01"
  }]],
  bell: [["path", {
    d: "M18 15.5V10a6 6 0 1 0-12 0v5.5L4.5 18h15L18 15.5Z"
  }], ["path", {
    d: "M10 20.5h4"
  }]],
  gear: [["circle", {
    cx: 12,
    cy: 12,
    r: 3
  }], ["path", {
    d: "M12 3.2v2.3M12 18.5v2.3M20.8 12h-2.3M5.5 12H3.2M18.2 5.8l-1.6 1.6M7.4 16.6l-1.6 1.6M18.2 18.2l-1.6-1.6M7.4 7.4 5.8 5.8"
  }]],
  plus: [["path", {
    d: "M12 5.5v13M5.5 12h13"
  }]],
  check: [["path", {
    d: "m5.5 12.4 4.4 4.4L18.5 7.6"
  }]],
  close: [["path", {
    d: "M6.2 6.2l11.6 11.6M17.8 6.2 6.2 17.8"
  }]],
  chevr: [["path", {
    d: "m9.5 6 6 6-6 6"
  }]]
};
function Icon({
  name,
  size = 18,
  style,
  ...rest
}) {
  const g = G[name] || [];
  return React.createElement("svg", Object.assign({
    className: "icon",
    viewBox: "0 0 24 24",
    style: Object.assign({
      width: size,
      height: size
    }, style),
    "aria-hidden": true
  }, rest), g.map((e, i) => React.createElement(e[0], Object.assign({
    key: i
  }, e[1]))));
}
Icon.names = Object.keys(G);
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "iconbtn",
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Link.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Link({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: "link"
  }, rest), children);
}
Object.assign(__ds_scope, { Link });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Link.jsx", error: String((e && e.message) || e) }); }

// components/data/KeyValue.jsx
try { (() => {
function KeyValue({
  items = [],
  labelWidth
}) {
  return /*#__PURE__*/React.createElement("dl", {
    className: "keyvalue",
    style: labelWidth ? {
      gridTemplateColumns: labelWidth + "px minmax(0,1fr)"
    } : undefined
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("dt", null, it.label), /*#__PURE__*/React.createElement("dd", null, it.value))));
}
Object.assign(__ds_scope, { KeyValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KeyValue.jsx", error: String((e && e.message) || e) }); }

// components/data/LineChart.jsx
try { (() => {
function LineChart({
  series = [],
  legend = true,
  height = 230,
  min,
  max,
  xLabels = [],
  format
}) {
  const W = 920,
    H = height;
  const all = series.flatMap(s => s.points);
  const lo = min != null ? min : Math.min.apply(null, all),
    hi = max != null ? max : Math.max.apply(null, all);
  const y = v => H - 8 - (v - lo) / (hi - lo || 1) * (H - 24);
  const line = s => s.points.map((v, i) => (i * (W / (s.points.length - 1 || 1))).toFixed(1) + "," + y(v).toFixed(1)).join(" ");
  const ticks = [hi, lo + (hi - lo) / 2, lo].map(v => format ? format(v) : Math.round(v).toLocaleString());
  const grid = [8, H / 2, H - 8];
  return /*#__PURE__*/React.createElement("div", null, legend && /*#__PURE__*/React.createElement("div", {
    className: "legend",
    style: {
      marginBottom: 18
    }
  }, series.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      background: s.color || "var(--series-" + (i + 1) + ")"
    }
  }), s.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "axis-y",
    style: {
      height: H
    }
  }, ticks.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "t-micro num"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    className: "chart",
    style: {
      height: H
    },
    viewBox: "0 0 " + W + " " + H,
    preserveAspectRatio: "none",
    "aria-label": "Line chart"
  }, grid.map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    className: "grid",
    x1: "0",
    y1: g + 0.5,
    x2: W,
    y2: g + 0.5
  })), series.map((s, i) => /*#__PURE__*/React.createElement("polyline", {
    key: i,
    points: line(s),
    fill: "none",
    stroke: s.color || "var(--series-" + (i + 1) + ")",
    strokeWidth: "2.5",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    vectorEffect: "non-scaling-stroke"
  }))), xLabels.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "axis-x"
  }, xLabels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "t-micro"
  }, l))))));
}
Object.assign(__ds_scope, { LineChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LineChart.jsx", error: String((e && e.message) || e) }); }

// components/data/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ListRow({
  title,
  meta,
  trailing,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "listrow"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-strong trunc"
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    className: "t-micro trunc"
  }, meta)), trailing);
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/data/Meter.jsx
try { (() => {
function Meter({
  segments = [],
  total,
  showKey = true,
  format
}) {
  const sum = segments.reduce((a, s) => a + s.value, 0);
  const whole = total || sum || 1;
  const rest = Math.max(0, whole - sum);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "meter"
  }, segments.slice(0, 3).map((s, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      width: s.value / whole * 100 + "%",
      background: s.color || "var(--series-" + (i + 1) + ")"
    }
  })), rest > 0 && /*#__PURE__*/React.createElement("i", {
    style: {
      width: rest / whole * 100 + "%"
    }
  })), showKey && /*#__PURE__*/React.createElement("div", {
    className: "meter-key"
  }, segments.slice(0, 3).map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      background: s.color || "var(--series-" + (i + 1) + ")"
    }
  }), s.label), /*#__PURE__*/React.createElement("div", {
    className: "vl"
  }, format ? format(s.value) : s.value.toLocaleString())))));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Meter.jsx", error: String((e && e.message) || e) }); }

// components/data/Metric.jsx
try { (() => {
function Metric({
  label,
  value,
  note
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "t-figure num",
    style: {
      marginTop: 2
    }
  }, value), note && /*#__PURE__*/React.createElement("div", {
    className: "t-micro",
    style: {
      marginTop: 2
    }
  }, note));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Metric.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
function Pagination({
  start,
  end,
  total,
  label = "rows",
  onPrev,
  onNext
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pager"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, start, "\u2013", end, " of ", total, " ", label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn quiet",
    onClick: onPrev,
    disabled: start <= 1
  }, "Previous"), /*#__PURE__*/React.createElement("button", {
    className: "btn quiet",
    onClick: onNext,
    disabled: end >= total
  }, "Next")));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("table", {
    className: "tbl",
    style: style
  }, /*#__PURE__*/React.createElement("colgroup", null, columns.map((c, i) => /*#__PURE__*/React.createElement("col", {
    key: i,
    style: {
      width: c.width
    }
  }))), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: c.align
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, children));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  children,
  confirm,
  confirmLabel = "Confirm",
  dismissLabel = "Cancel",
  onConfirm,
  onDismiss
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => {
      if (e.target === e.currentTarget && onDismiss) onDismiss();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-section"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "t-label",
    style: {
      marginTop: 8
    }
  }, children), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: onDismiss
  }, dismissLabel), confirm !== false && /*#__PURE__*/React.createElement("button", {
    className: "btn primary",
    onClick: onConfirm
  }, confirmLabel))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  title,
  body,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-section"
  }, title), body && /*#__PURE__*/React.createElement("p", {
    className: "t-label",
    style: {
      marginTop: 8
    }
  }, body), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Menu.jsx
try { (() => {
function Menu({
  items = [],
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "menu",
    role: "menu",
    style: style
  }, items.map((it, i) => it === "-" ? /*#__PURE__*/React.createElement("hr", {
    key: i
  }) : /*#__PURE__*/React.createElement("button", {
    key: i,
    role: "menuitem",
    onClick: () => onSelect && onSelect(typeof it === "string" ? it : it.label)
  }, typeof it === "string" ? it : /*#__PURE__*/React.createElement(React.Fragment, null, it.icon, it.label))));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Menu.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Notice.jsx
try { (() => {
function Notice({
  tone = "attention",
  label,
  children,
  action
}) {
  const NS = typeof window !== "undefined" && window.IdiomDesignSystem_c24a1d;
  const B = NS && NS.Badge;
  return /*#__PURE__*/React.createElement("div", {
    className: "notice"
  }, label && B && /*#__PURE__*/React.createElement(B, {
    tone: tone
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      flex: 1,
      minWidth: 0
    }
  }, children), action);
}
Object.assign(__ds_scope, { Notice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Notice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked,
  onChange,
  label,
  ...rest
}) {
  const NS = typeof window !== "undefined" && window.IdiomDesignSystem_c24a1d;
  const I = NS && NS.Icon;
  const box = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": !!checked,
    "aria-label": label,
    className: checked ? "check on" : "check",
    onClick: () => onChange && onChange(!checked)
  }, rest), I && /*#__PURE__*/React.createElement(I, {
    name: "check"
  }));
  return label ? /*#__PURE__*/React.createElement("label", {
    className: "toggle-row",
    style: {
      alignItems: "center"
    }
  }, box, /*#__PURE__*/React.createElement("span", {
    className: "t-body"
  }, label)) : box;
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterBar.jsx
try { (() => {
function FilterBar({
  label,
  value,
  onClick
}) {
  const NS = typeof window !== "undefined" && window.IdiomDesignSystem_c24a1d;
  const I = NS && NS.Icon;
  return /*#__PURE__*/React.createElement("div", {
    className: "filterbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, label), /*#__PURE__*/React.createElement("button", {
    className: "v",
    onClick: onClick
  }, value, I && /*#__PURE__*/React.createElement(I, {
    name: "chev",
    size: 15
  })));
}
Object.assign(__ds_scope, { FilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, label && /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("input", _extends({
    className: "input"
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    className: "t-micro"
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SearchInput({
  placeholder = "Search",
  style,
  ...rest
}) {
  const NS = typeof window !== "undefined" && window.IdiomDesignSystem_c24a1d;
  const I = NS && NS.Icon;
  return /*#__PURE__*/React.createElement("div", {
    className: "search",
    style: style
  }, I && /*#__PURE__*/React.createElement(I, {
    name: "search",
    size: 16
  }), /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder
  }, rest)));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  hint,
  ...rest
}) {
  const NS = typeof window !== "undefined" && window.IdiomDesignSystem_c24a1d;
  const Chev = NS && NS.Icon;
  return /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, label && /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    className: "select"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "input"
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value,
      l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), Chev && /*#__PURE__*/React.createElement(Chev, {
    name: "chev"
  })), hint && /*#__PURE__*/React.createElement("span", {
    className: "t-micro"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  description
}) {
  const sw = /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": !!checked,
    "aria-label": label,
    className: checked ? "switch on" : "switch",
    onClick: () => onChange && onChange(!checked)
  }, /*#__PURE__*/React.createElement("i", null));
  if (!label && !description) return sw;
  return /*#__PURE__*/React.createElement("div", {
    className: "toggle-row"
  }, sw, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-strong"
  }, label), description && /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  trail = []
}) {
  const NS = typeof window !== "undefined" && window.IdiomDesignSystem_c24a1d;
  const I = NS && NS.Icon;
  return /*#__PURE__*/React.createElement("nav", {
    className: "crumbs",
    "aria-label": "Breadcrumb"
  }, trail.map((t, i) => {
    const last = i === trail.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 && I && /*#__PURE__*/React.createElement(I, {
      name: "chevr"
    }), last ? /*#__PURE__*/React.createElement("strong", null, t.label) : /*#__PURE__*/React.createElement("a", {
      href: t.href || "#"
    }, t.label));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavGroup.jsx
try { (() => {
function NavGroup({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "navgroup"
  }, label && /*#__PURE__*/React.createElement("span", null, label), children);
}
Object.assign(__ds_scope, { NavGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavGroup.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavItem({
  icon,
  label,
  count,
  active,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    className: active ? "navitem on" : "navitem",
    "aria-current": active ? "page" : undefined,
    href: "#"
  }, rest), icon, /*#__PURE__*/React.createElement("span", {
    className: "trunc"
  }, label), count != null && /*#__PURE__*/React.createElement("em", null, count));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "segmented"
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    className: o === active ? "on" : undefined,
    "aria-pressed": o === active,
    onClick: () => onChange && onChange(o)
  }, o)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tabs",
    style: style,
    role: "tablist"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    role: "tab",
    "aria-selected": t === active,
    className: t === active ? "tab on" : "tab",
    onClick: () => onChange && onChange(t)
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ConsoleAside.jsx
try { (() => {
const WORK = [["14 responses ready for review", "Determination", "TMC FY26 assessment", "Today", "Ready for review", null], ["Determine AC-06(1)", "Determination", "Platform Security response accepted as input", "Today", "Ready for review", "Blocks the Oct 5 control freeze"], ["Answer J. Whitfield on IA-05(1)", "Clarification", "Which IdP policy applies to the enclave", "Aug 26", "Clarification requested", null], ["Re-evaluate Enterprise VPN consumption", "Applicability review", "6 dependent objectives", "Aug 28", "Impacted", null], ["Attest device certificate scope", "Attestation", "Enterprise PKI v3.2", "Sep 2", "Attestation required", null]];
const UPSTREAM = [["Enterprise VPN v2.8", "Gateway config moved to GW-STD-12", "Impacted"], ["Enterprise PKI v3.2", "You consume v3.1", "Delta"], ["Enterprise MDM v5.0", "Contradicts the lab asset assertion", "Conflict"]];
function ConsoleAside() {
  const NS = window.IdiomDesignSystem_c24a1d;
  return /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-strong",
    style: {
      marginBottom: 14
    }
  }, "Enterprise IAM v4.2"), /*#__PURE__*/React.createElement(NS.ResidualPanel, {
    covers: 38,
    residual: 7,
    attestation: 2,
    lastAssessed: "Jul 30",
    evidence: "Restricted \u2014 result reusable",
    actions: /*#__PURE__*/React.createElement(NS.Button, null, "Review applicability")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-strong",
    style: {
      marginBottom: 6
    }
  }, "Waiting on you"), WORK.map(w => /*#__PURE__*/React.createElement(NS.WorkRow, {
    key: w[0],
    title: w[0],
    kind: w[1],
    target: w[2],
    due: w[3],
    state: w[4],
    blocking: w[5] || undefined
  })), /*#__PURE__*/React.createElement(NS.Link, {
    href: "#",
    style: {
      display: "inline-block",
      marginTop: 16
    }
  }, "View all 23")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-strong",
    style: {
      marginBottom: 6
    }
  }, "Changed upstream"), UPSTREAM.map(u => /*#__PURE__*/React.createElement(NS.ListRow, {
    key: u[0],
    title: u[0],
    meta: u[1],
    trailing: /*#__PURE__*/React.createElement(NS.StateBadge, {
      state: u[2]
    })
  })), /*#__PURE__*/React.createElement(NS.Link, {
    href: "#",
    style: {
      display: "inline-block",
      marginTop: 16
    }
  }, "Review changes")));
}
Object.assign(__ds_scope, { ConsoleAside });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConsoleAside.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ConsoleCollection.jsx
try { (() => {
const ROWS = [["SC-07b.[01]", "Boundary protection at external interfaces of the Tactical Management Controller", null, "Unknown", "Aug 12"], ["SC-28(1)", "Data-at-rest protection on removable mission data stores", null, "Unknown", "Aug 9"], ["CA-03a.[01]", "Interconnection agreements executed for each external system connection", null, "Unknown", "Jul 12"], ["CM-06a.[02]", "Configuration settings applied and deviations documented per baseline GW-STD-11", "Network Eng", "Other than satisfied", "Aug 19"], ["RA-05a.[01]", "Vulnerability scanning performed on the air-gapped enclave at defined intervals", "Vuln Mgmt", "Other than satisfied", "Jul 15"], ["AC-17a.[01]", "Remote access methods documented, authorized and monitored across maintenance paths", "Enterprise VPN", "Reassessment required", "Yesterday"], ["SI-02c.[01]", "Flaw remediation within organization-defined response times for fielded firmware", "Firmware Eng", "Reassessment required", "Jul 27"], ["AC-02g.[01]", "Privileged account use monitored and reported per organization policy", "SOC", "Ready for review", "6h ago"], ["AC-06(1)", "Access to security functions restricted to explicitly authorized personnel", "Platform Security", "Ready for review", "Yesterday"], ["AU-12a.[02]", "Audit records generated for the events defined in AU-2 on all TMC subsystems", "SOC", "Awaiting response", "Aug 20"], ["IA-05(1)", "Password-based authenticator strength enforced at the enterprise identity provider", "Enterprise IAM", "Awaiting response", "Aug 15"], ["SC-08(1)", "Transmission confidentiality protected by cryptographic mechanisms on C2 links", "Comms Eng", "Insufficient information", "Aug 12"], ["MA-04a.[02]", "Nonlocal maintenance sessions approved, monitored and terminated on completion", "Field Support", "In progress", "Jul 18"], ["SR-05a.[01]", "Acquisition strategies applied to limit supply chain exposure for COTS boards", "Supply Chain", "Awaiting response", "Jul 9"], ["SI-04a.[01]", "Monitoring objectives defined for the TMC operational network segment", "SOC", "Planned", "Jul 27"]];
function ConsoleCollection({
  query
}) {
  const NS = window.IdiomDesignSystem_c24a1d;
  const [sel, setSel] = React.useState("AC-06(1)");
  const q = (query || "").toLowerCase();
  const rows = ROWS.filter(r => !q || (r[0] + " " + r[1] + " " + (r[2] || "") + " " + r[3]).toLowerCase().includes(q));
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(NS.FilterBar, {
    label: "Assessment cycle",
    value: "FY26 Q3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "metrics",
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(NS.Metric, {
    label: "Objectives in scope",
    value: "312",
    note: "from the effective profile"
  }), /*#__PURE__*/React.createElement(NS.Metric, {
    label: "Resolved by inheritance",
    value: "128",
    note: "6 packages, all current"
  }), /*#__PURE__*/React.createElement(NS.Metric, {
    label: "Residual local work",
    value: "184",
    note: "63 not yet started"
  }), /*#__PURE__*/React.createElement(NS.Metric, {
    label: "Unknown",
    value: "41",
    note: "14 without an owner"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "t-section",
    style: {
      marginTop: 44,
      marginBottom: 14
    }
  }, "Objectives determined, by month"), /*#__PURE__*/React.createElement(NS.LineChart, {
    min: 0,
    max: 220,
    height: 210,
    xLabels: ["Sep", "Nov", "Jan", "Mar", "May", "Jul", "Aug"],
    format: v => String(Math.round(v)),
    series: [{
      label: "Determined",
      points: [18, 34, 62, 88, 124, 168, 212]
    }, {
      label: "Inherited",
      points: [44, 58, 71, 96, 112, 124, 128]
    }, {
      label: "Unknown",
      points: [96, 88, 74, 66, 58, 47, 41]
    }]
  }), /*#__PURE__*/React.createElement("h2", {
    className: "t-section",
    style: {
      marginTop: 48,
      marginBottom: 14
    }
  }, "Needs determination"), rows.length === 0 ? /*#__PURE__*/React.createElement(NS.EmptyState, {
    title: "No objectives match this search",
    body: "Clear the search to see all 312 objectives in the effective profile, including the 128 resolved by inherited assurance.",
    action: /*#__PURE__*/React.createElement(NS.Button, null, "Clear search")
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NS.Table, {
    columns: [{
      label: "Objective",
      width: 118
    }, {
      label: "Statement"
    }, {
      label: "Owner",
      width: 170
    }, {
      label: "State",
      width: 170
    }, {
      label: "Updated",
      width: 100
    }]
  }, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r[0],
    className: sel === r[0] ? "on" : undefined,
    onClick: () => setSel(sel === r[0] ? null : r[0])
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
    className: "t-mono"
  }, r[0])), /*#__PURE__*/React.createElement("td", null, r[1]), /*#__PURE__*/React.createElement("td", null, r[2] || /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "Unassigned")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(NS.StateBadge, {
    state: r[3]
  })), /*#__PURE__*/React.createElement("td", {
    className: "t-micro"
  }, r[4])))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(NS.Pagination, {
    start: 1,
    end: rows.length,
    total: 184,
    label: "residual objectives"
  }))));
}
Object.assign(__ds_scope, { ConsoleCollection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConsoleCollection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ConsoleNav.jsx
try { (() => {
const GROUPS = [{
  label: null,
  items: [["home", "Home", "6"], ["org", "Organization", "23"], ["box", "Assets", "4,112"], ["lib", "Library", "57"]]
}, {
  label: "Delivery",
  items: [["lay", "Products & systems", "48"], ["clip", "Programs", "6"]]
}, {
  label: "Assurance work",
  items: [["inbox", "Assessments", "3"], ["flag", "Findings", "96"], ["shield", "Risks & POA&M", "9"]]
}];
function ConsoleNav({
  active,
  onSelect
}) {
  const NS = window.IdiomDesignSystem_c24a1d;
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("div", {
    className: "brand",
    style: {
      padding: "0 8px",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-mark"
  }, "PA"), /*#__PURE__*/React.createElement("div", {
    className: "brand-name"
  }, "Assurance")), GROUPS.map((g, i) => /*#__PURE__*/React.createElement(NS.NavGroup, {
    key: i,
    label: g.label || undefined
  }, g.items.map(it => /*#__PURE__*/React.createElement(NS.NavItem, {
    key: it[1],
    icon: /*#__PURE__*/React.createElement(NS.Icon, {
      name: it[0]
    }),
    label: it[1],
    count: it[2] || undefined,
    active: active === it[1],
    onClick: e => {
      e.preventDefault();
      onSelect && onSelect(it[1]);
    }
  })))));
}
Object.assign(__ds_scope, { ConsoleNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConsoleNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ConsoleScreen.jsx
try { (() => {
function ConsoleScreen() {
  const NS = window.IdiomDesignSystem_c24a1d;
  const [tab, setTab] = React.useState("Overview");
  const [nav, setNav] = React.useState("Programs");
  const [q, setQ] = React.useState("");
  const [why, setWhy] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(NS.ConsoleNav, {
    active: nav,
    onSelect: setNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement(NS.SearchInput, {
    placeholder: "Search objectives, assets, packages, findings",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(NS.IconButton, {
    label: "Help"
  }, /*#__PURE__*/React.createElement(NS.Icon, {
    name: "help"
  })), /*#__PURE__*/React.createElement(NS.IconButton, {
    label: "Notifications"
  }, /*#__PURE__*/React.createElement(NS.Icon, {
    name: "bell"
  })), /*#__PURE__*/React.createElement(NS.Avatar, {
    initials: "AN"
  })), /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(NS.ObjectHeader, {
    crumbs: [{
      label: "Programs",
      href: "#"
    }, {
      label: "Falcon product family",
      href: "#"
    }, {
      label: "Nighthawk"
    }],
    name: "Nighthawk",
    type: "Program",
    states: ["Active", "Reassessment required"],
    meta: [{
      label: "Program SSE",
      value: "A. Nkemelu"
    }, {
      label: "Profile",
      value: "ACME moderate, rev 5"
    }, {
      label: "Customer requirements",
      value: "CR-101 – CR-140"
    }, {
      label: "Control freeze",
      value: "Oct 5"
    }],
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NS.Button, {
      variant: "primary",
      icon: /*#__PURE__*/React.createElement(NS.Icon, {
        name: "plus",
        size: 15
      })
    }, "Record determination"), /*#__PURE__*/React.createElement(NS.Button, null, "Export SCTM")),
    onWhy: () => setWhy(true)
  })), /*#__PURE__*/React.createElement(NS.Tabs, {
    tabs: ["Overview", "Requirements & controls", "Inheritance", "Systems", "Assessments", "Findings", "Evidence"],
    active: tab,
    onChange: setTab,
    style: {
      marginTop: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "split",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(NS.ConsoleCollection, {
    query: q
  }), /*#__PURE__*/React.createElement(NS.ConsoleAside, null)))), why && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: () => setWhy(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "drawer"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-section"
  }, "Why is Nighthawk in reassessment?"), /*#__PURE__*/React.createElement("div", {
    className: "t-label",
    style: {
      marginTop: 2
    }
  }, "Program assurance state")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(NS.IconButton, {
    label: "Close",
    onClick: () => setWhy(false)
  }, /*#__PURE__*/React.createElement(NS.Icon, {
    name: "close"
  }))), /*#__PURE__*/React.createElement(NS.Provenance, {
    state: "Reassessment required",
    steps: [{
      label: "Falcon v6 reported a TPM change on Aug 19",
      detail: "PLM export said Model Z; the program engineer had confirmed Model Y"
    }, {
      label: "The conflict was resolved to Model Z on Aug 21",
      detail: "Hardware Engineering, with authority for component identity"
    }, {
      label: "The impact resolver found the Secure Boot dependency",
      detail: "Three objectives assert the TPM model directly"
    }, {
      label: "Those three objectives moved to Reassessment required",
      detail: "SI-07(1), SI-07a.[01], CM-06a.[02] · the other 309 stayed as they were"
    }],
    residual: "Nighthawk owns the reassessment. Enterprise IAM and PKI inheritance is untouched.",
    invalidatedBy: "A successful targeted reassessment of the three objectives, or a further change to the component identity.",
    authority: "Assessment lead \u2014 M. Okafor"
  }))));
}
Object.assign(__ds_scope, { ConsoleScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConsoleScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ObjectHeader = __ds_scope.ObjectHeader;

__ds_ns.Provenance = __ds_scope.Provenance;

__ds_ns.ResidualPanel = __ds_scope.ResidualPanel;

__ds_ns.SourceCompare = __ds_scope.SourceCompare;

__ds_ns.StateBadge = __ds_scope.StateBadge;

__ds_ns.UnknownItem = __ds_scope.UnknownItem;

__ds_ns.WorkRow = __ds_scope.WorkRow;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Link = __ds_scope.Link;

__ds_ns.KeyValue = __ds_scope.KeyValue;

__ds_ns.LineChart = __ds_scope.LineChart;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Notice = __ds_scope.Notice;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.NavGroup = __ds_scope.NavGroup;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ConsoleAside = __ds_scope.ConsoleAside;

__ds_ns.ConsoleCollection = __ds_scope.ConsoleCollection;

__ds_ns.ConsoleNav = __ds_scope.ConsoleNav;

__ds_ns.ConsoleScreen = __ds_scope.ConsoleScreen;

})();
