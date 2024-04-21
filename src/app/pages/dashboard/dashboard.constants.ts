import { InboundOption, Ranking } from "src/app/types";

export const RANKING_OPTIONS: Ranking[] = [
    { value: 'p75 millis', label: 'p75' },
    { value: 'p90 millis', label: 'p90' },
    { value: 'p95 millis', label: 'p95' },
    { value: 'p99 millis', label: 'p99' },
    { value: 'average duration millis', label: 'Duration (avg)' },
    { value: 'count', label: 'Count' },
    { value: 'rate (req/sec)', label: 'Rate (Avg)' },
    { value: 'maximal duration millis', label: 'Max. millis' },
    { value: 'frac_not_http_ok', label: 'HTTP not OK' },
    { value: 'frac_error_logs', label: 'Error logs' }
];

export const RANKING_METRICS = RANKING_OPTIONS.map(option => option.value);

export const DEFAULT_SCOPE = 'inbound';
export const DEFAULT_INBOUND_OPTION: InboundOption = { index: '*', display: 'All' }

export const MERMAID_CONFIG = {
    startOnLoad: false,
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'cardinal',
    },
    securityLevel: 'loose',
}