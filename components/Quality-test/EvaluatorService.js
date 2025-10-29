// EvaluatorService.js

export async function runPageSpeed(url, strategy = "mobile") {
  const resp = await fetch(`/api/pagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}`);
  const data = await resp.json();
  return data;
}

export function unifyMetrics(pagespeedData = {}, extras = {}) {
  const lighthouse = pagespeedData.lighthouseResult || {};
  const audits = lighthouse.audits || {};

  const performance = Math.round((lighthouse.categories?.performance?.score ?? 0) * 100);
  const accessibility = Math.round((lighthouse.categories?.accessibility?.score ?? 0) * 100);
  const seo = Math.round((lighthouse.categories?.seo?.score ?? 0) * 100);
  const bestPractices = Math.round((lighthouse.categories?.["best-practices"]?.score ?? 0) * 100);

  const usability = extras.usability ?? Math.round((accessibility + 80) / 2);
  const maintainability =
    extras.maintainability ?? Math.round((bestPractices + 70) / 2);
  const security = extras.security ?? (audits["mixed-content"] ? 80 : 90);

  const total = Math.round(
    (performance + accessibility + seo + bestPractices + usability + maintainability + security) / 7
  );

  return {
    performance,
    accessibility,
    seo,
    bestPractices,
    usability,
    maintainability,
    security,
    total,
    raw: pagespeedData,
  };
}